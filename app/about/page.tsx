"use client";

import PageLayout from "@/components/PageLayout";

export default function AboutPage() {
  return (
    <PageLayout title="about">
      <div className="space-y-16 md:space-y-24">
        {/* About: The Eco-Scape */}
        <section className="space-y-4">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl mb-6"
            style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400, color: "rgba(0, 0, 0, 0.5)" }}
          >
            About: The Eco-Scape
          </h2>
          <p
            className="text-xl md:text-2xl lg:text-3xl"
            style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400, lineHeight: "1.6", color: "rgba(0, 0, 0, 0.5)" }}
          >
            Cyborgania is a cyborganic garden where we build digital spaces that respond with the earth. We've moved past just thinking about tech—now we're focused on creating habitats that are alive and responsive. By tying our code directly into the planet's rhythms, we're making scapes where the digital and the natural world move closer to oneness.
          </p>
        </section>

        {/* Space: The Greenhouse */}
        <section className="space-y-4">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl mb-6"
            style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400, color: "rgba(0, 0, 0, 0.5)" }}
          >
            Space: The Greenhouse
          </h2>
          <p
            className="text-xl md:text-2xl lg:text-3xl"
            style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400, lineHeight: "1.6", color: "rgba(0, 0, 0, 0.5)" }}
          >
            The Garden is a total feedback loop. We use real-world data from Palo Alto (37.4419° N, 122.1430° W)—like how fast the wind is blowing, where the sun is, and even tiny tremors in the ground—to act as the architect. The screen is like a thin membrane that shifts its light and sound to stay in sync with the outside world.
          </p>
        </section>

        {/* Community: Cyborgania */}
        <section className="space-y-4">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl mb-6"
            style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400, color: "rgba(0, 0, 0, 0.5)" }}
          >
            Community: Cyborgania
          </h2>
          <p
            className="text-xl md:text-2xl lg:text-3xl"
            style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400, lineHeight: "1.6", color: "rgba(0, 0, 0, 0.5)" }}
          >
            We see technology as a way to help us feel more connected, not less. We host monthly hangouts and storytelling nights to build a soft, hopeful vibe for the future. It's all about creating spaces where the machine doesn't take over, but actually celebrates the natural rhythms we all share.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
