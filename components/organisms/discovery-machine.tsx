"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BookCard } from "@/components/molecules";
import { Gear, Lightning, MagnifyingGlass } from "@phosphor-icons/react";

export interface DiscoveryMachineBook {
  id: string;
  title: string;
  author: string;
  coverImage: string;
}

export interface DiscoveryMachineResult {
  collectionTitle: string;
  collectionDescription: string;
  books: DiscoveryMachineBook[];
}

export interface DiscoveryMachineProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "results"> {
  /** Headline text */
  headline?: string;
  /** Subheadline text */
  subheadline?: string;
  /** Prompt pills to help users start */
  promptPills?: string[];
  /** Placeholder text for input */
  placeholder?: string;
  /** Current input value (controlled) */
  value?: string;
  /** Input change handler */
  onValueChange?: (value: string) => void;
  /** Generate button click handler */
  onGenerate?: (prompt: string) => void;
  /** Whether generation is in progress */
  isGenerating?: boolean;
  /** Generated results to display */
  results?: DiscoveryMachineResult | null;
  /** Path to the machine illustration */
  illustrationSrc?: string;
  /** Dark mode illustration */
  illustrationDarkSrc?: string;
}

// Decorative cog SVG component
function DecorativeCog({
  className,
  animate = false,
}: {
  className?: string;
  animate?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn(
        "text-[#b8956c] dark:text-[#8b7355]",
        animate && "animate-[spin_20s_linear_infinite]",
        className
      )}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M50 20c-1.5 0-3 .1-4.5.3l-2-8.5c-.2-1-.9-1.8-1.9-1.8h-8.2c-1 0-1.7.8-1.9 1.8l-2 8.5c-3 .8-5.8 2-8.4 3.5l-7-5c-.8-.6-1.9-.5-2.6.3l-5.8 5.8c-.8.8-.9 1.9-.3 2.6l5 7c-1.5 2.6-2.7 5.4-3.5 8.4l-8.5 2c-1 .2-1.8.9-1.8 1.9v8.2c0 1 .8 1.7 1.8 1.9l8.5 2c.8 3 2 5.8 3.5 8.4l-5 7c-.6.8-.5 1.9.3 2.6l5.8 5.8c.8.8 1.9.9 2.6.3l7-5c2.6 1.5 5.4 2.7 8.4 3.5l2 8.5c.2 1 .9 1.8 1.9 1.8h8.2c1 0 1.7-.8 1.9-1.8l2-8.5c3-.8 5.8-2 8.4-3.5l7 5c.8.6 1.9.5 2.6-.3l5.8-5.8c.8-.8.9-1.9.3-2.6l-5-7c1.5-2.6 2.7-5.4 3.5-8.4l8.5-2c1-.2 1.8-.9 1.8-1.9v-8.2c0-1-.8-1.7-1.8-1.9l-8.5-2c-.8-3-2-5.8-3.5-8.4l5-7c.6-.8.5-1.9-.3-2.6l-5.8-5.8c-.8-.8-1.9-.9-2.6-.3l-7 5c-2.6-1.5-5.4-2.7-8.4-3.5l-2-8.5c-.2-1-.9-1.8-1.9-1.8h-4c-1.5-.2-3-.3-4.5-.3zM50 35c8.3 0 15 6.7 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15z"
      />
    </svg>
  );
}

// Victorian ornate corner
function OrnateCorner({
  position,
  className,
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}) {
  const rotations = {
    "top-left": "rotate-0",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "rotate-[270deg]",
  };

  return (
    <svg
      viewBox="0 0 60 60"
      className={cn(
        "w-10 h-10 sm:w-14 sm:h-14 text-[#c4a97a] dark:text-[#8b7355]",
        rotations[position],
        className
      )}
      aria-hidden="true"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d="M2 58 L2 30 Q2 2 30 2 L58 2"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        d="M8 52 L8 28 Q8 8 28 8 L52 8"
      />
      <circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.6" />
      <path
        fill="currentColor"
        opacity="0.4"
        d="M2 30 Q2 15 10 10 Q5 15 5 25 Z"
      />
    </svg>
  );
}

