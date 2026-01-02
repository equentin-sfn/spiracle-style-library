"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms";
import {
  Section,
  SectionLabel,
  sampleSubscription,
  samplePaymentMethod,
  sampleBillingHistory,
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
import { Badge } from "@/components/ui/badge";
import {
  CreditCard,
  Calendar,
  Coins,
  Check,
  Download,
  ChevronRight,
  Sparkles,
} from "lucide-react";

// Card brand icons
const cardIcons: Record<string, string> = {
  visa: "VISA",
  mastercard: "MC",
  amex: "AMEX",
  paypal: "PayPal",
};

export default function BillingPage() {
  const subscription = sampleSubscription;
  const paymentMethod = samplePaymentMethod;
  const billingHistory = sampleBillingHistory;

  return (
    <div>
      {/* Current Plan */}
      <Section background="cream">
        <SectionLabel>Current plan</SectionLabel>
        <div className="bg-gradient-to-br from-spiracle-parchment to-spiracle-cream dark:from-card dark:to-background rounded-lg border border-spiracle-sand dark:border-border p-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-display text-2xl text-foreground">
                  {subscription.planName}
                </h3>
                <Badge variant="secondary" className="bg-spiracle-forest/10 text-spiracle-forest border-0">
                  Active
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {subscription.price} · Billed {subscription.billingPeriod}
              </p>
            </div>
            <Button variant="outline" size="sm">
              Change plan
            </Button>
          </div>

          {/* Plan stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-spiracle-cream dark:bg-background rounded-lg p-4 border border-spiracle-sand/50 dark:border-border/50">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <Coins className="size-4" />
                <span className="text-xs">Credits remaining</span>
              </div>
              <p className="font-display text-2xl text-foreground">
                {subscription.creditsRemaining}
              </p>
            </div>
            <div className="bg-spiracle-cream dark:bg-background rounded-lg p-4 border border-spiracle-sand/50 dark:border-border/50">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <Calendar className="size-4" />
                <span className="text-xs">Next billing</span>
              </div>
              <p className="text-sm font-medium text-foreground">
                {subscription.nextBillingDate}
              </p>
            </div>
            <div className="bg-spiracle-cream dark:bg-background rounded-lg p-4 border border-spiracle-sand/50 dark:border-border/50 col-span-2 sm:col-span-1">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <Sparkles className="size-4" />
                <span className="text-xs">Monthly credits</span>
              </div>
              <p className="font-display text-2xl text-foreground">
                {subscription.creditsPerMonth}
              </p>
            </div>
          </div>

          {/* Plan features */}
          <div className="border-t border-spiracle-sand/50 dark:border-border/50 pt-4">
            <p className="text-xs text-muted-foreground mb-3">What's included:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {subscription.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="size-4 text-spiracle-forest flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Payment Method */}
      <Section background="parchment">
        <SectionLabel>Payment method</SectionLabel>
        <div className="bg-spiracle-cream dark:bg-background rounded-lg border border-spiracle-sand dark:border-border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-10 rounded bg-gradient-to-br from-slate-800 to-slate-600 flex items-center justify-center text-white text-xs font-bold">
                {cardIcons[paymentMethod.type] || paymentMethod.type}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  •••• •••• •••• {paymentMethod.last4}
                </p>
                <p className="text-xs text-muted-foreground">
                  Expires {paymentMethod.expiryDate}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {paymentMethod.isDefault && (
                <Badge variant="outline" className="text-xs">Default</Badge>
              )}
              <Button variant="ghost" size="sm">
                Edit
              </Button>
            </div>
          </div>
        </div>
        <Button variant="outline" size="sm" className="mt-3">
          <CreditCard className="size-4 mr-2" />
          Add payment method
        </Button>
      </Section>

      {/* Billing History */}
      <Section background="cream">
        <SectionLabel>Billing history</SectionLabel>
        <div className="bg-spiracle-parchment dark:bg-card rounded-lg border border-spiracle-sand dark:border-border overflow-hidden">
          {billingHistory.map((entry, i) => (
            <div
              key={entry.id}
              className={cn(
                "flex items-center justify-between p-4",
                i < billingHistory.length - 1 && "border-b border-spiracle-sand/50 dark:border-border/50"
              )}
            >
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  {entry.description}
                </p>
                <p className="text-xs text-muted-foreground">{entry.date}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">
                    {entry.amount}
                  </p>
                  <Badge
                    variant="outline"
                    className={cn(
                      "text-xs",
                      entry.status === "paid" && "text-spiracle-forest border-spiracle-forest/30",
                      entry.status === "pending" && "text-spiracle-terracotta border-spiracle-terracotta/30",
                      entry.status === "failed" && "text-red-500 border-red-500/30"
                    )}
                  >
                    {entry.status}
                  </Badge>
                </div>
                {entry.invoiceUrl && (
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Download className="size-4" />
                    <span className="sr-only">Download invoice</span>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Cancel Subscription */}
      <Section background="parchment" className="pb-8">
        <div className="flex items-center justify-between p-4 bg-spiracle-cream dark:bg-background rounded-lg border border-spiracle-sand dark:border-border">
          <div>
            <p className="text-sm font-medium text-foreground">Cancel subscription</p>
            <p className="text-xs text-muted-foreground">
              You'll keep access until {subscription.nextBillingDate}
            </p>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-500">
                Cancel
                <ChevronRight className="size-4 ml-1" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Cancel your subscription?</AlertDialogTitle>
                <AlertDialogDescription>
                  You'll continue to have access until {subscription.nextBillingDate}.
                  After that, you'll lose access to your credits and member benefits.
                  You can always resubscribe later.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Keep subscription</AlertDialogCancel>
                <AlertDialogAction className="bg-red-600 hover:bg-red-700">
                  Yes, cancel subscription
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </Section>
    </div>
  );
}
