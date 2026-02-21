import { Layers, Shield, Zap, Headset } from "lucide-react";

const pillars = [
  {
    icon: Layers,
    label: "Design & Development",
    detail: "Custom-built from scratch",
    accent: "#3B82F6",
  },
  {
    icon: Shield,
    label: "Hosting & Security",
    detail: "Managed infrastructure",
    accent: "#22C55E",
  },
  {
    icon: Zap,
    label: "SEO & Performance",
    detail: "Optimized for speed",
    accent: "#F59E0B",
  },
  {
    icon: Headset,
    label: "Ongoing Support",
    detail: "Updates & monitoring",
    accent: "#8B5CF6",
  },
];

export default function ServiceStack() {
  return (
    <div className="rounded-2xl border border-dark/[0.06] bg-paper p-5 sm:p-6">
      <div className="flex items-center gap-2">
        <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
        <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-dark/40">
          Bundle // All_In_One
        </span>
      </div>

      <div className="mt-4 flex flex-col gap-2.5">
        {pillars.map((p) => (
          <div
            key={p.label}
            className="flex items-center gap-3 rounded-lg border border-dark/[0.05] bg-white px-3.5 py-3"
          >
            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
              style={{
                backgroundColor: `${p.accent}12`,
                color: p.accent,
              }}
            >
              <p.icon className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-dark">{p.label}</p>
              <p className="font-mono text-[10px] text-dark/40">{p.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.15em] text-dark/30">
        One yearly fee — everything included
      </p>
    </div>
  );
}
