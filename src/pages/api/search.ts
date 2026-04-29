  // /pages/api/search.ts
  import type { NextApiRequest, NextApiResponse } from "next";
  import { Client } from "@elastic/elasticsearch";

  const client = new Client({
    node: process.env.NEXT_PUBLIC_ELASTIC_URL,
    auth: {
      apiKey: process.env.NEXT_PUBLIC_ELASTIC_API_KEY!,
    },
  });

  export default async function handler(req : NextApiRequest, res : NextApiResponse) {
    try {
      const { requestState } = req.body;

      console.log("the request state", requestState);
  
      const page = requestState.current || 1;
      // const size = requestState.resultsPerPage || 5; // 👈 force fallback to 3
      const size = 3; // ✅ HARD LOCK
  
      const from = (page - 1) * size;
  
      const searchTerm = requestState?.searchTerm || "";
  
      const filters = requestState.filters || [];
      const esFilters: any[] = [];
  
      filters.forEach((filter: any) => {
        if (filter.field === "type") {
          esFilters.push({
            term: { "type.keyword": filter.values[0] },
          });
        }
  
        if (filter.field === "price") {
          const range = filter.values[0];
  
          const rangeQuery: any = {};
          if (range.from !== undefined) rangeQuery.gte = range.from;
          if (range.to !== undefined) rangeQuery.lte = range.to;
  
          esFilters.push({
            range: { price: rangeQuery },
          });
        }
      });
  
      const result = await client.search({
        index: process.env.NEXT_PUBLIC_ELASTIC_INDEX,
        from,
        size,
        body: {
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
              filter: esFilters,
            },
          },
          aggs: {
            type: {
              terms: { field: "type.keyword" },
            },
            price: {
              range: {
                field: "price",
                ranges: [
                  { from: 0, to: 5000 },
                  { from: 5000, to: 10000 },
                  { from: 10000, to: 20000 },
                ],
              },
            },
          },
        },
      });
  
      const formattedResults = result.hits.hits.map((hit: any, index: number) => ({
        id: { raw: hit._id || index },
        name: { raw: hit._source?.name ?? "No Name" },
        description: { raw: hit._source?.description ?? "" },
        type: { raw: hit._source?.type ?? "N/A" },
        category: { raw: hit._source?.category ?? "N/A" },
        price: { raw: hit._source?.price ?? 0 },
        images: { raw: hit._source?.images ?? [] },
        available: { raw: hit._source?.available ?? false },
      }));
  
      const total = (result.hits.total as any).value;
      console.log("TOTAL:", total);
      console.log("HITS LENGTH:", result.hits.hits.length);

      const totalPages = Math.ceil(total / size);

  
      const facets = {
        type: [
          {
            type: "value",
            data: (result.aggregations?.type as any)?.buckets.map((b: any) => ({
              value: b.key,
              count: b.doc_count,
            })) || [],
          },
        ],
        price: [
          {
            type: "range",
            data: (result.aggregations?.price as any)?.buckets.map((b: any) => ({
              value: { from: b.from ?? 0, to: b.to ?? 999999 },
              count: b.doc_count,
            })) || [],
          },
        ],
      };

      // console.log("tptalResults " , total)
  
      res.json({
        results: formattedResults,
        totalResults: total,
        facets,
        totalPages, // ✅ ADD THIS
        
      });

      const response = {
        results: formattedResults,
        totalResults: total,
        facets,
        totalPages, // ✅ ADD THIS

      }

      console.log("response from serch api " , response)
  
    } catch (error: any) {
      console.error("🔥 SEARCH API ERROR:", error);
      res.status(500).json({ error: error.message });
    }
  }