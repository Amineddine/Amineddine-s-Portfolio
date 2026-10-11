"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { usePersona } from "@/context/PersonaContext";
import { t } from "@/data/i18n";
import { playIntroMotif } from "@/lib/sound";
import { SoundOnIcon, SoundOffIcon } from "./icons";
import { EASE_IN, EASE_OUT } from "@/lib/motion";

// Pure CSS/JS intro (no video, so `/` stays light), ~2.6s:
//   0.00s  black
//   0.25s  the red AZ punches in big — overshoot, light burst, radial streaks
//   1.75s  zoom-through: the logo rushes past the camera into the profile gate
// Reduced motion: the AZ simply fades in and hands off after ~1s. Sound only
// ever plays from the unmute button (a user gesture).
const PUNCH_AT = 0.25;
const ZOOM_AT_MS = 1750;
const DONE_MS = 2600;

const STREAKS = Array.from({ length: 14 }, (_, i) => ({
  angle: (360 / 14) * i + (i % 2 ? 7 : -5),
  length: 34 + ((i * 37) % 26),
  delay: (i % 4) * 0.025,
}));

export default function IntroSplash({ onDone }: { onDone: () => void }) {
  const { muted, toggleMuted, locale } = usePersona();
  const reduce = useReducedMotion();
  const [zoom, setZoom] = useState(false);
  const doneRef = useRef(false);

  const finish = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    onDone();
  };

  useEffect(() => {
    const zoomTimer = reduce ? undefined : setTimeout(() => setZoom(true), ZOOM_AT_MS);
    const doneTimer = setTimeout(finish, reduce ? 1000 : DONE_MS);
    return () => {
      if (zoomTimer) clearTimeout(zoomTimer);
      clearTimeout(doneTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black"
      onClick={finish}
      exit={{ opacity: 0, transition: { duration: 0.35 } }}
      role="button"
      aria-label="Skip intro"
    >
      {/* unmute toggle */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          if (muted) playIntroMotif(); // unmuting is a user gesture → safe to play
          toggleMuted();
        }}
        className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white/80 transition hover:border-white hover:text-white"
        aria-label={muted ? "Unmute intro sound" : "Mute intro sound"}
      >
        {muted ? <SoundOffIcon width={20} height={20} /> : <SoundOnIcon width={20} height={20} />}
      </button>

      <motion.div
        className="relative flex items-center justify-center"
        animate={
          zoom
            ? { scale: [1, 0.94, 18], opacity: [1, 1, 0], filter: ["blur(0px)", "blur(0px)", "blur(12px)"] }
            : { scale: 1, opacity: 1 }
        }
        transition={zoom ? { duration: 0.8, times: [0, 0.18, 1], ease: EASE_IN } : { duration: 0 }}
      >
        {!reduce && (
          <>
            {/* light burst behind the logo */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute h-[90vmin] w-[90vmin] rounded-full"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(255,255,255,0.9), rgba(246,18,29,0.55) 22%, rgba(229,9,20,0.18) 48%, transparent 72%)",
                filter: "blur(6px)",
              }}
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{ scale: [0.2, 1.15, 0.9], opacity: [0, 1, 0.28] }}
              transition={{ duration: 1.1, delay: PUNCH_AT, times: [0, 0.22, 1], ease: EASE_OUT }}
            />
            {/* radial light streaks */}
            {STREAKS.map((s) => (
              <motion.span
                key={s.angle}
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 h-[3px] origin-left rounded-full"
                style={{
                  width: `${s.length}vmin`,
                  rotate: `${s.angle}deg`,
                  background: "linear-gradient(90deg, rgba(255,255,255,0.95), rgba(229,9,20,0.6), transparent)",
                }}
                initial={{ scaleX: 0, opacity: 0, x: "6vmin" }}
                animate={{ scaleX: [0, 1, 1], opacity: [0, 1, 0], x: ["6vmin", "10vmin", "22vmin"] }}
                transition={{ duration: 0.9, delay: PUNCH_AT + 0.04 + s.delay, ease: EASE_OUT }}
              />
            ))}
          </>
        )}

        {/* the AZ punch-in */}
        <motion.span
          aria-hidden
          className="nf-logo relative block font-bold text-[clamp(9rem,38vmin,22rem)] [text-shadow:0_0_60px_rgba(229,9,20,0.45)]"
          initial={reduce ? { opacity: 0 } : { scale: 2.6, opacity: 0, filter: "blur(14px)" }}
          animate={
            reduce
              ? { opacity: 1 }
              : { scale: [2.6, 0.92, 1.03, 1], opacity: [0, 1, 1, 1], filter: ["blur(14px)", "blur(0px)", "blur(0px)", "blur(0px)"] }
          }
          transition={
            reduce
              ? { duration: 0.4 }
              : { duration: 0.75, delay: PUNCH_AT, times: [0, 0.38, 0.7, 1], ease: EASE_OUT }
          }
        >
          AZ
        </motion.span>
      </motion.div>

      <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-white/60">
        {t(locale).clickToSkip}
      </span>
    </motion.div>
  );
}
