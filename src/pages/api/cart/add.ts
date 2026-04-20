import connectDB from "@/lib/db";
import cartmodel from "@/models/Cartmodel";
import { NextApiResponse } from "next";
import { NextApiRequest } from "next";


export default async function POST(
    req: NextApiRequest,
    res: NextApiResponse
) {
    connectDB();
    const { data } = req.body;

    console.log("this is data recieved" , data);
    
    if(!data) {
        res.json({success : "false" , meassage : "no data recieved"})
    }
    

    try {

        const savedtocart = await cartmodel.create(data);

        console.log("saved to db " , savedtocart);

        res.json({success : "true" , message : 'saved to database successfully', data : {
            id : savedtocart. _id
        }})

    }
    catch(error) {
        res.json({success : "false" , message : "cannnot be added to database"})
        console.log("error" , error);
    }

}