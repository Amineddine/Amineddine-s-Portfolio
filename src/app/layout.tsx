import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amineddine Znin | Software Developer and Cybersecurity Builder",
  description:
    "Portfolio of Amineddine Znin, a Morocco-based software developer and freelancer building modern web experiences and security-aware systems.",
  keywords: [
    "Amineddine Znin",
    "software developer Morocco",
    "freelance web developer",
    "cybersecurity builder",
    "Next.js developer",
    "secure web applications",
    "SOC tooling",
  ],
  authors: [{ name: "Amineddine Znin" }],
  openGraph: {
    title: "Amineddine Znin | Software Developer and Cybersecurity Builder",
    description:
      "Modern web experiences and security-aware systems by Amineddine Znin, a freelancer based in Morocco.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amineddine Znin | Software Developer and Cybersecurity Builder",
    description:
      "Modern web experiences and security-aware systems by Amineddine Znin.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
        <div className="noise-overlay" />
      </body>
    </html>
  );
}
