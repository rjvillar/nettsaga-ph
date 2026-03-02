"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComparisonTable from "@/components/ComparisonTable";
import { Check, Shield, Zap, Code2, RefreshCw } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";

const prices = ["₱9,999", "₱14,999", "₱29,999", "Custom"];
const popularIndex = 1;
const trustIcons = [Shield, Zap, Code2, RefreshCw];

export default function PricingContent() {
  const { t } = useTranslation();

  return (
    <>
      <Header solid />

      {/* ── Section 1: Hero + Pricing Cards ── */}
      <section className="bg-grain relative bg-dark pt-28 pb-10 sm:pt-36">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.05)_45%,rgba(255,255,255,0.08)_55%,rgba(255,255,255,0.03)_70%,transparent_85%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,rgba(0,0,0,0.4))]" />

        <div className="relative z-10 mx-auto w-full max-w-[100rem] px-6 md:px-12 lg:px-24">
          <div className="text-center">
            <h1 className="font-heading text-[2rem] font-semibold pb-1 leading-[1.2] tracking-[-0.02em] bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent sm:text-[3rem] md:text-[3.75rem]">
              {t.pricing.title}
              <span>{t.pricing.titleMuted}</span>
            </h1>
          </div>

          <div className="mt-20 mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.pricing.plans.map((plan, i) => {
              const isPopular = i === popularIndex;
              return (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-lg p-6 sm:p-7 ${
                    isPopular
                      ? "border-2 border-white/20 bg-white/[0.08] shadow-[0_0.25rem_1.5rem_rgba(0,0,0,0.3)]"
                      : "border border-white/[0.08] bg-white/[0.04]"
                  }`}
                >
                  {isPopular && (
                    <span className="absolute -top-3 right-6 rounded-full bg-white px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-wide text-dark">
                      {t.pricing.popular}
                    </span>
                  )}

                  <h3 className="font-heading text-xl font-semibold tracking-[-0.01em] text-white">
                    {plan.name}
                  </h3>

                  <div className="mt-5">
                    <span className="font-heading text-3xl font-semibold tracking-tight text-white">
                      {prices[i]}
                    </span>
                    {i < 3 && (
                      <span className="ml-1 text-sm text-white/40">
                        {t.pricing.period}
                      </span>
                    )}
                  </div>

                  <ul className="mt-8 flex-1 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-white/60" />
                        <span className="text-[0.9375rem] text-white/60">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Section 2: Feature Comparison ── */}
      <section className="bg-grain relative border-t border-dark/[0.06] bg-white py-20 sm:py-28">
        <div className="relative mx-auto w-full max-w-[100rem] px-6 md:px-12 lg:px-24">
          <div className="text-center">
            <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-[-0.02em] bg-gradient-to-r from-dark to-dark/40 bg-clip-text text-transparent sm:text-[3rem]">
              {t.pricingPage.comparisonTitle}
              <span>{t.pricingPage.comparisonTitleMuted}</span>
            </h2>
          </div>

          <div className="mt-14">
            <ComparisonTable />
          </div>
        </div>
      </section>

      {/* ── Section 3: Trust Strip ── */}
      <section className="bg-grain relative border-t border-dark/[0.06] bg-paper py-16 sm:py-20">
        <div className="relative mx-auto w-full max-w-[100rem] px-6 md:px-12 lg:px-24">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.pricingPage.trust.map((item, i) => {
              const Icon = trustIcons[i];
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

      {/* ── Section 4: CTA ── */}
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
                  {t.pricingPage.cta.title}
                  <span>{t.pricingPage.cta.titleMuted}</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/50 sm:text-base">
                  {t.pricingPage.cta.subtitle}
                </p>
              </div>

              <a
                href="/contact"
                className="shrink-0 rounded-md bg-white px-8 py-3.5 text-sm font-semibold tracking-wide text-dark transition-opacity hover:opacity-90"
              >
                {t.pricingPage.cta.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
