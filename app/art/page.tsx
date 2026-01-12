"use client";

import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";

export default function ArtPage() {
  return (
    <PageLayout title="art" headerAlignLeft hideHeader>
      <div className="-mx-6 md:-mx-12">
        {/* Custom Hero Section */}
        <div className="pl-6 md:pl-24 pb-24 pt-24">
          {/* Tier 1: Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0,
            }}
            className="mb-2 text-[10px] uppercase tracking-[0.4em] text-black/25"
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
            className="mb-40 text-[4.5rem] md:text-[6.75rem] lowercase tracking-tighter leading-[0.85]"
            style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 700 }}
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
            className="mb-32 text-2xl md:text-3xl lowercase tracking-tight leading-tight text-black/25"
            style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
          >
            intrapersonal spaces for the extrapersonal experience.
          </motion.h2>
        </div>

        {/* Art content will go here */}
        <div className="pl-6 md:pl-24">
          <div className="font-sans" style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}>
            {/* Art content will go here */}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
