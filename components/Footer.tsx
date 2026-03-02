"use client";

import { Mail } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";

const linkHrefs = [
  "/#how-it-works",
  "/#local-edge",
  "/pricing",
  "/#portfolio",
  "/#faq",
  "/about",
  "/contact",
];

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark pt-16 pb-8">
      <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12 lg:px-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <span className="font-logo text-2xl italic font-black text-white">
              Nettsaga
            </span>
            <p className="mt-3 text-sm leading-relaxed text-white/40">
              Burgundy Corporate Tower, 252 Sen. Gil J. Puyat Ave, Makati City,
              1200 Metro Manila
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-[0.15em] text-white/50">
              {t.footer.quickLinks}
            </h4>
            <ul className="mt-4 space-y-3">
              {t.footer.links.map((label, i) => (
                <li key={linkHrefs[i]}>
                  <a
                    href={linkHrefs[i]}
                    className="text-sm text-white/40 transition-colors hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-[0.15em] text-white/50">
              {t.footer.getInTouch}
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

        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-white/30">
            {t.footer.copyright.replace("{year}", String(new Date().getFullYear()))}
          </p>
        </div>
      </div>
    </footer>
  );
}
