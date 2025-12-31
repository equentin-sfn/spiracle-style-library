"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Play, Pause } from "@phosphor-icons/react";

export interface PodcastCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Episode artwork URL */
  artworkSrc: string;
  /** Episode title */
  title: string;
  /** Episode number or label (e.g., "Episode 12") */
  episodeLabel?: string;
  /** Episode description/summary */
  description?: string;
  /** Duration display (e.g., "45 min") */
  duration?: string;
  /** Publication date */
  date?: string;
  /** Link to episode page */
  href: string;
  /** Whether the episode is currently playing */
  isPlaying?: boolean;
  /** Callback when play button is clicked */
  onPlayClick?: () => void;
}

function PodcastCard({
  artworkSrc,
  title,
  episodeLabel,
  description,
  duration,
  date,
  href,
  isPlaying = false,
  onPlayClick,
  className,
  ...props
}: PodcastCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-5",
        "bg-card rounded-sm border border-border/50",
        "transition-all duration-200 ease-out",
        "hover:border-border hover:shadow-sm",
        className
      )}
      {...props}
    >
      {/* Artwork */}
      <div className="relative flex-shrink-0">
        <div className="relative w-full sm:w-32 md:w-36 aspect-square rounded-sm overflow-hidden bg-muted">
          <Image
            src={artworkSrc}
            alt={`${title} artwork`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, 144px"
          />
          {/* Play Button Overlay */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onPlayClick?.();
            }}
            className={cn(
              "absolute inset-0 flex items-center justify-center",
              "bg-black/40 opacity-0 group-hover:opacity-100",
              "transition-opacity duration-200"
            )}
            aria-label={isPlaying ? "Pause episode" : "Play episode"}
          >
            <span
              className={cn(
                "flex items-center justify-center w-12 h-12 rounded-full",
                "bg-white text-spiracle-forest",
                "transition-transform duration-200",
                "hover:scale-105 active:scale-95"
              )}
            >
              {isPlaying ? (
                <Pause className="size-5" weight="fill" />
              ) : (
                <Play className="size-5 ml-0.5" weight="fill" />
              )}
            </span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Episode Label */}
        {episodeLabel && (
          <p className="text-xs uppercase tracking-wider text-spiracle-terracotta font-medium mb-1">
            {episodeLabel}
          </p>
        )}

        {/* Title */}
        <Link href={href} className="group/link">
          <h3 className="font-display text-lg sm:text-xl text-foreground leading-snug line-clamp-2 group-hover/link:text-spiracle-forest transition-colors duration-200">
            {title}
          </h3>
        </Link>

        {/* Description */}
        {description && (
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {description}
          </p>
        )}

        {/* Meta & Waveform */}
        <div className="mt-auto pt-3 flex items-center gap-4">
          {/* Mini Waveform Visualization */}
          <div
            className="flex items-center gap-px h-4"
            aria-hidden="true"
          >
            {[3, 5, 4, 6, 3, 5, 4, 6, 5, 3, 4, 5].map((height, i) => (
              <span
                key={i}
                className={cn(
                  "w-0.5 rounded-full transition-all duration-300",
                  isPlaying
                    ? "bg-spiracle-forest animate-pulse"
                    : "bg-muted-foreground/30"
                )}
                style={{
                  height: `${height * 2}px`,
                  animationDelay: isPlaying ? `${i * 100}ms` : "0ms",
                }}
              />
            ))}
          </div>

          {/* Duration & Date */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            {duration && <span>{duration}</span>}
            {duration && date && (
              <span className="opacity-40" aria-hidden="true">
                ·
              </span>
            )}
            {date && <span>{date}</span>}
          </div>
        </div>
      </div>
    </article>
  );
}

export { PodcastCard };
