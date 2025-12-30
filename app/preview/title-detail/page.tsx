"use client";

import { TitleDetailPage } from "@/components/templates";
import {
  CollectionCard,
  CriticCard,
  BookCard,
  ReviewCard,
} from "@/components/molecules";
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

// Navigation items
const navItems = [
  { label: "Audiobooks", href: "/audiobooks" },
  { label: "Murmurations", href: "/murmurations" },
  { label: "Bookshops", href: "/bookshops" },
  { label: "About", href: "/about" },
  { label: "Membership", href: "/membership" },
];

// Book cover and actions
const coverData = {
  image: "/images/covers/Size=Med, Image=01.png",
  tags: [
    { label: "Food & Drink", href: "/tags/food-drink" },
    { label: "Memoir", href: "/tags/memoir" },
    { label: "Humour", href: "/tags/humour" },
    { label: "Essays", href: "/tags/essays" },
    { label: "Non-Fiction", href: "/tags/non-fiction" },
  ],
  onSample: () => console.log("Sample clicked"),
  addToLibraryHref: "/library/add/chewing-the-fat",
  favoriteHref: "/favorites/add/chewing-the-fat",
};

// Book details
const detailsData = {
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
    "Jay Rayner brings his signature blend of righteous indignation and genuine affection to the table. This is food writing with teeth: acerbic, warm, occasionally furious, and always hungry for more than just dinner. Rayner narrates his own work with the same combative relish he brings to a disappointing tasting menu, turning decades of restaurant columns into something closer to memoir.",
  publisherDescription: `Why are gravy stains on your shirt at the dinner table to be admired?

Does bacon improve everything?

And is gin really the devil's work?

In this rollicking collection of his hilarious columns, the award-winning writer and Observer restaurant critic Jay Rayner answers these vital questions and many, many more.`,
  maxDescriptionLength: 350,
};

// Purchase data
const purchaseData = {
  trialMessage: "Your Spiracle trial includes this free title",
  trialPrice: "£0.00",
  trialCtaText: "Start your 30-day free trial",
  trialCtaHref: "/trial",
  benefits: [
    "We offer the following benefits with your trial:",
    "One credit a month, good for any title to download and keep.",
    "Unlimited listening to thousands of audiobooks and podcasts.",
    "Cancel monthly.",
    "Spiracle is £8.99/month after 30 days. Renews automatically.",
  ],
  buyPrice: "£6",
  memberPrice: "£5",
  buyCtaHref: "/buy/chewing-the-fat",
};

