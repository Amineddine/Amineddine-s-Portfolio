"use client";

import { motion, type Variants } from "framer-motion";
import { personaList } from "@/data/personas";
import { usePersona } from "@/context/PersonaContext";
import { t, personaLabel, personaBadge, LOCALES, localeName } from "@/data/i18n";
import type { Persona } from "@/lib/types";
import { EASE_OUT } from "@/lib/motion";

// The classic streaming "Who's watching?" screen: logo top-left, big centred
// heading, a row of flat square avatars (white border + white name on hover)
// and one outlined uppercase button underneath — here, the language switch.
// Avatars are original faces, one per persona.

const grid: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
const tileIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: EASE_OUT } },
};

/** Flat avatar colours (Netflix-style solid tiles). */
export const AVATAR_BG: Record<Persona, string> = {
  recruiter: "#e50914",
  developer: "#2a6fdb",
  curious: "#1f9d6b",
};

/** Original, minimal faces drawn on a 100×100 grid. */
export function AvatarFace({ persona }: { persona: Persona }) {
  const stroke = { stroke: "#fff", strokeWidth: 6, strokeLinecap: "round" as const, fill: "none" };
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden>
      {persona === "recruiter" && (
        <>
          {/* square "reading glasses" eyes + confident smile */}
          <rect x="22" y="34" width="20" height="14" rx="3" fill="#fff" />
          <rect x="58" y="34" width="20" height="14" rx="3" fill="#fff" />
          <path d="M42 40 H58" {...stroke} strokeWidth={4} />
          <path d="M30 66 Q50 82 70 66" {...stroke} />
        </>
      )}
      {persona === "developer" && (
        <>
          {/* terminal prompt eyes  >  _  + flat grin */}
          <path d="M24 32 L36 41 L24 50" {...stroke} />
          <path d="M60 50 H78" {...stroke} />
          <path d="M32 68 Q50 78 68 68" {...stroke} />
        </>
      )}
      {persona === "curious" && (
        <>
          {/* wide, curious eyes + small "o" */}
          <circle cx="34" cy="42" r="9" fill="#fff" />
          <circle cx="66" cy="42" r="9" fill="#fff" />
          <circle cx="37" cy="44" r="3.5" fill={AVATAR_BG.curious} />
          <circle cx="69" cy="44" r="3.5" fill={AVATAR_BG.curious} />
          <circle cx="50" cy="70" r="6" {...stroke} strokeWidth={5} />
        </>
      )}
    </svg>
  );
}

function LanguageButton() {
  const { locale, setLocale } = usePersona();
  const next = LOCALES.find((l) => l !== locale) ?? "en";
  return (
    <button
      type="button"
      onClick={() => setLocale(next)}
      lang={next}
      className="border border-[#808080] px-6 py-2 text-sm uppercase tracking-[0.18em] text-[#b3b3b3] transition-colors duration-200 hover:border-white hover:text-white sm:text-base"
      aria-label={`${localeName[next]} — switch language`}
    >
      {localeName[next]}
    </button>
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
      className={`relative flex w-full flex-col items-center justify-center bg-[var(--nf-bg)] px-4 ${
        compact ? "py-10" : "min-h-[100dvh]"
      }`}
    >
      {!compact && (
        <span
          aria-hidden
          className="nf-logo absolute left-4 top-5 text-[1.9rem] font-bold sm:left-[clamp(1rem,4vw,3.75rem)] sm:top-6 sm:text-[2.4rem]"
        >
          AMINEDDINE ZNIN
        </span>
      )}

      <motion.h2
        className="mb-8 text-center text-[clamp(1.9rem,3.5vw,3.5rem)] font-medium text-white sm:mb-[2vw]"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
      >
        {title}
      </motion.h2>

      <motion.ul
        className="flex flex-wrap items-start justify-center gap-x-[clamp(1rem,2vw,2rem)] gap-y-6"
        variants={grid}
        initial="hidden"
        animate="show"
      >
        {personaList.map((p) => (
          <motion.li key={p.id} variants={tileIn}>
            <button
              type="button"
              onClick={() => onPick(p.id)}
              className="group flex w-[clamp(6rem,10vw,12.5rem)] flex-col items-center outline-none"
              aria-label={`${personaLabel(p.id, locale)} — ${personaBadge(p.id, locale)}`}
            >
              <span
                className="relative block aspect-square w-full overflow-hidden rounded-[4px] outline outline-[3px] outline-offset-0 outline-transparent transition-[outline-color] duration-200 group-hover:outline-white group-focus-visible:outline-white"
                style={{
                  background: `radial-gradient(120% 100% at 30% 15%, rgba(255,255,255,0.14), transparent 60%), ${AVATAR_BG[p.id]}`,
                }}
              >
                <AvatarFace persona={p.id} />
              </span>
              <span className="mt-[0.6em] text-[clamp(0.95rem,1.3vw,1.3rem)] text-[#808080] transition-colors duration-200 group-hover:text-white group-focus-visible:text-white">
                {personaLabel(p.id, locale)}
              </span>
            </button>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        className="mt-10 sm:mt-[3.5vw]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.4 }}
      >
        <LanguageButton />
      </motion.div>
    </div>
  );
}
