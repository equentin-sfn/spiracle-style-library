"use client";

import * as React from "react";
import { Megaphone, Sparkle, BookOpen, Headphones, Heart } from "@phosphor-icons/react";

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

export default function HomePreviewPage() {
  return (
    <div className="min-h-screen bg-spiracle-cream">
      {/* Announcement Bar */}
      <AnnouncementBar
        id="preview-announcement"
        icon={Megaphone}
        message="New year, new audiobooks. Discover our January collection."
        linkText="Explore now"
        linkHref="/collections"
        variant="accent"
      />

      {/* Page Header */}
      <header className="py-12 text-center border-b border-border/30">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-display text-4xl sm:text-5xl text-foreground mb-4">
            New Components Preview
          </h1>
          <p className="text-muted-foreground text-lg">
            Homepage, content, and layout components for Spiracle
          </p>
        </div>
      </header>

      {/* Getting Started Steps */}
      <GettingStartedSteps
        heading="How Spiracle works"
        subheading="Start listening to premium literary audiobooks in three easy steps"
        steps={[
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
        ]}
        variant="cream"
      />

      {/* Featured Title */}
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

      {/* Pull Quote Section */}
      <section className="py-16 bg-spiracle-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8 text-center">
            What our listeners say
          </p>
          <PullQuote
            quote="Spiracle has rekindled my love for audiobooks. The narration quality is unmatched, and the curation feels deeply personal."
            attribution="Sarah M."
            source="The Guardian"
            size="large"
            align="center"
          />
        </div>
      </section>

      {/* Content Cards Section */}
      <section className="py-16 bg-spiracle-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
            From the Spiracle Journal
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Essay Card */}
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

            {/* Podcast Card */}
            <PodcastCard
              artworkSrc="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600"
              title="The Art of Narration with Simon Slater"
              episodeLabel="Episode 24"
              description="Our narrator discusses bringing Joseph Conrad to life through voice."
              duration="45 min"
              date="Jan 12, 2025"
              href="/podcast/ep-24"
            />

            {/* Interview Card */}
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

      {/* Author Bio Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
            Author Bio Component
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AuthorBio
              photoSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300"
              name="Joseph Conrad"
              bio="Polish-British novelist regarded as one of the greatest writers in English literature. His works explore the human psyche in the context of colonialism, duty, and moral ambiguity."
              titleCount={8}
              authorHref="/authors/joseph-conrad"
              variant="default"
            />

            <AuthorBio
              photoSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300"
              name="Virginia Woolf"
              bio="English modernist author and pioneer of stream of consciousness narrative. Her novels transformed the possibilities of fiction."
              titleCount={12}
              authorHref="/authors/virginia-woolf"
              variant="compact"
            />

            <AuthorBio
              photoSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300"
              name="James Joyce"
              bio="Irish novelist and poet best known for Ulysses and Dubliners. His experimental techniques revolutionized modern literature."
              titleCount={5}
              authorHref="/authors/james-joyce"
              variant="default"
            />
          </div>
        </div>
      </section>

      {/* Author Hero */}
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

      {/* App Promo */}
      <AppPromo
        heading="Take Spiracle everywhere"
        description="Download our app and listen to your library offline. Available on iOS and Android with crystal-clear audio and intuitive controls."
        phoneMockupSrc="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400"
        variant="cream"
        layout="default"
      />

      {/* Newsletter Signup Section */}
      <section className="py-16 bg-spiracle-parchment">
        <div className="max-w-xl mx-auto px-4 text-center">
          <Sparkle className="size-8 text-spiracle-terracotta mx-auto mb-4" weight="duotone" />
          <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-2">
            Stay in the loop
          </h2>
          <p className="text-muted-foreground mb-8">
            New releases, author interviews, and exclusive offers. No spam, ever.
          </p>
          <NewsletterSignup
            headline=""
            placeholder="Enter your email"
            buttonText="Subscribe"
            variant="default"
          />
        </div>
      </section>

      {/* Footer */}
      <Footer
        tagline="Stories worth hearing."
        variant="dark"
        showNewsletter={false}
      />
    </div>
  );
}
