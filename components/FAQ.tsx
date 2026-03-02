"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n/context";

const paymentLogos = [
  {
    src: "/assets/payment-logos/mastercard.webp",
    alt: "Mastercard",
    w: 96,
    h: 59,
  },
  { src: "/assets/payment-logos/visa.webp", alt: "Visa", w: 96, h: 30 },
  { src: "/assets/payment-logos/gcash.webp", alt: "GCash", w: 96, h: 23 },
  { src: "/assets/payment-logos/maya.webp", alt: "Maya", w: 96, h: 28 },
  { src: "/assets/payment-logos/bpi.webp", alt: "BPI", w: 96, h: 51 },
  { src: "/assets/payment-logos/bdo.webp", alt: "BDO", w: 96, h: 34 },
  {
    src: "/assets/payment-logos/unionbank.webp",
    alt: "UnionBank",
    w: 96,
    h: 24,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  return (
    <section id="faq" className="bg-grain relative bg-white py-20 sm:py-28">
      <div className="relative mx-auto max-w-4xl px-6 md:px-12 lg:px-24">
        <div className="flex justify-center">
          <h2 className="font-heading text-center text-4xl font-semibold leading-tight tracking-[-0.02em] bg-gradient-to-r from-dark to-dark/40 bg-clip-text text-transparent sm:text-[3.5rem]">
            {t.faq.title}
            <br />
            <span>{t.faq.titleMuted}</span>
          </h2>
        </div>

        <div className="mt-20">
          {t.faq.items.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border-b border-dark/[0.06]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between py-6 text-left"
                >
                  <span
                    className={`pr-4 font-heading text-[1.0625rem] font-semibold tracking-[-0.01em] transition-colors duration-200 ${isOpen ? "text-dark" : "text-dark/70"}`}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-dark/30 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ${
                    isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[0.9375rem] leading-relaxed text-dark/60">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-dark/30">
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
