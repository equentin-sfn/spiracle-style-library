"use client";

// =============================================================================
// BOOK CLUBS
// Club cards with current book, start a club CTA
// =============================================================================

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms";
import {
  Users,
  ChevronRight,
  Plus,
  Sparkles,
} from "lucide-react";
import { Section, SectionLabel, BookCover, type SectionBackground } from "./helpers";
import type { BookClub } from "./types";
import { sampleBookClubs } from "./sample-data";

export interface BookClubsProps {
  bookClubs: BookClub[];
  onBrowseClubs?: () => void;
  onCreateClub?: () => void;
  onDiscoverMore?: () => void;
  background?: SectionBackground;
  className?: string;
}

export function BookClubs({
  bookClubs,
  onBrowseClubs,
  onCreateClub,
  onDiscoverMore,
  background,
  className,
}: BookClubsProps) {
  return (
    <Section background={background} className={className}>
      <SectionLabel href="/book-clubs">Book clubs</SectionLabel>

      {bookClubs.length > 0 ? (
        <div className="space-y-4">
          {bookClubs.map((club) => (
            <Link
              key={club.id}
              href={`/book-clubs/${club.id}`}
              className="group flex gap-4 bg-spiracle-cream dark:bg-background rounded-lg p-4 border border-spiracle-sand dark:border-border hover:border-muted-foreground transition-colors"
            >
              <BookCover title={club.currentBook.title} size="md" />
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors mb-1">
                  {club.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                  <Users className="size-3" />
                  {club.memberCount} members
                </p>
                <div className="text-sm">
                  <p className="text-muted-foreground">Currently reading:</p>
                  <p className="text-foreground font-medium truncate">
                    {club.currentBook.title}
                  </p>
                  <p className="text-xs text-spiracle-terracotta dark:text-spiracle-honey mt-1">
                    Due {club.dueDate}
                  </p>
                </div>
              </div>
              <ChevronRight className="size-5 text-muted-foreground/50 group-hover:text-muted-foreground transition-colors self-center" />
            </Link>
          ))}
        </div>
      ) : (
        /* Empty state */
        <div className="text-center py-8">
          <Users className="size-10 text-muted-foreground/30 mx-auto mb-3" />
          <h3 className="font-medium text-foreground mb-1">
            Join a book club
          </h3>
          <p className="text-sm text-muted-foreground mb-4 max-w-xs mx-auto">
            Connect with readers who share your taste. Discuss, discover, and
            dive deeper together.
          </p>
          <Button variant="outline" size="sm" onClick={onBrowseClubs}>
            Browse clubs
          </Button>
        </div>
      )}

      {/* Discovery prompt */}
      {bookClubs.length > 0 && (
        <div className="mt-6 p-4 bg-spiracle-cream dark:bg-background rounded-lg border border-spiracle-sand dark:border-border">
          <p className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
            <Sparkles className="size-4 text-spiracle-terracotta dark:text-spiracle-honey" />
            Clubs reading books you loved
          </p>
          <Button variant="ghost" size="sm" className="text-primary" onClick={onDiscoverMore}>
            Discover more clubs
            <ChevronRight className="size-4 ml-1" />
          </Button>
        </div>
      )}

      {/* Start a club CTA */}
      <div className="mt-8 relative overflow-hidden rounded-lg border border-spiracle-sand dark:border-border">
        {/* Warm gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(241, 229, 163, 0.15) 0%, rgba(235, 222, 219, 0.3) 100%)",
          }}
        />
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-br from-spiracle-honey/5 to-spiracle-burgundy/10" />

        <div className="relative p-6 sm:p-8 text-center">
          {/* Hand-drawn decorative element */}
          <svg
            className="w-12 h-12 mx-auto mb-4 text-spiracle-terracotta/60 dark:text-spiracle-honey/60"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 36c0.5-0.5 3-2 6-2s4.5 1 6 2c1.5-1 3-2 6-2s5.5 1.5 6 2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M6 12v24M42 12v24M24 14v20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M6 12c1.5 1 3.5 2 6 2s4.5-1 6-2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M30 12c1.5 1 3.5 2 6 2s4.5-1 6-2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="12" cy="6" r="2" fill="currentColor" fillOpacity="0.6" />
            <circle cx="24" cy="5" r="2" fill="currentColor" fillOpacity="0.6" />
            <circle cx="36" cy="6" r="2" fill="currentColor" fillOpacity="0.6" />
          </svg>

          <h3 className="font-display text-xl sm:text-2xl text-foreground mb-2">
            Start your own book club
          </h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6 leading-relaxed">
            Gather readers around the books you love. Set your own pace,
            choose your own titles, create your own corner of the literary world.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="sm" className="gap-1.5" onClick={onCreateClub}>
              <Plus className="size-3.5" />
              Create a club
            </Button>
            <span className="text-xs text-muted-foreground">
              It only takes a minute
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}

// Default props for style guide display
BookClubs.defaultProps = {
  bookClubs: sampleBookClubs,
};
