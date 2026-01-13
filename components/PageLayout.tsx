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
      <nav className="sticky top-0 z-50 border-b border-[#E5E5E5] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex items-center justify-between py-6">
            {/* Logo - Left */}
            <Link
              href="/"
              className="text-black"
              style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 700, letterSpacing: "0.2em" }}
            >
              s&nbsp;e&nbsp;v&nbsp;e&nbsp;n&nbsp;t&nbsp;h&nbsp;&nbsp;&nbsp;s&nbsp;e&nbsp;n&nbsp;s&nbsp;e
            </Link>

            {/* Navigation Links - Right */}
            <NavLinks />
          </div>
        </div>
      </nav>

      {/* Page Header */}
      {!hideHeader && (
        <header className={`mx-auto max-w-7xl py-24 ${headerAlignLeft ? "pl-6 md:pl-24" : "px-6 md:px-12"}`}>
          <h1
            className="text-6xl md:text-7xl lg:text-8xl lowercase"
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

      {/* Footer */}
      <footer className="border-t border-black/10" style={{ borderTopWidth: "0.5px" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex items-center justify-between py-6">
            <div
              className="text-sm text-black/60"
              style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 100 }}
            >
              somatic note
            </div>
            <div
              className="text-sm text-black/60"
              style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 100 }}
            >
              © 2026
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
