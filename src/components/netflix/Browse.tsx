"use client";

import { useEffect, useState } from "react";
import { usePersona } from "@/context/PersonaContext";
import { catalogById, rows } from "@/data/catalog";
import { personas } from "@/data/personas";
import type { CatalogItem, Persona } from "@/lib/types";
import NetflixNav from "./NetflixNav";
import Billboard from "./Billboard";
import ContentRow from "./ContentRow";
import ContactFooter from "./ContactFooter";
import DetailModal from "./DetailModal";
import BrowseSkeleton from "./BrowseSkeleton";

export default function Browse({ persona }: { persona: Persona }) {
  const { persona: active, setPersona } = usePersona();
  const [ready, setReady] = useState(false);

  // the route param is canonical — sync it into shared state
  useEffect(() => {
    if (active !== persona) setPersona(persona);
  }, [persona, active, setPersona]);

  // brief shimmer so the entry feels like a "loading title" before content
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 650);
    return () => clearTimeout(t);
  }, []);

  if (!ready) return <BrowseSkeleton />;

  const def = personas[persona];

  return (
    <div className="min-h-screen bg-[var(--nf-bg)]">
      <NetflixNav />
      <main>
        <Billboard />
        <div className="relative z-10 -mt-[3vh] bg-[var(--nf-bg)] pt-[3vh] space-y-1 pb-10 md:-mt-[5vh] md:pt-[5vh]">
          {rows.map((row) => {
            const items = row.itemIds
              .map((id) => catalogById[id])
              .filter(Boolean) as CatalogItem[];
            return (
              <ContentRow
                key={row.key}
                id={`row-${row.key}`}
                title={def.rowTitles[row.key]}
                items={items}
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
