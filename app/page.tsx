"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import NavLinks from "@/components/NavLinks";

const navigationItems = [
  { 
    number: "01", 
    document: "Document 01 | The Profile", 
    title: "The Profile",
    description: "An inquiry into the foundational mission and the \"Sacred Neutral\" perspective of the laboratory.",
    href: "/about" 
  },
  { 
    number: "02", 
    document: "Document 02 | The Archive", 
    title: "The Archive",
    description: "A longitudinal repository of previous audits, research papers, and technical explorations.",
    href: "/audits" 
  },
  { 
    number: "03", 
    document: "Document 03 | The Lexicon", 
    title: "The Lexicon",
    description: "A semantic map defining the coordinates used to navigate the intersection of biology and technics.",
    href: "/glossary" 
  },
  { 
    number: "04", 
    document: "Document 04 | The Artifacts", 
    title: "The Artifacts",
    description: "Material evidence of inquiry, ranging from digital zines to social robotic interfaces.",
    href: "/art" 
  },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll progress to line height (0% to 100%)
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // Fixed opacity at 50%
  const lineOpacity = 0.5;

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-black">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex items-center justify-between py-6">
            {/* Logo - Left */}
            <Link
              href="/"
              className="text-black"
              style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 700 }}
            >
              Seventh Sense
            </Link>

            {/* Navigation Links - Right */}
            <NavLinks />
          </div>
        </div>
      </nav>

      {/* Somatic Meridian - Vertical Line */}
      <div className="fixed left-1/2 top-0 z-10 h-screen w-[1px] -translate-x-1/2">
        <motion.div
          className="h-full w-full bg-gray-300"
          style={{
            height: lineHeight,
            opacity: lineOpacity,
          }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-20 flex flex-col items-center px-6 md:px-12" style={{ paddingTop: '9rem' }}>
        {/* Tier 1: Coordinate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0,
          }}
          className="mb-2 text-center text-[10px] uppercase tracking-[0.4em] text-black/30"
          style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 700 }}
        >
          37.4419° N, 122.1430° W
        </motion.div>

        {/* Tier 2: Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.15,
          }}
          className="mb-6 text-center text-5xl md:text-7xl leading-[0.95]"
          style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 500 }}
        >
          Human Information Systems 
        </motion.h1>

        {/* Tier 3: Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.3,
          }}
          className="mb-12 text-center text-2xl md:text-3xl tracking-tight leading-tight text-black/25"
          style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
        >
          From biological-technical hybrids to spectral traces
        </motion.h2> 

        {/* Subject, Analysis, Goal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.45,
          }}
          className="mt-8 text-center max-w-3xl mx-auto"
        >
          <div className="space-y-2 text-xs text-black/60 tracking-wider">
            <div style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}>
              <span className="font-medium">The Subject:</span> Seventh Sense Research Laboratory.
            </div>
            <div style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}>
              <span className="font-medium">The Analysis:</span> Performing cognitive audits on the hidden infrastructures of digital presence.
            </div>
            <div style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}>
              <span className="font-medium">The Goal:</span> To re-establish systemic integrity by grounding technical evolution in historical and somatic roots.
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.6,
        }}
        className="relative z-20 mx-auto max-w-4xl px-6 md:px-12 text-center" style={{ marginTop: '7rem', marginBottom: '3rem' }}
      >
        <div
          className="text-2xl md:text-3xl lg:text-4xl italic text-black/40 mb-4"
          style={{ fontFamily: "var(--font-eb-garamond)", fontWeight: 400, lineHeight: "1.6" }}
        >
          "The cyborg is a matter of fiction and lived experience."
        </div>
        <p
          className="text-sm text-black/30"
          style={{ fontFamily: "var(--font-eb-garamond)", fontWeight: 400, lineHeight: "1.6" }}
        >
          — Donna Haraway
        </p>
      </motion.div>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.7,
        }}
        className="relative z-20 mx-auto max-w-4xl px-6 md:px-12 text-center" style={{ marginBottom: '3rem' }}
      >
        <p
          className="text-base md:text-lg text-black/60"
          style={{ fontFamily: "var(--font-eb-garamond)", fontWeight: 400, lineHeight: "1.6" }}
        >
          Seventh Sense operates as a laboratory of attention, investigating the technical environments that house modern human experience. We do not view the Information Age as a departure from history, but as an evolution of the sociological, religious, and biological impulses that have defined humanity for millennia. Through rigorous mixed-media inquiry, we audit the "infrastructure of the self" to understand how our tools reconfigure our psychology and culture.
        </p>
      </motion.div>

      {/* Navigation Index */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.8,
        }}
        className="relative z-20 mx-auto max-w-7xl px-6 md:px-12 pb-24" style={{ marginTop: '4rem' }}
      >
        <div
          className="mb-8 text-xs tracking-widest text-black/50 uppercase"
          style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 100 }}
        >
          Navigation Index
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {navigationItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.9 + index * 0.1,
              }}
            >
              <Link
                href={item.href}
                className="group block border border-black/10 p-4 transition-all hover:opacity-60"
                style={{ borderWidth: "0.5px" }}
              >
                <div
                  className="mb-2 font-mono text-xs uppercase tracking-widest text-black/40"
                  style={{ fontFamily: "monospace" }}
                >
                  {item.document}
                </div>
            <div
              className="mb-2 text-xl tracking-tight"
              style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 500 }}
            >
              {item.title}
            </div>
            <p
              className="text-sm text-black/50"
              style={{ fontFamily: "var(--font-eb-garamond)", fontWeight: 400, lineHeight: "1.6" }}
            >
              {item.description}
            </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Current Investigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 1.3,
        }}
        className="relative z-20 mx-auto max-w-7xl px-6 md:px-12 mt-24 border-t border-black/10 pt-12" style={{ borderTopWidth: "0.5px" }}
      >
        <div
          className="mb-4 text-xs tracking-widest text-black/50 uppercase"
          style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 100 }}
        >
          Current Investigation
        </div>
        <Link
          href="/audits/unlively-trades"
          className="group block transition-all hover:opacity-60"
        >
          <div className="mb-2 flex items-baseline gap-4">
            <div
              className="font-mono text-xs uppercase tracking-widest text-black/40"
              style={{ fontFamily: "monospace" }}
            >
              Audit 003 | A Map for a Mirror
            </div>
            <div
              className="text-xs uppercase tracking-widest text-black/30"
              style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
            >
              Status: Active
            </div>
          </div>
          <p
            className="text-base md:text-lg text-black/60 mt-2"
            style={{ fontFamily: "var(--font-eb-garamond)", fontWeight: 400, lineHeight: "1.6" }}
          >
            A diagnostic exploration into algorithmic reflection and the transmutation of archival memory.
          </p>
        </Link>
      </motion.div>

        {/* Newest Art Piece */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.8,
          }}
          className="mt-24 border-t border-black/10 pt-12" style={{ borderTopWidth: "0.5px" }}
        >
          <div className="flex flex-col items-center">
            {/* Art Frame */}
            <motion.div
              whileHover={{ backdropFilter: "blur(2xl)", backgroundColor: "rgba(0, 0, 0, 0.08)" }}
              className="relative aspect-[4/5] w-full max-w-2xl border border-black/10 bg-black/5 backdrop-blur-xl transition-all"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="font-mono text-[10px] uppercase tracking-widest text-black/20"
                  style={{ fontFamily: "monospace" }}
                >
                  coming soon...
                </div>
              </div>
            </motion.div>

            {/* Caption */}
            <div className="mt-6 text-left max-w-2xl w-full">
              <div
                className="mb-2 text-sm tracking-tight text-black/60"
                style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
              >
                Spectral Subjects
              </div>
              <div
                className="text-xs text-black/40"
                style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
              >
                visual and somatic specimens of technological archaeology
              </div>
            </div>
          </div>
        </motion.div>

      {/* Origin Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 1.0,
        }}
        className="relative z-20 mx-auto max-w-7xl px-6 md:px-12 mt-24 mb-40"
      >
        <div className="text-center">
          <p
            className="text-[10px] uppercase tracking-[0.4em] text-black/20 font-mono"
            style={{ fontFamily: "monospace" }}
          >
            origin: palo alto // current state: searching
          </p>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="relative z-20 border-t border-black/10" style={{ borderTopWidth: "0.5px" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex items-center justify-between py-6">
            <div
              className="text-sm text-black/60"
              style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 100 }}
            >
              somatic note
            </div>
            <div
              className="text-sm text-black/60"
              style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 100 }}
            >
              © 2026
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
