"use client";

import { Check } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";

const prices = ["₱9,999", "₱14,999", "₱29,999", "Custom"];
const popularIndex = 1;

export default function Pricing() {
  const { t } = useTranslation();

  return (
    <section
      id="pricing"
      className="bg-grain relative bg-paper py-20 sm:py-28"
    >
      <div className="relative mx-auto w-full max-w-[90rem] px-6 md:px-12 lg:px-24">
        <div className="text-center">
          <h2 className="font-heading text-4xl font-semibold leading-tight tracking-[-0.02em] bg-gradient-to-r from-dark to-dark/40 bg-clip-text text-transparent sm:text-[3.5rem]">
            {t.pricing.title}
            <span>{t.pricing.titleMuted}</span>
          </h2>
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.pricing.plans.map((plan, i) => {
            const isPopular = i === popularIndex;
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-lg p-6 sm:p-7 ${
                  isPopular
                    ? "border-2 border-dark bg-paper shadow-[0_0.25rem_1.5rem_rgba(0,0,0,0.08)]"
                    : "border border-dark/[0.06] bg-paper"
                }`}
              >
                {isPopular && (
                  <span className="absolute -top-3 right-6 rounded-full bg-dark px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-wide text-white">
                    {t.pricing.popular}
                  </span>
                )}

                <h3 className="font-heading text-xl font-semibold tracking-[-0.01em] text-dark">
                  {plan.name}
                </h3>

                <div className="mt-4">
                  <span className="font-heading text-3xl font-semibold tracking-tight text-dark">
                    {prices[i]}
                  </span>
                  {i < 3 && (
                    <span className="ml-1 text-sm text-muted">
                      {t.pricing.period}
                    </span>
                  )}
                </div>

                <ul className="mt-8 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-dark" />
                      <span className="text-[0.9375rem] text-dark/80">
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
  );
}
