"use client";

import { CollectionCard, InfoBar, BookCoverActions, BookDetails, PurchasePanel } from "@/components/molecules";
import {
  BentoHero,
  CollectionShowcase,
  CollectionSpotlight,
  CriticsSection,
  TopNavigation,
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
  return (
    <div className="min-h-screen">
      {/* Top Navigation */}
      <TopNavigation
        navItems={navItems}
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
    </div>
  );
}
