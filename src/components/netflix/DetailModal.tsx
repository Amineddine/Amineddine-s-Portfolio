"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { usePersona } from "@/context/PersonaContext";
import { getItem, relatedTo } from "@/data/catalog";
import type { CatalogItem, LinkKind } from "@/lib/types";
import PlaceholderArt from "./PlaceholderArt";
import {
  PlayIcon,
  PlusIcon,
  ThumbIcon,
  CloseIcon,
  GithubIcon,
  ExternalIcon,
} from "./icons";
import { EASE_OUT } from "@/lib/motion";

const linkMeta: Record<LinkKind, { label: string }> = {
  github: { label: "GitHub" },
  demo: { label: "Live demo" },
  email: { label: "Email" },
  linkedin: { label: "LinkedIn" },
  cv: { label: "Download CV" },
};

export default function DetailModal() {
  const { activeItemId, openItem, closeItem, persona } = usePersona();
  const item = activeItemId ? getItem(activeItemId) : undefined;

  // lock page scroll + Esc to close while open
  useEffect(() => {
    if (!item) return;
    window.__lenis?.stop();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeItem();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.__lenis?.start();
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [item, closeItem]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[90] overflow-y-auto bg-black/80 md:py-10"
          data-lenis-prevent
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={closeItem}
        >
          <motion.div
            className="relative mx-auto w-full max-w-[900px] overflow-hidden bg-[#181818] shadow-2xl md:rounded-lg"
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.32, ease: EASE_OUT }}
            onClick={(e) => e.stopPropagation()}
          >
            <ModalBody
              key={item.id}
              item={item}
              persona={persona}
              onClose={closeItem}
              onOpenOther={openItem}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ModalBody({
  item,
  persona,
  onClose,
  onOpenOther,
}: {
  item: CatalogItem;
  persona: ReturnType<typeof usePersona>["persona"];
  onClose: () => void;
  onOpenOther: (id: string) => void;
}) {
  const copy = persona ? item.copy[persona] : item.copy.developer;
  const related = relatedTo(item);
  const links = Object.entries(item.links) as [LinkKind, string][];

  return (
    <>
      {/* banner */}
      <div className="relative aspect-[16/8] w-full">
        <PlaceholderArt item={item} variant="banner" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#181818]/80 text-white transition hover:bg-[#181818]"
          aria-label="Close"
        >
          <CloseIcon width={18} height={18} />
        </button>

        <div className="absolute inset-x-0 bottom-0 p-5 md:p-10">
          <h2 className="font-display text-3xl text-white drop-shadow-lg sm:text-5xl md:text-6xl">
            {item.title}
          </h2>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {copy.cta.href.startsWith("#") ? (
              <button
                type="button"
                onClick={onClose}
                className="flex items-center gap-2 rounded bg-white px-6 py-2 font-semibold text-black transition hover:bg-white/80"
              >
                <PlayIcon width={18} height={18} />
                {copy.cta.label}
              </button>
            ) : (
              <a
                href={copy.cta.href}
                target={copy.cta.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded bg-white px-6 py-2 font-semibold text-black transition hover:bg-white/80"
              >
                <PlayIcon width={18} height={18} />
                {copy.cta.label}
              </a>
            )}
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/50 text-white transition hover:border-white"
              aria-label="Add to list"
            >
              <PlusIcon width={18} height={18} />
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/50 text-white transition hover:border-white"
              aria-label="Looks good"
            >
              <ThumbIcon width={18} height={18} />
            </button>
          </div>
        </div>
      </div>

      {/* meta body */}
      <div className="grid gap-6 p-5 md:grid-cols-[1.7fr_1fr] md:gap-8 md:p-10">
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <span className="font-semibold text-[#46d369]">{item.match}% Match</span>
            <span className="text-white/80">{item.year}</span>
            {item.maturity && (
              <span className="rounded border border-white/30 px-1.5 text-xs text-white/60">
                {item.maturity}
              </span>
            )}
            {item.inProgress && (
              <span className="rounded bg-nf-red px-1.5 text-xs font-medium text-white">
                Currently building
              </span>
            )}
          </div>
          <p className="text-[15px] leading-relaxed text-[#d2d2d2] md:text-base">
            {copy.blurb}
          </p>

          {links.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2.5">
              {links.map(([kind, href]) => (
                <a
                  key={kind}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded border border-white/20 px-3.5 py-1.5 text-sm text-white/85 transition hover:border-white hover:bg-white/5"
                >
                  {kind === "github" ? (
                    <GithubIcon width={15} height={15} />
                  ) : (
                    <ExternalIcon width={14} height={14} />
                  )}
                  {linkMeta[kind].label}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-3 text-sm">
          <MetaLine label="Genres" value={item.tags.join(", ")} />
          {item.issuer && <MetaLine label="Issued by" value={item.issuer} />}
          {item.stack && <MetaLine label="Stack" value={item.stack.join(", ")} />}
          {item.role && <MetaLine label="Role" value={item.role} />}
          <MetaLine
            label="Category"
            value={item.category.charAt(0).toUpperCase() + item.category.slice(1)}
          />
        </div>
      </div>

      {/* more like this */}
      {related.length > 0 && (
        <div className="px-5 pb-8 md:px-10">
          <h3 className="mb-4 text-xl font-semibold text-white">More Like This</h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {related.map((rel) => (
              <button
                key={rel.id}
                type="button"
                onClick={() => onOpenOther(rel.id)}
                className="group overflow-hidden rounded-md bg-[#2a2a2a] text-left transition hover:ring-2 hover:ring-white/30"
              >
                <div className="aspect-video w-full">
                  <PlaceholderArt item={rel} variant="thumb" />
                </div>
                <div className="p-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate text-sm font-semibold text-white">
                      {rel.title}
                    </span>
                    <span className="shrink-0 text-xs font-semibold text-[#46d369]">
                      {rel.match}%
                    </span>
                  </div>
                  <p className="mt-1 line-clamp-2 text-xs leading-snug text-white/55">
                    {(persona ? rel.copy[persona] : rel.copy.developer).blurb}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function MetaLine({ label, value }: { label: string; value: string }) {
  return (
    <p className="leading-relaxed">
      <span className="text-white/40">{label}: </span>
      <span className="text-white/85">{value}</span>
    </p>
  );
}
