"use client";

import * as React from "react";
import { PreviewBar, SerendipityPills, type SerendipityPill } from "@/components/molecules";
import {
  TopNavigation,
  DiscoveryMachine,
  Footer,
  type DiscoveryMachineResult,
  type SocialLink,
} from "@/components/organisms";
import {
  TwitterLogo,
  InstagramLogo,
  FacebookLogo,
} from "@phosphor-icons/react";

const navItems = [
  { label: "Audiobooks", href: "/audiobooks" },
  { label: "Murmurations", href: "/murmurations" },
  { label: "Bookshops", href: "/bookshops" },
  { label: "About", href: "/about" },
  { label: "Membership", href: "/membership" },
];

// Discovery pill suggestions - curated editorial prompts
const discoveryPills: SerendipityPill[] = [
  { id: "scottish-gothic", label: "Scottish Gothic" },
  { id: "comfort-reads", label: "Comfort reads" },
  { id: "under-4-hours", label: "Under 4 hours" },
  { id: "train-journey", label: "Train journey listens" },
  { id: "cosy-mysteries", label: "Cosy mysteries" },
  { id: "award-winners", label: "Award winners I missed" },
  { id: "feminist-classics", label: "Feminist classics" },
  { id: "quiet-books", label: "Quiet, contemplative books" },
];

// Alternative sets for shuffling
const alternativePillSets: SerendipityPill[][] = [
  [
    { id: "nordic-noir", label: "Nordic noir" },
    { id: "memoir-mood", label: "In the mood for memoir" },
    { id: "short-stories", label: "Short story collections" },
    { id: "walking-books", label: "Perfect for walks" },
    { id: "unreliable-narrators", label: "Unreliable narrators" },
    { id: "found-family", label: "Found family stories" },
    { id: "nature-writing", label: "Nature writing" },
    { id: "debut-novels", label: "Debut novels" },
  ],
  [
    { id: "gothic-romance", label: "Gothic romance" },
    { id: "historical-fiction", label: "Rich historical fiction" },
    { id: "literary-thrillers", label: "Literary thrillers" },
    { id: "cooking-books", label: "Books about cooking" },
    { id: "translated-fiction", label: "Translated fiction" },
    { id: "cult-classics", label: "Cult classics" },
    { id: "slow-burn", label: "Slow-burn reads" },
    { id: "experimental", label: "Something experimental" },
  ],
];

// Sample results for different prompts
const sampleResults: Record<string, DiscoveryMachineResult> = {
  default: {
    collectionTitle: "Cosy Scottish Mysteries",
    collectionDescription:
      "Atmospheric tales of intrigue set among misty lochs and ancient castles, perfect for dark winter evenings.",
    books: [
      {
        id: "1",
        title: "The Vanishing Act of Esme Lennox",
        author: "Maggie O'Farrell",
        coverImage: "/images/covers/cover-med-01.png",
      },
      {
        id: "2",
        title: "Loch Down Abbey",
        author: "Beth Cowan-Erskine",
        coverImage: "/images/covers/cover-med-02.png",
      },
      {
        id: "3",
        title: "The Dead of Winter",
        author: "Stuart MacBride",
        coverImage: "/images/covers/cover-med-03.png",
      },
      {
        id: "4",
        title: "A Grave Talent",
        author: "Laurie R. King",
        coverImage: "/images/covers/cover-med-04.png",
      },
      {
        id: "5",
        title: "The Crossing Places",
        author: "Elly Griffiths",
        coverImage: "/images/covers/cover-med-05.png",
      },
      {
        id: "6",
        title: "The Devotion of Suspect X",
        author: "Keigo Higashino",
        coverImage: "/images/covers/cover-med-06.png",
      },
    ],
  },
  "book club": {
    collectionTitle: "Perfect for Book Clubs",
    collectionDescription:
      "Discussion-worthy novels with rich themes and memorable characters that spark conversation.",
    books: [
      {
        id: "1",
        title: "Hamnet",
        author: "Maggie O'Farrell",
        coverImage: "/images/covers/cover-med-02.png",
      },
      {
        id: "2",
        title: "The Midnight Library",
        author: "Matt Haig",
        coverImage: "/images/covers/cover-med-03.png",
      },
      {
        id: "3",
        title: "Shuggie Bain",
        author: "Douglas Stuart",
        coverImage: "/images/covers/cover-med-04.png",
      },
      {
        id: "4",
        title: "Piranesi",
        author: "Susanna Clarke",
        coverImage: "/images/covers/cover-med-05.png",
      },
    ],
  },
  gift: {
    collectionTitle: "The Perfect Literary Gift",
    collectionDescription:
      "Universally beloved books that make wonderful gifts for the reader in your life.",
    books: [
      {
        id: "1",
        title: "A Gentleman in Moscow",
        author: "Amor Towles",
        coverImage: "/images/covers/cover-med-01.png",
      },
      {
        id: "2",
        title: "The House in the Cerulean Sea",
        author: "TJ Klune",
        coverImage: "/images/covers/cover-med-03.png",
      },
      {
        id: "3",
        title: "Circe",
        author: "Madeline Miller",
        coverImage: "/images/covers/cover-med-05.png",
      },
      {
        id: "4",
        title: "The Secret History",
        author: "Donna Tartt",
        coverImage: "/images/covers/cover-med-06.png",
      },
    ],
  },
};

