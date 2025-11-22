"use client";

import { Button } from "@/components/ui/Button";
import { useAuth } from "@/hooks/useAuth";
import { LogIn, LogOut, Wallet } from "lucide-react";

/**
 * Componente de botón de login/logout
 * Maneja el estado de autenticación con Privy
 */
export function LoginButton() {
  const { isLoading, isAuthenticated, login, logout, wallet } = useAuth();

  if (isLoading) {
    return (
      <Button variant="outline" size="default" disabled>
        Cargando...
      </Button>
    );
  }

  if (isAuthenticated) {
    return (
      <div className="flex items-center gap-2">
        {wallet && (
          <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-full bg-[var(--primary-light)]/20 text-sm">
            <Wallet className="w-4 h-4 text-[var(--primary)]" />
            <span className="text-[var(--foreground)]">
              {wallet.slice(0, 6)}...{wallet.slice(-4)}
            </span>
          </div>
        )}
        <Button variant="outline" size="default" onClick={logout}>
          <LogOut className="mr-2 h-4 w-4" />
          Cerrar Sesión
        </Button>
      </div>
    );
  }

  return (
    <Button variant="gradient" size="default" onClick={login}>
      <LogIn className="mr-2 h-4 w-4" />
      Iniciar Sesión
    </Button>
  );
}
