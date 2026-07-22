"use client";

import { motion, type Variants } from "framer-motion";
import { personaList } from "@/data/personas";
import { usePersona } from "@/context/PersonaContext";
import {
  t,
  personaLabel,
  personaBadge,
  LOCALES,
  localeShort,
  localeName,
} from "@/data/i18n";
import { personaIcon } from "./icons";
import type { Persona } from "@/lib/types";
import { EASE_OUT } from "@/lib/motion";

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const tileIn: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

function LanguageToggle() {
  const { locale, setLocale } = usePersona();
  return (
    <div
      className="flex items-center gap-1 rounded-full border border-white/15 bg-white/[0.04] p-1 backdrop-blur-sm"
      role="group"
      aria-label="Language"
    >
      {LOCALES.map((l) => {
        const active = locale === l;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={active}
            title={localeName[l]}
            className="relative rounded-full px-4 py-1.5 text-sm font-semibold tracking-wide transition-colors"
            style={{ color: active ? "#fff" : "rgba(255,255,255,0.5)" }}
          >
            {active && (
              <motion.span
                layoutId="lang-pill"
                className="absolute inset-0 rounded-full bg-nf-red"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative">{localeShort[l]}</span>
          </button>
        );
      })}
    </div>
  );
}

export default function ProfileGate({
  onPick,
  heading,
  compact = false,
}: {
  onPick: (p: Persona) => void;
  heading?: string;
  compact?: boolean;
}) {
  const { locale } = usePersona();
  const strings = t(locale);
  const title = heading ?? strings.gateHeading;

  return (
    <div
      className={`relative flex w-full flex-col items-center justify-center px-6 ${
        compact ? "" : "min-h-[100dvh]"
      }`}
    >
      {/* language toggle — in-flow above the heading on phones (so it never
          collides with the title), pinned to the top on larger screens */}
      <div
        className={
          compact
            ? "mb-8"
            : "mb-8 sm:mb-0 sm:absolute sm:left-1/2 sm:top-10 sm:-translate-x-1/2"
        }
      >
        <LanguageToggle />
      </div>

      <motion.h2
        className="mb-8 text-center text-3xl font-medium text-white sm:mb-12 sm:text-5xl md:text-6xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      <motion.ul
        className="flex flex-wrap items-start justify-center gap-5 sm:gap-8"
        variants={grid}
        initial="hidden"
        animate="show"
      >
        {personaList.map((p) => {
          const Icon = personaIcon[p.icon];
          return (
            <motion.li key={p.id} variants={tileIn}>
              <button
                type="button"
                onClick={() => onPick(p.id)}
                className="group flex w-[8.5rem] flex-col items-center gap-3 sm:w-[11rem]"
              >
                <motion.div
                  className="relative aspect-square w-full overflow-hidden rounded-md border-[3px] border-transparent transition-colors duration-200 group-hover:border-white group-focus-visible:border-white"
                  style={{
                    background: `linear-gradient(140deg, ${p.tileColor[0]}, ${p.tileColor[1]})`,
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 320, damping: 22 }}
                >
                  <div className="art-grain absolute inset-0 opacity-40" />
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <Icon className="h-1/3 w-1/3" strokeWidth={1.6} />
                  </div>
                </motion.div>
                <span className="text-sm text-[var(--nf-text-faint)] transition-colors duration-200 group-hover:text-white sm:text-lg">
                  {personaLabel(p.id, locale)}
                </span>
                <span className="-mt-1.5 text-[0.7rem] uppercase tracking-[0.18em] text-white/25 transition-colors duration-200 group-hover:text-white/55">
                  {personaBadge(p.id, locale)}
                </span>
              </button>
            </motion.li>
          );
        })}
      </motion.ul>

      {!compact && (
        <p className="mt-12 max-w-md text-center text-sm text-[var(--nf-text-faint)]">
          {strings.gateSub}
        </p>
      )}
    </div>
  );
}
