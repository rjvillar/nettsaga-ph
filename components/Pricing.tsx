import { Check, MessageCircle } from "lucide-react";

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

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-grain relative border-t border-dark/[0.06] bg-white py-20 sm:py-28"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold leading-tight tracking-tight text-dark sm:text-[40px]">
            Simple, transparent{" "}
            <span className="text-muted">pricing.</span>
          </h2>
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
                  ? "border-2 border-dark bg-paper shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
                  : "border border-dark/[0.06] bg-paper"
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
  );
}
