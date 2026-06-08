"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { usePersona } from "@/context/PersonaContext";
import { personas } from "@/data/personas";
import type { Persona } from "@/lib/types";
import ProfileGate from "./ProfileGate";
import { personaIcon, ChevronDown } from "./icons";
import { EASE_OUT } from "@/lib/motion";

export default function PersonaSwitcher() {
  const router = useRouter();
  const { persona, setPersona } = usePersona();
  const [open, setOpen] = useState(false);

  const current = persona ? personas[persona] : personas.developer;
  const Icon = personaIcon[current.icon];

  const handlePick = (p: Persona) => {
    setOpen(false);
    if (p === persona) return;
    setPersona(p);
    router.push(`/browse/${p}`);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group flex items-center gap-1.5"
        aria-label="Switch profile"
      >
        <span
          className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-md text-white sm:h-9 sm:w-9"
          style={{
            background: `linear-gradient(140deg, ${current.tileColor[0]}, ${current.tileColor[1]})`,
          }}
        >
          <span className="art-grain absolute inset-0 opacity-40" />
          <Icon className="relative h-4 w-4" strokeWidth={1.7} />
        </span>
        <ChevronDown
          width={16}
          height={16}
          className="text-white/70 transition-transform duration-200 group-hover:translate-y-0.5"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[95] flex items-center justify-center bg-[#141414]/97 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-6 top-6 text-sm uppercase tracking-[0.2em] text-white/50 transition hover:text-white"
            >
              Close
            </button>
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE_OUT }}
            >
              <ProfileGate
                onPick={handlePick}
                heading="Re-watch in another language"
                compact
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
