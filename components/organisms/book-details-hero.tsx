"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  BookCoverActions,
  BookDetails,
  PurchasePanel,
  FormatSelector,
  getFormatDescription,
  type BookTag,
  type LinkedValue,
  type BookSeries,
  type Format,
  type FormatType,
} from "@/components/molecules";
import { PageWrapper } from "@/components/templates";

export interface BookDetailsHeroCover {
  image: string;
  /** Image variants for different formats (e.g., AIAC card image) */
  formatImages?: Partial<Record<FormatType, string>>;
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
  /** Available formats for this title (if empty/single, selector hidden) */
  formats?: Format[];
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
  // Internal state for uncontrolled mode
  const [internalFormat, setInternalFormat] = React.useState<FormatType>(defaultFormat);

  // Use controlled value if provided, otherwise use internal state
  const currentFormat = controlledFormat ?? internalFormat;

  const handleFormatChange = (format: FormatType) => {
    if (controlledFormat === undefined) {
      setInternalFormat(format);
    }
    onFormatChange?.(format);
  };

  // Get format-specific data
  const selectedFormatData = formats.find((f) => f.type === currentFormat);
  const isPhysicalProduct = currentFormat === "aiac" || currentFormat === "hardback" || currentFormat === "paperback";
  const formatImage = cover.formatImages?.[currentFormat];

  // Get format-specific pricing
  const formatPrice = selectedFormatData?.price;
  const formatMemberPrice = selectedFormatData?.memberPrice;
  const formatDescription = getFormatDescription(currentFormat);

  // Build purchase panel props based on format
  const purchaseProps = {
    ...purchase,
    // Override prices if format has specific pricing
    ...(formatPrice !== undefined && {
      buyPrice: `£${formatPrice.toFixed(2)}`,
    }),
    ...(formatMemberPrice !== undefined && {
      memberPrice: `£${formatMemberPrice.toFixed(2)}`,
    }),
  };

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

          {/* Column 3: Format Selector + Purchase Panel */}
          <div className="md:col-span-2 lg:col-span-1 flex flex-col gap-4">
            {/* Format Selector - only shows if 2+ formats */}
            {formats.length > 1 && (
              <div className="flex flex-col gap-2">
                <FormatSelector
                  formats={formats}
                  selectedFormat={currentFormat}
                  onFormatChange={handleFormatChange}
                />
                {/* Format description */}
                {formatDescription && (
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {formatDescription}
                  </p>
                )}
              </div>
            )}

            <PurchasePanel
              trialMessage={purchaseProps.trialMessage}
              trialPrice={purchaseProps.trialPrice}
              trialCtaText={purchaseProps.trialCtaText}
              trialCtaHref={purchaseProps.trialCtaHref}
              benefits={purchaseProps.benefits}
              buyPrice={purchaseProps.buyPrice}
              memberPrice={purchaseProps.memberPrice}
              buyCtaHref={purchaseProps.buyCtaHref}
            />
          </div>
        </div>
      </PageWrapper>
    </section>
  );
}

export { BookDetailsHero };
