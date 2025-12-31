"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms";
import { Play, BookOpen } from "@phosphor-icons/react";

export interface FeaturedTitleProps
  extends React.HTMLAttributes<HTMLElement> {
  /** Book cover image URL */
  coverSrc: string;
  /** Book title */
  title: string;
  /** Author name */
  author: string;
  /** Author link */
  authorHref?: string;
  /** Book synopsis/description */
  synopsis: string;
  /** Narrator name */
  narrator?: string;
  /** Duration display (e.g., "8 hrs 32 mins") */
  duration?: string;
  /** Primary CTA text */
  primaryCtaText?: string;
  /** Primary CTA href */
  primaryCtaHref: string;
  /** Secondary CTA text */
  secondaryCtaText?: string;
  /** Secondary CTA href */
  secondaryCtaHref?: string;
  /** Section label */
  label?: string;
  /** Layout direction */
  layout?: "default" | "reversed";
}

function FeaturedTitle({
  coverSrc,
  title,
  author,
  authorHref,
  synopsis,
  narrator,
  duration,
  primaryCtaText = "Listen now",
  primaryCtaHref,
  secondaryCtaText = "Learn more",
  secondaryCtaHref,
  label = "Featured title",
  layout = "default",
  className,
  ...props
}: FeaturedTitleProps) {
  return (
    <section
      className={cn("py-16 sm:py-20 lg:py-24 bg-background", className)}
      {...props}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Label - Editorial flourish */}
          <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.25em] mb-10 sm:mb-14 text-muted-foreground/70 font-medium">
            <span className="inline-flex items-center gap-3">
              <span className="w-8 h-px bg-border" aria-hidden="true" />
              {label}
              <span className="w-8 h-px bg-border" aria-hidden="true" />
            </span>
          </p>

          {/* Two-Column Layout */}
          <div
            className={cn(
              "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center",
              layout === "reversed" && "lg:grid-flow-dense"
            )}
          >
            {/* Cover Image */}
            <div
              className={cn(
                "relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 w-full",
                layout === "reversed" && "lg:col-start-2"
              )}
            >
              <div className="relative h-full rounded-sm overflow-hidden shadow-[0_25px_50px_-12px_rgba(45,37,32,0.25)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(45,37,32,0.3)] dark:hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]">
                <Image
                  src={coverSrc}
                  alt={`${title} by ${author}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 384px, 512px"
                />
                {/* Subtle inner shadow for depth */}
                <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.15)] pointer-events-none rounded-sm" />
              </div>
              {/* Decorative warm glow */}
              <div
                className="absolute -inset-6 -z-10 rounded-xl bg-gradient-to-br from-spiracle-honey/20 via-spiracle-blush/15 to-transparent dark:from-accent/10 dark:via-transparent blur-xl"
                aria-hidden="true"
              />
            </div>

            {/* Content */}
            <div
              className={cn(
                "flex flex-col",
                layout === "reversed" && "lg:col-start-1"
              )}
            >
              {/* Title */}
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-foreground">
                {title}
              </h2>

              {/* Author */}
              <p className="mt-3 text-lg text-muted-foreground">
                by{" "}
                {authorHref ? (
                  <Link
                    href={authorHref}
                    className="font-medium text-foreground underline underline-offset-2 transition-colors duration-200 hover:text-primary"
                  >
                    {author}
                  </Link>
                ) : (
                  <span className="font-medium text-foreground">{author}</span>
                )}
              </p>

              {/* Meta Info */}
              {(narrator || duration) && (
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-4 text-sm text-muted-foreground">
                  {narrator && (
                    <span>
                      Narrated by{" "}
                      <span className="text-foreground">{narrator}</span>
                    </span>
                  )}
                  {narrator && duration && (
                    <span className="opacity-50" aria-hidden="true">
                      ·
                    </span>
                  )}
                  {duration && <span>{duration}</span>}
                </div>
              )}

              {/* Synopsis */}
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground text-left font-serif">
                {synopsis}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mt-8">
                <Button asChild size="lg">
                  <Link href={primaryCtaHref}>
                    <Play className="size-4 mr-2" weight="fill" />
                    {primaryCtaText}
                  </Link>
                </Button>

                {secondaryCtaHref && (
                  <Button asChild variant="outline" size="lg">
                    <Link href={secondaryCtaHref}>
                      <BookOpen className="size-4 mr-2" weight="regular" />
                      {secondaryCtaText}
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { FeaturedTitle };
