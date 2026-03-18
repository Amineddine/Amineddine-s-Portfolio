"use client";

export default function Footer() {
  return (
    <footer className="pb-10 pt-4">
      <div className="section-container">
        <div
          className="flex flex-col items-center justify-between gap-4 rounded-[1.75rem] border px-6 py-5 text-center md:flex-row md:text-left"
          style={{
            borderColor: "rgba(151, 166, 190, 0.1)",
            background: "rgba(255, 255, 255, 0.015)",
          }}
        >
          <div>
            <p className="ui-title text-lg">Amineddine Znin</p>
            <p className="mt-1 text-sm text-slate-400">
              Software developer, freelancer, and cybersecurity builder based in Morocco and available globally.
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm text-slate-500">
            <a
              href="https://github.com/Amineddine"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-slate-100"
            >
              GitHub
            </a>
            <span>|</span>
            <a
              href="https://www.linkedin.com/in/amineddine-znin-z999"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-slate-100"
            >
              LinkedIn
            </a>
            <span>|</span>
            <a href="#hero" className="transition-colors duration-200 hover:text-slate-100">
              Top
            </a>
            <span>|</span>
            <span>{new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
