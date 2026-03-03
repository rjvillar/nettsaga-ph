"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n/context";

const valuesLayout = [
  {
    imgCols: "md:col-span-5 md:col-start-1",
    textCols: "md:col-span-5 md:col-start-8",
    imgSrc: "/assets/money-calculator.jpg",
    imgAlt: "Clean workspace representing transparent business practices",
    imgAspect: "aspect-[3/4]",
  },
  {
    imgCols: "md:col-span-5 md:col-start-8",
    textCols: "md:col-span-5 md:col-start-1 md:row-start-1",
    imgSrc: "/assets/lights-speed.jpg",
    imgAlt: "Dynamic workspace representing speed and efficiency",
    imgAspect: "aspect-[4/3]",
  },
  {
    imgCols: "md:col-span-6 md:col-start-1",
    textCols: "md:col-span-4 md:col-start-8",
    imgSrc: "/assets/happy-people.jpg",
    imgAlt: "Team collaborating in a warm natural-light setting",
    imgAspect: "aspect-[16/10]",
  },
  {
    imgCols: "md:col-span-6 md:col-start-7",
    textCols: "md:col-span-4 md:col-start-1 md:row-start-1",
    imgSrc: "/assets/filipino-smiling.jpg",
    imgAlt: "Open space representing freedom and flexibility",
    imgAspect: "aspect-[3/4]",
  },
];

export default function AboutContent() {
  const { t } = useTranslation();

  return (
    <>
      <Header solid />

      {/* ── Hero ── */}
      <section className="bg-grain relative bg-dark pt-36 pb-16 sm:pb-16">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.05)_45%,rgba(255,255,255,0.08)_55%,rgba(255,255,255,0.03)_70%,transparent_85%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,rgba(0,0,0,0.4))]" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-heading text-[2.75rem] font-black leading-[0.98] tracking-tight pb-1 bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent sm:text-[3rem] sm:font-semibold sm:leading-[1.2] sm:tracking-[-0.02em] md:text-[3.75rem]">
            {t.about.hero.title}
            {t.about.hero.titleMuted}
          </h1>
        </div>

        <div className="relative z-10 mx-auto mt-12 w-full max-w-[100rem] px-6 md:px-12 lg:px-24 pb-6 sm:mt-16 sm:pb-10">
          <Image
            src="/assets/about-hero.jpg"
            alt="Nettsaga website mockup — modern, mobile-first design built for Filipino businesses"
            width={2060}
            height={1080}
            className="w-full rounded-2xl object-contain"
            priority
          />
        </div>
      </section>

      {/* ── Story ── */}
      <section className="relative bg-white">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 lg:px-24">
          {/* Problem — lead left, body right */}
          <div className="border-b border-dark/[0.06] py-20 sm:py-28">
            <div className="grid gap-6 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-7">
                <h3 className="font-heading text-[1.75rem] font-bold leading-[1.15] tracking-tight text-dark sm:text-[2.25rem] md:text-[3rem]">
                  {t.about.story.problem.lead}
                </h3>
              </div>
              <div className="self-end md:col-span-4 md:col-start-9">
                <p className="text-sm leading-relaxed text-slate sm:text-[0.9375rem]">
                  {t.about.story.problem.body}
                </p>
              </div>
            </div>
          </div>

          {/* Shift — lead right, body left */}
          <div className="border-b border-dark/[0.06] py-20 sm:py-28">
            <div className="grid gap-6 md:grid-cols-12 md:gap-8">
              <div className="self-end md:col-span-4 md:col-start-1 md:row-start-1">
                <p className="text-sm leading-relaxed text-slate sm:text-[0.9375rem]">
                  {t.about.story.shift.body}
                </p>
              </div>
              <div className="md:col-span-7 md:col-start-6 md:text-right">
                <h3 className="font-heading text-[1.75rem] font-bold leading-[1.15] tracking-tight text-dark sm:text-[2.25rem] md:text-[3rem]">
                  {t.about.story.shift.lead}
                </h3>
              </div>
            </div>
          </div>

          {/* Solution — centered, larger, the payoff */}
          <div className="py-20 sm:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="font-heading text-[1.75rem] font-bold leading-[1.1] tracking-tight text-dark sm:text-[2.25rem] md:text-[2.75rem]">
                {t.about.story.solution.lead}
              </h3>
              <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-slate sm:text-base">
                {t.about.story.solution.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values — editorial magazine spread ── */}
      <section className="bg-grain relative bg-dark py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.05)_45%,rgba(255,255,255,0.08)_55%,rgba(255,255,255,0.03)_70%,transparent_85%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,rgba(0,0,0,0.4))]" />

        <div className="relative z-10 mx-auto w-full max-w-[100rem] px-6 md:px-12 lg:px-24 space-y-10 md:space-y-0">
          {t.about.values.map((value, i) => {
            const layout = valuesLayout[i];
            return (
              <div
                key={i}
                className={`grid grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-8 ${i > 0 ? "md:mt-[-1.5rem]" : ""}`}
              >
                {/* Image */}
                <div
                  className={`${layout.imgCols} overflow-hidden rounded-xl border border-white/[0.06]`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={layout.imgSrc}
                    alt={layout.imgAlt}
                    className={`w-full object-cover ${layout.imgAspect} brightness-[0.85]`}
                  />
                </div>

                {/* Text */}
                <div className={`${layout.textCols} self-center`}>
                  <span className="font-mono text-sm text-white/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-heading text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.02em] bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent sm:text-[3.5rem] md:text-[4rem]">
                    {value.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── What We Deliver ── */}
      <section className="relative bg-paper py-20 sm:py-28">
        <div className="relative mx-auto w-full max-w-[100rem] px-6 md:px-12 lg:px-24">
          <div className="mb-16 sm:mb-20 text-center">
            <h2 className="mx-auto max-w-3xl font-heading text-[1.75rem] font-semibold leading-[1.15] tracking-[-0.02em] bg-gradient-to-b from-dark to-dark/40 bg-clip-text text-transparent sm:text-[2.5rem] md:text-[3rem]">
              {t.about.deliver.title}
              {t.about.deliver.titleMuted}
            </h2>
          </div>

          <div className="grid md:grid-cols-3">
            {t.about.deliver.cards.map((card, i) => (
              <div
                key={i}
                className={`text-center px-6 sm:px-10 ${i > 0 ? "border-t border-dark/[0.08] pt-8 md:border-t-0 md:border-l md:pt-0" : ""} ${i < 2 ? "pb-8 md:pb-0" : ""}`}
              >
                <h3 className="font-heading text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.02em] text-dark sm:text-[2.25rem] md:text-[2.75rem]">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-dark py-20 sm:py-28">
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
                  {t.about.cta.title}
                  <span>{t.about.cta.titleMuted}</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/50 sm:text-base">
                  {t.about.cta.subtitle}
                </p>
              </div>

              <a
                href="/careers"
                className="shrink-0 rounded-md bg-white px-8 py-3.5 text-sm font-semibold tracking-wide text-dark transition-opacity hover:opacity-90"
              >
                {t.about.cta.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
