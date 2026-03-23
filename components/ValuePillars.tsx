"use client";

import { Check, Code, Globe, Paintbrush, Server } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n/context";

const checklistIcons = [Paintbrush, Code, Server, Globe];

export default function ValuePillars() {
  const { t } = useTranslation();

  return (
    <section className="bg-grain relative overflow-hidden bg-dark py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.04)_45%,rgba(255,255,255,0.08)_55%,rgba(255,255,255,0.03)_70%,transparent_85%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_55%_at_68%_42%,rgba(255,255,255,0.06),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_60%_at_50%_100%,transparent_40%,rgba(0,0,0,0.45))]" />
      <div className="relative mx-auto w-full max-w-[90rem] px-6 md:px-12 lg:px-24">
        <h2 className="font-heading text-center text-4xl font-semibold leading-tight tracking-[-0.02em] bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent sm:text-[3.5rem]">
          {t.valuePillars.title}
          <span>{t.valuePillars.titleMuted}</span>
        </h2>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {/* Card 1 — All-In-One */}
          <div className="relative overflow-hidden rounded-lg border border-white/[0.08] bg-[#121212] sm:col-span-2 lg:max-h-[80vh]">
            <div className="pointer-events-none absolute -bottom-28 right-0 hidden w-[67%] lg:block">
              <Image
                src="/assets/mockup-transparent.png"
                alt="Laptop displaying a website built by Regen Digital Solutions"
                width={1920}
                height={1080}
                className="w-full object-contain object-bottom"
              />
            </div>

            <div className="relative z-10 p-8 sm:p-10">
              <p className="hidden font-heading text-xs font-semibold uppercase tracking-[0.2em] text-white/40 sm:block">
                {t.valuePillars.card1.label}
              </p>
              <h3 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.01em] text-white sm:text-4xl lg:max-w-[75%]">
                {t.valuePillars.card1.title.split(",")[0]},
                <br />
                {t.valuePillars.card1.title.split(",")[1]}
              </h3>

              <div className="mt-8 grid max-w-sm grid-cols-1 gap-3 sm:grid-cols-2">
                {t.valuePillars.card1.checklist.map((label, i) => {
                  const Icon = checklistIcons[i];
                  return (
                    <div
                      key={label}
                      className="flex items-center gap-2.5 rounded-lg border border-white/[0.08] bg-white/[0.06] px-4 py-3"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-[#121212]">
                        <Icon className="h-3.5 w-3.5 stroke-[1.5]" />
                      </div>
                      <span className="text-xs font-medium text-white/80">
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Card 2 — No Hidden Fees */}
          <div className="relative flex flex-col overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.04] p-8">
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              {t.valuePillars.card2.label}
            </p>
            <h3 className="mt-3 font-heading text-2xl font-semibold tracking-[-0.01em] text-white sm:text-3xl">
              {t.valuePillars.card2.title}
            </h3>

            <div className="mt-6 flex-1 space-y-3">
              {t.valuePillars.card2.items.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-green-500" />
                  <span className="text-sm text-white/70">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-lg bg-white/[0.06] px-4 py-3">
              <p className="text-center text-xs text-white/50">
                {t.valuePillars.card2.hiddenFees}{" "}
                <span className="font-heading font-bold text-white">₱0.00</span>
              </p>
            </div>
          </div>

          {/* Card 3 — Infinite Support */}
          <div className="relative overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.04]">
            <div className="pt-6">
              <Image
                src="/assets/person-message.png"
                alt="Regen Digital Solutions support team member responding to a client message"
                width={1866}
                height={1000}
                className="w-full object-contain object-bottom"
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-8 pt-20">
              <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                {t.valuePillars.card3.label}
              </p>
              <h3 className="mt-2 font-heading text-2xl font-semibold tracking-[-0.01em] text-white sm:text-3xl">
                {t.valuePillars.card3.title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
