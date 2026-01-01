"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/atoms";
import { AdaptiveIllustration } from "@/components/molecules/adaptive-illustration";
import { SerendipityPills, type SerendipityPill } from "@/components/molecules";
import { Home, Library } from "lucide-react";

// Discovery pills for the 404 page
const discoveryPills: SerendipityPill[] = [
  { id: "scottish-gothic", label: "Scottish Gothic" },
  { id: "comfort-reads", label: "Comfort reads" },
  { id: "under-4-hours", label: "Under 4 hours" },
  { id: "train-journey", label: "Train journey listens" },
  { id: "cosy-mysteries", label: "Cosy mysteries" },
  { id: "award-winners", label: "Award winners I missed" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-spiracle-cream dark:bg-[#1a1815] relative overflow-hidden">
      {/* Subtle background texture - old paper feel */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Decorative dotted path - like a wandering road */}
      <svg
        className="absolute bottom-0 left-0 w-full h-48 opacity-10 dark:opacity-5 pointer-events-none"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M0,150 Q200,100 400,130 T800,110 T1200,140"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="8 12"
          className="text-spiracle-terracotta dark:text-spiracle-honey"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
        />
      </svg>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 number - subtle, not screaming */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-spiracle-terracotta dark:text-spiracle-honey font-medium mb-8"
          >
            <span className="inline-flex items-center gap-3">
              <span className="w-8 h-px bg-spiracle-terracotta/40 dark:bg-spiracle-honey/40" />
              Page not found
              <span className="w-8 h-px bg-spiracle-terracotta/40 dark:bg-spiracle-honey/40" />
            </span>
          </motion.p>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mb-10"
          >
            {/* Subtle glow behind illustration */}
            <div
              className="absolute inset-0 blur-3xl opacity-20 dark:opacity-10"
              style={{
                background:
                  "radial-gradient(ellipse at center, var(--spiracle-honey) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />
            <AdaptiveIllustration
              lightSrc="/illustrations/car.png"
              darkSrc="/illustrations/car-dark.png"
              alt="Illustration of a vintage car - you've taken a wrong turn"
              width={320}
              height={220}
              className="relative mx-auto"
              priority
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground leading-[1.15] tracking-tight"
          >
            Looks like you&apos;ve taken
            <br />
            <span className="italic">a wrong turn</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-5 font-serif text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-md mx-auto"
          >
            Even the best readers lose their place sometimes. The page you&apos;re
            looking for has wandered off, but we can help you find your way
            back.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="min-w-[180px]">
              <Link href="/">
                <Home className="size-4 mr-2" strokeWidth={1.5} />
                Take me home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[180px]">
              <Link href="/audiobooks">
                <Library className="size-4 mr-2" strokeWidth={1.5} />
                Browse audiobooks
              </Link>
            </Button>
          </motion.div>

          {/* Friendly footer note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-12 text-sm text-muted-foreground/60 font-serif italic"
          >
            Lost? Try searching, or explore our{" "}
            <Link
              href="/collections"
              className="text-spiracle-terracotta dark:text-spiracle-honey hover:underline underline-offset-2"
            >
              curated collections
            </Link>
            .
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-16 w-24 h-px bg-gradient-to-r from-transparent via-spiracle-terracotta/30 dark:via-spiracle-honey/20 to-transparent mx-auto"
            aria-hidden="true"
          />

          {/* Serendipity discovery section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="mt-12"
          >
            <SerendipityPills
              pills={discoveryPills}
              label="I'm in the mood for..."
              onPillClick={(pill) => {
                // Navigate to search/discovery with this mood
                window.location.href = `/search?mood=${pill.id}`;
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative corner flourish - bottom left */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-8 w-16 h-16 text-spiracle-terracotta/15 dark:text-spiracle-honey/10 pointer-events-none"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <path
          d="M10,90 Q10,50 50,50 Q50,10 90,10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="10" cy="90" r="3" fill="currentColor" />
        <circle cx="90" cy="10" r="3" fill="currentColor" />
      </motion.svg>
    </div>
  );
}
