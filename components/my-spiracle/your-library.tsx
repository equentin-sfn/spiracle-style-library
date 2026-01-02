"use client";

// =============================================================================
// YOUR LIBRARY
// Complete bookshelf grid with completion states
// =============================================================================

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms";
import {
  Library,
  Play,
  Check,
  Filter,
  ArrowUpDown,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { Section, SectionLabel, SquareBookCover, type SectionBackground } from "./helpers";
import type { LibraryBook } from "./types";
import { sampleLibrary } from "./sample-data";

export interface YourLibraryProps {
  library: LibraryBook[];
  onDiscoverNew?: () => void;
  background?: SectionBackground;
  className?: string;
}

export function YourLibrary({
  library,
  onDiscoverNew,
  background = "parchment",
  className,
}: YourLibraryProps) {
  const inProgressBooks = library.filter(b => b.status === "in_progress");
  const completedBooks = library.filter(b => b.status === "completed");
  const abandonedBooks = library.filter(b => b.status === "abandoned");

  return (
    <Section background={background} className={className}>
      <SectionLabel href="/library">Your bookshelf</SectionLabel>

      {library.length > 0 ? (
        <>
          {/* Filter/Sort controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {library.length} audiobooks
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded border border-spiracle-sand dark:border-border">
                <Filter className="size-3" />
                <span>All</span>
                <ChevronDown className="size-3" />
              </button>
              <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded border border-spiracle-sand dark:border-border">
                <ArrowUpDown className="size-3" />
                <span>Recent</span>
              </button>
            </div>
          </div>

          {/* In Progress section - highlighted */}
          {inProgressBooks.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-medium text-foreground mb-4 flex items-center gap-2">
                <Play className="size-4 text-spiracle-terracotta fill-current" />
                Currently reading
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {inProgressBooks.map((book) => (
                  <Link
                    key={book.id}
                    href={`/audiobooks/${book.id}`}
                    className="group block"
                  >
                    <SquareBookCover
                      title={book.title}
                      size="md"
                      status={book.status}
                      progress={book.progress}
                      className="mb-2"
                    />
                    <p className="text-xs font-medium text-foreground truncate group-hover:text-primary transition-colors">
                      {book.title}
                    </p>
                    <p className="text-[10px] text-muted-foreground truncate">
                      {book.author}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* All books grid */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-4 flex items-center gap-2">
              <Library className="size-4 text-spiracle-forest" />
              Complete library
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3">
              {library.map((book) => (
                <Link
                  key={book.id}
                  href={`/audiobooks/${book.id}`}
                  className="group block"
                >
                  <SquareBookCover
                    title={book.title}
                    size="sm"
                    status={book.status}
                    progress={book.status === "in_progress" ? book.progress : undefined}
                    className="mb-1.5"
                  />
                  <p className="text-[10px] font-medium text-foreground truncate group-hover:text-primary transition-colors">
                    {book.title}
                  </p>
                  <p className="text-[9px] text-muted-foreground truncate">
                    {book.author}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Summary stats */}
          <div className="mt-8 pt-6 border-t border-spiracle-sand/50 dark:border-border/50">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Check className="size-3 text-spiracle-forest" />
                {completedBooks.length} completed
              </span>
              <span className="flex items-center gap-1.5">
                <Play className="size-3 text-spiracle-terracotta" />
                {inProgressBooks.length} in progress
              </span>
              {abandonedBooks.length > 0 && (
                <span className="flex items-center gap-1.5 opacity-60">
                  {abandonedBooks.length} set aside
                </span>
              )}
            </div>
          </div>
        </>
      ) : (
        /* Empty state */
        <div className="text-center py-12">
          <Library className="size-12 text-muted-foreground/30 mx-auto mb-4" />
          <h3 className="font-display text-lg text-foreground mb-2">
            Your bookshelf is waiting
          </h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-xs mx-auto">
            Your first listen will appear here. Every audiobook you start becomes
            part of your personal library.
          </p>
          <Button variant="outline" size="sm" className="gap-1.5" onClick={onDiscoverNew}>
            <Sparkles className="size-3.5" />
            Discover something new
          </Button>
        </div>
      )}
    </Section>
  );
}

// Default props for style guide display
YourLibrary.defaultProps = {
  library: sampleLibrary,
};
