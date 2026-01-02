"use client";

// =============================================================================
// MY SPIRACLE - PROFILE PAGE
// Composed from modular components in @/components/my-spiracle
// =============================================================================

import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/atoms";
import { Menu, X, Home, Book, Palette, LayoutDashboard, Star, Library, LayoutGrid, User, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

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

// Navigation items for style guide access
const navItems = [
  {
    label: "Home",
    href: "/home",
    description: "Style Library home",
    icon: Home,
  },
  {
    label: "Marketing Components",
    href: "/preview/home",
    description: "New homepage & layout components",
    icon: Home,
  },
  {
    label: "Title Detail Page",
    href: "/preview/title-detail",
    description: "Full book detail page template",
    icon: Book,
  },
  {
    label: "Component Library",
    href: "/preview",
    description: "All components showcase",
    icon: Palette,
  },
  {
    label: "Book Details Hero",
    href: "/preview/book-details",
    description: "Book details hero section",
    icon: LayoutDashboard,
  },
  {
    label: "Showcase",
    href: "/preview/showcase",
    description: "BentoHero & CollectionShowcase",
    icon: Star,
  },
  {
    label: "Books Grid",
    href: "/preview/books",
    description: "BookCard grid layout",
    icon: Library,
  },
  {
    label: "Collections",
    href: "/preview/collections",
    description: "CollectionCard examples",
    icon: LayoutGrid,
  },
  {
    label: "My Spiracle Style Guide",
    href: "/style-guide/my-spiracle",
    description: "Profile components documentation",
    icon: FileText,
  },
];

export default function MySpiraclePage() {
  const profile = sampleProfile;
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-spiracle-cream dark:bg-background">
      {/* Sticky Navigation Header */}
      <header className="sticky top-0 z-50 bg-spiracle-cream/95 dark:bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-spiracle-cream/60 dark:supports-[backdrop-filter]:bg-background/60 border-b border-spiracle-sand dark:border-border">
        <div className="flex items-center justify-between px-4 h-14">
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="p-2 -ml-2 text-foreground hover:bg-spiracle-sand/50 dark:hover:bg-secondary/50 rounded-md transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} strokeWidth={1} />
          </button>

          {/* Page Title */}
          <div className="flex items-center gap-2">
            <User size={18} strokeWidth={1} className="text-muted-foreground" />
            <span className="font-display text-lg tracking-tight text-foreground">
              My Spiracle
            </span>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle
            iconSize={18}
            className="p-2 -mr-2 rounded-md hover:bg-spiracle-sand/50 dark:hover:bg-secondary/50"
          />
        </div>
      </header>

      {/* Slide-out Menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 transition-opacity duration-300",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu Panel */}
        <nav
          className={cn(
            "absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-spiracle-cream dark:bg-background shadow-xl transition-transform duration-300 ease-out",
            menuOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between px-4 h-14 border-b border-spiracle-sand dark:border-border">
            <span className="font-display text-lg text-foreground">Style Guides</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 -mr-2 text-muted-foreground hover:text-foreground hover:bg-spiracle-sand/50 dark:hover:bg-secondary/50 rounded-md transition-colors"
              aria-label="Close menu"
            >
              <X size={20} strokeWidth={1} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="py-2 overflow-y-auto max-h-[calc(100vh-3.5rem)]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-start gap-3 px-4 py-3 hover:bg-spiracle-sand/50 dark:hover:bg-secondary/50 transition-colors"
              >
                <item.icon size={20} strokeWidth={1} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-foreground">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Profile Header */}
      <ProfileHeader
        screenName={profile.screenName}
        displayName={profile.displayName}
        bio={profile.bio}
        memberSince={profile.memberSince}
        booksCompleted={profile.stats.booksCompleted}
        isProfilePublic={true}
        editProfileHref="/my-spiracle/edit-profile"
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
