import { NextResponse } from "next/server";
import { validCodes } from "@/lib/authConfig";

export async function POST(request: Request) {
  const body = await request.formData();
  const code = body.get("code");

  // Validar el código ingresado
  if (code && validCodes[code as keyof typeof validCodes]) {
    const userConfig = validCodes[code as keyof typeof validCodes];

    // Configurar cookie con información del usuario
    const response = NextResponse.redirect(new URL("/welcome", request.url));
    response.cookies.set("isAuthenticated", "true", {
      httpOnly: true,
      maxAge: 60 * 60 * 24, // 1 día
    });
    response.cookies.set("userConfig", JSON.stringify(userConfig.user), {
      httpOnly: true,
      maxAge: 60 * 60 * 24, // 1 día
    });
    return response;
  }

  // Si el código es inválido, redirigir con error
  const response = NextResponse.redirect(new URL("/", request.url));
  response.cookies.set("error", "Código inválido", { maxAge: 5 });
  return response;
}