// Metadata items for InfoBar
const metadataItems = [
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

// Sample collection data
const collections = [
  {
    title: "Title over two or three lines depending on...",
    image: "/images/collections/image-1.png",
    bookCount: 26,
    memberCount: 26,
  },
  {
    title: "Title over two or three lines depending on...",
    image: "/images/collections/image-2.png",
    bookCount: 26,
    memberCount: 26,
  },
  {
    title: "Title over two or three lines depending on...",
    image: "/images/collections/image-3.png",
    bookCount: 26,
    memberCount: 26,
  },
  {
    title: "Title over two or three lines depending on...",
    image: "/images/collections/image-4.png",
    bookCount: 26,
    memberCount: 26,
  },
  {
    title: "Title over two or three lines depending on...",
    image: "/images/collections/image-5.png",
    bookCount: 26,
    memberCount: 26,
  },
  {
    title: "Title over two or three lines depending on...",
    image: "/images/collections/image-6.png",
    bookCount: 26,
    memberCount: 26,
  },
];

// Sample critic reviews
const criticReviews = [
  {
    publication: "The Guardian",
    rating: 4,
    reviewTitle: "A masterpiece of modern literature",
    reviewExcerpt:
      "Imagine both Oshima & Borowczyk working together after their notorious years at Argo Films and still there again – frankly this film would be the answer. It's a beautifully, melancholic, surreal, & erotic work of art from the unique Terayama.",
    journalistName: "Sarah Mitchell",
    date: "15 October 2024",
    reviewUrl: "#",
  },
  {
    publication: "Financial Times",
    rating: 4,
    reviewTitle: "Exceptional storytelling",
    reviewExcerpt:
      "Imagine both Oshima & Borowczyk working together after their notorious years at Argo Films and still there again – frankly this film would be the answer. It's a beautifully, melancholic, surreal, & erotic work of art from the unique Terayama.",
    journalistName: "James Chen",
    date: "12 October 2024",
    reviewUrl: "#",
  },
  {
    publication: "Los Angeles Times",
    rating: 4,
    reviewTitle: "A triumph of the audiobook form",
    reviewExcerpt:
      "Imagine both Oshima & Borowczyk working together after their notorious years at Argo Films and still there again – frankly this film would be the answer. It's a beautifully, melancholic, surreal, & erotic work of art from the unique Terayama.",
    journalistName: "Maria Rodriguez",
    date: "10 October 2024",
    reviewUrl: "#",
  },
];

// Sample books for carousels
const authorBooks = [
  {
    title: "The Ten (Food) Commandments",
    author: "Jay Rayner",
    coverImage: "/images/covers/Size=Med, Image=02.png",
    price: "14.99",
    memberPrice: "11.99",
  },
  {
    title: "My Dining Hell",
    author: "Jay Rayner",
    coverImage: "/images/covers/Size=Med, Image=03.png",
    price: "12.99",
    memberPrice: "9.99",
  },
  {
    title: "A Greedy Man in a Hungry World",
    author: "Jay Rayner",
    coverImage: "/images/covers/Size=Med, Image=04.png",
    price: "16.99",
    memberPrice: "13.99",
  },
  {
    title: "The Man Who Ate the World",
    author: "Jay Rayner",
    coverImage: "/images/covers/Size=Med, Image=05.png",
    price: "11.99",
    memberPrice: "8.99",
  },
  {
    title: "Wasted Calories",
    author: "Jay Rayner",
    coverImage: "/images/covers/Size=Med, Image=06.png",
    price: "13.99",
    memberPrice: "10.99",
  },
];

const similarBooks = [
  {
    title: "Kitchen Confidential",
    author: "Anthony Bourdain",
    coverImage: "/images/covers/Size=Med, Image=07.png",
    price: "14.99",
    memberPrice: "11.99",
  },
  {
    title: "What We Ate",
    author: "Ian McEwan",
    coverImage: "/images/covers/Size=Med, Image=08.png",
    price: "12.99",
    memberPrice: "9.99",
  },
  {
    title: "Can We Know",
    author: "Susan Choi",
    coverImage: "/images/covers/Size=Med, Image=09.png",
    price: "16.99",
    memberPrice: "13.99",
  },
  {
    title: "Celestial Bodies",
    author: "Jokha Alharthi",
    coverImage: "/images/covers/Size=Med, Image=10.png",
    price: "11.99",
    memberPrice: "8.99",
  },
  {
    title: "Flashlight",
    author: "Tsitsi Dangarembga",
    coverImage: "/images/covers/Size=Med, Image=11.png",
    price: "13.99",
    memberPrice: "10.99",
  },
];

// Community review cards (using ReviewCard for now)
const communityReviews = [
  {
    title: "Review title",
    author: "Reviewer name",
    coverImage: "/images/covers/Size=Med, Image=01.png",
  },
  {
    title: "Review title",
    author: "Reviewer name",
    coverImage: "/images/covers/Size=Med, Image=02.png",
  },
  {
    title: "Review title",
    author: "Reviewer name",
    coverImage: "/images/covers/Size=Med, Image=03.png",
  },
  {
    title: "Review title",
    author: "Reviewer name",
    coverImage: "/images/covers/Size=Med, Image=04.png",
  },
];

export default function TitleDetailPreviewPage() {
  return (
    <TitleDetailPage
      navItems={navItems}
      cover={coverData}
      details={detailsData}
      purchase={purchaseData}
      metadataItems={metadataItems}
      onSearch={() => console.log("Search clicked")}
      onCart={() => console.log("Cart clicked")}
      // Collections Grid
      collectionsLabel="FOUND IN THE FOLLOWING COLLECTIONS →"
      collectionsContent={
        <>
          {collections.map((collection, index) => (
            <CollectionCard
              key={index}
              title={collection.title}
              image={collection.image}
              bookCount={collection.bookCount}
              memberCount={collection.memberCount}
            />
          ))}
        </>
      }
      // Critics Section
      criticsLabel="WHAT THE CRITICS ARE SAYING"
      criticsContent={
        <>
          {criticReviews.map((review, index) => (
            <CriticCard
              key={index}
              publication={review.publication}
              rating={review.rating}
              reviewTitle={review.reviewTitle}
              reviewExcerpt={review.reviewExcerpt}
              journalistName={review.journalistName}
              date={review.date}
              reviewUrl={review.reviewUrl}
            />
          ))}
        </>
      }
      // Community Reviews (placeholder)
      communityLabel="WHAT OUR COMMUNITY IS SAYING"
      communityContent={
        <>
          {communityReviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] sm:w-[320px] bg-white rounded-xl p-4 sm:p-5"
            >
              <p className="font-medium text-sm mb-2">Reviewer name</p>
              <p className="text-xs text-muted-foreground mb-3">1 month ago</p>
              <p className="text-sm text-foreground leading-relaxed line-clamp-4">
                Imagine both Oshima & Borowczyk working together after their notorious years at Argo Films and still there again – frankly this film would be the answer.
              </p>
            </div>
          ))}
        </>
      }
      // More by Author
      moreByAuthorLabel="MORE BY JAY RAYNER"
      moreByAuthorContent={
        <>
          {authorBooks.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              author={book.author}
              coverImage={book.coverImage}
              price={book.price}
              memberPrice={book.memberPrice}
              className="flex-shrink-0 w-[160px] sm:w-[180px]"
            />
          ))}
        </>
      }
      // Similar Books
      similarBooksLabel="BOOKS WITH A SIMILAR VIBE"
      similarBooksContent={
        <>
          {similarBooks.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              author={book.author}
              coverImage={book.coverImage}
              price={book.price}
              memberPrice={book.memberPrice}
              className="flex-shrink-0 w-[160px] sm:w-[180px]"
            />
          ))}
        </>
      }
    />
  );
}
