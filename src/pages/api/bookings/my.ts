import { NextApiRequest,NextApiResponse } from "next";
import dbConnect from "@/lib/db";

import BookingModel from "@/models/Bookingmodel";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
  await dbConnect();

//   const user = await getSession(req, res);

const userId = req.headers['x-user-id'] as string | undefined;

console.log("this is userId from middleware", userId);


  if (!userId) {

    return res.status(401).json({ message: "Unauthorized" });
  }

  try {

    const bookings = await BookingModel.find({userId:userId});
    console.log("booking found " , bookings)


    res.json({ success : true, data: bookings });

  }
  catch(error) {
    res.json({ success : false , message : error})
  }

  
}