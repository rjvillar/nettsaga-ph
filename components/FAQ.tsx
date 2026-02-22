"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n/context";

const paymentLogos = [
  { src: "/assets/payment-logos/mastercard.webp", alt: "Mastercard", w: 96, h: 59 },
  { src: "/assets/payment-logos/visa.webp", alt: "Visa", w: 96, h: 30 },
  { src: "/assets/payment-logos/gcash.webp", alt: "GCash", w: 96, h: 23 },
  { src: "/assets/payment-logos/maya.webp", alt: "Maya", w: 96, h: 28 },
  { src: "/assets/payment-logos/bpi.webp", alt: "BPI", w: 96, h: 51 },
  { src: "/assets/payment-logos/bdo.webp", alt: "BDO", w: 96, h: 34 },
  { src: "/assets/payment-logos/unionbank.webp", alt: "UnionBank", w: 96, h: 24 },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  return (
    <section id="faq" className="bg-grain relative bg-paper py-20 sm:py-28">
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <div className="hidden h-2 w-2 shrink-0 rounded-full bg-green-500 sm:block" />
          <h2 className="font-heading text-center text-2xl font-bold leading-tight tracking-tight text-dark sm:text-[40px]">
            {t.faq.title}
            <span className="text-muted">{t.faq.titleMuted}</span>
          </h2>
        </div>
        <p className="mx-auto mt-4 max-w-xl text-center text-base text-slate sm:text-[22px]">
          {t.faq.subtitle}
        </p>

        <div className="mt-14 rounded-2xl border border-dark/[0.06] bg-white px-6 py-2 sm:px-8">
          {t.faq.items.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border-b border-dark/[0.06] last:border-b-0"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between py-5 text-left"
                >
                  <span
                    className={`pr-4 font-heading text-base font-semibold ${isOpen ? "text-dark" : "text-dark/80"}`}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ${
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-dark/60">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-dark/30">
            {t.faq.weAccept}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {paymentLogos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={logo.w}
                height={logo.h}
                className="h-6 w-auto object-contain opacity-80 transition-opacity duration-200 hover:opacity-100"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
