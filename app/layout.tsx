import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { LanguageProvider } from "@/lib/i18n/context";
import { getLocaleFromCookie } from "@/lib/i18n/cookie";
import { getDictionary } from "@/lib/i18n/dictionaries";

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

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromCookie();
  const dict = getDictionary(locale);
  return {
    title: dict.metadata.home.title,
    description: dict.metadata.home.description,
    metadataBase: new URL("https://regendigitalsolutions.com"),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocaleFromCookie();
  const dictionary = getDictionary(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if(window.location.hash){document.documentElement.style.overflow='hidden'}`,
          }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} ${peterTest.variable} antialiased`}
      >
        <SmoothScroll />
        <LanguageProvider initialLocale={locale} dictionary={dictionary}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
