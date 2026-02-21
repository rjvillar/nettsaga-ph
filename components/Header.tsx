"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { MessageCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Why us", href: "#local-edge" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "/contact" },
];

const collapseChars = "ettsaga".split("");

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const logoWrapRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const logoDotRef = useRef<HTMLSpanElement>(null);
  const collapseRef = useRef<HTMLSpanElement>(null);
  const charsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const navRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

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

      // ── Logo collapse animation ──
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

      // Logo dot: hidden → visible (dark), timed to land as "ettsaga" finishes collapsing
      headerTl.to(
        logoDotRef.current,
        { opacity: 1, duration: 0.25, ease: "power2.in" },
        "<0.15",
      );

      // Nav links: white/70 → slate
      headerTl.to(navLinkEls, { color: "#4B5563", duration: 0.3 }, "<");

      // CTA: outlined white → solid dark
      if (ctaRef.current) {
        headerTl.to(
          ctaRef.current,
          {
            backgroundColor: "#0B0B0B",
            color: "#ffffff",
            borderColor: "#0B0B0B",
            duration: 0.3,
          },
          "<",
        );
      }
    },
    { scope: headerRef },
  );

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "transparent",
        borderBottom: "1px solid transparent",
        backdropFilter: "blur(0px)",
        WebkitBackdropFilter: "blur(0px)",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Animated Logo — fixed-width wrapper keeps nav stable */}
        <div ref={logoWrapRef} className="shrink-0">
          <a
            ref={logoRef}
            href="#"
            className="font-logo text-2xl italic font-bold tracking-tight text-white select-none"
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
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          ref={ctaRef}
          href="#cta"
          className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold tracking-wide transition-shadow"
          style={{
            backgroundColor: "transparent",
            color: "#ffffff",
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        >
          <MessageCircle className="h-4 w-4" />
          Talk to us
        </a>
      </div>
    </header>
  );
}
