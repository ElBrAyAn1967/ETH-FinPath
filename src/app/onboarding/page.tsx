"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { ProfileSetupForm, ProfileData } from "@/features/profile/components/ProfileSetupForm";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function OnboardingPage() {
  const router = useRouter();
  const { wallet, isLoading: authLoading } = useAuth();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    async function checkUserStatus() {
      if (authLoading || !wallet) return;

      try {
        const response = await fetch("/api/auth/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ walletAddress: wallet }),
        });

        const data = await response.json();

        if (data.exists && data.user?.onboardingCompleted) {
          router.push("/dashboard");
        } else {
          setIsChecking(false);
        }
      } catch (error) {
        console.error("Error checking user status:", error);
        setIsChecking(false);
      }
    }

    checkUserStatus();
  }, [wallet, authLoading, router]);

  const handleProfileComplete = async (profile: ProfileData) => {
    router.push("/dashboard");
  };

  if (authLoading || !wallet) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-[var(--primary)] animate-spin mx-auto mb-4" />
          <p className="text-[var(--muted-foreground)]">
            Conectando con tu wallet...
          </p>
        </div>
      </div>
    );
  }

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-[var(--primary)] animate-spin mx-auto mb-4" />
          <p className="text-[var(--muted-foreground)]">
            Verificando tu cuenta...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[var(--background)] via-[var(--primary)]/5 to-[var(--background)] pt-24 pb-12 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ProfileSetupForm
            walletAddress={wallet}
            onComplete={handleProfileComplete}
          />
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
