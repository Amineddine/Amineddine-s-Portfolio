"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect } from "react";
import { usePersona } from "@/context/PersonaContext";
import { catalogById, getItem, isNewRelease, relatedTo } from "@/data/catalog";
import { itemCopy, t, type Locale } from "@/data/i18n";
import type { CatalogItem, LinkKind, Persona } from "@/lib/types";
import PlaceholderArt, { Picture } from "./PlaceholderArt";
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

const TITLE_PATH = /^\/title\/([^/]+)\/?$/;

export default function DetailModal() {
  const { activeItemId, openItem, closeItem: clearItem, persona, locale } = usePersona();
  const item = activeItemId ? getItem(activeItemId) : undefined;

  // Projects have real, crawlable title pages. While one is open the address
  // bar shows /title/[id] (shareable), without a route transition; closing
  // returns to the browse URL.
  useEffect(() => {
    if (!item) return;
    const onTitle = TITLE_PATH.test(window.location.pathname);
    if (item.type === "project") {
      const target = `/title/${item.id}`;
      if (window.location.pathname === target) return;
      if (onTitle) window.history.replaceState(window.history.state, "", target);
      else window.history.pushState({ ...window.history.state, azTitle: true }, "", target);
    } else if (onTitle) {
      window.history.replaceState(window.history.state, "", `/browse/${persona ?? "developer"}`);
    }
  }, [item, persona]);

  const closeItem = useCallback(() => {
    if (TITLE_PATH.test(window.location.pathname)) {
      if (window.history.state?.azTitle) window.history.back();
      else
        window.history.replaceState(window.history.state, "", `/browse/${persona ?? "developer"}`);
    }
    clearItem();
  }, [clearItem, persona]);

  // back/forward between a title and the browse page
  useEffect(() => {
    const onPop = () => {
      const m = TITLE_PATH.exec(window.location.pathname);
      if (m && catalogById[m[1]]) openItem(m[1]);
      else clearItem();
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [openItem, clearItem]);

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
            role="dialog"
            aria-modal="true"
            aria-labelledby="title-modal-heading"
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
              persona={persona ?? "developer"}
              locale={locale}
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
  locale,
  onClose,
  onOpenOther,
}: {
  item: CatalogItem;
  persona: Persona;
  locale: Locale;
  onClose: () => void;
  onOpenOther: (id: string) => void;
}) {
  const copy = itemCopy(item, persona, locale);
  const strings = t(locale);
  const related = relatedTo(item);
  const reduce = useReducedMotion();
  const fresh = isNewRelease(item);
  const companion = item.companionId ? catalogById[item.companionId] : undefined;
  const links = Object.entries(item.links) as [LinkKind, string][];

  const linkLabel = (kind: LinkKind): string => {
    if (locale === "fr") {
      const fr: Record<LinkKind, string> = {
        github: "GitHub",
        demo: "Démo en ligne",
        email: "E-mail",
        linkedin: "LinkedIn",
        cv: "Télécharger le CV",
      };
      return fr[kind];
    }
    return linkMeta[kind].label;
  };

  return (
    <>
      {/* banner */}
      <div className="relative aspect-[16/8] w-full">
        <PlaceholderArt item={item} variant="banner" priority />
        {item.video && !reduce && (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden
          >
            <source src={item.video} type="video/mp4" />
          </video>
        )}
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
          <h2
            id="title-modal-heading"
            className="font-display text-3xl text-white drop-shadow-lg sm:text-5xl md:text-6xl"
          >
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
            {fresh && (
              <span className="rounded-sm bg-nf-red px-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white">
                {strings.newRelease}
              </span>
            )}
            <span className="font-semibold text-[#46d369]">{strings.match(item.match)}</span>
            <span className="text-white/80">{item.year}</span>
            {item.maturity && (
              <span className="rounded border border-white/30 px-1.5 text-xs text-white/60">
                {item.maturity}
              </span>
            )}
            {item.inProgress && (
              <span className="rounded bg-nf-red px-1.5 text-xs font-medium text-white">
                {strings.currentlyBuilding}
              </span>
            )}
          </div>
          <p className="text-[15px] leading-relaxed text-[#d2d2d2] md:text-base">
            {copy.blurb}
          </p>

          {item.maturity === "Private build" && (
            <p className="mt-4 rounded border border-nf-red/50 bg-nf-red/[0.08] px-3 py-2 text-sm text-white/90">
              {strings.privateNote}
            </p>
          )}

          {companion && (
            <button
              type="button"
              onClick={() => onOpenOther(companion.id)}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/25 px-3 py-1 text-xs text-white/85 transition hover:border-white"
            >
              <span className="rounded-sm bg-nf-red px-1.5 font-semibold uppercase tracking-[0.14em] text-white">
                {strings.sameClient}
              </span>
              {companion.title} →
            </button>
          )}

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
                  {linkLabel(kind)}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-3 text-sm">
          <MetaLine label={strings.meta.genres} value={item.tags.join(", ")} />
          {item.issuer && <MetaLine label={strings.meta.issuedBy} value={item.issuer} />}
          {item.stack && <MetaLine label={strings.meta.stack} value={item.stack.join(", ")} />}
          {item.role && <MetaLine label={strings.meta.role} value={item.role} />}
          <MetaLine
            label={strings.meta.category}
            value={item.category.charAt(0).toUpperCase() + item.category.slice(1)}
          />
        </div>
      </div>

      {/* deliverables (one title, several shipped pieces) */}
      {item.deliverables && item.deliverables.length > 0 && (
        <section className="px-5 pb-8 md:px-10" aria-labelledby="deliverables-heading">
          <h3 id="deliverables-heading" className="mb-4 text-xl font-semibold text-white">
            {strings.extras}
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {item.deliverables.map((d) => (
              <li key={d.href}>
                <a
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-md bg-[#2a2a2a] transition hover:ring-2 hover:ring-white/30"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <Picture
                      src={d.image}
                      alt={`${item.title} — ${d.label}`}
                      variant="tile"
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-3">
                    <span className="flex items-center gap-1.5 text-sm font-semibold text-white">
                      {d.label} <ExternalIcon width={12} height={12} />
                    </span>
                    <p className="mt-1 text-xs leading-snug text-white/70">{d.note}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* episodes */}
      {item.episodes && item.episodes.length > 0 && (
        <section className="px-5 pb-8 md:px-10" aria-labelledby="episodes-heading">
          <div className="mb-4 flex items-baseline justify-between border-b border-white/10 pb-3">
            <h3 id="episodes-heading" className="text-xl font-semibold text-white">
              {strings.episodes}
            </h3>
            <span className="text-sm text-white/70">{item.title}</span>
          </div>
          <ol className="divide-y divide-white/10">
            {item.episodes.map((ep, i) => (
              <li key={ep.title} className="flex gap-4 py-4 md:gap-6">
                <span
                  aria-hidden
                  className="w-8 shrink-0 pt-0.5 text-center font-display text-3xl leading-none text-white/55"
                >
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <p className="text-[0.95rem] font-semibold text-white">
                    <span className="sr-only">{strings.episode(i + 1)}: </span>
                    {ep.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-white/75">
                    {ep.synopsis[persona]}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* more like this */}
      {related.length > 0 && (
        <div className="px-5 pb-8 md:px-10">
          <h3 className="mb-4 text-xl font-semibold text-white">{strings.moreLikeThis}</h3>
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
                    {itemCopy(rel, persona, locale).blurb}
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
      <span className="text-white/55">{label}: </span>
      <span className="text-white/85">{value}</span>
    </p>
  );
}