const footerColumns = [
  {
    title: "Discover",
    links: [
      { label: "Browse audiobooks", href: "/audiobooks" },
      { label: "New releases", href: "/new" },
      { label: "Collections", href: "/collections" },
      { label: "Gift cards", href: "/gifts" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our story", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help centre", href: "/help" },
      { label: "Contact us", href: "/contact" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
];

const socialLinks: SocialLink[] = [
  { icon: TwitterLogo, href: "https://twitter.com/spiracle", label: "Twitter" },
  { icon: InstagramLogo, href: "https://instagram.com/spiracle", label: "Instagram" },
  { icon: FacebookLogo, href: "https://facebook.com/spiracle", label: "Facebook" },
];

export default function DiscoveryMachinePage() {
  const [pills, setPills] = React.useState(discoveryPills);
  const [pillSetIndex, setPillSetIndex] = React.useState(0);
  const [discoveryValue, setDiscoveryValue] = React.useState("");
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [results, setResults] = React.useState<DiscoveryMachineResult | null>(
    null
  );

  const handlePillClick = (pill: SerendipityPill) => {
    // Set the discovery machine input to the pill label
    setDiscoveryValue(`Something like ${pill.label.toLowerCase()}...`);
  };

  const handleShuffle = () => {
    // Cycle through alternative pill sets
    const newIndex = (pillSetIndex + 1) % alternativePillSets.length;
    setPillSetIndex(newIndex);
    setPills(alternativePillSets[newIndex]);
  };

  const handleGenerate = (prompt: string) => {
    setIsGenerating(true);

    // Simulate API call with context-aware results
    setTimeout(() => {
      const promptLower = prompt.toLowerCase();
      let resultSet = sampleResults.default;

      if (promptLower.includes("book club")) {
        resultSet = sampleResults["book club"];
      } else if (promptLower.includes("gift")) {
        resultSet = sampleResults.gift;
      }

      setResults(resultSet);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-spiracle-cream">
      <PreviewBar currentPath="/preview/discovery-machine" />

      {/* Navigation */}
      <TopNavigation
        navItems={navItems}
        logoHref="/preview"
        onSearch={() => console.log("Search clicked")}
        onCart={() => console.log("Cart clicked")}
        loginHref="/login"
        joinHref="/join"
      />

      {/* Hero section with title */}
      <section className="py-12 sm:py-16 bg-spiracle-cream text-center">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Discover Your Next Listen
          </h1>
          <p className="font-serif text-lg sm:text-xl text-muted-foreground italic">
            Let our Discovery Machine craft the perfect collection for you, or
            browse our curated suggestions below.
          </p>
        </div>
      </section>

      {/* Serendipity Pills Section */}
      <section className="py-8 sm:py-12 bg-spiracle-parchment">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <SerendipityPills
            pills={pills}
            label="I'm in the mood for..."
            onPillClick={handlePillClick}
            onShuffle={handleShuffle}
          />
        </div>
      </section>

      {/* The Discovery Machine - Full Width Feature */}
      <DiscoveryMachine
        headline="The Discovery Machine"
        subheadline="Tell us what you're looking for and we'll build you a collection"
        value={discoveryValue}
        onValueChange={setDiscoveryValue}
        onGenerate={handleGenerate}
        isGenerating={isGenerating}
        results={results}
        promptPills={[
          "For me",
          "For a book club",
          "For work",
          "For a rainy day",
          "For a long journey",
          "As a gift",
        ]}
        placeholder="cosy Scottish mysteries, feminist classics under 5 hours, books about food and memory..."
      />

      {/* Additional discovery prompts */}
      <section className="py-12 sm:py-16 bg-spiracle-cream">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="font-display text-xl sm:text-2xl text-foreground mb-3">
            Not sure where to start?
          </h2>
          <p className="font-serif text-muted-foreground mb-6 max-w-xl mx-auto text-left sm:text-center">
            Try asking for &ldquo;something like Gone Girl but literary&rdquo;,
            &ldquo;audiobooks for long train journeys&rdquo;, or &ldquo;feminist
            essays under 3 hours&rdquo;.
          </p>
          <p className="text-sm text-muted-foreground/70 italic">
            Our Discovery Machine uses your preferences to find unexpected
            treasures in our catalogue.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer
        tagline="Literary audiobooks for curious minds"
        columns={footerColumns}
        socialLinks={socialLinks}
        copyright="© 2024 Spiracle. All rights reserved."
      />
    </div>
  );
}
