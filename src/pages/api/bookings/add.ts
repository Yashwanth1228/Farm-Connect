import { NextApiRequest,NextApiResponse } from "next";
import dbConnect from "@/lib/db";

import BookingModel from "@/models/Bookingmodel";

export default async function POST(
    req: NextApiRequest,
    res: NextApiResponse
) {
  await dbConnect();

  const { data } = req.body;

  console.log("data recieved in booking",data)

  if (!data) {

    return res.status(401).json({ message: "no data recieved" });
  }

  try { 

    const bookings = await BookingModel.create(data);


    res.json({ success : true, message: "bookings added succesfully" });

  }
  catch(error) {
    res.json({ success : false , message : error})
  }

  
}