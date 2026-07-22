"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import IntroSplash from "@/components/netflix/IntroSplash";
import ProfileGate from "@/components/netflix/ProfileGate";
import { usePersona } from "@/context/PersonaContext";
import { playTaDum } from "@/lib/sound";
import type { Persona } from "@/lib/types";

type Phase = "loading" | "splash" | "gate";

// The interactive entry experience (intro splash → profile gate). Split out of
// the route so `page.tsx` can stay a server component that also renders the
// crawlable content layer + structured data alongside this.
export default function HomeExperience() {
  const router = useRouter();
  const { setPersona, markVisited, muted } = usePersona();
  const [phase, setPhase] = useState<Phase>("loading");

  // Decide whether to play the splash. Returning visitors skip straight to the
  // gate. Read localStorage directly to avoid provider/child effect ordering.
  useEffect(() => {
    let visited = false;
    try {
      visited = localStorage.getItem("nf-visited") === "1";
    } catch {
      /* ignore */
    }
    // hydrating UI phase from localStorage (an external system) on mount
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPhase(visited ? "gate" : "splash");
    // warm up the browse routes
    router.prefetch("/browse/recruiter");
    router.prefetch("/browse/developer");
    router.prefetch("/browse/stalker");
  }, [router]);

  const handleSplashDone = () => {
    markVisited();
    setPhase("gate");
  };

  const handlePick = (p: Persona) => {
    setPersona(p);
    markVisited();
    if (!muted) playTaDum();
    router.push(`/browse/${p}`);
  };

  return (
    <main className="min-h-[100dvh] bg-[var(--nf-bg)]">
      <AnimatePresence mode="wait">
        {phase === "splash" && (
          <IntroSplash key="splash" onDone={handleSplashDone} />
        )}

        {phase === "gate" && (
          <motion.div
            key="gate"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.6 } }}
          >
            <ProfileGate onPick={handlePick} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
