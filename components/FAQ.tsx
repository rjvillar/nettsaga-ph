"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const paymentLogos = [
  { src: "/assets/payment-logos/mastercard.webp", alt: "Mastercard" },
  { src: "/assets/payment-logos/visa.webp", alt: "Visa" },
  { src: "/assets/payment-logos/gcash.webp", alt: "GCash" },
  { src: "/assets/payment-logos/maya.webp", alt: "Maya" },
  { src: "/assets/payment-logos/bpi.webp", alt: "BPI" },
  { src: "/assets/payment-logos/bdo.webp", alt: "BDO" },
  { src: "/assets/payment-logos/unionbank.webp", alt: "UnionBank" },
];

const faqs = [
  {
    q: "Do we own the website?",
    a: "Yes — 100%. The domain is registered under your name and you own all content, design, and code. If you ever leave, everything goes with you.",
  },
  {
    q: "How does payment work?",
    a: "One fixed yearly fee. That's it. No hidden charges, no surprise invoices. Everything is covered — design, development, hosting, domain, and support.",
  },
  {
    q: "Can I cancel?",
    a: "Anytime. No lock-in contracts, no cancellation fees. Your site stays live until the end of your paid period and we'll help you transition if needed.",
  },
  {
    q: "How fast can you deliver?",
    a: "Most websites go live within 7 days. You'll get a clear timeline before we start so there are never any surprises on delivery.",
  },
  {
    q: "What if I already have a website?",
    a: "We can redesign and migrate your existing site or build a completely new one — whichever makes more sense for where your business is heading.",
  },
  {
    q: "What's included in updates?",
    a: "Text changes, photo swaps, new sections, layout tweaks — just send a message. We handle it within the day, no extra cost.",
  },
  {
    q: "Do you provide email?",
    a: "Yes. We set up professional email addresses like you@yourbusiness.com so your brand looks credible from the first message.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-grain relative bg-white py-20 sm:py-28">
      <div className="relative mx-auto max-w-4xl px-6">
        {/* Header with green active dot */}
        <div className="flex items-center justify-center gap-3">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          <h2 className="font-heading text-center text-[40px] font-bold leading-tight tracking-tight text-dark">
            Questions?{" "}
            <span className="text-muted">We&apos;ve got answers.</span>
          </h2>
        </div>
        <p className="mx-auto mt-4 max-w-xl text-center text-[22px] text-slate">
          Straight talk — no fine print, no surprises.
        </p>

        {/* Technical container — off-white card */}
        <div className="mt-14 rounded-2xl border border-dark/[0.06] bg-paper px-6 py-2 sm:px-8">
          {faqs.map((faq, i) => {
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

        {/* Payment logos — outside the FAQ card */}
        <div className="mt-10 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-dark/30">
            We accept
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-8">
            {paymentLogos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={80}
                height={32}
                className="h-6 w-auto object-contain grayscale opacity-80 transition-all duration-200 hover:grayscale-0 hover:opacity-100"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
