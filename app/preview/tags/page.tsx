"use client";

import * as React from "react";
import Image from "next/image";
import { PreviewBar, BookCard } from "@/components/molecules";
import { MinimalDotTag, BelowCoverTag, CornerBadge, type TagVariant } from "@/components/atoms";
import { cn } from "@/lib/utils";

// Test covers - diverse styles to test readability
const testCovers = [
  { src: "/images/covers/cover-med-01.png", title: "The Night Watch", author: "Sarah Waters", type: "Dark" },
  { src: "/images/covers/cover-med-08.png", title: "White Teeth", author: "Zadie Smith", type: "Light" },
  { src: "/images/covers/cover-med-03.png", title: "The Overstory", author: "Richard Powers", type: "Busy" },
  { src: "/images/covers/cover-med-02.png", title: "Shuggie Bain", author: "Douglas Stuart", type: "Text" },
];

// Tag variants to test
const tagVariants: TagVariant[] = ["staff-pick", "spiracle-special", "new-release", "free"];

export default function TagComparisonPage() {
  return (
    <div className="min-h-screen bg-spiracle-cream dark:bg-[#1a1815]">
      <PreviewBar currentPath="/preview/tags" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-[0.25em] text-spiracle-terracotta dark:text-spiracle-honey font-medium mb-3">
            Tag System Comparison
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-foreground mb-4">
            Three Tag Styles
          </h1>
          <p className="font-serif text-lg text-muted-foreground max-w-2xl mx-auto text-left sm:text-center">
            All three styles shown on the same covers for easy comparison.
          </p>
        </header>

        {/* ============================================ */}
        {/* STYLE 1: MinimalDotTag (Default) */}
        {/* ============================================ */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="inline-block px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.15em] bg-spiracle-slate text-white rounded-sm mb-2">
              Default
            </span>
            <h2 className="font-display text-2xl text-foreground mb-2">
              1. MinimalDotTag — Subtle & Elegant
            </h2>
            <p className="font-serif text-muted-foreground text-left">
              Small colored dot + text. Sits in card footer below cover.
              Use for most book cards.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {testCovers.map((cover, i) => (
              <BookCard
                key={`minimal-${cover.src}`}
                title={cover.title}
                author={cover.author}
                coverImage={cover.src}
                tag={tagVariants[i]}
                tagStyle="minimal"
                hidePremiumLabel
              />
            ))}
          </div>

          <div className="mt-6 p-4 bg-muted/50 rounded-sm">
            <p className="text-xs text-muted-foreground mb-2 font-medium">Standalone examples:</p>
            <div className="flex flex-wrap gap-4">
              <MinimalDotTag variant="staff-pick" />
              <MinimalDotTag variant="spiracle-special" />
              <MinimalDotTag variant="new-release" />
              <MinimalDotTag variant="free" />
              <MinimalDotTag variant="editors-choice" />
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* STYLE 2: BelowCoverTag (Bold) */}
        {/* ============================================ */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="inline-block px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.15em] bg-spiracle-terracotta text-white rounded-sm mb-2">
              Bold
            </span>
            <h2 className="font-display text-2xl text-foreground mb-2">
              2. BelowCoverTag — For Emphasis
            </h2>
            <p className="font-serif text-muted-foreground text-left">
              Solid background pill with dot. Sits in card footer below cover.
              Use when you need the tag to stand out more.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {testCovers.map((cover, i) => (
              <BookCard
                key={`bold-${cover.src}`}
                title={cover.title}
                author={cover.author}
                coverImage={cover.src}
                tag={tagVariants[i]}
                tagStyle="bold"
                hidePremiumLabel
              />
            ))}
          </div>

          <div className="mt-6 p-4 bg-muted/50 rounded-sm">
            <p className="text-xs text-muted-foreground mb-2 font-medium">Standalone examples:</p>
            <div className="flex flex-wrap gap-2">
              <BelowCoverTag variant="staff-pick" />
              <BelowCoverTag variant="spiracle-special" />
              <BelowCoverTag variant="new-release" />
              <BelowCoverTag variant="free" />
              <BelowCoverTag variant="editors-choice" />
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* STYLE 3: CornerBadge (Accent) */}
        {/* ============================================ */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="inline-block px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.15em] bg-[#1a4d24] text-white rounded-sm mb-2">
              Accent
            </span>
            <h2 className="font-display text-2xl text-foreground mb-2">
              3. CornerBadge — High-Impact Promotions
            </h2>
            <p className="font-serif text-muted-foreground text-left">
              Positioned on cover. Solid dark background, white text.
              Use ONLY for: &ldquo;FREE&rdquo;, &ldquo;50% OFF&rdquo;, &ldquo;LIMITED&rdquo;.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {testCovers.map((cover, i) => (
              <BookCard
                key={`badge-${cover.src}`}
                title={cover.title}
                author={cover.author}
                coverImage={cover.src}
                badge={tagVariants[i]}
                hidePremiumLabel
              />
            ))}
          </div>

          <div className="mt-6 p-4 bg-[#2D2520] rounded-sm">
            <p className="text-xs text-[#F4EEDC]/70 mb-2 font-medium">Standalone examples (on dark background):</p>
            <div className="flex flex-wrap gap-2">
              <span className="relative inline-block">
                <CornerBadge variant="free" className="!relative !top-0 !left-0" />
              </span>
              <span className="relative inline-block">
                <CornerBadge variant="offer" className="!relative !top-0 !left-0">50% Off</CornerBadge>
              </span>
              <span className="relative inline-block">
                <CornerBadge variant="limited" className="!relative !top-0 !left-0" />
              </span>
              <span className="relative inline-block">
                <CornerBadge variant="exclusive" className="!relative !top-0 !left-0" />
              </span>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SIDE-BY-SIDE COMPARISON */}
        {/* ============================================ */}
        <section className="mb-20 p-6 sm:p-8 bg-spiracle-parchment dark:bg-[#2D2520] rounded-sm">
          <h2 className="font-display text-2xl text-foreground mb-6">
            Side-by-Side: Same Cover, All Three Styles
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* MinimalDotTag */}
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3 font-medium">
                MinimalDotTag (Default)
              </p>
              <BookCard
                title="The Night Watch"
                author="Sarah Waters"
                coverImage="/images/covers/cover-med-01.png"
                tag="staff-pick"
                tagStyle="minimal"
                hidePremiumLabel
              />
            </div>

            {/* BelowCoverTag */}
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3 font-medium">
                BelowCoverTag (Bold)
              </p>
              <BookCard
                title="The Night Watch"
                author="Sarah Waters"
                coverImage="/images/covers/cover-med-01.png"
                tag="staff-pick"
                tagStyle="bold"
                hidePremiumLabel
              />
            </div>

            {/* CornerBadge */}
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3 font-medium">
                CornerBadge (Accent)
              </p>
              <BookCard
                title="The Night Watch"
                author="Sarah Waters"
                coverImage="/images/covers/cover-med-01.png"
                badge="free"
                hidePremiumLabel
              />
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* USAGE GUIDELINES */}
        {/* ============================================ */}
        <section className="py-8 border-t border-border">
          <h2 className="font-display text-2xl text-foreground mb-6">
            Usage Guidelines
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <p className="font-medium text-foreground mb-2">MinimalDotTag</p>
              <p className="font-serif text-sm text-muted-foreground text-left mb-2">
                Default for most BookCards. Subtle, elegant, never competes with cover.
              </p>
              <code className="block text-xs bg-muted p-2 rounded-sm">
                {`<BookCard tag="staff-pick" />`}
              </code>
            </div>
            <div>
              <p className="font-medium text-foreground mb-2">BelowCoverTag</p>
              <p className="font-serif text-sm text-muted-foreground text-left mb-2">
                When you need emphasis. Featured sections, special collections.
              </p>
              <code className="block text-xs bg-muted p-2 rounded-sm">
                {`<BookCard tag="new" tagStyle="bold" />`}
              </code>
            </div>
            <div>
              <p className="font-medium text-foreground mb-2">CornerBadge</p>
              <p className="font-serif text-sm text-muted-foreground text-left mb-2">
                Only for high-impact promos: FREE, 50% OFF, LIMITED.
              </p>
              <code className="block text-xs bg-muted p-2 rounded-sm">
                {`<BookCard badge="free" />`}
              </code>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
