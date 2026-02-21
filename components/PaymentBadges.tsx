import { CreditCard } from "lucide-react";

export default function PaymentBadges() {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">
        GCash
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">
        Maya
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/70">
        <CreditCard className="h-3 w-3 stroke-[1.5]" />
        Cards
      </span>
    </div>
  );
}
