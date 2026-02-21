import type { Metadata } from "next";
import { getLocaleFromCookie } from "@/lib/i18n/cookie";
import { getDictionary } from "@/lib/i18n/dictionaries";
import AboutContent from "./AboutContent";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocaleFromCookie();
  const dict = getDictionary(locale);
  return {
    title: dict.metadata.about.title,
    description: dict.metadata.about.description,
  };
}

const team = [
  {
    name: "Brendon Gocaj",
    role: "General Manager",
    email: "brendon@nettsaga.no",
    phone: "920 15 828",
    accent: "#22C55E",
  },
  {
    name: "Erling Mathias Staff",
    role: "Technical Lead",
    email: "erling@nettsaga.no",
    phone: "920 15 826",
    accent: "#22C55E",
  },
  {
    name: "Daniel Thrane",
    role: "Sales Manager",
    email: "daniel@nettsaga.no",
    phone: "920 15 834",
    accent: "#22C55E",
  },
  {
    name: "Seif Al-Saatie",
    role: "Key Account Manager",
    email: "seif@nettsaga.no",
    phone: "929 20 070",
    accent: "#22C55E",
  },
  {
    name: "Alban Gocaj",
    role: "Finance Manager",
    email: "alban@nettsaga.no",
    phone: "",
    accent: "#22C55E",
  },
  {
    name: "Jorgen Holtan",
    role: "Customer Advisor",
    email: "joergen@nettsaga.no",
    phone: "",
    accent: "#22C55E",
  },
  {
    name: "Nicklas Gromsrud",
    role: "Customer Advisor",
    email: "nicklas@nettsaga.no",
    phone: "",
    accent: "#22C55E",
  },
  {
    name: "Fredrik Nelvik",
    role: "Customer Advisor",
    email: "fredrik@nettsaga.no",
    phone: "",
    accent: "#22C55E",
  },
];

export default function AboutPage() {
  return <AboutContent team={team} />;
}
