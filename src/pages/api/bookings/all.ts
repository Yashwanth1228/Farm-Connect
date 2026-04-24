import { NextApiRequest,NextApiResponse } from "next";
import dbConnect from "@/lib/db";

import BookingModel from "@/models/Bookingmodel";

export default async function GET(
    req: NextApiRequest,
    res: NextApiResponse
) {
  await dbConnect();

  try { 

    const bookings = await BookingModel.find();

    res.json({ success : true, data : bookings  });

  }
  catch(error) {
    res.json({ success : false , message : error})
  }

  
}