"use client";

// =============================================================================
// LISTENING LIFE
// Stats cards, favourite worlds bars, Night Owl Scholar personality box
// =============================================================================

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Headphones,
  BookOpen,
  Flame,
  Coffee,
  Moon,
} from "lucide-react";
import { Section, SectionLabel, WatercolorBar, type SectionBackground } from "./helpers";
import type { ListeningStats, FavouriteGenre, ListeningPersonality } from "./types";
import { sampleStats, sampleGenres, samplePersonality } from "./sample-data";

export interface ListeningLifeProps {
  stats: ListeningStats;
  favouriteGenres: FavouriteGenre[];
  listeningPersonality: ListeningPersonality;
  background?: SectionBackground;
  className?: string;
}

export function ListeningLife({
  stats,
  favouriteGenres,
  listeningPersonality,
  background,
  className,
}: ListeningLifeProps) {
  return (
    <Section background={background} className={className}>
      <SectionLabel>Your listening life</SectionLabel>

      {/* Main stats grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8">
        {/* Total hours */}
        <div className="bg-spiracle-parchment dark:bg-card rounded-lg p-4 text-center">
          <Headphones className="size-5 mx-auto mb-2 text-spiracle-forest dark:text-primary" />
          <div className="font-display text-2xl sm:text-3xl text-foreground">
            {stats.totalListeningHours}
          </div>
          <div className="text-xs text-muted-foreground">hours enjoyed</div>
        </div>

        {/* Books this year */}
        <div className="bg-spiracle-parchment dark:bg-card rounded-lg p-4 text-center">
          <BookOpen className="size-5 mx-auto mb-2 text-spiracle-terracotta dark:text-accent" />
          <div className="font-display text-2xl sm:text-3xl text-foreground">
            {stats.booksThisYear}
          </div>
          <div className="text-xs text-muted-foreground">books this year</div>
        </div>

        {/* Current streak */}
        {stats.currentStreak > 0 && (
          <div className="bg-spiracle-parchment dark:bg-card rounded-lg p-4 text-center">
            <Flame className="size-5 mx-auto mb-2 text-spiracle-burgundy" />
            <div className="font-display text-2xl sm:text-3xl text-foreground">
              {stats.currentStreak}
            </div>
            <div className="text-xs text-muted-foreground">day streak</div>
          </div>
        )}

        {/* Weekly average */}
        <div className="bg-spiracle-parchment dark:bg-card rounded-lg p-4 text-center">
          <Coffee className="size-5 mx-auto mb-2 text-spiracle-slate dark:text-muted-foreground" />
          <div className="font-display text-2xl sm:text-3xl text-foreground">
            {stats.averagePerWeek}
          </div>
          <div className="text-xs text-muted-foreground">hrs/week avg</div>
        </div>
      </div>

      {/* Favourite genres visualization - watercolor brushstrokes */}
      <div className="mb-8">
        <h3 className="text-sm font-medium text-foreground mb-4">
          Your favourite worlds
        </h3>
        <div className="space-y-3">
          {favouriteGenres.map((genre) => (
            <div key={genre.name} className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground w-32 sm:w-40 truncate">
                {genre.name}
              </span>
              <div className="flex-1">
                <WatercolorBar
                  percentage={genre.percentage}
                  color={genre.color}
                />
              </div>
              <span className="text-xs text-muted-foreground w-8 text-right">
                {genre.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Listening personality */}
      <div className="bg-spiracle-parchment dark:bg-card rounded-lg p-5 sm:p-6 border border-spiracle-sand dark:border-border">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-spiracle-honey/30 dark:bg-spiracle-honey/10 rounded-lg">
            <Moon className="size-5 text-spiracle-terracotta dark:text-spiracle-honey" />
          </div>
          <div>
            <h3 className="font-display text-lg text-foreground mb-1">
              {listeningPersonality.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {listeningPersonality.description}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

// Default props for style guide display
ListeningLife.defaultProps = {
  stats: sampleStats,
  favouriteGenres: sampleGenres,
  listeningPersonality: samplePersonality,
};
