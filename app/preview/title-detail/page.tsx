"use client";

import { TitleDetailPage } from "@/components/templates";
import {
  CollectionCard,
  CriticCard,
  BookCard,
  ReviewCard,
  PreviewBar,
  type PurchaseFormat,
} from "@/components/molecules";
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

// Navigation items
const navItems = [
  { label: "Audiobooks", href: "/audiobooks" },
  { label: "Murmurations", href: "/murmurations" },
  { label: "Bookshops", href: "/bookshops" },
  { label: "About", href: "/about" },
  { label: "Membership", href: "/membership" },
];

// Available formats for this title
const formatsData: PurchaseFormat[] = [
  { type: "audiobook", price: 12.99, memberPrice: 9.99, available: true },
  { type: "aiac", price: 12.99, available: true },
  { type: "ebook", price: 6.99, available: true },
];

// Book cover and actions
const coverData = {
  image: "/images/covers/cover-med-01.png",
  // Image variants for different formats
  formatImages: {
    aiac: "/images/aiac/treasure-island-card.jpg", // AIAC card design
  },
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
  { icon: PenLine, label: "Author", value: "Jay Rayner" },
  { icon: Mic, label: "Narrator", value: "Jay Rayner" },
  { icon: Languages, label: "Translator", value: "N/A" },
  { icon: Calendar, label: "First published:", value: "November 2024" },
  { icon: Globe, label: "Language", value: "English" },
  { icon: Building2, label: "Publisher", value: "Faber and Faber" },
  { icon: Barcode, label: "ISBN13", value: "9780571376521" },
  { icon: List, label: "Version", value: "Unabridged" },
  { icon: Headphones, label: "Audiobook", value: "" },
];

// Sample collection data - titles matched to image themes
const collections = [
  {
    title: "Rock Memoirs: Stories from the Stage",
    image: "/images/collections/image-1.png",
    bookCount: 34,
    memberCount: 892,
  },
  {
    title: "Sound & Vision: Creative Lives",
    image: "/images/collections/image-2.png",
    bookCount: 18,
    memberCount: 456,
  },
  {
    title: "Comfort Reads & Guilty Pleasures",
    image: "/images/collections/image-3.png",
    bookCount: 42,
    memberCount: 1247,
  },
  {
    title: "Journeys East: Writing from India",
    image: "/images/collections/image-4.png",
    bookCount: 28,
    memberCount: 673,
  },
  {
    title: "Mediterranean Tales",
    image: "/images/collections/image-5.png",
    bookCount: 15,
    memberCount: 389,
  },
  {
    title: "Fresh Picks: Summer Reading",
    image: "/images/collections/image-6.png",
    bookCount: 24,
    memberCount: 712,
  },
];

// Collection showcase data - featured collection with book covers (at bottom)
const showcaseCollection = {
  name: "Top 10 Books That Changed Britain",
  description: "A curated selection of the most influential books in British literary history, from classic memoirs to groundbreaking essays.",
  images: [
    "/images/covers/cover-med-01.png",
    "/images/covers/cover-med-02.png",
    "/images/covers/cover-med-03.png",
    "/images/covers/cover-med-04.png",
    "/images/covers/cover-med-05.png",
  ],
};

