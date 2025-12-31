"use client";

import * as React from "react";
import { Megaphone, BookOpen, Headphones, Heart, Sparkle } from "@phosphor-icons/react";

// Molecules
import {
  NewsletterSignup,
  AnnouncementBar,
  PullQuote,
  PodcastCard,
  EssayCard,
  InterviewCard,
  AuthorBio,
} from "@/components/molecules";

// Organisms
import {
  GettingStartedSteps,
  FeaturedTitle,
  AppPromo,
  Footer,
  AuthorHero,
} from "@/components/organisms";

function SectionHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-spiracle-ink text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl">{title}</h2>
        {description && (
          <p className="mt-2 text-white/70 text-sm">{description}</p>
        )}
      </div>
    </div>
  );
}

function VariantLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-spiracle-terracotta text-white rounded-full mb-4">
      {children}
    </span>
  );
}

const steps = [
  {
    icon: BookOpen,
    heading: "Browse our collection",
    description:
      "Explore curated literary fiction and non-fiction audiobooks, handpicked for discerning listeners.",
  },
  {
    icon: Headphones,
    heading: "Listen anywhere",
    description:
      "Download the Spiracle app and enjoy your audiobooks offline, on any device.",
  },
  {
    icon: Heart,
    heading: "Join the community",
    description:
      "Become a member for exclusive access, discounts, and early releases.",
  },
];

