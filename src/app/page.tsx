"use client";

import { useState } from "react";
import CommandPalette from "@/components/CommandPalette";
import GridBackground from "@/components/GridBackground";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import SectionDivider from "@/components/SectionDivider";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Loader onComplete={() => setIsLoading(false)} />

      {!isLoading ? (
        <div className="page-shell">
          <GridBackground />
          <Navbar />
          <CommandPalette />

          <main className="relative z-10">
            <Hero />
            <SectionDivider label="Field notes" />
            <About />
            <SectionDivider label="Selected work" />
            <Projects />
            <SectionDivider label="Practice layers" />
            <Skills />
            <Experience />
            <SectionDivider label="Delivery protocol" />
            <Process />
            <Contact />
          </main>

          <Footer />
        </div>
      ) : null}
    </>
  );
}
