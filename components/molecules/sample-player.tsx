"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { X, Minus, Maximize2 } from "lucide-react";

/**
 * Hand-drawn style icons for Spiracle player
 * These have slightly imperfect paths to give a warm, human quality
 * TODO: Replace with official Spiracle icon assets when available
 */

// Hand-drawn play icon - sketchy circle with triangle
function HandDrawnPlayIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Sketchy circle - slightly wobbly */}
      <path
        d="M32 4c15.5 0.5 27.5 13 27.5 28s-12 27-28 27.5c-15.5-0.5-27-12.5-27.5-28S16.5 4.5 32 4z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Hand-drawn triangle */}
      <path
        d="M26 21c0.5-0.3 18 10 18 11s-17.5 11.5-18 11c-0.5-0.5-0.5-21.5 0-22z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Hand-drawn pause icon
function HandDrawnPauseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Sketchy circle */}
      <path
        d="M32 4c15.5 0.5 27.5 13 27.5 28s-12 27-28 27.5c-15.5-0.5-27-12.5-27.5-28S16.5 4.5 32 4z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Two pause bars - slightly imperfect */}
      <path
        d="M24 20c0.2-0.1 4 0 4 0.5v23c-0.1 0.3-3.8 0.5-4 0v-23.5z"
        fill="currentColor"
      />
      <path
        d="M36 20c0.2 0.1 4-0.1 4 0.5v23c0.1 0.3-3.8 0.5-4 0.1v-23.6z"
        fill="currentColor"
      />
    </svg>
  );
}

// Hand-drawn skip back icon with "15" inside
function HandDrawnSkipBackIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Curved arrow going counter-clockwise - hand-drawn style */}
      <path
        d="M24 8c-9 0.5-15.5 7.5-16 16s6 15 15.5 16c9.5 0.5 17-6.5 17-16"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Arrow head */}
      <path
        d="M24 3l-5 6.5 7 4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* "15" text - hand-drawn style */}
      <text
        x="24"
        y="28"
        textAnchor="middle"
        fontSize="11"
        fontWeight="500"
        fill="currentColor"
        fontFamily="inherit"
      >
        15
      </text>
    </svg>
  );
}

// Hand-drawn skip forward icon with "15" inside
function HandDrawnSkipForwardIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Curved arrow going clockwise - hand-drawn style */}
      <path
        d="M24 8c9 0.5 15.5 7.5 16 16s-6 15-15.5 16c-9.5 0.5-17-6.5-17-16"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Arrow head */}
      <path
        d="M24 3l5 6.5-7 4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* "15" text */}
      <text
        x="24"
        y="28"
        textAnchor="middle"
        fontSize="11"
        fontWeight="500"
        fill="currentColor"
        fontFamily="inherit"
      >
        15
      </text>
    </svg>
  );
}

// Hand-drawn moon/sleep icon
function HandDrawnMoonIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20.5 12.5c-0.5 4.5-4 8-8.5 8.5-5 0-9-4-9-9 0.5-4.5 4-8 8.5-8.5 0.5 0 0.5 0.5 0 1-2 2.5-2 6 0.5 8.5s6 2.5 8.5 0.5c0.5-0.5 1-0.5 1 0z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Hand-drawn layers/chapters icon
function HandDrawnLayersIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 12l9-5 9 5-9 5-9-5z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 16l9 5 9-5"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 8l9 5 9-5"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export interface SamplePlayerProps {
  /** Whether the player is active */
  open: boolean;
  /** Callback when player state changes */
  onOpenChange: (open: boolean) => void;
  /** Book cover image */
  coverImage: string;
  /** Book title */
  title: string;
  /** Author name */
  author: string;
  /** Narrator name */
  narrator: string;
  /** Sample duration (e.g., "4:43") */
  duration?: string;
  /** Audio source URL (for future use) */
  sampleUrl?: string;
}

