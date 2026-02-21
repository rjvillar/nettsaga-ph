import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const peterTest = localFont({
  src: "./fonts/Peter-Test-Variable-Italic.ttf",
  variable: "--font-peter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nettsaga — Get Your Business Online This Week",
  description:
    "Professional websites for Philippine businesses. One fixed yearly fee covers your website, hosting, and support. Get online fast with Nettsaga.",
  metadataBase: new URL("https://nettsaga.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} ${peterTest.variable} antialiased`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
