import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/lib/db";
import Usermodel from "@/models/Usermodel";


export default async function getBookings(req: NextApiRequest, res: NextApiResponse) {
  
  
  try {
    await connectDB();
    
    const alluser = await Usermodel.find();

    return res.status(200).json({success : true , data : alluser });

  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
}