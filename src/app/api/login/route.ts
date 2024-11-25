// src/app/api/login/route.ts

import { NextResponse } from "next/server";
import { validCodes } from "@/lib/authConfig";

export async function POST(request: Request) {
  const body = await request.formData();
  const code = body.get("code");

  // Validar el código ingresado
  if (code && validCodes[code as string]) {
    // Configurar cookie con el código de usuario (no httpOnly)
    const response = NextResponse.redirect(new URL("/welcome", request.url));
    response.cookies.set("userCode", code.toString(), {
      maxAge: 60 * 60 * 24, // 1 día
    });
    return response;
  }

  // Si el código es inválido, redirigir con error
  const response = NextResponse.redirect(new URL("/", request.url));
  response.cookies.set("error", "Código inválido", { maxAge: 5 });
  return response;
}