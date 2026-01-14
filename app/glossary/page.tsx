"use client";

import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import BiologicalLetterNetwork from "@/components/BiologicalLetterNetwork";

const lexiconEntries = [
  {
    number: "01",
    title: "The Third Body",
    content:
      "the manifestation of a hybrid anatomy where biological presence meets autonomous machine agency. if the first body is the physical organism and the second is the digital data-shadow, the third body is the site of social robotics and agentic ai. it is the frontier where we must negotiate the \"sacred awkwardness\" of shared space and decision-making with non-human intelligence.",
  },
  {
    number: "02",
    title: "Wisdom Biodiversity",
    content:
      "the vast, heterogeneous collection of human worldviews, languages, and ancestral intelligences accumulated over millennia. we treat wisdom biodiversity as a vital social infrastructure, resisting the \"cognitive monoculture\" created when global digital systems are designed by a narrow demographic. it is the preservation of diverse ways of being against algorithmic homogenization.",
  },
  {
    number: "03",
    title: "Somatic Sovereignty",
    content:
      "the inherent right to maintain a grounded, regulated nervous system against the interception of high-frequency digital environments. somatic sovereignty is the practice of remaining present in the first body, resisting the physiological stress responses triggered by \"headless\" technological development and techno-authoritarian surveillance.",
  },
  {
    number: "04",
    title: "Cognitive Materiality",
    content:
      "the principle that our material tools—from charcoal sketches to decision-making algorithms—are not just products of thought, but the active architecture of thought. this posits that the design of the interface is the design of the mind; when we change the tools we use to create, we fundamentally re-wire our cognitive maps.",
  },
  {
    number: "05",
    title: "The Great Braiding",
    content:
      "the methodological practice of tethering technical innovation to historical and somatic roots. the great braiding weaves together threads of historical theology, media theory, and cognitive psychology to ensure that every \"forward\" movement in technology is balanced by a reciprocal glance at ancestral truths.",
  },
  {
    number: "06",
    title: "Digital Orphanhood",
    content:
      "the sociological state of being situated in a technological environment that lacks a cultural or historical anchor. digital orphanhood describes the displacement felt when our infrastructures for survival are designed without regard for the intergenerational wisdom and trauma that shape human behavior.",
  },
  {
    number: "07",
    title: "Techno-Theology",
    content:
      "the study of how religious impulses—the search for omniscience, salvation, and transcendence—are re-encoded into contemporary code. this framework analyzes the \"sacramental\" nature of data and the \"eschatological\" narratives (stories of the end-times or transcendence) driving the modern pursuit of artificial general intelligence.",
  },
];

export default function GlossaryPage() {
  return (
    <PageLayout title="glossary" headerAlignLeft hideHeader>
      {/* Biological Letter Network Background */}
      <BiologicalLetterNetwork />

      <div className="-mx-6 md:-mx-12 relative z-10">
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
            foundational lexicons
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
            The Semantic Map
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
            For Keeping in Mind (Mind Keeping).
          </motion.h2>
        </div>

        {/* Lexicon of Inquiries */}
        <div className="space-y-24 md:space-y-32" style={{ marginTop: '2rem' }}>
          {lexiconEntries.map((entry, index) => (
            <motion.div
              key={entry.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1],
                delay: index * 0.15,
              }}
              className="pl-6 md:pl-24"
            >
              <div className="max-w-4xl">
                {/* Entry Number and Title */}
                <div className="mb-6 flex items-baseline gap-4">
                  <div
                    className="text-sm tracking-widest text-black/50"
                    style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 100 }}
                  >
                    {entry.number}
                  </div>
                  <h2
                    className="text-2xl md:text-3xl tracking-tight"
                    style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 500 }}
                  >
                    {entry.title}
                  </h2>
                </div>

                {/* Entry Content */}
                <p
                  className="text-lg md:text-xl leading-relaxed"
                  style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
                >
                  {entry.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
