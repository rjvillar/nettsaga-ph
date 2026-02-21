import type { Locale, Dictionary } from "./types";
import en from "./en";
import fil from "./fil";

export const defaultLocale: Locale = "en";

const dictionaries: Record<Locale, Dictionary> = { en, fil };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
