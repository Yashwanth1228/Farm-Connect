import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req.query;

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_ELASTIC_URL}/equipment/_search`,
      {
        query: {
          multi_match: {
            query,
            fields: ["name", "description", "location"],
            fuzziness: "AUTO"
          }
        }
      },
      {
        headers: {
          Authorization: `ApiKey ${process.env.NEXT_PUBLIC_ELASTIC_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    res.status(200).json(response.data.hits.hits);
  } catch (err) {
    res.status(500).json({ error: "Search failed" });
  }
}