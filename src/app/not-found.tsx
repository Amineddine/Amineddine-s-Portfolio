import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* lost-in-the-static backdrop */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.85)), linear-gradient(135deg, #3a0608, #141414 60%)",
        }}
      />
      <div className="art-grain absolute inset-0 -z-10 opacity-30" />

      <p className="nf-logo text-5xl sm:text-6xl">Lost your way?</p>
      <p className="mt-6 max-w-xl text-lg text-white sm:text-2xl">
        Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on
        the home page.
      </p>
      <p className="mt-3 font-mono text-sm text-white/50">
        Error Code <span className="text-white/80">NSES-404</span>
      </p>

      <Link
        href="/"
        className="mt-9 rounded bg-white px-7 py-3 text-base font-semibold text-black transition hover:bg-white/80"
      >
        Netflix Home
      </Link>
    </main>
  );
}
