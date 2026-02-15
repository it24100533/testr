import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-[var(--radius)] border px-2.5 py-0.5 text-xs font-semibold transition-all duration-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary/90 text-primary-foreground shadow-[0_1px_2px_rgba(0,0,0,0.06)] hover:bg-primary/80",
        secondary:
          "border border-[var(--glass-border)] bg-[var(--glass-bg)]/80 text-secondary-foreground backdrop-blur-sm hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive/90 text-destructive-foreground shadow-sm hover:bg-destructive/80",
        outline: "text-foreground border-[var(--glass-border)] bg-transparent",
        blue: "border-transparent bg-blue-500/95 text-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:bg-blue-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
