"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Project } from "@/data/projects";

const categoryLabel: Record<Project["category"], string> = {
  web: "Selected work",
  cybersecurity: "Cybersecurity lab",
};

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      layout
      className="signal-frame surface-card group flex h-full flex-col overflow-hidden p-6 md:p-8"
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <span
          className="ui-chip"
          style={{
            color:
              project.category === "cybersecurity"
                ? "var(--accent-strong)"
                : "var(--text-secondary)",
            background:
              project.category === "cybersecurity"
                ? "var(--accent-soft)"
                : "rgba(255, 255, 255, 0.03)",
          }}
        >
          {categoryLabel[project.category]}
        </span>
        <span className="ui-micro">0{index + 2}</span>
      </div>

      <div
        className="relative mb-7 min-h-48 overflow-hidden rounded-[1.5rem] border p-5 md:min-h-56"
        style={{
          borderColor: "rgba(151, 166, 190, 0.12)",
          background:
            project.category === "cybersecurity"
              ? "linear-gradient(145deg, rgba(17, 24, 37, 0.98), rgba(18, 33, 42, 0.98))"
              : "linear-gradient(145deg, rgba(16, 24, 36, 0.98), rgba(28, 35, 48, 0.98))",
        }}
      >
        <motion.div
          className="absolute inset-[10%] rounded-[1.25rem] border border-white/[0.08]"
          whileHover={{ x: 6, y: -6 }}
          transition={{ duration: 0.35 }}
        />
        <motion.div
          className="absolute inset-[18%] rounded-[1.25rem] border border-white/[0.06]"
          whileHover={{ x: -8, y: 8 }}
          transition={{ duration: 0.35 }}
        />

        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-start justify-between gap-4">
            <div className="max-w-[15rem]">
              <p className="ui-micro mb-2">Project frame / {project.year}</p>
              <p className="text-sm leading-7 text-slate-300">{project.description}</p>
            </div>
            <div className="signal-pill hidden sm:inline-flex">
              {project.category === "cybersecurity" ? "SOC build" : "Live site"}
            </div>
          </div>

          <div className="soft-divider mt-6" />

          <div className="mt-4 flex items-center justify-between gap-3">
            <span className="ui-micro">
              {project.category === "cybersecurity" ? "System focus" : "Delivery focus"}
            </span>
            <motion.span
              className="text-sm text-slate-200"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              {project.category === "cybersecurity" ? "Inspect build" : "View details"}
            </motion.span>
          </div>
        </div>
      </div>

      <h3 className="ui-title mb-3 text-2xl">{project.title}</h3>
      <p className="mb-4 text-sm font-semibold tracking-[-0.01em] text-slate-200">
        {project.role}
      </p>
      <p className="ui-body mb-6 text-base">{project.summary}</p>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="ui-chip">
            {item}
          </span>
        ))}
      </div>

      <div className="mb-8 space-y-3">
        {project.outcomes.map((outcome) => (
          <div key={outcome} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
            <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            <span>{outcome}</span>
          </div>
        ))}
      </div>

      <div
        className="mt-auto flex items-center justify-between gap-4 border-t pt-6"
        style={{ borderColor: "rgba(151, 166, 190, 0.12)" }}
      >
        <a
          href={project.liveUrl ?? project.githubUrl ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-slate-100 transition-colors duration-200 hover:text-[var(--accent-strong)]"
        >
          {project.category === "cybersecurity" ? "View repository" : "Visit live site"}
        </a>
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ui-micro transition-colors duration-200 hover:text-slate-200"
          >
            GitHub
          </a>
        ) : (
          <span className="ui-micro">Selected work</span>
        )}
      </div>
    </motion.article>
  );
}
