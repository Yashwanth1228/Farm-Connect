import { NextApiRequest,NextApiResponse } from "next";
import Usermodel from "@/models/Usermodel";
import bcrypt from "bcryptjs";
import { SignJWT } from 'jose';
import connectDB from "@/lib/db";


export default async function POST(
    req: NextApiRequest,
    res: NextApiResponse
) {

    await connectDB();

    const {email,password} = req.body;

    if(!email||!password) {
        return res.json({success : false , message: "Email and Password are required"});
    }

    try {
        const user = await Usermodel.findOne({email});

        if(!user){
            return res.json({success: false , message: "invalid email"});
        }

        const ismatch = await bcrypt.compare(password,user.password);

        if(!ismatch) {
            return res.json({success: false, message:"invalid password"});
        }

                const jwtSecret = process.env.jwt_SECRET;

                if (!jwtSecret) {
                    return res.status(500).json({ success: false, message: "JWT secret is not defined" });
                }

                const token = await new SignJWT({ id: user._id.toString()  })
                .setProtectedHeader({ alg: "HS256" })
                .setIssuedAt()
                .setExpirationTime("7d")
                .sign(new TextEncoder().encode(jwtSecret));

                res.setHeader("Set-Cookie", `token=${token}; HttpOnly;  Path=/; Max-Age=${7 * 24 * 60 * 60}; ${process.env.NODE_ENV === "production" ? "Secure; SameSite=None;" : "SameSite=Strict;"}`);
        

        return res.json({success: true , message: "Login successful"});
    }
    catch(error) {
        res.json({success: false , message : error});
    }
}