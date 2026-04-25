import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import connectDB from "@/lib/db";
import EquipmentModel from "@/models/Eqiementmodel";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();

  const { id } = req.query;

  console.log("ID received for delete:", id);

  /* ================= DELETE ================= */
  if (req.method === "DELETE") {
    try {
      /* 🔥 DELETE FROM MONGODB */
      const deletedEquipment = await EquipmentModel.findByIdAndDelete(id);

      if (!deletedEquipment) {
        return res.status(404).json({
          success: false,
          message: "Equipment not found",
        });
      }

      console.log("Deleted from MongoDB:", deletedEquipment);

      /* 🔥 DELETE FROM ELASTICSEARCH */
      try {
        await axios.delete(
          `${process.env.NEXT_PUBLIC_ELASTIC_URL}/equipment/_doc/${id}`,
          {
            headers: {
              Authorization: `ApiKey ${process.env.NEXT_PUBLIC_ELASTIC_API_KEY}`,
            },
          }
        );

        console.log("Deleted from Elasticsearch ✅");

      } catch (err: any) {
        console.log(
          "ELASTIC DELETE ERROR:",
          err.response?.data || err.message
        );
        // ❗ Don't fail API if ES delete fails
      }

      return res.status(200).json({
        success: true,
        message: "Deleted successfully",
      });

    } catch (error) {
      console.log("DELETE ERROR:", error);
      return res.status(500).json({
        success: false,
        message: "Delete failed",
      });
    }
  }

  /* ================= METHOD NOT ALLOWED ================= */
  return res.status(405).json({ message: "Method not allowed" });
}