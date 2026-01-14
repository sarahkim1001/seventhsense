import Link from "next/link";
import { ReactNode } from "react";
import NavLinks from "./NavLinks";
import GraphPaperGrid from "./GraphPaperGrid";

interface PageLayoutProps {
  title: string;
  heroTitle?: string;
  headerAlignLeft?: boolean;
  hideHeader?: boolean;
  children: ReactNode;
}

export default function PageLayout({ title, heroTitle, headerAlignLeft = false, hideHeader = false, children }: PageLayoutProps) {
  const displayTitle = heroTitle || title;
  return (
    <div className="min-h-screen bg-white text-black relative">
      {/* Graph Paper Grid Background - Global */}
      <GraphPaperGrid />
      
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex items-center justify-between py-6">
            {/* Logo - Left */}
            <Link
              href="/"
              className="text-black"
              style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 700 }}
            >
              Seventh Sense
            </Link>

            {/* Navigation Links - Right */}
            <NavLinks />
          </div>
        </div>
      </nav>

      {/* Page Header */}
      {!hideHeader && (
        <header className={`mx-auto max-w-7xl pt-6 pb-24 ${headerAlignLeft ? "pl-6 md:pl-24" : "px-6 md:px-12"}`}>
          <h1
            className="text-6xl md:text-7xl lg:text-8xl"
            style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 500 }}
          >
            {displayTitle}
          </h1>
        </header>
      )}

      {/* Body Content */}
      <main className="mx-auto max-w-7xl px-6 md:px-12 pb-80">
        {children}
      </main>

      {/* Footer - Technical Appendix */}
      <footer className="border-t border-black/10" style={{ borderTopWidth: "0.5px", backgroundColor: "#F9F8F6" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-24 md:py-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {/* Column 1: The Identity */}
            <div className="space-y-4">
              <div
                className="text-2xl md:text-3xl"
                style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 700 }}
              >
                Seventh Sense
              </div>
              <p
                className="text-sm text-black/60"
                style={{ fontFamily: "var(--font-eb-garamond)", fontWeight: 400, lineHeight: "1.6" }}
              >
                A research-led design laboratory auditing the biological-technical hybrid.
              </p>
            </div>

            {/* Column 2: Navigation Index */}
            <div className="space-y-3">
              <div
                className="text-xs uppercase tracking-widest text-black/40 mb-4"
                style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
              >
                Navigation Index
              </div>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/audits"
                  className="text-xs uppercase tracking-widest text-black/60 hover:text-black transition-colors"
                  style={{ fontFamily: "monospace" }}
                >
                  Audits
                </Link>
                <Link
                  href="/art"
                  className="text-xs uppercase tracking-widest text-black/60 hover:text-black transition-colors"
                  style={{ fontFamily: "monospace" }}
                >
                  Art
                </Link>
                <Link
                  href="/glossary"
                  className="text-xs uppercase tracking-widest text-black/60 hover:text-black transition-colors"
                  style={{ fontFamily: "monospace" }}
                >
                  Glossary
                </Link>
                <Link
                  href="/about"
                  className="text-xs uppercase tracking-widest text-black/60 hover:text-black transition-colors"
                  style={{ fontFamily: "monospace" }}
                >
                  About
                </Link>
              </nav>
            </div>

            {/* Column 3: Technical Metadata */}
            <div className="space-y-3">
              <div
                className="text-xs uppercase tracking-widest text-black/40 mb-4"
                style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
              >
                Technical Metadata
              </div>
              <div className="space-y-2">
                <div
                  className="text-xs text-black/60 font-mono"
                  style={{ fontFamily: "monospace" }}
                >
                  37.4419° N, 122.1430° W
                </div>
                <div
                  className="text-xs text-black/60"
                  style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
                >
                  Current Status: Active Monitoring: 2026 Epoch.
                </div>
              </div>
            </div>

            {/* Column 4: The Somatic Anchor */}
            <div className="space-y-3">
              <div
                className="text-xs uppercase tracking-widest text-black/40 mb-4"
                style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400 }}
              >
                The Somatic Anchor
              </div>
              <p
                className="text-sm text-black/60"
                style={{ fontFamily: "var(--font-eb-garamond)", fontWeight: 400, lineHeight: "1.6" }}
              >
                The vessel is not separate from the grid; the architecture of the interface is the architecture of the mind.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
