"use client";

import { motion } from "framer-motion";

export default function SectionDivider({ label }: { label: string }) {
  return (
    <div className="section-container py-2" aria-hidden="true">
      <motion.div
        className="signal-divider"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <span>{label}</span>
      </motion.div>
    </div>
  );
}
