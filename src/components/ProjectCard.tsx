"use client";

import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
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
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const softX = useSpring(pointerX, { stiffness: 120, damping: 20 });
  const softY = useSpring(pointerY, { stiffness: 120, damping: 20 });
  const rotateY = useTransform(softX, [0, 100], [-4, 4]);
  const rotateX = useTransform(softY, [0, 100], [3, -3]);
  const glow = useMotionTemplate`radial-gradient(circle at ${softX}% ${softY}%, rgba(149, 208, 224, 0.18), transparent 34%)`;
  const previewShiftX = useTransform(softX, [0, 100], [-8, 8]);
  const previewShiftY = useTransform(softY, [0, 100], [-6, 6]);
  const previewShiftAltX = useTransform(previewShiftX, (value) => value * -0.7);
  const previewShiftAltY = useTransform(previewShiftY, (value) => value * -0.7);
  const beamLeft = useTransform(softX, [0, 100], ["18%", "82%"]);

  return (
    <motion.article
      ref={ref}
      layout
      className="signal-frame surface-card group relative flex h-full flex-col overflow-hidden p-6 md:p-8"
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        pointerX.set(((event.clientX - bounds.left) / bounds.width) * 100);
        pointerY.set(((event.clientY - bounds.top) / bounds.height) * 100);
      }}
      onMouseLeave={() => {
        pointerX.set(50);
        pointerY.set(50);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
    >
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: glow }} />

      <div className="relative z-10 mb-6 flex items-center justify-between gap-4">
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
        className="relative z-10 mb-7 min-h-44 overflow-hidden rounded-[1.35rem] border p-4 sm:min-h-48 sm:rounded-[1.5rem] sm:p-5 md:min-h-56"
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
          style={{ x: previewShiftX, y: previewShiftY }}
        />
        <motion.div
          className="absolute inset-[18%] rounded-[1.25rem] border border-white/[0.06]"
          style={{ x: previewShiftAltX, y: previewShiftAltY }}
        />

        <motion.div
          className="pointer-events-none absolute inset-y-3 w-24 -translate-x-1/2 rounded-full blur-2xl"
          style={{
            left: beamLeft,
            background:
              "linear-gradient(180deg, rgba(149, 208, 224, 0.16), rgba(149, 208, 224, 0.01), transparent)",
          }}
        />

        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-start justify-between gap-4">
            <div className="max-w-none sm:max-w-[15rem]">
              <p className="ui-micro mb-2">Project frame / {project.year}</p>
              <p className="text-sm leading-7 text-slate-300">{project.description}</p>
            </div>
            <div className="signal-pill hidden sm:inline-flex">
              {project.category === "cybersecurity" ? "SOC build" : "Live site"}
            </div>
          </div>

          <div className="soft-divider mt-6" />

          <motion.div
            className="mt-4 flex items-center justify-between gap-3"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
          >
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
          </motion.div>
        </div>
      </div>

      <h3 className="ui-title relative z-10 mb-3 text-[1.65rem] sm:text-2xl">{project.title}</h3>
      <p className="relative z-10 mb-4 text-sm font-semibold tracking-[-0.01em] text-slate-200">
        {project.role}
      </p>
      <p className="ui-body relative z-10 mb-6 text-base">{project.summary}</p>

      <div className="relative z-10 mb-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <motion.span
            key={item}
            className="ui-chip"
            whileHover={{ y: -3 }}
            transition={{ duration: 0.18 }}
          >
            {item}
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 mb-8 space-y-3">
        {project.outcomes.map((outcome, outcomeIndex) => (
          <motion.div
            key={outcome}
            className="flex items-start gap-3 text-sm leading-7 text-slate-300"
            initial={{ opacity: 0.84, x: 0 }}
            whileHover={{ opacity: 1, x: 4 }}
            transition={{ duration: 0.18, delay: outcomeIndex * 0.02 }}
          >
            <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            <span>{outcome}</span>
          </motion.div>
        ))}
      </div>

      <div
        className="relative z-10 mt-auto flex flex-col items-start gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
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
