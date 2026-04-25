import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import EquipmentModel from "@/models/Eqiementmodel";
import connectDB from "@/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();

  const { id } = req.query;

  console.log("ID received:", id);

  /* ================= GET (FETCH SINGLE EQUIPMENT) ================= */
  if (req.method === "GET") {
    try {
      const equipment = await EquipmentModel.findById(id);

      if (!equipment) {
        return res.status(404).json({ success: false, message: "Not found" });
      }

      return res.status(200).json({
        success: true,
        data: equipment,
      });

    } catch (error) {
      console.error("GET ERROR:", error);
      return res.status(500).json({ success: false, message: "Server error" });
    }
  }

  /* ================= PUT (UPDATE EQUIPMENT) ================= */
  if (req.method === "PUT") {
    try {
      const data = req.body;

      console.log("DATA RECEIVED:", data);

      const updated = await EquipmentModel.findByIdAndUpdate(
        id,
        {
          name: data.name,
          type: data.type,
          available: data.availability === "true", // ✅ convert to boolean
          quantity: Number(data.quantity),
          price: Number(data.price),
          location: data.location,
          description: data.description,
          images: data.images,
          enginepower: data.enginepower,
          wheels: data.wheels,
          fuel_type: data.FuelType,
          Transmission: data.transmission,
          Hydraulic_Flow: data.hydraulicFlow,
          weight: data.weight,
        },
        { new: true }
      );

      if (!updated) {
        return res.status(404).json({ success: false, message: "Not found" });
      }

      console.log("Updated in DB:", updated);

      /* ===== UPDATE ELASTICSEARCH ===== */
      try {
        await axios.put(
          `${process.env.NEXT_PUBLIC_ELASTIC_URL}/equipment/_doc/${id}`,
          {
            name: data.name,
            type: data.type,
            available: data.availability,
            price: Number(data.price),
            location: data.location,
            description: data.description,
            images: data.images,
          },
          {
            headers: {
              Authorization: `ApiKey ${process.env.NEXT_PUBLIC_ELASTIC_API_KEY}`,
            },
          }
        );

        console.log("Updated in Elasticsearch ✅");

      } catch (err: any) {
        console.log("ELASTIC ERROR:", err.response?.data);
      }

      return res.status(200).json({
        success: true,
        data: updated,
      });

    } catch (error) {
      console.error("PUT ERROR:", error);
      return res.status(500).json({ success: false, message: "Update failed" });
    }
  }

  /* ================= METHOD NOT ALLOWED ================= */
  return res.status(405).json({ message: "Method not allowed" });
}