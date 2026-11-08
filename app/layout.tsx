
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keth Bibay | DevPortfolio",
  description: "My personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-[#080808] text-white`}
      >
        <Navbar />
        <main className="w-full min-h-[calc(100vh-130px)]">
          {children}
        </main>
      </body>
    </html>
  );
}
