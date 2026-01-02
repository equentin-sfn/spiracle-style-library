"use client";

// =============================================================================
// COLLECTIONS
// Collection cards with social layer, create collection CTA, shortlist
// =============================================================================

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms";
import {
  Plus,
  Lock,
  Globe,
  Heart,
  MessageSquare,
} from "lucide-react";
import { Section, SectionLabel, BookCover, UserAvatar, type SectionBackground } from "./helpers";
import type { Collection, Book } from "./types";
import { sampleCollections, sampleShortlist } from "./sample-data";

export interface CollectionsProps {
  collections: Collection[];
  shortlist: Book[];
  onCreateCollection?: () => void;
  background?: SectionBackground;
  className?: string;
}

export function Collections({
  collections,
  shortlist,
  onCreateCollection,
  background,
  className,
}: CollectionsProps) {
  return (
    <Section background={background} className={className}>
      <SectionLabel href="/collections">Your collections</SectionLabel>

      {/* Collections grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="group bg-spiracle-parchment dark:bg-card rounded-lg p-4 border border-spiracle-sand dark:border-border hover:border-muted-foreground transition-colors"
          >
            {/* Header with title and visibility toggle */}
            <div className="flex items-start justify-between mb-3">
              <Link href={`/collections/${collection.id}`} className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {collection.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {collection.bookCount} books
                </p>
              </Link>

              {/* Visibility toggle button */}
              <button
                className={cn(
                  "flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium transition-colors",
                  collection.isPublic
                    ? "bg-spiracle-forest/10 text-spiracle-forest dark:bg-primary/20 dark:text-primary"
                    : "bg-spiracle-sand/50 text-muted-foreground dark:bg-secondary"
                )}
                aria-label={collection.isPublic ? "Make private" : "Make public"}
              >
                {collection.isPublic ? (
                  <>
                    <Globe className="size-3" />
                    <span>Public</span>
                  </>
                ) : (
                  <>
                    <Lock className="size-3" />
                    <span>Private</span>
                  </>
                )}
              </button>
            </div>

            {/* Mini cover stack */}
            <Link href={`/collections/${collection.id}`} className="block mb-3">
              <div className="flex -space-x-3">
                {collection.covers.slice(0, 3).map((_, i) => (
                  <BookCover
                    key={i}
                    title={collection.name}
                    size="sm"
                    className="ring-2 ring-spiracle-parchment dark:ring-card"
                  />
                ))}
                {collection.bookCount > 3 && (
                  <div className="w-12 h-[72px] rounded-sm bg-spiracle-sand dark:bg-secondary flex items-center justify-center ring-2 ring-spiracle-parchment dark:ring-card">
                    <span className="text-xs text-muted-foreground">
                      +{collection.bookCount - 3}
                    </span>
                  </div>
                )}
              </div>
            </Link>

            {/* Social layer - only for public collections with engagement */}
            {collection.isPublic && collection.savedBy && collection.savedBy.count > 0 ? (
              <div className="pt-3 border-t border-spiracle-sand/50 dark:border-border/50">
                <div className="flex items-center justify-between">
                  {/* Saved by avatars and count */}
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1.5">
                      {collection.savedBy.featured.slice(0, 3).map((user) => (
                        <UserAvatar
                          key={user.id}
                          initials={user.initials}
                          name={user.name}
                          color={user.color}
                          size="xs"
                        />
                      ))}
                    </div>
                    <span className="text-[11px] text-muted-foreground">
                      {collection.savedBy.featured[0]?.name.split(" ")[0]}
                      {collection.savedBy.count > 1 && (
                        <>, {collection.savedBy.featured[1]?.name.split(" ")[0]}</>
                      )}
                      {collection.savedBy.count > 2 && (
                        <> & {collection.savedBy.count - 2} others</>
                      )}
                      {" saved this"}
                    </span>
                  </div>

                  {/* Comments indicator */}
                  {collection.commentCount > 0 && (
                    <button
                      className="flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={`${collection.commentCount} comments`}
                    >
                      <MessageSquare className="size-3" />
                      <span>{collection.commentCount}</span>
                    </button>
                  )}
                </div>
              </div>
            ) : collection.isPublic ? (
              /* Empty state for public collection with no saves */
              <div className="pt-3 border-t border-spiracle-sand/50 dark:border-border/50">
                <p className="text-[11px] text-muted-foreground/70 italic">
                  Share this collection and see who resonates with your taste
                </p>
              </div>
            ) : null}
          </div>
        ))}

        {/* Create collection CTA */}
        <button
          className="flex flex-col items-center justify-center gap-2 p-6 border border-dashed border-spiracle-sand dark:border-border rounded-lg hover:border-muted-foreground transition-colors min-h-[200px]"
          onClick={onCreateCollection}
        >
          <Plus className="size-6 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            Create collection
          </span>
        </button>
      </div>

      {/* Shortlist */}
      {shortlist.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
            <Heart className="size-4 text-spiracle-terracotta" />
            Want to listen
          </h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {shortlist.map((book) => (
              <div key={book.id} className="flex-shrink-0">
                <BookCover title={book.title} size="md" className="mb-2" />
                <p className="text-xs text-foreground truncate max-w-[64px]">
                  {book.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}

// Default props for style guide display
Collections.defaultProps = {
  collections: sampleCollections,
  shortlist: sampleShortlist,
};