// Sample critic reviews - varied publications and perspectives
const criticReviews = [
  {
    publication: "The Guardian",
    publicationLogo: "/logos/Pro Blocks/Bento Grid/Logos-guardian.png",
    rating: 5,
    reviewTitle: "A feast for the ears",
    reviewExcerpt:
      "Rayner's self-narrated audiobook transforms what could have been a simple collection of columns into something approaching memoir. His voice—by turns indignant, tender, and wickedly funny—carries the listener through culinary adventures and misadventures with equal aplomb. This is food writing that nourishes the soul.",
    journalistName: "Felicity Cloake",
    date: "15 November 2024",
    reviewUrl: "#",
  },
  {
    publication: "Financial Times",
    publicationLogo: "/logos/Pro Blocks/Bento Grid/Logos-financial-times.png",
    rating: 4,
    reviewTitle: "Essential listening for foodies",
    reviewExcerpt:
      "In an age of algorithmic restaurant recommendations, Rayner reminds us why we need human critics. His prose is muscular and precise, his opinions unapologetically his own. The audiobook format suits his conversational style perfectly—it's like having dinner with a very opinionated, very entertaining friend.",
    journalistName: "Tim Hayward",
    date: "8 November 2024",
    reviewUrl: "#",
  },
  {
    publication: "Los Angeles Times",
    publicationLogo: "/logos/Pro Blocks/Bento Grid/Logos-la-times.png",
    rating: 4,
    reviewTitle: "Rayner at his irreverent best",
    reviewExcerpt:
      "Few writers can make you simultaneously hungry and thoughtful, but Rayner manages it with characteristic panache. His reading brings an intimacy to these pieces that print cannot match—you can hear the relish in his voice when describing a perfect gravy, the righteous fury when confronting culinary pretension.",
    journalistName: "Rachel Cooke",
    date: "2 November 2024",
    reviewUrl: "#",
  },
];

// Sample books for carousels
const authorBooks = [
  {
    title: "The Ten (Food) Commandments",
    author: "Jay Rayner",
    coverImage: "/images/covers/cover-med-02.png",
  },
  {
    title: "My Dining Hell",
    author: "Jay Rayner",
    coverImage: "/images/covers/cover-med-03.png",
  },
  {
    title: "A Greedy Man in a Hungry World",
    author: "Jay Rayner",
    coverImage: "/images/covers/cover-med-04.png",
  },
  {
    title: "The Man Who Ate the World",
    author: "Jay Rayner",
    coverImage: "/images/covers/cover-med-05.png",
  },
  {
    title: "Wasted Calories",
    author: "Jay Rayner",
    coverImage: "/images/covers/cover-med-06.png",
  },
];

const similarBooks = [
  {
    title: "Kitchen Confidential",
    author: "Anthony Bourdain",
    coverImage: "/images/covers/cover-med-07.png",
  },
  {
    title: "What We Ate",
    author: "Ian McEwan",
    coverImage: "/images/covers/cover-med-08.png",
  },
  {
    title: "Can We Know",
    author: "Susan Choi",
    coverImage: "/images/covers/cover-med-09.png",
  },
  {
    title: "Celestial Bodies",
    author: "Jokha Alharthi",
    coverImage: "/images/covers/cover-med-10.png",
  },
  {
    title: "Flashlight",
    author: "Tsitsi Dangarembga",
    coverImage: "/images/covers/cover-med-11.png",
  },
];

