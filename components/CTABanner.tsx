import { MessageCircle } from "lucide-react";

export default function CTABanner() {
  return (
    <section id="cta" className="bg-grain relative bg-dark py-20 sm:py-28">
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to get online?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-white/50">
          No commitment needed. Let&apos;s have a quick chat about what you need
          and we&apos;ll take it from there.
        </p>
        <a
          href="https://m.me/nettsaga"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold tracking-wide text-dark transition-colors hover:bg-white/90"
        >
          <MessageCircle className="h-4 w-4" />
          Let&apos;s talk
        </a>
      </div>
    </section>
  );
}
