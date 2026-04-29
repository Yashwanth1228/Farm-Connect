import connectDB from "@/lib/db";
import Contactmodel from "@/models/Contactmodel";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();

  const { id } = req.query;
  const { isRead } = req.body;

  try {
    if (req.method === "PATCH") {
        const updated = await Contactmodel.findByIdAndUpdate(
            id,
            { isRead },
            { new: true }
          );
      
          res.json({
            success: true,
            message: isRead ? "Marked as read" : "Marked as unread",
            data: updated,
          });
        }
    if (req.method === "DELETE") {
      await Contactmodel.findByIdAndDelete(id);

      return res.status(200).json({
        message: "Deleted successfully",
      });
    }

    return res.status(405).json({ message: "Method not allowed" });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
}