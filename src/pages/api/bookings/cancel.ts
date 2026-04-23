import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/db";
import Bookingmodel from "@/models/Bookingmodel";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method !== "DELETE") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { bookingId } = req.body;

    const userId = req.headers["x-user-id"] as string;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    // ✅ Make sure user can only delete their own booking
    const booking = await Bookingmodel.findOneAndDelete({
      _id: bookingId,
      userId: userId,
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found or not yours",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Booking cancelled successfully",
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}