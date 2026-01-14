"use client";

import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import BiologicalGrowth from "@/components/BiologicalGrowth";

const triptychModules = [
  {
    label: "we are",
    title: "Archaeologies of the Biological-Technical Hybrid",
    subject: "A longitudinal inquiry into the biological-technical hybrid.",
    analysis: "The Analysis: Auditing how digital tools reshape our physical senses and daily presence..",
    goal: "To re-establish systemic integrity by surfacing the spectral traces of our digitized existence.",
    content:
      "We acknowledge the hybrid state not as a speculative fiction, but as a current material reality. Following the lineage of Stiegler and Haraway, we recognize that the \"natural\" body and the \"artificial\" grid have merged into a singular cognitive architecture. By auditing these connections, we bypass the nostalgia for a \"pure\" past. Instead, we architect a new grounding, investigating how our technical tools dictate the boundaries of identity, governance, and somatic presence.",
  },
  {
    label: "the premise",
    title: "Architectures of Belief",
    subject: "Cognitive maps and material systems.",
    analysis: "Evaluating the evolution of mental models and sociological impulses.",
    goal: "To map the reconfiguration of human belief systems within the digital architecture.",
    content:
      "Human culture has consistently utilized belief systems as navigational interfaces for the \"phenomena of living.\" We view contemporary technoculture—defined by high-frequency screens and agentic AI—not as a historical rupture, but as a site of rapid evolution. This inquiry audits how our current technical environment re-architects the maps we use to survive and connect.",
  },
  {
    label: "the mission",
    title: "A Laboratory of Attention",
    subject: "The infrastructure of the self within the Palo Alto ecosystem.",
    analysis: "Auditing the psychological cost of interface frictionlessness.",
    goal: "To serve as a diagnostic integrity layer for understudied technical phenomena.",
    content:
      "The acceleration of Silicon Valley often lacks a historical anchor, prioritizing speed over systemic health. This site functions as a diagnostic laboratory, applying the rigors of Cognitive Psychology and Media Theory to the digital world. We audit the impact on human functioning when our technical environments are architected by a narrow demographic, focusing on what remains of the human vessel when the environment is in constant flux.",
  },
  {
    label: "the methodology",
    title: "Tracing the Logic of Technical Creation",
    subject: "Modern technical artifacts and genealogical traces.",
    analysis: "Bridging contemporary proprioception and decision-making to ancestral roots.",
    goal: "To restore individual sovereignty and reciprocity in a quantified world.",
    content:
      "Our inquiries are framed as mixed-media inquiries rather than static critiques. We treat a robot's proprioception or an algorithmic decision-tree as a site for archaeological excavation, tracing these designs back to their spiritual and historical foundations. This rigorous research method seeks to understand how specific architectures affect the body's ability to remain cognitively resonant and present.",
  },
];

const practiceOfAttention = [
  "The Somatic Residual: What remains of the human vessel when the self is fully quantified?",
  "Environmental Grounding: How is somatic presence maintained within a high-density technical environment?",
  "The Commodity of Focus: How is the human cognitive faculty altered when attention is treated as a systemic resource?",
  "Relational Reciprocity: How is reciprocity architected within asymmetric digital systems?",
  "Presence vs. Connectivity: How is biological presence redefined within a state of perpetual technical interface?",
];

export default function AboutPage() {
  return (
    <PageLayout title="about" headerAlignLeft hideHeader>
      <div className="-mx-6 md:-mx-12">
        {/* Custom Hero Section */}
        <div className="relative flex flex-col items-center px-6 md:px-12 pb-32" style={{ paddingTop: '9rem' }}>
          {/* Biological Growth Background */}
          <BiologicalGrowth />
          {/* Tier 1: Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0,
            }}
            className="mb-2 text-center text-[10px] uppercase tracking-[0.4em] text-black/30 relative z-10"
            style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 700 }}
          >
            about seventh sense
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
            className="mb-6 text-center text-5xl md:text-7xl leading-[0.95] relative z-10"
            style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 500 }}
          >
            Archaeologies of the <br></br>Cyborgian Organism 
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

        {/* Triptych Grid */}
        <div className="space-y-24 md:space-y-32" style={{ marginTop: '2rem' }}>
          {triptychModules.map((module, index) => (
            <motion.div
              key={module.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1],
                delay: index * 0.2,
              }}
              className="pl-6 md:pl-24"
            >
              <div className="max-w-4xl">
                {/* Metadata Label */}
                <div
                  className="mb-4 text-xs tracking-widest text-black/50 uppercase"
                  style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 100 }}
                >
                  {module.label}
                </div>

                {/* Module Title */}
                <h2
                  className="mb-6 text-2xl md:text-3xl tracking-tight"
                  style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 500 }}
                >
                  {module.title}
                </h2>

                {/* Subject, Analysis, Goal */}
                <div className="mb-6 space-y-2">
                <div
                  className="text-xs text-black/60 tracking-wider"
                  style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
                >
                  <span className="font-medium">Subject:</span> {module.subject}
                </div>
                <div
                  className="text-xs text-black/60 tracking-wider"
                  style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
                >
                  <span className="font-medium">Analysis:</span> {module.analysis}
                </div>
                <div
                  className="text-xs text-black/60 tracking-wider"
                  style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
                >
                  <span className="font-medium">Goal:</span> {module.goal}
                </div>
                </div>

                {/* Module Content */}
                <p
                  className="text-lg md:text-xl"
                  style={{ fontFamily: "var(--font-eb-garamond)", fontWeight: 400, lineHeight: "1.6" }}
                >
                  {module.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Practice of Attention Footer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.6,
          }}
          className="mt-32 pt-16 border-t border-[#E5E5E5] pl-6 md:pl-24"
        >
          <div
            className="mb-6 text-xs tracking-widest text-black/50 uppercase"
            style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 100 }}
          >
            auditing the practice of attention
          </div>
          <div className="max-w-4xl space-y-3">
            {practiceOfAttention.map((question, index) => (
              <p
                key={index}
                className="text-sm md:text-base text-black/70"
                style={{ fontFamily: "var(--font-eb-garamond)", fontWeight: 400, lineHeight: "1.6" }}
              >
                {question}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
