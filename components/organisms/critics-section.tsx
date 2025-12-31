"use client";

import { cn } from "@/lib/utils";
import { CriticCard } from "@/components/molecules";

export interface CriticReview {
  publication: string;
  publicationLogo?: string;
  rating: number;
  reviewTitle: string;
  reviewExcerpt: string;
  journalistName: string;
  date: string;
  reviewUrl?: string;
}

export interface CriticsSectionProps extends React.HTMLAttributes<HTMLElement> {
  sectionLabel?: string;
  reviews: CriticReview[];
}

function CriticsSection({
  sectionLabel = "What the critics are saying",
  reviews,
  className,
  ...props
}: CriticsSectionProps) {
  return (
    <section
      className={cn("w-full bg-background py-14 sm:py-18 lg:py-24", className)}
      {...props}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header - Editorial style */}
        <header className="text-center mb-10 sm:mb-12 lg:mb-14">
          <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground/70 font-medium">
            <span className="inline-flex items-center gap-3">
              <span className="w-8 h-px bg-border" aria-hidden="true" />
              {sectionLabel}
              <span className="w-8 h-px bg-border" aria-hidden="true" />
            </span>
          </p>
        </header>

        {/* Critics Grid - 3 columns on large screens with stagger animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 stagger-children">
          {reviews.map((review, index) => (
            <CriticCard
              key={index}
              publication={review.publication}
              publicationLogo={review.publicationLogo}
              rating={review.rating}
              reviewTitle={review.reviewTitle}
              reviewExcerpt={review.reviewExcerpt}
              journalistName={review.journalistName}
              date={review.date}
              reviewUrl={review.reviewUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { CriticsSection };
