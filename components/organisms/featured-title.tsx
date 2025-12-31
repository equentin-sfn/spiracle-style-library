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
  /** Background variant */
  variant?: "cream" | "white" | "dark";
  /** Layout direction */
  layout?: "default" | "reversed";
}

const variantStyles = {
  cream: {
    bg: "bg-spiracle-cream",
    text: "text-foreground",
    muted: "text-muted-foreground",
    border: "border-border",
  },
  white: {
    bg: "bg-white",
    text: "text-foreground",
    muted: "text-muted-foreground",
    border: "border-border",
  },
  dark: {
    bg: "bg-[#2D2520]",
    text: "text-white",
    muted: "text-white/70",
    border: "border-white/20",
  },
};

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
  variant = "cream",
  layout = "default",
  className,
  ...props
}: FeaturedTitleProps) {
  const styles = variantStyles[variant];
  const isDark = variant === "dark";

  return (
    <section
      className={cn("py-16 sm:py-20 lg:py-24", styles.bg, className)}
      {...props}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Label */}
          <p
            className={cn(
              "text-xs sm:text-sm uppercase tracking-[0.2em] mb-8 sm:mb-12",
              styles.muted
            )}
          >
            {label}
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
              <div className="relative h-full rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src={coverSrc}
                  alt={`${title} by ${author}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 384px, 512px"
                />
              </div>
              {/* Decorative shadow */}
              <div
                className={cn(
                  "absolute -inset-4 -z-10 rounded-lg",
                  isDark
                    ? "bg-gradient-to-br from-spiracle-terracotta/10 to-transparent"
                    : "bg-gradient-to-br from-spiracle-sand/50 to-transparent"
                )}
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
              <h2
                className={cn(
                  "font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight",
                  styles.text
                )}
              >
                {title}
              </h2>

              {/* Author */}
              <p className={cn("mt-3 text-lg", styles.muted)}>
                by{" "}
                {authorHref ? (
                  <Link
                    href={authorHref}
                    className={cn(
                      "font-medium underline underline-offset-2 transition-colors duration-200",
                      isDark
                        ? "text-white hover:text-spiracle-honey"
                        : "text-foreground hover:text-spiracle-forest"
                    )}
                  >
                    {author}
                  </Link>
                ) : (
                  <span className="font-medium">{author}</span>
                )}
              </p>

              {/* Meta Info */}
              {(narrator || duration) && (
                <div
                  className={cn(
                    "flex flex-wrap items-center gap-x-4 gap-y-1 mt-4 text-sm",
                    styles.muted
                  )}
                >
                  {narrator && (
                    <span>
                      Narrated by{" "}
                      <span className={styles.text}>{narrator}</span>
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
              <p
                className={cn(
                  "mt-6 text-base sm:text-lg leading-relaxed",
                  styles.muted
                )}
              >
                {synopsis}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mt-8">
                <Button
                  asChild
                  size="lg"
                  className={cn(
                    isDark
                      ? "bg-spiracle-honey text-[#2D2520] hover:bg-spiracle-honey/90"
                      : "bg-spiracle-forest text-white hover:bg-spiracle-forest/90"
                  )}
                >
                  <Link href={primaryCtaHref}>
                    <Play className="size-4 mr-2" weight="fill" />
                    {primaryCtaText}
                  </Link>
                </Button>

                {secondaryCtaHref && (
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className={cn(
                      isDark
                        ? "border-white/30 text-white hover:bg-white/10"
                        : "border-foreground/20 hover:bg-secondary/50"
                    )}
                  >
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
