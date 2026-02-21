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
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-center text-2xl font-bold leading-tight tracking-tight text-dark sm:text-[40px]">
          Everything you need,{" "}
          <span className="text-muted">nothing you don&apos;t.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate sm:text-[22px]">
          We keep it simple so you can focus on running your business.
        </p>

        {/* ── Bento Grid ── */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {/* Card 1 — All-In-One (double width, dark premium card) */}
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121212] sm:col-span-2 lg:max-h-[80vh]">
            <span className="absolute right-6 top-6 z-10 hidden font-heading text-[10px] font-semibold uppercase tracking-[0.25em] text-white/15 sm:block">
              Full-service // Fast launch
            </span>

            {/* Mockup image — pinned to bottom, spans full width on right */}
            <div className="pointer-events-none absolute -bottom-15 right-0 hidden w-[67%] lg:block">
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
              <p className="hidden font-heading text-xs font-semibold uppercase tracking-[0.2em] text-white/40 sm:block">
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
              <div className="mt-8 grid max-w-sm grid-cols-1 gap-3 sm:grid-cols-2">
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

          {/* Card 2 — No Hidden Fees (square) */}
          <div className="relative flex flex-col overflow-hidden rounded-2xl border border-dark/[0.06] bg-white p-8">
            {/* N. Certified stamp */}
            <span className="absolute right-6 top-6 font-logo text-2xl font-bold italic text-dark/[0.06]">
              N.
            </span>
            <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Transparent billing
            </p>
            <h3 className="mt-3 font-heading text-xl font-bold tracking-tight text-dark">
              No hidden fees. Ever.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">
              One yearly fee covers everything. No setup costs, no surprise
              invoices, no contracts.
            </p>

            {/* Simple trust checklist */}
            <div className="mt-6 flex-1 space-y-3">
              <div className="flex items-center gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-green-500" />
                <span className="text-sm text-dark/70">No setup fees</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-green-500" />
                <span className="text-sm text-dark/70">
                  No lock-in contracts
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-green-500" />
                <span className="text-sm text-dark/70">Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-green-500" />
                <span className="text-sm text-dark/70">You own everything</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-green-500" />
                <span className="text-sm text-dark/70">
                  Free domain included
                </span>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-paper px-4 py-3">
              <p className="text-center text-xs text-slate">
                Hidden fees:{" "}
                <span className="font-heading font-bold text-dark">₱0.00</span>
              </p>
            </div>
          </div>

          {/* Card 3 — Infinite Support (square, image card) */}
          <div className="relative overflow-hidden rounded-2xl border border-dark/[0.06] bg-white">
            <span className="absolute right-6 top-6 z-10 hidden font-heading text-[10px] font-semibold uppercase tracking-[0.25em] text-dark/15 sm:block">
              Support // Included
            </span>
            <div className="relative z-10 p-8 pb-0">
              <p className="hidden font-heading text-xs font-semibold uppercase tracking-[0.2em] text-muted sm:block">
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
