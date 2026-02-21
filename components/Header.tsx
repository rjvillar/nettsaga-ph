"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { MessageCircle, Menu, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const navLinks = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Why us", href: "/#local-edge" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

const collapseChars = "ettsaga".split("");

export default function Header({ solid = false }: { solid?: boolean }) {
  const headerRef = useRef<HTMLElement>(null);
  const logoWrapRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const logoDotRef = useRef<HTMLSpanElement>(null);
  const collapseRef = useRef<HTMLSpanElement>(null);
  const charsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const navRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const [mobileOpen, setMobileOpen] = useState(false);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useGSAP(
    () => {
      const chars = charsRef.current.filter(Boolean) as HTMLSpanElement[];
      if (
        !collapseRef.current ||
        !logoWrapRef.current ||
        !headerRef.current ||
        chars.length === 0
      )
        return;

      const fullWidth = logoWrapRef.current.offsetWidth;
      gsap.set(logoWrapRef.current, { width: fullWidth });

      const naturalWidth = collapseRef.current.offsetWidth;
      gsap.set(collapseRef.current, { width: naturalWidth });

      // ── Logo collapse animation (runs in both modes) ──
      const logoTl = gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          start: "50px top",
          toggleActions: "play none none reverse",
        },
      });

      logoTl.to(chars, {
        opacity: 0,
        y: 14,
        rotateX: -90,
        scale: 0.8,
        filter: "blur(2px)",
        stagger: 0.025,
        duration: 0.35,
        ease: "power3.inOut",
      });

      logoTl.to(
        collapseRef.current,
        {
          width: 0,
          duration: 0.35,
          ease: "power3.inOut",
        },
        "<0.05",
      );

      // Logo dot: appear as "ettsaga" collapses
      logoTl.to(
        logoDotRef.current,
        { opacity: 1, duration: 0.25, ease: "power2.in" },
        "<0.15",
      );

      // In solid mode, skip color transitions (already solid)
      if (solid) return;

      // ── Header appearance transition (transparent → solid) ──
      const navLinkEls = navRef.current?.querySelectorAll("a") || [];
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          start: "50px top",
          toggleActions: "play none none reverse",
        },
      });

      // Header bg: transparent → fully solid white
      headerTl.to(headerRef.current, {
        backgroundColor: "#ffffff",
        borderBottomColor: "rgba(229, 231, 235, 0.5)",
        duration: 0.3,
        ease: "power2.inOut",
      });

      // Logo: white → dark
      headerTl.to(logoRef.current, { color: "#0B0B0B", duration: 0.3 }, "<");

      // Nav links: white/70 → slate
      headerTl.to(navLinkEls, { color: "#4B5563", duration: 0.3 }, "<");

      // CTA: white outline → dark outline
      if (ctaRef.current) {
        headerTl.to(
          ctaRef.current,
          {
            color: "#0B0B0B",
            borderColor: "rgba(11, 11, 11, 0.2)",
            duration: 0.3,
          },
          "<",
        );
      }

      // Hamburger icon: white → dark on scroll
      if (hamburgerRef.current) {
        headerTl.to(
          hamburgerRef.current,
          { color: "#0B0B0B", duration: 0.3 },
          "<",
        );
      }
    },
    { scope: headerRef },
  );

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: solid ? "#ffffff" : "transparent",
          borderBottom: solid
            ? "1px solid rgba(229, 231, 235, 0.5)"
            : "1px solid transparent",
          backdropFilter: "blur(0px)",
          WebkitBackdropFilter: "blur(0px)",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Animated Logo — fixed-width wrapper keeps nav stable */}
          <div ref={logoWrapRef} className="shrink-0">
            <a
              ref={logoRef}
              href="/"
              className={`font-logo text-2xl italic font-bold tracking-tight select-none ${solid ? "text-dark" : "text-white"}`}
            >
              <span className="inline-block">N</span>
              <span
                ref={collapseRef}
                className="inline-flex overflow-hidden align-bottom"
                style={{ perspective: "400px" }}
              >
                {collapseChars.map((char, i) => (
                  <span
                    key={i}
                    ref={(el) => {
                      charsRef.current[i] = el;
                    }}
                    className="inline-block origin-top"
                    style={{ willChange: "transform, opacity, filter" }}
                  >
                    {char}
                  </span>
                ))}
              </span>
              <span ref={logoDotRef} style={{ color: "#0B0B0B", opacity: 0 }}>
                .
              </span>
            </a>
          </div>

          {/* Nav links — hidden on mobile */}
          <nav ref={navRef} className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-sm font-medium"
                style={{ color: solid ? "#4B5563" : "rgba(255,255,255,0.75)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA — hidden on mobile */}
          <a
            ref={ctaRef}
            href="/contact"
            className="hidden items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold tracking-wide transition-shadow md:inline-flex"
            style={
              solid
                ? {
                    backgroundColor: "transparent",
                    color: "#0B0B0B",
                    border: "1px solid rgba(11, 11, 11, 0.2)",
                  }
                : {
                    backgroundColor: "transparent",
                    color: "#ffffff",
                    border: "1px solid rgba(255,255,255,0.3)",
                  }
            }
          >
            <MessageCircle className="h-4 w-4" />
            Talk to us
          </a>

          {/* Hamburger — visible only on mobile */}
          <button
            ref={hamburgerRef}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center md:hidden"
            style={mobileOpen ? { color: "#ffffff" } : { color: solid ? "#0B0B0B" : "inherit" }}
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

      {/* ── Mobile backdrop (blurred left strip) ── */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* ── Mobile slide-in nav (from right) ── */}
      <div
        className={`fixed inset-y-0 right-0 z-[60] flex w-4/5 max-w-xs flex-col bg-dark transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top row — logo + close button */}
        <div className="flex items-center justify-between px-6 pt-6">
          <span className="font-logo text-2xl italic font-bold tracking-tight text-white">
            Nettsaga
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="flex h-10 w-10 items-center justify-center text-white"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Nav links — centered */}
        <nav className="flex flex-1 flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-heading text-2xl font-bold tracking-tight text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Email at bottom */}
        <div className="px-6 pb-8 text-center">
          <a
            href="mailto:support@nettsaga.com"
            className="text-sm text-white/40 transition-colors hover:text-white/70"
          >
            support@nettsaga.com
          </a>
        </div>
      </div>
    </>
  );
}
