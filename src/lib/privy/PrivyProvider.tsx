"use client";

import { PrivyProvider as PrivyProviderBase } from "@privy-io/react-auth";
import { WagmiProvider } from "@privy-io/wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { wagmiConfig } from "@/lib/wagmi/config";
import { ReactNode, useState } from "react";

/**
 * PrivyProvider wrapper para FinQuest
 * Configuración de autenticación Web3 invisible para usuarios
 */
export function PrivyProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <PrivyProviderBase
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ""}
      config={{
        // Apariencia personalizada con colores de FinQuest
        appearance: {
          theme: "light",
          accentColor: "#6e5acf",
          logo: "/logo.svg",
        },
        loginMethods: ["email", "wallet", "google"],
        embeddedWallets: {
          ethereum: {
            createOnLogin: "users-without-wallets",
          },
        },
        // Configuración de legal
        legal: {
          termsAndConditionsUrl: "/terms",
          privacyPolicyUrl: "/privacy",
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig}>{children}</WagmiProvider>
      </QueryClientProvider>
    </PrivyProviderBase>
  );
}
