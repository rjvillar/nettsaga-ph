"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n/context";

export default function LocalEdge() {
  const { t } = useTranslation();

  return (
    <section id="local-edge" className="bg-grain relative bg-paper py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold leading-tight tracking-tight text-dark sm:text-[2.5rem]">
            {t.localEdge.title}
            <span className="text-muted">{t.localEdge.titleMuted}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate sm:text-[1.375rem]">
            {t.localEdge.subtitle}
          </p>
        </div>

        <div className="mt-14">
          <Image
            src="/assets/why-us.png"
            alt={t.localEdge.altImage}
            width={2060}
            height={1080}
            className="w-full rounded-2xl object-contain"
            priority
          />
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.localEdge.features.map((f) => (
            <div key={f.title}>
              <h3 className="font-heading text-sm font-bold text-dark">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