function SamplePlayer({
  open,
  onOpenChange,
  coverImage,
  title,
  author,
  narrator,
  duration = "4:43",
  sampleUrl,
}: SamplePlayerProps) {
  // View state: full modal vs mini player
  const [isMinimised, setIsMinimised] = React.useState(false);

  // Playback state (visual only for now)
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [playbackSpeed, setPlaybackSpeed] = React.useState(1);

  // Parse duration to seconds for progress calculation
  const durationParts = duration.split(":").map(Number);
  const totalSeconds =
    durationParts.length === 2
      ? durationParts[0] * 60 + durationParts[1]
      : durationParts[0] * 3600 + durationParts[1] * 60 + durationParts[2];

  // Format time display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Progress percentage
  const progress = totalSeconds > 0 ? (currentTime / totalSeconds) * 100 : 0;

  // Cycle playback speed
  const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];
  const cycleSpeed = () => {
    const currentIndex = speeds.indexOf(playbackSpeed);
    const nextIndex = (currentIndex + 1) % speeds.length;
    setPlaybackSpeed(speeds[nextIndex]);
  };

  // Skip handlers (visual demo)
  const skipBack = () => setCurrentTime(Math.max(0, currentTime - 15));
  const skipForward = () =>
    setCurrentTime(Math.min(totalSeconds, currentTime + 15));

  // Close completely - stops playback
  const handleClose = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    setIsMinimised(false);
    onOpenChange(false);
  };

  // Minimise to mini player - keeps playing
  const handleMinimise = () => {
    setIsMinimised(true);
  };

  // Expand back to full modal
  const handleExpand = () => {
    setIsMinimised(false);
  };

  // Simulate playback (for demo)
  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (open && isPlaying && currentTime < totalSeconds) {
      interval = setInterval(() => {
        setCurrentTime((prev) => Math.min(prev + 1, totalSeconds));
      }, 1000 / playbackSpeed);
    }
    return () => clearInterval(interval);
  }, [open, isPlaying, currentTime, totalSeconds, playbackSpeed]);

  // Reset state when closed externally
  React.useEffect(() => {
    if (!open) {
      setIsPlaying(false);
      setCurrentTime(0);
      setIsMinimised(false);
    }
  }, [open]);

  // Auto-play when opened
  React.useEffect(() => {
    if (open && !isMinimised && currentTime === 0) {
      setIsPlaying(true);
    }
  }, [open]);

  // Don't render anything if not open
  if (!open) return null;

  return (
    <>
      {/* Full Modal - shown when open and not minimised */}
      <Dialog
        open={open && !isMinimised}
        onOpenChange={(newOpen) => {
          if (!newOpen) {
            // User dismissed via overlay/escape - minimise instead of close
            handleMinimise();
          }
        }}
      >
        <DialogContent
          showCloseButton={false}
          className={cn(
            "p-0 gap-0 overflow-hidden",
            "bg-gradient-to-b from-spiracle-cream to-[#e8e4d9]",
            "dark:from-[#2a2520] dark:to-[#1f1b17]",
            "max-w-sm sm:max-w-md",
            // Mobile: bottom sheet style
            "max-sm:top-auto max-sm:bottom-0 max-sm:translate-y-0 max-sm:-translate-x-1/2",
            "max-sm:rounded-b-none max-sm:rounded-t-3xl",
            "max-sm:max-w-full max-sm:w-full"
          )}
        >
          {/* Hidden title for accessibility */}
          <DialogTitle className="sr-only">
            Sample: {title} by {author}
          </DialogTitle>

          {/* Top controls: Minimise and Close */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5">
            <button
              onClick={handleMinimise}
              className="p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Minimise player"
            >
              <Minus className="size-5" strokeWidth={1.5} />
            </button>
            <button
              onClick={handleClose}
              className="p-2 rounded-full bg-background/80 backdrop-blur-sm text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Close player"
            >
              <X className="size-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* SAMPLE badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-spiracle-terracotta/90 text-spiracle-cream rounded-full">
              Sample
            </span>
          </div>

          {/* Main content */}
          <div className="flex flex-col items-center px-6 pt-14 pb-8 sm:px-8">
            {/* Cover Image */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-6 rounded-lg overflow-hidden shadow-xl">
              <Image
                src={coverImage}
                alt={`Cover of ${title}`}
                fill
                className="object-cover"
                sizes="224px"
              />
            </div>

            {/* Spiracle editions label */}
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/60 mb-2">
              Spiracle editions
            </p>

            {/* Title */}
            <h2 className="font-display text-xl sm:text-2xl italic text-center text-foreground leading-tight mb-1">
              {title}
            </h2>

            {/* Narrator */}
            <p className="text-sm text-muted-foreground mb-8">
              read by <span className="font-medium">{narrator}</span>
            </p>

            {/* Progress bar - minimal, organic */}
            <div className="w-full mb-3">
              <div className="relative h-[3px] bg-spiracle-sand/60 dark:bg-muted/40 rounded-full">
                <div
                  className="absolute inset-y-0 left-0 bg-spiracle-terracotta/80 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
                {/* Playhead dot */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-spiracle-terracotta rounded-full shadow-sm transition-all duration-300"
                  style={{ left: `calc(${progress}% - 5px)` }}
                />
              </div>
            </div>

            {/* Time display */}
            <div className="flex justify-between w-full text-xs text-muted-foreground/70 mb-6">
              <span>{formatTime(currentTime)}</span>
              <span>{duration}</span>
            </div>

            {/* Main controls - hand-drawn style */}
            <div className="flex items-center justify-center gap-4 sm:gap-8 mb-6">
              {/* Skip back 15s */}
              <button
                onClick={skipBack}
                className="text-foreground/60 hover:text-foreground/80 transition-colors"
                aria-label="Skip back 15 seconds"
              >
                <HandDrawnSkipBackIcon className="size-12 sm:size-14" />
              </button>

              {/* Play/Pause - hand-drawn circle */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-foreground/70 hover:text-foreground/90 transition-colors"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <HandDrawnPauseIcon className="size-16 sm:size-20" />
                ) : (
                  <HandDrawnPlayIcon className="size-16 sm:size-20" />
                )}
              </button>

              {/* Skip forward 15s */}
              <button
                onClick={skipForward}
                className="text-foreground/60 hover:text-foreground/80 transition-colors"
                aria-label="Skip forward 15 seconds"
              >
                <HandDrawnSkipForwardIcon className="size-12 sm:size-14" />
              </button>
            </div>

            {/* Secondary controls */}
            <div className="flex items-center justify-center gap-8 text-muted-foreground/70">
              {/* Sleep timer */}
              <button
                className="p-2 hover:text-foreground transition-colors"
                aria-label="Sleep timer"
              >
                <HandDrawnMoonIcon className="size-5" />
              </button>

              {/* Speed */}
              <button
                onClick={cycleSpeed}
                className="flex items-center gap-1 text-sm hover:text-foreground transition-colors"
                aria-label={`Playback speed: ${playbackSpeed}x`}
              >
                <span className="font-medium tabular-nums">{playbackSpeed}x</span>
              </button>

              {/* Chapters */}
              <button
                className="p-2 hover:text-foreground transition-colors"
                aria-label="Chapters"
              >
                <HandDrawnLayersIcon className="size-5" />
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Mini Player - shown when minimised */}
      {isMinimised && (
        <div
          className={cn(
            "fixed bottom-0 left-0 right-0 z-50",
            "h-[72px]",
            "bg-spiracle-cream dark:bg-[#2a2520]",
            "border-t border-border/40",
            "shadow-[0_-4px_20px_rgba(0,0,0,0.08)]",
            // Animate in
            "animate-in slide-in-from-bottom duration-300"
          )}
          role="region"
          aria-label="Mini audio player"
        >
          <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-3 sm:gap-4">
            {/* Cover thumbnail */}
            <button
              onClick={handleExpand}
              className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-md overflow-hidden shadow-md flex-shrink-0 hover:opacity-90 transition-opacity"
              aria-label="Expand player"
            >
              <Image
                src={coverImage}
                alt={`Cover of ${title}`}
                fill
                className="object-cover"
                sizes="56px"
              />
            </button>

            {/* Title and narrator */}
            <button
              onClick={handleExpand}
              className="flex-1 min-w-0 text-left hover:opacity-80 transition-opacity"
              aria-label="Expand player"
            >
              <p className="font-display text-sm sm:text-base italic text-foreground truncate leading-tight">
                {title}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {narrator}
              </p>
            </button>

            {/* Progress bar - minimal, hidden on smallest screens */}
            <div className="hidden sm:block flex-1 max-w-[200px] lg:max-w-[300px]">
              <div className="relative h-[2px] bg-spiracle-sand/60 dark:bg-muted/40 rounded-full">
                <div
                  className="absolute inset-y-0 left-0 bg-spiracle-terracotta/80 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-muted-foreground/60 mt-0.5">
                <span>{formatTime(currentTime)}</span>
                <span>{duration}</span>
              </div>
            </div>

            {/* Play/Pause - hand-drawn style, smaller */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-foreground/70 hover:text-foreground/90 transition-colors flex-shrink-0"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <HandDrawnPauseIcon className="size-10 sm:size-11" />
              ) : (
                <HandDrawnPlayIcon className="size-10 sm:size-11" />
              )}
            </button>

            {/* Expand button */}
            <button
              onClick={handleExpand}
              className="p-2 text-foreground/60 hover:text-foreground transition-colors flex-shrink-0"
              aria-label="Expand player"
            >
              <Maximize2 className="size-5" strokeWidth={1.5} />
            </button>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="p-2 text-foreground/60 hover:text-foreground transition-colors flex-shrink-0"
              aria-label="Close player"
            >
              <X className="size-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export { SamplePlayer };
