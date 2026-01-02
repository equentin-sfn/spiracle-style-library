"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Section,
  SectionLabel,
  sampleProfile,
} from "@/components/my-spiracle";
import {
  Camera,
  Check,
  Globe,
  Lock,
  Mail,
  KeyRound,
} from "lucide-react";

export default function EditProfilePage() {
  const profile = sampleProfile;
  const [isPublic, setIsPublic] = React.useState(profile.isProfilePublic);

  return (
    <div>
      {/* Profile Photo Section */}
      <Section background="cream">
        <SectionLabel>Profile photo</SectionLabel>
        <div className="flex items-center gap-6">
          {/* Avatar with upload overlay */}
          <div className="relative group">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-spiracle-terracotta/20 to-spiracle-forest/20 flex items-center justify-center">
              <span className="font-display text-3xl text-foreground">
                {profile.displayName.split(" ").map(n => n[0]).join("")}
              </span>
            </div>
            <button className="absolute inset-0 rounded-full bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera className="size-6 text-white" />
            </button>
          </div>
          <div className="space-y-2">
            <Button variant="outline" size="sm">
              Upload photo
            </Button>
            <p className="text-xs text-muted-foreground">
              JPG, PNG or GIF. Max 2MB.
            </p>
          </div>
        </div>
      </Section>

      {/* Display Information */}
      <Section background="parchment">
        <SectionLabel>Display information</SectionLabel>
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="screenName">Screen name</Label>
              <div className="flex items-center">
                <span className="text-muted-foreground mr-1">@</span>
                <Input
                  id="screenName"
                  defaultValue={profile.screenName}
                  className="flex-1"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Used in your profile URL and mentions
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="displayName">Display name</Label>
              <Input id="displayName" defaultValue={profile.displayName} />
              <p className="text-xs text-muted-foreground">
                How you appear to others
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Bio */}
      <Section background="cream">
        <SectionLabel>Bio</SectionLabel>
        <div className="space-y-2">
          <Textarea
            id="bio"
            defaultValue={profile.bio}
            rows={3}
            maxLength={280}
            className="resize-none"
          />
          <p className="text-xs text-muted-foreground text-right">
            {profile.bio.length}/280 characters
          </p>
        </div>
      </Section>

      {/* Account Details */}
      <Section background="parchment">
        <SectionLabel>Account details</SectionLabel>
        <div className="space-y-4">
          {/* Email */}
          <div className="flex items-center justify-between p-4 bg-spiracle-cream dark:bg-background rounded-lg border border-spiracle-sand dark:border-border">
            <div className="flex items-center gap-3">
              <Mail className="size-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-foreground">eleanor.vance@email.com</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Check className="size-3 text-spiracle-forest" />
                  Verified
                </p>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              Change
            </Button>
          </div>

          {/* Password */}
          <div className="flex items-center justify-between p-4 bg-spiracle-cream dark:bg-background rounded-lg border border-spiracle-sand dark:border-border">
            <div className="flex items-center gap-3">
              <KeyRound className="size-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-foreground">Password</p>
                <p className="text-xs text-muted-foreground">
                  Last changed 3 months ago
                </p>
              </div>
            </div>
            <Button variant="ghost" size="sm">
              Change
            </Button>
          </div>
        </div>
      </Section>

      {/* Profile Visibility */}
      <Section background="cream">
        <SectionLabel>Profile visibility</SectionLabel>
        <div className="p-4 bg-spiracle-parchment dark:bg-card rounded-lg border border-spiracle-sand dark:border-border">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              {isPublic ? (
                <Globe className="size-5 text-spiracle-forest mt-0.5" />
              ) : (
                <Lock className="size-5 text-muted-foreground mt-0.5" />
              )}
              <div>
                <p className="text-sm font-medium text-foreground">
                  {isPublic ? "Public profile" : "Private profile"}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {isPublic
                    ? "Your profile, collections, and reviews are visible to everyone. Others can follow you and see your activity."
                    : "Only you can see your profile. Your collections and reviews are hidden from others."}
                </p>
              </div>
            </div>
            <Switch
              checked={isPublic}
              onCheckedChange={setIsPublic}
              aria-label="Profile visibility"
            />
          </div>
        </div>
      </Section>

      {/* Save Button */}
      <Section background="cream" className="pb-8">
        <div className="flex justify-end gap-3">
          <Button variant="outline">Cancel</Button>
          <Button>Save changes</Button>
        </div>
      </Section>
    </div>
  );
}
