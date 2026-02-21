import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-grain relative overflow-hidden bg-dark py-20 sm:py-28 lg:py-32">
      {/* ── PayMongo-style diagonal light wash ── */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.07)_45%,rgba(255,255,255,0.12)_55%,rgba(255,255,255,0.05)_70%,transparent_85%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_55%_at_68%_42%,rgba(255,255,255,0.10),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,rgba(0,0,0,0.5))]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-8">
        {/* Left — copy */}
        <div className="max-w-xl">
          <h1 className="font-heading text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
            Get your business
            <br />
            online this week.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/50 sm:text-lg">
            Website + hosting + support for one fixed yearly fee. No surprises,
            no hidden costs — just a website that works for your business.
          </p>
          <a
            href="#how-it-works"
            className="btn-glow mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium tracking-wide text-dark transition-colors hover:bg-white/90"
          >
            See how it works
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>

        {/* Right — layered collage (PayMongo-style) */}
        <div className="relative hidden h-[520px] lg:block">
          {/* ── Person Photos ── */}

          {/* Center — person with tablet (main, largest) */}
          <div className="absolute left-1/2 top-1/2 z-20 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-white/5">
            <Image
              src="/assets/person-tablet.png"
              alt="Filipino professional holding a tablet"
              fill
              className="object-cover"
              sizes="300px"
            />
          </div>

          {/* Bottom-left — person with laptop */}
          <div className="absolute bottom-4 -left-4 z-10 h-[169px] w-[169px] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/assets/person-laptop.png"
              alt="Filipino professional working on laptop"
              fill
              className="object-cover"
              sizes="169px"
            />
          </div>

          {/* Upper-right — person smiling */}
          <div className="absolute -right-4 top-2 z-10 h-[169px] w-[169px] overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/assets/person-smiling.png"
              alt="Happy Filipino professional"
              fill
              className="object-cover"
              sizes="169px"
            />
          </div>

          {/* ── Floating UI Cards ── */}

          {/* Live card */}
          <div className="absolute bottom-[40px] right-[-50px] z-30 w-[200px] overflow-hidden rounded-xl border border-white/10 bg-white">
            <Image
              src="/assets/live-card.png"
              alt="System: Live status"
              width={150}
              height={150}
              className="block w-full"
            />
          </div>

          {/* SSL */}
          <div className="absolute left-[20px] top-[160px] z-30 w-[139px] overflow-hidden rounded-xl border border-white/10 bg-white">
            <Image
              src="/assets/ssl.png"
              alt="Verified Secure SSL badge"
              width={170}
              height={40}
              className="block w-full"
            />
          </div>

          {/* Performance score */}
          <div className="absolute left-[200px] top-[-10px] z-30 w-[112px] overflow-hidden rounded-xl border border-white/10 bg-white">
            <Image
              src="/assets/performance-score.png"
              alt="Performance Score: 95"
              width={130}
              height={130}
              className="block w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
