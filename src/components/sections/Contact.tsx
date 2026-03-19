"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const contactLinks = [
  {
    label: "Email",
    value: "amineeddine006@gmail.com",
    href: "mailto:amineeddine006@gmail.com",
  },
  {
    label: "Phone 01",
    value: "+212766171159",
    href: "tel:+212766171159",
  },
  {
    label: "Phone 02",
    value: "+212663375164",
    href: "tel:+212663375164",
  },
  {
    label: "GitHub",
    value: "github.com/Amineddine",
    href: "https://github.com/Amineddine",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/amineddine-znin-z999",
    href: "https://www.linkedin.com/in/amineddine-znin-z999",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="section-shell" data-variant="contact">
      <div className="section-container">
        <motion.div
          className="signal-frame surface-card mx-auto max-w-6xl overflow-hidden p-5 sm:p-6 md:p-10"
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
            <div className="relative">
              <div className="ambient-orb -left-10 top-0 h-40 w-40" data-tone="light" />
              <p className="ui-kicker mb-5">Open Channel</p>
              <h2 className="ui-title max-w-3xl text-center text-[2.65rem] md:text-5xl lg:text-left lg:text-6xl">
                I am available for focused freelance work with a premium finish.
              </h2>
              <p className="ui-body mx-auto mt-6 max-w-2xl text-center text-base md:text-lg lg:mx-0 lg:text-left">
                If you need a software developer who can build the site, sharpen the experience,
                and bring security-aware thinking into the delivery process, I am based in Morocco
                and available globally for remote collaborations.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <span className="signal-pill">Amineddine Znin</span>
                <span className="signal-pill">Morocco based</span>
                <span className="signal-pill">Available globally</span>
                <span className="signal-pill">Web + security systems</span>
              </div>
            </div>

            <div
              className="signal-frame relative rounded-[1.45rem] border p-4 sm:rounded-[1.8rem] sm:p-5 md:p-6"
              style={{
                borderColor: "rgba(151, 166, 190, 0.14)",
                background:
                  "linear-gradient(180deg, rgba(10, 17, 27, 0.82), rgba(13, 22, 34, 0.92))",
              }}
            >
              <svg viewBox="0 0 420 320" className="absolute inset-0 h-full w-full opacity-60">
                {[0, 1, 2].map((line) => (
                  <motion.path
                    key={line}
                    d={`M -10 ${82 + line * 78} C 110 ${40 + line * 48}, 230 ${160 + line * 46}, 430 ${86 + line * 52}`}
                    fill="none"
                    stroke="rgba(149, 208, 224, 0.22)"
                    strokeWidth="1.2"
                    animate={{ pathLength: [0.82, 1, 0.82], opacity: [0.16, 0.28, 0.16] }}
                    transition={{ duration: 6.5 + line, repeat: Infinity, ease: "easeInOut" }}
                  />
                ))}
              </svg>

              <div className="relative z-10">
                <p className="ui-micro mb-4">Direct contact</p>
                <a
                  href="mailto:amineeddine006@gmail.com"
                  className="ui-button ui-button-primary w-full justify-between gap-3 text-left text-sm"
                >
                  <span className="break-all">amineeddine006@gmail.com</span>
                  <span>Contact</span>
                </a>

                <div className="mt-5 grid gap-3 sm:mt-6">
                  {contactLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex flex-col items-start gap-2 rounded-[1.1rem] border border-white/10 bg-white/[0.03] px-4 py-4 transition-colors duration-200 hover:bg-white/[0.05] sm:flex-row sm:items-center sm:justify-between sm:rounded-[1.25rem]"
                    >
                      <span className="ui-micro">{item.label}</span>
                      <span className="break-all text-sm text-slate-200">{item.value}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
