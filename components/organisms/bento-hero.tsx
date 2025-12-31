"use client";

import { cn } from "@/lib/utils";
import { BookCard } from "@/components/molecules";

export interface BentoHeroBook {
  title: string;
  author: string;
  coverImage: string;
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
        "w-full bg-background py-14 sm:py-18 lg:py-24",
        className
      )}
      {...props}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Header - Editorial style */}
        <header className="text-center mb-10 sm:mb-14">
          <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.25em] text-primary mb-4">
            <span className="inline-flex items-center gap-3">
              <span className="w-8 h-px bg-primary/40" aria-hidden="true" />
              {sectionLabel}
              <span className="w-8 h-px bg-primary/40" aria-hidden="true" />
            </span>
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl leading-tight text-foreground mb-4 tracking-tight">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto font-serif">
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { BentoHero };
