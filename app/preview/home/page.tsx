"use client";

import * as React from "react";
import { Megaphone, BookOpen, Headphones, Heart, Spiral, Sparkle, Star } from "@phosphor-icons/react";

// Molecules
import {
  NewsletterSignup,
  AnnouncementBar,
  PullQuote,
  PodcastCard,
  EssayCard,
  InterviewCard,
  AuthorBio,
  AdaptiveIllustration,
  PreviewBar,
} from "@/components/molecules";

// Organisms
import {
  TopNavigation,
  GettingStartedSteps,
  FeaturedTitle,
  Footer,
  AuthorHero,
  FeatureSection,
} from "@/components/organisms";

const navItems = [
  { label: "Browse", href: "/browse" },
  { label: "Collections", href: "/collections" },
  { label: "New Releases", href: "/new" },
  { label: "Podcasts", href: "/podcasts" },
];

// Section wrapper with background color options - Editorial magazine style
function Section({
  children,
  background = "cream",
  label,
  className = "",
}: {
  children: React.ReactNode;
  background?: "cream" | "parchment" | "blush" | "sage" | "honey" | "sand";
  label?: string;
  className?: string;
}) {
  const bgClasses = {
    cream: "bg-spiracle-cream dark:bg-background",
    parchment: "bg-spiracle-parchment dark:bg-muted/50",
    blush: "bg-spiracle-blush/80 dark:bg-[#3a2d2a]",
    sage: "bg-spiracle-sage/50 dark:bg-[#2d3530]",
    honey: "bg-spiracle-honey/40 dark:bg-[#3a3525]",
    sand: "bg-spiracle-sand/60 dark:bg-muted/30",
  };

  return (
    <div className={`${bgClasses[background]} ${className}`}>
      {label && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-3">
          <p className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground/70 font-medium flourish-label">
            {label}
          </p>
        </div>
      )}
      {children}
    </div>
  );
}

