"use client";

import { createContext, useContext, useState, useCallback, useMemo } from "react";
import type { Locale, Dictionary } from "./types";
import { getDictionary } from "./dictionaries";
import { setLocaleCookie } from "./cookie";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  initialLocale,
  dictionary,
  children,
}: {
  initialLocale: Locale;
  dictionary: Dictionary;
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [dict, setDict] = useState<Dictionary>(dictionary);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleCookie(newLocale);
    setLocaleState(newLocale);
    setDict(getDictionary(newLocale));
  }, []);

  const value = useMemo(
    () => ({ locale, setLocale, t: dict }),
    [locale, setLocale, dict],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useTranslation must be used within LanguageProvider");
  return ctx;
}
