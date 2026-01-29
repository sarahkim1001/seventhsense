"use client";

import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import Link from "next/link";

const gradients = [
  { id: 1, colors: ["#FFD1DC", "#FFB6C1"] },
  { id: 2, colors: ["#B5EAD7", "#C7CEEA"] },
  { id: 3, colors: ["#FFE5B4", "#FFDAB9"] },
  { id: 4, colors: ["#E0F2F1", "#B2DFDB"] },
  { id: 5, colors: ["#F8C8DC", "#FFB3BA"] },
  { id: 6, colors: ["#D4B5FF", "#E6E6FA"] },
  { id: 7, colors: ["#FFF9C4", "#FFF59D"] },
  { id: 8, colors: ["#B3E5FC", "#81D4FA"] },
  { id: 9, colors: ["#FFCCCB", "#FFB6C6"] },
  { id: 10, colors: ["#C5E1F5", "#B3D9FF"] },
  { id: 11, colors: ["#FFE4E1", "#FFD7D7"] },
  { id: 12, colors: ["#E1BEE7", "#CE93D8"] },
  { id: 13, colors: ["#F8BBD0", "#F48FB1"] },
  { id: 14, colors: ["#B2EBF2", "#80DEEA"] },
  { id: 15, colors: ["#C8E6C9", "#A5D6A7"] },
  { id: 16, colors: ["#FFE0B2", "#FFCC80"] },
];

export default function GardenPage() {
  return (
    <PageLayout title="garden" headerAlignLeft hideHeader>
      <div className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24">
        <div className="w-full max-w-6xl mx-auto">
          {/* 4x4 Grid */}
          <div className="grid grid-cols-4 gap-4 md:gap-6">
            {gradients.map((gradient, index) => (
              <motion.div
                key={gradient.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: index * 0.05,
                }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square cursor-pointer group"
              >
                <Link href={`/garden/room-${gradient.id}`} className="block w-full h-full">
                  <div
                    className="w-full h-full rounded-lg backdrop-blur-[10px] transition-all duration-300 group-hover:shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${gradient.colors[0]} 0%, ${gradient.colors[1]} 100%)`,
                      borderWidth: "0.5px",
                      borderColor: "rgba(255, 255, 255, 0.3)",
                      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
