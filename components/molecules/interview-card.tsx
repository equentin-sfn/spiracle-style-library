"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Quote, Play, ArrowRight } from "lucide-react";
import { AdaptiveIllustration } from "./adaptive-illustration";
import { WaveDecoration } from "@/components/atoms";

export interface InterviewCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Guest photo URL */
  guestPhotoSrc: string;
  /** Guest photo dark mode URL */
  guestPhotoDarkSrc?: string;
  /** Guest name */
  guestName: string;
  /** Guest title/role */
  guestTitle?: string;
  /** Interview title/headline */
  title: string;
  /** Pull quote from the interview */
  pullQuote?: string;
  /** Duration (for audio/video interviews) */
  duration?: string;
  /** Publication date */
  date?: string;
  /** Label (defaults to "INTERVIEW") */
  label?: string;
  /** Link to interview */
  href: string;
  /** Interview format */
  format?: "article" | "audio" | "video";
  /** Callback when play is clicked (for audio/video) */
  onPlayClick?: () => void;
  /** Show the Spiracle wave decoration for audio/video formats (default: true) */
  showWave?: boolean;
}

function InterviewCard({
  guestPhotoSrc,
  guestPhotoDarkSrc,
  guestName,
  guestTitle,
  title,
  pullQuote,
  duration,
  date,
  label = "INTERVIEW",
  href,
  format = "article",
  onPlayClick,
  showWave = true,
  className,
  ...props
}: InterviewCardProps) {
  const hasMedia = format === "audio" || format === "video";
  // Only show wave for audio/video content
  const shouldShowWave = showWave && hasMedia;

  return (
    <article
      className={cn(
        "group relative p-6 sm:p-7",
        "bg-card rounded-sm border border-border/30",
        "transition-all duration-300 ease-out",
        "hover:border-border/50 hover:-translate-y-1",
        "hover:shadow-[0_8px_24px_rgba(45,37,32,0.1),0_2px_8px_rgba(45,37,32,0.06)]",
        "dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.25),0_2px_8px_rgba(0,0,0,0.15)]",
        "overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Subtle wave decoration - brand signature for audio/video content */}
      {shouldShowWave && (
        <WaveDecoration
          className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-20 text-foreground/50 dark:text-foreground"
          opacity={0.2}
        />
      )}
      {/* Header: Guest Photo + Info */}
      <div className="flex items-start gap-4">
        {/* Circular Guest Photo */}
        <div className="relative flex-shrink-0">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-2 ring-border">
            {guestPhotoDarkSrc ? (
              <AdaptiveIllustration
                lightSrc={guestPhotoSrc}
                darkSrc={guestPhotoDarkSrc}
                alt={guestName}
                fill
                className="object-cover"
                sizes="80px"
              />
            ) : (
              <Image
                src={guestPhotoSrc}
                alt={guestName}
                fill
                className="object-cover illustration-adaptive"
                sizes="80px"
              />
            )}
          </div>
          {/* Play button overlay for media formats */}
          {hasMedia && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onPlayClick?.();
              }}
              className={cn(
                "absolute -bottom-1 -right-1",
                "flex items-center justify-center w-7 h-7 rounded-full",
                "bg-primary text-primary-foreground shadow-md",
                "transition-transform duration-200",
                "hover:scale-110 active:scale-95"
              )}
              aria-label={`Play ${format}`}
            >
              <Play className="size-3.5 ml-0.5" fill="currentColor" strokeWidth={0} />
            </button>
          )}
        </div>

        {/* Guest Info */}
        <div className="flex-1 min-w-0 pt-1">
          {/* Label & Meta */}
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold">
              {label}
            </span>
            {duration && (
              <>
                <span className="text-muted-foreground/40" aria-hidden="true">
                  ·
                </span>
                <span className="text-xs text-muted-foreground">
                  {duration}
                </span>
              </>
            )}
          </div>

          {/* Guest Name */}
          <p className="font-display text-lg sm:text-xl text-foreground leading-tight">
            {guestName}
          </p>

          {/* Guest Title */}
          {guestTitle && (
            <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">
              {guestTitle}
            </p>
          )}
        </div>
      </div>

      {/* Interview Title */}
      <Link href={href} className="group/link block mt-5">
        <h3 className="font-serif text-base sm:text-lg text-foreground italic leading-snug line-clamp-2 group-hover/link:text-primary transition-colors duration-200">
          {title}
        </h3>
      </Link>

      {/* Pull Quote */}
      {pullQuote && (
        <div className="relative mt-4 pl-6">
          {/* Quote icon */}
          <Quote
            className="absolute left-0 top-0 size-4 text-primary/50"
            fill="currentColor"
            strokeWidth={0}
            aria-hidden="true"
          />
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 italic">
            {pullQuote}
          </p>
        </div>
      )}

      {/* Footer */}
      <div className="mt-5 pt-4 border-t border-border/50 flex items-center justify-between">
        {date && (
          <span className="text-xs text-muted-foreground">{date}</span>
        )}
        <Link
          href={href}
          className={cn(
            "inline-flex items-center gap-1 text-xs font-medium",
            "text-primary hover:text-primary/80",
            "transition-colors duration-200"
          )}
        >
          {hasMedia ? `Listen to ${format}` : "Read interview"}
          <ArrowRight
            className="size-3 transition-transform duration-200 group-hover:translate-x-0.5"
            strokeWidth={2.5}
          />
        </Link>
      </div>
    </article>
  );
}

export { InterviewCard };
