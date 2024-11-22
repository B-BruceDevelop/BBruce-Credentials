
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
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`h-screen w-full antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
