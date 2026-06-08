import type Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

/** Smooth-scroll to an element id, routed through Lenis when available. */
export function scrollToId(id: string, offset = -76) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = window.__lenis;
  if (lenis) {
    lenis.scrollTo(el, { offset });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function scrollToTop() {
  const lenis = window.__lenis;
  if (lenis) lenis.scrollTo(0);
  else window.scrollTo({ top: 0, behavior: "smooth" });
}
