"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  BookCoverActions,
  BookDetails,
  PurchasePanel,
  type BookTag,
  type LinkedValue,
  type BookSeries,
} from "@/components/molecules";
import { PageWrapper } from "@/components/templates";

export interface BookDetailsHeroCover {
  image: string;
  tags: BookTag[];
  onSample?: () => void;
  addToLibraryHref?: string;
  favoriteHref?: string;
}

export interface BookDetailsHeroDetails {
  title: string;
  author: LinkedValue;
  rating: { score: number; count: string };
  bookCount: number;
  userCount: number;
  narrator: LinkedValue;
  length: string;
  publisher: LinkedValue;
  series?: BookSeries;
  spiracleDescription: string;
  publisherDescription: string;
  maxDescriptionLength?: number;
}

export interface BookDetailsHeroPurchase {
  trialMessage: string;
  trialPrice: string;
  trialCtaText: string;
  trialCtaHref: string;
  benefits: string[];
  buyPrice: string;
  memberPrice: string;
  buyCtaHref: string;
}

export interface BookDetailsHeroProps
  extends React.HTMLAttributes<HTMLElement> {
  cover: BookDetailsHeroCover;
  details: BookDetailsHeroDetails;
  purchase: BookDetailsHeroPurchase;
}

function BookDetailsHero({
  cover,
  details,
  purchase,
  className,
  ...props
}: BookDetailsHeroProps) {
  return (
    <section
      className={cn("w-full bg-spiracle-cream py-8 sm:py-12 lg:py-16", className)}
      {...props}
    >
      <PageWrapper>
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[240px_2fr_280px] gap-6 md:gap-8 lg:gap-10">
          {/* Column 1: Cover + Actions */}
          <BookCoverActions
            coverImage={cover.image}
            onSample={cover.onSample}
            addToLibraryHref={cover.addToLibraryHref}
            favoriteHref={cover.favoriteHref}
            tags={cover.tags}
          />

          {/* Column 2: Book Details */}
          <BookDetails
            title={details.title}
            author={details.author}
            rating={details.rating}
            bookCount={details.bookCount}
            userCount={details.userCount}
            narrator={details.narrator}
            length={details.length}
            publisher={details.publisher}
            series={details.series}
            spiracleDescription={details.spiracleDescription}
            publisherDescription={details.publisherDescription}
            maxDescriptionLength={details.maxDescriptionLength}
          />

          {/* Column 3: Purchase Panel */}
          <PurchasePanel
            trialMessage={purchase.trialMessage}
            trialPrice={purchase.trialPrice}
            trialCtaText={purchase.trialCtaText}
            trialCtaHref={purchase.trialCtaHref}
            benefits={purchase.benefits}
            buyPrice={purchase.buyPrice}
            memberPrice={purchase.memberPrice}
            buyCtaHref={purchase.buyCtaHref}
            className="md:col-span-2 lg:col-span-1"
          />
        </div>
      </PageWrapper>
    </section>
  );
}

export { BookDetailsHero };
