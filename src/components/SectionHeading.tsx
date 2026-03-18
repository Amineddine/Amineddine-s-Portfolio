"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const centered = align === "center";

  return (
    <div
      ref={ref}
      className={`section-intro ${centered ? "mx-auto text-center" : ""}`}
    >
      <motion.span
        className={`ui-kicker eyebrow-space ${centered ? "justify-center" : ""}`}
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        {label}
      </motion.span>

      <motion.h2
        className="ui-title title-space text-4xl md:text-5xl lg:text-6xl"
        initial={{ opacity: 0, y: 18 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
      >
        {title}
      </motion.h2>

      {description ? (
        <motion.p
          className={`ui-body max-w-2xl text-base md:text-lg ${centered ? "mx-auto" : ""}`}
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
        >
          {description}
        </motion.p>
      ) : null}

      <motion.div
        className={`mt-6 flex items-center gap-3 ${centered ? "justify-center" : ""}`}
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, delay: 0.18 }}
      >
        <span className="h-px w-12 bg-white/10" />
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
        <span className="h-px w-20 bg-white/10" />
      </motion.div>
    </div>
  );
}
