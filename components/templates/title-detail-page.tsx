"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  TopNavigation,
  BookDetailsHero,
  GridSection,
  CarouselSection,
  QuoteSection,
  CollectionShowcase,
  type NavItem,
  type BookDetailsHeroCover,
  type BookDetailsHeroDetails,
  type BookDetailsHeroPurchase,
} from "@/components/organisms";
import { InfoBar, type InfoBarItem, type PurchaseFormat, type FormatType } from "@/components/molecules";

export interface TitleDetailPageProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Navigation items for TopNavigation */
  navItems: NavItem[];
  /** Book cover and actions data */
  cover: BookDetailsHeroCover;
  /** Book details data */
  details: BookDetailsHeroDetails;
  /** Purchase options data */
  purchase: BookDetailsHeroPurchase;
  /** Available formats for this title */
  formats?: PurchaseFormat[];
  /** Default selected format */
  defaultFormat?: FormatType;
  /** Metadata items for InfoBar */
  metadataItems: InfoBarItem[];
  /** Collections section label */
  collectionsLabel?: string;
  /** Collections section content (grid of CollectionCards) */
  collectionsContent?: React.ReactNode;
  /** Collection showcase - featured collection name */
  showcaseCollectionName?: string;
  /** Collection showcase - featured collection description */
  showcaseCollectionDescription?: string;
  /** Collection showcase - 5 book cover images from the collection */
  showcaseCollectionImages?: string[];
  /** Critics section label */
  criticsLabel?: string;
  /** Critics section content */
  criticsContent?: React.ReactNode;
  /** Community reviews section label */
  communityLabel?: string;
  /** Community reviews section content */
  communityContent?: React.ReactNode;
  /** Community reviews "See more" link */
  communitySeeMoreHref?: string;
  /** More by author section label */
  moreByAuthorLabel?: string;
  /** More by author section content */
  moreByAuthorContent?: React.ReactNode;
  /** Similar books section label */
  similarBooksLabel?: string;
  /** Similar books section content */
  similarBooksContent?: React.ReactNode;
  /** Handler for search action */
  onSearch?: () => void;
  /** Handler for cart action */
  onCart?: () => void;
  /** Login page href */
  loginHref?: string;
  /** Join page href */
  joinHref?: string;
  /** Logo link destination */
  logoHref?: string;
}

function TitleDetailPage({
  navItems,
  cover,
  details,
  purchase,
  formats,
  defaultFormat,
  metadataItems,
  collectionsLabel = "FOUND IN THE FOLLOWING COLLECTIONS",
  collectionsContent,
  showcaseCollectionName,
  showcaseCollectionDescription,
  showcaseCollectionImages,
  criticsLabel = "WHAT THE CRITICS ARE SAYING",
  criticsContent,
  communityLabel = "WHAT OUR COMMUNITY IS SAYING",
  communityContent,
  communitySeeMoreHref,
  moreByAuthorLabel,
  moreByAuthorContent,
  similarBooksLabel = "BOOKS WITH A SIMILAR VIBE",
  similarBooksContent,
  onSearch,
  onCart,
  loginHref = "/login",
  joinHref = "/join",
  logoHref,
  className,
  ...props
}: TitleDetailPageProps) {
  return (
    <div
      className={cn("min-h-screen bg-background", className)}
      {...props}
    >
      {/* 1. TopNavigation */}
      <TopNavigation
        navItems={navItems}
        onSearch={onSearch}
        onCart={onCart}
        loginHref={loginHref}
        joinHref={joinHref}
        logoHref={logoHref}
      />

      {/* 2. BookDetailsHero */}
      <BookDetailsHero
        cover={cover}
        details={details}
        purchase={purchase}
        formats={formats}
        defaultFormat={defaultFormat}
      />

      {/* 3. MetadataBar (InfoBar) - subtle warm tint */}
      <InfoBar items={metadataItems} />

      {/* 4a. Collections Grid Section - soft blush/rose */}
      {collectionsContent && (
        <GridSection
          label={collectionsLabel}
          background="blush"
          columns={3}
        >
          {collectionsContent}
        </GridSection>
      )}

      {/* 5. Critics Quote Section - cream/warm white */}
      {criticsContent && (
        <QuoteSection
          label={criticsLabel}
          background="cream"
          columns={3}
        >
          {criticsContent}
        </QuoteSection>
      )}

      {/* 6. Community Reviews Grid - soft sage/lavender */}
      {communityContent && (
        <GridSection
          label={communityLabel}
          background="sage"
          columns={4}
          gap="md"
          seeMoreHref={communitySeeMoreHref}
          seeMoreLabel="See more reviews →"
        >
          {communityContent}
        </GridSection>
      )}

      {/* 7. More by Author Carousel - cream */}
      {moreByAuthorContent && moreByAuthorLabel && (
        <CarouselSection
          label={moreByAuthorLabel}
          background="cream"
          gap="lg"
        >
          {moreByAuthorContent}
        </CarouselSection>
      )}

      {/* 8. Similar Books Carousel - pale honey */}
      {similarBooksContent && (
        <CarouselSection
          label={similarBooksLabel}
          background="honey"
          gap="lg"
        >
          {similarBooksContent}
        </CarouselSection>
      )}

      {/* 9. Collection Showcase - bento grid with featured collection at bottom */}
      {showcaseCollectionName && showcaseCollectionImages && (
        <CollectionShowcase
          sectionLabel="EXPLORE THIS COLLECTION"
          collectionName={showcaseCollectionName}
          collectionDescription={showcaseCollectionDescription || ""}
          coverImages={showcaseCollectionImages}
        />
      )}
    </div>
  );
}

export { TitleDetailPage };
