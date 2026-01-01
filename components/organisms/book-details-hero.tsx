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
  type PurchaseFormat,
  type Collection,
} from "@/components/molecules";
import { PageWrapper } from "@/components/templates";

// Re-export FormatType for consumers
export type FormatType = "audiobook" | "aiac" | "ebook" | "hardback" | "paperback";

export interface BookDetailsHeroCover {
  image: string;
  /** Image variants for different formats (e.g., AIAC card image) */
  formatImages?: Partial<Record<FormatType, string>>;
  tags: BookTag[];
  addToLibraryHref?: string;
  favoriteHref?: string;
  /** Author name (for sample player) */
  author?: string;
  /** Narrator name (for sample player) */
  narrator?: string;
  /** Sample duration e.g. "4:43" (for sample player) */
  sampleDuration?: string;
  /** Sample audio URL (for sample player) */
  sampleUrl?: string;
  /** User's collections for Add to Collection modal */
  collections?: Collection[];
  /** IDs of collections this book is already in */
  selectedCollectionIds?: string[];
  /** Callback when collections are saved */
  onSaveCollections?: (collectionIds: string[]) => void;
  /** Callback when a new collection is created */
  onCreateCollection?: (name: string) => void;
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
  /** Trial message (audiobook only) */
  trialMessage: string;
  /** Trial price display (audiobook only) */
  trialPrice: string;
  /** Trial CTA text (audiobook only) */
  trialCtaText: string;
  /** Trial/purchase href */
  trialCtaHref: string;
  /** Benefits list (audiobook trial) */
  benefits: string[];
  /** Buy price for non-members */
  buyPrice: string;
  /** Member price */
  memberPrice: string;
  /** Buy CTA href */
  buyCtaHref: string;
  /** Checkout href for physical/ebook formats */
  checkoutHref?: string;
}

export interface BookDetailsHeroProps
  extends React.HTMLAttributes<HTMLElement> {
  cover: BookDetailsHeroCover;
  details: BookDetailsHeroDetails;
  purchase: BookDetailsHeroPurchase;
  /** Available formats for this title */
  formats?: PurchaseFormat[];
  /** Default selected format */
  defaultFormat?: FormatType;
  /** Controlled selected format */
  selectedFormat?: FormatType;
  /** Callback when format changes */
  onFormatChange?: (format: FormatType) => void;
}

function BookDetailsHero({
  cover,
  details,
  purchase,
  formats = [],
  defaultFormat = "audiobook",
  selectedFormat: controlledFormat,
  onFormatChange,
  className,
  ...props
}: BookDetailsHeroProps) {
  // Internal state for format selection
  const [internalFormat, setInternalFormat] = React.useState<FormatType>(defaultFormat);

  // Use controlled value if provided
  const currentFormat = controlledFormat ?? internalFormat;

  const handleFormatChange = (format: FormatType) => {
    if (controlledFormat === undefined) {
      setInternalFormat(format);
    }
    onFormatChange?.(format);
  };

  // Get format-specific image
  const isPhysicalProduct = currentFormat === "aiac" || currentFormat === "hardback" || currentFormat === "paperback";
  const formatImage = cover.formatImages?.[currentFormat];

  return (
    <section
      className={cn("w-full bg-background pt-6 pb-10 sm:pt-8 sm:pb-12 lg:pt-10 lg:pb-16", className)}
      {...props}
    >
      <PageWrapper>
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[300px_1fr_320px] gap-8 md:gap-8 lg:gap-10 items-start">
          {/* Column 1: Cover + Actions */}
          <BookCoverActions
            bookTitle={details.title}
            coverImage={cover.image}
            coverImageOverride={formatImage}
            isPhysicalProduct={isPhysicalProduct}
            author={cover.author}
            narrator={cover.narrator}
            sampleDuration={cover.sampleDuration}
            sampleUrl={cover.sampleUrl}
            tags={cover.tags}
            collections={cover.collections}
            selectedCollectionIds={cover.selectedCollectionIds}
            onSaveCollections={cover.onSaveCollections}
            onCreateCollection={cover.onCreateCollection}
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

          {/* Column 3: Unified Purchase Panel with Format Tabs */}
          <PurchasePanel
            formats={formats}
            selectedFormat={currentFormat}
            onFormatChange={handleFormatChange}
            trialMessage={purchase.trialMessage}
            trialPrice={purchase.trialPrice}
            trialCtaText={purchase.trialCtaText}
            trialCtaHref={purchase.trialCtaHref}
            benefits={purchase.benefits}
            buyPrice={purchase.buyPrice}
            memberPrice={purchase.memberPrice}
            buyCtaHref={purchase.buyCtaHref}
            checkoutHref={purchase.checkoutHref}
            className="md:col-span-2 lg:col-span-1"
          />
        </div>
      </PageWrapper>
    </section>
  );
}

export { BookDetailsHero };
