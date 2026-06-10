"use client";

import { motion } from "framer-motion";
import { usePersona } from "@/context/PersonaContext";
import { getItem, billboardId } from "@/data/catalog";
import { personas } from "@/data/personas";
import { personaText, t } from "@/data/i18n";
import type { Persona } from "@/lib/types";
import PlaceholderArt from "./PlaceholderArt";
import { PlayIcon, InfoIcon } from "./icons";
import { EASE_OUT } from "@/lib/motion";

export default function Billboard() {
  const { persona, openItem, locale } = usePersona();
  const item = getItem(billboardId)!;
  const active: Persona = persona ?? "developer";
  const def = personas[active];
  const pt = personaText(active, locale);
  const strings = t(locale);

  return (
    <section className="relative h-[82vh] min-h-[600px] w-full">
      {/* full-bleed Remotion hero reel (PlaceholderArt is the loading fallback) */}
      <div className="absolute inset-0 overflow-hidden bg-[#0b0b0b]">
        <PlaceholderArt item={item} variant="banner" />
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/35" />
      </div>
      <div className="billboard-fade-left absolute inset-0" />
      <div className="billboard-fade-bottom absolute inset-0" />

      <div className="relative flex h-full items-end pb-[13vh] pt-24 md:pb-[15vh]">
        <motion.div
          className="max-w-[46rem] px-4 md:px-[clamp(1rem,4vw,3.75rem)]"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
          }}
        >
          <motion.div
            variants={fade}
            className="mb-3 flex items-center gap-2 text-sm font-medium tracking-[0.18em] text-white/80"
          >
            <span className="nf-logo text-xl leading-none">A</span>
            <span className="uppercase">{strings.portfolio} · {pt.badge}</span>
          </motion.div>

          <motion.h1
            variants={fade}
            className="font-display text-[2.5rem] leading-[0.96] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.95),0_1px_4px_rgba(0,0,0,0.9)] sm:text-[3.5rem] md:text-[4.5rem]"
          >
            {pt.tagline}
          </motion.h1>

          <motion.div
            variants={fade}
            className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm"
          >
            <span className="font-semibold text-[#46d369]">{strings.match(item.match)}</span>
            <span className="text-white/80">Amineddine Znin</span>
            <span className="rounded border border-white/30 px-1 text-xs text-white/60">
              {item.maturity}
            </span>
          </motion.div>

          <motion.p
            variants={fade}
            className="mt-4 max-w-xl text-sm leading-relaxed text-[#dcdcdc] drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] sm:text-base md:text-lg"
          >
            {pt.heroDescription}
          </motion.p>

          <motion.div variants={fade} className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={def.primaryCta.href}
              target={def.primaryCta.href.startsWith("http") ? "_blank" : undefined}
              rel={def.primaryCta.href.startsWith("http") ? "noopener noreferrer" : undefined}
              download={def.primaryCta.download}
              className="flex items-center gap-2 rounded bg-white px-6 py-2.5 text-base font-semibold text-black transition hover:bg-white/80"
            >
              <PlayIcon width={20} height={20} />
              {pt.primaryCtaLabel}
            </a>
            <button
              type="button"
              onClick={() => openItem(billboardId)}
              className="flex items-center gap-2 rounded bg-[rgba(109,109,110,0.5)] px-6 py-2.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-[rgba(109,109,110,0.4)]"
            >
              <InfoIcon width={20} height={20} />
              {pt.infoLabel}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};
