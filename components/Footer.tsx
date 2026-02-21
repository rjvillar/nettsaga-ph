import { Mail } from "lucide-react";

const quickLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Why us", href: "#local-edge" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dark pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <span className="font-logo text-2xl italic font-black text-white">
              Nettsaga
            </span>
            <p className="mt-3 text-sm leading-relaxed text-white/40">
              Burgundy Corporate Tower, 252 Sen. Gil J. Puyat Ave, Makati City,
              1200 Metro Manila
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-[0.15em] text-white/50">
              Quick links
            </h4>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-[0.15em] text-white/50">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:support@nettsaga.com"
                  className="inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 stroke-[1.5]" />
                  support@nettsaga.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Nettsaga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
