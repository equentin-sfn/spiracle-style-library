"use client";

// =============================================================================
// LITERARY MILESTONES
// Achievements displayed in a grid with subtle, literary styling
// =============================================================================

import * as React from "react";
import { cn } from "@/lib/utils";
import { Section, SectionLabel } from "./helpers";
import type { Achievement } from "./types";
import { sampleAchievements } from "./sample-data";

export interface LiteraryMilestonesProps {
  achievements: Achievement[];
  className?: string;
}

export function LiteraryMilestones({
  achievements,
  className,
}: LiteraryMilestonesProps) {
  if (achievements.length === 0) {
    return null;
  }

  return (
    <Section className={cn("bg-spiracle-parchment dark:bg-card/50 border-t border-spiracle-sand dark:border-border", className)}>
      <SectionLabel>Literary milestones</SectionLabel>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {achievements.map((achievement) => {
          const IconComponent = achievement.icon;
          return (
            <div
              key={achievement.id}
              className="bg-spiracle-cream dark:bg-background rounded-lg p-4 text-center border border-spiracle-sand dark:border-border"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-spiracle-honey/20 dark:bg-spiracle-honey/10 mb-3">
                <IconComponent className="size-5 text-spiracle-terracotta dark:text-spiracle-honey" />
              </div>
              <h4 className="font-medium text-sm text-foreground mb-0.5">
                {achievement.name}
              </h4>
              <p className="text-xs text-muted-foreground">
                {achievement.description}
              </p>
              <p className="text-[10px] text-muted-foreground/60 mt-2">
                {achievement.earnedDate}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

// Default props for style guide display
LiteraryMilestones.defaultProps = {
  achievements: sampleAchievements,
};
