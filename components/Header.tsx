"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/lib/i18n/context";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const navHrefs = [
  "/#how-it-works",
  "/pricing",
  "/portfolio",
  "/about",
  "/careers",
  "/contact",
];

export default function Header({ solid = false }: { solid?: boolean }) {
  const { t, locale, setLocale } = useTranslation();
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const lenis = (window as unknown as Record<string, unknown>).__lenis as
      | { stop: () => void; start: () => void }
      | undefined;
    if (mobileOpen) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
    return () => lenis?.start();
  }, [mobileOpen]);

  const navLabels = [
    t.nav.howItWorks,
    t.nav.pricing,
    t.nav.portfolio,
    t.nav.about,
    t.nav.careers,
    t.nav.contact,
  ];

  useGSAP(
    () => {
      if (!headerRef.current || solid) return;

      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          start: "50px top",
          toggleActions: "play none none reverse",
        },
      });

      headerTl.to(headerRef.current, {
        backgroundColor: "#0B0B0B",
        borderBottomColor: "rgba(255, 255, 255, 0.08)",
        duration: 0.3,
        ease: "power2.inOut",
      });
    },
    { scope: headerRef },
  );

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: solid ? "#0B0B0B" : "rgba(11, 11, 11, 0)",
          borderBottom: solid
            ? "0.0625rem solid rgba(255, 255, 255, 0.08)"
            : "0.0625rem solid transparent",
        }}
      >
        <div className="mx-auto flex w-full max-w-[100rem] items-center px-6 py-4">
          <div className="flex-1 shrink-0">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/" className="inline-block">
              <Image
                src="/assets/logo.png"
                alt="Regen Digital Solutions"
                width={140}
                height={40}
                className="h-8 w-auto"
                style={{ filter: "brightness(0) invert(1)" }}
                priority
              />
            </a>
          </div>

          <nav ref={navRef} className="hidden items-center gap-8 md:flex">
            {navHrefs.map((href, i) => (
              <a
                key={href}
                href={href}
                className="nav-link text-sm font-medium"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                {navLabels[i]}
              </a>
            ))}
          </nav>

          <div className="hidden flex-1 items-center justify-end gap-3 md:flex">
            <div className="flex items-center gap-1 rounded-lg border border-white/[0.15] p-1">
              <button
                onClick={() => setLocale("en")}
                className="flex cursor-pointer items-center justify-center rounded-md p-1 transition-opacity"
                style={{
                  backgroundColor:
                    locale === "en" ? "rgba(255,255,255,0.15)" : "transparent",
                  opacity: locale === "en" ? 1 : 0.4,
                }}
                aria-label="English"
              >
                <svg
                  viewBox="0 0 60 40"
                  className="h-3.5 w-5 rounded-[0.125rem]"
                >
                  <rect fill="#012169" width="60" height="40" />
                  <path
                    d="M0,0 L60,40 M60,0 L0,40"
                    stroke="#fff"
                    strokeWidth="8"
                  />
                  <path
                    d="M0,0 L60,40 M60,0 L0,40"
                    stroke="#C8102E"
                    strokeWidth="4"
                  />
                  <path
                    d="M30,0 V40 M0,20 H60"
                    stroke="#fff"
                    strokeWidth="12"
                  />
                  <path
                    d="M30,0 V40 M0,20 H60"
                    stroke="#C8102E"
                    strokeWidth="6"
                  />
                </svg>
              </button>
              <button
                onClick={() => setLocale("fil")}
                className="flex cursor-pointer items-center justify-center rounded-md p-1 transition-opacity hover:opacity-70"
                style={{
                  backgroundColor:
                    locale === "fil" ? "rgba(255,255,255,0.15)" : "transparent",
                  opacity: locale === "fil" ? 1 : 0.4,
                }}
                aria-label="Filipino"
              >
                <svg
                  viewBox="0 0 60 40"
                  className="h-3.5 w-5 rounded-[0.125rem]"
                >
                  <rect y="0" fill="#0038A8" width="60" height="20" />
                  <rect y="20" fill="#CE1126" width="60" height="20" />
                  <polygon points="0,0 28,20 0,40" fill="#FFF" />
                  <circle cx="10" cy="20" r="4" fill="#FCD116" />
                </svg>
              </button>
            </div>

            <a
              ref={ctaRef}
              href="/contact"
              className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold tracking-wide text-dark transition-opacity hover:opacity-90"
            >
              {t.nav.talkToUs}
            </a>
          </div>

          <button
            ref={hamburgerRef}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center md:hidden"
            style={{ color: "#ffffff" }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-2xl transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ touchAction: "none" }}
        onClick={() => setMobileOpen(false)}
      />

      <div
        className={`fixed inset-y-0 right-0 z-[70] flex w-4/5 max-w-xs flex-col bg-dark transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen
            ? "translate-x-0 shadow-[-0.75rem_0_2rem_rgba(0,0,0,0.8)]"
            : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 pt-6">
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a
            href="/"
            onClick={() => setMobileOpen(false)}
            className="inline-block"
          >
            <Image
              src="/assets/logo.png"
              alt="Regen Digital Solutions"
              width={140}
              height={40}
              className="h-8 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </a>
          <button
            onClick={() => setMobileOpen(false)}
            className="flex h-10 w-10 items-center justify-center text-white"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col items-center justify-center gap-8">
          {navHrefs.map((href, i) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="font-heading text-2xl font-bold tracking-tight text-white/80 transition-colors hover:text-white"
            >
              {navLabels[i]}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-4 px-6 pb-8">
          <a
            href="mailto:contact@regendigitalsolutions.com"
            className="text-sm text-white/40 transition-colors hover:text-white/70"
          >
            contact@regendigitalsolutions.com
          </a>

          <div className="flex items-center gap-1 rounded-lg border border-white/[0.15] p-1">
            <button
              onClick={() => setLocale("en")}
              className="flex cursor-pointer items-center justify-center rounded-md p-1.5 transition-opacity"
              style={{
                backgroundColor:
                  locale === "en" ? "rgba(255,255,255,0.15)" : "transparent",
                opacity: locale === "en" ? 1 : 0.4,
              }}
              aria-label="English"
            >
              <svg viewBox="0 0 60 40" className="h-4 w-6 rounded-[0.125rem]">
                <rect fill="#012169" width="60" height="40" />
                <path
                  d="M0,0 L60,40 M60,0 L0,40"
                  stroke="#fff"
                  strokeWidth="8"
                />
                <path
                  d="M0,0 L60,40 M60,0 L0,40"
                  stroke="#C8102E"
                  strokeWidth="4"
                />
                <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="12" />
                <path
                  d="M30,0 V40 M0,20 H60"
                  stroke="#C8102E"
                  strokeWidth="6"
                />
              </svg>
            </button>
            <button
              onClick={() => setLocale("fil")}
              className="flex cursor-pointer items-center justify-center rounded-md p-1.5 transition-opacity hover:opacity-70"
              style={{
                backgroundColor:
                  locale === "fil" ? "rgba(255,255,255,0.15)" : "transparent",
                opacity: locale === "fil" ? 1 : 0.4,
              }}
              aria-label="Filipino"
            >
              <svg viewBox="0 0 60 40" className="h-4 w-6 rounded-[0.125rem]">
                <rect y="0" fill="#0038A8" width="60" height="20" />
                <rect y="20" fill="#CE1126" width="60" height="20" />
                <polygon points="0,0 28,20 0,40" fill="#FFF" />
                <circle cx="10" cy="20" r="4" fill="#FCD116" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
