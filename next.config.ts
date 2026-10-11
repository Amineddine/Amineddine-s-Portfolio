import type { NextConfig } from "next";

// Content-Security-Policy tuned for this app's actual resources:
// - Google Fonts stylesheet (fonts.googleapis.com) + font files (fonts.gstatic.com)
// - inline styles (Tailwind + lots of style={{}} usage) and inline JSON-LD
// - Next.js injects inline bootstrap scripts; Turbopack needs eval in dev.
// It is permissive on inline/eval by necessity; the framing, sniffing and
// transport headers below are the hard trust-signal wins.
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "img-src 'self' data: blob:",
  "media-src 'self'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "connect-src 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  // Serve modern formats when next/image is used.
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      // content-hashed media (scripts/version-media.mjs): the name changes with
      // the bytes, so it can be cached forever
      {
        source: "/:file([a-z0-9-]+\\.[0-9a-f]{8}\\.(?:webm|mp4|webp))",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
  // True 301s (Next's `permanent: true` would emit 308).
  async redirects() {
    return [
      { source: "/browse/stalker", destination: "/browse/curious", statusCode: 301 },
      // older CV URLs keep working for links already shared
      { source: "/Amineddine_Znin_CV-FINAL.pdf", destination: "/amineddine-znin-resume.pdf", statusCode: 301 },
      { source: "/amineddine-znin-cv.pdf", destination: "/amineddine-znin-resume.pdf", statusCode: 301 },
      { source: "/og-image.png", destination: "/og-image.jpg", statusCode: 301 },
      { source: "/title/mahal-films", destination: "/title/mahal-productions", statusCode: 301 },
    ];
  },
};

export default nextConfig;
