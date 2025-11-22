"use client";

import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Clase CSS personalizada
   */
  className?: string;
  /**
   * Invertir dirección de la animación
   * @default false
   */
  reverse?: boolean;
  /**
   * Pausar al hacer hover
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Contenido del marquee
   */
  children: React.ReactNode;
  /**
   * Animación vertical en lugar de horizontal
   * @default false
   */
  vertical?: boolean;
  /**
   * Número de repeticiones del contenido
   * @default 4
   */
  repeat?: number;
}

/**
 * Componente Marquee de Frutero
 * Para crear carruseles infinitos
 */
export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
