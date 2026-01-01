"use client";

import { MembershipPage } from "@/components/templates";
import { PreviewBar } from "@/components/molecules";
import type { PricingPlan } from "@/components/organisms/pricing-grid";
import type { FAQCategory } from "@/components/organisms/faq-section";

// Navigation items
const navItems = [
  { label: "Audiobooks", href: "/audiobooks" },
  { label: "Murmurations", href: "/murmurations" },
  { label: "Bookshops", href: "/bookshops" },
  { label: "About", href: "/about" },
  { label: "Membership", href: "/membership" },
];

// Pricing plans
const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    description: "No credit card required",
    monthlyPrice: "Free",
    features: [
      { text: "Literary recommendations", included: true },
      { text: "Free audiobooks", included: true },
      { text: "News of events", included: true },
      { text: "Access to selected articles and podcasts in Murmurations", included: true },
      { text: "Offline listening with Spiracle Player App", included: true },
      { text: "No advertising", included: true },
    ],
    ctaText: "Join Spiracle for free",
    ctaHref: "/signup",
    isFree: true,
  },
  {
    name: "Supporter",
    description: "Supporting independent publishing",
    audienceLabel: "Grazer",
    monthlyPrice: 3,
    annualPrice: 30,
    features: [
      { text: "Everything in the Free Plan, plus", included: true },
      { text: "20% discount on all audiobooks in the Spiracle Collection", included: true },
      { text: "Invitations to special events through the year", included: true },
    ],
    ctaText: "Get Supporter plan",
    ctaHref: "/join/supporter",
  },
  {
    name: "Reader",
    description: "1 free audiobook every month",
    audienceLabel: "Regular Listener",
    monthlyPrice: 8,
    annualPrice: 80,
    features: [
      { text: "Everything in the Supporter Plan, plus", included: true },
      { text: "Your choice of an audiobook from Current Highlights each month", included: true },
      { text: "20% discount on all audiobooks in the Spiracle Collection", included: true },
      { text: "Access to all articles and podcasts in Murmurations", included: true },
      { text: "Membership of the Spiracle Book Club", included: true },
      { text: "Invitations to events through the year", included: true },
    ],
    footerNote: "**For each Annual Membership plan a tree is planted in partnership with The Woodlands Trust",
    ctaText: "Get Reader plan",
    ctaHref: "/join/reader",
  },
  {
    name: "Avid Reader",
    description: "2 free audiobooks every month",
    audienceLabel: "Audiobibliophile",
    monthlyPrice: 12,
    annualPrice: 100,
    features: [
      { text: "Everything in Reader Plan, plus", included: true },
      { text: "Your choice of two audiobooks from Current Highlights each month", included: true },
      { text: "Priority access to exclusive events through the year", included: true },
    ],
    footerNote: "**For each Annual Membership plan a tree is planted in partnership with The Woodlands Trust",
    ctaText: "Get Avid Reader plan",
    ctaHref: "/join/avid-reader",
    highlighted: true,
    badge: "Best Value",
  },
];

