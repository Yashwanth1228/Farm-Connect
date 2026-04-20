import connectDB from "@/lib/db";
import EquipmentModel from "@/models/Eqiementmodel";
import { NextApiResponse } from "next";
import { NextApiRequest } from "next";


export default async function GET(
    req: NextApiRequest,
    res: NextApiResponse
) {
    connectDB();
    try{
        const allequipment = await EquipmentModel.find();
        res.json({
            success : "true",
            data: allequipment,
        })
    }
    catch(error){
        res.json({ success : false , message : error})
    }
}