"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/SectionHeading";

const principles = [
  "Clarity over noise",
  "Security-aware thinking throughout delivery",
  "Interfaces that feel calm, intentional, and credible",
  "Systems that still make sense after launch",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="section-shell">
      <div className="section-container">
        <SectionHeading
          label="Field Notes"
          title="I work where polished web delivery meets security-minded system building."
          description="Based in Morocco, I work across production websites, creative agency delivery, and cybersecurity tooling with a preference for clarity, performance, and thoughtful execution."
        />

        <div className="grid items-start gap-8 lg:grid-cols-[1.25fr_0.9fr] lg:gap-10">
          <motion.div
            className="signal-frame surface-card p-6 md:p-8"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-6 text-base leading-8 text-slate-300 md:text-lg">
              <p>
                I help clients turn ambitious ideas into websites and systems that feel refined,
                behave reliably, and communicate trust without overexplaining themselves.
              </p>
              <p>
                That includes shaping interface rhythm, tightening the information structure,
                keeping implementation readable, and making sure security is considered early
                enough to matter.
              </p>
              <p>
                My work spans client websites, creative presentation layers, and SOC-oriented
                security tools, but the throughline stays consistent: thoughtful systems, stronger
                usability, and delivery you can trust.
              </p>
            </div>
          </motion.div>

          <motion.aside
            className="signal-frame surface-card p-6 md:p-8"
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="ui-kicker mb-5">Working principles</p>
            <div className="space-y-4">
              {principles.map((principle, index) => (
                <div
                  key={principle}
                  className="rounded-[1.4rem] border px-5 py-5"
                  style={{ borderColor: "rgba(151, 166, 190, 0.12)" }}
                >
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="ui-micro">0{index + 1}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  </div>
                  <p className="text-base leading-7 text-slate-200">{principle}</p>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
