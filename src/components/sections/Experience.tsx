"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/SectionHeading";

const valueProps = [
  {
    title: "Product-level thinking",
    description:
      "I approach client work as product work. The build needs to feel good, read well, and make sense for the people maintaining it later.",
    support: "Clear structure, stronger hierarchy, cleaner implementation.",
  },
  {
    title: "Security-aware delivery",
    description:
      "My cybersecurity background helps me spot risk early, ask better questions, and keep the implementation grounded in safer defaults.",
    support: "Useful in audits, hardening, reviews, and everyday engineering.",
  },
  {
    title: "Reliable collaboration",
    description:
      "Freelance delivery works best when communication is calm, direct, and visible. I prefer momentum over mystery and clarity over theater.",
    support: "Practical updates, steady feedback loops, and realistic tradeoffs.",
  },
  {
    title: "Premium execution",
    description:
      "The goal is not just a working app. It is a product that feels intentional in its layout, interactions, content hierarchy, and finishing details.",
    support: "A better first impression for users, clients, and recruiters.",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="section-shell">
      <div className="section-container">
        <SectionHeading
          label="Operating Signal"
          title="The value is not noise or novelty. It is thoughtful execution."
          description="This section makes the case for how I work, what I protect against, and why the final product feels more considered when those things stay aligned."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {valueProps.map((item, index) => (
            <motion.article
              key={item.title}
              className="signal-frame surface-card flex h-full flex-col p-6 md:p-8"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <p className="ui-micro mb-5">0{index + 1}</p>
              <h3 className="ui-title mb-4 text-2xl">{item.title}</h3>
              <p className="ui-body text-base">{item.description}</p>
              <div className="mt-8 border-t pt-5 text-sm leading-7 text-slate-300" style={{ borderColor: "rgba(151, 166, 190, 0.12)" }}>
                {item.support}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
