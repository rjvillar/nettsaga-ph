"use client";

import { useState, Fragment } from "react";
import { Check, Minus, ChevronDown } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";

const plans = ["Starter", "Business", "Growth", "Custom"] as const;

type CellValue = boolean | string;

interface Feature {
  name: string;
  values: [CellValue, CellValue, CellValue, CellValue];
}

interface Category {
  label: string;
  techLabel: string;
  features: Feature[];
}

const techLabels = [
  "Core // Essentials",
  "Infra // Performance",
  "Growth // Marketing",
  "Commerce // Integrations",
  "Support // SLA",
];

const featureValues: [CellValue, CellValue, CellValue, CellValue][][] = [
  // Website Essentials
  [
    ["Up to 5", "Up to 10", "Up to 20", "Unlimited"],
    [true, true, true, true],
    [true, true, true, true],
    [true, true, true, true],
    [true, true, true, true],
    [false, true, true, true],
    [false, false, true, true],
  ],
  // Hosting & Performance
  [
    [true, true, true, true],
    [false, true, true, true],
    [false, true, true, true],
    [false, false, true, true],
    [false, false, true, true],
  ],
  // SEO & Marketing
  [
    [true, true, true, true],
    [false, true, true, true],
    [false, false, true, true],
    [false, true, true, true],
    [false, false, true, true],
    [false, false, true, true],
  ],
  // E-commerce
  [
    [false, false, true, true],
    [false, false, true, true],
    [false, false, false, true],
    [false, false, false, true],
  ],
  // Support & Maintenance
  [
    [true, true, true, true],
    [true, true, true, true],
    [false, true, true, true],
    [false, false, true, true],
    [false, false, false, true],
    [false, false, true, true],
  ],
];

function CellContent({ value }: { value: CellValue }) {
  if (value === true) {
    return <Check className="mx-auto h-4 w-4 text-green-500" />;
  }
  if (value === false) {
    return <Minus className="mx-auto h-4 w-4 text-dark/20" />;
  }
  return (
    <span className="text-sm font-medium text-dark">{value}</span>
  );
}

function DesktopTable({ categories }: { categories: Category[] }) {
  const { t } = useTranslation();

  return (
    <div className="hidden lg:block">
      <div className="sticky top-[4.5625rem] z-20 flex rounded-t-2xl border-x border-t border-dark/[0.06] bg-paper">
        <div className="w-[17.5rem] shrink-0 border-b border-dark/[0.06] py-5 pl-6 pr-4">
          <span className="font-mono text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted">
            {t.comparison.feature}
          </span>
        </div>
        {plans.map((plan) => (
          <div
            key={plan}
            className={`flex-1 border-b border-dark/[0.06] px-4 py-5 text-center ${
              plan === "Business" ? "bg-dark/[0.02]" : ""
            }`}
          >
            <span className="font-heading text-sm font-bold tracking-tight text-dark">
              {plan}
            </span>
            {plan === "Business" && (
              <span className="ml-2 inline-block rounded-full bg-dark px-2 py-0.5 text-[0.5625rem] font-semibold uppercase tracking-wide text-white">
                {t.comparison.popular}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-b-2xl border-x border-b border-dark/[0.06] bg-paper">
        <table className="w-full text-left" style={{ tableLayout: "fixed" }}>
          <colgroup>
            <col style={{ width: "17.5rem" }} />
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <tbody>
            {categories.map((category) => (
              <Fragment key={category.techLabel}>
                <tr>
                  <td
                    colSpan={5}
                    className="border-b border-dark/[0.06] bg-white px-6 py-3"
                  >
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      <span className="font-mono text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-dark/40">
                        {category.techLabel}
                      </span>
                    </div>
                  </td>
                </tr>

                {category.features.map((feature) => (
                  <tr
                    key={feature.name}
                    className="transition-colors hover:bg-dark/[0.01]"
                  >
                    <td className="border-b border-dark/[0.06] py-3.5 pl-6 pr-4 text-sm text-slate">
                      {feature.name}
                    </td>
                    {feature.values.map((val, i) => (
                      <td
                        key={i}
                        className={`border-b border-dark/[0.06] px-4 py-3.5 text-center ${
                          plans[i] === "Business" ? "bg-dark/[0.02]" : ""
                        }`}
                      >
                        <CellContent value={val} />
                      </td>
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function MobileAccordion({ categories }: { categories: Category[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3 lg:hidden">
      {categories.map((category, catIdx) => {
        const isOpen = openIndex === catIdx;
        return (
          <div
            key={category.techLabel}
            className="rounded-2xl border border-dark/[0.06] bg-white"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : catIdx)}
              className="flex w-full cursor-pointer items-center justify-between px-5 py-4 text-left"
            >
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                <span className="font-heading text-sm font-semibold text-dark">
                  {category.label}
                </span>
              </div>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-muted transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-500 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-dark/[0.06] px-5 pb-5 pt-4">
                  <p className="mb-3 font-mono text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-dark/30">
                    {category.techLabel}
                  </p>
                  {category.features.map((feature) => (
                    <div
                      key={feature.name}
                      className="border-b border-dark/[0.04] py-3 last:border-b-0"
                    >
                      <p className="mb-2 text-sm font-medium text-dark">
                        {feature.name}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {plans.map((plan, i) => (
                          <div
                            key={plan}
                            className={`flex items-center gap-2 rounded-lg px-3 py-1.5 ${
                              plan === "Business"
                                ? "bg-dark/[0.03]"
                                : "bg-dark/[0.01]"
                            }`}
                          >
                            <span className="text-[0.625rem] font-medium uppercase tracking-wide text-muted">
                              {plan}
                            </span>
                            <span className="ml-auto">
                              <CellContent value={feature.values[i]} />
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ComparisonTable() {
  const { t } = useTranslation();

  const categories: Category[] = t.comparison.categories.map((cat, catIdx) => ({
    label: cat.label,
    techLabel: techLabels[catIdx],
    features: cat.features.map((name, featIdx) => ({
      name,
      values: featureValues[catIdx][featIdx],
    })),
  }));

  return (
    <>
      <DesktopTable categories={categories} />
      <MobileAccordion categories={categories} />
    </>
  );
}
