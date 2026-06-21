"use client";

import { Renderer, Program, Mesh, Triangle } from "ogl";
import { useEffect, useRef } from "react";

function hexToVec3(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [
    parseInt(h.slice(0, 2), 16) / 255,
    parseInt(h.slice(2, 4), 16) / 255,
    parseInt(h.slice(4, 6), 16) / 255,
  ];
}

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uResolution;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform float uSpeed;
uniform float uBrightness;
uniform vec2 uMouse;
uniform float uMouseInfluence;
uniform bool uEnableMouse;

vec3 blobCenter(float i, float t) {
  float angle = t * (0.2 + i * 0.1) + i * 2.4;
  float radius = 0.25 + 0.1 * sin(t * 0.3 + i);
  float x = 0.5 + radius * cos(angle);
  float y = 0.5 + radius * sin(angle) * 0.6;
  return vec3(x, y, 0.0);
}

float smoothMin(float a, float b, float k) {
  float h = max(k - abs(a - b), 0.0) / k;
  return min(a, b) - h * h * k * 0.25;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  float t = uTime * uSpeed * 0.15;

  vec2 mouseOffset = vec2(0.0);
  if (uEnableMouse) {
    mouseOffset = (uMouse - 0.5) * uMouseInfluence;
  }

  float field = 1000.0;
  for (float i = 0.0; i < 4.0; i += 1.0) {
    vec3 center = blobCenter(i, t);
    center.xy += mouseOffset * (0.5 + i * 0.15);
    float d = length(uv - center.xy);
    field = smoothMin(field, d, 0.45);
  }

  float intensity = smoothstep(0.55, 0.0, field) * uBrightness;
  vec3 color = mix(uColor1, uColor2, intensity * 0.7);

  float alpha = clamp(intensity * 1.2, 0.0, 0.75);
  gl_FragColor = vec4(color * intensity, alpha);
}
`;

interface FluidAuroraProps {
  readonly speed?: number;
  readonly brightness?: number;
  readonly color1?: string;
  readonly color2?: string;
  readonly mouseInfluence?: number;
  readonly enableMouseInteraction?: boolean;
  readonly className?: string;
  readonly pixelRatio?: number;
  readonly fps?: number;
}

export function FluidAurora({
  speed = 0.4,
  brightness = 1.0,
  color1 = "#ffffff",
  color2 = "#0099ff",
  mouseInfluence = 0.15,
  enableMouseInteraction = true,
  className,
  pixelRatio = 0.5,
  fps = 30,
}: FluidAuroraProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const effectiveSpeed = prefersReducedMotion ? 0 : speed;
    const effectiveMouse = prefersReducedMotion ? false : enableMouseInteraction;

    const dpr = Math.min(pixelRatio, window.devicePixelRatio);
    const renderer = new Renderer({
      alpha: true,
      premultipliedAlpha: false,
      dpr,
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);

    let targetMouse = [0.5, 0.5];
    const currentMouse = [0.5, 0.5];
    let isVisible = false;
    let lastFrameTime = 0;
    const frameInterval = 1000 / fps;
    let animationFrameId: number;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    function handleMouseMove(event: MouseEvent) {
      const rect = gl.canvas.getBoundingClientRect();
      targetMouse = [
        (event.clientX - rect.left) / rect.width,
        1.0 - (event.clientY - rect.top) / rect.height,
      ];
    }

    function handleMouseLeave() {
      targetMouse = [0.5, 0.5];
    }

    function resize() {
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      program.uniforms.uResolution.value = [
        gl.canvas.width,
        gl.canvas.height,
        gl.canvas.width / gl.canvas.height,
      ];
    }

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: {
          value: [
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height,
          ],
        },
        uColor1: { value: hexToVec3(color1) },
        uColor2: { value: hexToVec3(color2) },
        uSpeed: { value: effectiveSpeed },
        uBrightness: { value: brightness },
        uMouse: { value: new Float32Array([0.5, 0.5]) },
        uMouseInfluence: { value: mouseInfluence },
        uEnableMouse: { value: effectiveMouse },
      },
    });

    window.addEventListener("resize", resize);
    resize();

    const mesh = new Mesh(gl, { geometry, program });
    container.appendChild(gl.canvas);

    if (effectiveMouse) {
      gl.canvas.addEventListener("mousemove", handleMouseMove);
      gl.canvas.addEventListener("mouseleave", handleMouseLeave);
    }

    function update(time: number) {
      animationFrameId = requestAnimationFrame(update);

      if (!isVisible) return;

      const elapsed = time - lastFrameTime;
      if (elapsed < frameInterval) return;
      lastFrameTime = time - (elapsed % frameInterval);

      program.uniforms.uTime.value = time * 0.001;

      if (effectiveMouse) {
        currentMouse[0] += 0.05 * (targetMouse[0] - currentMouse[0]);
        currentMouse[1] += 0.05 * (targetMouse[1] - currentMouse[1]);
        program.uniforms.uMouse.value[0] = currentMouse[0];
        program.uniforms.uMouse.value[1] = currentMouse[1];
      }

      renderer.render({ scene: mesh });
    }

    animationFrameId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      if (effectiveMouse) {
        gl.canvas.removeEventListener("mousemove", handleMouseMove);
        gl.canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (container.contains(gl.canvas)) {
        container.removeChild(gl.canvas);
      }
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [
    speed,
    brightness,
    color1,
    color2,
    mouseInfluence,
    enableMouseInteraction,
    pixelRatio,
    fps,
  ]);

  return (
    <div
      ref={containerRef}
      className={`soft-aurora-container ${className ?? ""}`}
    />
  );
}
