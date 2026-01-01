"use client";

import * as React from "react";
import { CollectionCard, InfoBar, BookCoverActions, BookDetails, PurchasePanel, PreviewBar, SerendipityPills, BookCard, type SerendipityPill } from "@/components/molecules";
import { Tag, MinimalDotTag, CornerBadge } from "@/components/atoms";
import Image from "next/image";
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
  PenLine,
  Mic,
  Languages,
  Calendar,
  Globe,
  Building2,
  Barcode,
  List,
  Headphones,
} from "lucide-react";

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
  { icon: PenLine, label: "Author", value: "Tsitsi Dangarembga" },
  { icon: Mic, label: "Narrator", value: "Jay Rayner" },
  { icon: Languages, label: "Translator", value: "Jay Rayner, AN Other" },
  { icon: Calendar, label: "First published:", value: "November 2025" },
  { icon: Globe, label: "Language", value: "English" },
  { icon: Building2, label: "Publisher", value: "Faber and Faber" },
  { icon: Barcode, label: "ISBN13", value: "1234567891011" },
  { icon: List, label: "Version", value: "Unabridged" },
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
      <section className="py-12 sm:py-16 bg-spiracle-cream dark:bg-[#3a332c]">
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
            <p className="mt-3 font-serif text-muted-foreground max-w-lg mx-auto text-left sm:text-center">
              Three tag styles: Primary (below cover), Secondary (minimal dot), Accent (corner badge).
            </p>
          </header>

          {/* All Variants Display */}
          <div className="mb-16 p-6 bg-spiracle-cream dark:bg-[#1a1815] rounded-sm">
            <h3 className="font-display text-xl text-foreground mb-6">
              All Tag Variants
            </h3>

            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">
                  Primary (Tag / BelowCoverTag)
                </p>
                <div className="flex flex-wrap gap-2">
                  <Tag variant="staff-pick" />
                  <Tag variant="spiracle-special" />
                  <Tag variant="new-release" />
                  <Tag variant="free" />
                  <Tag variant="editors-choice" />
                  <Tag variant="limited" />
                  <Tag variant="included" />
                  <Tag variant="offer" />
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">
                  Secondary (MinimalDotTag)
                </p>
                <div className="flex flex-wrap gap-4">
                  <MinimalDotTag variant="staff-pick" />
                  <MinimalDotTag variant="spiracle-special" />
                  <MinimalDotTag variant="new-release" />
                  <MinimalDotTag variant="free" />
                  <MinimalDotTag variant="editors-choice" />
                </div>
              </div>

              <div className="relative p-4 bg-[#2D2520] dark:bg-[#1a1815] rounded-sm">
                <p className="text-xs uppercase tracking-[0.15em] text-[#F4EEDC]/70 mb-3">
                  Accent (CornerBadge) — for strong promotions only
                </p>
                <div className="flex flex-wrap gap-6">
                  <span className="relative inline-block px-6 py-3">
                    <CornerBadge variant="free" className="!relative !top-0 !left-0" />
                  </span>
                  <span className="relative inline-block px-6 py-3">
                    <CornerBadge variant="offer" className="!relative !top-0 !left-0" />
                  </span>
                  <span className="relative inline-block px-6 py-3">
                    <CornerBadge variant="limited" className="!relative !top-0 !left-0" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* MinimalDotTag - Default Style */}
          <div className="mb-16">
            <h3 className="font-display text-xl text-foreground mb-2 border-b border-border pb-2">
              MinimalDotTag — Default Style
            </h3>
            <p className="text-sm text-muted-foreground mb-6 font-serif text-left">
              The default tag style. Clean, editorial, never competes with cover art.
              Just use <code className="text-xs bg-muted px-1 py-0.5 rounded">tag=&quot;variant&quot;</code> on BookCard.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              <BookCard
                title="The Night Watch"
                author="Sarah Waters"
                coverImage="/images/covers/cover-med-01.png"
                tag="staff-pick"
                hidePremiumLabel
              />
              <BookCard
                title="White Teeth"
                author="Zadie Smith"
                coverImage="/images/covers/cover-med-08.png"
                tag="spiracle-special"
                hidePremiumLabel
              />
              <BookCard
                title="The Overstory"
                author="Richard Powers"
                coverImage="/images/covers/cover-med-03.png"
                tag="new-release"
                hidePremiumLabel
              />
              <BookCard
                title="Shuggie Bain"
                author="Douglas Stuart"
                coverImage="/images/covers/cover-med-02.png"
                tag="free"
                hidePremiumLabel
              />
              <BookCard
                title="Wolf Hall"
                author="Hilary Mantel"
                coverImage="/images/covers/cover-med-04.png"
                tag="editors-choice"
                hidePremiumLabel
              />
            </div>
          </div>

          {/* Bold Tag Style */}
          <div className="mb-16">
            <h3 className="font-display text-xl text-foreground mb-2 border-b border-border pb-2">
              BelowCoverTag (Bold) — For Emphasis
            </h3>
            <p className="text-sm text-muted-foreground mb-6 font-serif text-left">
              Use <code className="text-xs bg-muted px-1 py-0.5 rounded">tagStyle=&quot;bold&quot;</code> when you need the tag to stand out more.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <BookCard
                title="The Night Watch"
                author="Sarah Waters"
                coverImage="/images/covers/cover-med-01.png"
                tag="staff-pick"
                tagStyle="bold"
                hidePremiumLabel
              />
              <BookCard
                title="White Teeth"
                author="Zadie Smith"
                coverImage="/images/covers/cover-med-08.png"
                tag="spiracle-special"
                tagStyle="bold"
                hidePremiumLabel
              />
              <BookCard
                title="The Overstory"
                author="Richard Powers"
                coverImage="/images/covers/cover-med-03.png"
                tag="new-release"
                tagStyle="bold"
                hidePremiumLabel
              />
              <BookCard
                title="Shuggie Bain"
                author="Douglas Stuart"
                coverImage="/images/covers/cover-med-02.png"
                badge="free"
                hidePremiumLabel
              />
            </div>
          </div>

          {/* Corner Badge on Covers */}
          <div className="mb-16">
            <h3 className="font-display text-xl text-foreground mb-2 border-b border-border pb-2">
              CornerBadge (Accent) — Use Sparingly
            </h3>
            <p className="text-sm text-muted-foreground mb-6 font-serif text-left">
              Only for high-impact promotions like &ldquo;Free&rdquo;, &ldquo;50% Off&rdquo;, or &ldquo;Limited Edition&rdquo;.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="relative rounded-sm overflow-hidden shadow-md aspect-square">
                <Image
                  src="/images/covers/cover-med-04.png"
                  alt="Free badge test"
                  fill
                  className="object-cover"
                />
                <CornerBadge variant="free" position="top-left" />
              </div>
              <div className="relative rounded-sm overflow-hidden shadow-md aspect-square">
                <Image
                  src="/images/covers/cover-med-05.png"
                  alt="Offer badge test"
                  fill
                  className="object-cover"
                />
                <CornerBadge variant="offer" position="top-left">50% Off</CornerBadge>
              </div>
              <div className="relative rounded-sm overflow-hidden shadow-md aspect-square">
                <Image
                  src="/images/covers/cover-med-06.png"
                  alt="Limited badge test"
                  fill
                  className="object-cover"
                />
                <CornerBadge variant="limited" position="top-right" />
              </div>
              <div className="relative rounded-sm overflow-hidden shadow-md aspect-square">
                <Image
                  src="/images/covers/cover-med-07.png"
                  alt="New release badge test"
                  fill
                  className="object-cover"
                />
                <CornerBadge variant="new-release" position="top-right" />
              </div>
            </div>
          </div>

          {/* Usage Guidelines */}
          <div className="py-8 border-t border-border">
            <h3 className="font-display text-xl text-foreground mb-6">
              Usage Guidelines
            </h3>
            <div className="grid sm:grid-cols-3 gap-8">
              <div>
                <p className="font-medium text-foreground mb-2">Tag (Primary)</p>
                <p className="font-serif text-sm text-muted-foreground text-left mb-2">
                  Default for BookCards. Appears in footer below cover.
                </p>
                <code className="block text-xs bg-muted p-2 rounded-sm">
                  {`<Tag variant="staff-pick" />`}
                </code>
              </div>
              <div>
                <p className="font-medium text-foreground mb-2">MinimalDotTag (Secondary)</p>
                <p className="font-serif text-sm text-muted-foreground text-left mb-2">
                  Subtle contexts — lists, sidebars, multiple tags.
                </p>
                <code className="block text-xs bg-muted p-2 rounded-sm">
                  {`<MinimalDotTag variant="new" />`}
                </code>
              </div>
              <div>
                <p className="font-medium text-foreground mb-2">CornerBadge (Accent)</p>
                <p className="font-serif text-sm text-muted-foreground text-left mb-2">
                  High-impact promotions only. On cover.
                </p>
                <code className="block text-xs bg-muted p-2 rounded-sm">
                  {`<CornerBadge variant="free" />`}
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
