"use client";

import { useState } from "react";
import Link from "next/link";

// Atoms
import { Button } from "@/components/atoms";
import { Input } from "@/components/atoms";
import { Textarea } from "@/components/atoms";
import { Label } from "@/components/atoms";
import { Badge } from "@/components/atoms";
import { Separator } from "@/components/atoms";

// Molecules
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/molecules";
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
} from "@/components/molecules";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/molecules";
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
} from "@/components/molecules";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/molecules";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  PreviewBar,
} from "@/components/molecules";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold border-b border-border pb-2">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function ComponentRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <span className="text-sm text-muted-foreground w-32">{label}</span>
      <div className="flex flex-wrap items-center gap-2">{children}</div>
    </div>
  );
}

function ColorSwatch({ name, color, textColor = "text-foreground" }: { name: string; color: string; textColor?: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`w-16 h-16 rounded-lg border border-border shadow-sm`}
        style={{ backgroundColor: color }}
      />
      <span className="text-xs text-muted-foreground">{name}</span>
      <span className="text-xs font-mono text-muted-foreground">{color}</span>
    </div>
  );
}

export default function PreviewPage() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PreviewBar currentPath="/preview" />
      <div className="max-w-4xl mx-auto space-y-12 p-8">
        {/* Header with Spiracle branding */}
        <header className="text-center space-y-4">
          <h1 className="font-display text-6xl">Spiracle</h1>
          <p className="font-display text-xl font-light italic text-muted-foreground">
            Literary audiobooks by and for book lovers
          </p>
          <div className="flex justify-center gap-2 flex-wrap">
            <Badge variant="outline">Curious</Badge>
            <Badge variant="outline">Distinct</Badge>
            <Badge variant="outline">Uplifting</Badge>
            <Badge variant="outline">Joyful</Badge>
            <Badge variant="outline">Relaxed</Badge>
            <Badge variant="outline">Surprising</Badge>
          </div>
        </header>

        {/* Preview Navigation */}
        <nav className="flex flex-wrap justify-center gap-2">
          <Button asChild variant="outline" size="sm">
            <Link href="/preview">Base Components</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/preview/home">Homepage Components</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/preview/books">Book Cards</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/preview/collections">Collections</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/preview/spotlights">Spotlights</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/preview/showcase">Showcase</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/preview/membership">Membership</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/preview/discovery-machine">Discovery Machine</Link>
          </Button>
        </nav>

        <Separator />

        {/* Color Palette */}
        <Section title="Brand Colors">
          <div className="grid grid-cols-4 md:grid-cols-7 gap-4">
            <ColorSwatch name="Cream" color="#F9F7ED" />
            <ColorSwatch name="Parchment" color="#F4EEDC" />
            <ColorSwatch name="Sand" color="#E8E1CF" />
            <ColorSwatch name="Forest" color="#266D36" />
            <ColorSwatch name="Pine" color="#2F5337" />
            <ColorSwatch name="Burgundy" color="#730000" />
            <ColorSwatch name="Terracotta" color="#9F4300" />
            <ColorSwatch name="Honey" color="#F1E5A3" />
            <ColorSwatch name="Blush" color="#EBDEDB" />
            <ColorSwatch name="Sage" color="#C0C9C2" />
            <ColorSwatch name="Slate" color="#47507C" />
            <ColorSwatch name="Navy" color="#333B51" />
            <ColorSwatch name="Ink" color="#1a1a18" />
          </div>
        </Section>

        {/* Typography */}
        <Section title="Typography">
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Display (Jannon Display)</span>
              <h2 className="font-display text-5xl font-light">Spiracle</h2>
              <h3 className="font-display text-4xl font-light italic">Audiobooks by and for book lovers</h3>
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Serif (Jannon)</span>
              <h2 className="font-serif text-4xl">Joseph Conrad</h2>
              <h3 className="font-serif text-3xl italic">Victory</h3>
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Sans (Nunito Sans)</span>
              <p className="text-lg">The Shadow Line, which is now in the public domain, was first published in 1916.</p>
              <p className="text-sm text-muted-foreground">Narrated by George Guidall. Length: 13 hrs, 30 mins</p>
            </div>
            <div className="flex gap-4 items-center">
              <Badge className="bg-accent text-accent-foreground">Spiracle special</Badge>
              <Badge variant="outline">fiction</Badge>
              <Badge variant="secondary">new releases</Badge>
            </div>
          </div>
        </Section>

        <Separator />

        {/* ATOMS */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-primary">Atoms</h2>

          <Section title="Button">
            <ComponentRow label="Variants">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </ComponentRow>
            <ComponentRow label="Sizes">
              <Button size="xs">Extra Small</Button>
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </ComponentRow>
            <ComponentRow label="States">
              <Button disabled>Disabled</Button>
            </ComponentRow>
          </Section>

          <Section title="Badge">
            <ComponentRow label="Variants">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </ComponentRow>
            <ComponentRow label="Spiracle Tags">
              <Badge className="bg-accent text-accent-foreground">Spiracle special</Badge>
              <Badge variant="outline">fiction</Badge>
              <Badge variant="outline">poetry</Badge>
              <Badge variant="secondary">podcasts</Badge>
            </ComponentRow>
          </Section>

          <Section title="Input">
            <ComponentRow label="Default">
              <Input placeholder="Enter text..." className="w-64" />
            </ComponentRow>
            <ComponentRow label="Disabled">
              <Input placeholder="Disabled" disabled className="w-64" />
            </ComponentRow>
            <ComponentRow label="With value">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type here..."
                className="w-64"
              />
            </ComponentRow>
          </Section>

          <Section title="Textarea">
            <ComponentRow label="Default">
              <Textarea placeholder="Enter longer text..." className="w-64" />
            </ComponentRow>
          </Section>

          <Section title="Label">
            <ComponentRow label="Default">
              <Label>Form Label</Label>
            </ComponentRow>
            <ComponentRow label="With input">
              <div className="flex flex-col gap-2">
                <Label htmlFor="demo-input">Email Address</Label>
                <Input id="demo-input" placeholder="email@example.com" className="w-64" />
              </div>
            </ComponentRow>
          </Section>

          <Section title="Separator">
            <ComponentRow label="Horizontal">
              <div className="w-64">
                <Separator />
              </div>
            </ComponentRow>
            <ComponentRow label="Vertical">
              <div className="h-8 flex items-center">
                <span>Left</span>
                <Separator orientation="vertical" className="mx-4" />
                <span>Right</span>
              </div>
            </ComponentRow>
          </Section>
        </div>

        <Separator />

        {/* MOLECULES */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-primary">Molecules</h2>

          <Section title="Card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-xl">Heart of Darkness</CardTitle>
                  <CardDescription>
                    By Joseph Conrad
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Narrated by Simon Slater</p>
                  <p className="text-sm text-muted-foreground">Length: 12hrs and 25mins</p>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button size="sm">Sample</Button>
                  <Button size="sm" variant="outline">€ 14</Button>
                </CardFooter>
              </Card>

              <Card size="sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge className="bg-accent text-accent-foreground mb-2">Spiracle special</Badge>
                      <CardTitle className="font-serif text-xl">Virginia Woolf</CardTitle>
                      <CardDescription className="font-serif italic">The Waves</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">A groundbreaking novel that captures the inner lives of six friends.</p>
                </CardContent>
              </Card>
            </div>
          </Section>

          <Section title="Field">
            <FieldGroup>
              <Field>
                <FieldLabel>Username</FieldLabel>
                <Input placeholder="Enter username" />
                <FieldDescription>
                  This will be your public display name.
                </FieldDescription>
              </Field>

              <Field>
                <FieldLabel>Email</FieldLabel>
                <Input type="email" placeholder="email@example.com" />
                <FieldError>Please enter a valid email address.</FieldError>
              </Field>

              <Field orientation="horizontal">
                <FieldLabel>Horizontal Field</FieldLabel>
                <Input placeholder="Inline input" />
              </Field>
            </FieldGroup>
          </Section>

          <Section title="Input Group">
            <div className="space-y-4">
              <InputGroup>
                <InputGroupAddon>https://</InputGroupAddon>
                <InputGroupInput placeholder="spiracleaudiobooks.com" />
              </InputGroup>

              <InputGroup>
                <InputGroupAddon align="inline-start">€</InputGroupAddon>
                <InputGroupInput placeholder="14.00" />
                <InputGroupAddon align="inline-end">EUR</InputGroupAddon>
              </InputGroup>

              <InputGroup>
                <InputGroupInput placeholder="Search audiobooks..." />
                <InputGroupAddon align="inline-end">
                  <InputGroupButton>Search</InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </Section>

          <Section title="Select">
            <ComponentRow label="Default">
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fiction">Fiction</SelectItem>
                  <SelectItem value="nonfiction">Non-Fiction</SelectItem>
                  <SelectItem value="poetry">Poetry</SelectItem>
                  <SelectItem value="crime">Crime</SelectItem>
                </SelectContent>
              </Select>
            </ComponentRow>
          </Section>

          <Section title="Dropdown Menu">
            <ComponentRow label="Default">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Browse Collection</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Categories</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>New Releases</DropdownMenuItem>
                  <DropdownMenuItem>Fiction</DropdownMenuItem>
                  <DropdownMenuItem>Non-Fiction</DropdownMenuItem>
                  <DropdownMenuItem>Poetry</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Extras</DropdownMenuLabel>
                  <DropdownMenuItem>Podcasts</DropdownMenuItem>
                  <DropdownMenuItem>Events</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </ComponentRow>
          </Section>

          <Section title="Alert Dialog">
            <ComponentRow label="Default">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">Cancel Subscription</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      You will lose access to your audiobook library and member benefits.
                      This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Keep Membership</AlertDialogCancel>
                    <AlertDialogAction>Cancel Subscription</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </ComponentRow>
          </Section>
        </div>

        <Separator />

        <footer className="text-center py-8 space-y-2">
          <p className="font-display text-3xl">Spiracle</p>
          <p className="font-display text-sm italic text-muted-foreground">
            Audiobooks by and for book lovers
          </p>
        </footer>
      </div>
    </div>
  );
}
