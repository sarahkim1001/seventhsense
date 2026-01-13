"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Letter {
  id: string;
  char: string;
  baseX: number;
  baseY: number;
  driftX: number;
  driftY: number;
  currentX: number;
  currentY: number;
  opacity: number;
}

const letters = ["s", "e", "m", "a", "n", "t", "i", "c", "m", "a", "p"];
const letterCount = 50;
const proximity = 120;
const repelRadius = 100;

export default function BiologicalLetterNetwork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const [letterPositions, setLetterPositions] = useState<Letter[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const smoothMouseX = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const smoothMouseY = useSpring(mouseY, { damping: 30, stiffness: 100 });

  // Initialize dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Initialize letter positions
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const initialLetters: Letter[] = Array.from({ length: letterCount }, (_, i) => {
      const baseX = Math.random() * dimensions.width;
      const baseY = Math.random() * dimensions.height;
      // Varying opacity between 0.08 (8%) and 0.15 (15%)
      const opacity = 0.08 + Math.random() * 0.07;
      return {
        id: `letter-${i}`,
        char: letters[i % letters.length],
        baseX,
        baseY,
        driftX: (Math.random() - 0.5) * 30,
        driftY: (Math.random() - 0.5) * 30,
        currentX: baseX,
        currentY: baseY,
        opacity,
      };
    });

    setLetterPositions(initialLetters);
  }, [dimensions]);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Animation loop
  useEffect(() => {
    if (letterPositions.length === 0) return;

    const animate = () => {
      setLetterPositions((prev) => {
        const mouseXVal = smoothMouseX.get();
        const mouseYVal = smoothMouseY.get();
        const time = Date.now() * 0.001;

        return prev.map((letter) => {
          // Base drift animation using sine/cosine for organic movement
          const driftOffsetX = Math.sin(time + letter.baseX * 0.01) * letter.driftX;
          const driftOffsetY = Math.cos(time + letter.baseY * 0.01) * letter.driftY;
          
          let newX = letter.baseX + driftOffsetX;
          let newY = letter.baseY + driftOffsetY;

          // Boundary wrapping
          if (newX < 0) newX = dimensions.width;
          if (newX > dimensions.width) newX = 0;
          if (newY < 0) newY = dimensions.height;
          if (newY > dimensions.height) newY = 0;

          // Mouse repel effect
          const dx = newX - mouseXVal;
          const dy = newY - mouseYVal;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < repelRadius && distance > 0) {
            const force = (repelRadius - distance) / repelRadius;
            newX += (dx / distance) * force * 3;
            newY += (dy / distance) * force * 3;
          }

          return {
            ...letter,
            currentX: newX,
            currentY: newY,
          };
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [letterPositions.length, dimensions, smoothMouseX, smoothMouseY]);

  // Draw connection lines
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || letterPositions.length === 0 || dimensions.width === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      canvas.width = dimensions.width;
      canvas.height = dimensions.height;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = 0.5;

      for (let i = 0; i < letterPositions.length; i++) {
        for (let j = i + 1; j < letterPositions.length; j++) {
          const letter1 = letterPositions[i];
          const letter2 = letterPositions[j];

          const dx = letter2.currentX - letter1.currentX;
          const dy = letter2.currentY - letter1.currentY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < proximity) {
            const opacity = (1 - distance / proximity) * 0.08;
            ctx.strokeStyle = `rgba(0, 0, 0, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(letter1.currentX, letter1.currentY);
            ctx.lineTo(letter2.currentX, letter2.currentY);
            ctx.stroke();
          }
        }
      }
    };

    const interval = setInterval(draw, 50);
    return () => clearInterval(interval);
  }, [letterPositions, dimensions]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
    >
      {/* Connection Lines Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: "none" }}
      />

      {/* Floating Letters */}
      {letterPositions.map((letter) => (
        <motion.div
          key={letter.id}
          className="absolute font-mono text-sm select-none"
          style={{
            fontFamily: "monospace",
            x: letter.currentX,
            y: letter.currentY,
            color: `rgba(0, 0, 0, ${letter.opacity})`,
          }}
        >
          {letter.char}
        </motion.div>
      ))}
    </div>
  );
}
