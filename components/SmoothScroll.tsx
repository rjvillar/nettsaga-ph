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

    // Expose Lenis instance so other components (e.g. Header) can stop/start it
    (window as unknown as Record<string, unknown>).__lenis = lenis;

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
          lenis.scrollTo(el as HTMLElement, { offset: -NAVBAR_HEIGHT });
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
        window.history.pushState(null, "", hash);
        lenis.scrollTo(el as HTMLElement, { offset: -NAVBAR_HEIGHT });
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      delete (window as unknown as Record<string, unknown>).__lenis;
      lenis.destroy();
    };
  }, []);

  return null;
}
