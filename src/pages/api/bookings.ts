import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/lib/db";
import Booking from "@/models/Booking";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

if (req.method === "GET") {
  try {
    await connectDB();

    const { email } = req.query;

    const bookings = await Booking.find({
      userEmail: email,
    });

    return res.status(200).json(bookings);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching bookings" });
  }
}

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await connectDB();

    const { userEmail, items, subtotal, tax, grandTotal } = req.body;

    const newBooking = await Booking.create({
      userEmail,
      items,
      subtotal,
      tax,
      grandTotal,
    });

    res.status(200).json({ message: "Booking saved", booking: newBooking });
    console.log("BODY:", req.body)
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
    console.log("ERROR:", error);
  }
}
