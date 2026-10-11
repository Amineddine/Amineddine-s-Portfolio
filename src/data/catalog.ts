import type { CatalogItem, Persona, RowConfig } from "@/lib/types";
import { personas } from "./personas";
import { MEDIA } from "./media";

const GITHUB = "https://github.com/Amineddine";
const EMAIL = "mailto:amineeddine006@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/amineddine-znin-z999";

// ───────────────────────────────────────────────────────────────────────────
// THE CATALOG — one typed array, the only source of truth for content.
// Every item carries three `copy` variants (recruiter / developer / curious).
// The UI never branches on persona for *which* items to show — only for *how*
// each item is narrated and (per `personas.ts` rowOrder) the ORDER of rows.
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
    image: "/poster-about-amineddine.webp",
    banner: "/poster-about-amineddine.webp",
    video: MEDIA.aboutCard,
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
      curious: {
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
    image: "/weframe-media.webp",
    companionId: "wfm-management",
    banner: "/weframe-media.webp",
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
      curious: {
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
    image: "/the-seven-saints.webp",
    banner: "/the-seven-saints.webp",
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
      curious: {
        blurb:
          "A dreamy website for a fancy desert camp near Marrakech. The kind of place you'd screenshot — I wanted the site to feel a little like actually being there.",
        cta: { label: "Take a look", href: "https://ornate-marigold-5e0674.netlify.app/" },
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
    image: "/moroccan-mirage.webp",
    banner: "/moroccan-mirage.webp",
    links: { demo: "https://moroccanmirage.com" },
    copy: {
      recruiter: {
        blurb:
          "A full-stack luxury-travel website that positions a high-end Moroccan agency like a glossy travel magazine — cinematic storytelling, a custom trip planner, and a full tour catalog built to turn browsers into booked guests.",
        cta: { label: "Visit live site", href: "https://moroccanmirage.com" },
      },
      developer: {
        blurb:
          "Next.js 15 + React 19 + TypeScript with Framer Motion and Lenis. Scroll-driven storytelling, a sticky parallax Morocco showcase, horizontal city scroll, animated stat counters, a multi-step trip planner, and a dynamically-routed tour/excursion catalog. Dark-sandstone identity, Cormorant Garamond, grain overlays throughout.",
        cta: { label: "Visit live site", href: "https://moroccanmirage.com" },
      },
      curious: {
        blurb:
          "A gorgeous, magazine-style website for a fancy Moroccan travel agency — the kind of dreamy site that makes you want to book a trip immediately. Sandstone tones, buttery scrolling, parallax everywhere, and a build-your-own-trip planner.",
        cta: { label: "Take a look", href: "https://moroccanmirage.com" },
      },
    },
  },

  {
    id: "gogestion",
    title: "GoGestion",
    type: "project",
    category: "web",
    year: "2025",
    featured: true,
    maturity: "Live",
    tags: ["Luxury Hospitality", "Riads", "Marrakech", "Collection"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    role: "Website development & front-end implementation",
    match: 96,
    accent: ["#3f8f6d", "#13352a"],
    image: "/gogestion.webp",
    banner: "/gogestion.webp",
    links: { demo: "https://gogestion-dusky.vercel.app" },
    copy: {
      recruiter: {
        blurb:
          "A signature website for a group operating ten prestige riads across the Marrakech medina — SPA, hammam and rooftop terraces brought together under one collection. It frames the portfolio as a single luxury brand and steers high-intent guests toward booking.",
        cta: { label: "Visit live site", href: "https://gogestion-dusky.vercel.app" },
      },
      developer: {
        blurb:
          "Next.js + React + TypeScript, French-first. Editorial typography over courtyard imagery, a unified visual identity across ten properties, and a calm, gallery-style browsing rhythm that lets each riad breathe without fragmenting the brand.",
        cta: { label: "Visit live site", href: "https://gogestion-dusky.vercel.app" },
      },
      curious: {
        blurb:
          "A site for a group that runs ten gorgeous riads in the old medina of Marrakech, all under one roof — pools, hammams, rooftop terraces. I wanted it to feel like one elegant collection, not ten separate hotels.",
        cta: { label: "Take a look", href: "https://gogestion-dusky.vercel.app" },
      },
    },
  },
  {
    id: "visitare-il-marocco",
    title: "Visitare il Marocco",
    type: "project",
    category: "web",
    year: "2025",
    featured: true,
    maturity: "Live",
    tags: ["Tourism", "Italian Market", "Guided Tours", "Travel"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    role: "Website development & front-end implementation",
    match: 95,
    accent: ["#d4694a", "#3a1c12"],
    image: "/visitare-il-marocco.webp",
    banner: "/visitare-il-marocco.webp",
    links: { demo: "https://visitareilmarocco.vercel.app" },
    copy: {
      recruiter: {
        blurb:
          "An Italian-language website for a tourism agency targeting Italian travellers — 'Il Marocco, raccontato da chi lo ama.' It packages guided tours and bespoke trips across Morocco and routes interested visitors straight to a WhatsApp conversation.",
        cta: { label: "Visit live site", href: "https://visitareilmarocco.vercel.app" },
      },
      developer: {
        blurb:
          "Next.js + React + TypeScript, fully localized in Italian. Warm terracotta-and-cream identity, editorial serif display, and a low-friction inquiry path that drops visitors into WhatsApp instead of a long form — built around how this audience actually converts.",
        cta: { label: "Visit live site", href: "https://visitareilmarocco.vercel.app" },
      },
      curious: {
        blurb:
          "A site entirely in Italian for an agency that brings Italian tourists to Morocco — tours, trips, the whole thing. Warm desert colors, and you can just tap straight through to WhatsApp to plan a trip.",
        cta: { label: "Take a look", href: "https://visitareilmarocco.vercel.app" },
      },
    },
  },
  {
    id: "tawada-desert-camp",
    title: "Tawada Desert Camp",
    type: "project",
    category: "web",
    year: "2026",
    releasedAt: "2026-09",
    featured: true,
    maturity: "Live",
    tags: ["Luxury Hospitality", "Sahara", "Merzouga", "Cinematic"],
    stack: ["React", "Vite"],
    role: "Website design & front-end development",
    match: 98,
    accent: ["#c8913f", "#1a1220"],
    image: "/tawada-desert-camp.webp",
    banner: "/tawada-desert-camp.webp",
    links: { demo: "https://tawadadesertcamp.com" },
    copy: {
      recruiter: {
        blurb:
          "A luxury desert-camp website for Merzouga, at the edge of the Erg Chebbi dunes, built around one promise: 'Where silence becomes luxury.' Cinematic, night-driven and booking-focused, it sells a remote Sahara stay as the destination itself — a different proposition from the easy-reach Agafay escapes near Marrakech.",
        cta: { label: "Visit live site", href: "https://tawadadesertcamp.com" },
      },
      developer: {
        blurb:
          "React + Vite. Editorial, cinematic layout — script display type, a cream-and-gold palette and a narrative that moves from arrival to nightfall through accommodations, experiences, dining and gallery. Book Now stays pinned in the header and WhatsApp floats one tap away.",
        cta: { label: "Visit live site", href: "https://tawadadesertcamp.com" },
      },
      curious: {
        blurb:
          "A website for a luxury camp out in the real Sahara, near Merzouga, right where the big Erg Chebbi dunes begin. It's all about the quiet and the night sky — 'Where silence becomes luxury.' Much farther out (and much quieter) than the Agafay camp I built before.",
        cta: { label: "Take a look", href: "https://tawadadesertcamp.com" },
      },
    },
    episodes: [
      {
        title: "Where Silence Becomes Luxury",
        synopsis: {
          recruiter:
            "Positioning a remote Erg Chebbi camp on silence rather than amenities — a clearly different promise from Agafay's close-to-Marrakech luxury.",
          developer:
            "Copy-led art direction: script display type, generous whitespace and a restrained palette that let the setting carry the page.",
          curious:
            "Working out how to make a website feel quiet. Turns out: lots of space and fewer words.",
        },
      },
      {
        title: "After Dark",
        synopsis: {
          recruiter:
            "The story is night-driven — what happens once the only light is overhead — because that is what guests cross the country for.",
          developer:
            "Sections sequenced from arrival to nightfall, imagery chosen for low light, motion kept slow and sparse so atmosphere never costs load time.",
          curious:
            "The best part of the desert is the night, so the whole site keeps nudging you toward it.",
        },
      },
      {
        title: "The Booking Path",
        synopsis: {
          recruiter:
            "Book Now in the header and WhatsApp one tap away on every page — inquiry paths built for international guests.",
          developer:
            "Persistent booking CTA, floating WhatsApp action, language switch and site search packed into a compact header.",
          curious:
            "Wherever you are on the site, booking is one click away. Or just message them on WhatsApp.",
        },
      },
    ],
  },
  {
    id: "morocco-transit",
    title: "Morocco Transit",
    type: "project",
    category: "web",
    year: "2026",
    releasedAt: "2026-10",
    featured: true,
    maturity: "Live",
    tags: ["Travel", "Transfers", "Trilingual", "Scroll Storytelling"],
    stack: ["Next.js", "React"],
    role: "Website design & front-end development",
    match: 97,
    accent: ["#e8a33d", "#3a2414"],
    image: "/morocco-transit.webp",
    banner: "/morocco-transit.webp",
    links: { demo: "https://moroccotransit.vercel.app" },
    copy: {
      recruiter: {
        blurb:
          "A site for a Marrakech private-transport company: private transfers, day trips and two signature tours, The Sahara Road and The Imperial North. Trilingual EN/FR/ES and built around a WhatsApp quote flow, so travellers go from browsing to a price in a couple of taps.",
        cta: { label: "Visit live site", href: "https://moroccotransit.vercel.app" },
      },
      developer: {
        blurb:
          "Next.js. The hero is a scroll-driven road journey: scroll position drives the route, road signs carry place names in Arabic, Tifinagh and Latin script, and a live km counter ticks up as you travel. Full EN/FR/ES localisation, and a WhatsApp quote flow in place of a booking backend.",
        cta: { label: "Visit live site", href: "https://moroccotransit.vercel.app" },
      },
      curious: {
        blurb:
          "A site for a driver company in Marrakech. As you scroll you basically take a road trip — the kilometres count up and real road signs appear in Arabic and Tifinagh. It's in English, French and Spanish, and getting a quote is just a WhatsApp message.",
        cta: { label: "Take a look", href: "https://moroccotransit.vercel.app" },
      },
    },
    episodes: [
      {
        title: "The Road",
        synopsis: {
          recruiter:
            "The homepage is the product demo: you ride the route before you book it, with a live km counter showing the distance covered.",
          developer:
            "Scroll-linked journey with a progress rail, per-stop captions and a km counter derived from scroll position — the page is the map.",
          curious:
            "You scroll and the road goes by. There's a little counter showing how far you've driven. I'm a bit proud of this one.",
        },
      },
      {
        title: "Three Languages, Three Scripts",
        synopsis: {
          recruiter:
            "EN/FR/ES across the whole site for the markets that actually book transfers, with place names shown the way travellers will see them on the road.",
          developer:
            "Trilingual content plus mixed-script signage — Arabic, Tifinagh and Latin rendered side by side without layout breakage.",
          curious:
            "The signs look like the real blue road signs here: Arabic, Tifinagh and Latin letters all together.",
        },
      },
      {
        title: "The WhatsApp Quote",
        synopsis: {
          recruiter:
            "No long forms to abandon: a quote request goes straight to WhatsApp, matching how this market actually books.",
          developer:
            "Quote flow hands off to WhatsApp from any service page — no booking backend to maintain.",
          curious:
            "Want a price? Tap, and you're chatting with them on WhatsApp.",
        },
      },
    ],
  },
  {
    id: "riad-jabador",
    title: "Riad Jabador",
    type: "project",
    category: "web",
    year: "2026",
    releasedAt: "2026-09",
    featured: true,
    maturity: "Live",
    tags: ["Guest House", "Marrakech Medina", "Direct Booking", "FR/EN"],
    stack: ["Next.js", "React", "Cloudbeds"],
    role: "Website rebuild & front-end development",
    match: 96,
    accent: ["#c26a3d", "#2b160c"],
    image: "/riad-jabador.webp",
    banner: "/riad-jabador.webp",
    links: { demo: "https://riadjabador.com" },
    copy: {
      recruiter: {
        blurb:
          "A full rebuild of a Marrakech medina guest house's old WordPress site, 850 m from Jemaa el-Fna. Bilingual FR/EN and story-led ('the house changes four times a day'), with eight experiences, a gallery, a journal and live Cloudbeds booking so guests reserve directly.",
        cta: { label: "Visit live site", href: "https://riadjabador.com" },
      },
      developer: {
        blurb:
          "Next.js replacement for a legacy WordPress site. FR/EN content, editorial storytelling sections, eight experience pages, gallery and journal, with live Cloudbeds booking wired in so availability and rates come straight from the property's own system.",
        cta: { label: "Visit live site", href: "https://riadjabador.com" },
      },
      curious: {
        blurb:
          "A guest house in the old medina of Marrakech, a short walk from the main square. Their old site was WordPress; I rebuilt it from scratch around the idea that 'the house changes four times a day.' You can book a room right on the site.",
        cta: { label: "Take a look", href: "https://riadjabador.com" },
      },
    },
    episodes: [
      {
        title: "Out of WordPress",
        synopsis: {
          recruiter:
            "Replaced an ageing WordPress site with a faster, easier-to-trust build the owners can be proud to share.",
          developer:
            "Content migrated off WordPress into a typed Next.js build — no plugins to patch, no theme to fight.",
          curious:
            "Their old site was creaky. The new one is fast and actually looks like the house.",
        },
      },
      {
        title: "Four Times a Day",
        synopsis: {
          recruiter:
            "Editorial storytelling — the house at dawn, noon, dusk and night — gives the riad a voice competitors don't have.",
          developer:
            "Story sections, eight experience pages, gallery and journal share one editorial system in FR and EN.",
          curious:
            "The idea: the light in a riad changes all day, so the site tells the house in four moments.",
        },
      },
      {
        title: "Direct Booking",
        synopsis: {
          recruiter:
            "Live Cloudbeds booking on the site steers guests to reserve direct instead of through commission-heavy platforms.",
          developer:
            "Cloudbeds booking engine embedded — availability and rates are always the property system's, never a copy.",
          curious:
            "You can see real availability and book right there, no detour through a booking site.",
        },
      },
    ],
  },
  {
    id: "izil-morocco",
    title: "Izil Morocco",
    type: "project",
    category: "web",
    year: "2026",
    releasedAt: "2026-09",
    featured: true,
    maturity: "Live",
    tags: ["Tour Operator", "Tamazight", "Multi-day Journeys", "Travel"],
    stack: ["Next.js", "React"],
    role: "Website design & front-end development",
    match: 96,
    accent: ["#d08a3a", "#2a1a0c"],
    image: "/izil-morocco.webp",
    banner: "/izil-morocco.webp",
    links: { demo: "https://izil-morocco.vercel.app" },
    copy: {
      recruiter: {
        blurb:
          "A tour-company website that routes journeys from four gateways — Marrakech, Fes, Casablanca and Tangier — across six multi-day journeys, day trips and seven regions. The brand leans into a Tamazight identity, with Tifinagh script throughout.",
        cta: { label: "Visit live site", href: "https://izil-morocco.vercel.app" },
      },
      developer: {
        blurb:
          "Next.js. Content modelled as gateways → journeys → regions, so every trip is reachable from the city a traveller lands in. Tifinagh is used as a typographic layer across the UI rather than a decorative one-off.",
        cta: { label: "Visit live site", href: "https://izil-morocco.vercel.app" },
      },
      curious: {
        blurb:
          "A tour company that plans trips around where you fly in — Marrakech, Fes, Casablanca or Tangier. It's proudly Amazigh, so there's Tifinagh writing all over it, which I love.",
        cta: { label: "Take a look", href: "https://izil-morocco.vercel.app" },
      },
    },
    episodes: [
      {
        title: "Four Gateways",
        synopsis: {
          recruiter:
            "Trips organised by arrival city — Marrakech, Fes, Casablanca, Tangier — so travellers find what fits their flight in seconds.",
          developer:
            "Gateway-first information architecture: each city indexes the journeys and day trips that start there.",
          curious:
            "Pick the city you land in and it shows you what you can do from there. Simple.",
        },
      },
      {
        title: "Six Journeys, Seven Regions",
        synopsis: {
          recruiter:
            "Six multi-day journeys and a set of day trips mapped across seven regions — a full catalogue that still reads clearly.",
          developer:
            "Journeys, day trips and regions cross-linked so every page leads somewhere useful.",
          curious:
            "Mountains, desert, coast — seven regions in total. It's basically a map of the whole country.",
        },
      },
      {
        title: "Written in Tifinagh",
        synopsis: {
          recruiter:
            "A Tamazight identity carried through the whole brand — a real differentiator in a crowded tour market.",
          developer:
            "Tifinagh set as a first-class script in the type system, paired with Latin headings.",
          curious:
            "Tifinagh is the Amazigh alphabet. Seeing it everywhere on the site makes it feel rooted.",
        },
      },
    ],
  },
  {
    id: "palais-andara",
    title: "Palais Andara",
    type: "project",
    category: "web",
    year: "2026",
    releasedAt: "2026-10",
    featured: true,
    maturity: "Live",
    tags: ["Riad & Spa", "Excursions", "Digital Menu", "EN/FR"],
    stack: ["Next.js", "React", "Static HTML"],
    role: "Two web deliverables: excursions site & digital menu",
    match: 95,
    accent: ["#7b5ea7", "#241b31"],
    image: "/palais-andara-excursions.webp",
    banner: "/palais-andara-excursions.webp",
    links: { demo: "https://palais-andara-excursions.vercel.app" },
    deliverables: [
      {
        label: "Excursions site",
        href: "https://palais-andara-excursions.vercel.app",
        image: "/palais-andara-excursions.webp",
        note: "EN/FR brochures (38 pages each), in-browser or PDF, with WhatsApp booking.",
      },
      {
        label: "Digital menu",
        href: "https://andara-menu.vercel.app",
        image: "/palais-andara-menu.webp",
        note: "Bilingual kitchen and drinks menu for guests.",
      },
    ],
    copy: {
      recruiter: {
        blurb:
          "One client, two deliverables for Palais Andara, a riad & spa in the Marrakech medina: an excursions site with 38-page EN and FR brochures readable in the browser or as PDF, plus WhatsApp booking — and a bilingual digital menu, kitchen and drinks, for guests.",
        cta: { label: "Visit excursions site", href: "https://palais-andara-excursions.vercel.app" },
      },
      developer: {
        blurb:
          "Two builds. Excursions: Next.js, EN/FR brochures (38 pages each) readable in-browser with a PDF fallback, highlight pages per excursion and WhatsApp booking. Menu: a lightweight bilingual kitchen-and-drinks menu built for guests' phones.",
        cta: { label: "Visit excursions site", href: "https://palais-andara-excursions.vercel.app" },
      },
      curious: {
        blurb:
          "Two things for a riad & spa in Marrakech: a site where guests browse day trips — with a full brochure you can flip through or download — and book on WhatsApp, and a digital menu for the restaurant and bar.",
        cta: { label: "Take a look", href: "https://palais-andara-excursions.vercel.app" },
      },
    },
    episodes: [
      {
        title: "The 38-Page Brochure",
        synopsis: {
          recruiter:
            "The riad's full excursion brochure, in English and French, readable on any device or downloadable as PDF.",
          developer:
            "Two 38-page brochures served for in-browser reading, with the PDF as a progressive fallback.",
          curious:
            "A whole brochure you can flip through on your phone, in English or French.",
        },
      },
      {
        title: "Book on WhatsApp",
        synopsis: {
          recruiter:
            "Each excursion highlight ends in a WhatsApp booking — the channel guests already use with the riad.",
          developer:
            "Highlight pages per excursion, each with a direct WhatsApp booking action.",
          curious:
            "See a trip you like, tap, and you're chatting with the riad to book it.",
        },
      },
      {
        title: "The Menu at the Table",
        synopsis: {
          recruiter:
            "A second deliverable: a bilingual digital menu that replaces printed cards for the kitchen and bar.",
          developer:
            "Standalone static menu site — fast on any phone, two languages, kitchen and drinks.",
          curious:
            "Scan, and the menu opens on your phone. Food and drinks, in two languages.",
        },
      },
    ],
  },
  {
    id: "mahal-productions",
    title: "Mahal Productions",
    type: "project",
    category: "web",
    year: "2026",
    releasedAt: "2026-08",
    featured: true,
    maturity: "Live",
    tags: ["Film Production", "Production Services", "Morocco"],
    stack: ["React", "Vite"],
    role: "Website design & front-end development",
    match: 96,
    accent: ["#b08d57", "#1c1712"],
    image: "/mahal-productions.webp",
    banner: "/mahal-productions.webp",
    links: { demo: "https://mahalfilms-productions.com" },
    copy: {
      recruiter: {
        blurb:
          "The website for Mahal Productions, a CCM-accredited production-services company established in 1998, based in Marrakech and Casablanca. It lays out what an international crew needs to shoot in Morocco — film permits, ATA carnet customs, crew, locations, casting, logistics and the 30% cash rebate — and turns it into a clear path to an inquiry.",
        cta: { label: "Visit live site", href: "https://mahalfilms-productions.com" },
      },
      developer: {
        blurb:
          "React + Vite. Information architecture built around a producer's checklist — permits, ATA carnet customs, crew, locations, casting, logistics, Morocco's 30% cash rebate — each answerable at a glance. The 'Shot here' section presents the founder's crew credits, framed explicitly as personal credits rather than Mahal titles.",
        cta: { label: "Visit live site", href: "https://mahalfilms-productions.com" },
      },
      curious: {
        blurb:
          "A site for a film-services company that has been helping international productions shoot in Morocco since 1998 — permits, customs paperwork, crews, locations, the lot. The 'Shot here' section lists films the founder personally crewed on (personal credits, not the company's).",
        cta: { label: "Take a look", href: "https://mahalfilms-productions.com" },
      },
    },
    episodes: [
      {
        title: "The Producer's Checklist",
        synopsis: {
          recruiter:
            "Everything a foreign production asks first — permits, ATA carnet customs, crew, locations, casting, logistics — answered up front.",
          developer:
            "Services structured as a checklist a line producer can scan, each item linking to the detail.",
          curious:
            "Shooting a film in another country involves a lot of paperwork. The site lists it all so nobody panics.",
        },
      },
      {
        title: "The 30% Rebate",
        synopsis: {
          recruiter:
            "Morocco's 30% cash rebate surfaced as a headline reason to shoot here — the commercial hook for producers.",
          developer:
            "Rebate content given its own clear section rather than buried in an FAQ.",
          curious:
            "Morocco gives productions 30% back in cash. That's a big deal, so it gets its own spot.",
        },
      },
      {
        title: "Credits, Honestly",
        synopsis: {
          recruiter:
            "'Shot here' credits are presented as the founder's own crew credits — accurate, and more credible for it.",
          developer:
            "Copy and layout make the credit attribution unambiguous: personal crew credits, not company productions.",
          curious:
            "Those famous film titles? The founder worked on them as crew. The site says exactly that, nothing more.",
        },
      },
    ],
  },
  {
    id: "groupe-scolaire-badry",
    title: "Groupe Scolaire Badry",
    type: "project",
    category: "web",
    year: "2026",
    releasedAt: "2026-10",
    featured: true,
    maturity: "Live",
    tags: ["Education", "Trilingual School", "Casablanca", "Enrolment"],
    role: "Website design & front-end development",
    match: 94,
    accent: ["#2f5d8a", "#0f1f33"],
    image: "/groupe-scolaire-badry.webp",
    banner: "/groupe-scolaire-badry.webp",
    links: { demo: "https://groupescolairebadry.ma" },
    copy: {
      recruiter: {
        blurb:
          "A website for Groupe Scolaire Badry, a trilingual private school in Casablanca (Arabic, French, English) running from kindergarten to middle school on a path toward the International Baccalaureate. Editorial and reassuring, with a clear enrolment flow and WhatsApp contact for parents.",
        cta: { label: "Visit live site", href: "https://groupescolairebadry.ma" },
      },
      developer: {
        blurb:
          "An editorial serif design that makes a school site feel calm and credible. Pages are structured around what parents actually ask — levels from kindergarten to middle school, the trilingual programme, the IB pathway — with an enrolment flow and WhatsApp contact as the two conversion paths.",
        cta: { label: "Visit live site", href: "https://groupescolairebadry.ma" },
      },
      curious: {
        blurb:
          "A website for a school in Casablanca where kids learn in Arabic, French and English, from kindergarten through middle school. Parents can start enrolment online or just send a WhatsApp message.",
        cta: { label: "Take a look", href: "https://groupescolairebadry.ma" },
      },
    },
    episodes: [
      {
        title: "Three Languages, One School",
        synopsis: {
          recruiter:
            "The trilingual programme and the International Baccalaureate pathway are the school's edge, so the site leads with them.",
          developer:
            "Content hierarchy built around levels and languages, so parents find their child's stage in one step.",
          curious:
            "Arabic, French and English from day one. The site explains how that works without the jargon.",
        },
      },
      {
        title: "The Enrolment Flow",
        synopsis: {
          recruiter:
            "A clear enrolment path turns interested parents into applications, with WhatsApp as the human fallback.",
          developer:
            "Enrolment steps kept short and explicit; WhatsApp contact offered at every decision point.",
          curious:
            "Signing a kid up is stressful. The site makes the first step easy.",
        },
      },
      {
        title: "Editorial, Not Corporate",
        synopsis: {
          recruiter:
            "An editorial serif look that signals care and seriousness — the tone parents expect from a private school.",
          developer:
            "Serif-led type system with generous rhythm instead of a template look.",
          curious:
            "It reads more like a nice magazine than a school brochure.",
        },
      },
    ],
  },
  {
    id: "wfm-management",
    title: "WFM Management",
    type: "project",
    category: "ops",
    year: "2026",
    releasedAt: "2026-09",
    maturity: "Private build",
    tags: ["Internal Platform", "Production Ops", "Media Studio", "Private"],
    role: "Product design & full-stack development",
    match: 95,
    accent: ["#ff6a2b", "#140d09"],
    image: "/wfm-management.webp",
    banner: "/wfm-management.webp",
    companionId: "weframe-media",
    links: {},
    copy: {
      recruiter: {
        blurb:
          "A private production-operations platform built for WeFrame Media / Studio38: shoots, edits, posts and podcast episodes planned, produced, reviewed and delivered from one desk, in a ClickUp-style workflow. Login-gated by design to keep client work secure.",
        cta: { label: "Request a walkthrough", href: EMAIL },
      },
      developer: {
        blurb:
          "An internal, login-gated web app that models a media studio's pipeline: shoots, edits, social posts and podcast episodes move through plan → produce → review → deliver on a single desk. Private by design — no public surface beyond the sign-in screen.",
        cta: { label: "Ask for a demo", href: EMAIL },
      },
      curious: {
        blurb:
          "An internal tool for the video studio WeFrame Media — like a ClickUp built just for them, where every shoot, edit and podcast episode is tracked from plan to delivery. It's private, so all you get to see is the login screen.",
        cta: { label: "Ask me about it", href: EMAIL },
      },
    },
    episodes: [
      {
        title: "One Desk",
        synopsis: {
          recruiter:
            "Every deliverable a media studio produces — shoots, edits, posts, podcast episodes — lives in one place instead of five tools.",
          developer:
            "A single work model for four content types, so the board, reviews and delivery all speak the same language.",
          curious:
            "Before: spreadsheets and group chats. After: one place where everything lives.",
        },
      },
      {
        title: "Plan → Produce → Review → Deliver",
        synopsis: {
          recruiter:
            "A clear pipeline with review built in, so nothing reaches a client without sign-off.",
          developer:
            "Status-driven workflow with an explicit review stage before delivery.",
          curious:
            "Each job moves through the same four steps, so everyone knows what's next.",
        },
      },
      {
        title: "Private by Design",
        synopsis: {
          recruiter:
            "Login-gated from the first screen — client work and schedules never sit on a public page.",
          developer:
            "Authentication in front of everything; the only public route is sign-in.",
          curious:
            "It's locked behind a login on purpose. Client stuff stays private.",
        },
      },
    ],
  },
  {
    id: "automate",
    title: "Automate",
    type: "project",
    category: "ops",
    year: "2025",
    featured: true,
    maturity: "Concept",
    tags: ["AI Automation", "Agents", "Business Ops", "Morocco"],
    stack: ["Next.js", "React", "TypeScript", "AI Agents", "Workflow Automation"],
    role: "Concept, brand & front-end build",
    match: 94,
    accent: ["#2f7cf6", "#0a1f3d"],
    image: "/automate.webp",
    banner: "/automate.webp",
    links: { demo: "https://automate.ma" },
    copy: {
      recruiter: {
        blurb:
          "My own concept: an AI-automation agency for Moroccan businesses — 'Le travail répétitif. Fait. Par l'IA.' Custom AI agents and workflows that take the repetitive, time-draining tasks off a team's plate, from invoices and reconciliation to social and prospecting.",
        cta: { label: "Visit live site", href: "https://automate.ma" },
      },
      developer: {
        blurb:
          "Next.js + React + TypeScript landing for a self-initiated AI-automation venture. Dark, high-contrast brand with a struck-through headline gag, a marquee of automatable workflows (factures & PDF, réconciliation, automatisation financière, administratif…), and a single 'book a call' funnel.",
        cta: { label: "Visit live site", href: "https://automate.ma" },
      },
      curious: {
        blurb:
          "A concept I'm building myself — an AI agency for Moroccan companies that automates the boring, repetitive work so people get their time back. Custom AI agents for invoices, admin, social, prospecting, you name it.",
        cta: { label: "Take a look", href: "https://automate.ma" },
      },
    },
  },

  {
    id: "mnq-trading-assistant",
    title: "MNQ Trading Assistant",
    type: "project",
    category: "ops",
    year: "2026",
    releasedAt: "2026-09",
    featured: true,
    maturity: "Private build",
    tags: ["AI Automation", "Telegram Bot", "Vision AI", "Risk Rules"],
    stack: ["Python", "python-telegram-bot", "Gemini (vision + text)", "SQLite", "pytest"],
    role: "Design & full build",
    match: 98,
    accent: ["#e5482f", "#1a0b08"],
    image: "/mnq-trading-assistant.webp",
    banner: "/mnq-trading-assistant.webp",
    links: {},
    copy: {
      recruiter: {
        blurb:
          "A private Telegram assistant built for a prop-firm futures trader. It automates the morning prep — key levels, gaps, high-impact news — reads chart screenshots with AI, enforces the challenge's risk rules in code, and closes each day with a review. Bilingual FR/EN, per-user timezones, ~170 automated tests. Analysis only: it never places orders.",
        cta: { label: "Request a walkthrough", href: EMAIL },
      },
      developer: {
        blurb:
          "Python + python-telegram-bot, Gemini for vision and text with automatic model fallback, SQLite for state. A code-enforced risk guard tracks the daily stop, consistency cap and trailing drawdown; scheduled briefs and reviews run on each user's timezone; ~170 tests pin the rules down. Strictly analysis-only — it never places orders.",
        cta: { label: "Ask for a demo", href: EMAIL },
      },
      curious: {
        blurb:
          "A Telegram bot I built for a futures trader. Every morning it sends a game plan, you can send it a chart screenshot and it tells you what it sees, and it warns you before you break your own risk rules. It only gives analysis — it never trades for you.",
        cta: { label: "Ask me about it", href: EMAIL },
      },
    },
    episodes: [
      {
        title: "Morning Brief",
        synopsis: {
          recruiter:
            "Every session starts prepared: key levels, overnight gaps and high-impact news, delivered automatically in the trader's language and timezone.",
          developer:
            "Scheduled jobs per user timezone assemble levels, gaps and the economic calendar into one FR or EN message.",
          curious:
            "Before the market opens, the bot sends a little 'here's what matters today' message.",
        },
      },
      {
        title: "Chart Vision",
        synopsis: {
          recruiter:
            "Send a chart screenshot, get a structured read of it back in seconds — a second pair of eyes on demand.",
          developer:
            "Gemini vision analyses uploaded screenshots; if a model is unavailable the call falls back to the next one instead of failing.",
          curious:
            "You send it a picture of a chart and it describes what it sees. Still feels like magic.",
        },
      },
      {
        title: "The Risk Guard",
        synopsis: {
          recruiter:
            "The prop-firm challenge rules — daily stop, consistency cap, trailing drawdown — are enforced in code, not left to willpower.",
          developer:
            "Rule engine with explicit thresholds and state in SQLite; each rule covered by tests so a refactor can't quietly loosen it.",
          curious:
            "Trading challenges have strict rules. The bot keeps count and speaks up before you cross a line.",
        },
      },
      {
        title: "End-of-Day Review",
        synopsis: {
          recruiter:
            "Each day closes with a review, building the discipline record that challenges reward. Analysis only — it never places an order.",
          developer:
            "End-of-session summary generated from the day's logged state — output is analysis only, never an order.",
          curious:
            "At the end of the day it recaps how things went. It never touches the actual trading.",
        },
      },
    ],
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
    image: "/sigmapack-builder.webp",
    banner: "/sigmapack-builder.webp",
    heroArt: "/spot-sigmapack-builder.webp",
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
      curious: {
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
    image: "/soar-mini-enricher.webp",
    banner: "/soar-mini-enricher.webp",
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
      curious: {
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
    image: "/attck-tagger.webp",
    banner: "/attck-tagger.webp",
    heroArt: "/spot-attck-tagger.webp",
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
      curious: {
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
    image: "/rareguard.webp",
    banner: "/rareguard.webp",
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
      curious: {
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
    image: "/poster-skill-frontend.webp",
    banner: "/poster-skill-frontend.webp",
    links: {},
    copy: {
      recruiter: {
        blurb:
          "Polished, responsive web interfaces that load fast and convert — the front-of-house clients and users judge you on, done with discipline.",
        cta: { label: "See it in the work", href: "#row-web" },
      },
      developer: {
        blurb:
          "React, Next.js, TypeScript, Vite, Tailwind. Component architecture with strong pacing, accessibility-minded markup, and a tight responsive discipline.",
        cta: { label: "See it in the work", href: "#row-web" },
      },
      curious: {
        blurb:
          "The part you can see and click. I make websites that feel smooth and look sharp on any screen.",
        cta: { label: "See it in the work", href: "#row-web" },
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
    image: "/poster-skill-backend.webp",
    banner: "/poster-skill-backend.webp",
    links: {},
    copy: {
      recruiter: {
        blurb:
          "Reliable systems behind the interface — APIs and services that hold up in production and don't surprise you six months later.",
        cta: { label: "See it in the work", href: "#row-web" },
      },
      developer: {
        blurb:
          "Node.js, Python, FastAPI, REST API design, pragmatic architecture. Services built to be readable, testable, and maintainable by whoever inherits them.",
        cta: { label: "See it in the work", href: "#row-web" },
      },
      curious: {
        blurb:
          "The engine-room stuff — the bits that make the buttons actually do something.",
        cta: { label: "See it in the work", href: "#row-web" },
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
    image: "/poster-skill-security.webp",
    banner: "/poster-skill-security.webp",
    links: {},
    copy: {
      recruiter: {
        blurb:
          "A genuine security background — risk spotted early, safer defaults, and the audit-and-harden instincts that protect the business.",
        cta: { label: "See the security work", href: "#row-security" },
      },
      developer: {
        blurb:
          "MITRE ATT&CK, Sigma, alert enrichment, detection logic, SOC workflows. Detection-engineering instincts baked into how I build, not bolted on after.",
        cta: { label: "See the security work", href: "#row-security" },
      },
      curious: {
        blurb:
          "I think like a defender. I build tools that help catch the bad guys — and I keep that mindset even on a normal website.",
        cta: { label: "See the security work", href: "#row-security" },
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
    image: "/poster-skill-ops.webp",
    banner: "/poster-skill-ops.webp",
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
      curious: {
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
    image: "/poster-exp-product.webp",
    banner: "/poster-exp-product.webp",
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
      curious: {
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
    image: "/poster-exp-security.webp",
    banner: "/poster-exp-security.webp",
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
      curious: {
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
    image: "/poster-exp-collab.webp",
    banner: "/poster-exp-collab.webp",
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
      curious: {
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
    image: "/poster-exp-premium.webp",
    banner: "/poster-exp-premium.webp",
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
      curious: {
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
    image: "/poster-cert-fullstack.webp",
    banner: "/poster-cert-fullstack.webp",
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
      curious: {
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
    image: "/poster-cert-attack.webp",
    banner: "/poster-cert-attack.webp",
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
      curious: {
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
    image: "/poster-cert-filesec.webp",
    banner: "/poster-cert-filesec.webp",
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
      curious: {
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
    image: "/poster-cert-soc.webp",
    banner: "/poster-cert-soc.webp",
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
      curious: {
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
    image: "/poster-cert-founder.webp",
    banner: "/poster-cert-founder.webp",
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
      curious: {
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
    image: "/poster-cert-cloud.webp",
    banner: "/poster-cert-cloud.webp",
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
      curious: {
        blurb:
          "The 'I can ship it and keep it running' badge.",
        cta: { label: "View credential", href: "#" },
      },
    },
  },

  // ── Anthropic / Claude certifications (2025) ──────────────────────────────
  {
    id: "cert-ai-fluency-foundations",
    title: "AI Fluency: Framework & Foundations",
    type: "certification",
    category: "profile",
    year: "2025",
    issuer: "Anthropic",
    maturity: "Anthropic",
    tags: ["AI Fluency", "Claude", "Foundations"],
    match: 96,
    accent: ["#d97757", "#3a1d12"],
    image: "/cert-ai-fluency-foundations.webp",
    banner: "/cert-ai-fluency-foundations.webp",
    links: {},
    copy: {
      recruiter: {
        blurb:
          "Anthropic's foundational AI-fluency program — a structured framework for working with AI deliberately, effectively and responsibly. The base layer under everything else I do with Claude.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/6jgcv7svs64o" },
      },
      developer: {
        blurb:
          "Anthropic's AI Fluency framework: the 4D model (Delegation, Description, Discernment, Diligence) for collaborating with AI systems with intent rather than vibes.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/6jgcv7svs64o" },
      },
      curious: {
        blurb:
          "The groundwork course from Anthropic on actually knowing how to work with AI properly — not just poking at a chatbot and hoping.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/6jgcv7svs64o" },
      },
    },
  },
  {
    id: "cert-ai-fluency-students",
    title: "AI Fluency for Students",
    type: "certification",
    category: "profile",
    year: "2025",
    issuer: "Anthropic",
    maturity: "Anthropic",
    tags: ["AI Fluency", "Learning", "Claude"],
    match: 94,
    accent: ["#d9a557", "#3a2a12"],
    image: "/cert-ai-fluency-students.webp",
    banner: "/cert-ai-fluency-students.webp",
    links: {},
    copy: {
      recruiter: {
        blurb:
          "Anthropic's AI-fluency track for learners — using AI to deepen understanding and own your learning, not outsource it. Evidence I think hard about how these tools are actually used.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/kvbop2mfrz8x" },
      },
      developer: {
        blurb:
          "Anthropic's student-focused AI-fluency course: practical patterns for learning with AI honestly — augmenting comprehension instead of shortcutting it.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/kvbop2mfrz8x" },
      },
      curious: {
        blurb:
          "The Anthropic course on using AI to actually learn better — the good-habits version, not the cheat-on-homework version.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/kvbop2mfrz8x" },
      },
    },
  },
  {
    id: "cert-ai-fluency-educators",
    title: "AI Fluency for Educators",
    type: "certification",
    category: "profile",
    year: "2025",
    issuer: "Anthropic",
    maturity: "Anthropic",
    tags: ["AI Fluency", "Teaching", "Claude"],
    match: 93,
    accent: ["#c97fb0", "#3a1d33"],
    image: "/cert-ai-fluency-educators.webp",
    banner: "/cert-ai-fluency-educators.webp",
    links: {},
    copy: {
      recruiter: {
        blurb:
          "Anthropic's AI-fluency program for educators — how to teach with AI thoughtfully and guide others to use it well. I don't just use the tools; I can bring a team up to speed on them.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/moos69piwdsr" },
      },
      developer: {
        blurb:
          "Anthropic's educator track: frameworks for introducing AI responsibly and helping others build genuine fluency — useful any time I'm onboarding people onto AI workflows.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/moos69piwdsr" },
      },
      curious: {
        blurb:
          "The Anthropic course on teaching other people to use AI well. Turns out explaining it is its own skill.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/moos69piwdsr" },
      },
    },
  },
  {
    id: "cert-claude-101",
    title: "Claude 101",
    type: "certification",
    category: "profile",
    year: "2025",
    issuer: "Anthropic",
    maturity: "Anthropic",
    tags: ["Claude", "Fundamentals", "Prompting"],
    match: 95,
    accent: ["#d97757", "#3a1d12"],
    image: "/cert-claude-101.webp",
    banner: "/cert-claude-101.webp",
    links: {},
    copy: {
      recruiter: {
        blurb:
          "Anthropic's Claude 101 — the fundamentals of working effectively with Claude, from prompting to real-world use. The starting point of a deep Claude/Anthropic credential set.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/2i72jcqjmw5z" },
      },
      developer: {
        blurb:
          "Anthropic's Claude 101: core prompting, capabilities and effective-use fundamentals straight from the source — the baseline for the rest of the Claude track.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/2i72jcqjmw5z" },
      },
      curious: {
        blurb:
          "The 'getting started with Claude, properly' course — straight from Anthropic, the people who make it.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/2i72jcqjmw5z" },
      },
    },
  },
  {
    id: "cert-claude-platform-101",
    title: "Claude Platform 101",
    type: "certification",
    category: "ops",
    year: "2025",
    issuer: "Anthropic",
    maturity: "Anthropic",
    tags: ["Claude", "Platform", "Anthropic"],
    match: 94,
    accent: ["#7c8fd0", "#1b2342"],
    image: "/cert-claude-platform-101.webp",
    banner: "/cert-claude-platform-101.webp",
    links: {},
    copy: {
      recruiter: {
        blurb:
          "Anthropic's Claude Platform 101 — how the Claude platform fits together as a product surface, from console to capabilities. Platform-level literacy, not just chat.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/9hc4vvajsxdz" },
      },
      developer: {
        blurb:
          "Anthropic's Claude Platform 101: the console, the product surfaces and how the pieces connect — orientation for building on the platform rather than just using the chat app.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/9hc4vvajsxdz" },
      },
      curious: {
        blurb:
          "The tour of Anthropic's whole Claude platform — what's under the hood beyond just chatting.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/9hc4vvajsxdz" },
      },
    },
  },
  {
    id: "cert-claude-api",
    title: "Building with the Claude API",
    type: "certification",
    category: "web",
    year: "2025",
    issuer: "Anthropic",
    maturity: "Anthropic",
    tags: ["Claude API", "Anthropic SDK", "Tool Use"],
    match: 97,
    accent: ["#d97757", "#3a1d12"],
    image: "/cert-claude-api.webp",
    banner: "/cert-claude-api.webp",
    links: {},
    copy: {
      recruiter: {
        blurb:
          "Anthropic's hands-on course on building real applications with the Claude API — the credential behind shipping AI features, not just talking about them.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/6pq7ncer2n42" },
      },
      developer: {
        blurb:
          "Anthropic's Building with the Claude API: messages, system prompts, streaming, tool use and the patterns for production-grade integrations with the Anthropic SDK.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/6pq7ncer2n42" },
      },
      curious: {
        blurb:
          "The course on actually wiring Claude into apps with code — the developer-y, build-something-real one.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/6pq7ncer2n42" },
      },
    },
  },
  {
    id: "cert-claude-code-101",
    title: "Claude Code 101",
    type: "certification",
    category: "ops",
    year: "2025",
    issuer: "Anthropic",
    maturity: "Anthropic",
    tags: ["Claude Code", "Agentic Coding", "CLI"],
    match: 96,
    accent: ["#34d399", "#0a3a2a"],
    image: "/cert-claude-code-101.webp",
    banner: "/cert-claude-code-101.webp",
    links: {},
    copy: {
      recruiter: {
        blurb:
          "Anthropic's Claude Code 101 — the fundamentals of agentic coding in the terminal. The reason I move fast without losing the plot on real codebases.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/2nq9i57jdbek" },
      },
      developer: {
        blurb:
          "Anthropic's Claude Code 101: agentic coding in the CLI — context, tools, and the workflow for letting an agent work across a real repo safely.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/2nq9i57jdbek" },
      },
      curious: {
        blurb:
          "The intro to Claude Code — the AI that lives in the terminal and actually edits your code. I use it constantly.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/2nq9i57jdbek" },
      },
    },
  },
  {
    id: "cert-claude-code-in-action",
    title: "Claude Code in Action",
    type: "certification",
    category: "ops",
    year: "2025",
    issuer: "Anthropic",
    maturity: "Anthropic",
    tags: ["Claude Code", "Agentic Workflows", "Automation"],
    match: 95,
    accent: ["#34d399", "#0a3a2a"],
    image: "/cert-claude-code-in-action.webp",
    banner: "/cert-claude-code-in-action.webp",
    links: {},
    copy: {
      recruiter: {
        blurb:
          "Anthropic's Claude Code in Action — the advanced, practical side: real agentic workflows on real projects. This portfolio itself was built this way.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/t4pvvevcc8pz" },
      },
      developer: {
        blurb:
          "Anthropic's Claude Code in Action: applied agentic workflows — multi-file changes, automation, hooks and the habits that make an AI agent genuinely productive in a codebase.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/t4pvvevcc8pz" },
      },
      curious: {
        blurb:
          "The hands-on follow-up to Claude Code 101 — putting it to work on actual projects. (Yes, including this site.)",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/t4pvvevcc8pz" },
      },
    },
  },
  {
    id: "cert-claude-cowork",
    title: "Introduction to Claude Cowork",
    type: "certification",
    category: "ops",
    year: "2025",
    issuer: "Anthropic",
    maturity: "Anthropic",
    tags: ["Claude Cowork", "Collaboration", "Agents"],
    match: 92,
    accent: ["#a78bfa", "#2b1d4d"],
    image: "/cert-claude-cowork.webp",
    banner: "/cert-claude-cowork.webp",
    links: {},
    copy: {
      recruiter: {
        blurb:
          "Anthropic's introduction to Claude Cowork — collaborating with Claude as a teammate across tasks and tools. Forward-looking literacy in how AI agents join real work.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/vs5s89awfrvp" },
      },
      developer: {
        blurb:
          "Anthropic's Claude Cowork intro: the collaborative-agent model — delegating, supervising and working alongside Claude across multi-step tasks.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/vs5s89awfrvp" },
      },
      curious: {
        blurb:
          "The course on treating Claude less like a tool and more like a coworker. The future-of-work-y one.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/vs5s89awfrvp" },
      },
    },
  },
  {
    id: "cert-mcp-intro",
    title: "Introduction to Model Context Protocol",
    type: "certification",
    category: "cybersecurity",
    year: "2025",
    issuer: "Anthropic",
    maturity: "Anthropic",
    tags: ["MCP", "Tooling", "Integrations"],
    match: 95,
    accent: ["#22d3ee", "#0a3340"],
    image: "/cert-mcp-intro.webp",
    banner: "/cert-mcp-intro.webp",
    links: {},
    copy: {
      recruiter: {
        blurb:
          "Anthropic's introduction to the Model Context Protocol — the open standard for connecting AI to tools and data. The integration layer behind serious AI engineering.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/cyaz7o7csrur" },
      },
      developer: {
        blurb:
          "Anthropic's MCP intro: servers, clients, tools and resources — the protocol for giving models safe, structured access to external systems.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/cyaz7o7csrur" },
      },
      curious: {
        blurb:
          "The course on MCP — basically the universal adapter that lets AI safely plug into other apps and data.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/cyaz7o7csrur" },
      },
    },
  },
  {
    id: "cert-mcp-advanced",
    title: "Model Context Protocol: Advanced Topics",
    type: "certification",
    category: "cybersecurity",
    year: "2025",
    issuer: "Anthropic",
    maturity: "Anthropic",
    tags: ["MCP", "Advanced", "Architecture"],
    match: 94,
    accent: ["#22d3ee", "#0a3340"],
    image: "/cert-mcp-advanced.webp",
    banner: "/cert-mcp-advanced.webp",
    links: {},
    copy: {
      recruiter: {
        blurb:
          "Anthropic's advanced Model Context Protocol course — the deeper architecture behind robust, secure AI-to-tool integrations. The expert end of the MCP track.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/m6j9xubiujnv" },
      },
      developer: {
        blurb:
          "Anthropic's MCP Advanced Topics: transport, auth, sampling, and the architectural patterns for building production MCP servers that hold up under real use.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/m6j9xubiujnv" },
      },
      curious: {
        blurb:
          "The deep-end MCP course — the proper-engineering, build-it-securely follow-up to the intro.",
        cta: { label: "Verify credential", href: "https://verify.skilljar.com/c/m6j9xubiujnv" },
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

/** Titles that rotate through the billboard after the Cold Open reel. */
export const spotlightIds = [
  "mnq-trading-assistant",
  "sigmapack-builder",
  "attck-tagger",
];

// ── "New Release" ──────────────────────────────────────────────────────────
// Driven purely by `releasedAt` (YYYY-MM): a title is "new" for 90 days after
// the start of its completion month. Nothing is flagged by hand, so the badge
// expires on its own and only ever marks genuinely recent work.
const NEW_WINDOW_DAYS = 90;

export function isNewRelease(item: CatalogItem, now: number = Date.now()): boolean {
  if (!item.releasedAt) return false;
  const released = Date.parse(`${item.releasedAt}-01T00:00:00Z`);
  if (Number.isNaN(released)) return false;
  const age = now - released;
  return age >= 0 && age <= NEW_WINDOW_DAYS * 86_400_000;
}

/** Newest first; items without a release month never appear. */
export function newReleases(now: number = Date.now()): CatalogItem[] {
  return catalog
    .filter((item) => isNewRelease(item, now))
    .sort((a, b) => (b.releasedAt ?? "").localeCompare(a.releasedAt ?? ""));
}

// ───────────────────────────────────────────────────────────────────────────
// ROW LAYOUT — which items appear in which row, in order. Row *titles* and the
// *order of rows* come from the active persona; row *contents* are identical
// across personas.
// ───────────────────────────────────────────────────────────────────────────
export const rows: RowConfig[] = [
  // Computed from `releasedAt` — see newReleases().
  { key: "new", itemIds: newReleases().map((item) => item.id) },
  {
    key: "top10",
    numbered: true,
    itemIds: [
      "moroccan-mirage",
      "mnq-trading-assistant",
      "tawada-desert-camp",
      "morocco-transit",
      "sigmapack-builder",
      "riad-jabador",
      "mahal-productions",
      "izil-morocco",
      "gogestion",
      "attck-tagger",
    ],
  },
  // A curated, mixed spotlight — the best of every pillar in one shelf.
  {
    key: "topPicks",
    itemIds: [
      "about-amineddine",
      "moroccan-mirage",
      "tawada-desert-camp",
      "mnq-trading-assistant",
      "sigmapack-builder",
      "gogestion",
      "automate",
      "attck-tagger",
      "the-seven-saints",
    ],
  },
  // Pillar 1 — Web & Product.
  {
    key: "web",
    itemIds: [
      "moroccan-mirage",
      "tawada-desert-camp",
      "morocco-transit",
      "riad-jabador",
      "mahal-productions",
      "groupe-scolaire-badry",
      "izil-morocco",
      "gogestion",
      "palais-andara",
      "weframe-media",
      "wfm-management",
      "visitare-il-marocco",
      "the-seven-saints",
    ],
  },
  // Collection — Moroccan travel & hospitality.
  {
    key: "morocco",
    itemIds: [
      "tawada-desert-camp",
      "the-seven-saints",
      "riad-jabador",
      "moroccan-mirage",
      "morocco-transit",
      "izil-morocco",
      "gogestion",
      "palais-andara",
      "visitare-il-marocco",
    ],
  },
  // Pillar 2 — Security & Detection Engineering.
  {
    key: "security",
    itemIds: [
      "sigmapack-builder",
      "soar-mini-enricher",
      "attck-tagger",
      "rareguard",
    ],
  },
  // Pillar 3 — AI & Automation (builds first, then the Anthropic credentials).
  {
    key: "ai",
    itemIds: [
      "mnq-trading-assistant",
      "automate",
      "cert-claude-api",
      "cert-claude-code-in-action",
      "cert-claude-code-101",
      "cert-mcp-intro",
      "cert-mcp-advanced",
      "cert-claude-101",
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
      "cert-claude-api",
      "cert-claude-code-in-action",
      "cert-claude-code-101",
      "cert-claude-101",
      "cert-claude-platform-101",
      "cert-mcp-intro",
      "cert-mcp-advanced",
      "cert-ai-fluency-foundations",
      "cert-claude-cowork",
      "cert-ai-fluency-students",
      "cert-ai-fluency-educators",
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
  const companion = item.companionId ? catalogById[item.companionId] : undefined;
  const scored = catalog
    .filter(
      (other) =>
        other.id !== item.id && other.type !== "about" && other.id !== companion?.id,
    )
    .map((other) => {
      let score = 0;
      if (other.type === item.type) score += 2;
      if (other.category === item.category) score += 1;
      if (other.tags.some((t) => item.tags.includes(t))) score += 1;
      return { other, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);

  // the same-client sibling always leads
  const picks = [...(companion ? [companion] : []), ...scored.map((entry) => entry.other)];
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

/** Rows in the order a given persona sees them. */
export function rowsFor(persona: Persona): RowConfig[] {
  const byKey = new Map(rows.map((row) => [row.key, row]));
  return personas[persona].rowOrder
    .map((key) => byKey.get(key))
    .filter((row): row is RowConfig => Boolean(row));
}

/** Projects get their own crawlable title page at /title/[id]. */
export const titlePageItems = catalog.filter((item) => item.type === "project");
