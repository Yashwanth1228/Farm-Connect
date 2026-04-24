import connectDB from "@/lib/db";
import EquipmentModel from "@/models/Eqiementmodel";
import { NextApiResponse } from "next";
import { NextApiRequest } from "next";


export default async function POST(
    req: NextApiRequest,
    res: NextApiResponse
) {

    connectDB();

    const { id } = req.query;
    
    console.log("ID received in API route of deleting equipment:", id);
    // res.json({ success: true, message: `Received ID: ${id}` });
    try{
        const deleteequipment = await EquipmentModel.findByIdAndDelete(id);

        console.log("delete equipment " , deleteequipment);

        if(deleteequipment) {

            res.json({
                success : true,
                message : "deleted successfully"
            })

        }
        else {
            res.json({success : "false" , message : "would not delete" })
        }


    }
    catch(error){
        res.json({ success : false , message : error})
    }
}