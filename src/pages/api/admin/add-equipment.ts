import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import EquipmentModel from "@/models/Eqiementmodel";
import connectDB from "@/lib/db";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  try {
    const data = req.body;

    console.log("DATA RECEIVED:", data);

    // ✅ FIX 1: correct structure + types
    const formattedData = {
      name: data.name,
      type: data.Type,
      available : data.availability,
      quantity : Number(data.Quantity),
      price: Number(data.price), // ✅ FIXED
      location: data.location,  
      description: data.description,
      images: data.images, // ✅ FIXED (consistent name)
      enginepower: data.enginepower, // ✅ FIXED
      wheels: data.Wheels, // ✅ FIXED (consistent name)
      fuel_type: data.FuelType, // ✅ FIXED (consistent name)
      Transmission: data.Transmission, // ✅ FIXED (consistent name)
      Hydraulic_Flow: data.HydraulicFlow, // ✅ FIXED (consistent name)
      weight: data.weight, // ✅ FIXED (consistent name)
    };

    // ✅ Save to MongoDB
    const savedDoc = await EquipmentModel.create(formattedData);

    console.log("Saved to DB:", savedDoc);

    // ✅ FIX 2: Use MongoDB _id for ES
    const elasticData = {
  name: data.name,
  type: data.Type,
  available : data.availability,
  price: Number(data.price),
  location: data.location,
  description: data.description,
  images: data.images, // ✅ correct field
};

    // ✅ Send to Elasticsearch
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_ELASTIC_URL}/equipment/_doc/${savedDoc._id}`,
        elasticData,
        {
          headers: {
            Authorization: `ApiKey ${process.env.NEXT_PUBLIC_ELASTIC_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Saved to Elasticsearch ✅");
    } catch (err: any) {
      console.log("ELASTIC ERROR:", err.response?.data); // ✅ better logging
    }

    res.status(200).json(savedDoc);

  } catch (err) {
    console.log("API ERROR:", err);
    res.status(500).json({ error: "Failed" });
  }
}