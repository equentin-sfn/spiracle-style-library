"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms";
import {
  Section,
  SectionLabel,
  BookCover,
  samplePurchases,
} from "@/components/my-spiracle";
import type { PurchaseType } from "@/components/my-spiracle";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  Gift,
  CreditCard,
  Coins,
  Heart,
} from "lucide-react";

const filterTabs = [
  { id: "all", label: "All" },
  { id: "bought", label: "Bought" },
  { id: "credit", label: "Credits used" },
  { id: "gift", label: "Gifts" },
];

const purchaseTypeConfig: Record<PurchaseType, { label: string; icon: React.ReactNode; className: string }> = {
  bought: {
    label: "Bought",
    icon: <CreditCard className="size-3" />,
    className: "bg-spiracle-forest/10 text-spiracle-forest border-spiracle-forest/30",
  },
  credit: {
    label: "Credit",
    icon: <Coins className="size-3" />,
    className: "bg-spiracle-terracotta/10 text-spiracle-terracotta border-spiracle-terracotta/30",
  },
  gift_sent: {
    label: "Gift sent",
    icon: <Gift className="size-3" />,
    className: "bg-spiracle-burgundy/10 text-spiracle-burgundy border-spiracle-burgundy/30",
  },
  gift_received: {
    label: "Gift received",
    icon: <Heart className="size-3" />,
    className: "bg-pink-500/10 text-pink-600 border-pink-500/30",
  },
};

export default function PurchasesPage() {
  const [activeFilter, setActiveFilter] = React.useState("all");
  const purchases = samplePurchases;

  const filteredPurchases = purchases.filter((purchase) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "gift") {
      return purchase.purchaseType === "gift_sent" || purchase.purchaseType === "gift_received";
    }
    return purchase.purchaseType === activeFilter;
  });

  return (
    <div>
      {/* Filter Tabs */}
      <Section background="cream">
        <SectionLabel>Purchase history</SectionLabel>
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={cn(
                "px-4 py-2 text-sm rounded-full border transition-colors whitespace-nowrap",
                activeFilter === tab.id
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-muted-foreground border-spiracle-sand dark:border-border hover:text-foreground hover:border-muted-foreground"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Purchases List */}
        {filteredPurchases.length > 0 ? (
          <div className="space-y-3">
            {filteredPurchases.map((purchase) => {
              const config = purchaseTypeConfig[purchase.purchaseType];
              return (
                <div
                  key={purchase.id}
                  className="flex gap-4 p-4 bg-spiracle-parchment dark:bg-card rounded-lg border border-spiracle-sand dark:border-border"
                >
                  {/* Book Cover */}
                  <BookCover title={purchase.book.title} size="sm" />

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="min-w-0">
                        <h3 className="text-sm font-medium text-foreground truncate">
                          {purchase.book.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {purchase.book.author}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className={cn("flex-shrink-0 gap-1", config.className)}
                      >
                        {config.icon}
                        {config.label}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{purchase.date}</span>
                        {purchase.price && <span>{purchase.price}</span>}
                        {purchase.recipient && (
                          <span>to {purchase.recipient}</span>
                        )}
                      </div>
                      {purchase.receiptUrl && (
                        <Button variant="ghost" size="sm" className="h-7 text-xs">
                          <Download className="size-3 mr-1" />
                          Receipt
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-spiracle-parchment dark:bg-card flex items-center justify-center">
              <Coins className="size-8 text-muted-foreground/50" />
            </div>
            <p className="text-sm text-muted-foreground">
              No purchases found for this filter
            </p>
          </div>
        )}
      </Section>

      {/* Summary */}
      <Section background="parchment" className="pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-spiracle-cream dark:bg-background rounded-lg p-4 border border-spiracle-sand dark:border-border text-center">
            <p className="text-2xl font-display text-foreground">
              {purchases.filter((p) => p.purchaseType === "bought").length}
            </p>
            <p className="text-xs text-muted-foreground">Books bought</p>
          </div>
          <div className="bg-spiracle-cream dark:bg-background rounded-lg p-4 border border-spiracle-sand dark:border-border text-center">
            <p className="text-2xl font-display text-foreground">
              {purchases.filter((p) => p.purchaseType === "credit").length}
            </p>
            <p className="text-xs text-muted-foreground">Credits used</p>
          </div>
          <div className="bg-spiracle-cream dark:bg-background rounded-lg p-4 border border-spiracle-sand dark:border-border text-center">
            <p className="text-2xl font-display text-foreground">
              {purchases.filter((p) => p.purchaseType === "gift_sent").length}
            </p>
            <p className="text-xs text-muted-foreground">Gifts sent</p>
          </div>
          <div className="bg-spiracle-cream dark:bg-background rounded-lg p-4 border border-spiracle-sand dark:border-border text-center">
            <p className="text-2xl font-display text-foreground">
              {purchases.filter((p) => p.purchaseType === "gift_received").length}
            </p>
            <p className="text-xs text-muted-foreground">Gifts received</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
