"use client";

import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import BiologicalGrowth from "@/components/BiologicalGrowth";

const triptychModules = [
  {
    label: "we are",
    title: "the cyborgian organism",
    content:
      "We embrace the cyborg not as a creature of science fiction, but as the lived reality of the Information Age. Following the thought of Donna Haraway, we see the cyborg as a \"matter of fiction and lived experience\" that fundamentally changes what it means to be human. We are hybrids of biology and technology, existing in a space where the boundaries between the \"natural\" body and the \"artificial\" grid have blurred. By auditing these connections, we do not seek to return to an \"innocent\" or \"pure\" past; instead, we look for a new kind of grounding—one that understands how our tools shape our identities, our politics, and our presence in the world. We are here to map the spectral traces of this hybrid life to understand how we are the way we are.",
  },
  {
    label: "the premise",
    title: "the architecture of belief",
    content:
      "Every culture, from antiquity to the present, has developed belief systems and material tools to navigate the \"strange phenomena of living.\" These are our mental models—the maps we use to survive, connect, and thrive. This site explores how the Information Age—with its screens, data, and agentic AI—is reconfiguring those maps. We treat contemporary technoculture not as a departure from history, but as an evolution of the same religious and sociological impulses that have always driven human society.",
  },
  {
    label: "the mission",
    title: "a laboratory of attention",
    content:
      "Silicon Valley's rapid development often moves forward without a historical or cultural anchor. This site acts as an integrity layer, performing \"audits\" on understudied phenomena within tech culture. By weaving together Cognitive Psychology, History, and Media Theory, we ask what happens to human functioning when our environments are designed by a narrow subset of the population. We are here to pay attention to what remains and what evolves.",
  },
  {
    label: "the methodology",
    title: "tracing the logic of creation",
    content:
      "Our expositions are not just critiques; they are genealogical traces. We look at a modern technical artifact—be it a robot's proprioception or an AI's decision-making tree—and bridge it back to its historical and spiritual roots. We aim for a certain truth: an understanding of how our designs affect our ability to stay grounded, reciprocal, and present in a rapidly shifting world.",
  },
];

const practiceOfAttention = [
  "What remains when everything is quantified?",
  "How do we stay grounded in a world of screens?",
  "What happens to attention when it becomes a commodity?",
  "How do we maintain reciprocity in asymmetric systems?",
  "What does presence mean in an age of constant connection?",
];

export default function AboutPage() {
  return (
    <PageLayout title="about" headerAlignLeft hideHeader>
      <div className="-mx-6 md:-mx-12">
        {/* Custom Hero Section */}
        <div className="relative flex min-h-screen flex-col items-center justify-center px-6 md:px-12 pb-32 pt-24">
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
            about&nbsp;&nbsp;&nbsp;s&nbsp;e&nbsp;v&nbsp;e&nbsp;n&nbsp;t&nbsp;h&nbsp;&nbsp;&nbsp;&nbsp;s&nbsp;e&nbsp;n&nbsp;s&nbsp;e
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
            className="mb-6 text-center text-5xl md:text-7xl lowercase tracking-wide leading-[0.95] relative z-10"
            style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 500 }}
          >
            archaeologies of the <br></br>cyborgian organism 
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
         amidst the age of information
          </motion.h2>
        </div>

        {/* Triptych Grid */}
        <div className="space-y-24 md:space-y-32">
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
                  className="mb-6 text-2xl md:text-3xl lowercase tracking-tight"
                  style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 500 }}
                >
                  {module.title}
                </h2>

                {/* Module Content */}
                <p
                  className="text-lg md:text-xl leading-relaxed"
                  style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
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
            practice of attention
          </div>
          <div className="max-w-4xl space-y-3">
            {practiceOfAttention.map((question, index) => (
              <div
                key={index}
                className="text-sm md:text-base text-black/70"
                style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
              >
                {question}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
