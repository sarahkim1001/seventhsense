"use client";

import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";

export default function GardenPage() {
  return (
    <PageLayout title="garden" headerAlignLeft hideHeader>
      <div className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24">
        <div className="w-full max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-4"
          >
            <p
              className="text-lg md:text-xl"
              style={{
                fontFamily: "var(--font-neue-montreal)",
                fontWeight: 400,
                color: "rgba(0, 0, 0, 0.5)",
                lineHeight: "1.6",
              }}
            >
              We are currently uploading our work to the website. Please check back soon.
            </p>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}
