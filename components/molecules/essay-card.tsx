"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Clock, ArrowRight } from "@phosphor-icons/react";

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
      className={cn(
        "group relative book-spine",
        "bg-card rounded-sm border border-border/30 overflow-hidden",
        "transition-all duration-300 ease-out",
        "hover:border-border/50 hover:-translate-y-1",
        "hover:shadow-[0_8px_24px_rgba(45,37,32,0.1),0_2px_8px_rgba(45,37,32,0.06)]",
        "dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.25),0_2px_8px_rgba(0,0,0,0.15)]",
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
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
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
                <Clock className="size-3" weight="regular" />
                {readingTime}
              </span>
            </>
          )}
        </div>

        {/* Title */}
        <Link href={href} className="group/link">
          <h3
            className={cn(
              "font-display text-foreground leading-snug",
              "group-hover/link:text-primary transition-colors duration-200",
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
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              {author}
            </Link>
          ) : (
            <span className="text-foreground">{author}</span>
          )}
        </p>

        {/* Excerpt (for featured only) */}
        {excerpt && isFeatured && (
          <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3 hidden md:block font-serif">
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
            className={cn(
              "inline-flex items-center gap-1.5 text-xs font-medium",
              "text-primary link-underline",
              "transition-colors duration-200"
            )}
          >
            Read essay
            <ArrowRight
              className="size-3 transition-transform duration-200 group-hover:translate-x-1"
              weight="bold"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

export { EssayCard };
