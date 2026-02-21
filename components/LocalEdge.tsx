import { Smartphone, Globe, CreditCard } from "lucide-react";
import PaymentBadges from "./PaymentBadges";

const features = [
  {
    icon: CreditCard,
    title: "Pay the way you want",
    description:
      "GCash, Maya, bank transfer, or credit card — whatever is easiest for you.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first",
    description:
      "Over 90% of Filipinos browse on mobile. Every site we build looks great on phones first.",
  },
  {
    icon: Globe,
    title: "Fast everywhere",
    description:
      "Optimized for Philippine internet speeds so your customers never wait.",
  },
];

export default function LocalEdge() {
  return (
    <section id="local-edge" className="bg-grain relative bg-paper py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left — copy */}
          <div>
            <h2 className="font-heading text-[40px] font-bold leading-tight tracking-tight text-dark">
              Modern tech, local heart.
            </h2>
            <p className="mt-4 text-[22px] text-slate">
              We build with the latest tools but we understand the Philippine
              market. Your customers pay with GCash, browse on their phones, and
              expect things to load fast.
            </p>

            <div className="mt-10 space-y-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-paper text-dark">
                    <f.icon className="h-5 w-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-dark">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <PaymentBadges />
            </div>
          </div>

          {/* Right — decorative placeholder */}
          <div className="relative hidden lg:block">
            <div className="aspect-square rounded-3xl border border-border bg-white p-8">
              <div className="glass flex h-full flex-col items-center justify-center gap-4 rounded-2xl p-8 shadow-tactile">
                <Smartphone className="h-12 w-12 text-muted stroke-[1]" />
                <div className="h-3 w-24 rounded-full bg-dark/8" />
                <div className="h-3 w-32 rounded-full bg-dark/4" />
                <div className="h-3 w-20 rounded-full bg-dark/8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
