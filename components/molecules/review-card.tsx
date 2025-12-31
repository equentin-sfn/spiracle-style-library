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
        "flex flex-col bg-white rounded-sm p-4 sm:p-5",
        className
      )}
      {...props}
    >
      {/* Header: Avatar + Name */}
      <header className="flex items-center gap-3 mb-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={avatarUrl}
            alt={`${reviewerName}'s avatar`}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <span className="font-medium text-sm text-spiracle-ink">
          {reviewerName}
        </span>
      </header>

      {/* Star Rating */}
      <div className="mb-3">
        <StarRating rating={rating} />
      </div>

      {/* Review Content */}
      <div className="flex-1 mb-4">
        <h3 className="font-serif text-lg font-medium text-spiracle-ink mb-2">
          {title}
        </h3>
        <p className="text-sm text-spiracle-ink leading-relaxed">
          {body}
        </p>
      </div>

      {/* Footer: Time + Likes */}
      <footer className="flex items-center justify-between text-spiracle-slate">
        <div className="flex items-center gap-1.5">
          <Clock size={16} weight="regular" />
          <span className="text-xs">{timeAgo}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Heart size={16} weight="regular" />
          <span className="text-xs">{likes}</span>
        </div>
      </footer>
    </article>
  );
}

export { ReviewCard };
