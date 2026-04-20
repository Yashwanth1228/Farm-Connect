import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import formidable from "formidable";
import cloudinary from "@/lib/cloudinary";

export const config = {
  api: { bodyParser: false },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  console.log("UPLOAD API HIT");

  const form = formidable({ multiples: false });

  form.parse(req, async (err, fields, files: any) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Upload error" });
    }

    try {
      const email = Array.isArray(fields.email)
        ? fields.email[0]
        : fields.email;

      console.log("EMAIL:", email);

      const file = files.image;

      console.log("FILE:", file);

      const result = await cloudinary.uploader.upload(file.filepath, {
        folder: "profile_pics",
      });

      console.log("CLOUDINARY RESULT:", result);

      const updatedUser = await User.findOneAndUpdate(
        { email },
        { $set: { profilePic: result.secure_url } },
        { new: true }
      );

      return res.status(200).json(updatedUser);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Server error" });
    }
  });
}