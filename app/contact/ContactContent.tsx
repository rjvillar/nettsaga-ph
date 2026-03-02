"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { useTranslation } from "@/lib/i18n/context";

export default function ContactContent() {
  const { t } = useTranslation();

  return (
    <>
      <Header solid />

      {/* ── Hero ── */}
      <section className="bg-grain relative bg-dark pt-28 pb-10 sm:pt-36 sm:pb-16">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.05)_45%,rgba(255,255,255,0.08)_55%,rgba(255,255,255,0.03)_70%,transparent_85%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,rgba(0,0,0,0.4))]" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-heading text-[2rem] font-semibold pb-1 leading-[1.2] tracking-[-0.02em] bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent sm:text-[3rem] md:text-[3.75rem]">
            {t.contact.title}
            {t.contact.titleMuted}
          </h1>
        </div>
      </section>

      {/* ── Contact Grid ── */}
      <section className="relative bg-white py-16 sm:py-24">
        <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 lg:px-24">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left — Image */}
            <div className="hidden overflow-hidden rounded-2xl lg:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/mockups/mockup1.webp"
                alt="Dark web development and technology"
                className="h-full w-full object-cover brightness-[0.6]"
              />
            </div>

            {/* Right — Contact form */}
            <div className="flex flex-col justify-center py-6 sm:py-10">
              <h2 className="font-heading text-2xl font-semibold tracking-[-0.02em] text-dark sm:text-3xl">
                {t.contact.form.tellUs}
              </h2>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
