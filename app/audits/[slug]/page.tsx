"use client";

import PageLayout from "@/components/PageLayout";
import SpectralAudit from "@/components/SpectralAudit";

// Example audit data - replace with your actual content
const auditData = {
  number: "001",
  trace: "persistent",
  coordinate: "2026",
  title: "the architecture of effort",
  subject: "cyborgian" as const,
  sections: {
    lure: "The modern technical phenomenon presents itself as seamless efficiency—a promise of frictionless interaction where every gesture is anticipated, every need pre-empted. Marketing narratives frame technology as an extension of natural human capability, erasing the boundaries between intention and automation.",
    impact: "This reconfiguration rewrites the human vessel by externalizing decision-making into algorithmic processes. The mind adapts to interface logic, losing the capacity for sustained attention and deep reflection. The body becomes a data point in a system that measures, optimizes, and intervenes without consent, creating a new form of somatic alienation.",
    trace: "This pattern echoes historical spiritual practices where intermediaries—priests, oracles, shamans—mediated between the human and the divine. The contemporary algorithm functions as a secular oracle, promising omniscience while demanding surrender of agency. We find traces in the monastic tradition of obedience, the industrial logic of efficiency, and the theological framework of predestination.",
    resolution: "To meet the self again, we must practice intentional friction. Create spaces of unmeasured time—moments where no interface tracks, no algorithm predicts. Return to the first body through breath work, grounding exercises, and deliberate disconnection. Reclaim the right to be inefficient, to be present without optimization, to exist as a subject rather than a data point.",
  },
  sources: [
    "Haraway, Donna. \"A Cyborg Manifesto.\" Simians, Cyborgs, and Women, 1991.",
    "Stiegler, Bernard. Technics and Time, 1998.",
    "Hayles, N. Katherine. How We Became Posthuman, 1999.",
    "Weber, Max. The Protestant Ethic and the Spirit of Capitalism, 1905.",
  ],
};

export default function AuditDetailPage() {
  return (
    <PageLayout title="audit" headerAlignLeft hideHeader>
      <div className="pl-6 md:pl-24 pt-24">
        <SpectralAudit {...auditData} />
      </div>
    </PageLayout>
  );
}
