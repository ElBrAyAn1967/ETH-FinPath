"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Variantes de botón estilo Frutero adaptadas a FinQuest
 * Con rounded-full, shadow-xs, y hover effects
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:cursor-pointer active:scale-95",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--primary)] text-white shadow-md hover:bg-[var(--primary-dark)] hover:scale-105 hover:shadow-xl focus-visible:ring-[var(--primary)]/50",
        secondary:
          "bg-[var(--secondary)] text-white shadow-md hover:bg-[var(--secondary-dark)] hover:scale-105 hover:shadow-xl focus-visible:ring-[var(--secondary)]/50",
        accent:
          "bg-[var(--accent-pink)] text-white shadow-md hover:bg-[var(--accent-pink-dark)] hover:scale-105 hover:shadow-xl focus-visible:ring-[var(--accent-pink)]/50",
        yellow:
          "bg-[var(--accent-yellow)] text-[var(--foreground)] shadow-md hover:bg-[var(--accent-yellow-dark)] hover:scale-105 hover:shadow-xl focus-visible:ring-[var(--accent-yellow)]/50",
        outline:
          "border-[2.5px] border-[var(--primary)] bg-transparent text-[var(--primary)] shadow-sm hover:bg-[var(--primary)] hover:text-white hover:scale-105",
        ghost:
          "text-[var(--foreground)] hover:bg-[var(--primary-light)]/20 hover:scale-105",
        link: "text-[var(--primary)] underline-offset-4 hover:underline",
        gradient:
          "bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white shadow-lg hover:scale-105 hover:shadow-2xl",
      },
      size: {
        sm: "h-9 px-4 py-2.5 text-sm",
        default: "h-10 px-6 py-3 text-base",
        lg: "h-12 px-8 text-lg",
        xl: "h-14 px-10 text-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

/**
 * Componente Button de FinQuest
 * Basado en Frutero con paleta personalizada
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
