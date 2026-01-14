"use client";

import PageLayout from "@/components/PageLayout";
import SpectralAudit from "@/components/SpectralAudit";

const auditData = {
  number: "002",
  trace: "persistent",
  coordinate: "jan 2025",
  title: "The Uncanny Valley of Social Presence",
  subject: "cyborgian" as const,
  sections: {
    lure: "We are entering the era of the \"Humanized Interface.\" In the high-frequency laboratories of Palo Alto, engineers are obsessed with \"Social Presence\"—the technical ability to make a user feel they are in the company of a sentient being. From headset displays that project digital eyes to robotic \"companions\" that mirror our movements, the promise is one of total emotional convenience. We are sold a version of intimacy that is \"always on,\" non-judgmental, and perfectly optimized to avoid the messy, unpredictable resistance of a physical encounter. We are being invited into a world where we can be \"connected\" without ever having to be truly vulnerable.",
    impact: "To understand why we both crave and fear the gaze, we must look at the cognitive mechanics of human recognition. In Cognitive Psychology, eye contact is identified as a high-bandwidth, bi-directional energy exchange—a \"Social Sketch\" that constantly updates our mental models of others. The Craving: When we lock eyes, our brains release Oxytocin, the hormone of bonding. It is a biological signal that we have been \"witnessed.\" The Fear: However, research into the Amygdala shows that prolonged eye contact also triggers a state of \"Mutual Arousal.\" It is a physiological threat response; to look someone in the eye is to be \"exposed\" in your rawest state. As Judith Ellen Fan's work suggests that making is a window into our mental models, the gaze is the most intimate form of making—it is the creation of a shared reality. In our \"toxic culture,\" as Dr. Gabor Maté argues, we have become so habituated to isolation that the biological \"arousal\" of a real gaze feels like a violation. We turn to the machine because its gaze is hollow; it offers the chemical \"hit\" of being seen without the amygdala \"risk\" of being known.",
    trace: "This tension is a re-encoding of ancient Techno-Theology. Historically, the \"All-Seeing Gaze\" was a divine attribute—a force that could both bless and judge. To be under the \"Eye of God\" meant you were never truly alone, but you were also never truly hidden. Today, we have replaced the Divine Gaze with the Camera Lens. Through the lens of Techno-Authoritarianism, \"being seen\" has transitioned from a spiritual grace to a form of surveillance. We fear the human gaze because we have been conditioned to see every \"eye\" as a data-collection point rather than a window to a shared reality.",
    resolution: "The current development of social robotics attempts to \"solve\" connection by forcing machines to stare at us. But this is a violation of Somatic Sovereignty. It provides the biological trigger of being watched (Amygdala) without the reciprocal reward of being understood (Oxytocin). To move forward, we must champion the Architecture of Resistance. We must lean into the \"sacred awkwardness\" of the human gaze—the very friction that agentic design seeks to erase. Real connection cannot be \"engineered\"; it requires the presence of two First Bodies willing to endure the discomfort of mutual exposure. We do not need interfaces that are more \"human-like\"; we need humans who are more willing to be human.",
  },
  sources: [
    "Mori, M. (1970). The Uncanny Valley. On the somatic \"death-response\" triggered by simulated humanity.",
    "Turkle, S. (2011). Alone Together. A critical look at our preference for \"simulated\" companionship over the friction of real presence.",
    "Fan, J. E. (2021). Visual communication as a window into cognitive mechanisms. Framing the gaze as an iterative cognitive tool.",
    "Maté, G. (2022). The Myth of Normal. On how societal trauma makes true vulnerability feel like a threat.",
    "Newberg, A. Principles of Neurotheology. Examining how the brain processes \"Divine Presence\" through visual and social cues.",
  ],
};

export default function SyntheticGazeAuditPage() {
  return (
    <PageLayout title="audit" headerAlignLeft hideHeader>
      <div className="pl-6 md:pl-24 pt-6">
        <SpectralAudit {...auditData} />
      </div>
    </PageLayout>
  );
}
