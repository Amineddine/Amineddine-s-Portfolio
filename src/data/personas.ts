import type { Persona, PersonaDef } from "@/lib/types";

const EMAIL = "mailto:amineeddine006@gmail.com";
const GITHUB = "https://github.com/Amineddine";
/** CV lives in /public — referenced here and by the navbar résumé button */
export const CV_PATH = "/Amineddine_Znin_CV-FINAL.pdf";
const CV = CV_PATH;

// The three lenses. Each one re-narrates the exact same catalog; only tone,
// hero copy, CTA, and row titles change.
export const personas: Record<Persona, PersonaDef> = {
  recruiter: {
    id: "recruiter",
    label: "Recruiter",
    badge: "The hiring lens",
    tagline: "Ship-ready engineer who delivers outcomes.",
    heroDescription:
      "Morocco-based software developer and freelancer, available globally. I turn ambitious briefs into production websites and security-aware systems — polished, on time, and built to last. If you need someone who ships and sweats the finish, you're in the right profile.",
    primaryCta: { label: "Download CV", href: CV, download: true },
    infoLabel: "Why hire me",
    icon: "briefcase",
    tileColor: ["#b9090b", "#7a0608"],
    rowTitles: {
      featured: "Proven Impact",
      topPicks: "Why You Should Hire Me",
      building: "Currently Shipping",
      skills: "Skills Employers Want",
      experience: "Track Record",
      certifications: "Credentials",
    },
  },
  developer: {
    id: "developer",
    label: "Developer",
    badge: "The engineering lens",
    tagline: "Full-stack + security, deep in the stack.",
    heroDescription:
      "React, Next.js and TypeScript up front; Python and FastAPI behind; a detection-engineering mindset throughout — Sigma, MITRE ATT&CK, anomaly detection. This profile is the technical cut: architecture, tradeoffs, and how the systems actually fit together.",
    primaryCta: { label: "View on GitHub", href: GITHUB },
    infoLabel: "Read the writeup",
    icon: "terminal",
    tileColor: ["#1f6feb", "#0b3d91"],
    rowTitles: {
      featured: "Architecture Deep Dives",
      topPicks: "Top Picks for a Fellow Dev",
      building: "Currently Building",
      skills: "Skills & Tech Stack",
      experience: "Engineering Challenges",
      certifications: "Certs & Training",
    },
  },
  stalker: {
    id: "stalker",
    label: "Stalker",
    badge: "The human lens",
    tagline: "Hey — here's what I actually do.",
    heroDescription:
      "I'm Amineddine. I make websites that feel nice and security tools that catch the weird stuff. No buzzwords in this profile — just the real story behind the work: the wins, the why, and the things I'm still figuring out.",
    primaryCta: { label: "Say hi", href: EMAIL },
    infoLabel: "More about me",
    icon: "search",
    tileColor: ["#1f9d6b", "#0b5d3e"],
    rowTitles: {
      featured: "Stuff I'm Proud Of",
      topPicks: "Get to Know Me",
      building: "What I'm Tinkering With",
      skills: "Things I'm Good At",
      experience: "The Story So Far",
      certifications: "Badges I Earned",
    },
  },
};

export const personaList: PersonaDef[] = [
  personas.recruiter,
  personas.developer,
  personas.stalker,
];
