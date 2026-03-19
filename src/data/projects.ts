export interface Project {
  id: string;
  title: string;
  category: "web" | "cybersecurity";
  summary: string;
  description: string;
  stack: string[];
  role: string;
  outcomes: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  image: string;
  featured: boolean;
  year: string;
}

export const projects: Project[] = [
  {
    id: "weframe-media",
    title: "WeFrame Media",
    category: "web",
    summary:
      "Creative agency website for a Marrakech-based studio focused on video production, digital storytelling, photography, and high-impact brand content.",
    description:
      "A premium agency presence designed to balance cinematic storytelling, service clarity, and the kind of visual confidence expected from a content-led studio with global reach.",
    stack: ["Next.js", "React"],
    role: "Website development and creative web implementation",
    outcomes: [
      "Translates a premium creative-agency identity into a sharper digital presence",
      "Supports content, campaign, and storytelling positioning without visual clutter",
      "Pairs editorial pacing with a cleaner service discovery flow",
    ],
    liveUrl: "https://www.weframemedia.com/",
    image: "/projects/weframe-media.jpg",
    featured: true,
    year: "2025",
  },
  {
    id: "the-seven-saints",
    title: "The Seven Saints",
    category: "web",
    summary:
      "Luxury desert camp website for an Agafay-based hospitality destination near Marrakech, designed to present the stay experience, atmosphere, and premium positioning with clarity.",
    description:
      "A hospitality-led website shaped to balance immersion and usability, helping a luxury desert camp present its experience, setting, and booking intent with a more refined digital presence.",
    stack: ["React", "TypeScript", "Vite"],
    role: "Website development and front-end implementation",
    outcomes: [
      "Frames the camp experience with a calmer, more immersive browsing rhythm",
      "Supports premium hospitality positioning across atmosphere, stay details, and booking intent",
      "Keeps the presentation elegant, visual, and responsive across devices",
    ],
    liveUrl: "https://ornate-marigold-5e0674.netlify.app/",
    image: "/projects/the-seven-saints.jpg",
    featured: true,
    year: "2025",
  },
  {
    id: "mahal-films",
    title: "Mahal Films",
    category: "web",
    summary:
      "Production services platform for a Morocco-based film production partner, designed to present services, locations, and operational credibility for international and local productions.",
    description:
      "A focused presentation layer for production support in Morocco, covering service framing, trust-building content, and a cleaner path for directors, agencies, and production teams exploring local execution.",
    stack: ["TypeScript", "Vite", "React"],
    role: "Website development and front-end implementation",
    outcomes: [
      "Clarifies production support, logistics, and location-oriented services",
      "Builds trust for international and local production inquiries",
      "Keeps the experience direct, visual, and easy to scan on smaller screens",
    ],
    liveUrl: "https://www.mahalfilms.com/",
    image: "/projects/mahal-films.jpg",
    featured: true,
    year: "2025",
  },
  {
    id: "sigmapack-builder",
    title: "SigmaPack-Builder",
    category: "cybersecurity",
    summary:
      "Convert ATT&CK-tagged detection rules into Sigma-like YAML packs for SOC deployment.",
    description:
      "A practical security build focused on packaging detection logic into deployment-friendly rule sets, with attention to structure, repeatability, and SOC-oriented handoff.",
    stack: ["Python", "YAML", "MITRE ATT&CK", "SOC tooling"],
    role: "Cybersecurity builder and workflow developer",
    outcomes: [
      "Turns tagged detections into cleaner Sigma-style rule packs",
      "Helps standardize rule formatting for downstream SOC use",
      "Supports operational consistency in detection engineering workflows",
    ],
    githubUrl: "https://github.com/Amineddine/SigmaPack-Builder",
    image: "/projects/sigmapack-builder.jpg",
    featured: true,
    year: "2025",
  },
  {
    id: "soar-mini-enricher",
    title: "soar-mini-enricher",
    category: "cybersecurity",
    summary:
      "FastAPI alert enrichment microservice: MITRE ATT&CK mapping + severity scoring + SOC recommendations.",
    description:
      "A microservice for alert enrichment that turns raw events into more useful incident context with mapped techniques, severity guidance, and analyst-facing recommendations.",
    stack: ["FastAPI", "Python", "MITRE ATT&CK", "JSON", "SOC automation"],
    role: "Security tooling developer",
    outcomes: [
      "Adds context and triage guidance to inbound alerts",
      "Connects raw events to ATT&CK-oriented interpretation",
      "Keeps enrichment lightweight enough for SOC workflow integration",
    ],
    githubUrl: "https://github.com/Amineddine/soar-mini-enricher",
    image: "/projects/soar-mini-enricher.jpg",
    featured: true,
    year: "2025",
  },
  {
    id: "attck-tagger",
    title: "attck-tagger",
    category: "cybersecurity",
    summary:
      "Rule-based MITRE ATT&CK enrichment for security logs (JSONL) with explainable matches and confidence scoring.",
    description:
      "A log enrichment utility designed for explainability, helping analysts understand why a given event maps to a technique instead of hiding everything behind opaque scoring.",
    stack: ["Python", "JSONL", "MITRE ATT&CK", "Detection enrichment"],
    role: "Security systems developer",
    outcomes: [
      "Adds explainable ATT&CK context to security-log processing",
      "Uses confidence scoring to support more grounded analyst review",
      "Fits into workflows where visibility matters as much as automation",
    ],
    githubUrl: "https://github.com/Amineddine/attck-tagger",
    image: "/projects/attck-tagger.jpg",
    featured: true,
    year: "2025",
  },
  {
    id: "rareguard",
    title: "rareguard",
    category: "cybersecurity",
    summary:
      "Self-supervised Transformer for rare security log anomalies with conformal p-values and SOC-ready alerts.",
    description:
      "A more research-oriented anomaly-detection build aimed at surfacing rare security log behavior with a stronger statistical framing and cleaner SOC-facing output.",
    stack: ["Python", "Transformers", "Anomaly Detection", "Security Logs", "ML"],
    role: "Security research and applied ML build",
    outcomes: [
      "Explores rare-event detection with a more rigorous signal model",
      "Pairs anomaly scoring with conformal p-values for better interpretability",
      "Frames the output for analyst workflows instead of pure experimentation",
    ],
    githubUrl: "https://github.com/Amineddine/rareguard",
    image: "/projects/rareguard.jpg",
    featured: false,
    year: "2025",
  },
];

