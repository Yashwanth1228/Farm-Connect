
import connectDB from "@/lib/db";
import Usermodel from "@/models/Usermodel";
import { NextApiResponse } from "next";
import { NextApiRequest } from "next";
import jwt from "jsonwebtoken";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  try{

      const userId = req.headers['x-user-id'] as string | undefined;

      console.log("this is userId from middleware", userId);

      if (!userId) {
          return res.json({ success: false, message: "user ID is missing" });
      }

      const user = await Usermodel.findById(userId);

      console.log("user name found of id ", user.name)

      if (!user) {
          return res.json({ success: false, message: "user not found" });
      }

      if (user.role === "admin") {
          return res.json({
              success: false,
              message: "Access denied, Admin only"
          });
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