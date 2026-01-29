"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import LiveIndicator from "@/components/LiveIndicator";
import GraphPaperGrid from "@/components/GraphPaperGrid";

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

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [gradient, setGradient] = useState({ start: '#e8f2ff', end: '#a99db3' });
  const [windSpeed, setWindSpeed] = useState(5);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch('/api/weather');
        const data = await response.json();
        setWeatherData(data);
        if (data.data?.gradient) {
          setGradient(data.data.gradient);
        }
        if (data.data?.windSpeed) {
          setWindSpeed(data.data.windSpeed);
        }
      } catch (error) {
        console.error('Failed to fetch weather data:', error);
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
      {/* Graph Paper Grid Background */}
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

      {/* LIVE Indicator - Top Left */}
      <div className="fixed top-24 left-6 md:top-28 md:left-12 z-50">
        <LiveIndicator />
      </div>

      {/* Main Content Container - Centered */}
      <div className="min-h-screen flex items-center justify-center">

      {/* Status - Fixed Bottom Right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50"
      >
        <div
          className="text-xs"
          style={{ fontFamily: "var(--font-neue-montreal)", fontWeight: 400, color: "rgba(0, 0, 0, 0.5)" }}
        >
          Active Monitoring // 2026 Epoch
        </div>
      </motion.div>

        {/* Main Content - Centered */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="relative z-20 text-center px-6 md:px-12 max-w-4xl mx-auto"
        >
        {/* Title */}
        <h1
          className="mb-8 text-4xl md:text-5xl lg:text-6xl"
          style={{ 
            fontFamily: "var(--font-neue-montreal)", 
            fontWeight: 400,
            lineHeight: "1.1",
            color: "rgba(0, 0, 0, 0.5)",
          }}
        >
          welcome to cyborgania
        </h1>

        {/* Intro */}
        <p
          className="text-xl md:text-2xl lg:text-3xl"
          style={{ 
            fontFamily: "var(--font-neue-montreal)", 
            fontWeight: 400,
            lineHeight: "1.6",
            color: "rgba(0, 0, 0, 0.5)",
          }}
        >
        a space for curious digi earthlings<br></br>everything on this site is generated using live biometric data
        </p>
        </motion.div>
      </div>

      {/* Footer */}
      <footer 
        className="relative border-t z-20 mt-[100vh]"
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
