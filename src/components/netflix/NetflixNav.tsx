"use client";

import { useEffect, useState } from "react";
import { usePersona } from "@/context/PersonaContext";
import { billboardId } from "@/data/catalog";
import { CV_PATH } from "@/data/personas";
import { t } from "@/data/i18n";
import { scrollToId, scrollToTop } from "@/lib/scroll";
import PersonaSwitcher from "./PersonaSwitcher";
import { BriefcaseIcon } from "./icons";

type NavKey = "home" | "projects" | "skills" | "about" | "contact";
const navItems: { key: NavKey; action: (open: (id: string) => void) => void }[] = [
  { key: "home", action: () => scrollToTop() },
  { key: "projects", action: () => scrollToId("row-web") },
  { key: "skills", action: () => scrollToId("row-skills") },
  { key: "about", action: (open) => open(billboardId) },
  { key: "contact", action: () => scrollToId("contact") },
];

export default function NetflixNav() {
  const { openItem, locale } = usePersona();
  const strings = t(locale);
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
          {navItems.map((item) => (
            <li key={item.key}>
              <button
                type="button"
                onClick={() => item.action(openItem)}
                className="text-sm text-[#e5e5e5] transition-colors duration-200 hover:text-white"
              >
                {strings.nav[item.key]}
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
            <span className="hidden sm:inline">{strings.resume}</span>
          </a>
          <PersonaSwitcher />
        </div>
      </nav>
    </header>
  );
}
