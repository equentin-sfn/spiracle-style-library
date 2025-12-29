"use client";

import { Button, Badge, Separator } from "@/components/atoms";
import {
  ReviewCard,
  CollectionCard,
  BookCard,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/molecules";

// Sample book data with cover images
const books = [
  {
    id: 1,
    title: "Heart of Darkness",
    author: "Joseph Conrad",
    price: "12.99",
    memberPrice: "9.99",
    coverImage: "/images/covers/Size=Med, Image=01.png",
    narrator: "Simon Slater",
    duration: "4 hrs 12 mins",
    isSpiracleSpecial: true,
    category: "fiction",
  },
  {
    id: 2,
    title: "A Swim in a Pond in the Rain",
    author: "George Saunders",
    price: "14.99",
    memberPrice: "11.99",
    coverImage: "/images/covers/Size=Med, Image=02.png",
    narrator: "George Saunders",
    duration: "7 hrs 55 mins",
    category: "non-fiction",
  },
  {
    id: 3,
    title: "The Waves",
    author: "Virginia Woolf",
    price: "11.99",
    memberPrice: "8.99",
    coverImage: "/images/covers/Size=Med, Image=03.png",
    narrator: "Frances Jeater",
    duration: "8 hrs 30 mins",
    isSpiracleSpecial: true,
    category: "fiction",
  },
  {
    id: 4,
    title: "Victory",
    author: "Joseph Conrad",
    price: "13.99",
    memberPrice: "10.99",
    coverImage: "/images/covers/Size=Med, Image=04.png",
    narrator: "Simon Slater",
    duration: "12 hrs 25 mins",
    category: "fiction",
  },
  {
    id: 5,
    title: "Sérotonine",
    author: "Michel Houellebecq",
    price: "14.99",
    memberPrice: "11.99",
    coverImage: "/images/covers/Size=Med, Image=05.png",
    narrator: "Guillaume Gallienne",
    duration: "9 hrs 15 mins",
    category: "fiction",
  },
  {
    id: 6,
    title: "The Shadow Line",
    author: "Joseph Conrad",
    price: "10.99",
    memberPrice: "7.99",
    coverImage: "/images/covers/Size=Med, Image=06.png",
    narrator: "Simon Slater",
    duration: "3 hrs 45 mins",
    isSpiracleSpecial: true,
    category: "fiction",
  },
  {
    id: 7,
    title: "What I Mean",
    author: "Joan Didion",
    price: "12.99",
    memberPrice: "9.99",
    coverImage: "/images/covers/Size=Med, Image=07.png",
    narrator: "Diane Keaton",
    duration: "2 hrs 30 mins",
    category: "non-fiction",
  },
  {
    id: 8,
    title: "Stories",
    author: "Anton Chekhov",
    price: "15.99",
    memberPrice: "12.99",
    coverImage: "/images/covers/Size=Med, Image=08.png",
    narrator: "Kenneth Branagh",
    duration: "18 hrs 40 mins",
    category: "fiction",
  },
  {
    id: 9,
    title: "Lee Miller",
    author: "Carolyn Burke",
    price: "14.99",
    memberPrice: "11.99",
    coverImage: "/images/covers/Size=Med, Image=09.png",
    narrator: "Kate Winslet",
    duration: "14 hrs 20 mins",
    category: "biography",
  },
  {
    id: 10,
    title: "The Collected Poems",
    author: "W.B. Yeats",
    price: "16.99",
    memberPrice: "13.99",
    coverImage: "/images/covers/Size=Med, Image=10.png",
    narrator: "Gabriel Byrne",
    duration: "6 hrs 15 mins",
    isSpiracleSpecial: true,
    category: "poetry",
  },
  {
    id: 11,
    title: "Borges and I",
    author: "Jorge Luis Borges",
    price: "11.99",
    memberPrice: "8.99",
    coverImage: "/images/covers/Size=Med, Image=11.png",
    narrator: "Edoardo Ballerini",
    duration: "5 hrs 10 mins",
    category: "fiction",
  },
  {
    id: 12,
    title: "Darkness at Noon",
    author: "Arthur Koestler",
    price: "13.99",
    memberPrice: "10.99",
    coverImage: "/images/covers/Size=Med, Image=12.png",
    narrator: "Frank Muller",
    duration: "7 hrs 55 mins",
    category: "fiction",
  },
  {
    id: 13,
    title: "The Stranger",
    author: "Albert Camus",
    price: "10.99",
    memberPrice: "7.99",
    coverImage: "/images/covers/Size=Med, Image=13.png",
    narrator: "Jonathan Davis",
    duration: "3 hrs 50 mins",
    isSpiracleSpecial: true,
    category: "fiction",
  },
  {
    id: 14,
    title: "Mrs Dalloway",
    author: "Virginia Woolf",
    price: "12.99",
    memberPrice: "9.99",
    coverImage: "/images/covers/Size=Med, Image=14.png",
    narrator: "Annette Bening",
    duration: "7 hrs 10 mins",
    category: "fiction",
  },
];

// Sample collections data
const collections = [
  {
    id: 1,
    title: "20th Century Literary Classics",
    image: "/images/collections/image-1.png",
    bookCount: 42,
    memberCount: 156,
  },
  {
    id: 2,
    title: "Modern Poetry Anthology",
    image: "/images/collections/image-2.png",
    bookCount: 18,
    memberCount: 89,
  },
  {
    id: 3,
    title: "Essays & Literary Criticism",
    image: "/images/collections/image-3.png",
    bookCount: 31,
    memberCount: 67,
  },
];

export default function BooksPreviewPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <header className="space-y-2">
          <h1 className="font-display text-4xl">Our Collection</h1>
          <p className="text-muted-foreground">
            Hidden gems, unearthed treasure, written by great authors
          </p>
        </header>

        {/* Books Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl">Featured Audiobooks</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {books.slice(0, 5).map((book) => (
              <ReviewCard
                key={book.id}
                title={book.title}
                author={book.author}
                coverImage={book.coverImage}
                price={book.price}
                memberPrice={book.memberPrice}
                narrator={book.narrator}
                duration={book.duration}
                isSpiracleSpecial={book.isSpiracleSpecial}
                category={book.category}
              />
            ))}
          </div>
        </section>

        <Separator />

        {/* Collections Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl">Browse Collections</h2>
            <Button variant="ghost" size="sm">See All Collections</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection) => (
              <CollectionCard
                key={collection.id}
                title={collection.title}
                image={collection.image}
                bookCount={collection.bookCount}
                memberCount={collection.memberCount}
              />
            ))}
          </div>
        </section>

        <Separator />

        {/* BookCards Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl">Staff Picks</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <BookCard
              title="The Door"
              author="Magda Szabó"
              coverImage="/images/covers/Size=Med, Image=01.png"
              price="14.99"
              memberPrice="11.99"
            />
            <BookCard
              title="The Golden Notebook"
              author="Doris Lessing"
              coverImage="/images/covers/Size=Med, Image=02.png"
              price="16.99"
              memberPrice="13.99"
            />
            <BookCard
              title="Victory"
              author="Joseph Conrad"
              coverImage="/images/covers/Size=Med, Image=04.png"
              price="13.99"
              memberPrice="10.99"
            />
            <BookCard
              title="The Waves"
              author="Virginia Woolf"
              coverImage="/images/covers/Size=Med, Image=03.png"
              price="11.99"
              memberPrice="8.99"
            />
          </div>
        </section>

        <Separator />

        {/* Cards & Buttons Section */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl">Membership & Actions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Membership Card */}
            <Card>
              <CardHeader>
                <Badge className="w-fit bg-accent text-accent-foreground">
                  Spiracle special
                </Badge>
                <CardTitle className="font-serif text-xl">
                  Premium Membership
                </CardTitle>
                <CardDescription>
                  Unlock exclusive audiobooks and member pricing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Get access to our entire catalog with unlimited listening.
                </p>
                <p className="text-2xl font-semibold">
                  £9.99<span className="text-sm font-normal text-muted-foreground">/month</span>
                </p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button>Subscribe Now</Button>
                <Button variant="outline">Learn More</Button>
              </CardFooter>
            </Card>

            {/* Gift Card */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-xl">
                  Gift a Membership
                </CardTitle>
                <CardDescription>
                  Share the joy of literary audiobooks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Give the gift of great stories. Perfect for book lovers and literary enthusiasts.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full">
                  Purchase Gift Card
                </Button>
              </CardFooter>
            </Card>

            {/* Newsletter Card */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-xl">
                  Stay Updated
                </CardTitle>
                <CardDescription>
                  Join our literary community
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Receive curated recommendations and exclusive previews.
                </p>
                <div className="flex gap-2">
                  <Button size="sm">Subscribe</Button>
                  <Button size="sm" variant="ghost">Maybe Later</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Button Variants Row */}
          <div className="flex flex-wrap items-center gap-3 p-4 bg-card rounded-lg border border-border">
            <span className="text-sm text-muted-foreground w-full sm:w-auto">Button variants:</span>
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
