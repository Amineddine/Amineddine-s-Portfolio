"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false);
      window.setTimeout(onComplete, 320);
    }, 900);

    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{
            background:
              "radial-gradient(circle at top, rgba(125, 182, 201, 0.08), transparent 28%), rgba(8, 13, 22, 0.98)",
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="surface-card flex flex-col items-center gap-5 px-10 py-8 text-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="ui-kicker justify-center">Portfolio loading</p>
            <h1 className="ui-title text-3xl md:text-4xl">Amineddine Znin</h1>
            <div className="h-px w-40 overflow-hidden rounded-full bg-white/8">
              <motion.div
                className="h-full w-20"
                style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}
                initial={{ x: "-100%" }}
                animate={{ x: "220%" }}
                transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
