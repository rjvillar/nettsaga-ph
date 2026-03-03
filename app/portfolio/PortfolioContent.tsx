"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n/context";

const projectImages = [
  "/assets/samples/sample1.png",
  "/assets/samples/sample2.png",
  "/assets/samples/sample3.png",
  "/assets/samples/sample4.png",
];

export default function PortfolioContent() {
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
            {t.portfolio.hero.title}{t.portfolio.hero.titleMuted}
          </h1>
        </div>
      </section>

      {/* ── Projects — Alternating Editorial Layout ── */}
      <section className="relative bg-white">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 lg:px-24">
          {t.portfolio.projects.map((project, i) => {
            const isOdd = i % 2 === 0;
            return (
              <div
                key={i}
                className={`border-b border-dark/[0.06] py-16 sm:py-24 ${i === t.portfolio.projects.length - 1 ? "border-b-0" : ""}`}
              >
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-10">
                  {/* Screenshot */}
                  <div
                    className={`${
                      isOdd
                        ? "md:col-span-8 md:col-start-5"
                        : "md:col-span-8 md:col-start-1"
                    } ${!isOdd ? "md:row-start-1" : ""}`}
                  >
                    <div className="group overflow-hidden rounded-xl border border-dark/[0.08] bg-dark/[0.02] transition-colors hover:bg-dark/[0.04]">
                      <div className="flex items-center border-b border-dark/[0.06] px-4 py-3">
                        <div className="flex gap-1.5">
                          <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                          <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                          <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                        </div>
                      </div>
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={projectImages[i]}
                          alt={`${project.name} — ${project.description}`}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="(min-width: 768px) 66vw, 100vw"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div
                    className={`${
                      isOdd
                        ? "md:col-span-4 md:col-start-1 md:row-start-1"
                        : "md:col-span-4 md:col-start-9"
                    } self-center`}
                  >
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs tracking-wide text-dark/30 transition-colors hover:text-dark/60"
                      >
                        {project.label}
                      </a>
                    ) : (
                      <span className="font-mono text-xs uppercase tracking-widest text-dark/30">
                        {project.label}
                      </span>
                    )}
                    <h2 className="mt-3 font-heading text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.02em] text-dark sm:text-[2.25rem] md:text-[2.75rem]">
                      {project.name}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate sm:text-[0.9375rem]">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
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
                  {t.portfolio.cta.title}
                  <span>{t.portfolio.cta.titleMuted}</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/50 sm:text-base">
                  {t.portfolio.cta.subtitle}
                </p>
              </div>

              <a
                href="/contact"
                className="shrink-0 rounded-md bg-white px-8 py-3.5 text-sm font-semibold tracking-wide text-dark transition-opacity hover:opacity-90"
              >
                {t.portfolio.cta.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
