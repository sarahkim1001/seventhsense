"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "HOME" },
  { href: "/garden", label: "GARDEN" },
  { href: "/about", label: "ABOUT" },
];

export default function SideNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isMobile && isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isMobile, isOpen]);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsOpen(false);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  // Calculate menu width - double width with more whitespace
  const longestLink = Math.max(...links.map(link => link.label.length));
  const menuWidth = `${(longestLink * 1.2 + 8) * 2}rem`; // Double width menu with generous padding

  return (
    <>
      {/* Trigger Area - Hamburger Icon */}
      <div
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className="flex flex-col items-start gap-1 cursor-pointer group"
      >
        {/* Two larger lines */}
        <div className="flex flex-col gap-1.5">
          <div
            className="h-[2px] bg-black/60 transition-all duration-300 group-hover:bg-black"
            style={{ width: "32px" }}
          />
          <div
            className="h-[2px] bg-black/60 transition-all duration-300 group-hover:bg-black"
            style={{ width: "32px" }}
          />
        </div>
      </div>

      {/* Side Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for mobile */}
            {isMobile && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="fixed inset-0 bg-black/10 z-40 md:hidden"
                onClick={() => setIsOpen(false)}
              />
            )}

            {/* Side Menu */}
            <motion.div
              ref={menuRef}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: menuWidth, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                duration: 0.8,
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="fixed left-0 top-0 h-screen z-50 overflow-hidden"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(30px) saturate(180%)",
                WebkitBackdropFilter: "blur(30px) saturate(180%)",
                borderRightWidth: "0.5px",
                borderRightColor: "rgba(255, 255, 255, 0.6)",
                boxShadow: "4px 0 32px rgba(0, 0, 0, 0.15)",
              }}
            >
              <nav className="h-full flex flex-col px-12 py-12" style={{ paddingTop: "8rem" }}>
                <div className="space-y-12">
                  {links.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.15,
                          duration: 0.6,
                          ease: "easeOut",
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => {
                            if (isMobile) {
                              setIsOpen(false);
                            }
                          }}
                          className={`block text-lg md:text-xl uppercase tracking-[0.2em] transition-all duration-300 ${
                            isActive
                              ? "text-black/80"
                              : "text-black/50 hover:text-black/80"
                          }`}
                          style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
