"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n/context";
import {
  MapPin,
  Clock,
  Building2,
  ChevronDown,
} from "lucide-react";

export default function CareersContent() {
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const positions = t.careers.openings.positions;

  return (
    <>
      <Header solid />

      {/* ── Hero ── */}
      <section className="bg-grain relative bg-dark pt-36 pb-16 sm:pb-16">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.05)_45%,rgba(255,255,255,0.08)_55%,rgba(255,255,255,0.03)_70%,transparent_85%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,rgba(0,0,0,0.4))]" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-heading text-[2.75rem] font-black leading-[0.98] tracking-tight pb-1 bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent sm:text-[3rem] sm:font-semibold sm:leading-[1.2] sm:tracking-[-0.02em] md:text-[3.75rem]">
            {t.careers.hero.title}{t.careers.hero.titleMuted}
          </h1>
        </div>
      </section>

      {/* ── Culture / Why work with us — typographic ── */}
      <section className="relative bg-paper py-20 sm:py-28">
        <div className="relative mx-auto w-full max-w-[100rem] px-6 md:px-12 lg:px-24">
          <div className="mb-16 sm:mb-20">
            <h2 className="font-heading text-2xl font-semibold leading-tight tracking-[-0.02em] bg-gradient-to-r from-dark to-dark/40 bg-clip-text text-transparent sm:text-[2.5rem]">
              {t.careers.culture.title}
              <span>{t.careers.culture.titleMuted}</span>
            </h2>
          </div>

          <div className="border-t border-dark/[0.08]">
            {t.careers.culture.perks.map((perk, i) => (
              <div
                key={i}
                className="group border-b border-dark/[0.08] py-10 sm:py-14"
              >
                <div className="grid gap-4 md:grid-cols-12 md:gap-8">
                  <div className="flex items-baseline gap-6 sm:gap-8 md:col-span-6">
                    <span className="shrink-0 text-sm text-dark/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-heading text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.02em] text-dark transition-transform duration-300 sm:text-[2.5rem] md:text-[3.25rem] md:group-hover:translate-x-2">
                      {perk.title}
                    </h3>
                  </div>
                  <div className="self-end md:col-span-5 md:col-start-8">
                    <p className="text-sm leading-relaxed text-slate sm:text-[0.9375rem]">
                      {perk.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Positions — dark section ── */}
      <section className="bg-grain relative bg-dark py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.05)_45%,rgba(255,255,255,0.08)_55%,rgba(255,255,255,0.03)_70%,transparent_85%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,rgba(0,0,0,0.4))]" />

        <div className="relative z-10 mx-auto w-full max-w-[100rem] px-6 md:px-12 lg:px-24">
          <div className="mb-14 text-center sm:mb-20">
            <h2 className="font-heading text-2xl font-semibold leading-tight tracking-[-0.02em] bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent sm:text-[2.5rem] md:text-[3rem]">
              {t.careers.openings.title}
              <span>{t.careers.openings.titleMuted}</span>
            </h2>
          </div>

          {positions.length === 0 ? (
            <p className="text-center text-white/40">
              {t.careers.openings.noOpenings}
            </p>
          ) : (
            <div className="space-y-3">
              {positions.map((pos, i) => {
                const isOpen = expandedIndex === i;
                return (
                  <div
                    key={i}
                    className="overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm transition-colors hover:bg-white/[0.06]"
                  >
                    <button
                      onClick={() =>
                        setExpandedIndex(isOpen ? null : i)
                      }
                      className="flex w-full items-center gap-4 p-5 text-left sm:p-6 cursor-pointer"
                    >
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading text-lg font-semibold text-white sm:text-xl">
                          {pos.title}
                        </h3>
                        <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-white/40 sm:text-sm">
                          <span className="inline-flex items-center gap-1">
                            <Building2 className="h-3.5 w-3.5" />
                            {pos.department}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {pos.type}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {pos.location}
                          </span>
                        </div>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-white/30 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-white/[0.06] px-5 pb-6 pt-5 sm:px-6">
                          <p className="text-sm leading-relaxed text-white/60 sm:text-base">
                            {pos.description}
                          </p>

                          {pos.requirements.length > 0 && (
                            <ul className="mt-5 space-y-2">
                              {pos.requirements.map((req, j) => (
                                <li
                                  key={j}
                                  className="flex items-start gap-2 text-sm text-white/50"
                                >
                                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/30" />
                                  {req}
                                </li>
                              ))}
                            </ul>
                          )}

                          <a
                            href="/contact"
                            className="mt-6 inline-block rounded-md bg-white px-6 py-2.5 text-sm font-semibold tracking-wide text-dark transition-opacity hover:opacity-90"
                          >
                            Apply now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
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
                  {t.careers.cta.title}
                  <span>{t.careers.cta.titleMuted}</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/50 sm:text-base">
                  {t.careers.cta.subtitle}
                </p>
              </div>

              <a
                href="/contact"
                className="shrink-0 rounded-md bg-white px-8 py-3.5 text-sm font-semibold tracking-wide text-dark transition-opacity hover:opacity-90"
              >
                {t.careers.cta.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
