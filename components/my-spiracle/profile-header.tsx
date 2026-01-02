"use client";

// =============================================================================
// PROFILE HEADER
// Avatar, name, bio, member since, edit profile, visibility toggle
// =============================================================================

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button, ThemeToggle } from "@/components/atoms";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/molecules";
import {
  Pencil,
  Lock,
  Globe,
  Headphones,
  BookMarked,
  Eye,
  EyeOff,
  Check,
  ChevronDown,
} from "lucide-react";
import { Section } from "./helpers";
import { sampleProfile } from "./sample-data";

export interface ProfileHeaderProps {
  displayName: string;
  screenName: string;
  bio: string;
  memberSince: string;
  booksCompleted: number;
  isProfilePublic: boolean;
  onProfileVisibilityChange?: (isPublic: boolean) => void;
  onEditProfile?: () => void;
  className?: string;
}

export function ProfileHeader({
  displayName,
  screenName,
  bio,
  memberSince,
  booksCompleted,
  isProfilePublic,
  onProfileVisibilityChange,
  onEditProfile,
  className,
}: ProfileHeaderProps) {
  const [localIsPublic, setLocalIsPublic] = React.useState(isProfilePublic);

  const handleVisibilityChange = (newValue: boolean) => {
    setLocalIsPublic(newValue);
    onProfileVisibilityChange?.(newValue);
  };

  // Get initials from display name
  const initials = displayName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className={cn("relative overflow-hidden", className)}>
      {/* Warm gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(235, 222, 219, 0.5) 0%, rgba(249, 247, 237, 0) 100%)",
        }}
      />
      <div className="dark:hidden absolute inset-0 bg-gradient-to-b from-spiracle-blush/30 to-transparent" />
      <div className="hidden dark:block absolute inset-0 bg-gradient-to-b from-spiracle-burgundy/10 to-transparent" />

      <Section className="relative pt-12 sm:pt-16 pb-6 sm:pb-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Avatar */}
          <div className="relative group">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-spiracle-sand dark:bg-muted overflow-hidden ring-4 ring-spiracle-cream dark:ring-background shadow-lg">
              <div className="w-full h-full flex items-center justify-center bg-spiracle-forest dark:bg-primary text-spiracle-cream dark:text-primary-foreground font-display text-2xl sm:text-3xl">
                {initials}
              </div>
            </div>
            <button
              className="absolute bottom-0 right-0 p-1.5 bg-spiracle-cream dark:bg-card rounded-full shadow-md border border-spiracle-sand dark:border-border opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Edit avatar"
            >
              <Pencil className="size-3 text-muted-foreground" />
            </button>
          </div>

          {/* Profile info */}
          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
              <h1 className="font-display text-2xl sm:text-3xl text-foreground">
                {displayName}
              </h1>
              <span className="text-sm text-muted-foreground">
                @{screenName}
              </span>
            </div>

            <p className="font-serif text-base sm:text-lg text-foreground/80 mb-3 max-w-md">
              {bio}
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <BookMarked className="size-3.5" />
                Member since {memberSince}
              </span>
              <span className="flex items-center gap-1.5">
                <Headphones className="size-3.5" />
                {booksCompleted} books
              </span>
            </div>
          </div>

          {/* Action buttons (desktop) */}
          <div className="hidden sm:flex flex-col gap-2 items-end">
            <div className="flex items-center gap-2">
              <ThemeToggle
                iconSize={18}
                className="min-w-[36px] min-h-[36px] rounded-full border border-spiracle-sand dark:border-border hover:bg-spiracle-sand/50 dark:hover:bg-secondary/50"
              />
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5"
                onClick={onEditProfile}
              >
                <Pencil className="size-3.5" />
                Edit profile
              </Button>
            </div>

            {/* Profile visibility dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
                  {localIsPublic ? (
                    <>
                      <Eye className="size-3.5" />
                      <span>Public profile</span>
                    </>
                  ) : (
                    <>
                      <EyeOff className="size-3.5" />
                      <span>Private profile</span>
                    </>
                  )}
                  <ChevronDown className="size-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem
                  onClick={() => handleVisibilityChange(true)}
                  className={cn(localIsPublic && "bg-spiracle-sand/50 dark:bg-secondary/50")}
                >
                  <Globe className="size-4 mr-2" />
                  <div className="flex-1">
                    <div className="font-medium">Public</div>
                    <div className="text-[10px] text-muted-foreground">Anyone can see your profile</div>
                  </div>
                  {localIsPublic && <Check className="size-4 text-spiracle-forest dark:text-primary" />}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleVisibilityChange(false)}
                  className={cn(!localIsPublic && "bg-spiracle-sand/50 dark:bg-secondary/50")}
                >
                  <Lock className="size-4 mr-2" />
                  <div className="flex-1">
                    <div className="font-medium">Private</div>
                    <div className="text-[10px] text-muted-foreground">Only you can see your profile</div>
                  </div>
                  {!localIsPublic && <Check className="size-4 text-spiracle-forest dark:text-primary" />}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Edit profile and visibility (mobile) */}
        <div className="mt-6 sm:hidden space-y-3">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1 gap-1.5" onClick={onEditProfile}>
              <Pencil className="size-3.5" />
              Edit profile
            </Button>
            <ThemeToggle
              iconSize={18}
              className="min-w-[40px] min-h-[40px] rounded-lg border border-spiracle-sand dark:border-border hover:bg-spiracle-sand/50 dark:hover:bg-secondary/50"
            />
          </div>

          <div className="flex items-center justify-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors py-1.5 px-3 rounded-full border border-spiracle-sand dark:border-border">
                  {localIsPublic ? (
                    <>
                      <Eye className="size-3.5" />
                      <span>Public profile</span>
                    </>
                  ) : (
                    <>
                      <EyeOff className="size-3.5" />
                      <span>Private profile</span>
                    </>
                  )}
                  <ChevronDown className="size-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48">
                <DropdownMenuItem
                  onClick={() => handleVisibilityChange(true)}
                  className={cn(localIsPublic && "bg-spiracle-sand/50 dark:bg-secondary/50")}
                >
                  <Globe className="size-4 mr-2" />
                  <div className="flex-1">
                    <div className="font-medium">Public</div>
                    <div className="text-[10px] text-muted-foreground">Anyone can see your profile</div>
                  </div>
                  {localIsPublic && <Check className="size-4 text-spiracle-forest dark:text-primary" />}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleVisibilityChange(false)}
                  className={cn(!localIsPublic && "bg-spiracle-sand/50 dark:bg-secondary/50")}
                >
                  <Lock className="size-4 mr-2" />
                  <div className="flex-1">
                    <div className="font-medium">Private</div>
                    <div className="text-[10px] text-muted-foreground">Only you can see your profile</div>
                  </div>
                  {!localIsPublic && <Check className="size-4 text-spiracle-forest dark:text-primary" />}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </Section>
    </header>
  );
}

// Default props for style guide display
ProfileHeader.defaultProps = {
  displayName: sampleProfile.displayName,
  screenName: sampleProfile.screenName,
  bio: sampleProfile.bio,
  memberSince: sampleProfile.memberSince,
  booksCompleted: sampleProfile.stats.booksCompleted,
  isProfilePublic: sampleProfile.isProfilePublic,
};
