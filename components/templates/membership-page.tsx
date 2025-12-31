"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  TopNavigation,
  MembershipHero,
  PricingGrid,
  GiftSection,
  FAQSection,
  Footer,
} from "@/components/organisms";
import type { NavItem } from "@/components/organisms/top-navigation";
import type { PricingPlan } from "@/components/organisms/pricing-grid";
import type { GiftStep } from "@/components/organisms/gift-section";
import type { FAQCategory } from "@/components/organisms/faq-section";

export interface MembershipPageProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Navigation items */
  navItems: NavItem[];
  /** Search callback */
  onSearch?: () => void;
  /** Cart callback */
  onCart?: () => void;
  /** Login href */
  loginHref?: string;
  /** Join href */
  joinHref?: string;
  /** Logo link destination */
  logoHref?: string;
  /** Hero section props */
  heroHeadline?: string;
  heroDescription?: string;
  heroIllustrationSrc?: string;
  heroIllustrationDarkSrc?: string;
  /** Pricing section props */
  pricingHeading?: string;
  pricingSubheading?: string;
  pricingPlans: PricingPlan[];
  pricingSavingsBadge?: string;
  /** Gift section props */
  giftHeadline?: string;
  giftDescription?: string;
  giftSteps?: GiftStep[];
  giftCtaText?: string;
  giftCtaHref?: string;
  giftIllustrationSrc?: string;
  giftIllustrationDarkSrc?: string;
  /** FAQ section props */
  faqHeading?: string;
  faqCategories: FAQCategory[];
  faqContactHref?: string;
  /** Footer newsletter callback */
  onNewsletterSubmit?: (email: string) => Promise<void>;
}

function MembershipPage({
  navItems,
  onSearch,
  onCart,
  loginHref = "/login",
  joinHref = "/join",
  logoHref,
  heroHeadline,
  heroDescription,
  heroIllustrationSrc,
  heroIllustrationDarkSrc,
  pricingHeading = "Choose your plan",
  pricingSubheading = "Start free, upgrade anytime. All plans include access to our carefully curated library.",
  pricingPlans,
  pricingSavingsBadge,
  giftHeadline,
  giftDescription,
  giftSteps,
  giftCtaText,
  giftCtaHref,
  giftIllustrationSrc,
  giftIllustrationDarkSrc,
  faqHeading,
  faqCategories,
  faqContactHref,
  onNewsletterSubmit,
  className,
  ...props
}: MembershipPageProps) {
  return (
    <div className={cn("min-h-screen bg-background", className)} {...props}>
      {/* Top Navigation */}
      <TopNavigation
        navItems={navItems}
        onSearch={onSearch}
        onCart={onCart}
        loginHref={loginHref}
        joinHref={joinHref}
        logoHref={logoHref}
      />

      {/* Hero Section */}
      <MembershipHero
        headline={heroHeadline}
        description={heroDescription}
        illustrationSrc={heroIllustrationSrc}
        illustrationDarkSrc={heroIllustrationDarkSrc}
      />

      {/* Pricing Section */}
      <PricingGrid
        heading={pricingHeading}
        subheading={pricingSubheading}
        plans={pricingPlans}
        savingsBadge={pricingSavingsBadge}
      />

      {/* Gift Section */}
      <GiftSection
        headline={giftHeadline}
        description={giftDescription}
        steps={giftSteps}
        ctaText={giftCtaText}
        ctaHref={giftCtaHref}
        illustrationSrc={giftIllustrationSrc}
        illustrationDarkSrc={giftIllustrationDarkSrc}
      />

      {/* FAQ Section */}
      <FAQSection
        heading={faqHeading}
        categories={faqCategories}
        contactCtaHref={faqContactHref}
      />

      {/* Footer */}
      <Footer onNewsletterSubmit={onNewsletterSubmit} />
    </div>
  );
}

export { MembershipPage };
