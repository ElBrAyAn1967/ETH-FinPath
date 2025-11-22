import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases de Tailwind de forma óptima
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
