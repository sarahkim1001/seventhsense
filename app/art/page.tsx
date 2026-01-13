"use client";

import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";

export default function ArtPage() {
  return (
    <PageLayout title="art" headerAlignLeft hideHeader>
      <div className="-mx-6 md:-mx-12 relative z-20">
        {/* Custom Hero Section */}
        <div className="flex min-h-screen flex-col items-center justify-center px-6 md:px-12 pb-24 pt-24">
          {/* Tier 1: Label */}
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
            transbehavioral artifacts
          </motion.div>

          {/* Tier 2: Primary Header */}
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
            thresholds of presence
          </motion.h1>

          {/* Tier 3: Secondary Header */}
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
            intrapersonal spaces for extrapersonal experiences.
          </motion.h2>
        </div>

        {/* Art content will go here */}
        <div className="pl-6 md:pl-24">
          <div className="font-sans" style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}>
            {/* Art content will go here */}
          </div>
        </div>
      </div>

      {/* Film Overlay */}
      <div className="fixed inset-0 z-30 pointer-events-none">
        <div className="w-full h-full bg-gray-200/20 backdrop-blur-[3px]" />
      </div>

      {/* Coming Soon Label - Above Film */}
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40 pointer-events-none">
        <p
          className="text-[10px] uppercase tracking-widest text-black/60 font-mono"
          style={{ fontFamily: "monospace" }}
        >
          coming soon...
        </p>
      </div>
    </PageLayout>
  );
}
