"use client";

import Image from "next/image";
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
        "flex flex-col bg-card rounded-sm p-6 sm:p-7 border border-border/30",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:border-border/50",
        "hover:shadow-[0_8px_24px_rgba(45,37,32,0.1),0_2px_8px_rgba(45,37,32,0.06)]",
        "dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.25),0_2px_8px_rgba(0,0,0,0.15)]",
        className
      )}
      {...props}
    >
      {/* Publication Logo/Name */}
      <header className="mb-4">
        {publicationLogo ? (
          <div className="relative h-12 sm:h-14 w-full max-w-[180px] sm:max-w-[220px]">
            <Image
              src={publicationLogo}
              alt={publication}
              fill
              className="object-contain object-left dark:brightness-0 dark:invert dark:opacity-80"
              sizes="220px"
            />
          </div>
        ) : (
          <p className="font-serif text-base sm:text-lg font-semibold text-spiracle-ink dark:text-foreground tracking-[-0.01em]">
            {publication}
          </p>
        )}
      </header>

      {/* Star Rating */}
      <div className="mb-4">
        <StarRating rating={rating} maxRating={maxRating} />
      </div>

      {/* Review Content */}
      <div className="space-y-2.5 flex-1">
        <h3 className="font-medium text-sm sm:text-base text-spiracle-ink dark:text-foreground leading-snug">
          {reviewTitle}
        </h3>
        <p className="text-sm text-spiracle-slate dark:text-muted-foreground leading-[1.65] line-clamp-5 font-serif">
          {reviewExcerpt}
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-5 pt-4 border-t border-spiracle-sand/60 dark:border-border/40">
        <div className="flex items-end justify-between gap-3">
          <div className="space-y-0.5">
            <p className="text-sm text-spiracle-ink dark:text-foreground/80">{journalistName}</p>
            <p className="text-xs text-spiracle-slate/70 dark:text-muted-foreground">{date}</p>
          </div>
          {reviewUrl && (
            <a
              href={reviewUrl}
              className="text-xs font-medium text-spiracle-terracotta hover:underline underline-offset-2 whitespace-nowrap transition-colors duration-200"
            >
              Read full review →
            </a>
          )}
        </div>
      </footer>
    </article>
  );
}

export { CriticCard };
