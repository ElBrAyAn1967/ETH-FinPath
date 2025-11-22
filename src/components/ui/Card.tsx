"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Card principal - Estilo Frutero con paleta FinQuest
 * Con border-2, rounded-xl y efectos hover
 */
function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "flex flex-col gap-4 rounded-xl border-2 border-[var(--border)] bg-white py-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-[var(--primary-light)]",
        className
      )}
      {...props}
    />
  );
}

/**
 * Card Header con grid layout para acciones
 */
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [&:has(+_.border-b)]:pb-6",
        className
      )}
      {...props}
    />
  );
}

/**
 * Card Title
 */
function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="card-title"
      className={cn(
        "text-2xl font-bold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  );
}

/**
 * Card Description
 */
function CardDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-sm text-[var(--foreground)]/70", className)}
      {...props}
    />
  );
}

/**
 * Card Action - Para botones o acciones en el header
 */
function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

/**
 * Card Content
 */
function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="card-content" className={cn("px-6", className)} {...props} />
  );
}

/**
 * Card Footer
 */
function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center px-6 [&:has(+_.border-t)]:pt-6",
        className
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
