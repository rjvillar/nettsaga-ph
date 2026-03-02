"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n/context";

export default function CTABanner() {
  const { t } = useTranslation();

  return (
    <section id="cta" className="relative overflow-hidden bg-dark py-20 sm:py-28">
      <Image
        src="/assets/cta-bg.jpg"
        alt=""
        fill
        className="object-cover opacity-20"
        sizes="100vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/40" />

      <div className="relative z-10 mx-auto w-full max-w-[100rem] px-6 md:px-12 lg:px-24">
        <div className="rounded-xl border border-white/[0.08] bg-white/[0.06] px-8 py-12 backdrop-blur-sm sm:px-16 sm:py-16 md:px-20">
          <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div className="max-w-xl">
              <h2 className="font-heading text-3xl font-semibold leading-tight tracking-[-0.02em] bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent sm:text-4xl md:text-[3rem]">
                {t.ctaBanner.title}
                <span>{t.ctaBanner.titleMuted}</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/50 sm:text-base">
                {t.ctaBanner.subtitle}
              </p>
            </div>

            <a
              href="/contact"
              className="shrink-0 rounded-md bg-white px-8 py-3.5 text-sm font-semibold tracking-wide text-dark transition-opacity hover:opacity-90"
            >
              {t.ctaBanner.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
