import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    if (email === adminEmail && password === adminPassword) {
      // Create a simple token (in production, use JWT)
      const token = Buffer.from(`${email}:${Date.now()}`).toString("base64");

      const response = NextResponse.json({
        success: true,
        message: "Login successful",
      });

      // Set an httpOnly cookie for session
      response.cookies.set("admin_session", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24, // 24 hours
        path: "/",
      });

      return response;
    }

    return NextResponse.json(
      { error: "Invalid email or password" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
