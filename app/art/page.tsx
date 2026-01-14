"use client";

import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";

export default function ArtPage() {
  return (
    <PageLayout title="art" headerAlignLeft hideHeader>
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Greyed Out Background Overlay */}
        <div className="fixed inset-0 z-10 bg-gray-200/40" />

        {/* Page Under Construction Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="relative z-20 text-center"
        >
          <h1
            className="text-6xl md:text-8xl lg:text-9xl text-black/40"
            style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
          >
            Page Under Construction
          </h1>
        </motion.div>
      </div>
    </PageLayout>
  );
}
