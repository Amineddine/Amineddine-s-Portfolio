"use client";

import { motion } from "framer-motion";

export default function SectionDivider({ label }: { label: string }) {
  return (
    <div className="section-container py-2" aria-hidden="true">
      <motion.div
        className="signal-divider relative overflow-hidden"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="pointer-events-none absolute left-0 top-1/2 h-px w-28 -translate-y-1/2"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(149, 208, 224, 0.55), transparent)",
          }}
          animate={{ x: ["-15%", "135%"] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "linear" }}
        />
        <span>{label}</span>
      </motion.div>
    </div>
  );
}
