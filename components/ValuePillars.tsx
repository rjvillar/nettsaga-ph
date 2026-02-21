import { Check, Code, Globe, Paintbrush, Server } from "lucide-react";
import Image from "next/image";

const checklist = [
  { icon: Paintbrush, label: "Custom Design" },
  { icon: Code, label: "Development" },
  { icon: Server, label: "Hosting & Domain" },
  { icon: Globe, label: "SEO & Speed" },
];

export default function ValuePillars() {
  return (
    <section className="bg-grain relative bg-paper py-20 sm:py-28">
      <div className="relative mx-auto max-w-5xl px-6">
        <h2 className="font-heading text-center text-3xl font-bold tracking-tight text-dark sm:text-4xl">
          Everything you need, nothing you don&apos;t.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate">
          We keep it simple so you can focus on running your business.
        </p>

        {/* ── Bento Grid ── */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {/* Card 1 — All-In-One (double width, dark premium card) */}
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121212] sm:col-span-2">
            <span className="absolute right-6 top-6 z-10 font-heading text-[10px] font-semibold uppercase tracking-[0.25em] text-white/15">
              Full-service // Fast launch
            </span>

            {/* Mockup image — pinned to bottom, spans full width on right */}
            <div className="pointer-events-none absolute bottom-0 right-0 hidden w-[67%] lg:block">
              <Image
                src="/assets/mockup-transparent.png"
                alt="Laptop displaying a website built by Nettsaga"
                width={600}
                height={400}
                className="w-full object-contain object-bottom"
              />
            </div>

            {/* Copy — overlaps the image top area */}
            <div className="relative z-10 p-8 sm:p-10">
              <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                True all-in-one
              </p>
              <h3 className="mt-3 font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl lg:max-w-[75%]">
                We handle the complexity, you handle the business.
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
                Design, development, hosting, domain, speed optimization — all
                bundled into one package. No juggling vendors.
              </p>

              {/* Checklist */}
              <div className="mt-8 grid max-w-sm grid-cols-2 gap-3">
                {checklist.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.06] px-4 py-3"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-[#121212]">
                      <item.icon className="h-3.5 w-3.5 stroke-[1.5]" />
                    </div>
                    <span className="text-xs font-medium text-white/80">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 — Predictable Pricing (square) */}
          <div className="relative overflow-hidden rounded-2xl border border-dark/[0.06] bg-white p-8">
            {/* N. Certified stamp */}
            <span className="absolute right-6 top-6 font-logo text-2xl font-bold italic text-dark/[0.06]">
              N.
            </span>
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Predictable Pricing
            </p>
            <h3 className="mt-3 font-heading text-xl font-bold tracking-tight text-dark">
              One transparent yearly fee.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              No monthly surprises. Know exactly what you pay, every year.
            </p>

            {/* Subscription toggle UI */}
            <div className="mt-6 rounded-xl border border-dark/[0.06] bg-paper p-5">
              {/* Toggle header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-dark">
                    Nettsaga Plan
                  </p>
                  <p className="mt-0.5 text-[10px] text-muted">
                    All-inclusive website package
                  </p>
                </div>
                {/* Toggle pill — locked to "Yearly" */}
                <div className="flex items-center rounded-full bg-dark/[0.06] p-0.5">
                  <span className="rounded-full px-3 py-1 text-[10px] text-muted">
                    Monthly
                  </span>
                  <span className="rounded-full bg-dark px-3 py-1 text-[10px] font-semibold text-white">
                    Yearly
                  </span>
                </div>
              </div>

              <div className="mt-4 border-t border-dashed border-dark/10" />

              {/* Line items */}
              <div className="mt-4 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate">Website + Design</span>
                  <Check className="h-3.5 w-3.5 text-dark/30" />
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate">Hosting &amp; Domain</span>
                  <Check className="h-3.5 w-3.5 text-dark/30" />
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate">Content Updates</span>
                  <Check className="h-3.5 w-3.5 text-dark/30" />
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate">Support</span>
                  <Check className="h-3.5 w-3.5 text-dark/30" />
                </div>
              </div>

              <div className="mt-4 border-t border-dashed border-dark/10" />

              {/* Total */}
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-slate">Hidden Fees</span>
                <span className="font-heading text-sm font-bold text-dark">
                  ₱0.00
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 — Infinite Support (square, image card) */}
          <div className="relative overflow-hidden rounded-2xl border border-dark/[0.06] bg-white">
            <span className="absolute right-6 top-6 z-10 font-heading text-[10px] font-semibold uppercase tracking-[0.25em] text-dark/15">
              Support // Included
            </span>
            <div className="relative z-10 p-8 pb-0">
              <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Always-on support
              </p>
              <h3 className="mt-3 font-heading text-xl font-bold tracking-tight text-dark">
                Updates are part of the deal.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                Need a text change or a new photo? Just send us a message.
              </p>
            </div>

            {/* Person with chat — pinned to bottom */}
            <div className="mt-4">
              <Image
                src="/assets/person-message.png"
                alt="Nettsaga support team member responding to a client message"
                width={300}
                height={300}
                className="w-full object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
