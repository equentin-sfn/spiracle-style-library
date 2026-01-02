"use client";

// =============================================================================
// READING CONSTELLATION
// Pentagon visualization, taste description, tags, discovery prompt
// Also includes ImportListens CTA and DiscoveryTreeTeaser
// =============================================================================

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms";
import { Plus, ChevronRight, Sparkles } from "lucide-react";
import { Section, SectionLabel, type SectionBackground } from "./helpers";
import { TasteConstellation } from "./taste-constellation";
import { DiscoveryTreeTeaser } from "./discovery-tree-teaser";
import type { TasteProfile } from "./types";
import { sampleTasteProfile } from "./sample-data";

export interface ReadingConstellationProps {
  tasteProfile: TasteProfile;
  connectedTitlesCount?: number;
  onExploreConstellation?: () => void;
  onAddPastListens?: () => void;
  onExploreDiscovery?: () => void;
  showImportCta?: boolean;
  showDiscoveryTeaser?: boolean;
  background?: SectionBackground;
  className?: string;
}

export function ReadingConstellation({
  tasteProfile,
  connectedTitlesCount = 247,
  onExploreConstellation,
  onAddPastListens,
  onExploreDiscovery,
  showImportCta = true,
  showDiscoveryTeaser = true,
  background = "parchment",
  className,
}: ReadingConstellationProps) {
  return (
    <Section background={background} className={className}>
      <SectionLabel>Your reading constellation</SectionLabel>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Constellation visualization */}
        <div className="relative">
          <TasteConstellation
            dimensions={tasteProfile.dimensions}
            className="py-6"
          />
          <p className="text-center text-xs text-muted-foreground mt-2">
            Based on {tasteProfile.booksAnalyzed} audiobooks
          </p>
        </div>

        {/* Literary interpretation */}
        <div className="space-y-6">
          {/* Essence description */}
          <div>
            <p className="font-serif text-base sm:text-lg text-foreground/90 leading-relaxed italic">
              "{tasteProfile.essence}"
            </p>
          </div>

          {/* Tag breakdown */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-muted-foreground">
              What draws you in
            </h4>
            <div className="flex flex-wrap gap-2">
              {tasteProfile.dimensions.map((dim) => (
                <span
                  key={dim.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-spiracle-cream dark:bg-background rounded-full text-sm border border-spiracle-sand dark:border-border"
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: "#3d2e24" }}
                  />
                  <span className="capitalize text-foreground">{dim.primary.tag}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Discovery prompt */}
          <div className="p-4 bg-spiracle-cream dark:bg-background rounded-lg border border-spiracle-sand dark:border-border">
            <div className="flex items-start gap-3">
              <Sparkles className="size-4 text-spiracle-terracotta dark:text-spiracle-honey flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Your taste connects you to{" "}
                  <span className="text-foreground font-medium">{connectedTitlesCount} other titles</span>{" "}
                  in our collection
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary -ml-2"
                  onClick={onExploreConstellation}
                >
                  Explore your constellation
                  <ChevronRight className="size-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Import CTA - warm invitation to enrich profile */}
      {showImportCta && (
        <div className="mt-10 pt-8 border-t border-spiracle-sand/50 dark:border-border/50">
          <div className="text-center max-w-md mx-auto">
            <p className="font-serif text-lg text-foreground/80 mb-2">
              Your reading life didn't start here
            </p>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Tell us about audiobooks you've loved elsewhere, and watch your constellation grow.
            </p>
            <Button variant="outline" size="sm" className="gap-2" onClick={onAddPastListens}>
              <Plus className="size-3.5" />
              Add past listens
            </Button>
          </div>
        </div>
      )}

      {/* Discovery Tree Teaser - invitation to explore the graph */}
      {showDiscoveryTeaser && (
        <div className="mt-12 pt-8 border-t border-spiracle-sand/50 dark:border-border/50">
          <div className="text-center mb-6">
            <h3 className="font-display text-xl text-foreground mb-2">
              Follow the threads
            </h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              See how your taste connects to unexpected discoveries. Every audiobook opens new paths.
            </p>
          </div>
          <DiscoveryTreeTeaser className="max-w-2xl mx-auto" onExplore={onExploreDiscovery} />
        </div>
      )}
    </Section>
  );
}

// Default props for style guide display
ReadingConstellation.defaultProps = {
  tasteProfile: sampleTasteProfile,
  connectedTitlesCount: 247,
  showImportCta: true,
  showDiscoveryTeaser: true,
};
