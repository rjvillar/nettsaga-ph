import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import ServiceStack from "@/components/ServiceStack";
import BuildPipeline from "@/components/BuildPipeline";
import StatusPanel from "@/components/StatusPanel";
import { MessageCircle, Globe, Rocket, User } from "lucide-react";

export const metadata = {
  title: "About — Nettsaga",
  description:
    "Born in Norway, built for the Philippines. Learn about the team behind Nettsaga and our mission to help Filipino businesses thrive online.",
};

const team = [
  {
    name: "Brendon Gocaj",
    role: "General Manager",
    email: "brendon@nettsaga.no",
    phone: "920 15 828",
    accent: "#22C55E",
  },
  {
    name: "Erling Mathias Staff",
    role: "Technical Lead",
    email: "erling@nettsaga.no",
    phone: "920 15 826",
    accent: "#22C55E",
  },
  {
    name: "Daniel Thrane",
    role: "Sales Manager",
    email: "daniel@nettsaga.no",
    phone: "920 15 834",
    accent: "#22C55E",
  },
  {
    name: "Seif Al-Saatie",
    role: "Key Account Manager",
    email: "seif@nettsaga.no",
    phone: "929 20 070",
    accent: "#22C55E",
  },
  {
    name: "Alban Gocaj",
    role: "Finance Manager",
    email: "alban@nettsaga.no",
    phone: "",
    accent: "#22C55E",
  },
  {
    name: "Jorgen Holtan",
    role: "Customer Advisor",
    email: "joergen@nettsaga.no",
    phone: "",
    accent: "#22C55E",
  },
  {
    name: "Nicklas Gromsrud",
    role: "Customer Advisor",
    email: "nicklas@nettsaga.no",
    phone: "",
    accent: "#22C55E",
  },
  {
    name: "Fredrik Nelvik",
    role: "Customer Advisor",
    email: "fredrik@nettsaga.no",
    phone: "",
    accent: "#22C55E",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header solid />

      {/* ── Section 1: Hero + Image ── */}
      <section className="bg-grain relative bg-paper pt-28 pb-10 sm:pt-36">
        {/* Monospace corner accents */}
        <span className="absolute left-6 top-28 hidden font-mono text-[10px] uppercase tracking-widest text-dark/[0.07] lg:block">
          Origin // Oslo_Norway
        </span>
        <span className="absolute right-6 top-28 hidden font-mono text-[10px] uppercase tracking-widest text-dark/[0.07] lg:block">
          Market: Philippines
        </span>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-muted">
            About // Nettsaga
          </p>
          <h1 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-tight text-dark sm:text-[44px]">
            Built in Norway,{" "}
            <span className="text-muted">made for the Philippines.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate sm:text-lg">
            Norwegian quality standards, honest pricing, and a 7-day turnaround
            — now serving Filipino businesses.
          </p>
        </div>

        {/* Hero image */}
        <div className="relative mx-auto mt-14 max-w-6xl px-6">
          <Image
            src="/assets/about-hero.jpg"
            alt="Nettsaga website mockup — modern, mobile-first design built for Filipino businesses"
            width={2060}
            height={1080}
            className="w-full rounded-2xl object-contain"
            priority
          />
        </div>
      </section>

      {/* ── Section 2: Story ── */}
      <section className="bg-grain relative border-t border-dark/[0.06] bg-white py-20 sm:py-28">
        <div className="relative mx-auto max-w-3xl px-6">
          <div className="flex items-center justify-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-dark/40">
              Story // How_We_Started
            </span>
          </div>
          <h2 className="mt-4 text-center font-heading text-2xl font-bold leading-tight tracking-tight text-dark sm:text-[32px]">
            From Scandinavia{" "}
            <span className="text-muted">to Southeast Asia</span>
          </h2>
          <p className="mt-5 text-center text-sm leading-relaxed text-slate sm:text-base">
            Nettsaga started in Oslo, Norway — a team of engineers, developers,
            and designers helping Scandinavian businesses get online. After 500+
            projects, we saw the same problem everywhere: agencies overcharge,
            overcomplicate, and underdeliver. We brought Nettsaga to the
            Philippines to fix that — same standards, same speed, honest
            pricing.
          </p>

          {/* Inline office locations */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-dark/[0.06] bg-paper">
                <Globe className="h-4 w-4 text-[#3B82F6]" />
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-dark/30">
                  HQ // Oslo
                </p>
                <p className="text-sm font-medium text-dark">
                  Kirkegata 15, Oslo
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-dark/[0.06] bg-paper">
                <Rocket className="h-4 w-4 text-[#F59E0B]" />
              </div>
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-dark/30">
                  Office // Makati
                </p>
                <p className="text-sm font-medium text-dark">
                  Burgundy Tower, Makati
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: What We Deliver ── */}
      <section className="bg-grain relative bg-paper py-20 sm:py-28">
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-dark/40">
                Scope // What_You_Get
              </span>
            </div>
            <h2 className="mt-4 font-heading text-2xl font-bold leading-tight tracking-tight text-dark sm:text-[32px]">
              Everything your business{" "}
              <span className="text-muted">needs to go live</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <ServiceStack />
            <BuildPipeline />
            <StatusPanel />
          </div>
        </div>
      </section>

      {/* ── Section 4: Team (dark) — System ID cards ── */}
      <section className="bg-grain relative bg-dark py-20 sm:py-28">
        {/* Diagonal light wash overlays */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.05)_45%,rgba(255,255,255,0.08)_55%,rgba(255,255,255,0.03)_70%,transparent_85%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,rgba(0,0,0,0.4))]" />

        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <h2 className="text-center font-heading text-xl font-bold tracking-tight text-white sm:text-2xl">
            The team behind <span className="font-extrabold">Nettsaga</span>
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="w-full overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.04] sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
              >
                {/* Top accent bar */}
                <div
                  className="h-1"
                  style={{ backgroundColor: member.accent }}
                />

                <div className="p-5">
                  <div className="flex items-center gap-3.5">
                    {/* Person icon avatar */}
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                      style={{
                        backgroundColor: `${member.accent}18`,
                        color: member.accent,
                      }}
                    >
                      <User className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {member.name}
                      </p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Divider + email + phone */}
                  <div className="mt-3.5 flex items-center justify-between border-t border-white/[0.06] pt-3.5">
                    <a
                      href={`mailto:${member.email}`}
                      className="font-mono text-[11px] text-white/50 transition-colors hover:text-white"
                    >
                      {member.email}
                    </a>
                    {member.phone && (
                      <span className="font-mono text-[10px] text-white/30">
                        {member.phone}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: CTA ── */}
      <section className="relative bg-white py-20 sm:py-28">
        <div className="relative mx-auto w-full max-w-7xl px-6">
          <div className="bg-grain relative flex items-center justify-center overflow-hidden rounded-3xl bg-dark px-6 py-20 sm:px-12 sm:py-28">
            {/* Diagonal light wash overlays */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.07)_45%,rgba(255,255,255,0.12)_55%,rgba(255,255,255,0.05)_70%,transparent_85%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_55%_at_68%_42%,rgba(255,255,255,0.10),transparent)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,rgba(0,0,0,0.5))]" />

            <div className="relative z-20 mx-auto max-w-xl text-center">
              <h2 className="font-heading text-2xl font-bold leading-tight tracking-tight text-white sm:text-[40px]">
                Want to work <span className="text-white/50">with us?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base text-white/50 sm:text-[22px]">
                Whether you need a new website or want to improve your existing
                one — let&apos;s talk about how we can help.
              </p>
              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold tracking-wide text-dark transition-colors hover:bg-white/90"
              >
                <MessageCircle className="h-4 w-4" />
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
