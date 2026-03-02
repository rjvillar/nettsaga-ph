"use client";

import { Check, MessageCircle } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";

const prices = ["₱9,999", "₱14,999", "₱29,999", "Custom"];
const popularIndex = 1;

export default function Pricing() {
  const { t } = useTranslation();

  return (
    <section
      id="pricing"
      className="bg-grain relative border-t border-dark/[0.06] bg-white py-20 sm:py-28"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold leading-tight tracking-tight text-dark sm:text-[2.5rem]">
            {t.pricing.title}
            <span className="text-muted">{t.pricing.titleMuted}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate sm:text-[1.375rem]">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.pricing.plans.map((plan, i) => {
            const isPopular = i === popularIndex;
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl p-6 sm:p-7 ${
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

                <h3 className="font-heading text-lg font-bold tracking-tight text-dark">
                  {plan.name}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate">
                  {plan.description}
                </p>

                <div className="mt-5">
                  <span className="font-heading text-3xl font-bold tracking-tight text-dark">
                    {prices[i]}
                  </span>
                  {i < 3 && (
                    <span className="ml-1 text-sm text-muted">{t.pricing.period}</span>
                  )}
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                      <span className="text-sm text-slate">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold tracking-wide transition-colors ${
                    isPopular
                      ? "bg-dark text-white hover:bg-dark/90"
                      : "border border-dark/[0.1] bg-white text-dark hover:bg-dark/[0.04]"
                  }`}
                >
                  <MessageCircle className="h-4 w-4" />
                  {t.pricing.getStarted}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
