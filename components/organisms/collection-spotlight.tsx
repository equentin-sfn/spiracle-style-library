"use client";

import Image from "next/image";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms";
import { BookCard } from "@/components/molecules";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

export interface CollectionSpotlightBook {
  title: string;
  author: string;
  coverImage: string;
  price: string;
  memberPrice: string;
}

export interface CollectionSpotlightProps extends React.HTMLAttributes<HTMLElement> {
  heroImage: string;
  label: string;
  headline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  books: CollectionSpotlightBook[];
}

function CollectionSpotlight({
  heroImage,
  label,
  headline,
  description,
  ctaText,
  ctaLink,
  books,
  className,
  ...props
}: CollectionSpotlightProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.8;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className={cn("w-full bg-black", className)}
      {...props}
    >
      {/* Hero Section */}
      <div className="relative w-full max-w-[1440px] mx-auto">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={heroImage}
            alt=""
            fill
            className="object-cover object-center"
            sizes="1440px"
            aria-hidden="true"
          />
          {/* Dark gradient overlay - stronger on left for text readability */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"
            aria-hidden="true"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 min-h-[400px] sm:min-h-[480px] lg:min-h-[560px] flex items-center">
          <header className="max-w-md lg:max-w-lg space-y-4 sm:space-y-6">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/70">
              {label}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-white">
              {headline}
            </h2>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              {description}
            </p>
            <a href={ctaLink}>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 mt-2"
              >
                {ctaText}
              </Button>
            </a>
          </header>
        </div>
      </div>

      {/* Book Carousel Section */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-12">
        {/* Carousel Controls */}
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors hidden sm:flex"
            aria-label="Scroll left"
          >
            <CaretLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors hidden sm:flex"
            aria-label="Scroll right"
          >
            <CaretRight size={20} />
          </button>

          {/* Scrollable Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {books.map((book, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-start"
                style={{ width: "calc((100% - 3rem) / 3.5)", minWidth: "240px" }}
              >
                <BookCard
                  title={book.title}
                  author={book.author}
                  coverImage={book.coverImage}
                  price={book.price}
                  memberPrice={book.memberPrice}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { CollectionSpotlight };
