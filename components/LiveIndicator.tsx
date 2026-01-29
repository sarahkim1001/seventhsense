"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WeatherData {
  success: boolean;
  fallback: boolean;
  data: {
    sunPhase: string;
    gradient: { start: string; end: string };
    windSpeed: number;
    cloudCoverage: number;
    aqi: number;
    planetPulse: number;
  };
}

export default function LiveIndicator() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch('/api/weather');
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Failed to fetch weather data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeather();
    // Refresh every 5 minutes
    const interval = setInterval(fetchWeather, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading || !weatherData) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-2"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={weatherData.data.planetPulse}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex items-center gap-2"
        >
          <div className="relative">
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-red-500"
            />
            <div className="absolute inset-0 w-2 h-2 rounded-full bg-red-500/30 animate-ping" />
          </div>
          <span
            className="text-xs font-mono"
            style={{ fontFamily: "monospace", color: "rgba(0, 0, 0, 0.5)" }}
          >
            LIVE Cyborgania
          </span>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
