"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface Command {
  id: string;
  label: string;
  action: () => void;
  category: string;
}

const profiles = {
  github: "https://github.com/Amineddine",
  linkedin: "https://www.linkedin.com/in/amineddine-znin-z999",
  email: "mailto:amineeddine006@gmail.com",
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const commands: Command[] = useMemo(
    () => [
      { id: "about", label: "Jump to About", action: () => scrollTo("about"), category: "Navigation" },
      { id: "projects", label: "Jump to Projects", action: () => scrollTo("projects"), category: "Navigation" },
      { id: "skills", label: "Jump to Skills", action: () => scrollTo("skills"), category: "Navigation" },
      { id: "contact", label: "Jump to Contact", action: () => scrollTo("contact"), category: "Navigation" },
      { id: "top", label: "Back to Top", action: () => scrollTo("hero"), category: "Navigation" },
      { id: "github", label: "Open GitHub", action: () => window.open(profiles.github, "_blank"), category: "Links" },
      { id: "linkedin", label: "Open LinkedIn", action: () => window.open(profiles.linkedin, "_blank"), category: "Links" },
      { id: "email", label: "Send Email", action: () => (window.location.href = profiles.email), category: "Actions" },
    ],
    []
  );

  const filtered = commands.filter((command) =>
    `${command.label} ${command.category}`.toLowerCase().includes(query.toLowerCase())
  );

  const onKeyDown = useCallback((event: KeyboardEvent) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      setOpen((value) => !value);
      setQuery("");
    }

    if (event.key === "Escape") {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            className="fixed inset-0 z-[70]"
            style={{
              background: "rgba(7, 11, 18, 0.76)",
              backdropFilter: "blur(14px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            aria-label="Close command palette"
          />

          <motion.div
            className="fixed left-1/2 top-[16vh] z-[71] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2"
            initial={{ opacity: 0, y: -14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <div className="surface-card overflow-hidden">
              <div className="flex items-center gap-3 border-b px-5 py-4" style={{ borderColor: "var(--border)" }}>
                <span className="ui-micro">Search</span>
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Type a command"
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-slate-500"
                />
                <kbd className="ui-micro rounded-full border px-2 py-1" style={{ borderColor: "var(--border)" }}>
                  Esc
                </kbd>
              </div>

              <div className="max-h-[24rem] overflow-y-auto p-2">
                {filtered.map((command) => (
                  <button
                    key={command.id}
                    type="button"
                    onClick={() => {
                      command.action();
                      setOpen(false);
                    }}
                    className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition-colors duration-150 hover:bg-white/4"
                  >
                    <span>{command.label}</span>
                    <span className="ui-micro">{command.category}</span>
                  </button>
                ))}
                {filtered.length === 0 ? (
                  <div className="px-4 py-8 text-center text-sm text-slate-400">
                    No matching command.
                  </div>
                ) : null}
              </div>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
