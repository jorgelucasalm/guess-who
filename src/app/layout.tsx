import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Guess Who",
  description: "Cara a cara",
};

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={''}>
        {children}
      </body>
    </html>
  );
}
