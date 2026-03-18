"use client";

import { motion, type Variants } from "framer-motion";
import SignalField from "@/components/SignalField";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section id="hero" className="section-shell flex min-h-screen items-center" data-variant="hero">
      <div className="section-container relative">
        <div className="ambient-orb left-0 top-14 h-56 w-56" data-tone="light" />
        <div className="ambient-orb bottom-8 right-12 h-72 w-72" data-tone="accent" />

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <motion.div
            className="relative z-10"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.65 } },
            }}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={itemVariants} className="ui-kicker eyebrow-space justify-center lg:justify-start">
              Amineddine Znin / Morocco based / available globally
            </motion.span>

            <motion.p
              variants={itemVariants}
              className="mb-4 text-center text-sm font-medium tracking-[0.02em] text-slate-200 lg:text-left"
            >
              Software Developer / Freelancer / Cybersecurity Builder
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="ui-title max-w-4xl text-center text-[3.4rem] leading-[0.96] sm:text-[4.2rem] lg:text-left lg:text-[5.5rem]"
            >
              Modern web experiences and security-aware systems, built with a sharper sense of control.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-300 md:text-xl lg:mx-0 lg:text-left"
            >
              I am a software developer and cybersecurity-focused freelancer based in Morocco and
              available globally, building production websites, creative digital experiences, and
              SOC-oriented tooling that feel clear, intentional, and technically grounded.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex w-full flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <a href="#projects" className="ui-button ui-button-primary w-full sm:w-auto">
                Explore selected work
              </a>
              <a href="#contact" className="ui-button ui-button-secondary w-full sm:w-auto">
                Open a conversation
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center justify-center gap-5 text-sm text-slate-400 lg:justify-start"
            >
              <span className="signal-pill">Production websites</span>
              <span className="signal-pill">Creative agency work</span>
              <span className="signal-pill">Security systems</span>
              <span className="signal-pill">Global collaboration</span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 grid gap-4 md:grid-cols-3"
            >
              {[
                {
                  title: "Signal",
                  copy: "A web presence that feels composed, modern, and clearly authored.",
                },
                {
                  title: "Structure",
                  copy: "Delivery that respects performance, usability, and the systems under the surface.",
                },
                {
                  title: "Trust",
                  copy: "Security-aware thinking carried through websites, tooling, and implementation details for clients wherever they are.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="signal-frame rounded-[1.5rem] border px-5 py-5 text-center lg:text-left"
                  style={{
                    borderColor: "rgba(151, 166, 190, 0.12)",
                    background: "rgba(255, 255, 255, 0.025)",
                    backdropFilter: "blur(14px)",
                  }}
                >
                  <p className="ui-micro mb-3">{item.title}</p>
                  <p className="text-sm leading-7 text-slate-300">{item.copy}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="relative z-10">
            <SignalField />
          </div>
        </div>
      </div>
    </section>
  );
}
