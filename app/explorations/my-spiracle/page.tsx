"use client";

// =============================================================================
// MY SPIRACLE - PROFILE PAGE
// Composed from modular components in @/components/my-spiracle
// =============================================================================

import * as React from "react";
import { ThemeToggle } from "@/components/atoms";

// Import all profile components from the my-spiracle component library
import {
  // Section components
  ProfileHeader,
  ListeningLife,
  ReadingConstellation,
  CurrentlyListening,
  Collections,
  YourLibrary,
  BookClubs,
  YourReviews,
  LiteraryMilestones,
  AccountFooter,
  // Sample data
  sampleProfile,
  sampleCurrentlyListening,
  sampleUpNext,
  sampleAiSuggestion,
  sampleCollections,
  sampleShortlist,
  sampleLibrary,
  sampleBookClubs,
  sampleReviews,
  sampleAchievements,
} from "@/components/my-spiracle";

export default function MySpiraclePage() {
  const profile = sampleProfile;

  return (
    <div className="min-h-screen bg-spiracle-cream dark:bg-background">
      {/* Theme toggle for demo */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Profile Header */}
      <ProfileHeader
        screenName={profile.screenName}
        displayName={profile.displayName}
        bio={profile.bio}
        memberSince={profile.memberSince}
        booksCompleted={profile.stats.booksCompleted}
        isProfilePublic={true}
      />

      {/* Listening Life Stats - Blush background */}
      <ListeningLife
        stats={profile.stats}
        favouriteGenres={profile.favouriteGenres}
        listeningPersonality={profile.listeningPersonality}
        background="blush"
      />

      {/* Reading Constellation / Taste Profile - Sage background */}
      <ReadingConstellation
        tasteProfile={profile.tasteProfile}
        showImportCta={true}
        showDiscoveryTeaser={true}
        background="sage"
      />

      {/* Currently Listening - Honey background */}
      <CurrentlyListening
        currentlyListening={sampleCurrentlyListening}
        upNext={sampleUpNext}
        aiSuggestion={sampleAiSuggestion}
        background="honey"
      />

      {/* Collections - Cream background */}
      <Collections
        collections={sampleCollections}
        shortlist={sampleShortlist}
        background="cream"
      />

      {/* Your Library / Bookshelf - Parchment background */}
      <YourLibrary library={sampleLibrary} background="parchment" />

      {/* Book Clubs - Blush background */}
      <BookClubs bookClubs={sampleBookClubs} background="blush" />

      {/* Your Reviews - Cream background */}
      <YourReviews
        reviews={sampleReviews}
        totalHelpfulVotes={profile.totalHelpfulVotes}
        background="cream"
      />

      {/* Literary Milestones / Achievements - Sage background */}
      <LiteraryMilestones achievements={sampleAchievements} background="sage" />

      {/* Account Footer */}
      <AccountFooter />

      {/* Bottom spacing for mobile nav */}
      <div className="h-20 sm:h-8" />
    </div>
  );
}
