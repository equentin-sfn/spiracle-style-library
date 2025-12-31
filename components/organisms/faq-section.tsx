"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FAQAccordion } from "@/components/molecules";
import type { FAQItem } from "@/components/molecules/faq-accordion";
import { Button } from "@/components/atoms";
import { Envelope } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export interface FAQCategory {
  id: string;
  label: string;
  items: FAQItem[];
}

export interface FAQSectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Section heading */
  heading?: string;
  /** Section subheading */
  subheading?: string;
  /** FAQ categories with items */
  categories: FAQCategory[];
  /** Contact CTA text */
  contactCtaText?: string;
  /** Contact CTA href */
  contactCtaHref?: string;
  /** Help text above CTA */
  helpText?: string;
}

function FAQSection({
  heading = "Frequently Asked Questions",
  subheading,
  categories,
  contactCtaText = "Contact us",
  contactCtaHref = "/contact",
  helpText = "Still have questions?",
  className,
  ...props
}: FAQSectionProps) {
  const [activeCategory, setActiveCategory] = React.useState(categories[0]?.id || "");

  const activeCategoryData = categories.find((cat) => cat.id === activeCategory);

  return (
    <section
      className={cn("py-16 sm:py-20 lg:py-24 bg-background", className)}
      {...props}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="text-center mb-10 sm:mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
              {heading}
            </h2>
            {subheading && (
              <p className="mt-4 text-lg text-muted-foreground font-serif">
                {subheading}
              </p>
            )}
          </header>

          {/* Category Tabs */}
          <div className="mb-8">
            <div
              className={cn(
                "flex flex-wrap justify-center gap-2",
                "p-1.5 rounded-sm",
                "bg-muted/50 dark:bg-muted/30"
              )}
              role="tablist"
              aria-label="FAQ categories"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  role="tab"
                  aria-selected={activeCategory === category.id}
                  aria-controls={`faq-panel-${category.id}`}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "relative px-4 py-2 rounded-sm",
                    "text-sm font-medium",
                    "transition-colors duration-200",
                    activeCategory === category.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground/80"
                  )}
                >
                  {activeCategory === category.id && (
                    <motion.span
                      layoutId="faq-tab-indicator"
                      className="absolute inset-0 bg-card border border-border/50 rounded-sm shadow-sm"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{category.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Content */}
          {activeCategoryData && (
            <div
              id={`faq-panel-${activeCategory}`}
              role="tabpanel"
              aria-labelledby={`faq-tab-${activeCategory}`}
            >
              <FAQAccordion items={activeCategoryData.items} />
            </div>
          )}

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <div
              className={cn(
                "inline-flex flex-col items-center gap-4 p-6 sm:p-8",
                "rounded-sm border border-border/30",
                "bg-muted/30"
              )}
            >
              <p className="text-base text-foreground font-serif italic">
                {helpText}
              </p>
              <Button asChild variant="outline">
                <Link href={contactCtaHref}>
                  <Envelope className="size-4 mr-2" weight="regular" />
                  {contactCtaText}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { FAQSection };
