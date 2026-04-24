
import connectDB from "@/lib/db";
import Usermodel from "@/models/Usermodel";
import { NextApiResponse } from "next";
import { NextApiRequest } from "next";
import jwt from "jsonwebtoken";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  try {
    const token = req.cookies.token; // ✅ get token from cookies

    if (!token) {
      return res.json({ success: false, message: "No token" });
    }

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    const userId = decoded.id;

    console.log("User ID from token:", userId);

    const user = await Usermodel.findById(userId);

    if (!user) {
      return res.json({ success: false, message: "user not found" });
    }

    res.json({
      success: true,
      userdata: {
        _id: user._id,
        name: user.name,
        email: user.email,
        profilePic: user.profilePic,
      },
    });
  } catch (error) {
    res.json({ success: false, message: error });
  }
}