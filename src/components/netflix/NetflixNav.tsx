"use client";

import { useEffect, useState } from "react";
import { usePersona } from "@/context/PersonaContext";
import { billboardId } from "@/data/catalog";
import { CV_PATH } from "@/data/personas";
import { scrollToId, scrollToTop } from "@/lib/scroll";
import PersonaSwitcher from "./PersonaSwitcher";
import { BriefcaseIcon } from "./icons";

const links: { label: string; action: (open: (id: string) => void) => void }[] = [
  { label: "Home", action: () => scrollToTop() },
  { label: "Projects", action: () => scrollToId("row-featured") },
  { label: "Skills", action: () => scrollToId("row-skills") },
  { label: "About", action: (open) => open(billboardId) },
  { label: "Contact", action: () => scrollToId("contact") },
];

export default function NetflixNav() {
  const { openItem } = usePersona();
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-[70] transition-colors duration-300"
      style={{
        background: solid
          ? "var(--nf-bg)"
          : "linear-gradient(to bottom, rgba(0,0,0,0.75), transparent)",
      }}
    >
      <nav className="flex items-center gap-3 px-4 py-3 sm:gap-6 md:px-[clamp(1rem,4vw,3.75rem)]">
        <button
          type="button"
          onClick={scrollToTop}
          className="nf-logo shrink-0 text-2xl sm:text-3xl"
          aria-label="Amineddine — home"
        >
          AMINEDDINE
        </button>

        <ul className="hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <button
                type="button"
                onClick={() => link.action(openItem)}
                className="text-sm text-[#e5e5e5] transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2.5 sm:gap-3">
          <a
            href={CV_PATH}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center gap-2 rounded bg-white px-3 py-1.5 text-sm font-semibold text-black transition hover:bg-white/80 sm:px-4 sm:py-2"
            aria-label="Open résumé / CV"
          >
            <BriefcaseIcon width={16} height={16} strokeWidth={2} />
            <span className="hidden sm:inline">Résumé</span>
          </a>
          <PersonaSwitcher />
        </div>
      </nav>
    </header>
  );
}
