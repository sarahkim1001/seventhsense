"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValue } from "framer-motion";

interface Branch {
  x: number;
  y: number;
  angle: number;
  length: number;
  depth: number;
  parent?: Branch;
}

export default function BiologicalGrowth() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  const { scrollYProgress } = useScroll();
  const scrollValue = useMotionValue(0);

  // Update scroll value
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      scrollValue.set(value);
    });
    return () => unsubscribe();
  }, [scrollYProgress, scrollValue]);

  // Initialize dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setDimensions({ width: rect.width || window.innerWidth, height: rect.height || window.innerHeight });
    };

    // Initial update with a small delay to ensure DOM is ready
    setTimeout(updateDimensions, 100);
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Recursive branching function (L-system inspired)
  const growBranch = (
    ctx: CanvasRenderingContext2D,
    branch: Branch,
    maxDepth: number,
    mouseX: number,
    mouseY: number,
    scrollGrowth: number
  ): void => {
    if (branch.depth >= maxDepth) return;

    const branchLength = branch.length * (0.7 + scrollGrowth * 0.3);
    const endX = branch.x + Math.cos(branch.angle) * branchLength;
    const endY = branch.y + Math.sin(branch.angle) * branchLength;

    // Calculate distance from mouse
    const dx = (branch.x + endX) / 2 - mouseX;
    const dy = (branch.y + endY) / 2 - mouseY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const proximity = 150;
    const mouseInfluence = distance < proximity ? (proximity - distance) / proximity : 0;

    // Base opacity and thickness (increased visibility)
    const baseOpacity = 0.15 + branch.depth * 0.03;
    const opacity = Math.min(0.4, baseOpacity + mouseInfluence * 0.25);
    const thickness = 0.5 + mouseInfluence * 0.5;

    // Add organic imperfections
    const noise = (Math.random() - 0.5) * 0.1;
    const curvedX = endX + Math.sin(branch.angle) * noise * branchLength;
    const curvedY = endY - Math.cos(branch.angle) * noise * branchLength;

    // Draw the branch with tapering
    ctx.strokeStyle = `rgba(0, 0, 0, ${opacity})`;
    ctx.lineWidth = thickness;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(branch.x, branch.y);
    
    // Add slight curve for organic feel
    const midX = (branch.x + curvedX) / 2 + Math.sin(branch.angle) * branchLength * 0.1;
    const midY = (branch.y + curvedY) / 2 - Math.cos(branch.angle) * branchLength * 0.1;
    ctx.quadraticCurveTo(midX, midY, curvedX, curvedY);
    ctx.stroke();

    // Create child branches
    const numChildren = branch.depth === 0 ? 2 : Math.random() > 0.6 ? 1 : 0;
    const angleVariation = 0.4 + branch.depth * 0.1;

    for (let i = 0; i < numChildren; i++) {
      const childAngle = branch.angle + (Math.random() - 0.5) * angleVariation;
      const childLength = branchLength * (0.6 + Math.random() * 0.2);
      
      const childBranch: Branch = {
        x: curvedX,
        y: curvedY,
        angle: childAngle,
        length: childLength,
        depth: branch.depth + 1,
        parent: branch,
      };

      growBranch(ctx, childBranch, maxDepth, mouseX, mouseY, scrollGrowth);
    }
  };

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = () => {
      // Use container dimensions or fallback to window size
      const width = dimensions.width || (containerRef.current?.offsetWidth || window.innerWidth);
      const height = dimensions.height || (containerRef.current?.offsetHeight || window.innerHeight);
      
      if (width === 0 || height === 0) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      canvas.width = width;
      canvas.height = height;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Get scroll growth value
      const scrollGrowth = scrollValue.get();

      // Starting points for branches (sparse, organic placement)
      const startPoints = [
        { x: width * 0.1, y: height * 0.3, angle: -Math.PI / 4 },
        { x: width * 0.2, y: height * 0.5, angle: Math.PI / 6 },
        { x: width * 0.8, y: height * 0.4, angle: -Math.PI / 3 },
        { x: width * 0.9, y: height * 0.7, angle: Math.PI / 4 },
        { x: width * 0.5, y: height * 0.2, angle: -Math.PI / 2 },
      ];

      startPoints.forEach((start) => {
        const rootBranch: Branch = {
          x: start.x,
          y: start.y,
          angle: start.angle,
          length: 30 + scrollGrowth * 50,
          depth: 0,
        };

        growBranch(
          ctx,
          rootBranch,
          4 + Math.floor(scrollGrowth * 2),
          mousePos.x,
          mousePos.y,
          scrollGrowth
        );
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start animation with a small delay to ensure dimensions are set
    const timeoutId = setTimeout(() => {
      animationFrameRef.current = requestAnimationFrame(animate);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [dimensions, mousePos, scrollValue]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
}
