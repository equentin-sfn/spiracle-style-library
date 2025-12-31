"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { NewsletterSignup } from "@/components/molecules";
import {
  InstagramLogo,
  TwitterLogo,
  FacebookLogo,
  SpotifyLogo,
} from "@phosphor-icons/react";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  icon: PhosphorIcon;
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
  /** Background variant */
  variant?: "cream" | "dark";
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
  { icon: InstagramLogo, href: "#", label: "Instagram" },
  { icon: TwitterLogo, href: "#", label: "Twitter" },
  { icon: FacebookLogo, href: "#", label: "Facebook" },
  { icon: SpotifyLogo, href: "#", label: "Spotify" },
];

const variantStyles = {
  cream: {
    bg: "bg-spiracle-parchment",
    text: "text-foreground",
    muted: "text-muted-foreground",
    border: "border-border/50",
    hover: "hover:text-spiracle-forest",
    socialBg: "bg-spiracle-sand/50 hover:bg-spiracle-sand",
  },
  dark: {
    bg: "bg-[#2D2520]",
    text: "text-white",
    muted: "text-white/60",
    border: "border-white/10",
    hover: "hover:text-spiracle-honey",
    socialBg: "bg-white/5 hover:bg-white/10",
  },
};

function Footer({
  logoSrc = "/images/spiracle-logo.svg",
  logoAlt = "Spiracle",
  tagline = "Stories worth hearing.",
  columns = defaultColumns,
  socialLinks = defaultSocialLinks,
  copyright = `© ${new Date().getFullYear()} Spiracle. All rights reserved.`,
  showNewsletter = true,
  newsletterHeadline = "Join our mailing list",
  onNewsletterSubmit,
  variant = "cream",
  className,
  ...props
}: FooterProps) {
  const styles = variantStyles[variant];
  const isDark = variant === "dark";

  return (
    <footer
      className={cn("pt-16 sm:pt-20 pb-8", styles.bg, className)}
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
                  className={cn(
                    "h-8 w-auto",
                    isDark && "brightness-0 invert"
                  )}
                />
              </Link>

              {/* Tagline */}
              <p
                className={cn(
                  "mt-4 font-serif text-lg italic",
                  styles.muted
                )}
              >
                {tagline}
              </p>

              {/* Newsletter */}
              {showNewsletter && (
                <div className="mt-8">
                  <NewsletterSignup
                    headline={newsletterHeadline}
                    onEmailSubmit={onNewsletterSubmit}
                    variant="compact"
                    className={cn(
                      isDark &&
                        "[&_input]:bg-white/5 [&_input]:border-white/20 [&_input]:text-white [&_input]:placeholder:text-white/40 [&_button]:border-white/20 [&_button]:text-white [&_button:hover]:bg-white/10"
                    )}
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
                        styles.socialBg,
                        styles.text
                      )}
                      aria-label={social.label}
                    >
                      <Icon className="size-5" weight="regular" />
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
                    <h3
                      className={cn(
                        "text-xs uppercase tracking-[0.2em] font-semibold mb-4",
                        styles.text
                      )}
                    >
                      {column.title}
                    </h3>
                    <ul className="space-y-3">
                      {column.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            href={link.href}
                            className={cn(
                              "text-sm transition-colors duration-200",
                              styles.muted,
                              styles.hover
                            )}
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
            className={cn("h-px mt-12 sm:mt-16", styles.border, "bg-current opacity-20")}
            aria-hidden="true"
          />

          {/* Bottom Row */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Copyright */}
            <p className={cn("text-xs", styles.muted)}>{copyright}</p>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                href="/terms"
                className={cn(
                  "text-xs transition-colors duration-200",
                  styles.muted,
                  styles.hover
                )}
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className={cn(
                  "text-xs transition-colors duration-200",
                  styles.muted,
                  styles.hover
                )}
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookies"
                className={cn(
                  "text-xs transition-colors duration-200",
                  styles.muted,
                  styles.hover
                )}
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
