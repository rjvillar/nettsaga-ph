"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n/context";

const stepImages = [
  {
    src: "/assets/chat-bubbles.png",
    alt: "Chat conversation between a client and Nettsaga",
    width: 1990,
    height: 1080,
  },
  {
    src: "/assets/web-laptop.png",
    alt: "Laptop displaying a website built by Nettsaga on a solid rock base",
    width: 1332,
    height: 1080,
  },
  {
    src: "/assets/person-talking.png",
    alt: "Smiling Filipino professional discussing the project",
    width: 1246,
    height: 1080,
  },
];

const nums = ["01", "02", "03"];

export default function HowItWorks() {
  const { t } = useTranslation();

  return (
    <section
      id="how-it-works"
      className="bg-grain relative overflow-hidden bg-white py-20 sm:py-28"
    >
      <span className="absolute left-6 top-8 hidden font-mono text-[10px] uppercase tracking-widest text-dark/[0.07] lg:block">
        Status: System_Ready
      </span>
      <span className="absolute right-6 top-8 hidden font-mono text-[10px] uppercase tracking-widest text-dark/[0.07] lg:block">
        Timeline: 07_Days
      </span>

      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="font-heading text-center text-2xl font-bold leading-tight tracking-tight text-dark sm:text-[40px]">
          {t.howItWorks.title}<span className="text-muted">{t.howItWorks.titleMuted}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate sm:text-[22px]">
          {t.howItWorks.subtitle}
        </p>

        <div className="relative mt-16 sm:mt-20">
          <div className="pointer-events-none absolute inset-x-0 top-[18px] z-0 hidden lg:block">
            <div
              className="mx-auto h-px w-2/3"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(34,197,94,0.2) 20%, rgba(34,197,94,0.3) 50%, rgba(34,197,94,0.2) 80%, transparent)",
              }}
            />
            <div
              className="mx-auto -mt-px w-2/3"
              style={{
                height: "1px",
                backgroundImage:
                  "repeating-linear-gradient(90deg, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.08) 6px, transparent 6px, transparent 12px)",
              }}
            />
            <div className="absolute left-[16.67%] top-1/2 -translate-x-[2px] -translate-y-1/2">
              <div className="h-1.5 w-1.5 rounded-full bg-dark/10" />
            </div>
            <div className="absolute left-[33.33%] top-1/2 translate-x-[2px] -translate-y-1/2">
              <div className="h-1.5 w-1.5 rounded-full bg-dark/10" />
            </div>
            <div className="absolute left-[36%] top-1/2 -translate-x-[2px] -translate-y-1/2">
              <div className="h-1.5 w-1.5 rounded-full bg-dark/10" />
            </div>
            <div className="absolute left-[64%] top-1/2 translate-x-[2px] -translate-y-1/2">
              <div className="h-1.5 w-1.5 rounded-full bg-dark/10" />
            </div>
            <div className="absolute left-[66.67%] top-1/2 -translate-x-[2px] -translate-y-1/2">
              <div className="h-1.5 w-1.5 rounded-full bg-dark/10" />
            </div>
            <div className="absolute left-[83.33%] top-1/2 translate-x-[2px] -translate-y-1/2">
              <div className="h-1.5 w-1.5 rounded-full bg-dark/10" />
            </div>
          </div>

          <div className="relative z-10 grid gap-10 sm:grid-cols-3 sm:gap-6">
            {t.howItWorks.steps.map((step, i) => {
              const img = stepImages[i];
              const num = nums[i];
              return (
                <div
                  key={num}
                  className="flex flex-col overflow-hidden rounded-2xl border border-dark/[0.06] bg-paper"
                  style={{
                    boxShadow:
                      "0 2px 4px rgba(0,0,0,0.02), 0 12px 36px rgba(0,0,0,0.04)",
                  }}
                >
                  <div className="flex items-center gap-2 px-5 pt-4">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    <span className="font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-dark/40">
                      Step {num} — {step.phase}
                    </span>
                  </div>

                  <div className="mt-3 overflow-hidden px-4">
                    <div
                      className={`relative overflow-hidden rounded-xl ${num === "01" ? "flex aspect-[4/3] items-center justify-center bg-paper" : "aspect-[4/3]"}`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        className={
                          num === "01"
                            ? "w-[90%] object-contain"
                            : "h-full w-full object-cover"
                        }
                        sizes="(min-width: 640px) 33vw, 100vw"
                      />
                    </div>
                  </div>

                  <div className="flex flex-grow flex-col px-5 pb-5 pt-4">
                    <h3 className="font-heading text-lg font-bold tracking-tight text-dark">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">
                      {step.descriptionParts ? (
                        <>
                          {step.descriptionParts[0]}
                          <strong className="font-semibold text-dark">
                            {step.descriptionParts[1]}
                          </strong>
                          {step.descriptionParts[2]}
                        </>
                      ) : (
                        step.description
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
