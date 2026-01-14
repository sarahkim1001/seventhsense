"use client";

import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import { motion } from "framer-motion";

const auditEntries = [
  {
    id: "001",
    title: "Imaginary Atrophy",
    subject: "The erosion of the internal imaginative faculty.",
    analysis: "Auditing the psychological cost of outsourcing visualization to generative systems.",
    goal: "To diagnose the \"atrophy\" of cognitive muscles in high-automation environments.",
    metric: "Cognitive Erosion",
    timestamp: "Jan 2026",
    status: "Archive",
    href: "/audits/friction-maxxing",
  },
  {
    id: "002",
    title: "The Uncanny Valley of Connectivity",
    subject: "Asymmetric social digital architectures.",
    analysis: "Evaluating the displacement felt between digital hyper-connection and biological isolation.",
    goal: "To map the \"Sacred Awkwardness\" of social disconnection within the artificial grid.",
    metric: "Social Disconnection",
    timestamp: "Jan 2025",
    status: "Archive",
    href: "/audits/synthetic-gaze",
  },
  {
    id: "003",
    title: "Unlively Trades: A Map for a Mirror",
    subject: "Algorithmic reflection and archival memory.",
    analysis: "Examining the transmutation of the self through the lens of digital data-shadows.",
    goal: "To architect a \"mirroring\" system that restores individual sovereignty over personal data.",
    metric: "Cognitive Erosion / Memory Transmutation",
    timestamp: "Jan 2026",
    status: "Active Investigation",
    href: "/audits/unlively-trades",
  },
];

export default function AuditsPage() {
  return (
    <PageLayout title="audits" headerAlignLeft hideHeader>
      <div className="-mx-6 md:-mx-12">
        {/* Custom Hero Section */}
        <div className="flex flex-col items-center px-6 md:px-12 pb-24" style={{ paddingTop: '9rem' }}>
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
            audits
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
            className="mb-6 text-center text-5xl md:text-7xl leading-[0.95]"
            style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 500 }}
          >
           Hybrid Ontologies
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
            className="mb-12 text-center text-2xl md:text-3xl tracking-tight leading-tight text-black/25"
            style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
          >
            A longitudinal trace of technical presence.
          </motion.h2>
        </div>

        {/* Document Series Header */}
        <div className="pl-6 md:pl-24" style={{ marginTop: '2rem' }}>
          <div className="max-w-7xl mb-16">
            <div
              className="mb-4 text-xs tracking-widest text-black/50 uppercase"
              style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 100 }}
            >
              Document Series: Multifaceted Ways of Being
            </div>
            <h2
              className="mb-4 text-2xl md:text-3xl tracking-tight"
              style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 500 }}
            >
              A Longitudinal Trace of Presence and Hybrid Environments
            </h2>
            <p
              className="text-base md:text-lg text-black/60"
              style={{ fontFamily: "var(--font-eb-garamond)", fontWeight: 400, lineHeight: "1.6" }}
            >
              This series functions as a genealogical record of how human presence is reconfigured within technical space. Each entry represents a distinct audit into the "infrastructure of the self."
            </p>
          </div>
        </div>

        {/* Audit List */}
        <div className="pl-6 md:pl-24">
          <div className="max-w-7xl space-y-16">
            {auditEntries.map((audit, index) => (
              <motion.div
                key={audit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 1.2,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: index * 0.15,
                }}
              >
                <Link
                  href={audit.href}
                  className="group block border border-black/10 p-6 transition-all hover:opacity-60"
                  style={{ borderWidth: "0.5px" }}
                >
                  {/* Audit Header */}
                  <div className="mb-6">
                    <div
                      className="mb-2 font-mono text-xs uppercase tracking-widest text-black/40"
                      style={{ fontFamily: "monospace" }}
                    >
                      Audit {audit.id} | {audit.title}
                    </div>
                  </div>

                  {/* Subject, Analysis, Goal */}
                  <div className="mb-6 space-y-2">
                    <div
                      className="text-xs text-black/60 tracking-wider"
                      style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
                    >
                      <span className="font-medium">The Subject:</span> {audit.subject}
                    </div>
                    <div
                      className="text-xs text-black/60 tracking-wider"
                      style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
                    >
                      <span className="font-medium">The Analysis:</span> {audit.analysis}
                    </div>
                    <div
                      className="text-xs text-black/60 tracking-wider"
                      style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
                    >
                      <span className="font-medium">The Goal:</span> {audit.goal}
                    </div>
                  </div>

                  {/* Metadata Row */}
                  <div className="flex items-center gap-8 pt-4 border-t border-black/10" style={{ borderTopWidth: "0.5px" }}>
                    <div>
                      <div
                        className="text-xs uppercase tracking-widest text-black/40 mb-1"
                        style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
                      >
                        Metric:
                      </div>
                      <div
                        className="text-sm text-black/60"
                        style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
                      >
                        {audit.metric}
                      </div>
                    </div>
                    <div>
                      <div
                        className="text-xs uppercase tracking-widest text-black/40 mb-1"
                        style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
                      >
                        Timestamp:
                      </div>
                      <div
                        className="text-sm text-black/60"
                        style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
                      >
                        {audit.timestamp}
                      </div>
                    </div>
                    <div className="ml-auto flex items-center gap-2">
                      <div
                        className="text-sm text-black/60"
                        style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
                      >
                        Status: {audit.status}
                      </div>
                      <span
                        className="text-sm text-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
                      >
                        [→]
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
