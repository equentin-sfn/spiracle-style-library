"use client";

import { CollectionCard } from "@/components/molecules";
import { BentoHero, CollectionShowcase, CollectionSpotlight } from "@/components/organisms";

export default function ShowcasePage() {
  return (
    <div className="min-h-screen">
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
            coverImage: "/images/covers/Size=Med, Image=01.png",
            price: "14.99",
            memberPrice: "11.99",
          },
          {
            title: "The Strangers",
            author: "Ekow Eshun",
            coverImage: "/images/covers/Size=Med, Image=02.png",
            price: "16.99",
            memberPrice: "13.99",
          },
          {
            title: "Flashlight",
            author: "Susan Choi",
            coverImage: "/images/covers/Size=Med, Image=03.png",
            price: "12.99",
            memberPrice: "9.99",
          },
          {
            title: "Black Skin, White Masks",
            author: "Frantz Fanon",
            coverImage: "/images/covers/Size=Med, Image=04.png",
            price: "11.99",
            memberPrice: "8.99",
          },
          {
            title: "The Shadow Line",
            author: "Joseph Conrad",
            coverImage: "/images/covers/Size=Med, Image=05.png",
            price: "13.99",
            memberPrice: "10.99",
          },
          {
            title: "Heart of Darkness",
            author: "Joseph Conrad",
            coverImage: "/images/covers/Size=Med, Image=06.png",
            price: "12.99",
            memberPrice: "9.99",
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
            coverImage: "/images/covers/Size=Med, Image=01.png",
            price: "14.99",
            memberPrice: "11.99",
          },
          {
            title: "The Golden Notebook",
            author: "Doris Lessing",
            coverImage: "/images/covers/Size=Med, Image=02.png",
            price: "16.99",
            memberPrice: "13.99",
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
          "/images/covers/Size=Med, Image=02.png",
          "/images/covers/Size=Med, Image=03.png",
          "/images/covers/Size=Med, Image=04.png",
          "/images/covers/Size=Med, Image=05.png",
          "/images/covers/Size=Med, Image=06.png",
        ]}
      />
    </div>
  );
}
