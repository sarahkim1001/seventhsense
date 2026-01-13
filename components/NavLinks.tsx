"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  const links = [
    { href: "/audits", label: "audits" },
    { href: "/art", label: "art" },
    { href: "/glossary", label: "glossary" },
    { href: "/about", label: "about" },
  ];

  return (
    <div className="flex items-center gap-8">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-xs tracking-widest ${
              isActive ? "text-black/40" : "text-black"
            }`}
            style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
