import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spikes - Bienvenue !",
  description: "Challenge gratuit de Spikes par @0xEzis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Cet import permet d'utiliser la police Aeonik Pro Medium */}
        <link
          href="https://db.onlinewebfonts.com/c/81c9cfcec66a1bb46e90e184f4d04641?family=Aeonik+Pro+Medium"
          rel="stylesheet"
        ></link>
      </head>
      <body className={`${inter.className} antialiased bg-background`}>
        {children}
      </body>
    </html>
  );
}
