"use client";

import { MessageCircle } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";

export default function CTABanner() {
  const { t } = useTranslation();

  return (
    <section
      id="cta"
      className="relative flex items-center bg-white py-6 sm:min-h-[calc(100vh-4rem)] sm:py-28"
    >
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="bg-grain relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-dark px-6 py-6 sm:aspect-auto sm:min-h-[75vh] sm:px-12 sm:py-0">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.07)_45%,rgba(255,255,255,0.12)_55%,rgba(255,255,255,0.05)_70%,transparent_85%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_55%_at_68%_42%,rgba(255,255,255,0.10),transparent)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,rgba(0,0,0,0.5))]" />

          <div className="relative z-20 mx-auto max-w-xl text-center">
            <h2 className="font-heading text-2xl font-bold leading-tight tracking-tight text-white sm:text-[2.5rem]">
              {t.ctaBanner.title}
              <span className="text-white/50">{t.ctaBanner.titleMuted}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-white/50 sm:text-[1.375rem]">
              {t.ctaBanner.subtitle}
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold tracking-wide text-dark transition-colors hover:bg-white/90"
            >
              <MessageCircle className="h-4 w-4" />
              {t.ctaBanner.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
