import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.formData();
  const code = body.get("code");

  if (code === "MY_SECRET_CODE") {
    const response = NextResponse.redirect(new URL("/welcome", request.url));
    response.cookies.set("isAuthenticated", "true", {
      httpOnly: true,
      maxAge: 60 * 60 * 24, // 1 día
    });
    return response;
  }

  const response = NextResponse.redirect(new URL("/", request.url));
  response.cookies.set("error", "Invalid code", {
    httpOnly: true,
    maxAge: 5, // Cookie válida solo por 5 segundos
  });
  return response;
}