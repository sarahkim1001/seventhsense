"use client";

import PageLayout from "@/components/PageLayout";
import SpectralAudit from "@/components/SpectralAudit";

const auditData = {
  number: "001",
  trace: "persistent",
  coordinate: "jan 2026",
  title: "The Architecture of Effort and the Erosion of Mental Modeling",
  subject: "cyborgian" as const,
  sections: {
    lure: "In the accelerated glass-and-steel corridors of Palo Alto, the ultimate virtue is \"frictionless.\" We are told that the goal of the Information Age is the total removal of resistance. We see it in the push for agentic AI—autonomous systems like OpenAI's \"Operator\" that promise to navigate our digital lives so we don't have to. The marketing narrative is seductive: it is a promise of liberation from the \"sludge\" of logistical existence. But as we surrender our friction, what else are we surrendering?",
    impact: "According to the cognitive research of Judith Ellen Fan, the act of externalizing an idea—whether through a charcoal sketch or a logistical plan—is not merely an output of thought; it is the process of thought itself. Fan's work on visual communication demonstrates that the \"friction\" of iteration is the precise moment when our internal mental models are refined. When we engage with the resistance of a medium, we are learning to see. By automating the \"planning\" phase, agentic design effectively bypasses this vital cognitive loop. As Kathryn Jezer-Morton recently observed in The Cut, our pursuit of convenience is leading us toward a state of \"frictionless\" oblivion. When the machine \"Operator\" bridges the gap between our intent and our result, the human mind remains static. We are left in a state of Digital Orphanhood, inhabiting environments we no longer have the cognitive maps to navigate.",
    trace: "This impulse toward the frictionless is not new; it is a human drive that has existed for centuries. It is the ancient dream of the Oracle—the desire to know the future and avoid the hard work of making choices. Today, we have replaced the \"Divine Will\" with the \"Algorithm\". We often trade our own decision-making for a path that has been pre-decided for us because it feels safer and more efficient. However, when we look at our lives as a blend of biology and technology, we realize that \"smoothness\" can actually be a form of losing ourselves. If a machine solves every problem for us, the unique boundaries of who we are start to fade. As Gabor Maté suggests, running away from the \"messy\" labor of being human is often a way to avoid the vulnerability of being truly present. By choosing the frictionless path, we aren't just gaining time; we are letting go of the very things that make our hybrid lives meaningful.",
    resolution: "In response to this, a new movement is emerging: Friction-Maxxing. This isn't about being \"anti-tech\"; it's about intentionally choosing resistance to keep our minds sharp. Friction-maxxing is the \"Seventh Sense\" in practice—it is the refusal to let life be entirely \"seamless\". It is about reclaiming our role as the primary driver of our tools. It means choosing to work with AI as a partner, rather than letting it replace our own thinking. This preserves our Somatic Sovereignty: the simple, grounded right to feel the weight of our own lives and the value of our own efforts.",
  },
  sources: [
    "Fan, J. E. (2021). Visual communication as a window into cognitive mechanisms. Her research proves that \"making\" is the bedrock of \"thinking.\"",
    "Jezer-Morton, K. (2026). \"In 2026, we are friction-maxxing.\" The Cut. A cultural critique of the \"convenience trap.\"",
    "Hao, K. (2025). The AI Supply Chain. Investigating the physical friction (labor and minerals) that the \"frictionless\" narrative hides.",
    "Kimmerer, R. W. (2013). Braiding Sweetgrass. On the \"gift of attention\" as a form of reciprocal friction.",
    "Stiegler, B. Technics and Time. On the \"proletarianization\" of memory and the loss of human \"know-how\" through technology.",
  ],
};

export default function FrictionMaxxingAuditPage() {
  return (
    <PageLayout title="audit" headerAlignLeft hideHeader>
      <div className="pl-6 md:pl-24 pt-6">
        <SpectralAudit {...auditData} />
      </div>
    </PageLayout>
  );
}
