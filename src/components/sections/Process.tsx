"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/SectionHeading";
import { processSteps } from "@/data/projects";

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} className="section-shell">
      <div className="section-container">
        <SectionHeading
          label="Protocol"
          title="A calmer delivery process with stronger editorial structure."
          description="The underlying process is straightforward, but the presentation now feels more intentional and connected to the wider signal-field language of the site."
        />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.phase}
              className="signal-frame surface-card p-6 md:p-8"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="ui-micro">Phase {step.phase}</span>
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              </div>
              <h3 className="ui-title mb-4 text-2xl">{step.title}</h3>
              <p className="ui-body text-base">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
