import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Verificar si la cookie de autenticación existe
  const isAuthenticated = request.cookies.get("isAuthenticated");

  // Redirigir al login si no está autenticado y no está en "/"
  if (!isAuthenticated && request.nextUrl.pathname !== "/") {
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