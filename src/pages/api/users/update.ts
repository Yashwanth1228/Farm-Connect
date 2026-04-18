import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/lib/db";
import Usermodel from "@/models/Usermodel";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("🔥 UPDATE API HIT"); // IMPORTANT DEBUG

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await connectDB();

    const { email, profilePic } = req.body;

    console.log("DATA:", email, profilePic);

    if (!email || !profilePic) {
      return res.status(400).json({ message: "Missing data" });
    }

    const updatedUser = await Usermodel.findOneAndUpdate(
      { email },
      { $set: { profilePic } },
      { new: true }
    );

    return res.status(200).json(updatedUser);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
}