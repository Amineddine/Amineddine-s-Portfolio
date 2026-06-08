import type { CatalogItem, RowConfig } from "@/lib/types";

const GITHUB = "https://github.com/Amineddine";
const EMAIL = "mailto:amineeddine006@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/amineddine-znin-z999";

// ───────────────────────────────────────────────────────────────────────────
// THE CATALOG — one typed array, the only source of truth for content.
// Every item carries three `copy` variants (recruiter / developer / stalker).
// The UI never branches on persona for *which* items to show — only for *how*
// each item is narrated.
// ───────────────────────────────────────────────────────────────────────────
export const catalog: CatalogItem[] = [
  // ── The bio / billboard title ─────────────────────────────────────────────
  {
    id: "about-amineddine",
    title: "Amineddine Znin",
    type: "about",
    category: "profile",
    year: "2025",
    tags: ["Software Developer", "Cybersecurity", "Freelancer", "Morocco"],
    role: "Software Developer · Freelancer · Cybersecurity Builder",
    stack: ["React", "Next.js", "TypeScript", "Python", "FastAPI", "MITRE ATT&CK"],
    match: 99,
    maturity: "Available globally",
    accent: ["#e50914", "#3a0608"],
    links: { github: GITHUB, linkedin: LINKEDIN, email: EMAIL },
    copy: {
      recruiter: {
        blurb:
          "Morocco-based software developer and freelancer, available globally. I build production websites, creative digital experiences, and SOC-oriented security tooling — and I obsess over the finish. If you want someone who ships polished work and weighs risk before it bites, let's talk.",
        cta: { label: "Book a call", href: EMAIL },
      },
      developer: {
        blurb:
          "Full-stack developer with a detection-engineering streak. React/Next/TS on the front, Python/FastAPI on the back, Sigma/ATT&CK/anomaly-detection in the security work. I like systems that are readable, observable, and honest about their tradeoffs.",
        cta: { label: "View GitHub", href: GITHUB },
      },
      stalker: {
        blurb:
          "Hey, I'm Amineddine. I'm from Morocco, I work with people all over the world, and I split my time between making nice websites and building little security tools that catch sketchy behavior. I care a lot about details and I'm always tinkering with something.",
        cta: { label: "Say hi", href: EMAIL },
      },
    },
  },

  // ── Web projects ──────────────────────────────────────────────────────────
  {
    id: "weframe-media",
    title: "WeFrame Media",
    type: "project",
    category: "web",
    year: "2025",
    featured: true,
    maturity: "Live",
    tags: ["Creative Agency", "Next.js", "Storytelling"],
    stack: ["Next.js", "React"],
    role: "Website development & creative web implementation",
    match: 97,
    accent: ["#e0533d", "#7a1f3d"],
    image: "/weframe-media-preview.png",
    banner: "/weframe-media-preview.png",
    links: { demo: "https://www.weframemedia.com/" },
    copy: {
      recruiter: {
        blurb:
          "A premium creative-agency website that sharpens a Marrakech video studio's global positioning — clearer services, a stronger first impression, and a cleaner path from visitor to qualified inquiry.",
        cta: { label: "Visit live site", href: "https://www.weframemedia.com/" },
      },
      developer: {
        blurb:
          "Next.js + React build centered on editorial pacing and heavy cinematic media. Tuned so large visual content loads fast without breaking the storytelling rhythm — motion budgeted, layout kept calm.",
        cta: { label: "Visit live site", href: "https://www.weframemedia.com/" },
      },
      stalker: {
        blurb:
          "A slick site for a video crew in Marrakech. Big cinematic vibes, smooth scrolling — I tried to make the site look as good as the films they shoot.",
        cta: { label: "Take a look", href: "https://www.weframemedia.com/" },
      },
    },
  },
  {
    id: "the-seven-saints",
    title: "The Seven Saints",
    type: "project",
    category: "web",
    year: "2025",
    featured: true,
    maturity: "Live",
    tags: ["Hospitality", "Luxury", "React"],
    stack: ["React", "TypeScript", "Vite"],
    role: "Website development & front-end implementation",
    match: 96,
    accent: ["#c98a3c", "#3a2a4d"],
    image: "/the-seven-saints-preview.png",
    banner: "/the-seven-saints-preview.png",
    links: { demo: "https://ornate-marigold-5e0674.netlify.app/" },
    copy: {
      recruiter: {
        blurb:
          "Luxury desert-camp website that frames a high-end Agafay stay and drives booking intent — immersive, premium, and built to convert browsers into guests.",
        cta: { label: "Visit live site", href: "https://ornate-marigold-5e0674.netlify.app/" },
      },
      developer: {
        blurb:
          "React + TypeScript + Vite, built around a calm, immersive browsing rhythm. Responsive imagery and careful motion budgeting so the atmosphere never costs you performance.",
        cta: { label: "Visit live site", href: "https://ornate-marigold-5e0674.netlify.app/" },
      },
      stalker: {
        blurb:
          "A dreamy website for a fancy desert camp near Marrakech. The kind of place you'd screenshot — I wanted the site to feel a little like actually being there.",
        cta: { label: "Take a look", href: "https://ornate-marigold-5e0674.netlify.app/" },
      },
    },
  },
  {
    id: "mahal-films",
    title: "Mahal Films",
    type: "project",
    category: "web",
    year: "2025",
    featured: true,
    maturity: "Live",
    tags: ["Production Services", "TypeScript", "Trust"],
    stack: ["TypeScript", "Vite", "React"],
    role: "Website development & front-end implementation",
    match: 95,
    accent: ["#3f7cac", "#13294b"],
    image: "/mahal-films-preview.png",
    banner: "/mahal-films-preview.png",
    links: { demo: "https://www.mahalfilms.com/" },
    copy: {
      recruiter: {
        blurb:
          "Production-services platform that builds trust with international directors and agencies looking to shoot in Morocco — clear services, real credibility, an easy way to reach out.",
        cta: { label: "Visit live site", href: "https://www.mahalfilms.com/" },
      },
      developer: {
        blurb:
          "TypeScript + Vite + React. A focused presentation layer — service framing, location content, and a clean inquiry path — kept fast and scannable down to small screens.",
        cta: { label: "Visit live site", href: "https://www.mahalfilms.com/" },
      },
      stalker: {
        blurb:
          "A site for a film-production crew in Morocco that helps big international shoots happen here. Clean, direct, and good at getting people to reach out.",
        cta: { label: "Take a look", href: "https://www.mahalfilms.com/" },
      },
    },
  },

  {
    id: "moroccan-mirage",
    title: "Moroccan Mirage",
    type: "project",
    category: "web",
    year: "2025",
    featured: true,
    maturity: "Full-stack",
    tags: ["Luxury Travel", "Cinematic", "Framer Motion"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lenis"],
    role: "Full-stack development & cinematic front-end",
    match: 98,
    accent: ["#c9a25e", "#3a2a16"],
    image: "/moroccan-mirage-preview.png",
    banner: "/moroccan-mirage-preview.png",
    links: {},
    copy: {
      recruiter: {
        blurb:
          "A full-stack luxury-travel website that positions a high-end Moroccan agency like a glossy travel magazine — cinematic storytelling, a custom trip planner, and a full tour catalog built to turn browsers into booked guests.",
        cta: { label: "See the build", href: "#" },
      },
      developer: {
        blurb:
          "Next.js 15 + React 19 + TypeScript with Framer Motion and Lenis. Scroll-driven storytelling, a sticky parallax Morocco showcase, horizontal city scroll, animated stat counters, a multi-step trip planner, and a dynamically-routed tour/excursion catalog. Dark-sandstone identity, Cormorant Garamond, grain overlays throughout.",
        cta: { label: "See the build", href: "#" },
      },
      stalker: {
        blurb:
          "A gorgeous, magazine-style website for a fancy Moroccan travel agency — the kind of dreamy site that makes you want to book a trip immediately. Sandstone tones, buttery scrolling, parallax everywhere, and a build-your-own-trip planner.",
        cta: { label: "Take a look", href: "#" },
      },
    },
  },

  // ── Cybersecurity projects ────────────────────────────────────────────────
  {
    id: "sigmapack-builder",
    title: "SigmaPack-Builder",
    type: "project",
    category: "cybersecurity",
    year: "2025",
    featured: true,
    maturity: "Open source",
    tags: ["Detection Engineering", "Sigma", "MITRE ATT&CK"],
    stack: ["Python", "YAML", "MITRE ATT&CK", "SOC tooling"],
    role: "Cybersecurity builder & workflow developer",
    match: 94,
    accent: ["#1f9d6b", "#0b3d2e"],
    links: { github: `${GITHUB}/SigmaPack-Builder` },
    copy: {
      recruiter: {
        blurb:
          "A security tool that turns detection rules into deploy-ready SOC rule packs — it standardizes the work, saves analyst time, and ships consistency across a detection program.",
        cta: { label: "View on GitHub", href: `${GITHUB}/SigmaPack-Builder` },
      },
      developer: {
        blurb:
          "Python pipeline that converts ATT&CK-tagged detections into Sigma-style YAML packs. Built for repeatability and clean SOC handoff — structure, formatting and idempotency are the whole game.",
        cta: { label: "View on GitHub", href: `${GITHUB}/SigmaPack-Builder` },
      },
      stalker: {
        blurb:
          "A behind-the-scenes tool for security teams. It takes messy detection rules and packages them up neatly so the defenders can actually drop them straight into their systems.",
        cta: { label: "See the code", href: `${GITHUB}/SigmaPack-Builder` },
      },
    },
  },
  {
    id: "soar-mini-enricher",
    title: "soar-mini-enricher",
    type: "project",
    category: "cybersecurity",
    year: "2025",
    featured: true,
    maturity: "Open source",
    tags: ["FastAPI", "Alert Enrichment", "SOC Automation"],
    stack: ["FastAPI", "Python", "MITRE ATT&CK", "JSON", "SOC automation"],
    role: "Security tooling developer",
    match: 93,
    accent: ["#2a8fb0", "#0a2a3d"],
    links: { github: `${GITHUB}/soar-mini-enricher` },
    copy: {
      recruiter: {
        blurb:
          "An alert-enrichment microservice that hands SOC analysts instant context and triage guidance — faster, smarter incident response and less time lost to noise.",
        cta: { label: "View on GitHub", href: `${GITHUB}/soar-mini-enricher` },
      },
      developer: {
        blurb:
          "FastAPI microservice: maps raw alerts to MITRE ATT&CK, scores severity, and returns analyst recommendations as JSON. Lightweight enough to drop into an existing SOC pipeline.",
        cta: { label: "View on GitHub", href: `${GITHUB}/soar-mini-enricher` },
      },
      stalker: {
        blurb:
          "When a security alarm goes off, this little service explains what it might mean and how bad it is — so the humans aren't drowning in a thousand alerts at once.",
        cta: { label: "See the code", href: `${GITHUB}/soar-mini-enricher` },
      },
    },
  },
  {
    id: "attck-tagger",
    title: "attck-tagger",
    type: "project",
    category: "cybersecurity",
    year: "2025",
    featured: true,
    maturity: "Open source",
    tags: ["Explainable AI", "MITRE ATT&CK", "Log Enrichment"],
    stack: ["Python", "JSONL", "MITRE ATT&CK", "Detection enrichment"],
    role: "Security systems developer",
    match: 92,
    accent: ["#c0632a", "#3d1f0b"],
    links: { github: `${GITHUB}/attck-tagger` },
    copy: {
      recruiter: {
        blurb:
          "Explainable threat-detection enrichment — analysts see why an event matters, with confidence scoring they can trust. Visibility that speeds decisions and reduces guesswork.",
        cta: { label: "View on GitHub", href: `${GITHUB}/attck-tagger` },
      },
      developer: {
        blurb:
          "Rule-based ATT&CK enrichment for JSONL security logs with explainable matches and confidence scores. Designed so analysts can audit the reasoning, not just accept the verdict.",
        cta: { label: "View on GitHub", href: `${GITHUB}/attck-tagger` },
      },
      stalker: {
        blurb:
          "Tags security logs with the attack technique they might be — and, crucially, shows its reasoning, so people can double-check it instead of blindly trusting a black box.",
        cta: { label: "See the code", href: `${GITHUB}/attck-tagger` },
      },
    },
  },
  {
    id: "rareguard",
    title: "rareguard",
    type: "project",
    category: "cybersecurity",
    year: "2025",
    inProgress: true,
    progress: 70,
    maturity: "Research",
    tags: ["Machine Learning", "Transformers", "Anomaly Detection"],
    stack: ["Python", "Transformers", "Anomaly Detection", "Security Logs", "ML"],
    role: "Security research & applied ML",
    match: 90,
    accent: ["#6c4fd0", "#241b4d"],
    links: { github: `${GITHUB}/rareguard` },
    copy: {
      recruiter: {
        blurb:
          "Research-grade anomaly detection that surfaces the rare, dangerous security events others miss — with statistical rigor analysts can actually stand behind.",
        cta: { label: "View on GitHub", href: `${GITHUB}/rareguard` },
      },
      developer: {
        blurb:
          "Self-supervised Transformer for rare security-log anomalies, paired with conformal p-values for calibrated, interpretable alerts. The hard part: making rare-event scoring trustworthy, not just clever.",
        cta: { label: "View on GitHub", href: `${GITHUB}/rareguard` },
      },
      stalker: {
        blurb:
          "My research-y experiment: an AI that learns what 'normal' looks like in security logs and flags the genuinely weird stuff — with real math behind how sure it is.",
        cta: { label: "See the code", href: `${GITHUB}/rareguard` },
      },
    },
  },

  // ── Skills (as browsable titles) ──────────────────────────────────────────
  {
    id: "skill-frontend",
    title: "Frontend Delivery",
    type: "skill",
    category: "web",
    year: "Core",
    maturity: "Daily driver",
    tags: ["React", "Next.js", "TypeScript", "Vite", "Tailwind CSS"],
    match: 98,
    accent: ["#38bdf8", "#0c4a6e"],
    links: {},
    copy: {
      recruiter: {
        blurb:
          "Polished, responsive web interfaces that load fast and convert — the front-of-house clients and users judge you on, done with discipline.",
        cta: { label: "See it in the work", href: "#row-featured" },
      },
      developer: {
        blurb:
          "React, Next.js, TypeScript, Vite, Tailwind. Component architecture with strong pacing, accessibility-minded markup, and a tight responsive discipline.",
        cta: { label: "See it in the work", href: "#row-featured" },
      },
      stalker: {
        blurb:
          "The part you can see and click. I make websites that feel smooth and look sharp on any screen.",
        cta: { label: "See it in the work", href: "#row-featured" },
      },
    },
  },
  {
    id: "skill-backend",
    title: "Application Engineering",
    type: "skill",
    category: "ops",
    year: "Core",
    maturity: "Daily driver",
    tags: ["Node.js", "Python", "FastAPI", "REST APIs", "Architecture"],
    match: 95,
    accent: ["#34d399", "#064e3b"],
    links: {},
    copy: {
      recruiter: {
        blurb:
          "Reliable systems behind the interface — APIs and services that hold up in production and don't surprise you six months later.",
        cta: { label: "See it in the work", href: "#row-featured" },
      },
      developer: {
        blurb:
          "Node.js, Python, FastAPI, REST API design, pragmatic architecture. Services built to be readable, testable, and maintainable by whoever inherits them.",
        cta: { label: "See it in the work", href: "#row-featured" },
      },
      stalker: {
        blurb:
          "The engine-room stuff — the bits that make the buttons actually do something.",
        cta: { label: "See it in the work", href: "#row-featured" },
      },
    },
  },
  {
    id: "skill-security",
    title: "Security Systems",
    type: "skill",
    category: "cybersecurity",
    year: "Core",
    inProgress: true,
    progress: 80,
    maturity: "Specialty",
    tags: ["MITRE ATT&CK", "Sigma", "Alert Enrichment", "SOC Workflows", "Detection Logic"],
    match: 96,
    accent: ["#f87171", "#7f1d1d"],
    links: {},
    copy: {
      recruiter: {
        blurb:
          "A genuine security background — risk spotted early, safer defaults, and the audit-and-harden instincts that protect the business.",
        cta: { label: "See the security work", href: "#row-featured" },
      },
      developer: {
        blurb:
          "MITRE ATT&CK, Sigma, alert enrichment, detection logic, SOC workflows. Detection-engineering instincts baked into how I build, not bolted on after.",
        cta: { label: "See the security work", href: "#row-featured" },
      },
      stalker: {
        blurb:
          "I think like a defender. I build tools that help catch the bad guys — and I keep that mindset even on a normal website.",
        cta: { label: "See the security work", href: "#row-featured" },
      },
    },
  },
  {
    id: "skill-ops",
    title: "Research & Operations",
    type: "skill",
    category: "ops",
    year: "Core",
    inProgress: true,
    progress: 55,
    maturity: "Always learning",
    tags: ["Docker", "Linux", "ML for Security", "Observability", "CI/CD"],
    match: 91,
    accent: ["#a78bfa", "#3b0764"],
    links: {},
    copy: {
      recruiter: {
        blurb:
          "Modern delivery habits — containerized, observable, continuously shipped. Less risk, fewer fire drills, more predictable releases.",
        cta: { label: "See how I work", href: "#row-experience" },
      },
      developer: {
        blurb:
          "Docker, Linux, CI/CD, observability, and applied ML for security. Experiment-friendly but deployment-minded — research that actually ends up running.",
        cta: { label: "See how I work", href: "#row-experience" },
      },
      stalker: {
        blurb:
          "All the 'make it run reliably and keep it running' stuff — plus the fun ML experiments on the side.",
        cta: { label: "See how I work", href: "#row-experience" },
      },
    },
  },

  // ── Experience / value props (as browsable titles) ────────────────────────
  {
    id: "exp-product",
    title: "Product-Level Thinking",
    type: "experience",
    category: "profile",
    year: "Principle",
    tags: ["Hierarchy", "Structure", "Maintainability"],
    match: 97,
    accent: ["#fbbf24", "#78350f"],
    links: {},
    copy: {
      recruiter: {
        blurb:
          "I treat client work as product work — clear structure, strong hierarchy, and decisions that still make sense to the team maintaining it later.",
        cta: { label: "More about me", href: "#about" },
      },
      developer: {
        blurb:
          "Builds judged on whether they read well and survive maintenance, not just whether they compile. Naming, hierarchy and structure get real attention.",
        cta: { label: "More about me", href: "#about" },
      },
      stalker: {
        blurb:
          "I care about how a thing feels to use — and how it'll feel six months later when someone has to change it.",
        cta: { label: "More about me", href: "#about" },
      },
    },
  },
  {
    id: "exp-security",
    title: "Security-Aware Delivery",
    type: "experience",
    category: "profile",
    year: "Principle",
    tags: ["Threat Modeling", "Hardening", "Safer Defaults"],
    match: 96,
    accent: ["#fb7185", "#881337"],
    links: {},
    copy: {
      recruiter: {
        blurb:
          "My cybersecurity background means risk gets caught early — useful in audits, hardening, reviews, and everyday engineering.",
        cta: { label: "More about me", href: "#about" },
      },
      developer: {
        blurb:
          "Threat-modeling reflexes during ordinary feature work: safer defaults, sharper questions, and fewer 'how did this ship?' moments down the line.",
        cta: { label: "More about me", href: "#about" },
      },
      stalker: {
        blurb:
          "I notice the 'wait, could someone abuse this?' stuff before it becomes a problem. Old security habit, hard to switch off.",
        cta: { label: "More about me", href: "#about" },
      },
    },
  },
  {
    id: "exp-collab",
    title: "Reliable Collaboration",
    type: "experience",
    category: "profile",
    year: "Principle",
    tags: ["Communication", "Feedback Loops", "Tradeoffs"],
    match: 95,
    accent: ["#5eead4", "#134e4a"],
    links: {},
    copy: {
      recruiter: {
        blurb:
          "Calm, direct, visible communication. Steady updates and realistic tradeoffs — momentum over mystery, every week.",
        cta: { label: "Work with me", href: EMAIL },
      },
      developer: {
        blurb:
          "Practical updates, tight feedback loops, honest tradeoff conversations. I'd rather flag a problem early than hide it behind a green status.",
        cta: { label: "Work with me", href: EMAIL },
      },
      stalker: {
        blurb:
          "I actually tell you what's going on. No ghosting, no vague 'it's almost done' for three weeks straight.",
        cta: { label: "Work with me", href: EMAIL },
      },
    },
  },
  {
    id: "exp-premium",
    title: "Premium Execution",
    type: "experience",
    category: "profile",
    year: "Principle",
    tags: ["Polish", "Motion", "Finishing"],
    match: 98,
    accent: ["#c084fc", "#581c87"],
    links: {},
    copy: {
      recruiter: {
        blurb:
          "Not just a working app — one that feels intentional in layout, interaction, and finish. A better first impression for users, clients, and recruiters.",
        cta: { label: "More about me", href: "#about" },
      },
      developer: {
        blurb:
          "The last 10% — motion timing, spacing rhythm, edge states — is where I spend disproportionate effort, because that's what separates 'done' from 'good'.",
        cta: { label: "More about me", href: "#about" },
      },
      stalker: {
        blurb:
          "I sweat the tiny details most people never consciously notice but absolutely feel.",
        cta: { label: "More about me", href: "#about" },
      },
    },
  },

  // ── Certifications (all earned 2025) ──────────────────────────────────────
  {
    id: "cert-fullstack",
    title: "Fullstack Engineering",
    type: "certification",
    category: "web",
    year: "2025",
    issuer: "ALX Morocco",
    maturity: "ALX Morocco",
    tags: ["Frontend", "Backend", "Software Engineering"],
    match: 96,
    accent: ["#38bdf8", "#0c4a6e"],
    links: {},
    copy: {
      recruiter: {
        blurb:
          "ALX Morocco's intensive fullstack software-engineering program — front-end through back-end, with the delivery discipline employers actually want.",
        cta: { label: "View credential", href: "#" },
      },
      developer: {
        blurb:
          "ALX Morocco's rigorous fullstack track: modern web, APIs, data structures and the engineering practices behind shipping real software.",
        cta: { label: "View credential", href: "#" },
      },
      stalker: {
        blurb:
          "The big one — ALX Morocco's fullstack engineering program. Front, back, and everything in between.",
        cta: { label: "View credential", href: "#" },
      },
    },
  },
  {
    id: "cert-attack",
    title: "MITRE ATT&CK Defender",
    type: "certification",
    category: "cybersecurity",
    year: "2025",
    maturity: "Threat-Informed Defense",
    tags: ["Blue Team", "Detection", "ATT&CK"],
    match: 94,
    accent: ["#f59e0b", "#7c2d12"],
    links: {},
    copy: {
      recruiter: {
        blurb:
          "Threat-informed-defense training mapped to the MITRE ATT&CK framework — the foundation behind my detection-engineering work.",
        cta: { label: "View credential", href: "#" },
      },
      developer: {
        blurb:
          "ATT&CK-aligned detection, adversary emulation and threat-intel mapping — the methodology I lean on in SigmaPack-Builder and attck-tagger.",
        cta: { label: "View credential", href: "#" },
      },
      stalker: {
        blurb:
          "The badge for knowing how attackers actually operate — and how defenders map and catch them.",
        cta: { label: "View credential", href: "#" },
      },
    },
  },
  {
    id: "cert-filesec",
    title: "File Security Associate",
    type: "certification",
    category: "cybersecurity",
    year: "2025",
    issuer: "OPSWAT Academy",
    maturity: "OPSWAT Academy",
    tags: ["File Security", "Threat Prevention", "OPSWAT"],
    match: 92,
    accent: ["#22d3ee", "#0e3a4a"],
    links: {},
    copy: {
      recruiter: {
        blurb:
          "An OPSWAT Academy credential in file-borne threat prevention — content disarm, multiscanning and secure file handling for critical environments.",
        cta: { label: "View credential", href: "#" },
      },
      developer: {
        blurb:
          "OPSWAT file-security training: CDR, multiscanning and deep file inspection — defending the upload and ingest paths most apps forget about.",
        cta: { label: "View credential", href: "#" },
      },
      stalker: {
        blurb:
          "From OPSWAT Academy — basically how to stop sketchy files from wrecking a system.",
        cta: { label: "View credential", href: "#" },
      },
    },
  },
  {
    id: "cert-soc",
    title: "SOC Analyst — Blue Team",
    type: "certification",
    category: "cybersecurity",
    year: "2025",
    maturity: "Blue Team",
    tags: ["SOC", "Incident Response", "Monitoring"],
    match: 93,
    accent: ["#fb923c", "#7c2d12"],
    links: {},
    copy: {
      recruiter: {
        blurb:
          "Hands-on security-operations and incident-response training — detection, triage and response under realistic SOC conditions.",
        cta: { label: "View credential", href: "#" },
      },
      developer: {
        blurb:
          "Defensive monitoring, alert triage and IR workflow practice — the analyst's-eye view that shapes the tooling I build.",
        cta: { label: "View credential", href: "#" },
      },
      stalker: {
        blurb:
          "The 'I can sit in a security operations center and stay calm' badge.",
        cta: { label: "View credential", href: "#" },
      },
    },
  },
  {
    id: "cert-founder",
    title: "Founder Certificate",
    type: "certification",
    category: "profile",
    year: "2025",
    issuer: "ALX Ventures",
    maturity: "ALX Ventures",
    tags: ["Entrepreneurship", "Product", "Venture"],
    match: 91,
    accent: ["#f472b6", "#6d1a43"],
    links: {},
    copy: {
      recruiter: {
        blurb:
          "ALX Ventures' founder program — product thinking, ownership and a build-and-ship mindset I bring to client work, not just the code.",
        cta: { label: "View credential", href: "#" },
      },
      developer: {
        blurb:
          "ALX Ventures' founder track: turning ideas into shippable products — the why behind the what, beyond the engineering.",
        cta: { label: "View credential", href: "#" },
      },
      stalker: {
        blurb:
          "From ALX Ventures — the entrepreneurial side of me. Building things people actually want.",
        cta: { label: "View credential", href: "#" },
      },
    },
  },
  {
    id: "cert-cloud",
    title: "Cloud & DevOps Fundamentals",
    type: "certification",
    category: "ops",
    year: "2025",
    maturity: "DevOps",
    tags: ["Docker", "CI/CD", "Cloud"],
    match: 90,
    accent: ["#a78bfa", "#3b0764"],
    links: {},
    copy: {
      recruiter: {
        blurb:
          "Modern delivery practice — containers, pipelines and cloud deployment — so the work ships reliably and keeps running.",
        cta: { label: "View credential", href: "#" },
      },
      developer: {
        blurb:
          "Docker, CI/CD and cloud fundamentals — the deploy-and-operate half of building software that actually reaches production.",
        cta: { label: "View credential", href: "#" },
      },
      stalker: {
        blurb:
          "The 'I can ship it and keep it running' badge.",
        cta: { label: "View credential", href: "#" },
      },
    },
  },
];

// Fast lookup by id.
export const catalogById: Record<string, CatalogItem> = Object.fromEntries(
  catalog.map((item) => [item.id, item]),
);

export function getItem(id: string): CatalogItem | undefined {
  return catalogById[id];
}

/** The title that headlines the billboard. */
export const billboardId = "about-amineddine";

// ───────────────────────────────────────────────────────────────────────────
// ROW LAYOUT — which items appear in which row, in order. Row *titles* come
// from the active persona; the *contents* are identical across personas.
// ───────────────────────────────────────────────────────────────────────────
export const rows: RowConfig[] = [
  {
    key: "featured",
    itemIds: [
      "moroccan-mirage",
      "weframe-media",
      "the-seven-saints",
      "mahal-films",
      "sigmapack-builder",
      "soar-mini-enricher",
      "attck-tagger",
    ],
  },
  {
    key: "topPicks",
    itemIds: [
      "about-amineddine",
      "moroccan-mirage",
      "soar-mini-enricher",
      "the-seven-saints",
      "skill-security",
      "mahal-films",
      "exp-premium",
    ],
  },
  {
    key: "building",
    itemIds: ["rareguard", "skill-security", "skill-ops"],
  },
  {
    key: "skills",
    itemIds: ["skill-frontend", "skill-backend", "skill-security", "skill-ops"],
  },
  {
    key: "experience",
    itemIds: ["exp-product", "exp-security", "exp-collab", "exp-premium"],
  },
  {
    key: "certifications",
    itemIds: [
      "cert-fullstack",
      "cert-attack",
      "cert-filesec",
      "cert-soc",
      "cert-founder",
      "cert-cloud",
    ],
  },
];

/** "More Like This" — same type or category, excluding the item itself. */
export function relatedTo(item: CatalogItem, limit = 6): CatalogItem[] {
  const scored = catalog
    .filter((other) => other.id !== item.id && other.type !== "about")
    .map((other) => {
      let score = 0;
      if (other.type === item.type) score += 2;
      if (other.category === item.category) score += 1;
      if (other.tags.some((t) => item.tags.includes(t))) score += 1;
      return { other, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);

  const picks = scored.map((entry) => entry.other);
  // top up with any remaining projects if related set is thin
  if (picks.length < limit) {
    for (const other of catalog) {
      if (picks.length >= limit) break;
      if (other.id === item.id || other.type === "about") continue;
      if (!picks.includes(other)) picks.push(other);
    }
  }
  return picks.slice(0, limit);
}
