"use client";

import { cn } from "@/lib/utils";
import { BookCard } from "@/components/molecules";

export interface BentoHeroBook {
  title: string;
  author: string;
  coverImage: string;
  price: string;
  memberPrice: string;
}

export interface BentoHeroProps extends React.HTMLAttributes<HTMLElement> {
  sectionLabel: string;
  title: string;
  description: string;
  books: [BentoHeroBook, BentoHeroBook]; // Exactly 2 books
}

function BentoHero({
  sectionLabel,
  title,
  description,
  books,
  className,
  ...props
}: BentoHeroProps) {
  return (
    <section
      className={cn(
        "w-full bg-spiracle-cream py-12 sm:py-16 lg:py-20",
        className
      )}
      {...props}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <header className="text-center mb-8 sm:mb-12">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-spiracle-terracotta mb-3 sm:mb-4">
            {sectionLabel}
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-tight text-foreground mb-3 sm:mb-4">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </header>

        {/* 2-column grid of BookCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {books.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              author={book.author}
              coverImage={book.coverImage}
              price={book.price}
              memberPrice={book.memberPrice}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { BentoHero };
