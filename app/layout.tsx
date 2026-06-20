import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "ForexInfo — Website Informasi Foreign Exchange",
    template: "%s | ForexInfo",
  },
  description:
    "ForexInfo adalah website informasi lengkap seputar pasar Foreign Exchange (Forex). Pelajari edukasi forex, analisis teknikal, dan pantau grafik harga secara real-time.",
  keywords: [
    "forex",
    "foreign exchange",
    "trading",
    "edukasi forex",
    "analisis teknikal",
    "grafik harga",
    "mata uang",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased bg-background text-foreground font-sans">
        <Navbar />
        {/* Spacer for fixed navbar */}
        <div className="pt-16 md:pt-[72px]" />
        <main className="min-h-[calc(100vh-72px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
