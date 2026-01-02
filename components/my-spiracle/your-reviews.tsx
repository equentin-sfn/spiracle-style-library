"use client";

// =============================================================================
// YOUR REVIEWS
// Reviews with star ratings and helpfulness counts
// =============================================================================

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms";
import {
  Heart,
  MessageSquare,
  ChevronRight,
} from "lucide-react";
import { Section, SectionLabel, BookCover, StarRating } from "./helpers";
import type { Review } from "./types";
import { sampleReviews } from "./sample-data";

export interface YourReviewsProps {
  reviews: Review[];
  totalHelpfulVotes: number;
  maxVisible?: number;
  onViewAll?: () => void;
  onWriteReview?: () => void;
  className?: string;
}

export function YourReviews({
  reviews,
  totalHelpfulVotes,
  maxVisible = 3,
  onViewAll,
  onWriteReview,
  className,
}: YourReviewsProps) {
  const visibleReviews = reviews.slice(0, maxVisible);

  return (
    <Section className={className}>
      <SectionLabel href="/reviews">Your reviews</SectionLabel>

      {reviews.length > 0 ? (
        <>
          {/* Helpful votes summary */}
          <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
            <Heart className="size-4 text-spiracle-terracotta" />
            <span>
              Your reviews have helped{" "}
              <span className="text-foreground font-medium">
                {totalHelpfulVotes} readers
              </span>{" "}
              find their next book
            </span>
          </div>

          {/* Reviews list */}
          <div className="space-y-4">
            {visibleReviews.map((review) => (
              <div
                key={review.id}
                className="flex gap-3 bg-spiracle-parchment dark:bg-card rounded-lg p-4 border border-spiracle-sand dark:border-border"
              >
                <BookCover title={review.book.title} size="sm" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div>
                      <h4 className="font-medium text-foreground text-sm truncate">
                        {review.book.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {review.book.author}
                      </p>
                    </div>
                    <StarRating rating={review.rating} />
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 italic">
                    "{review.excerpt}"
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-2">
                    {review.helpfulCount} found this helpful
                  </p>
                </div>
              </div>
            ))}
          </div>

          {reviews.length > maxVisible && (
            <Button variant="ghost" size="sm" className="mt-4 w-full" onClick={onViewAll}>
              View all {reviews.length} reviews
              <ChevronRight className="size-4 ml-1" />
            </Button>
          )}
        </>
      ) : (
        /* Empty state */
        <div className="text-center py-8">
          <MessageSquare className="size-10 text-muted-foreground/30 mx-auto mb-3" />
          <h3 className="font-medium text-foreground mb-1">
            Books waiting for your thoughts
          </h3>
          <p className="text-sm text-muted-foreground mb-4 max-w-xs mx-auto">
            Your perspective matters. Share what moved you, what surprised
            you, what stayed with you.
          </p>
          <Button variant="outline" size="sm" onClick={onWriteReview}>
            Review a recent listen
          </Button>
        </div>
      )}
    </Section>
  );
}

// Default props for style guide display
YourReviews.defaultProps = {
  reviews: sampleReviews,
  totalHelpfulVotes: 39,
  maxVisible: 3,
};
