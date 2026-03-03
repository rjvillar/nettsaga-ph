"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n/context";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="bg-grain relative flex min-h-svh flex-col justify-center overflow-hidden bg-dark pt-28 pb-4 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.07)_45%,rgba(255,255,255,0.12)_55%,rgba(255,255,255,0.05)_70%,transparent_85%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_55%_at_68%_42%,rgba(255,255,255,0.10),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_60%_at_50%_0%,transparent_40%,rgba(0,0,0,0.45))]" />

      <div className="relative mx-auto w-full max-w-[100rem] px-6 md:px-12 lg:px-24">
        {/* ── Mobile / Tablet ── */}
        <div className="lg:hidden text-center">
          <h1 className="font-heading text-[2.75rem] font-black leading-[0.98] tracking-tight sm:text-[4rem]">
            <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
              {t.hero.title1}
            </span>
            <br />
            <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
              {t.hero.title2}
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-sm text-[0.875rem] leading-relaxed text-white/40 sm:max-w-sm sm:text-base">
            {t.hero.subtitle}
          </p>

          {/* Portrait + HUD */}
          <div className="relative mt-8 h-[42svh] min-h-[14rem]">
            {/* Green glow behind head */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_50%_35%,rgba(74,222,128,0.08),transparent)]" />

            {/* Live card — behind the girl */}
            <div className="absolute left-1 top-[18%] z-0 w-[10.8rem] overflow-hidden rounded-lg border border-white/[0.06] bg-white/80 opacity-50 blur-[0.3px] sm:left-6 sm:w-[10rem]">
              <Image
                src="/assets/live-card.png"
                alt={t.hero.altLiveCard}
                width={500}
                height={500}
                className="block w-full"
              />
            </div>

            {/* Person — no frame, on top of live card */}
            <div className="absolute inset-x-0 top-0 bottom-0 z-10 mx-auto w-[95%] sm:w-[65%]">
              <Image
                src="/assets/transparent-girl.png"
                alt={t.hero.altTablet}
                fill
                className="object-contain object-top drop-shadow-[0_0_40px_rgba(74,222,128,0.08)]"
                priority
              />
            </div>

            {/* Performance score — right, in front */}
            <div className="absolute right-1 top-[25%] z-20 w-[6.5rem] overflow-hidden rounded-lg border border-white/[0.08] bg-white/95 shadow-[0_8px_32px_rgba(0,0,0,0.4)] sm:right-6 sm:w-[7rem]">
              <Image
                src="/assets/performance-score.png"
                alt={t.hero.altPerformance}
                width={500}
                height={500}
                className="block w-full"
              />
            </div>

            {/* SSL badge — bottom center, in front */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 w-[9rem] overflow-hidden rounded-lg border border-white/[0.08] bg-white/95 shadow-[0_8px_32px_rgba(0,0,0,0.4)] sm:w-[9.5rem]">
              <Image
                src="/assets/ssl.png"
                alt={t.hero.altSSL}
                width={500}
                height={115}
                className="block w-full"
              />
            </div>
          </div>
        </div>

        {/* ── Desktop ── */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="max-w-2xl">
            <h1 className="font-heading text-[4.5vw] font-black leading-[1.08] tracking-tight mb-6">
              <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
                {t.hero.title1}
              </span>
              <br />
              <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
                {t.hero.title2}
              </span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
              {t.hero.subtitle}
            </p>
          </div>

          <div className="relative h-[35rem]">
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
      </div>
    </section>
  );
}
