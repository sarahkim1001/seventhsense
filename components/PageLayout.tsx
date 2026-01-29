"use client";

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import GraphPaperGrid from "./GraphPaperGrid";

interface PageLayoutProps {
  title: string;
  heroTitle?: string;
  headerAlignLeft?: boolean;
  hideHeader?: boolean;
  children: ReactNode;
}

interface WeatherData {
  success: boolean;
  fallback: boolean;
  data: {
    sunPhase: string;
    gradient: { start: string; end: string };
    windSpeed: number;
    cloudCoverage: number;
    planetPulse: number;
  };
}

export default function PageLayout({ title, heroTitle, headerAlignLeft = false, hideHeader = false, children }: PageLayoutProps) {
  const displayTitle = heroTitle || title;
  const [gradient, setGradient] = useState({ start: '#e8f2ff', end: '#a99db3' });
  const [windSpeed, setWindSpeed] = useState(5);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch('/api/weather');
        const data: WeatherData = await response.json();
        if (data.data?.gradient) {
          setGradient(data.data.gradient);
        }
        if (data.data?.windSpeed) {
          setWindSpeed(data.data.windSpeed);
        }
      } catch (error) {
        console.error('Failed to fetch weather data:', error);
        // Fallback to default gradient
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Calculate animation duration based on wind speed
  const animationDuration = Math.max(10, Math.min(30, 20 - windSpeed * 2));

  return (
    <div 
      className="min-h-screen bg-white text-black relative"
      style={{
        background: `linear-gradient(180deg, ${gradient.start} 0%, ${gradient.end} 100%)`,
        transition: `background ${animationDuration}s ease-in-out`,
      }}
    >
      {/* Graph Paper Grid Background - Global */}
      <div className="absolute inset-0 z-0">
        <GraphPaperGrid />
      </div>
      
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 md:py-8">
        {/* Logo - Left */}
        <Link
          href="/"
          className="transition-opacity hover:opacity-70 text-xl md:text-2xl lg:text-3xl"
          style={{ 
            fontFamily: "var(--font-neue-montreal)", 
            fontWeight: 400,
            color: "rgba(0, 0, 0, 0.5)",
            textShadow: "0 2px 8px rgba(255, 255, 255, 0.3)",
          }}
        >
          cyborgania
        </Link>

        {/* Navigation - Center */}
        <nav className="flex items-center gap-8 md:gap-12 absolute left-1/2 transform -translate-x-1/2">
          <Link
            href="/garden"
            className="transition-opacity hover:opacity-70 text-xl md:text-2xl lg:text-3xl"
            style={{ 
              fontFamily: "var(--font-neue-montreal)", 
              fontWeight: 400,
              color: "rgba(0, 0, 0, 0.5)",
              textShadow: "0 2px 8px rgba(255, 255, 255, 0.3)",
            }}
          >
            garden
          </Link>
          <Link
            href="/about"
            className="transition-opacity hover:opacity-70 text-xl md:text-2xl lg:text-3xl"
            style={{ 
              fontFamily: "var(--font-neue-montreal)", 
              fontWeight: 400,
              color: "rgba(0, 0, 0, 0.5)",
              textShadow: "0 2px 8px rgba(255, 255, 255, 0.3)",
            }}
          >
            about
          </Link>
        </nav>
      </header>

      {/* Page Header */}
      {!hideHeader && (
        <header className={`mx-auto max-w-7xl pt-48 md:pt-56 pb-24 ${headerAlignLeft ? "pl-6 md:pl-24" : "px-6 md:px-12"}`}>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400, color: "rgba(0, 0, 0, 0.5)" }}
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
      <footer 
        className="border-t"
        style={{ 
          borderTopWidth: "0.5px",
          borderTopColor: "rgba(255, 255, 255, 0.5)",
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          boxShadow: "0 -1px 20px rgba(0, 0, 0, 0.05)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-24 md:py-40">
          <div className="space-y-4">
            <div
              className="text-3xl md:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400, color: "rgba(0, 0, 0, 0.5)" }}
            >
              cyborgania
            </div>
            <p
              className="text-base md:text-lg"
              style={{ fontFamily: "var(--font-eb-garamond)", fontWeight: 400, lineHeight: "1.6", color: "rgba(0, 0, 0, 0.5)" }}
            >
              An artist-led design research laboratory enmeshing the biological with the digital.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
