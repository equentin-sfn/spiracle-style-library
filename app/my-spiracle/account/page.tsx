"use client";

import * as React from "react";
import { Button } from "@/components/atoms";
import { Switch } from "@/components/ui/switch";
import {
  Section,
  SectionLabel,
  sampleNotificationSettings,
  sampleEmailPreferences,
  sampleConnectedAccounts,
} from "@/components/my-spiracle";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Bell,
  Mail,
  Link2,
  Download,
  Trash2,
  ExternalLink,
  Check,
} from "lucide-react";

// Settings row component - reused throughout
function SettingsRow({
  label,
  description,
  checked,
  onCheckedChange,
}: {
  label: string;
  description?: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-4 border-b border-spiracle-sand/50 dark:border-border/50 last:border-0">
      <div className="space-y-0.5">
        <p className="text-sm font-medium text-foreground">{label}</p>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <Switch
        checked={checked}
        onCheckedChange={onCheckedChange}
        aria-label={label}
      />
    </div>
  );
}

export default function AccountSettingsPage() {
  const [notifications, setNotifications] = React.useState(sampleNotificationSettings);
  const [emails, setEmails] = React.useState(sampleEmailPreferences);
  const [connected, setConnected] = React.useState(sampleConnectedAccounts);

  return (
    <div>
      {/* Notifications */}
      <Section background="cream">
        <SectionLabel>Notifications</SectionLabel>
        <div className="bg-spiracle-parchment dark:bg-card rounded-lg border border-spiracle-sand dark:border-border p-4">
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-spiracle-sand dark:border-border">
            <Bell className="size-5 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">Push notifications</span>
          </div>
          <SettingsRow
            label="New releases"
            description="Get notified when new audiobooks match your taste"
            checked={notifications.newReleases}
            onCheckedChange={(checked) =>
              setNotifications({ ...notifications, newReleases: checked })
            }
          />
          <SettingsRow
            label="Book club updates"
            description="Activity in your book clubs"
            checked={notifications.bookClubUpdates}
            onCheckedChange={(checked) =>
              setNotifications({ ...notifications, bookClubUpdates: checked })
            }
          />
          <SettingsRow
            label="Recommendations"
            description="Personalised suggestions based on your listening"
            checked={notifications.recommendations}
            onCheckedChange={(checked) =>
              setNotifications({ ...notifications, recommendations: checked })
            }
          />
          <SettingsRow
            label="Weekly digest"
            description="A weekly summary of your listening activity"
            checked={notifications.weeklyDigest}
            onCheckedChange={(checked) =>
              setNotifications({ ...notifications, weeklyDigest: checked })
            }
          />
        </div>
      </Section>

      {/* Email Preferences */}
      <Section background="parchment">
        <SectionLabel>Email preferences</SectionLabel>
        <div className="bg-spiracle-cream dark:bg-background rounded-lg border border-spiracle-sand dark:border-border p-4">
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-spiracle-sand dark:border-border">
            <Mail className="size-5 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">Email communications</span>
          </div>
          <SettingsRow
            label="Marketing emails"
            description="Sales, promotions, and special offers"
            checked={emails.marketing}
            onCheckedChange={(checked) =>
              setEmails({ ...emails, marketing: checked })
            }
          />
          <SettingsRow
            label="Newsletter"
            description="Monthly literary discoveries and Spiracle news"
            checked={emails.newsletter}
            onCheckedChange={(checked) =>
              setEmails({ ...emails, newsletter: checked })
            }
          />
          <SettingsRow
            label="Personalised recommendations"
            description="Books we think you'll love"
            checked={emails.personalizedRecommendations}
            onCheckedChange={(checked) =>
              setEmails({ ...emails, personalizedRecommendations: checked })
            }
          />
        </div>
      </Section>

      {/* Connected Accounts */}
      <Section background="cream">
        <SectionLabel>Connected accounts</SectionLabel>
        <div className="space-y-3">
          {/* Goodreads */}
          <div className="flex items-center justify-between p-4 bg-spiracle-parchment dark:bg-card rounded-lg border border-spiracle-sand dark:border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#553B08] flex items-center justify-center">
                <span className="text-white text-xs font-bold">gr</span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Goodreads</p>
                {connected.goodreads.connected ? (
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Check className="size-3 text-spiracle-forest" />
                    Connected as {connected.goodreads.username}
                  </p>
                ) : (
                  <p className="text-xs text-muted-foreground">
                    Import your reading history
                  </p>
                )}
              </div>
            </div>
            {connected.goodreads.connected ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  setConnected({
                    ...connected,
                    goodreads: { connected: false },
                  })
                }
              >
                Disconnect
              </Button>
            ) : (
              <Button variant="outline" size="sm">
                <Link2 className="size-4 mr-2" />
                Connect
              </Button>
            )}
          </div>

          {/* Apple */}
          <div className="flex items-center justify-between p-4 bg-spiracle-parchment dark:bg-card rounded-lg border border-spiracle-sand dark:border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-black dark:bg-white flex items-center justify-center">
                <span className="text-white dark:text-black text-lg"></span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Apple Books</p>
                <p className="text-xs text-muted-foreground">
                  Import from Apple Books
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Link2 className="size-4 mr-2" />
              Connect
            </Button>
          </div>
        </div>
      </Section>

      {/* Privacy & Data */}
      <Section background="parchment">
        <SectionLabel>Privacy & data</SectionLabel>
        <div className="space-y-3">
          {/* Export Data */}
          <div className="flex items-center justify-between p-4 bg-spiracle-cream dark:bg-background rounded-lg border border-spiracle-sand dark:border-border">
            <div className="flex items-center gap-3">
              <Download className="size-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium text-foreground">Export your data</p>
                <p className="text-xs text-muted-foreground">
                  Download a copy of your Spiracle data
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <ExternalLink className="size-4 mr-2" />
              Request export
            </Button>
          </div>

          {/* Delete Account */}
          <div className="flex items-center justify-between p-4 bg-spiracle-cream dark:bg-background rounded-lg border border-red-200 dark:border-red-900/50">
            <div className="flex items-center gap-3">
              <Trash2 className="size-5 text-red-500" />
              <div>
                <p className="text-sm font-medium text-foreground">Delete account</p>
                <p className="text-xs text-muted-foreground">
                  Permanently delete your account and all data
                </p>
              </div>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" size="sm">
                  Delete
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete your account?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your
                    account, listening history, collections, reviews, and all associated
                    data.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-red-600 hover:bg-red-700">
                    Yes, delete my account
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </Section>
    </div>
  );
}
