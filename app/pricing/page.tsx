import type { Metadata } from "next";
import { getLocaleFromCookie } from "@/lib/i18n/cookie";
import { getDictionary } from "@/lib/i18n/dictionaries";
import PricingContent from "./PricingContent";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromCookie();
  const dict = getDictionary(locale);
  return {
    title: dict.metadata.pricing.title,
    description: dict.metadata.pricing.description,
  };
}

export default function PricingPage() {
  return <PricingContent />;
}
