"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePersona } from "@/context/PersonaContext";
import { itemCopy } from "@/data/i18n";
import type { CatalogItem } from "@/lib/types";
import PlaceholderArt from "./PlaceholderArt";
import {
  PlayIcon,
  PlusIcon,
  ThumbIcon,
  ChevronDown,
  ExternalIcon,
} from "./icons";
import { EASE_OUT } from "@/lib/motion";

const CARD_W = "clamp(150px, 42vw, 256px)";

export default function TitleCard({ item }: { item: CatalogItem }) {
  const { persona, openItem, locale } = usePersona();
  const cardRef = useRef<HTMLButtonElement>(null);
  const enterTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [mounted, setMounted] = useState(false);
  const [hoverCapable, setHoverCapable] = useState(false);

  useEffect(() => {
    // portal mount-gate + media-query read (external systems), once on mount
    /* eslint-disable react-hooks/set-state-in-effect */
    setMounted(true);
    setHoverCapable(
      window.matchMedia("(hover: hover) and (pointer: fine)").matches,
    );
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  const copy = itemCopy(item, persona ?? "developer", locale);

  const showPreview = () => {
    if (!hoverCapable || !cardRef.current) return;
    setRect(cardRef.current.getBoundingClientRect());
  };
  const closePreview = () => setRect(null);

  const handleEnter = () => {
    if (!hoverCapable) return;
    enterTimer.current = setTimeout(showPreview, 260);
  };
  const handleLeave = () => {
    if (enterTimer.current) clearTimeout(enterTimer.current);
    // when the preview is already open, the portal owns mouse-leave
    if (!rect) setRect(null);
  };

  // close the floating preview if the page moves under it
  useEffect(() => {
    if (!rect) return;
    const close = () => setRect(null);
    window.addEventListener("scroll", close, true);
    window.addEventListener("resize", close);
    return () => {
      window.removeEventListener("scroll", close, true);
      window.removeEventListener("resize", close);
    };
  }, [rect]);

  return (
    <>
      <button
        ref={cardRef}
        type="button"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onClick={() => openItem(item.id)}
        className="group relative shrink-0 overflow-hidden rounded-md bg-nf-card outline-none"
        style={{ width: CARD_W }}
        aria-label={`${item.title} — open details`}
      >
        <div className="aspect-video w-full">
          <PlaceholderArt item={item} variant="thumb" />
        </div>

        {item.inProgress && typeof item.progress === "number" && (
          <span className="absolute inset-x-2 bottom-2 h-[3px] rounded-full bg-white/25">
            <span
              className="block h-full rounded-full bg-nf-red"
              style={{ width: `${item.progress}%` }}
            />
          </span>
        )}
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {rect && (
              <motion.div
                className="fixed z-[80] hidden md:block"
                style={{
                  top: rect.top,
                  left: rect.left + rect.width / 2,
                  width: rect.width,
                }}
                initial={{ opacity: 0, scale: 1, x: "-50%", y: 0 }}
                animate={{ opacity: 1, scale: 1.38, x: "-50%", y: -rect.height * 0.19 }}
                exit={{ opacity: 0, scale: 1, x: "-50%", y: 0, transition: { duration: 0.12 } }}
                transition={{ duration: 0.24, ease: EASE_OUT }}
                onMouseLeave={closePreview}
              >
                <div className="overflow-hidden rounded-md bg-nf-card shadow-[0_20px_60px_rgba(0,0,0,0.7)] ring-1 ring-white/10">
                  <button
                    type="button"
                    onClick={() => {
                      closePreview();
                      openItem(item.id);
                    }}
                    className="block aspect-video w-full"
                  >
                    <PlaceholderArt item={item} variant="thumb" />
                  </button>

                  <div className="space-y-2.5 p-3">
                    <div className="flex items-center gap-2">
                      {copy.cta.href.startsWith("#") ? (
                        <button
                          type="button"
                          onClick={() => {
                            closePreview();
                            openItem(item.id);
                          }}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition hover:bg-white/80"
                          aria-label={copy.cta.label}
                        >
                          <PlayIcon width={16} height={16} />
                        </button>
                      ) : (
                        <a
                          href={copy.cta.href}
                          target={copy.cta.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition hover:bg-white/80"
                          aria-label={copy.cta.label}
                        >
                          <PlayIcon width={16} height={16} />
                        </a>
                      )}
                      <CircleBtn label="Add to list">
                        <PlusIcon width={15} height={15} />
                      </CircleBtn>
                      <CircleBtn label="Looks good">
                        <ThumbIcon width={15} height={15} />
                      </CircleBtn>
                      {item.links.demo || item.links.github ? (
                        <a
                          href={item.links.demo ?? item.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 text-white/80 transition hover:border-white hover:text-white"
                          aria-label="Open external link"
                        >
                          <ExternalIcon width={14} height={14} />
                        </a>
                      ) : null}
                      <button
                        type="button"
                        onClick={() => {
                          closePreview();
                          openItem(item.id);
                        }}
                        className="ml-auto flex h-8 w-8 items-center justify-center rounded-full border border-white/40 text-white/80 transition hover:border-white hover:text-white"
                        aria-label="More info"
                      >
                        <ChevronDown width={16} height={16} />
                      </button>
                    </div>

                    <p className="truncate text-sm font-semibold text-white">
                      {item.title}
                    </p>

                    <div className="flex items-center gap-2 text-[0.7rem]">
                      <span className="font-semibold text-[#46d369]">
                        {item.match}% Match
                      </span>
                      <span className="rounded border border-white/30 px-1 text-white/60">
                        {item.year}
                      </span>
                      {item.maturity && (
                        <span className="text-white/55">{item.maturity}</span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-x-2 gap-y-1 text-[0.7rem] text-white/70">
                      {item.tags.slice(0, 3).map((tag, i) => (
                        <span key={tag} className="flex items-center gap-2">
                          {i > 0 && <span className="text-white/25">•</span>}
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}

function CircleBtn({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={(e) => e.stopPropagation()}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 text-white/80 transition hover:border-white hover:text-white"
      aria-label={label}
    >
      {children}
    </button>
  );
}
