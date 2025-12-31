"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Quotes, Play, ArrowRight } from "@phosphor-icons/react";

export interface InterviewCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Guest photo URL */
  guestPhotoSrc: string;
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
}

function InterviewCard({
  guestPhotoSrc,
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
  className,
  ...props
}: InterviewCardProps) {
  const hasMedia = format === "audio" || format === "video";

  return (
    <article
      className={cn(
        "group relative p-5 sm:p-6",
        "bg-card rounded-sm border border-border/50",
        "transition-all duration-200 ease-out",
        "hover:border-border hover:shadow-sm",
        className
      )}
      {...props}
    >
      {/* Header: Guest Photo + Info */}
      <div className="flex items-start gap-4">
        {/* Circular Guest Photo */}
        <div className="relative flex-shrink-0">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden ring-2 ring-spiracle-sand">
            <Image
              src={guestPhotoSrc}
              alt={guestName}
              fill
              className="object-cover"
              sizes="80px"
            />
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
                "bg-spiracle-forest text-white shadow-md",
                "transition-transform duration-200",
                "hover:scale-110 active:scale-95"
              )}
              aria-label={`Play ${format}`}
            >
              <Play className="size-3.5 ml-0.5" weight="fill" />
            </button>
          )}
        </div>

        {/* Guest Info */}
        <div className="flex-1 min-w-0 pt-1">
          {/* Label & Meta */}
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-spiracle-terracotta font-semibold">
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
        <h3 className="font-serif text-base sm:text-lg text-foreground italic leading-snug line-clamp-2 group-hover/link:text-spiracle-forest transition-colors duration-200">
          {title}
        </h3>
      </Link>

      {/* Pull Quote */}
      {pullQuote && (
        <div className="relative mt-4 pl-6">
          {/* Quote icon */}
          <Quotes
            className="absolute left-0 top-0 size-4 text-spiracle-terracotta/50"
            weight="fill"
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
            "text-spiracle-forest hover:text-spiracle-forest/80",
            "transition-colors duration-200"
          )}
        >
          {hasMedia ? `Listen to ${format}` : "Read interview"}
          <ArrowRight
            className="size-3 transition-transform duration-200 group-hover:translate-x-0.5"
            weight="bold"
          />
        </Link>
      </div>
    </article>
  );
}

export { InterviewCard };
