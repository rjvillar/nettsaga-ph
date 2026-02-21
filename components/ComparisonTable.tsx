"use client";

import { useState, Fragment } from "react";
import { Check, Minus, ChevronDown } from "lucide-react";

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

const categories: Category[] = [
  {
    label: "Website Essentials",
    techLabel: "Core // Essentials",
    features: [
      { name: "Pages", values: ["Up to 5", "Up to 10", "Up to 20", "Unlimited"] },
      { name: "Custom domain", values: [true, true, true, true] },
      { name: "SSL certificate", values: [true, true, true, true] },
      { name: "Responsive design", values: [true, true, true, true] },
      { name: "Contact form", values: [true, true, true, true] },
      { name: "Custom design", values: [false, true, true, true] },
      { name: "Custom functionality", values: [false, false, true, true] },
    ],
  },
  {
    label: "Hosting & Performance",
    techLabel: "Infra // Performance",
    features: [
      { name: "Managed hosting", values: [true, true, true, true] },
      { name: "Speed optimization", values: [false, true, true, true] },
      { name: "Uptime monitoring", values: [false, true, true, true] },
      { name: "CDN", values: [false, false, true, true] },
      { name: "Daily backups", values: [false, false, true, true] },
    ],
  },
  {
    label: "SEO & Marketing",
    techLabel: "Growth // Marketing",
    features: [
      { name: "Basic SEO", values: [true, true, true, true] },
      { name: "SEO optimization", values: [false, true, true, true] },
      { name: "Advanced SEO", values: [false, false, true, true] },
      { name: "Social media integration", values: [false, true, true, true] },
      { name: "Analytics dashboard", values: [false, false, true, true] },
      { name: "Google Business setup", values: [false, false, true, true] },
    ],
  },
  {
    label: "E-commerce",
    techLabel: "Commerce // Integrations",
    features: [
      { name: "E-commerce ready", values: [false, false, true, true] },
      { name: "Payment integration", values: [false, false, true, true] },
      { name: "Advanced integrations", values: [false, false, false, true] },
      { name: "Booking system", values: [false, false, false, true] },
    ],
  },
  {
    label: "Support & Maintenance",
    techLabel: "Support // SLA",
    features: [
      { name: "Content updates", values: [true, true, true, true] },
      { name: "Email support", values: [true, true, true, true] },
      { name: "Priority support", values: [false, true, true, true] },
      { name: "Dedicated support", values: [false, false, true, true] },
      { name: "SLA guarantee", values: [false, false, false, true] },
      { name: "Professional email", values: [false, false, true, true] },
    ],
  },
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

/* ── Desktop Table ── */
function DesktopTable() {
  return (
    <div className="hidden lg:block">
      <div className="overflow-hidden rounded-2xl border border-dark/[0.06] bg-paper">
        <table className="w-full text-left">
          {/* Sticky plan header */}
          <thead>
            <tr className="sticky top-[73px] z-20 bg-paper">
              <th className="w-[280px] border-b border-dark/[0.06] py-5 pl-6 pr-4">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                  Feature
                </span>
              </th>
              {plans.map((plan) => (
                <th
                  key={plan}
                  className={`border-b border-dark/[0.06] px-4 py-5 text-center ${
                    plan === "Business" ? "bg-dark/[0.02]" : ""
                  }`}
                >
                  <span className="font-heading text-sm font-bold tracking-tight text-dark">
                    {plan}
                  </span>
                  {plan === "Business" && (
                    <span className="ml-2 inline-block rounded-full bg-dark px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white">
                      Popular
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {categories.map((category) => (
              <Fragment key={category.techLabel}>
                {/* Category header row */}
                <tr>
                  <td
                    colSpan={5}
                    className="border-b border-dark/[0.06] bg-white px-6 py-3"
                  >
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-dark/40">
                        {category.techLabel}
                      </span>
                    </div>
                  </td>
                </tr>

                {/* Feature rows */}
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

/* ── Mobile Accordion ── */
function MobileAccordion() {
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
              className={`grid transition-all duration-200 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-dark/[0.06] px-5 pb-5 pt-4">
                  <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-dark/30">
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
                            <span className="text-[10px] font-medium uppercase tracking-wide text-muted">
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
  return (
    <>
      <DesktopTable />
      <MobileAccordion />
    </>
  );
}
