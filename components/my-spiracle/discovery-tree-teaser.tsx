"use client";

// =============================================================================
// DISCOVERY TREE TEASER
// Invitation to explore the graph - shows a simplified book → tags → titles
// branching visualization with hand-drawn aesthetic and watercolor tag blobs
// =============================================================================

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms";
import { ChevronRight } from "lucide-react";

export interface DiscoveryTag {
  name: string;
  titleCount: number;
}

export interface DiscoveryBook {
  title: string;
  author: string;
}

export interface DiscoveryTreeData {
  book: DiscoveryBook;
  tags: DiscoveryTag[];
}

export interface DiscoveryTreeTeaserProps {
  data?: DiscoveryTreeData;
  onExplore?: () => void;
  className?: string;
}

// Default sample data
const defaultData: DiscoveryTreeData = {
  book: { title: "Gilead", author: "Marilynne Robinson" },
  tags: [
    { name: "Measured pace", titleCount: 47 },
    { name: "Literary", titleCount: 124 },
    { name: "Character-driven", titleCount: 89 },
    { name: "Thought-provoking", titleCount: 156 },
  ],
};

export function DiscoveryTreeTeaser({
  data = defaultData,
  onExplore,
  className,
}: DiscoveryTreeTeaserProps) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  // Use CSS custom properties for theme-aware colors
  const inkColor = "var(--constellation-ink, #3d2e24)";
  const inkColorLight = "var(--constellation-ink-light, #7a6555)";

  // Watercolor blob colors for tags
  const tagColors = [
    { base: "var(--discovery-tag-blue, #b8d4e8)", edge: "var(--discovery-tag-blue-edge, #8bb8d4)" },
    { base: "var(--discovery-tag-amber, #e8d4a8)", edge: "var(--discovery-tag-amber-edge, #d4b878)" },
    { base: "var(--discovery-tag-rose, #e8c4d4)", edge: "var(--discovery-tag-rose-edge, #d4a0b8)" },
    { base: "var(--discovery-tag-sage, #c4d8c8)", edge: "var(--discovery-tag-sage-edge, #a0c4a8)" },
  ];

  // Helper: create a wobbly line path
  const sketchyLine = (x1: number, y1: number, x2: number, y2: number, seed: number) => {
    const midX = (x1 + x2) / 2 + Math.sin(seed * 2.3) * 4;
    const midY = (y1 + y2) / 2 + Math.cos(seed * 1.7) * 3;
    return `M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`;
  };

  // Helper: create an organic blob path for watercolor effect
  const blobPath = (cx: number, cy: number, rx: number, ry: number, seed: number) => {
    const points = 8;
    let path = "";
    for (let i = 0; i <= points; i++) {
      const angle = (Math.PI * 2 * i) / points;
      const wobbleX = Math.sin(i * 2.3 + seed) * 3 + Math.cos(i * 1.7 + seed * 0.5) * 2;
      const wobbleY = Math.cos(i * 2.7 + seed) * 2 + Math.sin(i * 1.9 + seed * 0.7) * 3;
      const x = cx + Math.cos(angle) * (rx + wobbleX);
      const y = cy + Math.sin(angle) * (ry + wobbleY);
      if (i === 0) {
        path = `M ${x} ${y}`;
      } else {
        const prevAngle = (Math.PI * 2 * (i - 1)) / points;
        const cpX = cx + Math.cos((angle + prevAngle) / 2) * (rx * 1.1);
        const cpY = cy + Math.sin((angle + prevAngle) / 2) * (ry * 1.1);
        path += ` Q ${cpX} ${cpY} ${x} ${y}`;
      }
    }
    return path + " Z";
  };

  if (!mounted) {
    return (
      <div className={cn("relative", className)}>
        <div className="h-48 bg-spiracle-sand/20 dark:bg-secondary/20 rounded-lg animate-pulse" />
      </div>
    );
  }

  return (
    <div className={cn("relative", className)}>
      {/* Hand-drawn frame */}
      <div className="relative bg-spiracle-cream dark:bg-card/50 rounded-lg border border-spiracle-sand dark:border-border overflow-hidden">
        {/* SVG Graph Visualization */}
        <svg
          viewBox="0 0 400 180"
          className="w-full h-auto"
          aria-label="Discovery tree showing how your current book connects to tags and other titles"
        >
          <defs>
            {/* Watercolor filter */}
            <filter id="discovery-watercolor" x="-50%" y="-50%" width="200%" height="200%">
              <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" seed="42" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>

          {/* Book node (left side) - small square */}
          <g transform="translate(40, 90)">
            {/* Book cover square with watercolor effect */}
            <rect
              x="-20"
              y="-20"
              width="40"
              height="40"
              rx="3"
              fill={tagColors[0].base}
              filter="url(#discovery-watercolor)"
              opacity="0.7"
            />
            <rect
              x="-18"
              y="-18"
              width="36"
              height="36"
              rx="2"
              fill="none"
              stroke={inkColor}
              strokeWidth="1.5"
            />
            {/* Book icon hint */}
            <path
              d="M -8 -8 L -8 8 L 8 8 L 8 -8 Z M -8 -4 L 8 -4"
              fill="none"
              stroke={inkColor}
              strokeWidth="1"
              opacity="0.5"
            />
          </g>

          {/* Connecting lines from book to tags */}
          {data.tags.map((tag, i) => {
            const tagX = 160;
            const tagY = 30 + i * 40;
            return (
              <path
                key={`line-book-${i}`}
                d={sketchyLine(60, 90, tagX - 30, tagY, i * 3 + 1)}
                fill="none"
                stroke={inkColorLight}
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.6"
              />
            );
          })}

          {/* Tag nodes (middle) */}
          {data.tags.map((tag, i) => {
            const tagX = 160;
            const tagY = 30 + i * 40;
            const color = tagColors[i % tagColors.length];
            return (
              <g key={`tag-${i}`} transform={`translate(${tagX}, ${tagY})`}>
                {/* Watercolor blob */}
                <path
                  d={blobPath(0, 0, 45, 14, i * 5 + 2)}
                  fill={color.base}
                  filter="url(#discovery-watercolor)"
                  opacity="0.6"
                />
                {/* Edge pooling effect */}
                <path
                  d={blobPath(0, 0, 42, 12, i * 5 + 3)}
                  fill="none"
                  stroke={color.edge}
                  strokeWidth="2"
                  filter="url(#discovery-watercolor)"
                  opacity="0.3"
                />
                {/* Small connector dot */}
                <circle cx="-35" cy="0" r="3" fill={inkColor} opacity="0.7" />
                {/* Tag text */}
                <text
                  x="0"
                  y="4"
                  textAnchor="middle"
                  className="text-[10px] font-serif fill-current"
                  style={{ fill: inkColor }}
                >
                  {tag.name}
                </text>
              </g>
            );
          })}

          {/* Lines from tags to titles (fading out to suggest more) */}
          {data.tags.map((tag, i) => {
            const tagX = 160;
            const tagY = 30 + i * 40;
            return Array.from({ length: 3 }, (_, j) => {
              const endX = 280 + j * 25;
              const endY = tagY - 15 + j * 15;
              const opacity = 0.5 - j * 0.15;
              return (
                <path
                  key={`line-tag-${i}-${j}`}
                  d={sketchyLine(tagX + 35, tagY, endX, endY, i * 10 + j * 3)}
                  fill="none"
                  stroke={inkColorLight}
                  strokeWidth="1"
                  strokeLinecap="round"
                  opacity={opacity}
                />
              );
            });
          })}

          {/* Fading title hints on the right */}
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const y = 25 + i * 28;
            const opacity = 0.4 - i * 0.05;
            return (
              <g key={`title-hint-${i}`} transform={`translate(320, ${y})`} opacity={opacity}>
                <rect
                  x="0"
                  y="-8"
                  width="50"
                  height="16"
                  rx="2"
                  fill={inkColorLight}
                  opacity="0.15"
                />
                <line
                  x1="5"
                  y1="0"
                  x2="40"
                  y2="0"
                  stroke={inkColorLight}
                  strokeWidth="1"
                  opacity="0.3"
                />
              </g>
            );
          })}

          {/* "..." dots suggesting infinite exploration */}
          <g transform="translate(380, 90)" opacity="0.4">
            <circle cx="0" cy="-10" r="2" fill={inkColor} />
            <circle cx="0" cy="0" r="2" fill={inkColor} />
            <circle cx="0" cy="10" r="2" fill={inkColor} />
          </g>
        </svg>

        {/* Copy and CTA overlay */}
        <div className="absolute inset-0 flex items-end justify-between p-4 sm:p-5 bg-gradient-to-t from-spiracle-cream/90 dark:from-card/90 via-transparent to-transparent">
          <div>
            <p className="font-serif text-sm sm:text-base text-foreground/90 italic mb-1">
              Follow the threads
            </p>
            <p className="text-xs text-muted-foreground max-w-[200px]">
              See where your taste leads — from books to tags to new discoveries
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-primary shrink-0"
            onClick={onExplore}
          >
            Explore
            <ChevronRight className="size-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
