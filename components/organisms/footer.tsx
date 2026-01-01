"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { NewsletterSignup } from "@/components/molecules";
import type { LucideIcon } from "lucide-react";

// Social media icon components (Lucide doesn't include brand logos)
const InstagramLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TiktokLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const LinkedinLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const FacebookLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const BlueskyLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 256 256" fill="currentColor">
    <path d="M128 80c-30 24-60 72-60 100 0 20 12 32 32 32 16 0 24-8 28-16 4 8 12 16 28 16 20 0 32-12 32-32 0-28-30-76-60-100zm0 24c20 16 40 52 40 76 0 8-4 12-12 12s-12-4-16-16l-12-24-12 24c-4 12-8 16-16 16s-12-4-12-12c0-24 20-60 40-76z"/>
  </svg>
);

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  icon: LucideIcon | React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  /** Logo image URL */
  logoSrc?: string;
  /** Logo alt text */
  logoAlt?: string;
  /** Tagline text */
  tagline?: string;
  /** Link columns */
  columns?: FooterLinkColumn[];
  /** Social media links */
  socialLinks?: SocialLink[];
  /** Copyright text */
  copyright?: string;
  /** Whether to show newsletter signup */
  showNewsletter?: boolean;
  /** Newsletter headline */
  newsletterHeadline?: string;
  /** Callback for newsletter submission */
  onNewsletterSubmit?: (email: string) => Promise<void>;
}

const defaultColumns: FooterLinkColumn[] = [
  {
    title: "Explore",
    links: [
      { label: "Browse All", href: "/browse" },
      { label: "Collections", href: "/collections" },
      { label: "New Releases", href: "/new" },
      { label: "Authors", href: "/authors" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Story", href: "/story" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Centre", href: "/help" },
      { label: "Contact Us", href: "/contact" },
      { label: "FAQs", href: "/faq" },
      { label: "Gift Cards", href: "/gifts" },
    ],
  },
];

const defaultSocialLinks: SocialLink[] = [
  { icon: InstagramLogo, href: "https://instagram.com/spiracleaudiobooks", label: "Instagram" },
  { icon: TiktokLogo, href: "https://tiktok.com/@spiracleaudiobooks", label: "TikTok" },
  { icon: BlueskyLogo, href: "https://bsky.app/profile/spiracle.bsky.social", label: "Bluesky" },
  { icon: LinkedinLogo, href: "https://linkedin.com/company/spiracle", label: "LinkedIn" },
  { icon: FacebookLogo, href: "https://facebook.com/spiracleaudiobooks", label: "Facebook" },
];

function Footer({
  logoSrc = "/logos/logo-spiracle-spiral-black@3x.png",
  logoAlt = "Spiracle",
  tagline = "Stories worth hearing.",
  columns = defaultColumns,
  socialLinks = defaultSocialLinks,
  copyright = `© ${new Date().getFullYear()} Spiracle. All rights reserved.`,
  showNewsletter = true,
  newsletterHeadline = "Join our mailing list",
  onNewsletterSubmit,
  className,
  ...props
}: FooterProps) {
  return (
    <footer
      className={cn("pt-16 sm:pt-20 pb-8 bg-muted", className)}
      {...props}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Logo & Newsletter Column */}
            <div className="lg:col-span-4">
              {/* Logo */}
              <Link href="/" className="inline-block">
                <Image
                  src={logoSrc}
                  alt={logoAlt}
                  width={140}
                  height={40}
                  className="h-8 w-auto dark:brightness-0 dark:invert"
                />
              </Link>

              {/* Tagline */}
              <p className="mt-4 font-serif text-lg italic text-muted-foreground">
                {tagline}
              </p>

              {/* Newsletter */}
              {showNewsletter && (
                <div className="mt-8">
                  <NewsletterSignup
                    headline={newsletterHeadline}
                    onEmailSubmit={onNewsletterSubmit}
                    variant="compact"
                  />
                </div>
              )}

              {/* Social Links */}
              <div className="flex items-center gap-3 mt-8">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={index}
                      href={social.href}
                      className={cn(
                        "flex items-center justify-center w-10 h-10 rounded-full",
                        "transition-colors duration-200",
                        "bg-background hover:bg-spiracle-sand/50 dark:hover:bg-muted text-foreground"
                      )}
                      aria-label={social.label}
                    >
                      <Icon className="size-5" strokeWidth={1.5} />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Link Columns */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                {columns.map((column, index) => (
                  <nav key={index} aria-label={column.title}>
                    <h3 className="text-xs uppercase tracking-[0.2em] font-semibold mb-4 text-foreground">
                      {column.title}
                    </h3>
                    <ul className="space-y-3">
                      {column.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            href={link.href}
                            className="text-sm text-muted-foreground link-literary"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            className="h-px mt-12 sm:mt-16 bg-border"
            aria-hidden="true"
          />

          {/* Bottom Row */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-muted-foreground">{copyright}</p>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                href="/terms"
                className="text-xs text-muted-foreground link-literary"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-xs text-muted-foreground link-literary"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookies"
                className="text-xs text-muted-foreground link-literary"
              >
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
