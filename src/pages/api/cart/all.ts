import connectDB from "@/lib/db";
import cartmodel from "@/models/Cartmodel";
import { NextApiResponse } from "next";
import { NextApiRequest } from "next";


export default async function GET(
    req: NextApiRequest,
    res: NextApiResponse
) {
    connectDB();

    try {

        const allcarts = await cartmodel.find();

        console.log("saved to db " , allcarts);

        res.json({success : "true" , message : 'saved to database successfully' , data : allcarts })

    }
    catch(error) {
        res.json({success : "false" , message : "cannnot be added to database"})
    }

}