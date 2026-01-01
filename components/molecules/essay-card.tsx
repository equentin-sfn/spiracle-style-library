"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Clock, ArrowRight } from "lucide-react";

/**
 * EssayCard - Multi-Platform Excellence
 *
 * Touch: Clean, functional card with clear tap target
 * Desktop: Hover brings subtle lift, shadow, image scale, and title color change
 *
 * Hover states are scoped to desktop via CSS @media (hover: hover) in globals.css
 */

export interface EssayCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Essay thumbnail/featured image URL */
  imageSrc: string;
  /** Essay title */
  title: string;
  /** Author name */
  author: string;
  /** Author link */
  authorHref?: string;
  /** Essay excerpt/description */
  excerpt?: string;
  /** Reading time (e.g., "8 min read") */
  readingTime?: string;
  /** Publication date */
  date?: string;
  /** Category or type label (defaults to "ESSAY") */
  label?: string;
  /** Link to essay */
  href: string;
  /** Card layout variant */
  variant?: "default" | "horizontal" | "featured";
}

function EssayCard({
  imageSrc,
  title,
  author,
  authorHref,
  excerpt,
  readingTime,
  date,
  label = "ESSAY",
  href,
  variant = "default",
  className,
  ...props
}: EssayCardProps) {
  const isHorizontal = variant === "horizontal";
  const isFeatured = variant === "featured";

  return (
    <article
      data-slot="essay-card"
      className={cn(
        "group relative book-spine",
        "bg-card rounded-sm border border-border/30 overflow-hidden",
        // Transitions for hover effects (applied via CSS media query)
        "transition-all duration-300 ease-out",
        isHorizontal && "flex flex-row",
        isFeatured && "md:flex md:flex-row",
        className
      )}
      {...props}
    >
      {/* Image */}
      <div
        className={cn(
          "relative overflow-hidden bg-muted",
          isHorizontal
            ? "w-40 sm:w-48 flex-shrink-0"
            : isFeatured
            ? "aspect-[16/9] md:w-1/2 md:aspect-auto md:min-h-[280px]"
            : "aspect-[16/9]"
        )}
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          data-slot="essay-card-image"
          className="object-cover transition-transform duration-300"
          sizes={
            isHorizontal
              ? "192px"
              : isFeatured
              ? "(max-width: 768px) 100vw, 50vw"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
        />
        {/* Gradient overlay for featured */}
        {isFeatured && (
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:bg-gradient-to-r"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Content */}
      <div
        className={cn(
          "flex flex-col",
          isHorizontal
            ? "flex-1 p-4"
            : isFeatured
            ? "p-5 sm:p-6 md:flex-1 md:p-8 md:justify-center"
            : "p-4 sm:p-5"
        )}
      >
        {/* Label */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            {label}
          </span>
          {readingTime && (
            <>
              <span className="text-muted-foreground/40" aria-hidden="true">
                ·
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="size-3" strokeWidth={1.5} />
                {readingTime}
              </span>
            </>
          )}
        </div>

        {/* Title */}
        <Link href={href} data-slot="essay-card-title-link">
          <h3
            data-slot="essay-card-title"
            className={cn(
              "font-display text-foreground leading-snug",
              "transition-colors duration-200",
              isHorizontal
                ? "text-base sm:text-lg line-clamp-2"
                : isFeatured
                ? "text-xl sm:text-2xl md:text-3xl line-clamp-3"
                : "text-lg sm:text-xl line-clamp-2"
            )}
          >
            {title}
          </h3>
        </Link>

        {/* Author */}
        <p
          className={cn(
            "mt-2 text-sm text-muted-foreground",
            isHorizontal && "hidden sm:block"
          )}
        >
          by{" "}
          {authorHref ? (
            <Link
              href={authorHref}
              data-slot="essay-card-author-link"
              className="text-foreground transition-colors duration-200"
            >
              {author}
            </Link>
          ) : (
            <span className="text-foreground">{author}</span>
          )}
        </p>

        {/* Excerpt (for featured only) */}
        {excerpt && isFeatured && (
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3 hidden md:block">
            {excerpt}
          </p>
        )}

        {/* Footer */}
        <div
          className={cn(
            "mt-auto pt-3 flex items-center justify-between",
            isHorizontal && "hidden sm:flex"
          )}
        >
          {date && (
            <span className="text-xs text-muted-foreground">{date}</span>
          )}
          <Link
            href={href}
            data-slot="essay-card-read-link"
            className={cn(
              "inline-flex items-center gap-1.5 text-xs font-medium",
              "text-primary link-underline",
              // 44px touch target
              "min-h-[44px] items-center",
              "transition-colors duration-200"
            )}
          >
            Read essay
            <ArrowRight
              data-slot="essay-card-arrow"
              className="size-3 transition-transform duration-200"
              strokeWidth={2.5}
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

export { EssayCard };
