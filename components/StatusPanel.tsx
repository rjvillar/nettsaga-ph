"use client";

import { useTranslation } from "@/lib/i18n/context";

const values = ["99.9%", "95", "Active", "Same-day"];
const accents = ["#22C55E", "#3B82F6", "#8B5CF6", "#F59E0B"];

export default function StatusPanel() {
  const { t } = useTranslation();

  return (
    <div className="bg-grain relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121212] p-5 sm:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.04)_50%,transparent_75%)]" />

      <div className="relative">
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500 shadow-[0_0_0.375rem_rgba(34,197,94,0.4)]" />
          <span className="font-mono text-[0.5625rem] font-semibold uppercase tracking-[0.2em] text-white/30">
            Status // All_Systems
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2.5">
          {t.statusPanel.metrics.map((m, i) => (
            <div
              key={m.label}
              className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-3"
            >
              <p className="font-mono text-[0.5625rem] uppercase tracking-[0.15em] text-white/25">
                {m.label}
              </p>
              <p
                className="mt-1 font-heading text-lg font-bold leading-none"
                style={{ color: accents[i] }}
              >
                {values[i]}
              </p>
              <div className="mt-1.5 flex items-center gap-1.5">
                <div
                  className="h-1 w-1 rounded-full"
                  style={{ backgroundColor: accents[i] }}
                />
                <span className="font-mono text-[0.5rem] text-white/30">
                  {m.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2">
          <div className="flex items-end gap-[0.125rem]">
            {[40, 65, 50, 80, 55, 70, 90, 60, 75, 85, 45, 95].map(
              (h, i) => (
                <div
                  key={i}
                  className="w-[0.1875rem] rounded-sm bg-green-500/40"
                  style={{ height: `${h * 0.00875}rem` }}
                />
              ),
            )}
          </div>
          <span className="ml-1.5 font-mono text-[0.5625rem] text-white/30">
            {t.statusPanel.monitoring}
          </span>
        </div>
      </div>
    </div>
  );
}
