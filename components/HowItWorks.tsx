"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n/context";

const stepImages = [
  {
    src: "/assets/chat-bubbles.png",
    alt: "Chat conversation between a client and Regen Digital Solutions",
    width: 1990,
    height: 1080,
  },
  {
    src: "/assets/web-laptop.png",
    alt: "Laptop displaying a website built by Regen Digital Solutions on a solid rock base",
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
      className="bg-grain relative overflow-hidden bg-paper py-20 sm:py-28"
    >
      <span className="absolute left-6 top-8 hidden font-mono text-[0.625rem] uppercase tracking-widest text-dark/[0.07] lg:block">
        Status: System_Ready
      </span>
      <span className="absolute right-6 top-8 hidden font-mono text-[0.625rem] uppercase tracking-widest text-dark/[0.07] lg:block">
        Timeline: 07_Days
      </span>

      <div className="relative mx-auto mt-24 w-full max-w-[100rem] px-6 md:px-12 lg:px-24">
        <h2 className="font-heading text-center text-4xl font-semibold leading-tight tracking-[-0.02em] bg-gradient-to-r from-dark to-dark/40 bg-clip-text text-transparent sm:text-[3.5rem]">
          {t.howItWorks.title}
          <span>{t.howItWorks.titleMuted}</span>
        </h2>

        <div className="mt-20 flex flex-col gap-24 sm:gap-32">
          {t.howItWorks.steps.map((step, i) => {
            const img = stepImages[i];
            const num = nums[i];
            const isEven = i % 2 !== 0;

            return (
              <div
                key={num}
                className={`flex flex-col items-center gap-12 sm:gap-20 md:flex-row ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 flex flex-col justify-center">
                  <span className="font-mono text-sm font-semibold tracking-widest text-muted">
                    {num}
                  </span>
                  <h3 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.01em] text-dark md:text-5xl">
                    {step.title}
                  </h3>
                </div>

                <div className="flex-1 w-full">
                  <div className="relative overflow-hidden rounded-xl border border-dark/[0.04] bg-paper shadow-[0_2rem_4rem_rgba(0,0,0,0.04)] ring-1 ring-white/50 aspect-square sm:aspect-[4/3]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/[0.02] to-transparent mix-blend-multiply" />
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      className={`h-full w-full ${num === "01" ? "object-contain p-8" : "object-cover"}`}
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
