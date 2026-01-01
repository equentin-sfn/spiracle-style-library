"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { MinimalDotTag, BelowCoverTag, CornerBadge, type TagVariant } from "@/components/atoms";

/**
 * BookCard - Multi-Platform Excellence
 *
 * Touch: Clean, functional card with clear tap target
 * Desktop: Hover brings subtle lift, shadow, and cover animation
 *
 * Hover states are scoped to desktop via CSS @media (hover: hover) in globals.css
 */

export type TagStyle = "minimal" | "bold";

export interface BookCardProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  author: string;
  coverImage: string;
  /** Optional tag displayed in footer */
  tag?: TagVariant;
  /** Tag style: "minimal" (default, subtle dot) or "bold" (solid background) */
  tagStyle?: TagStyle;
  /** Optional badge displayed on cover (use sparingly - only for FREE, 50% OFF, etc.) */
  badge?: TagVariant;
  /** Hide the "Included in Premium" text */
  hidePremiumLabel?: boolean;
}

function BookCard({
  title,
  author,
  coverImage,
  tag,
  tagStyle = "minimal",
  badge,
  hidePremiumLabel = false,
  className,
  ...props
}: BookCardProps) {
  return (
    <article
      data-slot="book-card"
      className={cn(
        "group flex flex-col overflow-hidden rounded-sm bg-card book-spine",
        // Transitions for hover effects (applied via CSS media query)
        "transition-all duration-300 ease-out",
        className
      )}
      {...props}
    >
      {/* Cover Image - square with subtle vignette */}
      <figure className="relative aspect-square w-full overflow-hidden">
        <Image
          src={coverImage}
          alt={`Book cover: ${title} by ${author}`}
          fill
          data-slot="book-card-cover"
          className="object-cover transition-transform duration-300 ease-out"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
        {/* Subtle inner shadow for depth */}
        <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none" />
        {/* Optional corner badge for promotions */}
        {badge && <CornerBadge variant={badge} position="top-left" />}
      </figure>

      {/* Footer with tag, title, author, premium text */}
      <footer className={cn(
        "px-3 py-3 sm:px-4 sm:py-4 bg-card border-t border-border/20",
        tag ? "space-y-2" : "space-y-1"
      )}>
        {/* Optional tag */}
        {tag && tagStyle === "minimal" && <MinimalDotTag variant={tag} />}
        {tag && tagStyle === "bold" && <BelowCoverTag variant={tag} />}

        <h3 className="font-serif text-sm sm:text-base text-foreground line-clamp-1 leading-snug tracking-tight">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-1 italic">
          {author}
        </p>
        {!hidePremiumLabel && (
          <p className="text-[0.6rem] text-primary/70 uppercase tracking-[0.15em] pt-1 font-medium">
            Included in Premium
          </p>
        )}
      </footer>
    </article>
  );
}

export { BookCard };
