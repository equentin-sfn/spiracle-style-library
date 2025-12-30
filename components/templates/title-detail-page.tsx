"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  TopNavigation,
  BookDetailsHero,
  GridSection,
  CarouselSection,
  QuoteSection,
  type NavItem,
  type BookDetailsHeroCover,
  type BookDetailsHeroDetails,
  type BookDetailsHeroPurchase,
} from "@/components/organisms";
import { InfoBar, type InfoBarItem } from "@/components/molecules";

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
  /** Collections section content */
  collectionsContent?: React.ReactNode;
  /** Critics section label */
  criticsLabel?: string;
  /** Critics section content */
  criticsContent?: React.ReactNode;
  /** Community reviews section label */
  communityLabel?: string;
  /** Community reviews section content */
  communityContent?: React.ReactNode;
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
  criticsLabel = "WHAT THE CRITICS ARE SAYING",
  criticsContent,
  communityLabel = "WHAT OUR COMMUNITY IS SAYING",
  communityContent,
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
      className={cn("min-h-screen bg-spiracle-cream", className)}
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

      {/* 3. MetadataBar (InfoBar) */}
      <InfoBar
        items={metadataItems}
        className="border-y border-border"
      />

      {/* 4. Collections Grid Section */}
      {collectionsContent && (
        <GridSection
          label={collectionsLabel}
          labelHref="#"
          background="dark"
          columns={3}
        >
          {collectionsContent}
        </GridSection>
      )}

      {/* 5. Critics Quote Section */}
      {criticsContent && (
        <QuoteSection
          label={criticsLabel}
          background="cream"
          columns={3}
        >
          {criticsContent}
        </QuoteSection>
      )}

      {/* 6. Community Reviews Carousel */}
      {communityContent && (
        <CarouselSection
          label={communityLabel}
          background="cream"
        >
          {communityContent}
        </CarouselSection>
      )}

      {/* 7. More by Author Carousel */}
      {moreByAuthorContent && moreByAuthorLabel && (
        <CarouselSection
          label={moreByAuthorLabel}
          background="cream"
        >
          {moreByAuthorContent}
        </CarouselSection>
      )}

      {/* 8. Similar Books Carousel */}
      {similarBooksContent && (
        <CarouselSection
          label={similarBooksLabel}
          background="cream"
        >
          {similarBooksContent}
        </CarouselSection>
      )}
    </div>
  );
}

export { TitleDetailPage };
