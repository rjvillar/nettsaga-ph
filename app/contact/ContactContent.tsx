"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";

export default function ContactContent() {
  const { t } = useTranslation();

  return (
    <>
      <Header solid />
      <main className="bg-grain relative bg-paper pt-28 pb-20 sm:pt-36 sm:pb-28">
        <span className="absolute left-6 top-28 hidden font-mono text-[10px] uppercase tracking-widest text-dark/[0.07] lg:block">
          Channel // Open
        </span>
        <span className="absolute right-6 top-28 hidden font-mono text-[10px] uppercase tracking-widest text-dark/[0.07] lg:block">
          Response: Same_Day
        </span>

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-muted">
              Contact // Get_Started
            </p>
            <h1 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-tight text-dark sm:text-[40px]">
              {t.contact.title}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate sm:text-[22px]">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-5 lg:gap-8">
            {/* Left — Dark contact card */}
            <div className="lg:col-span-2">
              <div className="bg-grain relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121212] p-6 sm:p-8">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.05)_45%,rgba(255,255,255,0.08)_55%,rgba(255,255,255,0.03)_70%,transparent_85%)]" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,rgba(0,0,0,0.4))]" />

                <span className="absolute right-6 top-6 font-logo text-4xl font-bold italic text-white/[0.03]">
                  N.
                </span>

                <div className="relative z-10 flex flex-1 flex-col">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30">
                    System // Ready
                  </p>
                  <h2 className="mt-3 font-heading text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {t.contact.sidebar.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">
                    {t.contact.sidebar.description}
                  </p>

                  <div className="mt-8 space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.06]">
                        <Mail className="h-4 w-4 text-white/50" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
                          Channel // Email
                        </p>
                        <a
                          href="mailto:support@nettsaga.com"
                          className="mt-0.5 text-sm font-medium text-white/80 transition-colors hover:text-white"
                        >
                          support@nettsaga.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.06]">
                        <MapPin className="h-4 w-4 text-white/50" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
                          Location // Metro_Manila
                        </p>
                        <p className="mt-0.5 text-sm leading-relaxed text-white/80">
                          Burgundy Corporate Tower, 252 Sen. Gil J. Puyat Ave,
                          Makati City, 1200
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.06]">
                        <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
                          Response // Same_Day
                        </p>
                        <p className="mt-0.5 text-sm font-medium text-white/80">
                          {t.contact.sidebar.response}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-3 lg:mt-auto">
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.04] p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                            Deploy Pipeline
                          </span>
                        </div>
                        <span className="font-mono text-[10px] text-white/20">
                          v2.4.1
                        </span>
                      </div>
                      <div className="mt-3 space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="flex h-4 w-4 items-center justify-center rounded-full bg-green-500/20 text-[8px] text-green-400">
                            ✓
                          </div>
                          <span className="text-xs text-white/50">
                            {t.contact.sidebar.pipeline.designApproved}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex h-4 w-4 items-center justify-center rounded-full bg-green-500/20 text-[8px] text-green-400">
                            ✓
                          </div>
                          <span className="text-xs text-white/50">
                            {t.contact.sidebar.pipeline.codeReviewed}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex h-4 w-4 items-center justify-center rounded-full bg-green-500/20 text-[8px] text-green-400">
                            ✓
                          </div>
                          <span className="text-xs text-white/50">
                            {t.contact.sidebar.pipeline.testsPassed}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 rounded-full border border-white/10" />
                          <span className="text-xs text-white/30">
                            {t.contact.sidebar.pipeline.goingLive}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-white/[0.06] bg-white/[0.04] p-4">
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                          {t.contact.sidebar.metrics.uptime}
                        </p>
                        <p className="mt-1 font-heading text-2xl font-bold text-white">
                          99.9<span className="text-base text-white/40">%</span>
                        </p>
                        <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.06]">
                          <div className="h-full w-[99.9%] rounded-full bg-green-500/60" />
                        </div>
                      </div>
                      <div className="rounded-xl border border-white/[0.06] bg-white/[0.04] p-4">
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                          {t.contact.sidebar.metrics.pageLoad}
                        </p>
                        <p className="mt-1 font-heading text-2xl font-bold text-white">
                          1.2<span className="text-base text-white/40">s</span>
                        </p>
                        <p className="mt-2 text-[10px] text-green-400/70">
                          {t.contact.sidebar.metrics.fasterThan}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Contact form card */}
            <div className="lg:col-span-3">
              <div className="h-full rounded-2xl border border-dark/[0.06] bg-white p-6 sm:p-8">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-muted">
                  Message // New_Inquiry
                </p>
                <h3 className="mt-2 font-heading text-lg font-bold tracking-tight text-dark">
                  {t.contact.form.tellUs}
                </h3>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
