import { MessageSquare, PenTool, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "1",
    title: "Quick chat",
    description:
      "We learn about your business and what you need. No pressure, just a friendly conversation.",
  },
  {
    icon: PenTool,
    step: "2",
    title: "We build a draft",
    description:
      "You get a first version to review. We refine it together until you're happy.",
  },
  {
    icon: CheckCircle,
    step: "3",
    title: "You decide",
    description:
      "If you like it, we publish it. If not, no worries — there's no obligation.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-grain relative bg-white py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="font-heading text-center text-3xl font-bold tracking-tight text-dark sm:text-4xl">
          How it works
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate">
          Three simple steps — no complicated process, no long contracts.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="relative text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-dark text-white btn-glow">
                <s.icon className="h-6 w-6 stroke-[1.5]" />
              </div>
              <span className="mt-4 inline-block font-heading text-xs font-bold uppercase tracking-[0.2em] text-muted">
                Step {s.step}
              </span>
              <h3 className="mt-2 font-heading text-xl font-semibold text-dark">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
