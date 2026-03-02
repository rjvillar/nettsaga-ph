"use client";

import { Layers, Shield, Zap, Headset } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";

const icons = [Layers, Shield, Zap, Headset];
const accents = ["#3B82F6", "#22C55E", "#F59E0B", "#8B5CF6"];

export default function ServiceStack() {
  const { t } = useTranslation();

  return (
    <div className="rounded-lg border border-dark/[0.06] bg-white p-5 sm:p-6">
      <div className="flex items-center gap-2">
        <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
        <span className="font-mono text-[0.5625rem] font-semibold uppercase tracking-[0.2em] text-dark/40">
          Bundle // All_In_One
        </span>
      </div>

      <div className="mt-4 flex flex-col gap-2.5">
        {t.serviceStack.pillars.map((p, i) => {
          const Icon = icons[i];
          return (
            <div
              key={p.label}
              className="flex items-center gap-3 rounded-lg border border-dark/[0.05] bg-paper px-3.5 py-3"
            >
              <div
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                style={{
                  backgroundColor: `${accents[i]}12`,
                  color: accents[i],
                }}
              >
                <Icon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-dark">{p.label}</p>
                <p className="font-mono text-[0.625rem] text-dark/40">{p.detail}</p>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-center font-mono text-[0.5625rem] uppercase tracking-[0.15em] text-dark/30">
        {t.serviceStack.footer}
      </p>
    </div>
  );
}
