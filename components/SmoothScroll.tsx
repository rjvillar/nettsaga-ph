"use client";

import { useEffect } from "react";
import Lenis from "lenis";

const NAVBAR_HEIGHT = 60;

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cross-page hash (e.g. /about → /#how-it-works)
    const hash = window.location.hash;
    if (hash) {
      // Always unlock scrolling (blocked by inline script in <head>)
      document.documentElement.style.overflow = "";

      const el = document.querySelector(hash);
      if (el) {
        requestAnimationFrame(() => {
          const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
          lenis.scrollTo(top);
        });
      }
    }

    // Same-page hash clicks — use Lenis for smooth scroll with navbar offset
    function handleClick(e: MouseEvent) {
      const link = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      let hash: string | null = null;

      if (href.startsWith("#")) {
        hash = href;
      } else if (href.startsWith("/#") && window.location.pathname === "/") {
        hash = href.slice(1);
      }

      if (hash) {
        const el = document.querySelector(hash);
        if (!el) return;

        e.preventDefault();
        const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
        lenis.scrollTo(top);
        window.history.pushState(null, "", hash);
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
