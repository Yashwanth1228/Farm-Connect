import connectDB from "@/lib/db";
import EquipmentModel from "@/models/Eqiementmodel";
import { NextApiResponse } from "next";
import { NextApiRequest } from "next";


export default async function GET(
    req: NextApiRequest,
    res: NextApiResponse
) {

    connectDB();

    const { id } = req.query;
    console.log("ID received in API route:", id);
    // res.json({ success: true, message: `Received ID: ${id}` });
    try{
        const allequipment = await EquipmentModel.findById(id);
        res.json({
            success : "true",
            data: allequipment,
        })
    }
    catch(error){
        res.json({ success : false , message : error})
    }
}