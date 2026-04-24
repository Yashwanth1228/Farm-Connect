import { NextApiRequest,NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import Usermodel from "@/models/Usermodel";
import connectDB from "@/lib/db";



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    if(req.method !=="POST"){
        res.status(405).json({message:"Method not allowed"})
      }

    await connectDB();

    const {name,email,password} = req.body;

    if(!name||!email||!password) {
        return res.json({success : false , message: "Missing details"});
    }
    
    try{    
        const existingUser = await Usermodel.findOne({email});
        if(existingUser) {
            return res.json({success : false , message: "user already exists"});
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const user = await Usermodel.create({name,email,password:hashedPassword})
        

        // const token = jwt.sign({id : user._id}, process.env.jwt_SECRET, { expiresIn : "7d",});

        // res.cookie("token", token, {
        //     httpOnly : true,
        //     secure: process.env.NODE_ENV === "production",
        //     sameSite:process.env.NODE_ENV ==="production" ? "none" : "strict",
        //     maxAge : 7*24*60*60*1000,
        // });

        // console.log("NoDE_ENV",process.env.NODE_ENV);

        return res.json({success: true });

} catch(error) {
    res.json({success: false , message: error})
}
}