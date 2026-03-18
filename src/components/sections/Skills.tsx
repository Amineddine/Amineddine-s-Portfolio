"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/SectionHeading";
import { skillCategories } from "@/data/projects";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="section-shell">
      <div className="section-container">
        <SectionHeading
          label="Practice Layers"
          title="A tighter toolkit, presented like a curated practice instead of a stack wall."
          description="I prefer showing the capabilities I actually use to ship polished client work, rather than listing every tool that has ever passed through a repo."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.title}
              className="signal-frame surface-card p-6 md:p-8"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="ui-micro mb-2">{category.icon}</p>
                  <h3 className="ui-title text-2xl">{category.title}</h3>
                </div>
              </div>

              <p className="ui-body mb-6 text-base">{category.summary}</p>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span key={skill} className="ui-chip px-4 py-2">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
