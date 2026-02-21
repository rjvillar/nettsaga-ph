import type { Locale } from "./types";
import { defaultLocale } from "./dictionaries";

export async function getLocaleFromCookie(): Promise<Locale> {
  try {
    const { cookies } = await import("next/headers");
    const cookieStore = await cookies();
    const value = cookieStore.get("locale")?.value;
    if (value === "en" || value === "fil") return value;
  } catch {
    // cookies() may throw outside of a request context
  }
  return defaultLocale;
}

export function setLocaleCookie(locale: Locale) {
  document.cookie = `locale=${locale};path=/;max-age=31536000;SameSite=Lax`;
}
