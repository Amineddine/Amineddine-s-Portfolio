"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Approach", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const sections = ["hero", ...navItems.map((item) => item.href.slice(1))];
      for (let index = sections.length - 1; index >= 0; index -= 1) {
        const node = document.getElementById(sections[index]);
        if (node && node.getBoundingClientRect().top <= 180) {
          setActiveSection(sections[index]);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className="fixed inset-x-0 top-0 z-50"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
      >
        <div className="section-container pt-5">
          <div
            className="mx-auto flex items-center justify-between rounded-full px-4 py-3 md:px-5"
            style={{
              background: isScrolled ? "rgba(14, 21, 33, 0.82)" : "rgba(14, 21, 33, 0.42)",
              border: `1px solid ${isScrolled ? "rgba(168, 188, 214, 0.18)" : "rgba(168, 188, 214, 0.12)"}`,
              backdropFilter: "blur(18px)",
              boxShadow: isScrolled ? "0 14px 35px rgba(2, 7, 14, 0.2)" : "none",
            }}
          >
            <a href="#hero" className="ui-title text-base tracking-[-0.04em] md:text-lg">
              Amineddine Znin
            </a>

            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const active = activeSection === item.href.slice(1);

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="relative rounded-full px-4 py-2 text-sm transition-colors duration-200"
                    style={{
                      color: active ? "var(--text-primary)" : "var(--text-secondary)",
                      background: active ? "rgba(255, 255, 255, 0.05)" : "transparent",
                    }}
                  >
                    {item.label}
                    {active ? (
                      <motion.span
                        layoutId="active-nav-signal"
                        className="absolute inset-x-4 -bottom-1 h-px"
                        style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }}
                      />
                    ) : null}
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Amineddine"
                target="_blank"
                rel="noopener noreferrer"
                className="ui-button ui-button-secondary hidden px-5 py-2.5 text-sm md:inline-flex"
              >
                GitHub
              </a>

              <button
                type="button"
                onClick={() => setMobileOpen((value) => !value)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border md:hidden"
                style={{
                  borderColor: "var(--border)",
                  background: "rgba(255, 255, 255, 0.03)",
                }}
                aria-label="Toggle navigation"
              >
                <span className="flex flex-col gap-1.5">
                  <span
                    className="block h-px w-4 transition-transform duration-200"
                    style={{
                      background: "var(--text-primary)",
                      transform: mobileOpen ? "translateY(7px) rotate(45deg)" : "none",
                    }}
                  />
                  <span
                    className="block h-px w-4 transition-opacity duration-200"
                    style={{
                      background: "var(--text-primary)",
                      opacity: mobileOpen ? 0 : 1,
                    }}
                  />
                  <span
                    className="block h-px w-4 transition-transform duration-200"
                    style={{
                      background: "var(--text-primary)",
                      transform: mobileOpen ? "translateY(-7px) rotate(-45deg)" : "none",
                    }}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            style={{
              background: "rgba(8, 13, 22, 0.8)",
              backdropFilter: "blur(20px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="section-container flex min-h-screen flex-col justify-center gap-5">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 14 }}
                  transition={{ delay: 0.05 * index, duration: 0.25 }}
                  className="surface-card px-6 py-5 text-xl"
                >
                  {item.label}
                </motion.a>
              ))}
              <a
                href="https://github.com/Amineddine"
                target="_blank"
                rel="noopener noreferrer"
                className="ui-button ui-button-primary mt-3"
              >
                Open GitHub
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
