"use client";

// =============================================================================
// MY SPIRACLE - STYLE GUIDE
// Individual component demos for the profile page sections
// =============================================================================

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Menu, X, Home, Book, Palette, LayoutDashboard, Star, Library, LayoutGrid, User, FileText } from "lucide-react";
import { ThemeToggle } from "@/components/atoms";
import { cn } from "@/lib/utils";

// Import all components - they use defaultProps for demo data
import {
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
  TasteConstellation,
  DiscoveryTreeTeaser,
  // Helpers for demo
  BookCover,
  SquareBookCover,
  UserAvatar,
  ProgressBar,
  WatercolorBar,
  StarRating,
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

// Section wrapper for style guide
function StyleGuideSection({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-spiracle-sand dark:border-border last:border-b-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-6">
          <h2 className="font-display text-2xl text-foreground mb-1">{title}</h2>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        <div className="bg-spiracle-cream dark:bg-background rounded-lg border border-spiracle-sand dark:border-border overflow-hidden">
          {children}
        </div>
      </div>
    </section>
  );
}

// Helper components showcase
function HelperShowcase() {
  return (
    <div className="p-6 space-y-8">
      {/* Book Covers */}
      <div>
        <h3 className="text-sm font-medium text-foreground mb-4">Book Covers</h3>
        <div className="flex gap-4 items-end">
          <div className="text-center">
            <BookCover title="Small" size="sm" />
            <p className="text-xs text-muted-foreground mt-2">sm</p>
          </div>
          <div className="text-center">
            <BookCover title="Medium" size="md" />
            <p className="text-xs text-muted-foreground mt-2">md</p>
          </div>
          <div className="text-center">
            <BookCover title="Large" size="lg" />
            <p className="text-xs text-muted-foreground mt-2">lg</p>
          </div>
        </div>
      </div>

      {/* Square Book Covers */}
      <div>
        <h3 className="text-sm font-medium text-foreground mb-4">Square Book Covers (Audiobook Format)</h3>
        <div className="flex gap-4 items-end">
          <div className="text-center">
            <SquareBookCover title="No Status" size="sm" />
            <p className="text-xs text-muted-foreground mt-2">No Status</p>
          </div>
          <div className="text-center">
            <SquareBookCover title="In Progress" size="sm" status="in_progress" progress={65} />
            <p className="text-xs text-muted-foreground mt-2">In Progress</p>
          </div>
          <div className="text-center">
            <SquareBookCover title="Completed" size="sm" status="completed" />
            <p className="text-xs text-muted-foreground mt-2">Completed</p>
          </div>
          <div className="text-center">
            <SquareBookCover title="Abandoned" size="sm" status="abandoned" />
            <p className="text-xs text-muted-foreground mt-2">Abandoned</p>
          </div>
        </div>
      </div>

      {/* User Avatars */}
      <div>
        <h3 className="text-sm font-medium text-foreground mb-4">User Avatars</h3>
        <div className="flex gap-3 items-center">
          <UserAvatar initials="EV" name="Eleanor Vance" color="bg-spiracle-forest" size="xs" />
          <UserAvatar initials="JK" name="James Kirk" color="bg-spiracle-terracotta" size="sm" />
          <UserAvatar initials="SM" name="Sarah Mitchell" color="bg-spiracle-burgundy" size="md" />
        </div>
      </div>

      {/* Progress Bars */}
      <div>
        <h3 className="text-sm font-medium text-foreground mb-4">Progress Bars</h3>
        <div className="space-y-3 max-w-md">
          <div>
            <ProgressBar progress={25} />
            <p className="text-xs text-muted-foreground mt-1">25%</p>
          </div>
          <div>
            <ProgressBar progress={62} />
            <p className="text-xs text-muted-foreground mt-1">62%</p>
          </div>
          <div>
            <ProgressBar progress={100} />
            <p className="text-xs text-muted-foreground mt-1">100%</p>
          </div>
        </div>
      </div>

      {/* Watercolor Bars */}
      <div>
        <h3 className="text-sm font-medium text-foreground mb-4">Watercolor Bars (Genre Visualization)</h3>
        <div className="space-y-3 max-w-md">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Literary Fiction (45%)</p>
            <WatercolorBar
              percentage={45}
              color="bg-spiracle-forest"
            />
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Historical Fiction (30%)</p>
            <WatercolorBar
              percentage={30}
              color="bg-spiracle-burgundy"
            />
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">Mystery (15%)</p>
            <WatercolorBar
              percentage={15}
              color="bg-spiracle-terracotta"
            />
          </div>
        </div>
      </div>

      {/* Star Ratings */}
      <div>
        <h3 className="text-sm font-medium text-foreground mb-4">Star Ratings</h3>
        <div className="flex gap-6">
          <div className="text-center">
            <StarRating rating={5} />
            <p className="text-xs text-muted-foreground mt-2">5 stars</p>
          </div>
          <div className="text-center">
            <StarRating rating={4} />
            <p className="text-xs text-muted-foreground mt-2">4 stars</p>
          </div>
          <div className="text-center">
            <StarRating rating={3} />
            <p className="text-xs text-muted-foreground mt-2">3 stars</p>
          </div>
        </div>
      </div>
    </div>
  );
}

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
    label: "My Spiracle",
    href: "/explorations/my-spiracle",
    description: "Profile page exploration",
    icon: User,
  },
];

