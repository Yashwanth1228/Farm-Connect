import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await connectDB();

    const { email } = req.query;

    const user = await User.findOne({ email });

    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ message: "Error fetching user" });
  }
}