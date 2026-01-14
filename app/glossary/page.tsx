"use client";

import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import BiologicalLetterNetwork from "@/components/BiologicalLetterNetwork";

const lexiconEntries = [
  {
    number: "01",
    title: "The Third Body",
    subject: "Hybrid anatomy.",
    analysis: "The intersection of biological presence and autonomous machine agency.",
    goal: "To establish protocols for shared space with non-human intelligence.",
    content:
      "If the first body is the physical organism and the second is the digital data-shadow, the Third Body is the site of social robotics and agentic AI. It represents the frontier where human biology must negotiate presence and decision-making with non-human systems.",
  },
  {
    number: "02",
    title: "Wisdom Biodiversity",
    subject: "Heterogeneous worldviews and ancestral intelligences.",
    analysis: "Resisting the cognitive monoculture inherent in centralized digital design.",
    goal: "The preservation of diverse ways of being against algorithmic homogenization.",
    content:
      "Wisdom Biodiversity is treated as vital social infrastructure. It archives the vast collection of human languages and perspectives, protecting them from the narrowing effects of global technical systems designed by a narrow demographic.",
  },
  {
    number: "03",
    title: "Somatic Sovereignty",
    subject: "The regulated nervous system.",
    analysis: "Defending the biological vessel against the interception of high-frequency digital environments.",
    goal: "To maintain physiological presence within the primary body.",
    content:
      "Somatic Sovereignty is the inherent right to maintain a grounded internal state. It is the practice of resisting the stress responses triggered by \"headless\" technological development and technical surveillance.",
  },
  {
    number: "04",
    title: "Cognitive Materiality",
    subject: "Technical tools as cognitive architecture.",
    analysis: "Auditing how the design of the interface re-wires human cognitive maps.",
    goal: "To acknowledge that the design of the tool is the design of the mind.",
    content:
      "Cognitive Materiality posits that tools—from charcoal to algorithms—are not just products of thought, but active components of the psyche. When we architect a new interface, we are fundamentally re-ordering the way the brain perceives and creates.",
  },
  {
    number: "05",
    title: "The Great Braiding",
    subject: "The tethering of innovation to historical and somatic roots.",
    analysis: "Integrating media theory, theology, and psychology into technical inquiry.",
    goal: "To balance technological movement with reciprocal ancestral truth.",
    content:
      "The Great Braiding is a methodological practice. It ensures that every advancement in technical capability is anchored by a reciprocal investigation into the historical and biological foundations of the human experience.",
  },
  {
    number: "06",
    title: "Digital Orphanhood",
    subject: "Displacement within anchorless technical environments.",
    analysis: "Evaluating the loss of intergenerational wisdom in modern digital infrastructure.",
    goal: "To diagnose the sociological state of cultural disconnection.",
    content:
      "Digital Orphanhood describes the state of being situated in systems that lack a cultural or historical anchor. It is the result of survival infrastructures designed without regard for the deep-time wisdom that stabilizes human behavior.",
  },
  {
    number: "07",
    title: "Techno-Theology",
    subject: "The encoding of religious impulses into contemporary code.",
    analysis: "Analyzing narratives of salvation and transcendence within technical development.",
    goal: "To audit the spiritual frameworks driving the pursuit of AGI.",
    content:
      "Techno-Theology treats data as a sacramental force. It examines how the human search for omniscience and transcendence is redirected into the pursuit of Artificial General Intelligence and digital immortality.",
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
            
          </motion.h2>
        </div>

        {/* Document Header */}
        <div className="pl-6 md:pl-24" style={{ marginTop: '2rem' }}>
          <div className="max-w-4xl mb-16">
            <div
              className="mb-4 text-xs tracking-widest text-black/50 uppercase"
              style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 100 }}
            >
              Document 01: Core Lexicons
            </div>
            <p
              className="text-base md:text-lg text-black/60"
              style={{ fontFamily: "var(--font-eb-garamond)", fontWeight: 400, lineHeight: "1.6" }}
            >
              Overview: This catalog defines the technical and cognitive coordinates used to audit the intersection of biological systems and digital environments.
            </p>
          </div>
        </div>

        {/* Lexicon Entries */}
        <div className="space-y-24 md:space-y-32">
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

                {/* Subject, Analysis, Goal */}
                <div className="mb-6 space-y-2">
                  <div
                    className="text-xs text-black/60 tracking-wider"
                    style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
                  >
                    <span className="font-medium">Subject:</span> {entry.subject}
                  </div>
                  <div
                    className="text-xs text-black/60 tracking-wider"
                    style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
                  >
                    <span className="font-medium">Analysis:</span> {entry.analysis}
                  </div>
                  <div
                    className="text-xs text-black/60 tracking-wider"
                    style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
                  >
                    <span className="font-medium">Goal:</span> {entry.goal}
                  </div>
                </div>

                {/* Entry Content */}
                <p
                  className="text-lg md:text-xl"
                  style={{ fontFamily: "var(--font-eb-garamond)", fontWeight: 400, lineHeight: "1.6" }}
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
