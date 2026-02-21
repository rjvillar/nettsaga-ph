import { MessageCircle, Code, Users, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    label: "Talk to us",
    detail: "Tell us what you need",
    accent: "#3B82F6",
  },
  {
    icon: Code,
    label: "We build it",
    detail: "Your site takes shape",
    accent: "#22C55E",
  },
  {
    icon: Users,
    label: "You review it",
    detail: "Approve or refine",
    accent: "#8B5CF6",
  },
  {
    icon: Rocket,
    label: "Go live",
    detail: "Launch & ongoing support",
    accent: "#F43F5E",
  },
];

export default function BuildPipeline() {
  return (
    <div className="rounded-2xl border border-dark/[0.06] bg-paper p-5 sm:p-6">
      <div className="flex items-center gap-2">
        <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
        <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-dark/40">
          Pipeline // How_It_Works
        </span>
      </div>

      <div className="mt-5 flex flex-col gap-0">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-start gap-3.5">
            {/* Vertical line + node */}
            <div className="flex flex-col items-center">
              <div
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                style={{
                  backgroundColor: `${step.accent}14`,
                  color: step.accent,
                }}
              >
                <step.icon className="h-3.5 w-3.5" />
              </div>
              {i < steps.length - 1 && (
                <div className="h-6 w-px border-l border-dashed border-dark/[0.12]" />
              )}
            </div>

            {/* Content */}
            <div className="pt-1">
              <p className="text-xs font-semibold text-dark">{step.label}</p>
              <p className="font-mono text-[10px] text-dark/40">
                {step.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-lg border border-dark/[0.05] bg-white px-3 py-2 text-center">
        <p className="font-mono text-[10px] font-semibold text-dark/50">
          No contracts — cancel anytime
        </p>
      </div>
    </div>
  );
}
