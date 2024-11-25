// src/middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Verificar si la cookie de código de usuario existe
  const userCode = request.cookies.get("userCode")?.value;

  // Redirigir al login si no está autenticado y no está en "/"
  if (!userCode && request.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// Configurar las rutas protegidas
export const config = {
  matcher: [
    "/((?!api|_next|favicon.ico|login).*)", // Protege todas las rutas excepto las excluidas
  ],
};