"use client";

import { cn } from "@/lib/utils";
import { Star } from "@phosphor-icons/react";
import { Separator } from "@/components/atoms";

export interface CriticCardProps extends React.HTMLAttributes<HTMLElement> {
  publication: string;
  publicationLogo?: string;
  rating: number;
  maxRating?: number;
  reviewTitle: string;
  reviewExcerpt: string;
  journalistName: string;
  date: string;
  reviewUrl?: string;
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

function CriticCard({
  publication,
  publicationLogo,
  rating,
  maxRating = 5,
  reviewTitle,
  reviewExcerpt,
  journalistName,
  date,
  reviewUrl,
  className,
  ...props
}: CriticCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col bg-white rounded-xl p-5 sm:p-6",
        className
      )}
      {...props}
    >
      {/* Publication Logo/Name */}
      <header className="mb-4 sm:mb-5">
        {publicationLogo ? (
          <img
            src={publicationLogo}
            alt={publication}
            className="h-6 sm:h-8 w-auto object-contain"
          />
        ) : (
          <p className="font-serif text-lg sm:text-xl font-bold text-foreground">
            {publication}
          </p>
        )}
      </header>

      {/* Star Rating */}
      <StarRating rating={rating} maxRating={maxRating} />

      {/* Review Content */}
      <div className="mt-4 space-y-2 flex-1">
        <h3 className="font-medium text-base sm:text-lg text-foreground">
          {reviewTitle}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-6">
          {reviewExcerpt}
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-4 sm:mt-5">
        <Separator className="mb-3 bg-spiracle-sand" />
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-0.5">
            <p className="text-sm text-muted-foreground">{journalistName}</p>
            <p className="text-xs text-muted-foreground/70">{date}</p>
          </div>
          {reviewUrl && (
            <a
              href={reviewUrl}
              className="text-sm font-medium text-spiracle-terracotta hover:underline whitespace-nowrap"
            >
              Read full review
            </a>
          )}
        </div>
      </footer>
    </article>
  );
}

export { CriticCard };
