"use client";

import { usePrivy, useWallets } from "@privy-io/react-auth";
import { useEffect, useState } from "react";

/**
 * Hook personalizado para autenticación con Privy
 * Abstrae la lógica de autenticación para facilitar el uso
 */
export function useAuth() {
  const {
    ready,
    authenticated,
    user,
    login,
    logout,
    linkEmail,
    linkWallet,
    unlinkEmail,
    unlinkWallet,
  } = usePrivy();

  const { wallets } = useWallets();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (ready) {
      setIsLoading(false);
    }
  }, [ready]);

  // Wallet embebida creada automáticamente por Privy
  const embeddedWallet = wallets.find(
    (wallet) => wallet.walletClientType === "privy"
  );

  return {
    // Estado
    isLoading,
    isAuthenticated: authenticated,
    user,
    embeddedWallet,
    wallets,

    // Acciones de autenticación
    login,
    logout,

    // Métodos de vinculación
    linkEmail,
    linkWallet,
    unlinkEmail,
    unlinkWallet,

    // Información del usuario
    email: user?.email?.address,
    wallet: user?.wallet?.address || embeddedWallet?.address,
  };
}
