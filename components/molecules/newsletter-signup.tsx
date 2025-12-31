"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms";
import { Check, CircleNotch } from "@phosphor-icons/react";

export type NewsletterSignupStatus = "idle" | "loading" | "success" | "error";

export interface NewsletterSignupProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "onSubmit"> {
  /** Headline text displayed above the input */
  headline?: string;
  /** Placeholder text for the email input */
  placeholder?: string;
  /** Button text */
  buttonText?: string;
  /** Success message shown after signup */
  successMessage?: string;
  /** Error message shown on failure */
  errorMessage?: string;
  /** Callback when form is submitted with email */
  onEmailSubmit?: (email: string) => Promise<void>;
  /** Visual variant */
  variant?: "default" | "compact";
}

function NewsletterSignup({
  headline = "Sign up to the newsletter",
  placeholder = "Your email",
  buttonText = "Sign up",
  successMessage = "Welcome to Spiracle. Check your inbox.",
  errorMessage = "Something went wrong. Please try again.",
  onEmailSubmit,
  variant = "default",
  className,
  ...props
}: NewsletterSignupProps) {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<NewsletterSignupStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");

    try {
      if (onEmailSubmit) {
        await onEmailSubmit(email);
      } else {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  const isCompact = variant === "compact";

  // Success state
  if (status === "success") {
    return (
      <div
        className={cn(
          "flex items-center gap-3",
          isCompact ? "py-2" : "py-4",
          className
        )}
        {...props}
      >
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-spiracle-forest/10">
          <Check className="size-4 text-spiracle-forest" weight="bold" />
        </span>
        <p className="font-serif text-sm text-foreground italic">
          {successMessage}
        </p>
      </div>
    );
  }

  return (
    <div className={cn(isCompact ? "" : "space-y-4", className)} {...props}>
      {/* Headline */}
      {!isCompact && headline && (
        <p className="font-serif text-lg text-foreground italic">{headline}</p>
      )}

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className={cn(
          isCompact
            ? "flex gap-2"
            : "flex flex-col sm:flex-row gap-3"
        )}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder={placeholder}
          required
          disabled={status === "loading"}
          aria-label="Email address"
          aria-invalid={status === "error"}
          className={cn(
            "flex-1 px-4 py-2.5 text-sm",
            "bg-background border border-border rounded-sm",
            "placeholder:text-muted-foreground/60",
            "focus:outline-none focus:ring-2 focus:ring-spiracle-forest/20 focus:border-spiracle-forest",
            "disabled:opacity-60 disabled:cursor-not-allowed",
            "transition-colors duration-200",
            status === "error" && "border-destructive focus:ring-destructive/20"
          )}
        />

        <Button
          type="submit"
          variant="outline"
          disabled={status === "loading"}
          className={cn(
            "border-foreground/20 hover:bg-secondary/50",
            "disabled:opacity-60",
            isCompact ? "px-4" : "sm:w-auto"
          )}
        >
          {status === "loading" ? (
            <CircleNotch className="size-4 animate-spin" weight="bold" />
          ) : (
            buttonText
          )}
        </Button>
      </form>

      {/* Error message */}
      {status === "error" && (
        <p className="text-xs text-destructive mt-2" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
}

export { NewsletterSignup };
