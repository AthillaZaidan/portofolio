"use client";

import { useEffect, useRef, useCallback } from "react";
import { createNoise2D } from "simplex-noise";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  noiseOffsetX: number;
  noiseOffsetY: number;
  speed: number;
}

interface NeuralCanvasProps {
  particleCount?: number;
  connectionDistance?: number;
  mouseRadius?: number;
  isDimmed?: boolean;
  className?: string;
}

export function NeuralCanvas({
  particleCount = 100,
  connectionDistance = 120,
  mouseRadius = 150,
  isDimmed = false,
  className,
}: NeuralCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number>(0);
  const noise2D = useRef(createNoise2D());
  const isVisibleRef = useRef(true);

  const initParticles = useCallback(
    (width: number, height: number) => {
      const particles: Particle[] = [];
      for (let i = 0; i < particleCount; i++) {
        const isBlue = Math.random() < 0.15;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: 0,
          vy: 0,
          radius: Math.random() * 1.5 + 0.5,
          color: isBlue ? "#0099ff" : "#ffffff",
          noiseOffsetX: Math.random() * 1000,
          noiseOffsetY: Math.random() * 1000,
          speed: Math.random() * 0.3 + 0.2,
        });
      }
      particlesRef.current = particles;
    },
    [particleCount]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles(rect.width, rect.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      particlesRef.current.forEach((p) => {
        const dx = p.x - clickX;
        const dy = p.y - clickY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          p.radius = Math.min(p.radius * 2, 4);
          setTimeout(() => {
            p.radius = Math.random() * 1.5 + 0.5;
          }, 300);
        }
      });
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("click", handleClick);

    // IntersectionObserver to pause when not visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    let lastTime = 0;
    const animate = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, 0.033);
      lastTime = time;

      if (!isVisibleRef.current) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      const rect = container.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      particles.forEach((p) => {
        const noiseX = noise2D.current(p.noiseOffsetX + time * 0.0001, 0);
        const noiseY = noise2D.current(0, p.noiseOffsetY + time * 0.0001);

        p.vx += noiseX * p.speed * delta * 60;
        p.vy += noiseY * p.speed * delta * 60;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouseRadius) {
          const force = (1 - dist / mouseRadius) * 0.02;
          p.vx += dx * force;
          p.vy += dy * force;
        }

        p.vx *= 0.98;
        p.vy *= 0.98;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = rect.width;
        if (p.x > rect.width) p.x = 0;
        if (p.y < 0) p.y = rect.height;
        if (p.y > rect.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = isDimmed ? 0.3 : 0.8;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.06;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle =
              particles[i].color === "#0099ff" ||
              particles[j].color === "#0099ff"
                ? `rgba(0, 153, 255, ${opacity * 2})`
                : `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.globalAlpha = isDimmed ? 0.3 : 1;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("click", handleClick);
      observer.disconnect();
    };
  }, [initParticles, connectionDistance, mouseRadius, isDimmed]);

  return (
    <div ref={containerRef} className={`absolute inset-0 ${className ?? ""}`}>
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="Interactive neural network visualization with particles and connections"
        className="absolute inset-0"
        style={{ touchAction: "none" }}
      />
    </div>
  );
}