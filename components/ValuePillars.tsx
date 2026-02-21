import { Banknote, Rocket, Wrench, Headphones } from "lucide-react";

const pillars = [
  {
    icon: Banknote,
    title: "One Fixed Yearly Fee",
    description:
      "No monthly surprises. One transparent payment covers everything for the whole year.",
  },
  {
    icon: Rocket,
    title: "Fast Launch",
    description:
      "Most websites are ready within a week. You'll see a draft before anything goes live.",
  },
  {
    icon: Wrench,
    title: "We Handle Everything",
    description:
      "Design, development, hosting, domain — we take care of all the technical stuff.",
  },
  {
    icon: Headphones,
    title: "Support Included",
    description:
      "Need a text change or a new photo? Just send us a message. Updates are part of the deal.",
  },
];

export default function ValuePillars() {
  return (
    <section className="bg-grain relative bg-paper py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-center text-3xl font-bold tracking-tight text-dark sm:text-4xl">
          Everything you need, nothing you don&apos;t.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate">
          We keep it simple so you can focus on running your business.
        </p>

        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4 rounded-2xl border border-border overflow-hidden">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="glass p-6 transition-colors hover:bg-white/80"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-paper text-dark">
                <pillar.icon className="h-5 w-5 stroke-[1.5]" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-dark">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
