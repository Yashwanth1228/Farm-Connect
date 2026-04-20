import type { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import { v2 as cloudinary } from "cloudinary";

export const config = {
  api: {
    bodyParser: false,
  },
};

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET!,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const form = formidable({ multiples: true });
  console.log("the cloud name is ", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME) ;
  console.log("the api key is ", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY) ;
  console.log("the api secret is ", process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET) ;

  form.parse(req, async (err, fields, files: any) => {
    if (err) return res.status(500).json({ error: "Upload error" });

    try {
      let images = files.images;

      if (!Array.isArray(images)) {
        images = [images];
      }

      const urls: string[] = [];

      for (const file of images) {
        const result = await cloudinary.uploader.upload(file.filepath, {
          folder: "farm-connect",
        });

        urls.push(result.secure_url);
      }

      res.status(200).json({ urls });
    } catch (error) {
      res.status(500).json({ error: "Upload failed" });
    }
  });
}