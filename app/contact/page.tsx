import type { Metadata } from "next";
import { getLocaleFromCookie } from "@/lib/i18n/cookie";
import { getDictionary } from "@/lib/i18n/dictionaries";
import ContactContent from "./ContactContent";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromCookie();
  const dict = getDictionary(locale);
  return {
    title: dict.metadata.contact.title,
    description: dict.metadata.contact.description,
  };
}

export default function ContactPage() {
  return <ContactContent />;
}
