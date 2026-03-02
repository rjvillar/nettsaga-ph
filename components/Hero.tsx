"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n/context";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="bg-grain relative flex min-h-svh flex-col justify-center overflow-hidden bg-dark py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.07)_45%,rgba(255,255,255,0.12)_55%,rgba(255,255,255,0.05)_70%,transparent_85%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_55%_at_68%_42%,rgba(255,255,255,0.10),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_60%_at_50%_0%,transparent_40%,rgba(0,0,0,0.45))]" />

      <div className="relative mx-auto grid w-full max-w-[100rem] items-center gap-12 px-6 md:px-12 lg:px-24 lg:grid-cols-2 lg:gap-8">
        <div className="max-w-2xl">
          <h1 className="font-heading text-[4.5vw] font-black leading-[1.08] tracking-tight text-white mb-6">
            {t.hero.title1}
            <br />
            {t.hero.title2}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            {t.hero.subtitle}
          </p>
        </div>

        <div className="mt-10 flex justify-center lg:hidden">
          <div className="relative h-[18.75rem] w-[18.75rem] overflow-hidden rounded-xl border border-white/5">
            <Image
              src="/assets/person-tablet.png"
              alt={t.hero.altTablet}
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="relative hidden h-[35rem] lg:block">
          <div className="absolute left-1/2 top-1/2 z-20 h-[21.25rem] w-[21.25rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-white/5">
            <Image
              src="/assets/person-tablet.png"
              alt={t.hero.altTablet}
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute left-0 bottom-4 z-10 h-[11.875rem] w-[11.875rem] overflow-hidden rounded-lg border border-white/10">
            <Image
              src="/assets/person-laptop.png"
              alt={t.hero.altLaptop}
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute right-0 top-2 z-10 h-[11.875rem] w-[11.875rem] overflow-hidden rounded-lg border border-white/10">
            <Image
              src="/assets/person-smiling.png"
              alt={t.hero.altSmiling}
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute bottom-[2rem] right-[-1.875rem] z-30 w-[13.75rem] overflow-hidden rounded-lg border border-white/10 bg-white">
            <Image
              src="/assets/live-card.png"
              alt={t.hero.altLiveCard}
              width={500}
              height={500}
              className="block w-full"
            />
          </div>

          <div className="absolute left-[1.5rem] top-[10rem] z-30 w-[9.375rem] overflow-hidden rounded-lg border border-white/10 bg-white">
            <Image
              src="/assets/ssl.png"
              alt={t.hero.altSSL}
              width={500}
              height={115}
              className="block w-full"
            />
          </div>

          <div className="absolute left-[13.125rem] top-[0.5rem] z-30 w-[7.75rem] overflow-hidden rounded-lg border border-white/10 bg-white">
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
