import { NextResponse } from 'next/server';

const PALO_ALTO_LAT = 37.4419;
const PALO_ALTO_LON = -122.1430;

// Calculate sun position and phase
function getSunPhase(sunrise: number, sunset: number, currentTime: number): 'sunrise' | 'day' | 'sunset' | 'night' {
  const hour = new Date(currentTime * 1000).getHours();
  const sunriseHour = new Date(sunrise * 1000).getHours();
  const sunsetHour = new Date(sunset * 1000).getHours();
  
  if (hour >= sunriseHour && hour < sunriseHour + 2) return 'sunrise';
  if (hour >= sunriseHour + 2 && hour < sunsetHour - 2) return 'day';
  if (hour >= sunsetHour - 2 && hour < sunsetHour + 2) return 'sunset';
  return 'night';
}

// Calculate gradient colors based on sun phase
function getGradientColors(phase: string): { start: string; end: string } {
  switch (phase) {
    case 'sunrise':
      return { start: '#FFE5F1', end: '#FFB6D9' }; // Soft pinks
    case 'sunset':
      return { start: '#E6D6F6', end: '#D4A5F5' }; // Deep pinks and lavenders
    case 'night':
      return { start: '#6B5B95', end: '#4A4A6A' }; // Deep violets and blues
    case 'day':
    default:
      return { start: '#e8f2ff', end: '#a99db3' }; // Default pastels
  }
}

export async function GET() {
  try {
    // Using OpenWeatherMap API (free tier)
    // Note: You'll need to add OPENWEATHER_API_KEY to your .env.local
    const apiKey = process.env.OPENWEATHER_API_KEY || '';
    
    if (!apiKey) {
      // Fallback to static data if no API key
      return NextResponse.json({
        success: false,
        fallback: true,
        data: {
          sunPhase: 'day',
          gradient: { start: '#e8f2ff', end: '#a99db3' },
          windSpeed: 5,
          cloudCoverage: 30,
          aqi: 50,
          planetPulse: 50,
        },
      });
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${PALO_ALTO_LAT}&lon=${PALO_ALTO_LON}&appid=${apiKey}&units=metric`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Weather API failed');
    }

    const weatherData = await response.json();
    
    // Get sun times
    const sunrise = weatherData.sys.sunrise;
    const sunset = weatherData.sys.sunset;
    const currentTime = Math.floor(Date.now() / 1000);
    
    // Calculate sun phase
    const sunPhase = getSunPhase(sunrise, sunset, currentTime);
    
    // Get gradient colors
    const gradient = getGradientColors(sunPhase);
    
    // Extract weather data
    const windSpeed = weatherData.wind?.speed || 5; // m/s
    const cloudCoverage = weatherData.clouds?.all || 30; // percentage
    
    // Calculate Planet Pulse (combining AQI and wind)
    // For now, using wind speed as proxy (you can integrate AQI API later)
    const planetPulse = Math.min(100, Math.max(0, Math.round((windSpeed / 20) * 100)));
    
    return NextResponse.json({
      success: true,
      fallback: false,
      data: {
        sunPhase,
        gradient,
        windSpeed,
        cloudCoverage,
        aqi: planetPulse, // Placeholder
        planetPulse,
        timestamp: currentTime,
      },
    });
  } catch (error) {
    // Fallback to static Sacred Neutral state
    return NextResponse.json({
      success: false,
      fallback: true,
      data: {
        sunPhase: 'day',
        gradient: { start: '#e8f2ff', end: '#a99db3' },
        windSpeed: 5,
        cloudCoverage: 30,
        aqi: 50,
        planetPulse: 50,
      },
    });
  }
}
