"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const navigationItems = [
  { number: "01", title: "The About", href: "/about" },
  { number: "02", title: "The Archive", href: "/audits" },
  { number: "03", title: "The Lexicon", href: "/glossary" },
  { number: "04", title: "The Artifacts", href: "/art" },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform scroll progress to line height (0% to 100%)
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // Transform scroll progress to opacity (0.2 to 0.5)
  const lineOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 0.5]);

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-black">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-[#E5E5E5] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex items-center justify-between py-6">
            {/* Logo - Left */}
            <Link
              href="/"
              className="text-black"
              style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 700, letterSpacing: "0.2em" }}
            >
              s&nbsp;e&nbsp;v&nbsp;e&nbsp;n&nbsp;t&nbsp;h&nbsp;&nbsp;&nbsp;s&nbsp;e&nbsp;n&nbsp;s&nbsp;e
            </Link>

            {/* Navigation Links - Right */}
            <div className="flex items-center gap-8">
              <Link
                href="/audits"
                className="text-xs tracking-widest text-black"
                style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
              >
                audits
              </Link>
              <Link
                href="/art"
                className="text-xs tracking-widest text-black"
                style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
              >
                art
              </Link>
              <Link
                href="/glossary"
                className="text-xs tracking-widest text-black"
                style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
              >
                glossary
              </Link>
              <Link
                href="/about"
                className="text-xs tracking-widest text-black"
                style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
              >
                about
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Somatic Meridian - Vertical Line */}
      <div className="fixed left-1/2 top-0 z-10 h-screen w-[1px] -translate-x-1/2">
        <motion.div
          className="h-full w-full bg-black"
          style={{
            height: lineHeight,
            opacity: lineOpacity,
          }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6 md:px-12">
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
          className="mb-6 text-center text-5xl md:text-7xl lowercase tracking-wide leading-[0.95]"
          style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 500 }}
        >
          human information
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
          className="mb-32 text-center text-2xl md:text-3xl lowercase tracking-tight leading-tight text-black/25"
          style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
        >
          from cyborgs to specters
        </motion.h2> 
      </div>

      {/* Navigation Grid */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {navigationItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.4 + index * 0.1,
              }}
            >
              <Link
                href={item.href}
                className="group block border-b border-black/10 pb-6 transition-all hover:opacity-60"
                style={{ borderBottomWidth: "0.5px" }}
              >
                <div
                  className="mb-2 font-mono text-xs uppercase tracking-widest text-black/40"
                  style={{ fontFamily: "monospace" }}
                >
                  {item.number}
                </div>
                <div
                  className="text-xl lowercase tracking-tight"
                  style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
                >
                  {item.title}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Most Recent Audit */}
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
          <Link
            href="/audits/unlively-trades"
            className="group block transition-all hover:opacity-60"
          >
            <div
              className="mb-2 text-[10px] uppercase tracking-[0.4em] text-black/30"
              style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 700 }}
            >
              newest audit
            </div>
            <div className="mb-2 flex items-baseline gap-4">
              <div
                className="font-mono text-xs uppercase tracking-widest text-black/40"
                style={{ fontFamily: "monospace" }}
              >
                003
              </div>
              <div
                className="text-2xl md:text-3xl lowercase tracking-tight"
                style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
              >
                a map for a mirror
              </div>
            </div>
            <div
              className="text-sm text-black/40"
              style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
            >
              jan 2026
            </div>
          </Link>
        </motion.div>

        {/* Newest Art Piece */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 1.0,
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
                className="mb-2 text-sm lowercase tracking-tight text-black/60"
                style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
              >
                spectral subjects
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
      </div>

      {/* Grounding Block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 1.2,
        }}
        className="relative z-20 mx-auto max-w-7xl px-6 md:px-12 mt-40"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Quote - Left */}
          <div className="text-center md:text-left">
            <div
              className="text-lg md:text-xl italic text-black/30"
              style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 300 }}
            >
              "The cyborg is a matter of fiction and lived experience."
            </div>
          </div>

          {/* Mission - Right */}
          <div className="text-center md:text-left pt-0 md:pt-16">
            <div
              className="text-base md:text-lg leading-relaxed text-black/60"
              style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
            >
              Seventh Sense is a laboratory of attention performing "audits" on the hidden infrastructures of digital presence. We treat the Information Age not as a departure from history, but as an evolution of technological, sociological, and religious impulses that have driven humanity for millennia.
            </div>
          </div>
        </div>

        {/* Origin Label */}
        <div className="mt-48 mb-40 text-center">
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
