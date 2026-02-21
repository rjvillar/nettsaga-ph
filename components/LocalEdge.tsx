import Image from "next/image";

const features = [
  {
    title: "Built for speed",
    description:
      "Optimized for Philippine internet. Your site loads fast on any connection, keeping customers engaged.",
  },
  {
    title: "Mobile-first design",
    description:
      "Over 90% of Filipinos browse on mobile. Every site we build looks and works great on phones first.",
  },
  {
    title: "Your own online presence",
    description:
      "A professional website that makes your business easy to find, builds trust, and turns visitors into customers.",
  },
  {
    title: "Always monitored",
    description:
      "We track uptime, speed, and security 24/7. If something needs attention, we handle it before you notice.",
  },
];

export default function LocalEdge() {
  return (
    <section id="local-edge" className="bg-grain relative bg-paper py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-6">
        {/* ── Top — centered headline ── */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-[40px] font-bold leading-tight tracking-tight text-dark">
            Modern tech that{" "}
            <span className="text-muted">works for your business</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[22px] text-slate">
            We build with the latest tools but we understand the Philippine
            market. Fast, secure, and optimized for local customers.
          </p>
        </div>

        {/* ── Middle — hero image with baked-in widgets ── */}
        <div className="mt-14">
          <Image
            src="/assets/why-us.png"
            alt="Filipino professional managing his business online with Nettsaga — surrounded by performance metrics, deploy pipeline, and mobile-first indicators"
            width={2060}
            height={1080}
            className="w-full rounded-2xl object-contain"
            priority
          />
        </div>

        {/* ── Bottom — feature grid ── */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
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
