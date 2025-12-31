"use client";

import { CollectionSpotlight, TopNavigation } from "@/components/organisms";

const navItems = [
  { label: "Audiobooks", href: "/audiobooks" },
  { label: "Murmurations", href: "/murmurations" },
  { label: "Bookshops", href: "/bookshops" },
  { label: "About", href: "/about" },
  { label: "Membership", href: "/membership" },
];

// Pride collection books - diverse LGBTQ+ voices
const prideBooks = [
  {
    title: "Giovanni's Room",
    author: "James Baldwin",
    coverImage: "/images/covers/cover-med-01.png",
  },
  {
    title: "The Price of Salt",
    author: "Patricia Highsmith",
    coverImage: "/images/covers/cover-med-02.png",
  },
  {
    title: "Orlando",
    author: "Virginia Woolf",
    coverImage: "/images/covers/cover-med-03.png",
  },
  {
    title: "Rubyfruit Jungle",
    author: "Rita Mae Brown",
    coverImage: "/images/covers/cover-med-04.png",
  },
  {
    title: "The Well of Loneliness",
    author: "Radclyffe Hall",
    coverImage: "/images/covers/cover-med-05.png",
  },
  {
    title: "A Single Man",
    author: "Christopher Isherwood",
    coverImage: "/images/covers/cover-med-06.png",
  },
  {
    title: "Oranges Are Not the Only Fruit",
    author: "Jeanette Winterson",
    coverImage: "/images/covers/cover-lg-07.png",
  },
  {
    title: "Maurice",
    author: "E.M. Forster",
    coverImage: "/images/covers/cover-lg-08.png",
  },
];

// Railway journeys books - travel writing and rail adventures
const railwayBooks = [
  {
    title: "The Great Railway Bazaar",
    author: "Paul Theroux",
    coverImage: "/images/covers/cover-lg-01.png",
  },
  {
    title: "Night Train to Lisbon",
    author: "Pascal Mercier",
    coverImage: "/images/covers/cover-lg-02.png",
  },
  {
    title: "Murder on the Orient Express",
    author: "Agatha Christie",
    coverImage: "/images/covers/cover-lg-03.png",
  },
  {
    title: "The Old Patagonian Express",
    author: "Paul Theroux",
    coverImage: "/images/covers/cover-lg-04.png",
  },
  {
    title: "Strangers on a Train",
    author: "Patricia Highsmith",
    coverImage: "/images/covers/cover-lg-05.png",
  },
  {
    title: "The Trans-Siberian Railway",
    author: "Eric Newby",
    coverImage: "/images/covers/cover-lg-06.png",
  },
  {
    title: "Ghost Train to the Eastern Star",
    author: "Paul Theroux",
    coverImage: "/images/covers/cover-lg-09.png",
  },
  {
    title: "The Lady Vanishes",
    author: "Ethel Lina White",
    coverImage: "/images/covers/cover-lg-10.png",
  },
];

export default function SpotlightsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <TopNavigation
        navItems={navItems}
        onSearch={() => console.log("Search clicked")}
        onCart={() => console.log("Cart clicked")}
        loginHref="/login"
        joinHref="/join"
      />

      {/* Pride Parade Collection */}
      <CollectionSpotlight
        heroImage="/images/pride-hero.png"
        label="Collection"
        headline="A Pride Parade"
        description="Stories of love, identity, and belonging from voices that refused to be silenced. These works shaped how we understand ourselves and each other—brave, tender, and unapologetically alive."
        ctaText="Browse the collection"
        ctaLink="/collections/pride"
        books={prideBooks}
        themeColor="#0f1c2e"
        themeMode="dark"
      />

      {/* Spacer between spotlights */}
      <div className="h-16 sm:h-24 bg-background" />

      {/* Railway Journeys Collection */}
      <CollectionSpotlight
        heroImage="/images/train-journey-hero.png"
        label="Collection"
        headline="Railway Journeys"
        description="The romance of the rails—window seats and strangers, sleeper cars and station farewells. Travel writing that moves at the perfect pace, where the journey itself becomes the destination."
        ctaText="Browse the collection"
        ctaLink="/collections/railway-journeys"
        books={railwayBooks}
        themeColor="#8b9298"
        themeMode="dark"
      />
    </div>
  );
}
