"use client"

import * as React from "react"
import { Switch as SwitchPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        // Base styles - pill shape
        "inline-flex h-6 w-11 shrink-0 items-center rounded-full",
        "transition-colors duration-200 ease-out",
        // Touch target
        "cursor-pointer",
        // Default (off) state - with visible border in dark mode
        "bg-spiracle-sand dark:bg-zinc-700 border-2 border-transparent dark:border-zinc-600",
        // Checked (on) state - Spiracle forest green, brighter in dark
        "data-[state=checked]:bg-spiracle-forest data-[state=checked]:dark:bg-emerald-600 data-[state=checked]:border-transparent",
        // Focus state
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spiracle-terracotta/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        // Disabled state
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          // Thumb styles - white/cream for visibility
          "pointer-events-none block size-5 rounded-full bg-spiracle-cream shadow-md",
          "ring-0 transition-transform duration-200 ease-out",
          // Position
          "translate-x-0 data-[state=checked]:translate-x-5",
          // Dark mode thumb - pure white for contrast
          "dark:bg-white dark:shadow-lg"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
