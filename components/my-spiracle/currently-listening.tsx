"use client";

// =============================================================================
// CURRENTLY LISTENING
// Active book with progress, up next queue, AI recommendation
// =============================================================================

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms";
import { Play, Plus, Sparkles } from "lucide-react";
import { Section, SectionLabel, BookCover, ProgressBar, type SectionBackground } from "./helpers";
import type { CurrentlyListeningBook, Book, AISuggestion } from "./types";
import { sampleCurrentlyListening, sampleUpNext, sampleAiSuggestion } from "./sample-data";

export interface CurrentlyListeningProps {
  currentlyListening: CurrentlyListeningBook;
  upNext: Book[];
  aiSuggestion: AISuggestion;
  onContinue?: () => void;
  onAddToQueue?: () => void;
  onExploreSuggestion?: () => void;
  background?: SectionBackground;
  className?: string;
}

export function CurrentlyListening({
  currentlyListening,
  upNext,
  aiSuggestion,
  onContinue,
  onAddToQueue,
  onExploreSuggestion,
  background = "parchment",
  className,
}: CurrentlyListeningProps) {
  return (
    <Section background={background} className={className}>
      <SectionLabel>Currently listening</SectionLabel>

      {/* Currently listening - prominent display */}
      <div className="flex gap-4 sm:gap-6 mb-8">
        <div className="relative flex-shrink-0">
          <BookCover
            title={currentlyListening.title}
            size="lg"
            className="shadow-lg"
          />
          {/* Play button overlay */}
          <button className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-sm opacity-0 hover:opacity-100 transition-opacity">
            <div className="p-2 bg-spiracle-cream rounded-full">
              <Play className="size-4 text-foreground fill-current" />
            </div>
          </button>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-display text-xl sm:text-2xl text-foreground mb-1 truncate">
            {currentlyListening.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            by {currentlyListening.author}
          </p>

          <ProgressBar
            progress={currentlyListening.progress}
            className="mb-2"
          />

          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span>{currentlyListening.progress}% complete</span>
            <span>{currentlyListening.timeRemaining}</span>
            <span className="hidden sm:inline">
              Last listened {currentlyListening.lastListened}
            </span>
          </div>

          <Button size="sm" className="mt-4 gap-1.5" onClick={onContinue}>
            <Play className="size-3.5 fill-current" />
            Continue
          </Button>
        </div>
      </div>

      {/* Up next queue */}
      {upNext.length > 0 && (
        <div className="mb-8">
          <h3 className="text-sm font-medium text-foreground mb-3">
            Up next
          </h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {upNext.map((book, index) => (
              <div
                key={book.id}
                className="flex items-center gap-3 flex-shrink-0 bg-spiracle-cream dark:bg-card rounded-lg p-3 border border-spiracle-sand dark:border-border"
              >
                <span className="text-xs text-muted-foreground/50 font-medium">
                  {index + 1}
                </span>
                <BookCover title={book.title} size="sm" />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground truncate max-w-[120px]">
                    {book.title}
                  </p>
                  <p className="text-xs text-muted-foreground truncate max-w-[120px]">
                    {book.author}
                  </p>
                </div>
              </div>
            ))}
            {/* Add to queue button */}
            <button
              className="flex-shrink-0 flex items-center justify-center w-12 h-full min-h-[72px] border border-dashed border-spiracle-sand dark:border-border rounded-lg hover:border-muted-foreground transition-colors"
              onClick={onAddToQueue}
            >
              <Plus className="size-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      )}

      {/* AI suggestion */}
      <div className="bg-spiracle-cream dark:bg-background rounded-lg p-4 sm:p-5 border border-spiracle-sand dark:border-border">
        <div className="flex items-start gap-3 mb-3">
          <Sparkles className="size-4 text-spiracle-terracotta dark:text-spiracle-honey flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground italic">
            {aiSuggestion.reason}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <BookCover title={aiSuggestion.book.title} size="sm" />
          <div className="flex-1 min-w-0">
            <p className="font-medium text-foreground truncate">
              {aiSuggestion.book.title}
            </p>
            <p className="text-sm text-muted-foreground truncate">
              {aiSuggestion.book.author}
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={onExploreSuggestion}>
            Explore
          </Button>
        </div>
      </div>
    </Section>
  );
}

// Default props for style guide display
CurrentlyListening.defaultProps = {
  currentlyListening: sampleCurrentlyListening,
  upNext: sampleUpNext,
  aiSuggestion: sampleAiSuggestion,
};