function DiscoveryMachine({
  headline = "The Discovery Machine",
  subheadline = "Tell us what you're looking for and we'll build you a collection",
  promptPills = [
    "For me",
    "For a book club",
    "For work",
    "For a rainy day",
    "For a long journey",
    "As a gift",
  ],
  placeholder = "cosy Scottish mysteries, feminist classics under 5 hours, books about food and memory...",
  value: controlledValue,
  onValueChange,
  onGenerate,
  isGenerating = false,
  results,
  illustrationSrc = "/illustrations/Cyrano Machine.png",
  illustrationDarkSrc = "/illustrations/cyrano-machine-dark.png",
  className,
  ...props
}: DiscoveryMachineProps) {
  const [internalValue, setInternalValue] = React.useState("");
  const [showResults, setShowResults] = React.useState(false);

  const inputValue = controlledValue ?? internalValue;
  const setInputValue = onValueChange ?? setInternalValue;

  const handlePillClick = (pill: string) => {
    const prefix = pill.toLowerCase().includes("for")
      ? `${pill}: `
      : `${pill}: `;
    setInputValue(prefix);
  };

  const handleGenerate = () => {
    if (inputValue.trim()) {
      onGenerate?.(inputValue);
      setShowResults(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleGenerate();
    }
  };

  return (
    <section
      className={cn(
        "relative py-12 sm:py-20 overflow-hidden",
        // Aged paper background with subtle texture
        "bg-gradient-to-b from-[#f5efe3] via-[#f8f4ea] to-[#f5efe3]",
        "dark:from-[#2a2420] dark:via-[#322c26] dark:to-[#2a2420]",
        className
      )}
      aria-labelledby="discovery-machine-heading"
      {...props}
    >
      {/* Subtle paper texture overlay */}
      <div
        className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Decorative cogs - positioned subtly in corners */}
      <DecorativeCog
        className="absolute -top-6 -left-6 w-24 h-24 opacity-20"
        animate
      />
      <DecorativeCog
        className="absolute -bottom-8 -right-8 w-32 h-32 opacity-15"
        animate
      />
      <DecorativeCog
        className="absolute top-1/3 -right-12 w-20 h-20 opacity-10"
        animate
      />

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8">
        {/* Main machine container with ornate border */}
        <div
          className={cn(
            "relative",
            // Brass/wood frame effect
            "bg-[#fdfbf7] dark:bg-[#3a332c]",
            "border-2 border-[#c4a97a] dark:border-[#6b5d4d]",
            "rounded-lg shadow-xl",
            // Inner glow effect
            "before:absolute before:inset-0 before:rounded-lg before:pointer-events-none",
            "before:shadow-[inset_0_0_30px_rgba(196,169,122,0.15)]",
            "dark:before:shadow-[inset_0_0_30px_rgba(0,0,0,0.3)]"
          )}
        >
          {/* Ornate corners */}
          <OrnateCorner
            position="top-left"
            className="absolute -top-1 -left-1"
          />
          <OrnateCorner
            position="top-right"
            className="absolute -top-1 -right-1"
          />
          <OrnateCorner
            position="bottom-left"
            className="absolute -bottom-1 -left-1"
          />
          <OrnateCorner
            position="bottom-right"
            className="absolute -bottom-1 -right-1"
          />

          {/* Content */}
          <div className="relative p-6 sm:p-10">
            {/* Machine illustration */}
            <figure className="flex justify-center mb-6 sm:mb-8">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64">
                {/* Light mode illustration */}
                <Image
                  src={illustrationSrc}
                  alt="The Discovery Machine - a whimsical Victorian contraption"
                  fill
                  className="object-contain dark:hidden illustration-adaptive"
                  sizes="(max-width: 640px) 192px, 256px"
                  priority
                />
                {/* Dark mode illustration */}
                <Image
                  src={illustrationDarkSrc}
                  alt="The Discovery Machine - a whimsical Victorian contraption"
                  fill
                  className="object-contain hidden dark:block"
                  sizes="(max-width: 640px) 192px, 256px"
                  priority
                />
              </div>
            </figure>

            {/* Headline with ornate styling */}
            <header className="text-center mb-6 sm:mb-8">
              <h2
                id="discovery-machine-heading"
                className={cn(
                  "font-display text-2xl sm:text-3xl md:text-4xl",
                  "text-[#4a3f35] dark:text-[#e8dfd0]",
                  "tracking-wide",
                  // Decorative underline
                  "relative inline-block pb-3"
                )}
              >
                {headline}
                {/* Decorative underline flourish */}
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#c4a97a] to-transparent dark:via-[#8b7355]"
                  aria-hidden="true"
                />
              </h2>
              <p className="mt-4 font-serif text-base sm:text-lg text-[#6b5d4d] dark:text-[#b8a890] italic">
                {subheadline}
              </p>
            </header>

            {/* Prompt pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8">
              {promptPills.map((pill) => (
                <button
                  key={pill}
                  type="button"
                  onClick={() => handlePillClick(pill)}
                  className={cn(
                    "px-3 py-1.5 sm:px-4 sm:py-2",
                    "font-serif text-xs sm:text-sm",
                    "text-[#5a4d40] dark:text-[#c4b8a8]",
                    "bg-[#f0e8da] dark:bg-[#4a423a]",
                    "border border-[#d4c4a8] dark:border-[#5a524a]",
                    "rounded-full",
                    "transition-all duration-200",
                    "hover:bg-[#e8dcc8] dark:hover:bg-[#544c44]",
                    "hover:border-[#c4a97a] dark:hover:border-[#8b7355]",
                    "hover:-translate-y-0.5",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c4a97a]/50"
                  )}
                >
                  {pill}
                </button>
              ))}
            </div>

            {/* Typewriter-style input */}
            <div className="mb-6 sm:mb-8">
              <div
                className={cn(
                  "relative",
                  // Brass plaque effect
                  "bg-[#f8f4ea] dark:bg-[#2a2420]",
                  "border-2 border-[#b8a07a] dark:border-[#5a4d40]",
                  "rounded-md",
                  "shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]",
                  "dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]"
                )}
              >
                {/* Top brass trim */}
                <div
                  className="absolute -top-1 left-4 right-4 h-1 bg-gradient-to-r from-transparent via-[#c4a97a] to-transparent dark:via-[#6b5d4d] rounded-full"
                  aria-hidden="true"
                />

                <div className="flex items-start gap-3 p-4">
                  <MagnifyingGlass
                    weight="regular"
                    className="w-5 h-5 mt-1 text-[#8b7355] dark:text-[#a89880] flex-shrink-0"
                  />
                  <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                    rows={2}
                    className={cn(
                      "flex-1 bg-transparent resize-none",
                      "font-serif text-base sm:text-lg",
                      "text-[#3a332c] dark:text-[#e8dfd0]",
                      "placeholder:text-[#a89880] dark:placeholder:text-[#6b5d4d]",
                      "placeholder:italic",
                      "focus:outline-none",
                      // Typewriter cursor effect
                      "caret-[#8b7355]"
                    )}
                    aria-label="Describe what you're looking for"
                  />
                </div>

                {/* Bottom brass trim */}
                <div
                  className="absolute -bottom-1 left-4 right-4 h-1 bg-gradient-to-r from-transparent via-[#c4a97a] to-transparent dark:via-[#6b5d4d] rounded-full"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Generate button - mechanical lever style */}
            <div className="flex justify-center">
              <button
                type="button"
                onClick={handleGenerate}
                disabled={!inputValue.trim() || isGenerating}
                className={cn(
                  "group relative px-8 py-4 sm:px-12 sm:py-5",
                  "font-display text-base sm:text-lg tracking-wide",
                  // Brass button with 3D effect
                  "bg-gradient-to-b from-[#d4b896] via-[#c4a87a] to-[#a88e60]",
                  "dark:from-[#8b7355] dark:via-[#7a6348] dark:to-[#6b5540]",
                  "text-[#3a2a1a] dark:text-[#f5efe3]",
                  "border-2 border-[#a88e60] dark:border-[#5a4530]",
                  "rounded-lg",
                  // Embossed/engraved effect
                  "shadow-[0_4px_0_#8b7050,0_6px_12px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.3)]",
                  "dark:shadow-[0_4px_0_#4a3a2a,0_6px_12px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]",
                  // Hover state
                  "transition-all duration-150",
                  "hover:from-[#dcc4a0] hover:via-[#d4b88a] hover:to-[#b89868]",
                  "dark:hover:from-[#9b8365] dark:hover:via-[#8a7358] dark:hover:to-[#7b6550]",
                  // Active/pressed state - lever pulled down
                  "active:translate-y-1 active:shadow-[0_2px_0_#8b7050,0_3px_6px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.3)]",
                  "dark:active:shadow-[0_2px_0_#4a3a2a,0_3px_6px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)]",
                  // Disabled state
                  "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
                  // Focus state
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c4a97a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdfbf7] dark:focus-visible:ring-offset-[#3a332c]"
                )}
              >
                {/* Decorative rivets */}
                <span
                  className="absolute top-2 left-3 w-2 h-2 rounded-full bg-[#8b7050] dark:bg-[#4a3a2a] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
                  aria-hidden="true"
                />
                <span
                  className="absolute top-2 right-3 w-2 h-2 rounded-full bg-[#8b7050] dark:bg-[#4a3a2a] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
                  aria-hidden="true"
                />
                <span
                  className="absolute bottom-2 left-3 w-2 h-2 rounded-full bg-[#8b7050] dark:bg-[#4a3a2a] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
                  aria-hidden="true"
                />
                <span
                  className="absolute bottom-2 right-3 w-2 h-2 rounded-full bg-[#8b7050] dark:bg-[#4a3a2a] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"
                  aria-hidden="true"
                />

                <span className="flex items-center gap-3">
                  {isGenerating ? (
                    <>
                      <Gear
                        weight="fill"
                        className="w-5 h-5 animate-spin"
                        aria-hidden="true"
                      />
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <Lightning weight="fill" className="w-5 h-5" />
                      <span>Generate Collection</span>
                    </>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Results area */}
        {showResults && results && (
          <div
            className={cn(
              "mt-10 sm:mt-14",
              "animate-in fade-in-0 slide-in-from-bottom-4 duration-500"
            )}
          >
            {/* Results header with decorative divider */}
            <header className="text-center mb-8">
              {/* Decorative divider */}
              <div
                className="flex items-center justify-center gap-4 mb-6"
                aria-hidden="true"
              >
                <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#c4a97a] dark:to-[#6b5d4d]" />
                <Gear
                  weight="fill"
                  className="w-6 h-6 text-[#c4a97a] dark:text-[#6b5d4d]"
                />
                <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#c4a97a] dark:to-[#6b5d4d]" />
              </div>

              <h3 className="font-display text-xl sm:text-2xl text-[#4a3f35] dark:text-[#e8dfd0]">
                {results.collectionTitle}
              </h3>
              <p className="mt-2 font-serif text-sm sm:text-base text-[#6b5d4d] dark:text-[#b8a890] italic max-w-xl mx-auto">
                {results.collectionDescription}
              </p>
            </header>

            {/* Book cards grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 stagger-children">
              {results.books.map((book) => (
                <BookCard
                  key={book.id}
                  title={book.title}
                  author={book.author}
                  coverImage={book.coverImage}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export { DiscoveryMachine };
