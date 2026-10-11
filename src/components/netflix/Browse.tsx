"use client";

import { useEffect, useState } from "react";
import { usePersona } from "@/context/PersonaContext";
import { catalogById, rowsFor } from "@/data/catalog";
import { personaText } from "@/data/i18n";
import type { CatalogItem, Persona } from "@/lib/types";
import NetflixNav from "./NetflixNav";
import Billboard from "./Billboard";
import ContentRow from "./ContentRow";
import ContactFooter from "./ContactFooter";
import DetailModal from "./DetailModal";
import BrowseSkeleton from "./BrowseSkeleton";

export default function Browse({
  persona,
  initialItemId,
}: {
  /** route persona (canonical on /browse/*); absent on /title/* pages */
  persona?: Persona;
  /** open this title's detail view on arrival (used by /title/[id]) */
  initialItemId?: string;
}) {
  const { persona: active, setPersona, locale, openItem } = usePersona();
  const [ready, setReady] = useState(false);

  // the route param is canonical — sync it into shared state
  useEffect(() => {
    if (persona && active !== persona) setPersona(persona);
  }, [persona, active, setPersona]);

  // brief shimmer so the entry feels like a "loading title" before content
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 450);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (ready && initialItemId) openItem(initialItemId);
  }, [ready, initialItemId, openItem]);

  if (!ready) return <BrowseSkeleton />;

  const lens: Persona = persona ?? active ?? "developer";
  const rowTitles = personaText(lens, locale).rowTitles;

  return (
    <div className="min-h-screen bg-[var(--nf-bg)]">
      <NetflixNav />
      <main>
        <Billboard />
        <div className="relative z-10 -mt-[3vh] bg-[var(--nf-bg)] pt-[3vh] space-y-1 pb-10 md:-mt-[5vh] md:pt-[5vh]">
          {rowsFor(lens).map((row) => {
            const items = row.itemIds
              .map((id) => catalogById[id])
              .filter(Boolean) as CatalogItem[];
            return (
              <ContentRow
                key={row.key}
                id={`row-${row.key}`}
                title={rowTitles[row.key]}
                items={items}
                numbered={row.numbered}
              />
            );
          })}
        </div>
        <ContactFooter />
      </main>
      <DetailModal />
    </div>
  );
}
