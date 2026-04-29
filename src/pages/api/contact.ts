import connectDB from "@/lib/db";
import Contactmodel from "@/models/Contactmodel";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();

  try {
    /* ================= GET ================= */
    if (req.method === "GET") {
      const contacts = await Contactmodel.find().sort({ createdAt: -1 });

      return res.status(200).json({
        message: "Contacts fetched successfully",
        data: contacts,
      });
    }

    /* ================= POST ================= */
    if (req.method === "POST") {
      const { name, email, subject, message } = req.body;

      if (!name || !email || !subject || !message) {
        return res.status(400).json({
          message: "Please fill all the details",
        });
      }

      const newForm = await Contactmodel.create({
        name,
        email,
        subject,
        message,
      });

      return res.status(201).json({
        message: "Form submitted successfully",
        data: newForm,
      });
    }

    /* ================= METHOD NOT ALLOWED ================= */
    return res.status(405).json({
      message: "Method not allowed",
    });

  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error,
    });
  }
}