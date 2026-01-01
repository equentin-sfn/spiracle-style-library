"use client";

import * as React from "react";
import { CollectionCard, InfoBar, BookCoverActions, BookDetails, PurchasePanel, PreviewBar, SerendipityPills, type SerendipityPill } from "@/components/molecules";
import { Tag, TagRibbon } from "@/components/atoms";
import {
  BentoHero,
  CollectionShowcase,
  CollectionSpotlight,
  CriticsSection,
  TopNavigation,
  DiscoveryMachine,
  type DiscoveryMachineResult,
} from "@/components/organisms";
import {
  Book,
  Timer,
  PencilLine,
  Microphone,
  Translate,
  Calendar,
  Globe,
  Buildings,
  Barcode,
  ListBullets,
  Headphones,
} from "@phosphor-icons/react";

const navItems = [
  { label: "Audiobooks", href: "/audiobooks" },
  { label: "Murmurations", href: "/murmurations" },
  { label: "Bookshops", href: "/bookshops" },
  { label: "About", href: "/about" },
  { label: "Membership", href: "/membership" },
];

// Sample serendipity pills data
const serendipityPillsData: SerendipityPill[] = [
  { id: "scottish-gothic", label: "Scottish Gothic" },
  { id: "comfort-reads", label: "Comfort reads" },
  { id: "under-4-hours", label: "Under 4 hours" },
  { id: "train-journey", label: "Train journey listens" },
  { id: "cosy-mysteries", label: "Cosy mysteries" },
  { id: "award-winners", label: "Award winners I missed" },
];

// Sample discovery machine results
const sampleDiscoveryResults: DiscoveryMachineResult = {
  collectionTitle: "Cosy Scottish Mysteries",
  collectionDescription: "Atmospheric tales of intrigue set among misty lochs and ancient castles, perfect for dark winter evenings.",
  books: [
    { id: "1", title: "The Vanishing Act of Esme Lennox", author: "Maggie O'Farrell", coverImage: "/images/covers/cover-med-01.png" },
    { id: "2", title: "Loch Down Abbey", author: "Beth Cowan-Erskine", coverImage: "/images/covers/cover-med-02.png" },
    { id: "3", title: "The Dead of Winter", author: "Stuart MacBride", coverImage: "/images/covers/cover-med-03.png" },
    { id: "4", title: "A Grave Talent", author: "Laurie R. King", coverImage: "/images/covers/cover-med-04.png" },
  ],
};

const infoBarItems = [
  { icon: Book, label: "Book 1 of 2", value: "The Wire" },
  { icon: Timer, label: "Duration", value: "2hrs and 25mins" },
  { icon: PencilLine, label: "Author", value: "Tsitsi Dangarembga" },
  { icon: Microphone, label: "Narrator", value: "Jay Rayner" },
  { icon: Translate, label: "Translator", value: "Jay Rayner, AN Other" },
  { icon: Calendar, label: "First published:", value: "November 2025" },
  { icon: Globe, label: "Language", value: "English" },
  { icon: Buildings, label: "Publisher", value: "Faber and Faber" },
  { icon: Barcode, label: "ISBN13", value: "1234567891011" },
  { icon: ListBullets, label: "Version", value: "Unabridged" },
  { icon: Headphones, label: "Audiobook", value: "" },
];

