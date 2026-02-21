import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ComparisonTable from "@/components/ComparisonTable";
import { Check, MessageCircle, Shield, Zap, Code2, RefreshCw } from "lucide-react";

export const metadata = {
  title: "Pricing — Nettsaga",
  description:
    "Simple, transparent pricing. One yearly fee — everything included. Compare plans and features.",
};

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses and startups",
    price: "₱9,999",
    period: "/ year",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Contact form",
      "SSL certificate",
      "Basic SEO",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Business",
    description: "Ideal for growing small and medium businesses",
    price: "₱14,999",
    period: "/ year",
    features: [
      "Everything in Starter",
      "Up to 10 pages",
      "Custom design",
      "Social media integration",
      "SEO optimization",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Growth",
    description: "For larger companies with bigger needs",
    price: "₱29,999",
    period: "/ year",
    features: [
      "Everything in Business",
      "Up to 20 pages",
      "E-commerce ready",
      "Advanced SEO",
      "Analytics dashboard",
      "Dedicated support",
    ],
    popular: false,
  },
  {
    name: "Custom",
    description: "Tailor-made solution for unique needs",
    price: "Custom",
    period: "",
    features: [
      "Fully custom solution",
      "Unlimited pages",
      "Advanced integrations",
      "Custom functionality",
      "Specialized design",
      "SLA guarantee",
    ],
    popular: false,
  },
];

const trustItems = [
  {
    icon: Shield,
    title: "No lock-in",
    description: "Cancel anytime. No contracts, no cancellation fees.",
  },
  {
    icon: Zap,
    title: "Live in 7 days",
    description: "From kickoff to launch in a single week.",
  },
  {
    icon: Code2,
    title: "You own everything",
    description: "Domain, code, content — it's all yours.",
  },
  {
    icon: RefreshCw,
    title: "Free updates",
    description: "Content changes and tweaks included, always.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Header solid />

      {/* ── Section 1: Hero + Pricing Cards ── */}
      <section className="bg-grain relative bg-paper pt-28 pb-20 sm:pt-36 sm:pb-28">
        {/* Monospace corner accents */}
        <span className="absolute left-6 top-28 hidden font-mono text-[10px] uppercase tracking-widest text-dark/[0.07] lg:block">
          Plans // Overview
        </span>
        <span className="absolute right-6 top-28 hidden font-mono text-[10px] uppercase tracking-widest text-dark/[0.07] lg:block">
          Billing: Yearly
        </span>

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-muted">
              Pricing // Plans
            </p>
            <h1 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-tight text-dark sm:text-[40px]">
              Simple, transparent{" "}
              <span className="text-muted">pricing.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate sm:text-[22px]">
              One yearly fee — everything included. No monthly surprises.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl p-6 sm:p-7 ${
                  plan.popular
                    ? "border-2 border-dark bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
                    : "border border-dark/[0.06] bg-white"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 right-6 rounded-full bg-dark px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                    Popular
                  </span>
                )}

                <h3 className="font-heading text-lg font-bold tracking-tight text-dark">
                  {plan.name}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate">
                  {plan.description}
                </p>

                <div className="mt-5">
                  <span className="font-heading text-3xl font-bold tracking-tight text-dark">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="ml-1 text-sm text-muted">{plan.period}</span>
                  )}
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                      <span className="text-sm text-slate">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold tracking-wide transition-colors ${
                    plan.popular
                      ? "bg-dark text-white hover:bg-dark/90"
                      : "border border-dark/[0.1] bg-white text-dark hover:bg-dark/[0.04]"
                  }`}
                >
                  <MessageCircle className="h-4 w-4" />
                  Get started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Feature Comparison ── */}
      <section className="bg-grain relative border-t border-dark/[0.06] bg-white py-20 sm:py-28">
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-muted">
              Compare // Features
            </p>
            <h2 className="mt-3 font-heading text-2xl font-bold leading-tight tracking-tight text-dark sm:text-[40px]">
              What&apos;s included in{" "}
              <span className="text-muted">each plan</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate sm:text-[22px]">
              Every plan comes with hosting, updates, and support built in.
            </p>
          </div>

          <div className="mt-14">
            <ComparisonTable />
          </div>
        </div>
      </section>

      {/* ── Section 3: Trust Strip ── */}
      <section className="bg-grain relative border-t border-dark/[0.06] bg-paper py-16 sm:py-20">
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-dark/[0.06] bg-white">
                  <item.icon className="h-5 w-5 text-dark/60" />
                </div>
                <h3 className="mt-3 font-heading text-sm font-bold tracking-tight text-dark">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-slate">{item.description}</p>
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
                Not sure which plan{" "}
                <span className="text-white/50">fits?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base text-white/50 sm:text-[22px]">
                No commitment needed. Let&apos;s have a quick chat and figure
                out the best option for your business.
              </p>
              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold tracking-wide text-dark transition-colors hover:bg-white/90"
              >
                <MessageCircle className="h-4 w-4" />
                Talk to us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
