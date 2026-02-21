import { ShieldCheck } from "lucide-react";

export default function TrustBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70">
      <ShieldCheck className="h-3.5 w-3.5" />
      <span>No Binding Contracts</span>
      <span className="text-white/30">|</span>
      <span>100% Transparency</span>
    </div>
  );
}
