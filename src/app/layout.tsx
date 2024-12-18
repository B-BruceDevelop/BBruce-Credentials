import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "B-Bruce Credentials",
  description: "B-Bruce's credentials",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`h-screen w-full antialiased bg-[#191919] text-white`}
      >
      
        {children}
      </body>
    </html>
  );
}


// 1.	Contenedor del Popup: El div con id="popup-container" asegura que cualquier popup que se renderice mediante ReactDOM.createPortal ocupe toda la pantalla.
// 	2.	Z-Index y Eventos: z-50 mantiene el popup encima de todo, y pointer-events-none evita interferencias con eventos si está vacío.
// 	3.	Estructura Limpia: IntroCodeValidator y children permanecen en su posición habitual.