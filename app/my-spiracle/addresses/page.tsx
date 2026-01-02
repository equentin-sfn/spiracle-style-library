"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Section,
  SectionLabel,
  sampleDeliveryAddress,
  sampleGiftAddresses,
} from "@/components/my-spiracle";
import type { Address } from "@/components/my-spiracle";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Home,
  Gift,
  Plus,
  MoreVertical,
  Pencil,
  Trash2,
  Check,
} from "lucide-react";

// Address card component
function AddressCard({
  address,
  type,
  onEdit,
  onDelete,
}: {
  address: Address;
  type: "delivery" | "gift";
  onEdit?: () => void;
  onDelete?: () => void;
}) {
  return (
    <div className="p-4 bg-spiracle-parchment dark:bg-card rounded-lg border border-spiracle-sand dark:border-border">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          {type === "delivery" ? (
            <Home className="size-4 text-spiracle-forest" />
          ) : (
            <Gift className="size-4 text-spiracle-burgundy" />
          )}
          <span className="text-sm font-medium text-foreground">
            {address.label}
          </span>
          {address.isDefault && (
            <Badge variant="outline" className="text-xs gap-1">
              <Check className="size-3" />
              Default
            </Badge>
          )}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <MoreVertical className="size-4" />
              <span className="sr-only">Actions</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={onEdit}>
              <Pencil className="size-4 mr-2" />
              Edit
            </DropdownMenuItem>
            {!address.isDefault && (
              <DropdownMenuItem
                onClick={onDelete}
                className="text-red-500 focus:text-red-500"
              >
                <Trash2 className="size-4 mr-2" />
                Delete
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="text-sm text-muted-foreground space-y-0.5 pl-6">
        <p className="text-foreground">{address.name}</p>
        {address.addressLines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  );
}

// Add address dialog
function AddAddressDialog({
  type,
  trigger,
}: {
  type: "delivery" | "gift";
  trigger: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {type === "delivery" ? "Add delivery address" : "Add gift recipient"}
          </DialogTitle>
          <DialogDescription>
            {type === "delivery"
              ? "Add a new delivery address for physical orders."
              : "Save a recipient's address for easier gift sending."}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="label">Label</Label>
            <Input
              id="label"
              placeholder={type === "delivery" ? "e.g., Home, Work" : "e.g., Mum, Sarah's Birthday"}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" placeholder="Name on delivery" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="line1">Address line 1</Label>
            <Input id="line1" placeholder="Street address" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="line2">Address line 2 (optional)</Label>
            <Input id="line2" placeholder="Flat, suite, etc." />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" placeholder="City" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="postcode">Postcode</Label>
              <Input id="postcode" placeholder="Postcode" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Input id="country" placeholder="Country" defaultValue="United Kingdom" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>Save address</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default function AddressesPage() {
  const deliveryAddress = sampleDeliveryAddress;
  const giftAddresses = sampleGiftAddresses;

  return (
    <div>
      {/* Delivery Address */}
      <Section background="cream">
        <SectionLabel>Delivery address</SectionLabel>
        <p className="text-sm text-muted-foreground mb-4">
          Your primary address for any physical deliveries or merchandise.
        </p>
        <AddressCard
          address={deliveryAddress}
          type="delivery"
          onEdit={() => console.log("Edit delivery")}
        />
        <AddAddressDialog
          type="delivery"
          trigger={
            <Button variant="outline" size="sm" className="mt-4">
              <Plus className="size-4 mr-2" />
              Add delivery address
            </Button>
          }
        />
      </Section>

      {/* Gift Addresses */}
      <Section background="parchment">
        <SectionLabel>Gift addresses</SectionLabel>
        <p className="text-sm text-muted-foreground mb-4">
          Save addresses for people you gift audiobooks to. Makes sending gifts faster.
        </p>
        {giftAddresses.length > 0 ? (
          <div className="space-y-3">
            {giftAddresses.map((address) => (
              <AddressCard
                key={address.id}
                address={address}
                type="gift"
                onEdit={() => console.log("Edit", address.id)}
                onDelete={() => console.log("Delete", address.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-spiracle-cream dark:bg-background rounded-lg border border-dashed border-spiracle-sand dark:border-border">
            <Gift className="size-10 text-muted-foreground/30 mx-auto mb-3" />
            <p className="text-sm text-muted-foreground mb-4">
              No gift addresses saved yet
            </p>
          </div>
        )}
        <AddAddressDialog
          type="gift"
          trigger={
            <Button variant="outline" size="sm" className="mt-4">
              <Plus className="size-4 mr-2" />
              Add gift recipient
            </Button>
          }
        />
      </Section>

      {/* Tip */}
      <Section background="cream" className="pb-8">
        <div className="p-4 bg-spiracle-honey/20 dark:bg-spiracle-honey/10 rounded-lg border border-spiracle-honey/30">
          <p className="text-sm text-foreground">
            <strong>Tip:</strong> When you send an audiobook as a gift, you can choose
            from your saved addresses or enter a new one. Saved addresses make the
            process faster and help avoid typos.
          </p>
        </div>
      </Section>
    </div>
  );
}
