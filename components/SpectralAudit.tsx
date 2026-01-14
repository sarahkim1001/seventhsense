"use client";

import { motion } from "framer-motion";

interface SpectralAuditProps {
  number: string;
  trace: string;
  coordinate: string;
  title: string;
  subject: "cyborgian" | "technical" | "somatic";
  sections: {
    lure: string;
    impact: string;
    trace: string;
    resolution: string;
  };
  sources: string[];
}

export default function SpectralAudit({
  number,
  trace,
  coordinate,
  title,
  subject,
  sections,
  sources,
}: SpectralAuditProps) {
  return (
    <div className="mx-auto max-w-5xl">
      {/* Metadata Header (Tier 1) */}
      <div className="mb-16 flex items-start justify-between border-b border-black/10 pb-4" style={{ borderBottomWidth: "0.5px" }}>
        <div
          className="text-[10px] uppercase tracking-[0.4em] text-black/30"
          style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 700 }}
        >
          audit // {number}
        </div>
        <div className="text-right">
          <div
            className="text-[10px] uppercase tracking-[0.4em] text-black/30"
            style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 700 }}
          >
            trace: {trace}
          </div>
          <div
            className="mt-1 text-[10px] uppercase tracking-[0.4em] text-black/30"
            style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 700 }}
          >
            coordinate: {coordinate}
          </div>
        </div>
      </div>

      {/* Primary Axis (Tier 2) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
        className="mb-24"
      >
        <h1
          className="mb-6 text-5xl md:text-7xl leading-[0.95]"
          style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 500 }}
        >
          {title}
        </h1>
        <div
          className="text-sm uppercase tracking-widest text-black/40 font-mono"
          style={{ fontFamily: "monospace" }}
        >
          subject: {subject}
        </div>
      </motion.div>

      {/* Genealogical Sections */}
      <div className="space-y-24 mb-32">
        {/* The Lure (The Surface) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
        >
          <h2
            className="mb-6 text-xs tracking-[0.4em] text-black/30"
            style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 700 }}
          >
            The Lure (The Surface)
          </h2>
          <p
            className="text-lg md:text-xl"
            style={{ fontFamily: "var(--font-eb-garamond)", fontWeight: 400, lineHeight: "1.6" }}
          >
            {sections.lure}
          </p>
        </motion.section>

        {/* The Impact (The Reconfiguration) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
        >
          <h2
            className="mb-6 text-xs tracking-[0.4em] text-black/30"
            style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 700 }}
          >
            The Impact (The Reconfiguration)
          </h2>
          <p
            className="text-lg md:text-xl"
            style={{ fontFamily: "var(--font-eb-garamond)", fontWeight: 400, lineHeight: "1.6" }}
          >
            {sections.impact}
          </p>
        </motion.section>

        {/* The Trace (The Archaeology) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
        >
          <h2
            className="mb-6 text-xs tracking-[0.4em] text-black/30"
            style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 700 }}
          >
            The Trace (The Archaeology)
          </h2>
          <p
            className="text-lg md:text-xl"
            style={{ fontFamily: "var(--font-eb-garamond)", fontWeight: 400, lineHeight: "1.6" }}
          >
            {sections.trace}
          </p>
        </motion.section>

        {/* The Resolution (The Grounding) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.6 }}
        >
          <h2
            className="mb-6 text-xs tracking-[0.4em] text-black/30"
            style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 700 }}
          >
            The Resolution (The Grounding)
          </h2>
          <p
            className="text-lg md:text-xl"
            style={{ fontFamily: "var(--font-eb-garamond)", fontWeight: 400, lineHeight: "1.6" }}
          >
            {sections.resolution}
          </p>
        </motion.section>
      </div>

      {/* Expository Bibliography */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.7 }}
        className="border-t border-black/10 pt-8" style={{ borderTopWidth: "0.5px" }}
      >
        <div
          className="mb-6 text-xs uppercase tracking-[0.4em] text-black/30"
          style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 700 }}
        >
          source // trace
        </div>
        <ul className="space-y-2 font-mono text-sm text-black/60" style={{ fontFamily: "monospace" }}>
          {sources.map((source, index) => (
            <li key={index}>{source}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
