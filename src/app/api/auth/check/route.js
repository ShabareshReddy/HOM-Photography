import { NextResponse } from "next/server";

export async function GET(request) {
  const session = request.cookies.get("admin_session");

  if (session && session.value) {
    return NextResponse.json({ authenticated: true });
  }

  return NextResponse.json({ authenticated: false }, { status: 401 });
}
