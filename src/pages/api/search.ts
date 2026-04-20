// /pages/api/search.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@elastic/elasticsearch";

const client = new Client({
  node: process.env.NEXT_PUBLIC_ELASTIC_URL,
  auth: {
    apiKey: process.env.NEXT_PUBLIC_ELASTIC_API_KEY!,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { requestState } = req.body;
    const searchTerm = requestState.searchTerm || "";
    
    const filters = requestState.filters || [];

const esFilters: any[] = [];

filters.forEach((filter: any) => {
  if (filter.field === "type") {
    esFilters.push({
      term: {
        "type.keyword": filter.values[0],
      },
    });
  }

  if (filter.field === "price") {
    const range = filter.values[0];

    esFilters.push({
      range: {
        price: {
          gte: range.from,
          lte: range.to,
        },
      },
    });
  }
});

const result = await client.search({
  index: process.env.NEXT_PUBLIC_ELASTIC_INDEX,
  query: {
    bool: {
      must: [
        {
          multi_match: {
            query: searchTerm,
            fields: ["name", "description"],
          },
        },
      ],
      filter: esFilters, // ✅ THIS is what makes filters work
    },
  },
  aggs: {
    type: {
      terms: {
        field: "type.keyword",
      },
    },
    price: {
      range: {
        field: "price",
        ranges: [
          { from: 0, to: 100 },
          { from: 100, to: 500 },
          { from: 500 },
        ],
      },
    },
  },
});

    // ✅ Results mapping
    const formattedResults = result.hits.hits.map((hit: any, index: number) => ({
      id: { raw: hit._id || index },

      name: {
        raw: hit._source?.name ?? "No Name",
      },
      description: {
        raw: hit._source?.description ?? "",
      },
      type: {
        raw: hit._source?.type ?? hit._source?.category ?? "N/A",
      },
      category: {
        raw: hit._source?.category ?? hit._source?.type ?? "N/A",
      },
      price: {
        raw: hit._source?.price ?? 0,
      },
      images: {
        raw: hit._source?.images ?? [],
      },
    }));

    // ✅ Facets mapping (IMPORTANT FORMAT)
    const facets = {
      type: [
        {
          type: "value",
          data: ((result.aggregations?.type as any)?.buckets || []).map(
            (bucket: any) => ({
              value: bucket.key,
              count: bucket.doc_count,
            })
          ),
        },
      ],
      price: [
        {
          type: "range",
          data: ((result.aggregations?.price as any)?.buckets || []).map(
            (bucket: any) => ({
              value: {
                from: bucket.from ?? 0,
                to: bucket.to ?? 999999999,
              },
              from: bucket.from ?? 0,
              to: bucket.to ?? 999999999,
              name: `${bucket.from ?? 0} - ${bucket.to ?? "above"}`,
              count: bucket.doc_count,
            })
          ),
        },
      ],
    };

    
    res.json({
      results: formattedResults,
      totalResults: (result.hits.total as any).value,
      facets,
    });
  } catch (error: any) {
    console.error("🔥 SEARCH API ERROR:", error);
    res.status(500).json({ error: error.message });
  }
}