export const skillCategories = [
  {
    title: "Frontend Delivery",
    icon: "FE",
    summary: "Web interfaces with stronger pacing, clarity, and responsive discipline.",
    skills: ["React", "Next.js", "TypeScript", "Vite", "Tailwind CSS"],
  },
  {
    title: "Application Engineering",
    icon: "BE",
    summary: "Practical systems work across APIs, services, and production websites.",
    skills: ["Node.js", "Python", "FastAPI", "REST APIs", "Architecture"],
  },
  {
    title: "Security Systems",
    icon: "SE",
    summary: "Tooling for enrichment, detection context, and SOC-oriented workflows.",
    skills: ["MITRE ATT&CK", "Sigma", "Alert Enrichment", "SOC Workflows", "Detection Logic"],
  },
  {
    title: "Research and Operations",
    icon: "OP",
    summary: "Applied experimentation, deployment habits, and workflow-minded implementation.",
    skills: ["Docker", "Linux", "ML for Security", "Observability", "CI/CD"],
  },
];

export const processSteps = [
  {
    phase: "01",
    title: "Frame the problem",
    description:
      "I start by understanding the product, the audience, and the actual operational goal so the work solves the right problem instead of just looking polished.",
  },
  {
    phase: "02",
    title: "Shape the system",
    description:
      "Once the direction is clear, I define the interface rhythm, technical structure, and delivery approach so the build has a stronger internal logic.",
  },
  {
    phase: "03",
    title: "Build with signal",
    description:
      "Implementation stays visible and iterative, with attention to clarity, performance, and the details that make the final product feel more deliberate.",
  },
  {
    phase: "04",
    title: "Polish and harden",
    description:
      "Before handoff, I focus on quality, responsiveness, and security-aware finishing work so the result feels stable, credible, and ready to live.",
  },
];
