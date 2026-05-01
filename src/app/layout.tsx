import type { Metadata } from "next";
import { inter, azeretMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Athilla Zaidan — AI Engineer & Fullstack Developer",
  description:
    "Portfolio of Athilla Zaidan, AI Engineer and Fullstack Developer. Building intelligent systems from models to deployment.",
  openGraph: {
    title: "Athilla Zaidan — AI Engineer & Fullstack Developer",
    description:
      "Portfolio of Athilla Zaidan, AI Engineer and Fullstack Developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${azeretMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}