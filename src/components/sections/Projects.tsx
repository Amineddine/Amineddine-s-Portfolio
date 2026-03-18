"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";

const categories = [
  { id: "all", label: "All work" },
  { id: "web", label: "Selected work" },
  { id: "cybersecurity", label: "Cybersecurity lab" },
] as const;

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]["id"]>("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = useMemo(
    () =>
      activeCategory === "all"
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory]
  );

  const featuredProject = filteredProjects[0];
  const supportingProjects = filteredProjects.slice(1);

  return (
    <section id="projects" ref={ref} className="section-shell">
      <div className="section-container">
        <SectionHeading
          label="Selected Work / Cybersecurity Lab"
          title="A curated showcase spanning client websites, creative web delivery, and SOC-oriented security systems."
          description="The section stays art-directed, but the content is now grounded in real projects: live production websites, creative agency work, and security tooling designed for enrichment, detection context, and analyst workflows."
        />

        <motion.div
          className="mb-12 flex flex-col items-center justify-between gap-5 md:mb-16 md:flex-row"
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.12 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            {categories.map((category) => {
              const active = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className="rounded-full px-5 py-3 text-sm transition-all duration-200"
                  style={{
                    color: active ? "var(--text-primary)" : "var(--text-secondary)",
                    background: active ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.02)",
                    border: `1px solid ${active ? "rgba(168, 188, 214, 0.24)" : "rgba(151, 166, 190, 0.12)"}`,
                  }}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <div className="signal-pill">{filteredProjects.length} real projects</div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {featuredProject ? (
              <motion.article
                layout
                className="signal-frame surface-card mb-8 overflow-hidden p-6 md:p-8 lg:p-10"
              >
                <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
                  <motion.div
                    className="relative overflow-hidden rounded-[1.8rem] border p-5 md:p-6"
                    style={{
                      borderColor: "rgba(151, 166, 190, 0.14)",
                      background:
                        featuredProject.category === "cybersecurity"
                          ? "linear-gradient(145deg, rgba(12, 21, 31, 0.98), rgba(16, 33, 41, 0.96))"
                          : "linear-gradient(145deg, rgba(14, 22, 35, 0.98), rgba(24, 31, 43, 0.96))",
                    }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="signal-pill">
                        {featuredProject.category === "cybersecurity" ? "Security system" : "Featured website"}
                      </div>
                      <span className="ui-micro">{featuredProject.year}</span>
                    </div>

                    <div className="relative mt-8 aspect-[4/3.2] overflow-hidden rounded-[1.5rem] border border-white/10">
                      <motion.div
                        className="absolute inset-[8%] rounded-[1.4rem] border border-white/10 bg-white/[0.02]"
                        animate={{ x: [0, 10, 0], y: [0, -8, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.div
                        className="absolute inset-[16%] rounded-[1.4rem] border border-white/[0.08]"
                        animate={{ x: [0, -12, 0], y: [0, 10, 0] }}
                        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                      />

                      <svg viewBox="0 0 600 420" className="absolute inset-0 h-full w-full">
                        {[0, 1, 2, 3].map((line) => (
                          <motion.path
                            key={line}
                            d={`M -10 ${90 + line * 74} C 140 ${36 + line * 60}, 280 ${172 + line * 64}, 620 ${86 + line * 58}`}
                            fill="none"
                            stroke="rgba(149, 208, 224, 0.26)"
                            strokeWidth="1.2"
                            animate={{ pathLength: [0.78, 1, 0.78], opacity: [0.16, 0.3, 0.16] }}
                            transition={{ duration: 6 + line, repeat: Infinity, ease: "easeInOut" }}
                          />
                        ))}
                      </svg>

                      <div className="absolute bottom-4 left-4 max-w-[14rem] rounded-[1.15rem] border border-white/10 bg-[rgba(8,14,24,0.78)] px-4 py-3 backdrop-blur-md">
                        <p className="ui-micro mb-2">Case-study frame</p>
                        <p className="text-sm leading-6 text-slate-200">
                          {featuredProject.description}
                        </p>
                      </div>

                      <div className="absolute right-4 top-4 hidden rounded-[1.15rem] border border-white/10 bg-[rgba(8,14,24,0.72)] px-4 py-3 backdrop-blur-md sm:block">
                        <p className="ui-micro mb-2">Focus</p>
                        <p className="text-sm text-slate-200">
                          {featuredProject.category === "cybersecurity" ? "SOC utility / enrichment / detection context" : "Positioning / presentation / front-end delivery"}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="mb-5 flex items-center justify-between gap-4">
                        <span className="ui-chip">
                          {featuredProject.category === "cybersecurity" ? "Cybersecurity" : "Web development"}
                        </span>
                        <span className="ui-micro">
                          {featuredProject.category === "cybersecurity" ? "Featured build" : "Featured launch"}
                        </span>
                      </div>

                      <h3 className="ui-title mb-4 text-3xl md:text-4xl">{featuredProject.title}</h3>
                      <p className="mb-4 text-sm font-semibold tracking-[-0.01em] text-slate-200">
                        {featuredProject.role}
                      </p>
                      <p className="ui-body mb-6 text-base md:text-lg">{featuredProject.summary}</p>

                      <div className="mb-6 flex flex-wrap gap-2">
                        {featuredProject.stack.map((item) => (
                          <span key={item} className="ui-chip">
                            {item}
                          </span>
                        ))}
                      </div>

                      <div className="space-y-3">
                        {featuredProject.outcomes.map((outcome) => (
                          <div key={outcome} className="flex items-start gap-3 text-sm leading-7 text-slate-300">
                            <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                            <span>{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div
                      className="mt-8 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between"
                      style={{ borderColor: "rgba(151, 166, 190, 0.12)" }}
                    >
                      <a
                        href={featuredProject.liveUrl ?? featuredProject.githubUrl ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ui-button ui-button-primary w-full sm:w-auto"
                      >
                        {featuredProject.category === "cybersecurity" ? "View repository" : "Visit live site"}
                      </a>
                      {featuredProject.githubUrl ? (
                        <a
                          href={featuredProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-slate-300 transition-colors duration-200 hover:text-slate-100"
                        >
                          GitHub
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </motion.article>
            ) : null}

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {supportingProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