// Community review cards - 8 reviews for 4x2 grid with varied perspectives
const communityReviews = [
  {
    avatarUrl: "https://i.pravatar.cc/80?img=47",
    reviewerName: "Priya Sharma",
    rating: 5,
    title: "Made me laugh out loud on the tube",
    body: "I must have looked absolutely mad giggling to myself on the Northern Line. Rayner's timing is impeccable—pauses in exactly the right places, lets the jokes land perfectly. His voice has this warmth that makes you feel like you're at a dinner party with him.",
    timeAgo: "1 week ago",
    likes: 342
  },
  {
    avatarUrl: "https://i.pravatar.cc/80?img=32",
    reviewerName: "Michael O'Connor",
    rating: 4,
    title: "Best enjoyed with a good meal",
    body: "Started this while cooking Sunday roast and nearly burnt the potatoes because I was so absorbed. The chapter on gravy alone is worth the credit. Only four stars because a few pieces feel a bit dated, but overall a delicious listen.",
    timeAgo: "2 weeks ago",
    likes: 187
  },
  {
    avatarUrl: "https://i.pravatar.cc/80?img=23",
    reviewerName: "Eleanor Hughes",
    rating: 5,
    title: "Author narration done right",
    body: "This is how audiobooks should be done. You can tell Rayner genuinely enjoys reading his own work—there's none of that flat, going-through-the-motions energy you sometimes get. Every anecdote feels like he's telling it for the first time.",
    timeAgo: "3 weeks ago",
    likes: 456
  },
  {
    avatarUrl: "https://i.pravatar.cc/80?img=51",
    reviewerName: "Daniel Okafor",
    rating: 3,
    title: "Good but repetitive in places",
    body: "Enjoyable collection, though some themes do repeat across chapters—how many times can one discuss the merits of a good pie? That said, when Rayner is on form, he's brilliant. The chapter about his mother had me unexpectedly emotional.",
    timeAgo: "1 month ago",
    likes: 89
  },
  {
    avatarUrl: "https://i.pravatar.cc/80?img=44",
    reviewerName: "Sophie Andersson",
    rating: 5,
    title: "Perfect audiobook for food lovers",
    body: "Listened to this during a long drive through France and it was absolutely perfect. His descriptions of meals past made me want to pull over at every restaurant we passed. The narration is intimate, funny, and surprisingly moving in places.",
    timeAgo: "1 month ago",
    likes: 278
  },
  {
    avatarUrl: "https://i.pravatar.cc/80?img=15",
    reviewerName: "Robert Kim",
    rating: 4,
    title: "Comfort listening at its finest",
    body: "This has become my go-to when I need something familiar and warm. Rayner's voice is like a good whisky—rich, complex, occasionally sharp. Perfect for unwinding after a long day. Already on my third listen.",
    timeAgo: "2 months ago",
    likes: 156
  },
  {
    avatarUrl: "https://i.pravatar.cc/80?img=28",
    reviewerName: "Amara Obi",
    rating: 4,
    title: "Surprisingly touching",
    body: "Expected laughs, got those and more. The way Rayner weaves personal history into food writing is masterful. The pieces about family meals hit differently in audio—his voice catches in places, and you realize how much this stuff matters to him.",
    timeAgo: "3 months ago",
    likes: 203
  },
  {
    avatarUrl: "https://i.pravatar.cc/80?img=68",
    reviewerName: "James Whitfield",
    rating: 5,
    title: "Converted me to audiobooks",
    body: "I was a physical book snob until this. There's something about hearing Rayner deliver his own zingers that print just can't capture. The righteous indignation! The theatrical sighs! I've since bought three more audiobooks. This is a gateway drug.",
    timeAgo: "4 months ago",
    likes: 412
  },
];

export default function TitleDetailPreviewPage() {
  return (
    <>
      <PreviewBar currentPath="/preview/title-detail" />
      <TitleDetailPage
        navItems={navItems}
        logoHref="/preview"
        cover={coverData}
        details={detailsData}
        purchase={purchaseData}
        formats={formatsData}
        defaultFormat="audiobook"
        metadataItems={metadataItems}
      onSearch={() => console.log("Search clicked")}
      onCart={() => console.log("Cart clicked")}
      // Collections Grid (below info bar)
      collectionsLabel="FOUND IN THE FOLLOWING COLLECTIONS"
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
      // Collection Showcase (at bottom of page)
      showcaseCollectionName={showcaseCollection.name}
      showcaseCollectionDescription={showcaseCollection.description}
      showcaseCollectionImages={showcaseCollection.images}
      // Critics Section
      criticsLabel="WHAT THE CRITICS ARE SAYING"
      criticsContent={
        <>
          {criticReviews.map((review, index) => (
            <CriticCard
              key={index}
              publication={review.publication}
              publicationLogo={review.publicationLogo}
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
      // Community Reviews Grid (8 cards, 4x2 on desktop)
      communityLabel="WHAT OUR COMMUNITY IS SAYING"
      communitySeeMoreHref="/reviews/chewing-the-fat"
      communityContent={
        <>
          {communityReviews.map((review, index) => (
            <ReviewCard
              key={index}
              avatarUrl={review.avatarUrl}
              reviewerName={review.reviewerName}
              rating={review.rating}
              title={review.title}
              body={review.body}
              timeAgo={review.timeAgo}
              likes={review.likes}
            />
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
              className="flex-shrink-0 w-[200px] sm:w-[240px] lg:w-[280px]"
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
              className="flex-shrink-0 w-[200px] sm:w-[240px] lg:w-[280px]"
            />
          ))}
        </>
      }
    />
    </>
  );
}
