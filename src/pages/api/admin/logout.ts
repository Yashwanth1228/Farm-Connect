import { NextApiRequest, NextApiResponse } from "next";

export default async function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {

    const cookie =
      "token=; HttpOnly; Path=/; Max-Age=0; SameSite=" +
      (process.env.NODE_ENV === "production" ? "none; Secure" : "strict");

    res.setHeader("Set-Cookie", cookie);

    return res.status(200).json({ success: true });

  } catch (error) {
    return res.status(500).json({ success: false });
  }
}