export default function ShowcasePage() {
  const [discoveryValue, setDiscoveryValue] = React.useState("");
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [showResults, setShowResults] = React.useState(false);

  const handleGenerate = (_prompt: string) => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      setShowResults(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <PreviewBar currentPath="/preview/showcase" />
      {/* Top Navigation */}
      <TopNavigation
        navItems={navItems}
        logoHref="/preview"
        onSearch={() => console.log("Search clicked")}
        onCart={() => console.log("Cart clicked")}
        loginHref="/login"
        joinHref="/join"
      />

      {/* Info Bar */}
      <InfoBar items={infoBarItems} className="border-y border-border" />

      {/* Book Details Section */}
      <section className="py-12 sm:py-16 bg-spiracle-cream">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[280px_1fr_280px] gap-8 lg:gap-10">
            {/* Left Column: Cover + Actions */}
            <BookCoverActions
              bookTitle="Chewing the Fat"
              coverImage="/images/covers/cover-med-01.png"
              onSample={() => console.log("Sample clicked")}
              addToLibraryHref="/library/add"
              favoriteHref="/favorites/add"
              tags={[
                { label: "Tagline", href: "/tags/tagline" },
                { label: "Tagline", href: "/tags/tagline" },
                { label: "Tagline", href: "/tags/tagline" },
                { label: "Tagline", href: "/tags/tagline" },
                { label: "Tagline", href: "/tags/tagline" },
                { label: "Tagline", href: "/tags/tagline" },
              ]}
            />

            {/* Middle Column: Book Details */}
            <BookDetails
              title="Chewing the Fat"
              author={{ name: "Jay Rayner", href: "/authors/jay-rayner" }}
              rating={{ score: 4.6, count: "1.2k" }}
              bookCount={26}
              userCount={26}
              narrator={{ name: "Jay Rayner", href: "/narrators/jay-rayner" }}
              length="3hrs and 52mins"
              publisher={{ name: "Faber and Faber", href: "/publishers/faber" }}
              series={{ title: "Catalina", bookNumber: 1, href: "/series/catalina" }}
              spiracleDescription="Jay Rayner brings his signature blend of righteous indignation and genuine affection to the table. This is food writing with teeth: acerbic, warm, occasionally furious, and always hungry for more than just dinner. Rayner narrates his own work with the same combative relish he brings to a disappointing tasting menu, turning decades of restaurant columns into something closer to memoir. Best consumed in short bursts, like tapas, or all at once, like a Sunday roast you've been thinking about since Wednesday."
              publisherDescription="Why are gravy stains on your shirt at the dinner table to be admired?

Does bacon improve everything?

And is gin really the devil's work?

In this rollicking collection of his hilarious columns, the award-winning writer and Observer restaurant critic Jay Rayner answers these vital questions and many, many more. They are glorious dispatches, seasoned in equal measure with both enthusiasm and bile, from decades at the very frontline of eating."
              maxDescriptionLength={400}
            />

            {/* Right Column: Purchase Panel */}
            <PurchasePanel
              trialMessage="Your Spiracle trial includes this free title"
              trialPrice="£0.00"
              trialCtaText="Start your 30-day free trial"
              trialCtaHref="/trial"
              benefits={[
                "We offer the following benefits with your trial:",
                "One credit a month, good for any title to download and keep.",
                "Unlimited listening to thousands of audiobooks and podcasts.",
                "Cancel monthly.",
                "Spiracle is £8.99/month after 30 days. Renews automatically. See spiracleaudiobooks.com/offer for eligibility.",
              ]}
              buyPrice="£6"
              memberPrice="£5"
              buyCtaHref="/buy"
            />
          </div>
        </div>
      </section>

      {/* Section 0: Collection Spotlight */}
      <CollectionSpotlight
        heroImage="/images/hero-spotlight.png"
        label="Collection"
        headline="Celebrating Black History Month"
        description="Add a concise value statement that highlights your product's key features and benefits in a visually dynamic grid. Focus on creating balanced content blocks while keeping it under 2-3 lines. Align with your grid layout structure."
        ctaText="Browse the collection"
        ctaLink="#"
        themeColor="#1a1a1a"
        themeMode="dark"
        books={[
          {
            title: "Black and Female",
            author: "Tsitsi Dangarembga",
            coverImage: "/images/covers/cover-med-01.png",
          },
          {
            title: "The Strangers",
            author: "Ekow Eshun",
            coverImage: "/images/covers/cover-med-02.png",
          },
          {
            title: "Flashlight",
            author: "Susan Choi",
            coverImage: "/images/covers/cover-med-03.png",
          },
          {
            title: "Black Skin, White Masks",
            author: "Frantz Fanon",
            coverImage: "/images/covers/cover-med-04.png",
          },
          {
            title: "The Shadow Line",
            author: "Joseph Conrad",
            coverImage: "/images/covers/cover-med-05.png",
          },
          {
            title: "Heart of Darkness",
            author: "Joseph Conrad",
            coverImage: "/images/covers/cover-med-06.png",
          },
        ]}
      />

      {/* Section 1: Bento Hero */}
      <BentoHero
        sectionLabel="Bento Grid Section"
        title="Feature-rich layout that captures attention"
        description="Add a concise value statement that highlights your product's key features and benefits in a visually dynamic grid. Focus on creating balanced content blocks while keeping it under 2-3 lines. Align with your grid layout structure."
        books={[
          {
            title: "The Door",
            author: "Magda Szabó",
            coverImage: "/images/covers/cover-med-01.png",
          },
          {
            title: "The Golden Notebook",
            author: "Doris Lessing",
            coverImage: "/images/covers/cover-med-02.png",
          },
        ]}
      />

      {/* Section 2: Collection Cards Grid */}
      <section className="py-12 sm:py-16" style={{ backgroundColor: "#2D2520" }}>
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <header className="text-center mb-6 sm:mb-8">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/60">
              Found in the following collections →
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <CollectionCard
              title="Title over two or three lines depending on..."
              image="/images/collections/image-1.png"
              bookCount={26}
              memberCount={26}
            />
            <CollectionCard
              title="Title over two or three lines depending on..."
              image="/images/collections/image-2.png"
              bookCount={26}
              memberCount={26}
            />
            <CollectionCard
              title="Title over two or three lines depending on..."
              image="/images/collections/image-3.png"
              bookCount={26}
              memberCount={26}
            />
            <CollectionCard
              title="Title over two or three lines depending on..."
              image="/images/collections/image-4.png"
              bookCount={26}
              memberCount={26}
            />
            <CollectionCard
              title="Title over two or three lines depending on..."
              image="/images/collections/image-5.png"
              bookCount={26}
              memberCount={26}
            />
            <CollectionCard
              title="Title over two or three lines depending on..."
              image="/images/collections/image-6.png"
              bookCount={26}
              memberCount={26}
            />
          </div>
        </div>
      </section>

      {/* Section 3: Collection Showcase */}
      <CollectionShowcase
        collectionName="Top 10 Books That Changed Britain"
        collectionDescription="Original voices, overturning conventions, causing trouble. Perfect listening."
        coverImages={[
          "/images/covers/cover-med-02.png",
          "/images/covers/cover-med-03.png",
          "/images/covers/cover-med-04.png",
          "/images/covers/cover-med-05.png",
          "/images/covers/cover-med-06.png",
        ]}
      />

      {/* Section 4: Critics Section */}
      <CriticsSection
        sectionLabel="What the critics are saying"
        reviews={[
          {
            publication: "The Guardian",
            publicationLogo: "/logos/Pro Blocks/Bento Grid/Logos-guardian.png",
            rating: 4,
            reviewTitle: "A masterpiece of modern literature",
            reviewExcerpt:
              "Imagine both Oshima & Borowczyk working together after their notorious years at Argo Films and still there again – frankly this film would be the answer (without the extreme). It's a beautifully, melancholic, surreal, & erotic work of art from the unique Terayama and also one not to be overlooked. Everything looked pretty surreal in its production design and dreams/flashbacks, let me tell you that.",
            journalistName: "Sarah Mitchell",
            date: "15 October 2024",
            reviewUrl: "#",
          },
          {
            publication: "Financial Times",
            publicationLogo: "/logos/Pro Blocks/Bento Grid/Logos-financial-times.png",
            rating: 4,
            reviewTitle: "Exceptional storytelling",
            reviewExcerpt:
              "Imagine both Oshima & Borowczyk working together after their notorious years at Argo Films and still there again – frankly this film would be the answer (without the extreme). It's a beautifully, melancholic, surreal, & erotic work of art from the unique Terayama and also one not to be overlooked. Everything looked pretty surreal in its production design and dreams/flashbacks, let me tell you that.",
            journalistName: "James Chen",
            date: "12 October 2024",
            reviewUrl: "#",
          },
          {
            publication: "Los Angeles Times",
            publicationLogo: "/logos/Pro Blocks/Bento Grid/Logos-la-times.png",
            rating: 4,
            reviewTitle: "A triumph of the audiobook form",
            reviewExcerpt:
              "Imagine both Oshima & Borowczyk working together after their notorious years at Argo Films and still there again – frankly this film would be the answer (without the extreme). It's a beautifully, melancholic, surreal, & erotic work of art from the unique Terayama and also one not to be overlooked. Everything looked pretty surreal in its production design and dreams/flashbacks, let me tell you that.",
            journalistName: "Maria Rodriguez",
            date: "10 October 2024",
            reviewUrl: "#",
          },
        ]}
      />

      {/* Section 5: Serendipity Pills */}
      <section className="py-12 sm:py-16 bg-spiracle-cream">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <SerendipityPills
            pills={serendipityPillsData}
            onPillClick={(pill) => console.log("Clicked:", pill.label)}
            onShuffle={() => console.log("Shuffled!")}
          />
        </div>
      </section>

      {/* Section 6: Discovery Machine */}
      <DiscoveryMachine
        value={discoveryValue}
        onValueChange={setDiscoveryValue}
        onGenerate={handleGenerate}
        isGenerating={isGenerating}
        results={showResults ? sampleDiscoveryResults : null}
      />

      {/* Section 7: Tag System Preview */}
      <section className="py-16 sm:py-20 bg-spiracle-parchment dark:bg-[#2D2520]">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <header className="text-center mb-12">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-spiracle-terracotta dark:text-spiracle-honey font-medium mb-3">
              Component System
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground">
              Tags & Labels
            </h2>
            <p className="mt-3 font-serif text-muted-foreground max-w-lg mx-auto">
              Promotional and status labels for books, collections, and editorial content.
            </p>
          </header>

          {/* PILL STYLE - All Variants */}
          <div className="mb-16">
            <h3 className="font-display text-xl text-foreground mb-6 border-b border-border pb-2">
              Pill Style
            </h3>

            {/* Promotional Tags */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">
                Promotional
              </p>
              <div className="flex flex-wrap gap-2">
                <Tag variant="offer" />
                <Tag variant="offer">2 for 1</Tag>
                <Tag variant="free" />
                <Tag variant="best-value" />
                <Tag variant="limited" />
              </div>
            </div>

            {/* Editorial Tags */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">
                Editorial
              </p>
              <div className="flex flex-wrap gap-2">
                <Tag variant="staff-pick" />
                <Tag variant="pick-of-week" />
                <Tag variant="pick-of-month" />
                <Tag variant="editors-choice" />
              </div>
            </div>

            {/* Product Tags */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">
                Product
              </p>
              <div className="flex flex-wrap gap-2">
                <Tag variant="spiracle-special" />
                <Tag variant="spiracle-edition" />
                <Tag variant="new" />
                <Tag variant="new-release" />
                <Tag variant="exclusive" />
              </div>
            </div>

            {/* Status Tags */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">
                Status
              </p>
              <div className="flex flex-wrap gap-2">
                <Tag variant="included" />
                <Tag variant="coming-soon" />
                <Tag variant="preorder" />
              </div>
            </div>

            {/* Sizes */}
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">
                Sizes
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Tag variant="new" size="sm" />
                <Tag variant="new" size="md" />
                <span className="text-xs text-muted-foreground ml-2">sm / md</span>
              </div>
            </div>
          </div>

          {/* FLAG STYLE */}
          <div className="mb-16">
            <h3 className="font-display text-xl text-foreground mb-6 border-b border-border pb-2">
              Flag Style
            </h3>

            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">
                Direction: Right (default)
              </p>
              <div className="flex flex-wrap gap-3">
                <Tag variant="spiracle-special" tagStyle="flag" />
                <Tag variant="new-release" tagStyle="flag" />
                <Tag variant="best-value" tagStyle="flag" />
                <Tag variant="offer" tagStyle="flag">2 for 1</Tag>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">
                Direction: Left
              </p>
              <div className="flex flex-wrap gap-3">
                <Tag variant="editors-choice" tagStyle="flag" flagDirection="left" />
                <Tag variant="staff-pick" tagStyle="flag" flagDirection="left" />
                <Tag variant="limited" tagStyle="flag" flagDirection="left" />
              </div>
            </div>
          </div>

          {/* RIBBON STYLE - On Sample Cards */}
          <div>
            <h3 className="font-display text-xl text-foreground mb-6 border-b border-border pb-2">
              Ribbon Style (on cards)
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Sample Card with Spiracle Special ribbon */}
              <div className="relative bg-card rounded-sm overflow-hidden border border-border aspect-[3/4]">
                <TagRibbon variant="spiracle-special" />
                <div className="absolute inset-0 flex items-end p-4">
                  <div>
                    <p className="font-serif text-sm text-foreground">Sample Book</p>
                    <p className="text-xs text-muted-foreground">Author Name</p>
                  </div>
                </div>
              </div>

              {/* Sample Card with New Release ribbon */}
              <div className="relative bg-card rounded-sm overflow-hidden border border-border aspect-[3/4]">
                <TagRibbon variant="new-release" />
                <div className="absolute inset-0 flex items-end p-4">
                  <div>
                    <p className="font-serif text-sm text-foreground">Sample Book</p>
                    <p className="text-xs text-muted-foreground">Author Name</p>
                  </div>
                </div>
              </div>

              {/* Sample Card with Best Value ribbon */}
              <div className="relative bg-card rounded-sm overflow-hidden border border-border aspect-[3/4]">
                <TagRibbon variant="best-value" />
                <div className="absolute inset-0 flex items-end p-4">
                  <div>
                    <p className="font-serif text-sm text-foreground">Sample Book</p>
                    <p className="text-xs text-muted-foreground">Author Name</p>
                  </div>
                </div>
              </div>

              {/* Sample Card with Offer ribbon */}
              <div className="relative bg-card rounded-sm overflow-hidden border border-border aspect-[3/4]">
                <TagRibbon variant="offer">2 for 1</TagRibbon>
                <div className="absolute inset-0 flex items-end p-4">
                  <div>
                    <p className="font-serif text-sm text-foreground">Sample Book</p>
                    <p className="text-xs text-muted-foreground">Author Name</p>
                  </div>
                </div>
              </div>

              {/* Sample Card with Free ribbon */}
              <div className="relative bg-card rounded-sm overflow-hidden border border-border aspect-[3/4]">
                <TagRibbon variant="free" />
                <div className="absolute inset-0 flex items-end p-4">
                  <div>
                    <p className="font-serif text-sm text-foreground">Sample Book</p>
                    <p className="text-xs text-muted-foreground">Author Name</p>
                  </div>
                </div>
              </div>

              {/* Sample Card with Editor's Choice ribbon */}
              <div className="relative bg-card rounded-sm overflow-hidden border border-border aspect-[3/4]">
                <TagRibbon variant="editors-choice" />
                <div className="absolute inset-0 flex items-end p-4">
                  <div>
                    <p className="font-serif text-sm text-foreground">Sample Book</p>
                    <p className="text-xs text-muted-foreground">Author Name</p>
                  </div>
                </div>
              </div>

              {/* Sample Card with Limited ribbon */}
              <div className="relative bg-card rounded-sm overflow-hidden border border-border aspect-[3/4]">
                <TagRibbon variant="limited" />
                <div className="absolute inset-0 flex items-end p-4">
                  <div>
                    <p className="font-serif text-sm text-foreground">Sample Book</p>
                    <p className="text-xs text-muted-foreground">Author Name</p>
                  </div>
                </div>
              </div>

              {/* Sample Card with Coming Soon ribbon */}
              <div className="relative bg-card rounded-sm overflow-hidden border border-border aspect-[3/4]">
                <TagRibbon variant="coming-soon" />
                <div className="absolute inset-0 flex items-end p-4">
                  <div>
                    <p className="font-serif text-sm text-foreground">Sample Book</p>
                    <p className="text-xs text-muted-foreground">Author Name</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
