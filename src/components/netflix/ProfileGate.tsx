"use client";

import { motion, type Variants } from "framer-motion";
import { personaList } from "@/data/personas";
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

export default function ProfileGate({
  onPick,
  heading = "Who's watching?",
  compact = false,
}: {
  onPick: (p: Persona) => void;
  heading?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center px-6 ${
        compact ? "" : "min-h-[100dvh]"
      }`}
    >
      <motion.h1
        className="mb-8 text-center text-3xl font-medium text-white sm:mb-12 sm:text-5xl md:text-6xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {heading}
      </motion.h1>

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
                  {p.label}
                </span>
                <span className="-mt-1.5 text-[0.7rem] uppercase tracking-[0.18em] text-white/25 transition-colors duration-200 group-hover:text-white/55">
                  {p.badge}
                </span>
              </button>
            </motion.li>
          );
        })}
      </motion.ul>

      {!compact && (
        <p className="mt-12 max-w-md text-center text-sm text-[var(--nf-text-faint)]">
          Same projects, three narrations. Pick the voice you want the work told
          in — switch anytime from the avatar up top.
        </p>
      )}
    </div>
  );
}
