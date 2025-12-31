"use client";

import { TopNavigation, BookDetailsHero } from "@/components/organisms";
import { InfoBar, PreviewBar } from "@/components/molecules";
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
  { icon: Timer, label: "Duration", value: "3hrs and 52mins" },
  { icon: PencilLine, label: "Author", value: "Jay Rayner" },
  { icon: Microphone, label: "Narrator", value: "Jay Rayner" },
  { icon: Translate, label: "Translator", value: "N/A" },
  { icon: Calendar, label: "First published:", value: "November 2024" },
  { icon: Globe, label: "Language", value: "English" },
  { icon: Buildings, label: "Publisher", value: "Faber and Faber" },
  { icon: Barcode, label: "ISBN13", value: "9780571376521" },
  { icon: ListBullets, label: "Version", value: "Unabridged" },
  { icon: Headphones, label: "Audiobook", value: "" },
];

const bookDetailsData = {
  cover: {
    image: "/images/covers/cover-med-01.png",
    tags: [
      { label: "Food & Drink", href: "/tags/food-drink" },
      { label: "Memoir", href: "/tags/memoir" },
      { label: "Humour", href: "/tags/humour" },
      { label: "Essays", href: "/tags/essays" },
      { label: "Non-Fiction", href: "/tags/non-fiction" },
      { label: "British", href: "/tags/british" },
    ],
    onSample: () => console.log("Sample clicked"),
    addToLibraryHref: "/library/add/chewing-the-fat",
    favoriteHref: "/favorites/add/chewing-the-fat",
  },
  details: {
    title: "Chewing the Fat",
    author: { name: "Jay Rayner", href: "/authors/jay-rayner" },
    rating: { score: 4.6, count: "1.2k" },
    bookCount: 26,
    userCount: 26,
    narrator: { name: "Jay Rayner", href: "/narrators/jay-rayner" },
    length: "3hrs and 52mins",
    publisher: { name: "Faber and Faber", href: "/publishers/faber-and-faber" },
    series: { title: "Catalina", bookNumber: 1, href: "/series/catalina" },
    spiracleDescription:
      "Jay Rayner brings his signature blend of righteous indignation and genuine affection to the table. This is food writing with teeth: acerbic, warm, occasionally furious, and always hungry for more than just dinner. Rayner narrates his own work with the same combative relish he brings to a disappointing tasting menu, turning decades of restaurant columns into something closer to memoir. Best consumed in short bursts, like tapas, or all at once, like a Sunday roast you've been thinking about since Wednesday.",
    publisherDescription: `Why are gravy stains on your shirt at the dinner table to be admired?

Does bacon improve everything?

And is gin really the devil's work?

In this rollicking collection of his hilarious columns, the award-winning writer and Observer restaurant critic Jay Rayner answers these vital questions and many, many more. They are glorious dispatches, seasoned in equal measure with both enthusiasm and bile, from decades at the very frontline of eating.`,
    maxDescriptionLength: 400,
  },
  purchase: {
    trialMessage: "Your Spiracle trial includes this free title",
    trialPrice: "£0.00",
    trialCtaText: "Start your 30-day free trial",
    trialCtaHref: "/trial",
    benefits: [
      "We offer the following benefits with your trial:",
      "One credit a month, good for any title to download and keep.",
      "Unlimited listening to thousands of audiobooks and podcasts.",
      "Cancel monthly.",
      "Spiracle is £8.99/month after 30 days. Renews automatically. See spiracleaudiobooks.com/offer for eligibility.",
    ],
    buyPrice: "£6",
    memberPrice: "£5",
    buyCtaHref: "/buy/chewing-the-fat",
  },
};

export default function BookDetailsPage() {
  return (
    <div className="min-h-screen bg-spiracle-cream">
      <PreviewBar currentPath="/preview/book-details" />
      {/* Top Navigation */}
      <TopNavigation
        navItems={navItems}
        logoHref="/preview"
        onSearch={() => console.log("Search clicked")}
        onCart={() => console.log("Cart clicked")}
        loginHref="/login"
        joinHref="/join"
      />

      {/* Book Details Hero */}
      <BookDetailsHero
        cover={bookDetailsData.cover}
        details={bookDetailsData.details}
        purchase={bookDetailsData.purchase}
      />

      {/* Info Bar */}
      <InfoBar items={infoBarItems} className="border-y border-border" />
    </div>
  );
}
