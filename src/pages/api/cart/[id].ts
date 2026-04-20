import connectDB from "@/lib/db";
import cartmodel from "@/models/Cartmodel";
import { NextApiResponse } from "next";
import { NextApiRequest } from "next";


export default async function DELETE(
    req: NextApiRequest,
    res: NextApiResponse
) {
    connectDB();

    const { id } = req.query;

    console.log("this is data recieved from deleted route" , id);
    
    if(!id) {
        res.json({success : "false" , meassage : "no id recieved"})
    }
    

    try {

        const deletedcart = await cartmodel.deleteOne({ _id : id});

        console.log("deleted from db " , deletedcart);

        res.json({success : "true" , message : 'deleted from database successfully'})

    }
    catch(error) {
        res.json({success : "false" , message : "cannnot be added to database"})
        console.log("error" , error);
    }

}