"use client";

// =============================================================================
// TASTE CONSTELLATION
// Hand-drawn taste constellation visualization
// Inspired by vintage botanical diagrams and sepia ink sketches
// With watercolor wash fills for organic, artisan feel
// Dark mode: warm lamplight glow - honey and amber tones
// =============================================================================

import * as React from "react";
import { cn } from "@/lib/utils";
import type { TasteDimension } from "./types";

export interface TasteConstellationProps {
  dimensions: TasteDimension[];
  className?: string;
}

export function TasteConstellation({
  dimensions,
  className,
}: TasteConstellationProps) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const size = 300;
  const center = size / 2;
  const maxRadius = 100;

  // Use CSS custom properties for theme-aware colors
  const inkColor = "var(--constellation-ink, #3d2e24)";
  const inkColorMid = "var(--constellation-ink-mid, #5c4a3d)";
  const inkColorLight = "var(--constellation-ink-light, #7a6555)";
  const watercolorBase = "var(--constellation-wash-base, #a8c4d4)";
  const watercolorEdge = "var(--constellation-wash-edge, #7a9eb8)";

  // Helper: create a wobbly hand-drawn line path
  const sketchyLinePath = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    seed: number
  ) => {
    const segments = 4;
    let path = `M ${x1} ${y1}`;

    for (let i = 1; i <= segments; i++) {
      const t = i / segments;
      const x = x1 + (x2 - x1) * t;
      const y = y1 + (y2 - y1) * t;
      const perpX = -(y2 - y1) / Math.sqrt((x2-x1)**2 + (y2-y1)**2);
      const perpY = (x2 - x1) / Math.sqrt((x2-x1)**2 + (y2-y1)**2);
      const wobble = Math.sin(seed + i * 2.7) * 1.5 + Math.cos(seed * 1.3 + i) * 0.8;
      path += ` L ${x + perpX * wobble} ${y + perpY * wobble}`;
    }
    return path;
  };

  // Helper: create a wobbly circle with pen-like imperfection
  const sketchyCirclePath = (cx: number, cy: number, r: number, seed: number) => {
    const segments = 24;
    const points: { x: number; y: number }[] = [];

    for (let i = 0; i < segments; i++) {
      const angle = (Math.PI * 2 * i) / segments;
      const wobble = Math.sin(i * 3.1 + seed) * 2.5 +
                     Math.cos(i * 2.3 + seed * 0.7) * 1.5 +
                     Math.sin(i * 5.7 + seed * 1.3) * 0.8;
      const actualR = r + wobble;
      points.push({
        x: cx + Math.cos(angle) * actualR,
        y: cy + Math.sin(angle) * actualR,
      });
    }

    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i <= segments; i++) {
      const curr = points[i % segments];
      const prev = points[(i - 1) % segments];
      const cpX = (prev.x + curr.x) / 2 + Math.sin(i * 1.9 + seed) * 0.5;
      const cpY = (prev.y + curr.y) / 2 + Math.cos(i * 2.1 + seed) * 0.5;
      path += ` Q ${cpX} ${cpY} ${curr.x} ${curr.y}`;
    }
    return path;
  };

  // Helper: create a small hand-drawn dot (imperfect circle)
  const sketchyDotPath = (cx: number, cy: number, r: number, seed: number) => {
    const segments = 8;
    const points: { x: number; y: number }[] = [];

    for (let i = 0; i < segments; i++) {
      const angle = (Math.PI * 2 * i) / segments;
      const wobble = Math.sin(i * 2.5 + seed) * (r * 0.25) + Math.cos(i * 3.1 + seed) * (r * 0.15);
      points.push({
        x: cx + Math.cos(angle) * (r + wobble),
        y: cy + Math.sin(angle) * (r + wobble),
      });
    }

    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i <= segments; i++) {
      const curr = points[i % segments];
      path += ` L ${curr.x} ${curr.y}`;
    }
    return path + " Z";
  };

  // Calculate constellation points
  const points = dimensions.map((dim, i) => {
    const angle = (Math.PI * 2 * i) / dimensions.length - Math.PI / 2;
    const radius = (dim.primary.percentage / 100) * maxRadius;
    const wobbleX = Math.sin(i * 3.7 + 1.2) * 3 + Math.cos(i * 2.1 + 0.5) * 2;
    const wobbleY = Math.cos(i * 2.3 + 0.8) * 3 + Math.sin(i * 1.9 + 1.1) * 2;
    return {
      x: center + Math.cos(angle) * radius + wobbleX,
      y: center + Math.sin(angle) * radius + wobbleY,
      labelX: center + Math.cos(angle) * (maxRadius + 35),
      labelY: center + Math.sin(angle) * (maxRadius + 35),
      angle,
      outerX: center + Math.cos(angle) * maxRadius,
      outerY: center + Math.sin(angle) * maxRadius,
      ...dim,
    };
  });

  // Create the main pentagon shape with hand-drawn lines
  const createShapePath = () => {
    let path = `M ${points[0].x} ${points[0].y}`;

    for (let i = 1; i <= points.length; i++) {
      const curr = points[i % points.length];
      const prev = points[(i - 1) % points.length];

      const segments = 3;
      for (let j = 1; j <= segments; j++) {
        const t = j / segments;
        const x = prev.x + (curr.x - prev.x) * t;
        const y = prev.y + (curr.y - prev.y) * t;
        const dx = curr.x - prev.x;
        const dy = curr.y - prev.y;
        const len = Math.sqrt(dx * dx + dy * dy);
        const perpX = -dy / len;
        const perpY = dx / len;
        const wobble = Math.sin(i * 4.7 + j * 2.3) * 2 + Math.cos(i * 3.1 + j * 1.7) * 1.5;
        path += ` L ${x + perpX * wobble} ${y + perpY * wobble}`;
      }
    }
    return path + " Z";
  };

  // Show placeholder until client-side render to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className={cn("relative", className)}>
        <div
          className="w-full max-w-[300px] mx-auto aspect-square bg-spiracle-sand/30 dark:bg-secondary/30 rounded-full animate-pulse"
          aria-label="Loading taste profile..."
        />
      </div>
    );
  }

  return (
    <div className={cn("relative", className)}>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full max-w-[300px] mx-auto"
        aria-label="Taste profile constellation showing your reading preferences"
      >
        <defs>
          <clipPath id="constellation-clip">
            <path d={createShapePath()} />
          </clipPath>

          <filter id="watercolor-wash" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.04"
              numOctaves="3"
              seed="15"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="8"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            <feGaussianBlur in="displaced" stdDeviation="1.5" result="blurred" />
            <feBlend in="blurred" in2="SourceGraphic" mode="normal" />
          </filter>

          <radialGradient id="watercolor-gradient" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor={watercolorBase} stopOpacity="0.5" />
            <stop offset="40%" stopColor={watercolorBase} stopOpacity="0.6" />
            <stop offset="70%" stopColor={watercolorEdge} stopOpacity="0.55" />
            <stop offset="100%" stopColor={watercolorEdge} stopOpacity="0.4" />
          </radialGradient>
        </defs>

        {/* Outer guide circle */}
        <path
          d={sketchyCirclePath(center, center, maxRadius, 1)}
          fill="none"
          stroke={inkColorLight}
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* Inner guide circles */}
        <path
          d={sketchyCirclePath(center, center, maxRadius * 0.66, 2)}
          fill="none"
          stroke={inkColorLight}
          strokeWidth="0.75"
          strokeLinecap="round"
          strokeDasharray="3 5"
          opacity="0.5"
        />
        <path
          d={sketchyCirclePath(center, center, maxRadius * 0.33, 3)}
          fill="none"
          stroke={inkColorLight}
          strokeWidth="0.75"
          strokeLinecap="round"
          strokeDasharray="3 5"
          opacity="0.4"
        />

        {/* Axis lines */}
        {points.map((point, i) => (
          <path
            key={`axis-${i}`}
            d={sketchyLinePath(center, center, point.outerX, point.outerY, i * 7 + 3)}
            fill="none"
            stroke={inkColorLight}
            strokeWidth="0.75"
            strokeLinecap="round"
            strokeDasharray="2 5"
            opacity="0.6"
          />
        ))}

        {/* Watercolor wash fill */}
        <g filter="url(#watercolor-wash)">
          <path
            d={createShapePath()}
            fill="url(#watercolor-gradient)"
          />
        </g>

        {/* Secondary watercolor layer for depth */}
        <g clipPath="url(#constellation-clip)" opacity="0.3">
          {Array.from({ length: 8 }, (_, i) => {
            const angle = (i * 0.8 + 0.3);
            const r = 20 + (i * 11) % 50;
            const x = center + Math.cos(angle) * r;
            const y = center + Math.sin(angle) * r;
            const blobSize = 12 + Math.sin(i * 2.3) * 6;
            return (
              <ellipse
                key={`blob-${i}`}
                cx={x + Math.sin(i * 1.7) * 5}
                cy={y + Math.cos(i * 2.1) * 5}
                rx={blobSize}
                ry={blobSize * (0.7 + Math.sin(i * 1.9) * 0.3)}
                fill={watercolorEdge}
                opacity={0.3 + Math.sin(i * 1.5) * 0.15}
                filter="url(#watercolor-wash)"
              />
            );
          })}
        </g>

        {/* Subtle edge darkening */}
        <path
          d={createShapePath()}
          fill="none"
          stroke={watercolorEdge}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.25"
          filter="url(#watercolor-wash)"
        />

        {/* Main shape outline */}
        <path
          d={createShapePath()}
          fill="none"
          stroke={inkColorMid}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.5"
          transform="translate(0.6, 0.6)"
        />
        <path
          d={createShapePath()}
          fill="none"
          stroke={inkColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Vertex nodes */}
        {points.map((point, i) => (
          <g key={`node-${i}`}>
            <path
              d={sketchyDotPath(point.x, point.y, 6, i * 3 + 1)}
              fill="none"
              stroke={inkColor}
              strokeWidth="1.25"
              opacity="0.7"
            />
            <path
              d={sketchyDotPath(point.x, point.y, 3, i * 5 + 2)}
              fill={inkColor}
              stroke="none"
            />
          </g>
        ))}

        {/* Axis markers at outer ring */}
        {points.map((point, i) => {
          const tickInner = maxRadius - 4;
          const tickOuter = maxRadius + 4;
          const wobble = Math.sin(i * 2.7) * 0.5;
          return (
            <line
              key={`tick-${i}`}
              x1={center + Math.cos(point.angle) * tickInner + wobble}
              y1={center + Math.sin(point.angle) * tickInner + wobble}
              x2={center + Math.cos(point.angle) * tickOuter - wobble}
              y2={center + Math.sin(point.angle) * tickOuter - wobble}
              stroke={inkColor}
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.8"
            />
          );
        })}
      </svg>

      {/* Labels positioned around the chart */}
      <div className="absolute inset-0 pointer-events-none">
        {points.map((point, i) => {
          const isTop = point.labelY < center;
          const isLeft = point.labelX < center;
          const isCenter = Math.abs(point.labelX - center) < 25;

          let positionClasses = "";
          let translateClasses = "";

          if (isTop && isCenter) {
            positionClasses = "top-0 left-1/2";
            translateClasses = "-translate-x-1/2";
          } else if (!isTop && isCenter) {
            positionClasses = "bottom-0 left-1/2";
            translateClasses = "-translate-x-1/2";
          } else if (isLeft) {
            positionClasses = isTop ? "top-[10%] left-0" : "bottom-[10%] left-0";
          } else {
            positionClasses = isTop ? "top-[10%] right-0" : "bottom-[10%] right-0";
          }

          return (
            <div
              key={`label-${i}`}
              className={cn(
                "absolute text-center",
                positionClasses,
                translateClasses
              )}
            >
              <div
                className="text-[10px] uppercase tracking-wider mb-0.5 font-medium"
                style={{ color: inkColorMid }}
              >
                {point.name}
              </div>
              <div
                className="text-xs font-semibold capitalize"
                style={{ color: inkColor }}
              >
                {point.primary.tag}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Export sample data for style guide
export { sampleTasteProfile as sampleConstellationData } from "./sample-data";
