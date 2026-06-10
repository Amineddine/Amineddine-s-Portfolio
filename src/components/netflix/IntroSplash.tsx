"use client";

import { motion, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { usePersona } from "@/context/PersonaContext";
import { t } from "@/data/i18n";
import { playTaDum } from "@/lib/sound";
import { SoundOnIcon, SoundOffIcon } from "./icons";
import { EASE_OUT, EASE_IN, EASE_STD } from "@/lib/motion";

const WORD = "AMINEDDINE";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
};

const letter: Variants = {
  hidden: { y: "115%", opacity: 0, scaleY: 1.4 },
  show: {
    y: "0%",
    opacity: 1,
    scaleY: 1,
    transition: { duration: 0.75, ease: EASE_OUT },
  },
};

export default function IntroSplash({ onDone }: { onDone: () => void }) {
  const { muted, toggleMuted, locale } = usePersona();
  const [zoom, setZoom] = useState(false);
  const doneRef = useRef(false);

  const finish = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    onDone();
  };

  useEffect(() => {
    // reveal → hold → zoom-through → handoff to the profile gate
    const zoomTimer = setTimeout(() => setZoom(true), 1850);
    const doneTimer = setTimeout(finish, 2750);
    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(doneTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black"
      onClick={finish}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      role="button"
      aria-label="Skip intro"
    >
      {/* unmute toggle */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          if (muted) playTaDum(); // unmuting is a user gesture → safe to play
          toggleMuted();
        }}
        className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white/80 transition hover:border-white hover:text-white"
        aria-label={muted ? "Unmute intro sound" : "Mute intro sound"}
      >
        {muted ? <SoundOffIcon width={20} height={20} /> : <SoundOnIcon width={20} height={20} />}
      </button>

      <motion.div
        className="relative"
        animate={
          zoom
            ? { scale: 9, opacity: 0, filter: "blur(8px)" }
            : { scale: 1, opacity: 1 }
        }
        transition={{ duration: 0.9, ease: EASE_IN }}
      >
        {/* red light-sweep passing behind the letters */}
        <motion.div
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(229,9,20,0.95), rgba(246,18,29,0.6), transparent)",
            filter: "blur(8px)",
            mixBlendMode: "screen",
          }}
          initial={{ x: 0 }}
          animate={{ x: ["0%", "520%"] }}
          transition={{ duration: 1.4, delay: 0.35, ease: EASE_STD }}
        />

        <motion.h1
          className="nf-logo flex overflow-hidden text-[14vw] leading-none md:text-[10rem]"
          variants={container}
          initial="hidden"
          animate="show"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #ff3b42 0%, #e50914 55%, #8a0207 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            textShadow: "0 0 40px rgba(229,9,20,0.35)",
          }}
        >
          {WORD.split("").map((char, i) => (
            <span key={i} className="inline-block overflow-hidden">
              <motion.span className="inline-block" variants={letter}>
                {char}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* baseline glow */}
        <motion.div
          className="mx-auto mt-2 h-[3px] rounded-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, #e50914, transparent)",
          }}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        />
      </motion.div>

      <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-white/30">
        {t(locale).clickToSkip}
      </span>
    </motion.div>
  );
}
