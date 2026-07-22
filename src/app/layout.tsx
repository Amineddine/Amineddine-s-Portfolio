import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PersonaProvider } from "@/context/PersonaContext";
import LenisProvider from "@/components/netflix/LenisProvider";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Amineddine Znin — Now Streaming",
  description:
    "The portfolio of Amineddine Znin, a Morocco-based software developer and cybersecurity builder — retold for whoever's watching. Pick a profile: Recruiter, Developer, or Curious.",
  keywords: [
    "Amineddine Znin",
    "software developer Morocco",
    "freelance web developer Morocco",
    "cybersecurity engineer Morocco",
    "detection engineering",
    "MITRE ATT&CK",
    "Sigma rules",
    "AI automation developer",
    "Next.js developer Marrakech",
    "SOC tooling",
  ],
  authors: [{ name: "Amineddine Znin", url: SITE_URL }],
  creator: "Amineddine Znin",
  publisher: "Amineddine Znin",
  category: "technology",
  applicationName: "Amineddine Znin — Portfolio",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: "Amineddine Znin — Now Streaming",
    description:
      "One developer, three narrations. A Netflix-style portfolio of web & security work.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amineddine Znin — Software Developer · Security Builder · Now Streaming",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amineddine Znin — Now Streaming",
    description: "Pick a profile. Same work, told in your language.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  appleWebApp: { title: "Amineddine", capable: true, statusBarStyle: "black-translucent" },
  manifest: "/favicons/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon.ico" },
    ],
    apple: "/favicons/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#141414",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <PersonaProvider>
          <LenisProvider>{children}</LenisProvider>
        </PersonaProvider>
      </body>
    </html>
  );
}
