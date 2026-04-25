import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/db";
import Bookingmodel from "@/models/Bookingmodel";
import Usermodel from "@/models/Usermodel";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log("BOOKING API HIT");

  await dbConnect();

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const userId = req.headers["x-user-id"] as string;

    const user = await Usermodel.findById(userId);

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const {
      name,
      images,
      start_date,
      end_date,
      price,
      days,
      totalprice,
      tax,
      subtotal,
    } = req.body;

    // ✅ FIX: Set proper start & end dates
    const start = new Date(start_date);

    const end = new Date(end_date);
    end.setHours(23, 59, 59, 999); // 🔥 IMPORTANT FIX

    const booking = await Bookingmodel.create({
      userId,
      username: user?.name || "User", // ✅ ADD THIS LINE
      name,
      images,
      start_date: start,
      end_date: end,
      price,
      days,
      subtotal,
      tax,
      totalprice,
    });

    console.log("USER FOUND:", user?.name);

    return res.status(200).json({
      success: true,
      data: booking,
    });
  } catch (error: any) {
    console.error("Booking error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
