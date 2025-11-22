"use client";

import { ReactNode } from "react";
import { PrivyProvider } from "@/lib/privy/PrivyProvider";

/**
 * Client Providers wrapper
 * Agrupa todos los providers que necesitan correr en el cliente
 */
export function ClientProviders({ children }: { children: ReactNode }) {
  return <PrivyProvider>{children}</PrivyProvider>;
}
