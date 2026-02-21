export default function StatusPanel() {
  const metrics = [
    {
      label: "Uptime",
      value: "99.9%",
      status: "Operational",
      accent: "#22C55E",
    },
    {
      label: "PageSpeed",
      value: "95",
      status: "Optimized",
      accent: "#3B82F6",
    },
    {
      label: "SSL",
      value: "Active",
      status: "Secured",
      accent: "#8B5CF6",
    },
    {
      label: "Response",
      value: "Same-day",
      status: "Available",
      accent: "#F59E0B",
    },
  ];

  return (
    <div className="bg-grain relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121212] p-5 sm:p-6">
      {/* Subtle light wash */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.04)_50%,transparent_75%)]" />

      <div className="relative">
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.4)]" />
          <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30">
            Status // All_Systems
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2.5">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-lg border border-white/[0.06] bg-white/[0.03] p-3"
            >
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/25">
                {m.label}
              </p>
              <p
                className="mt-1 font-heading text-lg font-bold leading-none"
                style={{ color: m.accent }}
              >
                {m.value}
              </p>
              <div className="mt-1.5 flex items-center gap-1.5">
                <div
                  className="h-1 w-1 rounded-full"
                  style={{ backgroundColor: m.accent }}
                />
                <span className="font-mono text-[8px] text-white/30">
                  {m.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2">
          {/* Mini activity bars */}
          <div className="flex items-end gap-[2px]">
            {[40, 65, 50, 80, 55, 70, 90, 60, 75, 85, 45, 95].map(
              (h, i) => (
                <div
                  key={i}
                  className="w-[3px] rounded-sm bg-green-500/40"
                  style={{ height: `${h * 0.14}px` }}
                />
              ),
            )}
          </div>
          <span className="ml-1.5 font-mono text-[9px] text-white/30">
            24/7 monitoring active
          </span>
        </div>
      </div>
    </div>
  );
}