export default function MySpiracleStyleGuidePage() {
  const profile = sampleProfile;
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-spiracle-parchment dark:bg-card">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-spiracle-parchment/95 dark:bg-card/95 backdrop-blur-sm border-b border-spiracle-sand dark:border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Hamburger Menu */}
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 -ml-2 text-foreground hover:bg-spiracle-sand/50 dark:hover:bg-secondary/50 rounded-md transition-colors"
              aria-label="Open menu"
            >
              <Menu size={20} strokeWidth={1} />
            </button>
            <Link
              href="/explorations/my-spiracle"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="size-4" />
              Back to page
            </Link>
            <span className="text-muted-foreground/30 hidden sm:inline">|</span>
            <h1 className="font-display text-xl text-foreground hidden sm:block">My Spiracle Components</h1>
          </div>
          <ThemeToggle />
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
            "absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-spiracle-parchment dark:bg-card shadow-xl transition-transform duration-300 ease-out",
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

      {/* Table of Contents */}
      <nav className="bg-spiracle-cream dark:bg-background border-b border-spiracle-sand dark:border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">Jump to section</p>
          <div className="flex flex-wrap gap-2">
            {[
              "Helpers",
              "Visualizations",
              "Profile Header",
              "Listening Life",
              "Reading Constellation",
              "Currently Listening",
              "Collections",
              "Your Library",
              "Book Clubs",
              "Your Reviews",
              "Literary Milestones",
              "Account Footer",
            ].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-xs px-3 py-1.5 rounded-full bg-spiracle-parchment dark:bg-card text-muted-foreground hover:text-foreground hover:bg-spiracle-sand/50 dark:hover:bg-secondary transition-colors"
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Component Sections */}
      <main>
        {/* Helper Components */}
        <div id="helpers">
          <StyleGuideSection
            title="Helper Components"
            description="Reusable building blocks for profile sections"
          >
            <HelperShowcase />
          </StyleGuideSection>
        </div>

        {/* Visualizations */}
        <div id="visualizations">
          <StyleGuideSection
            title="Visualizations"
            description="Data visualization components with hand-drawn aesthetic"
          >
            <div className="p-6 grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-medium text-foreground mb-4">Taste Constellation</h3>
                <TasteConstellation
                  dimensions={profile.tasteProfile.dimensions}
                  className="max-w-[280px]"
                />
              </div>
              <div>
                <h3 className="text-sm font-medium text-foreground mb-4">Discovery Tree Teaser</h3>
                <DiscoveryTreeTeaser
                  data={{
                    book: { title: sampleCurrentlyListening.title, author: sampleCurrentlyListening.author },
                    tags: [
                      { name: "Measured pace", titleCount: 47 },
                      { name: "Literary", titleCount: 124 },
                      { name: "Character-driven", titleCount: 89 },
                    ],
                  }}
                />
              </div>
            </div>
          </StyleGuideSection>
        </div>

        {/* Profile Header */}
        <div id="profile-header">
          <StyleGuideSection
            title="Profile Header"
            description="User profile with avatar, bio, and visibility toggle"
          >
            <ProfileHeader
              screenName={profile.screenName}
              displayName={profile.displayName}
              bio={profile.bio}
              memberSince={profile.memberSince}
              booksCompleted={profile.stats.booksCompleted}
              isProfilePublic={true}
            />
          </StyleGuideSection>
        </div>

        {/* Listening Life */}
        <div id="listening-life">
          <StyleGuideSection
            title="Listening Life"
            description="Stats, genre breakdown, and listening personality"
          >
            <ListeningLife
              stats={profile.stats}
              favouriteGenres={profile.favouriteGenres}
              listeningPersonality={profile.listeningPersonality}
            />
          </StyleGuideSection>
        </div>

        {/* Reading Constellation */}
        <div id="reading-constellation">
          <StyleGuideSection
            title="Reading Constellation"
            description="Taste profile visualization with import CTA"
          >
            <ReadingConstellation
              tasteProfile={profile.tasteProfile}
              showImportCta={true}
              showDiscoveryTeaser={true}
            />
          </StyleGuideSection>
        </div>

        {/* Currently Listening */}
        <div id="currently-listening">
          <StyleGuideSection
            title="Currently Listening"
            description="Active book, up next queue, and AI recommendations"
          >
            <CurrentlyListening
              currentlyListening={sampleCurrentlyListening}
              upNext={sampleUpNext}
              aiSuggestion={sampleAiSuggestion}
            />
          </StyleGuideSection>
        </div>

        {/* Collections */}
        <div id="collections">
          <StyleGuideSection
            title="Collections"
            description="User collections with social layer and shortlist"
          >
            <Collections
              collections={sampleCollections}
              shortlist={sampleShortlist}
            />
          </StyleGuideSection>
        </div>

        {/* Your Library */}
        <div id="your-library">
          <StyleGuideSection
            title="Your Library"
            description="Complete bookshelf grid with filters and status indicators"
          >
            <YourLibrary library={sampleLibrary} />
          </StyleGuideSection>
        </div>

        {/* Book Clubs */}
        <div id="book-clubs">
          <StyleGuideSection
            title="Book Clubs"
            description="Club memberships with start a club CTA"
          >
            <BookClubs bookClubs={sampleBookClubs} />
          </StyleGuideSection>
        </div>

        {/* Your Reviews */}
        <div id="your-reviews">
          <StyleGuideSection
            title="Your Reviews"
            description="User reviews with helpfulness metrics"
          >
            <YourReviews
              reviews={sampleReviews}
              totalHelpfulVotes={profile.totalHelpfulVotes}
            />
          </StyleGuideSection>
        </div>

        {/* Literary Milestones */}
        <div id="literary-milestones">
          <StyleGuideSection
            title="Literary Milestones"
            description="Achievements with subtle literary styling"
          >
            <LiteraryMilestones achievements={sampleAchievements} />
          </StyleGuideSection>
        </div>

        {/* Account Footer */}
        <div id="account-footer">
          <StyleGuideSection
            title="Account Footer"
            description="Settings and help links"
          >
            <AccountFooter />
          </StyleGuideSection>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-spiracle-sand dark:border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-muted-foreground">
            My Spiracle Component Library • {Object.keys({ ProfileHeader, ListeningLife, ReadingConstellation, CurrentlyListening, Collections, YourLibrary, BookClubs, YourReviews, LiteraryMilestones, AccountFooter }).length} section components
          </p>
        </div>
      </footer>
    </div>
  );
}