export default function HomePreviewPage() {
  return (
    <div className="min-h-screen bg-spiracle-cream">
      {/* Page Header */}
      <header className="py-12 text-center border-b border-border/30 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-display text-4xl sm:text-5xl text-foreground mb-4">
            New Components Preview
          </h1>
          <p className="text-muted-foreground text-lg text-left max-w-2xl mx-auto">
            Homepage, content, and layout components for Spiracle. Each section shows light and dark variants where applicable.
          </p>
        </div>
      </header>

      {/* ============================================ */}
      {/* ANNOUNCEMENT BAR */}
      {/* ============================================ */}
      <SectionHeader
        title="AnnouncementBar"
        description="Dismissible top banner with localStorage persistence"
      />
      <div className="space-y-0">
        <div className="p-4 bg-white">
          <VariantLabel>Default</VariantLabel>
        </div>
        <AnnouncementBar
          id="preview-default"
          icon={Megaphone}
          message="New year, new audiobooks. Discover our January collection."
          linkText="Explore now"
          linkHref="/collections"
          variant="default"
        />
        <div className="p-4 bg-white">
          <VariantLabel>Subtle</VariantLabel>
        </div>
        <AnnouncementBar
          id="preview-subtle"
          icon={Sparkle}
          message="Members get 20% off all new releases this month."
          linkText="Join now"
          linkHref="/membership"
          variant="subtle"
        />
        <div className="p-4 bg-white">
          <VariantLabel>Accent</VariantLabel>
        </div>
        <AnnouncementBar
          id="preview-accent"
          icon={Megaphone}
          message="Limited time: Gift a subscription and get one month free."
          linkText="Gift now"
          linkHref="/gift"
          variant="accent"
        />
      </div>

      {/* ============================================ */}
      {/* GETTING STARTED STEPS */}
      {/* ============================================ */}
      <SectionHeader
        title="GettingStartedSteps"
        description="3-column step layout with icons"
      />
      <div>
        <div className="px-4 py-4 bg-spiracle-cream">
          <VariantLabel>Light (cream)</VariantLabel>
        </div>
        <GettingStartedSteps
          heading="How Spiracle works"
          subheading="Start listening to premium literary audiobooks in three easy steps"
          steps={steps}
          variant="cream"
        />
        <div className="px-4 py-4 bg-white">
          <VariantLabel>Light (white)</VariantLabel>
        </div>
        <GettingStartedSteps
          heading="How Spiracle works"
          subheading="Start listening to premium literary audiobooks in three easy steps"
          steps={steps}
          variant="white"
        />
      </div>

      {/* ============================================ */}
      {/* FEATURED TITLE */}
      {/* ============================================ */}
      <SectionHeader
        title="FeaturedTitle"
        description="Two-column book spotlight with large cover"
      />
      <div>
        <div className="px-4 py-4 bg-white">
          <VariantLabel>Light (white)</VariantLabel>
        </div>
        <FeaturedTitle
          label="This month's pick"
          coverSrc="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600"
          title="The Shadow Line"
          author="Joseph Conrad"
          authorHref="/authors/joseph-conrad"
          narrator="Simon Slater"
          duration="4 hrs 32 mins"
          synopsis="A young sea captain's first command becomes a haunting journey through doubt, illness, and the thin line between youth and experience. Conrad's masterpiece of psychological tension."
          primaryCtaHref="/book/shadow-line"
          secondaryCtaHref="/book/shadow-line"
          variant="white"
        />
        <div className="px-4 py-4 bg-[#2D2520]">
          <VariantLabel>Dark</VariantLabel>
        </div>
        <FeaturedTitle
          label="Editor's choice"
          coverSrc="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600"
          title="The Shadow Line"
          author="Joseph Conrad"
          authorHref="/authors/joseph-conrad"
          narrator="Simon Slater"
          duration="4 hrs 32 mins"
          synopsis="A young sea captain's first command becomes a haunting journey through doubt, illness, and the thin line between youth and experience. Conrad's masterpiece of psychological tension."
          primaryCtaHref="/book/shadow-line"
          secondaryCtaHref="/book/shadow-line"
          variant="dark"
          layout="reversed"
        />
      </div>

      {/* ============================================ */}
      {/* PULL QUOTE */}
      {/* ============================================ */}
      <SectionHeader
        title="PullQuote"
        description="Decorative quote with serif typography"
      />
      <section className="py-16 bg-spiracle-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <VariantLabel>Large / Centered</VariantLabel>
          <PullQuote
            quote="Spiracle has rekindled my love for audiobooks. The narration quality is unmatched, and the curation feels deeply personal."
            attribution="Sarah M."
            source="The Guardian"
            size="large"
            align="center"
          />
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <VariantLabel>Default / Left</VariantLabel>
          <PullQuote
            quote="A thoughtfully assembled library that feels like it was curated by a well-read friend."
            attribution="Literary Review"
            size="default"
            align="left"
          />
        </div>
      </section>

      {/* ============================================ */}
      {/* CONTENT CARDS */}
      {/* ============================================ */}
      <SectionHeader
        title="Content Cards (EssayCard, PodcastCard, InterviewCard)"
        description="Cards for editorial content"
      />
      <section className="py-16 bg-spiracle-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
            From Murmurations
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <EssayCard
              imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600"
              title="Why We Still Need Virginia Woolf"
              author="Emma Thompson"
              excerpt="A century later, Woolf's explorations of consciousness feel more relevant than ever."
              readingTime="12 min read"
              date="Jan 15, 2025"
              href="/essays/virginia-woolf"
              variant="default"
            />
            <PodcastCard
              artworkSrc="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600"
              title="The Art of Narration with Simon Slater"
              episodeLabel="Episode 24"
              description="Our narrator discusses bringing Joseph Conrad to life through voice."
              duration="45 min"
              date="Jan 12, 2025"
              href="/podcast/ep-24"
            />
            <InterviewCard
              guestPhotoSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300"
              guestName="Claire Keegan"
              guestTitle="Author, Foster & Small Things Like These"
              title="On silence, brevity, and the stories we don't tell"
              pullQuote="Every sentence should be necessary. If it's not earning its place, it shouldn't be there."
              duration="32 min"
              date="Jan 8, 2025"
              href="/interviews/claire-keegan"
              format="audio"
            />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* AUTHOR BIO */}
      {/* ============================================ */}
      <SectionHeader
        title="AuthorBio"
        description="Author profile with photo, bio, and links"
      />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <VariantLabel>Default</VariantLabel>
              <AuthorBio
                photoSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300"
                name="Joseph Conrad"
                bio="Polish-British novelist regarded as one of the greatest writers in English literature. His works explore the human psyche in the context of colonialism, duty, and moral ambiguity."
                titleCount={8}
                authorHref="/authors/joseph-conrad"
                variant="default"
              />
            </div>
            <div>
              <VariantLabel>Compact</VariantLabel>
              <AuthorBio
                photoSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300"
                name="Virginia Woolf"
                bio="English modernist author and pioneer of stream of consciousness narrative. Her novels transformed the possibilities of fiction."
                titleCount={12}
                authorHref="/authors/virginia-woolf"
                variant="compact"
              />
            </div>
            <div>
              <VariantLabel>Inline</VariantLabel>
              <AuthorBio
                photoSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300"
                name="James Joyce"
                bio="Irish novelist and poet best known for Ulysses and Dubliners. His experimental techniques revolutionized modern literature."
                titleCount={5}
                authorHref="/authors/james-joyce"
                variant="inline"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* AUTHOR HERO */}
      {/* ============================================ */}
      <SectionHeader
        title="AuthorHero"
        description="Full-width author page header"
      />
      <div>
        <div className="px-4 py-4 bg-spiracle-cream">
          <VariantLabel>Light / Centered</VariantLabel>
        </div>
        <AuthorHero
          photoSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600"
          name="Virginia Woolf"
          bio="Virginia Woolf was an English writer, considered one of the most important modernist 20th-century authors. She pioneered the use of stream of consciousness as a narrative device and explored the underlying concepts of feminism and mental illness."
          lifespan="1882–1941"
          nationality="British"
          titleCount={12}
          totalDuration="58 hrs"
          variant="cream"
          layout="centered"
        />
        <div className="px-4 py-4 bg-[#2D2520]">
          <VariantLabel>Dark / Split</VariantLabel>
        </div>
        <AuthorHero
          photoSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600"
          name="Joseph Conrad"
          bio="Born Józef Teodor Konrad Korzeniowski in Russian-controlled Ukraine, Conrad didn't learn English until his twenties. He went on to become one of the most celebrated prose stylists in the language, crafting tales of the sea, colonialism, and the darkness within the human heart."
          lifespan="1857–1924"
          nationality="Polish-British"
          titleCount={8}
          totalDuration="42 hrs"
          variant="dark"
          layout="split"
        />
      </div>

      {/* ============================================ */}
      {/* APP PROMO */}
      {/* ============================================ */}
      <SectionHeader
        title="AppPromo"
        description="Phone mockup with app store badges"
      />
      <div>
        <div className="px-4 py-4 bg-spiracle-cream">
          <VariantLabel>Light</VariantLabel>
        </div>
        <AppPromo
          heading="Take Spiracle everywhere"
          description="Download our app and listen to your library offline. Available on iOS and Android with crystal-clear audio and intuitive controls."
          phoneMockupSrc="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400"
          variant="cream"
          layout="default"
        />
        <div className="px-4 py-4 bg-[#2D2520]">
          <VariantLabel>Dark</VariantLabel>
        </div>
        <AppPromo
          heading="Take Spiracle everywhere"
          description="Download our app and listen to your library offline. Available on iOS and Android with crystal-clear audio and intuitive controls."
          phoneMockupSrc="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400"
          variant="dark"
          layout="reversed"
        />
      </div>

      {/* ============================================ */}
      {/* NEWSLETTER SIGNUP */}
      {/* ============================================ */}
      <SectionHeader
        title="NewsletterSignup"
        description="Email signup with loading/success states"
      />
      <section className="py-16 bg-spiracle-parchment">
        <div className="max-w-xl mx-auto px-4">
          <VariantLabel>Default</VariantLabel>
          <NewsletterSignup
            headline="Sign up to the newsletter"
            placeholder="Enter your email"
            buttonText="Subscribe"
            variant="default"
          />
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-xl mx-auto px-4">
          <VariantLabel>Compact</VariantLabel>
          <NewsletterSignup
            placeholder="Your email"
            buttonText="Sign up"
            variant="compact"
          />
        </div>
      </section>

      {/* ============================================ */}
      {/* FOOTER */}
      {/* ============================================ */}
      <SectionHeader
        title="Footer"
        description="Logo, link columns, social icons, newsletter"
      />
      <div>
        <div className="px-4 py-4 bg-spiracle-parchment">
          <VariantLabel>Light</VariantLabel>
        </div>
        <Footer
          tagline="Stories worth hearing."
          variant="cream"
          showNewsletter={true}
        />
        <div className="px-4 py-4 bg-[#2D2520]">
          <VariantLabel>Dark</VariantLabel>
        </div>
        <Footer
          tagline="Stories worth hearing."
          variant="dark"
          showNewsletter={true}
        />
      </div>
    </div>
  );
}
