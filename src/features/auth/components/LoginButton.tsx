"use client";

import { Button } from "@/components/ui/Button";
import { useAuth } from "@/hooks/useAuth";
import { LogIn, LogOut, Wallet } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function LoginButton() {
  const router = useRouter();
  const { isLoading, isAuthenticated, login, logout, wallet } = useAuth();

  useEffect(() => {
    if (isAuthenticated && wallet) {
      checkAndRedirect();
    }
  }, [isAuthenticated, wallet]);

  const checkAndRedirect = async () => {
    if (!wallet) return;

    try {
      const response = await fetch("/api/auth/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ walletAddress: wallet }),
      });

      const data = await response.json();

      if (!data.exists || !data.user?.onboardingCompleted) {
        router.push("/onboarding");
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Auth check error:", error);
    }
  };

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
