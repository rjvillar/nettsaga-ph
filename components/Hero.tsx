"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n/context";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="bg-grain relative flex min-h-svh flex-col justify-center overflow-hidden bg-dark pt-28 pb-20 sm:min-h-0 sm:block sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.07)_45%,rgba(255,255,255,0.12)_55%,rgba(255,255,255,0.05)_70%,transparent_85%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_55%_at_68%_42%,rgba(255,255,255,0.10),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,rgba(0,0,0,0.5))]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-8">
        <div className="max-w-xl">
          <h1 className="font-heading text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
            {t.hero.title1}
            <br />
            {t.hero.title2}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/50 sm:text-lg">
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#how-it-works"
              className="btn-glow inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-medium tracking-wide text-dark transition-colors hover:bg-white/90"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="/contact"
              className="text-sm font-medium text-white/60 transition-colors duration-200 hover:text-white"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="mt-10 flex justify-center lg:hidden">
          <div className="relative h-[300px] w-[300px] overflow-hidden rounded-3xl border border-white/5">
            <Image
              src="/assets/person-tablet.png"
              alt={t.hero.altTablet}
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="relative hidden h-[560px] lg:block">
          <div className="absolute left-1/2 top-1/2 z-20 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-white/5">
            <Image
              src="/assets/person-tablet.png"
              alt={t.hero.altTablet}
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -left-6 bottom-2 z-10 h-[190px] w-[190px] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/assets/person-laptop.png"
              alt={t.hero.altLaptop}
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -right-6 top-0 z-10 h-[190px] w-[190px] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/assets/person-smiling.png"
              alt={t.hero.altSmiling}
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute bottom-[30px] right-[-60px] z-30 w-[220px] overflow-hidden rounded-xl border border-white/10 bg-white">
            <Image
              src="/assets/live-card.png"
              alt={t.hero.altLiveCard}
              width={500}
              height={500}
              className="block w-full"
            />
          </div>

          <div className="absolute left-[10px] top-[150px] z-30 w-[150px] overflow-hidden rounded-xl border border-white/10 bg-white">
            <Image
              src="/assets/ssl.png"
              alt={t.hero.altSSL}
              width={500}
              height={115}
              className="block w-full"
            />
          </div>

          <div className="absolute left-[220px] top-[-15px] z-30 w-[124px] overflow-hidden rounded-xl border border-white/10 bg-white">
            <Image
              src="/assets/performance-score.png"
              alt={t.hero.altPerformance}
              width={500}
              height={500}
              className="block w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
