"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePersona } from "@/context/PersonaContext";
import { getItem, billboardId, isNewRelease, spotlightIds } from "@/data/catalog";
import { personas } from "@/data/personas";
import { itemCopy, personaText, t } from "@/data/i18n";
import type { CatalogItem, Persona } from "@/lib/types";
import AzMark from "@/components/brand/AzMark";
import { Picture } from "./PlaceholderArt";
import { PlayIcon, InfoIcon } from "./icons";
import { EASE_OUT } from "@/lib/motion";

/** The Cold Open reel — see src/remotion/ColdOpen.tsx. */
const REEL = {
  poster: "/cold-open-poster.webp",
  webm: "/cold-open.webm",
  mp4: "/cold-open.mp4",
};
const REEL_MS = 13_000;
const SLIDE_MS = 8_000;

const spotlight = spotlightIds
  .map((id) => getItem(id))
  .filter((item): item is CatalogItem => Boolean(item));

export default function Billboard() {
  const { persona, openItem, locale } = usePersona();
  const active: Persona = persona ?? "developer";
  const reduce = useReducedMotion();
  const strings = t(locale);

  const total = spotlight.length + 1; // slide 0 is the reel
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false); // explicit user pause (WCAG 2.2.2)
  const [held, setHeld] = useState(false); // hover / focus inside the hero
  const [visible, setVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  const rotating = !reduce && !paused && !held && visible;

  // pause rotation + video when the hero scrolls out of view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.25,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!rotating) return;
    const timer = setTimeout(
      () => setIndex((i) => (i + 1) % total),
      index === 0 ? REEL_MS : SLIDE_MS,
    );
    return () => clearTimeout(timer);
  }, [rotating, index, total]);

  const go = useCallback((i: number) => setIndex(i), []);
  const current = index === 0 ? null : spotlight[index - 1];

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[max(82svh,600px)] w-full flex-col"
      aria-roledescription="carousel"
      aria-label={strings.nowShowing}
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocusCapture={() => setHeld(true)}
      onBlurCapture={() => setHeld(false)}
    >
      {/* background layer */}
      <div className="absolute inset-0 overflow-hidden bg-[var(--az-ink)]">
        <ReelLayer show={index === 0} playing={index === 0 && visible} reduce={Boolean(reduce)} />
        <AnimatePresence initial={false}>
          {(current?.heroArt ?? current?.banner) && current && (
            <motion.div
              key={current.id}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9 }}
            >
              <Picture
                src={(current.heroArt ?? current.banner)!}
                alt=""
                variant="banner"
                className="kenburns h-full w-full object-cover object-center"
              />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/20" />
        {/* film grain lives in CSS, not in the video (noise would bloat the encode) */}
        <div
          className="art-grain pointer-events-none absolute inset-0 opacity-25 [transform:translateZ(0)] [will-change:transform]"
          aria-hidden
        />
      </div>
      <div className="billboard-fade-left absolute inset-0" />
      <div className="billboard-fade-bottom absolute inset-0" />

      <div
        className="relative flex flex-1 items-end pb-[calc(13vh+2.5rem)] pt-[calc(var(--nav-h)+2rem)] md:pb-[15vh] md:pt-[calc(var(--nav-h)+3rem)]"
        aria-live={rotating ? "off" : "polite"}
      >
        <AnimatePresence mode="wait">
          {current ? (
            <SpotlightCopy
              key={current.id}
              item={current}
              persona={active}
              locale={locale}
              onInfo={() => openItem(current.id)}
            />
          ) : (
            <ReelCopy key="reel" persona={active} locale={locale} onInfo={() => openItem(billboardId)} />
          )}
        </AnimatePresence>
      </div>

      {/* rotation controls */}
      <div className="absolute bottom-[4.5vh] right-4 z-10 flex items-center gap-3 md:right-[clamp(1rem,4vw,3.75rem)]">
        {!reduce && (
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 text-white/85 transition hover:border-white hover:text-white"
            aria-label={paused ? "Resume spotlight rotation" : "Pause spotlight rotation"}
          >
            {paused ? (
              <PlayIcon width={14} height={14} />
            ) : (
              <svg width={12} height={12} viewBox="0 0 12 12" fill="currentColor" aria-hidden>
                <rect x="1.5" y="1" width="3" height="10" />
                <rect x="7.5" y="1" width="3" height="10" />
              </svg>
            )}
          </button>
        )}
        <div className="flex items-center gap-1.5" role="group" aria-label={strings.nowShowing}>
          {Array.from({ length: total }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              className="relative h-6 w-7 py-2.5"
              aria-label={`${strings.spotlight(i + 1, total)}${i === 0 ? " — reel" : ` — ${spotlight[i - 1].title}`}`}
              aria-current={i === index ? "true" : undefined}
            >
              <span className="block h-[3px] w-full overflow-hidden rounded-full bg-white/30">
                {i === index && (
                  <span
                    key={`${index}-${rotating}`}
                    className={`block h-full w-full bg-white ${rotating ? "pip-fill" : ""}`}
                    style={{ animationDuration: `${i === 0 ? REEL_MS : SLIDE_MS}ms` }}
                  />
                )}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Poster-first reel. The poster <img> is the LCP element and paints
 * immediately; the <video> mounts only after the page has loaded and the
 * browser is idle, and never mounts under prefers-reduced-motion.
 */
function ReelLayer({ show, playing, reduce }: { show: boolean; playing: boolean; reduce: boolean }) {
  const [mountVideo, setMountVideo] = useState(false);
  // A decode error AFTER a <source> is chosen does not fall through to the next
  // <source>, so fall back by hand: WebM → MP4 → poster only.
  const [format, setFormat] = useState<"webm" | "mp4" | "none">("webm");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (reduce) return;
    const start = () => {
      const idle = (
        window as Window & {
          requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
        }
      ).requestIdleCallback;
      if (idle) idle(() => setMountVideo(true), { timeout: 1500 });
      else setTimeout(() => setMountVideo(true), 200);
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, [reduce]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) void video.play().catch(() => {});
    else video.pause();
  }, [playing, mountVideo, format]);

  return (
    <div
      className="absolute inset-0 transition-opacity duration-700"
      style={{ opacity: show ? 1 : 0 }}
      aria-hidden
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={REEL.poster}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
        decoding="async"
      />
      {mountVideo && format !== "none" && (
        <video
          key={format}
          ref={videoRef}
          onError={() => setFormat((f) => (f === "webm" ? "mp4" : "none"))}
          className="absolute inset-0 h-full w-full object-cover"
          poster={REEL.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
        >
          {format === "webm" && <source src={REEL.webm} type="video/webm" />}
          <source src={REEL.mp4} type="video/mp4" />
        </video>
      )}
    </div>
  );
}

function ReelCopy({
  persona,
  locale,
  onInfo,
}: {
  persona: Persona;
  locale: Parameters<typeof t>[0];
  onInfo: () => void;
}) {
  const def = personas[persona];
  const pt = personaText(persona, locale);
  const strings = t(locale);
  const item = getItem(billboardId)!;

  return (
    <motion.div
      className="max-w-[46rem] px-4 md:px-[clamp(1rem,4vw,3.75rem)]"
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
      }}
    >
      <motion.div
        variants={fade}
        className="mb-3 flex items-center gap-2 text-sm font-medium tracking-[0.18em] text-white/80"
      >
        <AzMark className="text-[1.35rem]" title="" />
        <span className="uppercase">{strings.portfolio} · {pt.badge}</span>
      </motion.div>

      {/* Visual headline. The page's semantic <h1> lives in the
          server-rendered crawlable content (EntityContent), so this is an
          <h2> to keep a single h1 per page. */}
      <motion.h2
        variants={fade}
        className="font-display text-[2.5rem] leading-[0.96] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.95),0_1px_4px_rgba(0,0,0,0.9)] sm:text-[3.5rem] md:text-[4.5rem]"
      >
        {pt.tagline}
      </motion.h2>

      <motion.div variants={fade} className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
        <span className="font-semibold text-[#46d369]">{strings.match(item.match)}</span>
        <span className="text-white/80">Amineddine Znin</span>
        <span className="rounded border border-white/30 px-1 text-xs text-white/70">{item.maturity}</span>
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
          onClick={onInfo}
          className="flex items-center gap-2 rounded bg-[rgba(109,109,110,0.5)] px-6 py-2.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-[rgba(109,109,110,0.4)]"
        >
          <InfoIcon width={20} height={20} />
          {pt.infoLabel}
        </button>
      </motion.div>
    </motion.div>
  );
}

