import { MessageCircle } from "lucide-react";

export default function CTABanner() {
  return (
    <section
      id="cta"
      className="relative flex min-h-[calc(100vh-64px)] items-center bg-paper py-20 sm:py-28"
    >
      <div className="relative mx-auto w-full max-w-7xl px-6">
        {/* Dark container */}
        <div className="bg-grain relative flex min-h-[75vh] items-center justify-center overflow-hidden rounded-3xl bg-dark px-6 sm:px-12">
          {/* Hero-style diagonal light wash */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.07)_45%,rgba(255,255,255,0.12)_55%,rgba(255,255,255,0.05)_70%,transparent_85%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_55%_at_68%_42%,rgba(255,255,255,0.10),transparent)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,rgba(0,0,0,0.5))]" />

          {/* Content */}
          <div className="relative z-20 mx-auto max-w-xl text-center">
            <h2 className="font-heading text-[40px] font-bold leading-tight tracking-tight text-white">
              Ready to get <span className="text-white/50">online?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[22px] text-white/50">
              No commitment needed. Let&apos;s have a quick chat about what you
              need and we&apos;ll take it from there.
            </p>
            <a
              href="https://m.me/nettsaga"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold tracking-wide text-dark transition-colors hover:bg-white/90"
            >
              <MessageCircle className="h-4 w-4" />
              Let&apos;s talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
