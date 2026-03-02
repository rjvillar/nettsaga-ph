import type { Metadata } from "next";
import { getLocaleFromCookie } from "@/lib/i18n/cookie";
import { getDictionary } from "@/lib/i18n/dictionaries";
import CareersContent from "./CareersContent";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromCookie();
  const dict = getDictionary(locale);
  return {
    title: dict.metadata.careers.title,
    description: dict.metadata.careers.description,
  };
}

export default function CareersPage() {
  return <CareersContent />;
}
