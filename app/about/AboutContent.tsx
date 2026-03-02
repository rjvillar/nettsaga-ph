"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import ServiceStack from "@/components/ServiceStack";
import BuildPipeline from "@/components/BuildPipeline";
import StatusPanel from "@/components/StatusPanel";
import { MessageCircle, Shield, Zap, HeartHandshake, LockOpen } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";

const valueIcons = [Shield, Zap, HeartHandshake, LockOpen];

export default function AboutContent() {
  const { t } = useTranslation();

  return (
    <>
      <Header solid />

      {/* ── Hero ── */}
      <section className="bg-grain relative bg-dark pt-28 pb-10 sm:pt-36 sm:pb-16">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.05)_45%,rgba(255,255,255,0.08)_55%,rgba(255,255,255,0.03)_70%,transparent_85%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,rgba(0,0,0,0.4))]" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-heading text-[2rem] font-semibold leading-[1.1] tracking-[-0.02em] bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent sm:text-[3rem] md:text-[3.75rem]">
            {t.about.hero.title}{t.about.hero.titleMuted}
          </h1>
        </div>

        <div className="relative z-10 mx-auto mt-12 max-w-6xl px-6 sm:mt-16">
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
        <div className="mx-auto max-w-5xl px-6">

          {/* Problem — lead left, body right */}
          <div className="border-b border-dark/[0.06] py-20 sm:py-28">
            <div className="grid gap-6 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-7">
                <h3 className="font-heading text-[1.5rem] font-bold leading-[1.15] tracking-tight text-dark sm:text-[1.75rem] md:text-[2.125rem]">
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
                <h3 className="font-heading text-[1.5rem] font-bold leading-[1.15] tracking-tight text-dark sm:text-[1.75rem] md:text-[2.125rem]">
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

      {/* ── Values ── */}
      <section className="bg-grain relative border-t border-dark/[0.06] bg-paper py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.about.values.map((item, i) => {
              const Icon = valueIcons[i];
              return (
                <div key={item.title} className="text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-dark/[0.06] bg-paper">
                    <Icon className="h-5 w-5 text-dark/60" />
                  </div>
                  <h3 className="mt-4 font-heading text-[0.9375rem] font-semibold tracking-[-0.01em] text-dark/70">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What We Deliver ── */}
      <section className="bg-grain relative bg-paper py-20 sm:py-28">
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold leading-tight tracking-tight text-dark sm:text-[2rem]">
              {t.about.scope.title}
              <span className="text-muted">{t.about.scope.titleMuted}</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <ServiceStack />
            <BuildPipeline />
            <StatusPanel />
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

        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.06] px-8 py-12 backdrop-blur-sm sm:px-16 sm:py-16 md:px-20">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="font-heading text-3xl font-semibold leading-tight tracking-[-0.02em] bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent sm:text-4xl md:text-[3rem]">
                {t.about.cta.title}{t.about.cta.titleMuted}
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base text-white/50 sm:text-lg">
                {t.about.cta.subtitle}
              </p>
              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold tracking-wide text-dark transition-colors hover:bg-white/90"
              >
                <MessageCircle className="h-4 w-4" />
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
