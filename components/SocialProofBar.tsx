"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/i18n/context";

const cities = [
  {
    src: "/assets/manila.png",
    alt: "Manila",
    width: 1076,
    height: 250,
    size: "max-w-[12.5rem] sm:max-w-[13.75rem]",
  },
  {
    src: "/assets/cebu.png",
    alt: "Cebu",
    width: 774,
    height: 250,
    size: "max-w-[9.0625rem] sm:max-w-[10rem]",
  },
  {
    src: "/assets/davao.png",
    alt: "Davao",
    width: 1010,
    height: 250,
    size: "max-w-[12.5rem] sm:max-w-[13.75rem]",
  },
];

export default function SocialProofBar() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-dark py-14 sm:py-16">
      <div className="relative mx-auto w-full max-w-[90rem] px-6 md:px-12 lg:px-24">
        <p className="text-center font-heading text-lg font-semibold tracking-tight text-white/90 sm:text-xl">
          {t.socialProof.headline}
        </p>

        <div className="mt-10 flex items-center justify-center gap-8 sm:gap-12">
          {cities.map((city) => (
            <div
              key={city.alt}
              className={`flex w-1/3 justify-center ${city.size}`}
            >
              <Image
                src={city.src}
                alt={city.alt}
                width={city.width}
                height={city.height}
                className="h-5 w-auto object-contain sm:h-auto sm:w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
