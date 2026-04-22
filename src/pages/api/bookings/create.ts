import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/db"; // adjust if path differs
import Bookingmodel from "@/models/Bookingmodel";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("BOOKING API HIT");
  await dbConnect();

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const {
      name,
      images,
      start_date,
      end_date,
      price,
      days,
      totalprice,
    } = req.body;

    // ⚠️ TEMP: userId (we fix with JWT later)
    const userId = "TEMP_USER_ID";

    const booking = await Bookingmodel.create({
      userId,
      name,
      images,
      start_date: new Date(start_date),
      end_date: new Date(end_date),
      price,
      days,
      totalprice,
    });

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