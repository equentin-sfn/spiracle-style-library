"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Star, Clock, Heart } from "@phosphor-icons/react";

export interface ReviewCardProps extends React.HTMLAttributes<HTMLElement> {
  /** URL to reviewer's avatar image */
  avatarUrl: string;
  /** Reviewer's display name */
  reviewerName: string;
  /** Rating from 1-5 */
  rating: number;
  /** Review title/headline */
  title: string;
  /** Review body text */
  body: string;
  /** Time since review was posted (e.g., "1 month ago") */
  timeAgo: string;
  /** Number of likes */
  likes: number;
}

function StarRating({
  rating,
  maxRating = 5,
}: {
  rating: number;
  maxRating?: number;
}) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of ${maxRating} stars`}>
      {Array.from({ length: maxRating }, (_, i) => (
        <Star
          key={i}
          size={18}
          weight={i < rating ? "fill" : "regular"}
          className={i < rating ? "text-spiracle-terracotta" : "text-spiracle-sand"}
        />
      ))}
    </div>
  );
}

function ReviewCard({
  avatarUrl,
  reviewerName,
  rating,
  title,
  body,
  timeAgo,
  likes,
  className,
  ...props
}: ReviewCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col bg-white dark:bg-card rounded-sm p-4 sm:p-5",
        "transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]",
        className
      )}
      {...props}
    >
      {/* Header: Avatar + Name + Rating */}
      <header className="flex items-start gap-3 mb-3">
        <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-spiracle-sand/50">
          <Image
            src={avatarUrl}
            alt={`${reviewerName}'s avatar`}
            fill
            className="object-cover"
            sizes="36px"
          />
        </div>
        <div className="flex-1 min-w-0">
          <span className="font-medium text-sm text-spiracle-ink dark:text-foreground block truncate">
            {reviewerName}
          </span>
          <div className="mt-0.5">
            <StarRating rating={rating} />
          </div>
        </div>
      </header>

      {/* Review Content */}
      <div className="flex-1 mb-4">
        <h3 className="font-serif text-base sm:text-lg font-medium text-spiracle-ink dark:text-foreground mb-1.5 leading-snug">
          {title}
        </h3>
        <p className="text-sm text-spiracle-ink/80 dark:text-foreground/70 leading-[1.6] line-clamp-4">
          {body}
        </p>
      </div>

      {/* Footer: Time + Likes */}
      <footer className="flex items-center justify-between text-spiracle-slate/70 dark:text-muted-foreground pt-3 border-t border-spiracle-sand/40 dark:border-border/30">
        <div className="flex items-center gap-1.5">
          <Clock size={14} weight="regular" />
          <span className="text-xs">{timeAgo}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Heart size={14} weight="regular" />
          <span className="text-xs">{likes}</span>
        </div>
      </footer>
    </article>
  );
}

export { ReviewCard };
