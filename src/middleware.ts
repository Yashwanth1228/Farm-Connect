import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req: NextRequest) {

  const token = req.cookies.get("token")?.value;

  console.log("token:", token);

  if (!token) {
    return NextResponse.json({
      success: false,
      message: "Unauthorized"
    });
  }

  try {

    const jwtSecret = process.env.jwt_SECRET;

    const secret = new TextEncoder().encode(jwtSecret);

    const { payload } = await jwtVerify(token, secret);

    console.log("decoded payload:", payload);

    if (!payload.id) {
      return NextResponse.json({
        success: false,
        message: "Invalid token"
      });
    }

    console.log("User ID:", payload.id);

    const requestHeaders = new Headers(req.headers);

    requestHeaders.set("x-user-id", payload.id as string);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },

    });

  } catch (error) {

    console.log("JWT ERROR:", error);

    return NextResponse.json({
      success: false,
      message: "Invalid or expired token"
    });

  }
}

export const config = {
  matcher: "/api/user/:path*"
};