export default function HomePreviewPage() {
  return (
    <div className="min-h-screen bg-spiracle-cream dark:bg-background">
      <PreviewBar currentPath="/preview/home" />
      {/* Top Navigation with Theme Toggle */}
      <TopNavigation navItems={navItems} logoHref="/preview" />

      {/* Page Header - Editorial magazine style */}
      <header className="py-16 sm:py-20 text-center bg-spiracle-cream dark:bg-background border-b border-border/20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">
            Style Library Preview
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.1]">
            Homepage Components
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-serif italic">
            A cosy collection of components for discerning book lovers. Toggle between light and dark mode to see our warm, literary palette in action.
          </p>
        </div>
      </header>

      {/* Wave divider */}
      <div className="section-divider" aria-hidden="true" />

      {/* ============================================ */}
      {/* ANNOUNCEMENT BAR */}
      {/* ============================================ */}
      <Section background="cream" label="Announcement Bar">
        <div className="pb-8">
          <AnnouncementBar
            id="preview-announcement"
            icon={Megaphone}
            message="New year, new audiobooks. Discover our January collection."
            linkText="Explore now"
            linkHref="/collections"
            variant="accent"
          />
        </div>
      </Section>

      {/* ============================================ */}
      {/* GETTING STARTED STEPS */}
      {/* ============================================ */}
      <Section background="parchment" label="Getting Started Steps">
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
        />
      </Section>

      {/* ============================================ */}
      {/* FEATURE SECTION */}
      {/* ============================================ */}
      <Section background="cream" label="Feature Section">
        <FeatureSection
          label="WHY SPIRACLE"
          headline="&ldquo;Spiracle is...a haven for book lovers.&rdquo;"
          description="We believe audiobooks deserve the same care and attention as beautifully printed editions. Every title is selected for its literary merit and matched with narrators who bring the text to life."
          benefits={[
            {
              icon: Spiral,
              title: "Curated for discerning listeners",
              description: "Every title is handpicked by our editorial team, ensuring quality narration and literary merit.",
            },
            {
              icon: Sparkle,
              title: "Crystal-clear audio quality",
              description: "Professional studio recordings with the finest narrators bring each story vividly to life.",
            },
            {
              icon: Star,
              title: "Support independent publishing",
              description: "Your membership helps fund new productions and supports authors directly.",
            },
          ]}
          illustrationSrc="/images/building-illustration.png"
          illustrationDarkSrc="/images/building-illustration-dark.png"
          illustrationAlt="Hand-drawn illustration of the Spiracle storefront"
        />
      </Section>

      {/* ============================================ */}
      {/* FEATURE SECTION (REVERSED) - with train illustration */}
      {/* ============================================ */}
      <Section background="sand" label="Feature Section (reversed)">
        <FeatureSection
          label="THE JOURNEY"
          headline="&ldquo;All aboard the Spiracle express.&rdquo;"
          description="Every audiobook is a journey. Our carefully curated collection takes you on adventures through time, across continents, and deep into the human experience."
          benefits={[
            {
              icon: BookOpen,
              title: "Literary adventures await",
              description: "From classic literature to contemporary fiction, discover stories that transport you.",
            },
            {
              icon: Headphones,
              title: "Travel companions",
              description: "Perfect for commutes, long drives, or quiet evenings at home.",
            },
            {
              icon: Heart,
              title: "Fellow travellers",
              description: "Join a community of readers who share your love of great storytelling.",
            },
          ]}
          illustrationSrc="/illustrations/train.png"
          illustrationDarkSrc="/illustrations/train-dark.png"
          illustrationAlt="Hand-drawn illustration of the Spiracle train with passengers"
          reverse
        />
      </Section>

      {/* ============================================ */}
      {/* FEATURED TITLE */}
      {/* ============================================ */}
      <Section background="parchment" label="Featured Title">
        <FeaturedTitle
          label="This month's pick"
          coverSrc="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=600"
          title="The Shadow Line"
          author="Joseph Conrad"
          authorHref="/authors/joseph-conrad"
          narrator="Simon Slater"
          duration="4 hrs 32 mins"
          synopsis="A young sea captain's first command becomes a haunting journey through doubt, illness, and the thin line between youth and experience. Conrad's masterpiece of psychological tension."
          primaryCtaHref="/book/shadow-line"
          secondaryCtaHref="/book/shadow-line"
        />
      </Section>

      {/* ============================================ */}
      {/* PULL QUOTE with decorative illustration */}
      {/* ============================================ */}
      <Section background="blush" label="Pull Quote" className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-32 md:w-48 flex-shrink-0">
              <AdaptiveIllustration
                lightSrc="/illustrations/pipe.png"
                darkSrc="/illustrations/pipe-dark.png"
                alt="Thoughtful character with pipe"
                width={200}
                height={280}
                className="w-full h-auto"
              />
            </div>
            <div className="flex-1">
              <PullQuote
                quote="Spiracle has rekindled my love for audiobooks. The narration quality is unmatched, and the curation feels deeply personal."
                attribution="The Guardian"
                source="Books Review"
                size="large"
                align="left"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================ */}
      {/* CONTENT CARDS */}
      {/* ============================================ */}
      <Section background="sage" label="Content Cards">
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
              From Murmurations
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <EssayCard
                imageSrc="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600"
                title="Why We Still Need Virginia Woolf"
                author="Eleanor Catton"
                excerpt="A century later, Woolf's explorations of consciousness feel more relevant than ever."
                readingTime="12 min read"
                date="Jan 15, 2025"
                href="/essays/virginia-woolf"
              />
              <PodcastCard
                artworkSrc="/illustrations/pipe.png"
                artworkDarkSrc="/illustrations/pipe-dark.png"
                title="The Art of Narration"
                episodeLabel="Episode 24"
                description="Voice actor Simon Slater on bringing Joseph Conrad to life through performance."
                duration="45 min"
                date="Jan 12, 2025"
                href="/podcast/ep-24"
              />
              <InterviewCard
                guestPhotoSrc="/illustrations/Welcome.png"
                guestPhotoDarkSrc="/illustrations/welcome-dark.png"
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
      </Section>

      {/* ============================================ */}
      {/* MEMBERSHIP CTA with hot tub illustration */}
      {/* ============================================ */}
      <Section background="honey" label="Membership CTA">
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4">
                  Join the community
                </p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
                  Dive into Spiracle membership
                </h2>
                <p className="text-lg text-muted-foreground mb-8 text-left">
                  Join thousands of book lovers already enjoying unlimited access to our curated library.
                  Early releases, exclusive content, and a warm community of fellow readers await.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-7 py-3.5 bg-foreground text-background rounded-sm font-serif text-base tracking-wide hover:bg-foreground/90 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]">
                    Start free trial
                  </button>
                  <button className="px-7 py-3.5 border border-foreground/30 text-foreground rounded-sm font-serif text-base tracking-wide hover:border-foreground/60 hover:bg-foreground/5 transition-all duration-200 active:scale-[0.98]">
                    Learn more
                  </button>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex justify-center">
                <AdaptiveIllustration
                  lightSrc="/illustrations/tub.png"
                  darkSrc="/illustrations/tub-dark.png"
                  alt="Community enjoying audiobooks together in a hot tub"
                  width={500}
                  height={300}
                  className="w-full max-w-md h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </Section>

      {/* ============================================ */}
      {/* AUTHOR BIO */}
      {/* ============================================ */}
      <Section background="cream" label="Author Bio">
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AuthorBio
                photoSrc="/illustrations/pipe.png"
                photoDarkSrc="/illustrations/pipe-dark.png"
                name="Joseph Conrad"
                bio="Polish-British novelist regarded as one of the greatest writers in English literature. His works explore the human psyche in the context of colonialism, duty, and moral ambiguity."
                titleCount={8}
                authorHref="/authors/joseph-conrad"
                variant="default"
              />
              <AuthorBio
                photoSrc="/illustrations/penny-farthing.png"
                photoDarkSrc="/illustrations/penny-farthing-dark.png"
                name="Virginia Woolf"
                bio="English modernist author and pioneer of stream of consciousness narrative. Her novels transformed the possibilities of fiction."
                titleCount={12}
                authorHref="/authors/virginia-woolf"
                variant="compact"
              />
              <AuthorBio
                photoSrc="/illustrations/Scooter.png"
                photoDarkSrc="/illustrations/scooter-dark.png"
                name="James Joyce"
                bio="Irish novelist and poet best known for Ulysses and Dubliners. His experimental techniques revolutionized modern literature."
                titleCount={5}
                authorHref="/authors/james-joyce"
                variant="inline"
              />
            </div>
          </div>
        </section>
      </Section>

      {/* ============================================ */}
      {/* AUTHOR HERO */}
      {/* ============================================ */}
      <Section background="parchment" label="Author Hero">
        <AuthorHero
          photoSrc="/illustrations/pipe.png"
          photoDarkSrc="/illustrations/pipe-dark.png"
          name="Joseph Conrad"
          bio="Born Józef Teodor Konrad Korzeniowski in Russian-controlled Ukraine, Conrad didn't learn English until his twenties. He went on to become one of the most celebrated prose stylists in the language, crafting tales of the sea, colonialism, and the darkness within the human heart."
          lifespan="1857–1924"
          nationality="Polish-British"
          titleCount={8}
          totalDuration="42 hrs"
          layout="split"
        />
      </Section>

      {/* ============================================ */}
      {/* APP PROMO with oasis illustration */}
      {/* ============================================ */}
      <Section background="cream" label="App Promo">
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <AdaptiveIllustration
                  lightSrc="/illustrations/oasis.png"
                  darkSrc="/illustrations/oasis-dark.png"
                  alt="Escape to your own literary oasis"
                  width={500}
                  height={350}
                  className="w-full max-w-lg h-auto"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-4">
                  Your escape awaits
                </p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
                  Take Spiracle everywhere
                </h2>
                <p className="text-lg text-muted-foreground mb-8 text-left">
                  Download our app and escape to your own literary oasis. Listen offline on any device,
                  with crystal-clear audio and intuitive controls. Your next adventure is always within reach.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-foreground text-background rounded-sm font-medium tracking-wide hover:bg-foreground/90 transition-all duration-200 flex items-center gap-2.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    App Store
                  </button>
                  <button className="px-6 py-3 bg-foreground text-background rounded-sm font-medium tracking-wide hover:bg-foreground/90 transition-all duration-200 flex items-center gap-2.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98]">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    Google Play
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Section>

      {/* ============================================ */}
      {/* NEWSLETTER SIGNUP with welcome illustration */}
      {/* ============================================ */}
      <Section background="blush" label="Newsletter Signup" className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-40 md:w-56 flex-shrink-0">
              <AdaptiveIllustration
                lightSrc="/illustrations/Welcome.png"
                darkSrc="/illustrations/welcome-dark.png"
                alt="Welcome to Spiracle"
                width={250}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <div className="flex-1">
              <NewsletterSignup
                headline="Join our mailing list"
                placeholder="Enter your email"
                buttonText="Subscribe"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================ */}
      {/* FOOTER */}
      {/* ============================================ */}
      <Section background="sand" label="Footer">
        <Footer
          tagline="Stories worth hearing."
          showNewsletter={true}
        />
      </Section>
    </div>
  );
}
