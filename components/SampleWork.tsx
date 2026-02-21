"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const samples = [
  {
    src: "/assets/samples/sample1.png",
    alt: "Haaland — Certified property appraiser website",
  },
  {
    src: "/assets/samples/sample2.png",
    alt: "Land Tak og Fasade — Roofing & facade company website",
  },
  {
    src: "/assets/samples/sample3.png",
    alt: "Frozti — Handmade frozen treats shop website",
  },
  {
    src: "/assets/samples/sample4.png",
    alt: "Torsnes Bygg — Local carpentry & construction website",
  },
];

export default function SampleWork() {
  const [visible, setVisible] = useState(1);
  const [offset, setOffset] = useState(0);
  const maxOffset = samples.length - visible;

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 640px)");
    const update = (e: MediaQueryList | MediaQueryListEvent) => {
      setVisible(e.matches ? 2 : 1);
    };
    update(mql);
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  // Clamp offset when visible changes
  useEffect(() => {
    setOffset((o) => Math.min(o, samples.length - visible));
  }, [visible]);

  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const next = () => setOffset((o) => Math.min(maxOffset, o + 1));

  return (
    <section
      id="portfolio"
      className="bg-grain relative overflow-hidden bg-dark py-20 sm:py-28"
    >
      {/* Hero-style diagonal light wash */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.07)_45%,rgba(255,255,255,0.12)_55%,rgba(255,255,255,0.05)_70%,transparent_85%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_55%_at_68%_42%,rgba(255,255,255,0.10),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,rgba(0,0,0,0.5))]" />

      {/* Monospace corner accents */}
      <span className="absolute right-6 top-8 hidden font-mono text-[10px] uppercase tracking-widest text-white/[0.07] lg:block">
        Delivered: 7_Days
      </span>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header row — title left, arrows right */}
        <div className="flex flex-col items-center sm:flex-row sm:items-end sm:justify-between">
          <div className="text-center sm:text-left">
            <h2 className="font-heading text-2xl font-bold leading-tight tracking-tight text-white sm:text-[40px]">
              Real sites.{" "}
              <span className="text-white/50">Real businesses.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base text-white/50 sm:text-[22px]">
              Different industries, different needs — every site is
              custom-designed to match your brand and business.
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="mt-6 flex items-center gap-3 sm:mt-0 sm:shrink-0">
            <button
              onClick={prev}
              disabled={offset === 0}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/[0.12] text-white/60 transition-colors hover:bg-white/[0.08] hover:text-white disabled:cursor-default disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white/60"
              aria-label="Previous samples"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              disabled={offset === maxOffset}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/[0.12] text-white/60 transition-colors hover:bg-white/[0.08] hover:text-white disabled:cursor-default disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white/60"
              aria-label="Next samples"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* ── Carousel ── */}
        <div className="mt-14 overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform:
                visible === 1
                  ? `translateX(calc(-${offset} * (100% + 24px)))`
                  : `translateX(calc(-${offset} * (50% + 12px)))`,
            }}
          >
            {samples.map((sample) => (
              <div
                key={sample.src}
                className="group w-full shrink-0 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] transition-colors hover:bg-white/[0.06] sm:w-[calc(50%-12px)]"
              >
                {/* Browser chrome */}
                <div className="flex items-center border-b border-white/[0.06] px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                  </div>
                </div>

                {/* Screenshot */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={sample.src}
                    alt={sample.alt}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: maxOffset + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setOffset(i)}
              className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                i === offset
                  ? "w-6 bg-white/60"
                  : "w-1.5 bg-white/20 hover:bg-white/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
