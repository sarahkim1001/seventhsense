"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavLinks() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "home" },
    { href: "/garden", label: "garden" },
    { href: "/about", label: "about" },
  ];

  return (
    <>
      {/* Navigation removed - using SideNav component instead */}

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-xs tracking-widest text-black/60"
        style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
      >
        {isMenuOpen ? "close" : "menu"}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-[100] md:hidden bg-white" style={{ backgroundColor: '#ffffff' }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col h-full w-full"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-6 border-b border-black/10" style={{ borderBottomWidth: "0.5px" }}>
                <div
                  className="text-black"
                  style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
                >
                  cyborgania
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xs tracking-widest text-black"
                  style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
                >
                  close
                </button>
              </div>

              {/* Centered Navigation Links */}
              <div className="flex-1 flex items-center justify-center">
                <nav className="flex flex-col items-center gap-8">
                  {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-2xl tracking-widest transition-all duration-300 lowercase hover:scale-[1.02] ${
                          isActive
                            ? "text-black underline decoration-black underline-offset-4 translate-x-0.5"
                            : link.href === "/"
                              ? "text-black/60 hover:text-black"
                              : "text-black"
                        }`}
                        style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
