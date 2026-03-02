import type { Metadata } from "next";
import { getLocaleFromCookie } from "@/lib/i18n/cookie";
import { getDictionary } from "@/lib/i18n/dictionaries";
import PortfolioContent from "./PortfolioContent";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromCookie();
  const dict = getDictionary(locale);
  return {
    title: dict.metadata.portfolio.title,
    description: dict.metadata.portfolio.description,
  };
}

export default function PortfolioPage() {
  return <PortfolioContent />;
}
