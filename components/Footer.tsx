import { Mail, MessageCircle } from "lucide-react";
import PaymentBadges from "./PaymentBadges";
import TrustBadge from "./TrustBadge";

const quickLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Why us", href: "#local-edge" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-dark pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <span className="font-logo text-2xl italic font-black text-white">
              Nettsaga<span className="text-white">.</span>
            </span>
            <p className="mt-3 text-sm leading-relaxed text-white/40">
              Professional websites for Philippine businesses. One fixed yearly
              fee — no surprises.
            </p>
            <div className="mt-4">
              <PaymentBadges />
            </div>
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
                  href="mailto:hello@nettsaga.com"
                  className="inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 stroke-[1.5]" />
                  hello@nettsaga.com
                </a>
              </li>
              <li>
                <a
                  href="https://m.me/nettsaga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 stroke-[1.5]" />
                  Messenger / Viber
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Nettsaga. All rights reserved.
          </p>
          <TrustBadge />
        </div>
      </div>
    </footer>
  );
}
