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
      className={cn("w-full bg-spiracle-cream py-12 sm:py-16 lg:py-20", className)}
      {...props}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <header className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-spiracle-slate">
            {sectionLabel}
          </h2>
        </header>

        {/* Critics Grid - 3 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
