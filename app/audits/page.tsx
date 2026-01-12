"use client";

import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import { motion } from "framer-motion";

const auditEntries = [
  {
    id: "001",
    title: "the synthetic gaze",
    category: "biological system",
    date: "jan 2026",
    href: "#",
  },
  {
    id: "002",
    title: "proprioceptive architectures",
    category: "interface",
    date: "dec 2025",
    href: "#",
  },
  {
    id: "003",
    title: "algorithmic ritual",
    category: "interface",
    date: "nov 2025",
    href: "#",
  },
  {
    id: "004",
    title: "data as sacrament",
    category: "biological system",
    date: "oct 2025",
    href: "#",
  },
];

export default function AuditsPage() {
  return (
    <PageLayout title="audits" headerAlignLeft hideHeader>
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
            tracing origin
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
            reflections on reflexes
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
            the evolution of presence across the information age.
          </motion.h2>
        </div>

        {/* Audit List */}
        <div className="pl-6 md:pl-24">
          <div className="max-w-7xl">
            {auditEntries.map((audit, index) => (
              <div key={audit.id}>
                <Link
                  href={audit.href}
                  className="group relative flex w-full items-center gap-4 py-6 transition-all duration-300 hover:translate-x-[8px]"
                >
                  {/* ID (5%) */}
                  <div
                    className="w-[5%] text-[10px] text-black/30"
                    style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 700 }}
                  >
                    {audit.id}
                  </div>

                  {/* Title (40%) */}
                  <div
                    className="w-[40%] text-3xl lowercase tracking-tight transition-all duration-300 group-hover:italic"
                    style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 500 }}
                  >
                    {audit.title}
                  </div>

                  {/* Category (15%) */}
                  <div
                    className="w-[15%] text-[10px] uppercase tracking-widest text-black/50"
                    style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 700 }}
                  >
                    {audit.category}
                  </div>

                  {/* Date (10%) */}
                  <div
                    className="w-[10%] text-xs lowercase text-black/40"
                    style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
                  >
                    {audit.date}
                  </div>

                  {/* Arrow (5%) */}
                  <div className="w-[5%]">
                    <span
                      className="text-sm text-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
                    >
                      →
                    </span>
                  </div>
                </Link>

                {/* Separator Line */}
                {index < auditEntries.length - 1 && (
                  <div className="h-[0.5px] bg-black/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
