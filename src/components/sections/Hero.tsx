"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import SignalField from "@/components/SignalField";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.6]);
  const fieldY = useTransform(scrollYProgress, [0, 1], [0, -54]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="section-shell flex items-center lg:min-h-screen"
      data-variant="hero"
    >
      <div className="section-container relative">
        <motion.div
          className="ambient-orb left-0 top-14 h-56 w-56"
          data-tone="light"
          style={{ scale: orbScale }}
        />
        <motion.div
          className="ambient-orb bottom-8 right-12 h-72 w-72"
          data-tone="accent"
          style={{ scale: orbScale }}
        />

        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <motion.div
            className="relative z-10"
            style={{ y: textY, opacity: textOpacity }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12, delayChildren: 0.55 },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={itemVariants}
              className="ui-kicker eyebrow-space justify-center lg:justify-start"
            >
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
              className="ui-title max-w-4xl text-center text-[2.8rem] leading-[0.98] sm:text-[3.65rem] lg:text-left lg:text-[5.5rem]"
            >
              Modern web experiences and security-aware systems, built with a sharper sense of
              control.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-5 max-w-2xl text-center text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 md:text-xl lg:mx-0 lg:text-left"
            >
              I am a software developer and cybersecurity-focused freelancer based in Morocco and
              available globally, building production websites, creative digital experiences, and
              SOC-oriented tooling that feel clear, intentional, and technically grounded.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex w-full flex-col items-center gap-3 sm:flex-row sm:gap-4 lg:justify-start"
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
              className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-400 sm:gap-4 lg:justify-start"
            >
              <span className="signal-pill">Production websites</span>
              <span className="signal-pill">Creative agency work</span>
              <span className="signal-pill">Security systems</span>
              <span className="signal-pill">Global collaboration</span>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10 grid gap-3 sm:gap-4 md:grid-cols-3">
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
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="signal-frame rounded-[1.4rem] border px-4 py-4 text-center lg:text-left sm:px-5 sm:py-5"
                  style={{
                    borderColor: "rgba(151, 166, 190, 0.12)",
                    background: "rgba(255, 255, 255, 0.025)",
                    backdropFilter: "blur(14px)",
                  }}
                  whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
                  animate={{ y: [0, index % 2 === 0 ? -4 : 4, 0] }}
                  transition={{
                    duration: 8 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <p className="ui-micro mb-3">{item.title}</p>
                  <p className="text-sm leading-7 text-slate-300">{item.copy}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="relative z-10" style={{ y: fieldY }}>
            <SignalField />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
