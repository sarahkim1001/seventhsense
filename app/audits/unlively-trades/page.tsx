"use client";

import PageLayout from "@/components/PageLayout";
import SpectralAudit from "@/components/SpectralAudit";

const auditData = {
  number: "003",
  trace: "persistent",
  coordinate: "jan 2026",
  title: "unlively trades: a map for a mirror",
  subject: "cyborgian" as const,
  sections: {
    lure: "In the corridors of the modern interface, people may find themselves navigating a high-fidelity echo-location of the ego. This is the neurobiological allure of the predictive loop. The brain is a \"prediction machine\" designed to minimize surprise; the algorithm feeds this desire by ensuring every scroll validates the existing boundaries of one's identity. As Byung-Chul Han observes, this creates a landscape scrubbed of the \"violence\" of difference. The front-facing camera serves as a digital Narcissus pool where the \"Second Body\" is constantly polished, providing a dopamine hit that rewards the brain for finding exactly what it expected: itself.",
    impact: "When the phone becomes a mirror, the capacity for active externalization undergoes a radical erosion. In cognitive psychology, \"thinking\" is often the process of interacting with a resistant environment to build a mental map. When a person trades the \"Map\" for a curated reflection, they are essentially outsourcing their internal world-building to a machine. In moments of \"Sacred Awkwardness,\" the impulsive check of the phone is a flight from cognitive friction. This reliance on the algorithm to interpret reality leads to a loss of mental \"know-how,\" leaving the mind static and unable to build the complex internal models needed to navigate the unpredictable, non-digital world.",
    trace: "This trade often operates as a fear-based mechanism, a flight from the messy reality of being a Cyborgian Organism. One might check their phone to avoid the shame of being seen in a raw state, using the device as a protective filter against uncomfortable differences. Gabor Maté suggests that this retreat into a predictable digital loop is a defense against the labor of presence. In this state, the rare and pure gift of Attention—the brain's most valuable resource—is traded for the short-term relief of Validation. The observer is no longer looking at the landscape; they are staring at their own reflection within the static of the grid.",
    resolution: "Reclaiming the \"Seventh Sense\" requires a refusal of the comfortable loop and an intentional act of Somatic Sovereignty. This involves re-training the brain to handle the \"discomfort of the unknown\". One might choose to stay with the \"Other\" even when the encounter is uncurated and raw, reclaiming the interface as a window to look through rather than a shield to hide behind. This is the \"Hard Path\" of observation—choosing the risk of being changed by the world over the safety of being affirmed by a screen. By putting down the Mirror and picking up the Map, a person allows the real world to impact their biological root once again.",
  },
  sources: [
    "Clark, A. The Experience Machine. On the brain as a predictive mechanism that avoids surprise.",
    "Han, B-C. (2017). The Expulsion of the Other. A critique of the digital \"Smooth.\"",
    "Stiegler, B. (2010). For a New Critique of Political Economy. On the loss of human spirit.",
    "Fan, J. E. (2021). Visual communication as a window into cognitive mechanisms. On how \"making\" builds \"thinking.\"",
    "Weil, S. (1952). Gravity and Grace. On the radical power of Attention.",
  ],
};

export default function UnlivelyTradesAuditPage() {
  return (
    <PageLayout title="audit" headerAlignLeft hideHeader>
      <div className="pl-6 md:pl-24 pt-24">
        <SpectralAudit {...auditData} />
      </div>
    </PageLayout>
  );
}
