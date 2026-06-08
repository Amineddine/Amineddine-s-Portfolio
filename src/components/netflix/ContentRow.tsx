"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { CatalogItem } from "@/lib/types";
import TitleCard from "./TitleCard";
import { ChevronIcon } from "./icons";

export default function ContentRow({
  id,
  title,
  items,
}: {
  id: string;
  title: string;
  items: CatalogItem[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef(null);
  const inView = useInView(headingRef, { once: true, margin: "-80px" });

  const nudge = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * track.clientWidth * 0.8, behavior: "smooth" });
  };

  if (items.length === 0) return null;

  return (
    <section id={id} className="relative py-3 md:py-4">
      <motion.h2
        ref={headingRef}
        initial={{ opacity: 0, x: -12 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.45 }}
        className="relative mb-1 px-4 text-base font-semibold tracking-tight text-[#e5e5e5] [text-shadow:0_1px_6px_rgba(0,0,0,0.85)] sm:text-lg md:px-[clamp(1rem,4vw,3.75rem)] md:text-xl"
      >
        {title}
      </motion.h2>

      <div className="group/row relative">
        {/* edge chevrons (desktop) */}
        <button
          type="button"
          onClick={() => nudge(-1)}
          aria-label="Scroll left"
          className="absolute left-0 top-0 z-[60] hidden h-full w-[clamp(1rem,4vw,3.75rem)] items-center justify-center bg-gradient-to-r from-black/60 to-transparent text-white opacity-0 transition-opacity duration-200 group-hover/row:opacity-100 md:flex"
        >
          <ChevronIcon className="rotate-180" width={28} height={28} />
        </button>

        <div ref={trackRef} className="row-track">
          {items.map((item) => (
            <TitleCard key={`${id}-${item.id}`} item={item} />
          ))}
        </div>

        <button
          type="button"
          onClick={() => nudge(1)}
          aria-label="Scroll right"
          className="absolute right-0 top-0 z-[60] hidden h-full w-[clamp(1rem,4vw,3.75rem)] items-center justify-center bg-gradient-to-l from-black/60 to-transparent text-white opacity-0 transition-opacity duration-200 group-hover/row:opacity-100 md:flex"
        >
          <ChevronIcon width={28} height={28} />
        </button>
      </div>
    </section>
  );
}
