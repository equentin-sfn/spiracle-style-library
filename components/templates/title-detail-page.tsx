"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
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
import { InfoBar, type InfoBarItem } from "@/components/molecules";
import { Button } from "@/components/atoms";

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
}

function TitleDetailPage({
  navItems,
  cover,
  details,
  purchase,
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
      />

      {/* 2. BookDetailsHero */}
      <BookDetailsHero
        cover={cover}
        details={details}
        purchase={purchase}
      />

      {/* 3. MetadataBar (InfoBar) - subtle parchment tint */}
      <InfoBar
        items={metadataItems}
        className="border-y border-border bg-[#F4EEDC]/50 dark:bg-[#352f28]"
      />

      {/* 4a. Collections Grid Section - soft blush/rose */}
      {collectionsContent && (
        <GridSection
          label={collectionsLabel}
          background="blush"
          columns={3}
          className="mt-12 sm:mt-16"
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
        >
          {communityContent}
          {/* See more button - spans full width */}
          {communitySeeMoreHref && (
            <div className="col-span-full flex justify-center pt-6">
              <Button variant="outline" asChild className="bg-transparent border-foreground/30 hover:bg-foreground/5">
                <Link href={communitySeeMoreHref}>See more reviews</Link>
              </Button>
            </div>
          )}
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