// FAQ categories
const faqCategories: FAQCategory[] = [
  {
    id: "subscription",
    label: "Subscription",
    items: [
      {
        question: "How does the credit system work?",
        answer:
          "Each month, you receive credits based on your plan. One credit equals one audiobook from our entire catalogue, regardless of price. Unused credits roll over for up to 3 months, so you never lose them if you're busy.",
      },
      {
        question: "Can I change my plan at any time?",
        answer:
          "Absolutely. You can upgrade, downgrade, or cancel your membership at any time from your account settings. If you upgrade, you'll be charged the prorated difference. If you downgrade, the change takes effect at your next billing date.",
      },
      {
        question: "What happens to my audiobooks if I cancel?",
        answer:
          "Any audiobooks you've purchased with credits are yours to keep forever, even if you cancel your membership. They'll remain in your library and you can download them anytime.",
      },
      {
        question: "Do you offer student or concession pricing?",
        answer:
          "Yes! We offer 50% off all paid plans for students, teachers, librarians, and those receiving certain benefits. Just email us with proof of eligibility and we'll set you up.",
      },
      {
        question: "Is there a free trial?",
        answer:
          "Our Free tier gives you access to a curated selection of audiobooks at no cost, forever. It's our way of letting you experience Spiracle before committing to a paid plan. No credit card required.",
      },
    ],
  },
  {
    id: "player",
    label: "The Player",
    items: [
      {
        question: "Can I listen offline?",
        answer:
          "Yes, paid members can download audiobooks for offline listening. Downloads are available on our iOS and Android apps. There's no limit to how many books you can have downloaded at once.",
      },
      {
        question: "What playback features are available?",
        answer:
          "Our player includes adjustable playback speed (0.5x to 3x), sleep timer, bookmarks, chapter navigation, and a car mode for safer listening while driving. We also have a beautiful mini-player for multitasking.",
      },
      {
        question: "Can I sync my progress across devices?",
        answer:
          "Yes, your listening progress syncs automatically across all your devices. Start listening on your phone during your commute and pick up exactly where you left off on your tablet at home.",
      },
      {
        question: "Is there a web player?",
        answer:
          "Absolutely. You can listen directly in your browser at spiracleaudiobooks.com. The web player has all the same features as our mobile apps, including offline support via Progressive Web App technology.",
      },
    ],
  },
  {
    id: "general",
    label: "General",
    items: [
      {
        question: "What makes Spiracle different from other audiobook services?",
        answer:
          "We're an independent publisher focused on literary fiction and non-fiction. Every title in our catalogue is hand-selected by our team of book lovers. We work directly with authors and narrators to create audiobooks that do justice to great writing.",
      },
      {
        question: "How do you choose which books to publish?",
        answer:
          "Our editorial team reads voraciously and selects books that deserve to be heard—whether they're overlooked classics, bold new voices, or titles from independent presses. We care about quality, not algorithms.",
      },
      {
        question: "Can I suggest a book for your catalogue?",
        answer:
          "We love hearing from our community! While we can't promise to publish every suggestion, we read them all. Drop us a line at suggestions@spiracleaudiobooks.com with your pick and why you love it.",
      },
      {
        question: "Do you have a referral programme?",
        answer:
          "Yes! When you refer a friend who joins, you both get a free audiobook credit. There's no limit to how many friends you can refer. Share the love of great audiobooks.",
      },
    ],
  },
  {
    id: "getting-started",
    label: "Getting Started",
    items: [
      {
        question: "How do I create an account?",
        answer:
          "Simply click 'Join' in the top navigation and follow the prompts. You can sign up with your email or continue with Apple, Google, or Facebook. The whole process takes about 30 seconds.",
      },
      {
        question: "Which devices can I use?",
        answer:
          "Spiracle works on iPhone, iPad, Android phones and tablets, web browsers, Apple Watch, CarPlay, Android Auto, Sonos, and most smart speakers. Basically, if it plays audio, we probably support it.",
      },
      {
        question: "How do I download the app?",
        answer:
          "Search for 'Spiracle Audiobooks' in the App Store (iOS) or Google Play Store (Android). The app is free to download—you just need a Spiracle account to start listening.",
      },
    ],
  },
  {
    id: "audio",
    label: "Audio Quality",
    items: [
      {
        question: "What audio quality do you offer?",
        answer:
          "We stream at 128kbps AAC by default, which sounds great on most connections. Premium members can enable high-quality mode (256kbps) in settings. Downloads are always at the highest quality.",
      },
      {
        question: "Do you offer different narration styles?",
        answer:
          "We believe in matching the right narrator to each book. Some titles feature the author reading their own work; others use professional narrators chosen for their ability to bring that particular story to life.",
      },
      {
        question: "Are your audiobooks unabridged?",
        answer:
          "The vast majority of our catalogue is unabridged—we believe in hearing books as the author intended. On the rare occasion we offer an abridged version, it's clearly marked.",
      },
    ],
  },
];

export default function MembershipPreviewPage() {
  return (
    <>
      <PreviewBar currentPath="/preview/membership" />
      <MembershipPage
        navItems={navItems}
        logoHref="/preview"
      onSearch={() => console.log("Search clicked")}
      onCart={() => console.log("Cart clicked")}
      // Hero
      heroHeadline="Join the Spiracle Community"
      heroDescription="Become part of a community that celebrates the art of listening. Discover handpicked audiobooks, exclusive narrations, and a library curated with love by people who care deeply about great writing."
      heroIllustrationSrc="/illustrations/full-membership.png"
      heroIllustrationDarkSrc="/illustrations/full-membership-dark.png"
      // Pricing
      pricingHeading="Find your perfect plan"
      pricingSubheading="Start free, upgrade anytime. All plans include access to our carefully curated library of literary audiobooks."
      pricingPlans={pricingPlans}
      pricingSavingsBadge="2 months free"
      // Gift
      giftHeadline="Share the Joy of Listening"
      giftDescription="Give the gift of extraordinary audiobooks. A Spiracle membership is perfect for the book lover, the curious mind, or anyone who deserves more wonder in their ears."
      giftCtaText="Give a membership"
      giftCtaHref="/gift"
      giftIllustrationSrc="/illustrations/oasis.png"
      giftIllustrationDarkSrc="/illustrations/oasis-dark.png"
      // FAQ
      faqHeading="Frequently Asked Questions"
      faqCategories={faqCategories}
      faqContactHref="/contact"
      // Footer
      onNewsletterSubmit={async (email) => {
        console.log("Newsletter signup:", email);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }}
    />
    </>
  );
}
