"use client";

import { useEffect, useState } from "react";

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

interface DynamicBackgroundProps {
  children: React.ReactNode;
}

export default function DynamicBackground({ children }: DynamicBackgroundProps) {
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
        // Fallback to default gradient
      }
    };

    fetchWeather();
    // Refresh every 5 minutes
    const interval = setInterval(fetchWeather, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Calculate animation duration based on wind speed (faster wind = faster animation)
  // Wind speed in m/s, map to animation duration (higher wind = lower duration = faster)
  const animationDuration = Math.max(10, Math.min(30, 20 - windSpeed * 2));

  return (
    <div
      className="min-h-screen bg-white text-black relative"
      style={{
        background: `linear-gradient(180deg, ${gradient.start} 0%, ${gradient.end} 100%)`,
        transition: `background ${animationDuration}s ease-in-out`,
      }}
    >
      {children}
    </div>
  );
}
