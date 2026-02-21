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
    <section className="border-y border-dark/[0.06] bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-center font-heading text-lg font-semibold tracking-tight text-dark sm:text-xl">
          Built for the Philippines. Optimized for Manila, Cebu, &amp; Davao.
        </p>

        <div className="mt-10 flex items-center justify-center gap-8 sm:gap-12">
          {cities.map((city) => (
            <div key={city.alt} className={`w-1/3 ${city.size}`}>
              <Image
                src={city.src}
                alt={city.alt}
                width={city.width}
                height={city.height}
                className="w-full object-contain grayscale transition-[filter] duration-300 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
