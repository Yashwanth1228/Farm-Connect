
import connectDB from "@/lib/db";
import Usermodel from "@/models/Usermodel";
import { NextApiResponse } from "next";
import { NextApiRequest } from "next";
import jwt from "jsonwebtoken";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = req.cookies.token; // ✅ get token from cookies

<<<<<<< HEAD
export default async function GET(
    req: NextApiRequest,
    res: NextApiResponse
) {

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
            success : true,
            userdata: {
                name : user.name,
                email: user.email,
                profilePic : user.profilePic,
                role : user.role,
            },
        })

    } catch(error) {
        res.json({success: false, message: error})
=======
    if (!token) {
      return res.json({ success: false, message: "No token" });
>>>>>>> 4e8f6f0d9ea3f2ff7a9374d2b589b15c384e304e
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
        _id: user._id, // ✅ VERY IMPORTANT (you missed this earlier)
        name: user.name,
        email: user.email,
        profilePic: user.profilePic,
      },
    });
  } catch (error) {
    res.json({ success: false, message: error });
  }
}