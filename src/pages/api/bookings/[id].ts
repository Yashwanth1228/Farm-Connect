import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/lib/db";
import BookingModel from "@/models/Bookingmodel";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();

  const { id } = req.query;

  try {
    /* ================= GET (Single Booking) ================= */
    if (req.method === "GET") {
      const booking = await BookingModel.findById(id);

      if (!booking) {
        return res.status(404).json({
          success: false,
          message: "Booking not found",
        });
      }

      return res.status(200).json({
        success: true,
        data: booking,
      });
    }

    /* ================= PUT (Update Status) ================= */
    if (req.method === "PUT") {
      const { status } = req.body;

      const updatedBooking = await BookingModel.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );

      if (!updatedBooking) {
        return res.status(404).json({
          success: false,
          message: "Booking not found",
        });
      }

      return res.status(200).json({
        success: true,
        data: updatedBooking,
      });
    }

    /* ================= METHOD NOT ALLOWED ================= */
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}