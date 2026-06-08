import type { Metadata } from "next";
import "./globals.css";
import { PersonaProvider } from "@/context/PersonaContext";
import LenisProvider from "@/components/netflix/LenisProvider";

export const metadata: Metadata = {
  title: "Amineddine Znin — Now Streaming",
  description:
    "The portfolio of Amineddine Znin, a Morocco-based software developer and cybersecurity builder — retold for whoever's watching. Pick a profile: Recruiter, Developer, or Stalker.",
  keywords: [
    "Amineddine Znin",
    "software developer Morocco",
    "freelance web developer",
    "cybersecurity builder",
    "Next.js portfolio",
    "Netflix portfolio",
    "SOC tooling",
  ],
  authors: [{ name: "Amineddine Znin" }],
  openGraph: {
    title: "Amineddine Znin — Now Streaming",
    description:
      "One developer, three narrations. A Netflix-style portfolio of web & security work.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amineddine Znin — Now Streaming",
    description: "Pick a profile. Same work, told in your language.",
  },
  robots: { index: true, follow: true },
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
