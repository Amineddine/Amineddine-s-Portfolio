"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

/**
 * Page-level smooth scroll. Lenis owns the vertical timeline; the horizontal
 * content rows keep native scroll-snap (Lenis is configured not to hijack
 * horizontal gestures). Respects prefers-reduced-motion.
 */
export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // never smooth the horizontal row scrollers
      orientation: "vertical",
      gestureOrientation: "vertical",
      touchMultiplier: 1.5,
    });

    window.__lenis = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      if (window.__lenis === lenis) delete window.__lenis;
    };
  }, []);

  return <>{children}</>;
}