function SpotlightCopy({
  item,
  persona,
  locale,
  onInfo,
}: {
  item: CatalogItem;
  persona: Persona;
  locale: Parameters<typeof t>[0];
  onInfo: () => void;
}) {
  const strings = t(locale);
  const copy = itemCopy(item, persona, locale);
  const external = copy.cta.href.startsWith("http");

  return (
    <motion.div
      className="max-w-[46rem] px-4 md:px-[clamp(1rem,4vw,3.75rem)]"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]">
        {isNewRelease(item) && (
          <span className="rounded-sm bg-nf-red px-1.5 py-0.5 text-white">{strings.newRelease}</span>
        )}
        <span className="text-white/80">{item.tags[0]}</span>
      </div>
      <h2 className="font-display text-[2.5rem] leading-[0.96] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.95)] sm:text-[3.5rem] md:text-[4.5rem]">
        {item.title}
      </h2>
      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
        <span className="font-semibold text-[#46d369]">{strings.match(item.match)}</span>
        <span className="text-white/80">{item.year}</span>
        {item.maturity && (
          <span className="rounded border border-white/30 px-1 text-xs text-white/70">{item.maturity}</span>
        )}
      </div>
      <p className="mt-4 line-clamp-3 max-w-xl text-sm leading-relaxed text-[#dcdcdc] drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] sm:text-base md:text-lg">
        {copy.blurb}
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href={copy.cta.href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="flex items-center gap-2 rounded bg-white px-6 py-2.5 text-base font-semibold text-black transition hover:bg-white/80"
        >
          <PlayIcon width={20} height={20} />
          {copy.cta.label}
        </a>
        <button
          type="button"
          onClick={onInfo}
          className="flex items-center gap-2 rounded bg-[rgba(109,109,110,0.5)] px-6 py-2.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-[rgba(109,109,110,0.4)]"
        >
          <InfoIcon width={20} height={20} />
          {strings.episodes}
        </button>
      </div>
    </motion.div>
  );
}

const fade = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};
