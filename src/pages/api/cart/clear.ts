import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/db";
import CartModel from "@/models/Cartmodel";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await dbConnect();

  if (req.method !== "DELETE") {
    return res.status(405).json({ success: false });
  }

  await CartModel.deleteMany();

  res.json({ success: true });
}
