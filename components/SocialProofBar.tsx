import Image from "next/image";

const cities = [
  {
    src: "/assets/manila.png",
    alt: "Manila",
    width: 500,
    height: 140,
    size: "max-w-[200px] sm:max-w-[220px]",
  },
  {
    src: "/assets/cebu.png",
    alt: "Cebu",
    width: 380,
    height: 140,
    size: "max-w-[170px] sm:max-w-[175px]",
  },
  {
    src: "/assets/davao.png",
    alt: "Davao",
    width: 460,
    height: 140,
    size: "max-w-[200px] sm:max-w-[220px]",
  },
];

export default function SocialProofBar() {
  return (
    <section className="border-y border-dark/10 bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center font-heading text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Built for the Philippines
        </p>
        <p className="mt-2 text-center font-heading text-lg font-semibold tracking-tight text-dark sm:text-xl">
          Trusted by businesses in Manila, Cebu, &amp; Davao.
        </p>

        <div className="mt-10 flex items-center justify-center gap-8 sm:gap-12">
          {cities.map((city) => (
            <div key={city.alt} className={`w-1/3 ${city.size}`}>
              <Image
                src={city.src}
                alt={city.alt}
                width={city.width}
                height={city.height}
                className="w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
