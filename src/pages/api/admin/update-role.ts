// /pages/api/admin/update-role.ts

import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/lib/db";
import Usermodel from "@/models/Usermodel";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  try {
    const { userId, role } = req.body;

    const updatedUser = await Usermodel.findByIdAndUpdate(
      userId,
      { role },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Role updated",
      user: updatedUser,
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to update role",
    });
  }
}