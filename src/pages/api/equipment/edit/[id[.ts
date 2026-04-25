import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import EquipmentModel from "@/models/Eqiementmodel";
import connectDB from "@/lib/db";

export default async function PUT(req: NextApiRequest, res: NextApiResponse) {
    
    await connectDB();

  
    const { id } = req.query;

    console.log("id from edit of equipment " , id);
  
      try {

        const data = req.body;

        console.log("DATA RECEIVED:", data);
  
        const updated = await EquipmentModel.findByIdAndUpdate(
          id,
          {
            name: data.name,
            type: data.type,
            available : data.availability,
            quantity : Number(data.quantity),
            price: Number(data.price), // ✅ FIXED
            location: data.location,  
            description: data.description,
            images: data.images, // ✅ FIXED (consistent name)
            enginepower: data.enginepower, // ✅ FIXED
            wheels: data.wheels, // ✅ FIXED (consistent name)
            fuel_type: data.FuelType, // ✅ FIXED (consistent name)
            Transmission: data.transmission, // ✅ FIXED (consistent name)
            Hydraulic_Flow: data.hydraulicFlow, // ✅ FIXED (consistent name)
            weight: data.weight, // ✅ FIXED (consistent name)
          },
          { new: true }
        );

        console.log("Saved to DB:", updated);
  
        // ✅ Update Elasticsearch
        await axios.put(
          `${process.env.NEXT_PUBLIC_ELASTIC_URL}/equipment/_doc/${id}`,
          {
            name: data.name,
  type: data.type,
  available : data.availability,
  price: Number(data.price),
  location: data.location,
  description: data.description,
  images: data.images, // ✅ correct field
          },
          {
            headers: {
              Authorization: `ApiKey ${process.env.NEXT_PUBLIC_ELASTIC_API_KEY}`,
            },
          }
        );
  
        return res.status(200).json({ success: true, data: updated });
  
      } catch (err) {
        return res.status(500).json({ success: false });
      }
    
  }