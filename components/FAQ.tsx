"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do we own the website and domain?",
    a: "Yes. The domain is registered under your name and you own all the content. If you ever decide to leave, everything is yours.",
  },
  {
    q: "How does payment work?",
    a: "One simple yearly payment covers everything — design, development, hosting, domain, and support. We accept GCash, Maya, bank transfer, and credit cards.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Of course. There are no binding contracts. If you decide not to renew, your site stays up until the end of your paid period and we'll help you transition.",
  },
  {
    q: "How fast can you deliver?",
    a: "Most websites are ready within a week. Larger projects may take a bit longer, but we'll always give you a clear timeline upfront.",
  },
  {
    q: "What if I already have a website?",
    a: "No problem! We can redesign and migrate your existing site, or build a brand new one — whatever works best for you.",
  },
  {
    q: "What's included in updates?",
    a: "Text changes, photo swaps, adding new sections, minor layout tweaks — just send us a message and we'll take care of it.",
  },
  {
    q: "Do you provide business email?",
    a: "Yes, we can set up professional email addresses like you@yourbusiness.com as part of your package.",
  },
  {
    q: "Do you support GCash and credit cards?",
    a: "Absolutely. We accept GCash, Maya, bank transfer, and all major credit cards. Pay whichever way is most convenient for you.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-grain relative bg-white py-20 sm:py-28">
      <div className="relative mx-auto max-w-3xl px-6">
        <h2 className="font-heading text-center text-3xl font-bold tracking-tight text-dark sm:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-slate">
          Honest answers to the things people usually ask us.
        </p>

        <div className="mt-12 divide-y divide-border">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between py-5 text-left"
                >
                  <span className="font-heading text-base font-semibold text-dark pr-4">
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
                    <p className="text-sm leading-relaxed text-slate">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
