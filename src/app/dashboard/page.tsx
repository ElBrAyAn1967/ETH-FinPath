"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { Loader2, Trophy, Coins, Target } from "lucide-react";
import { motion } from "framer-motion";

interface UserProfile {
  username: string;
  displayName: string;
  avatarType: string;
  level: number;
  xp: number;
  circlesBalance: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const { wallet, isLoading: authLoading, isAuthenticated } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated && !authLoading) {
      router.push("/");
      return;
    }

    async function loadProfile() {
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
          setProfile(data.user);
        }
      } catch (error) {
        console.error("Error loading profile:", error);
      } finally {
        setIsLoading(false);
      }
    }

    if (wallet) {
      loadProfile();
    }
  }, [wallet, isAuthenticated, authLoading, router]);

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-[var(--primary)] animate-spin mx-auto mb-4" />
          <p className="text-[var(--muted-foreground)]">Cargando dashboard...</p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[var(--background)] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-[var(--foreground)] mb-2">
            Bienvenido, {profile.displayName}! 👋
          </h1>
          <p className="text-[var(--muted-foreground)]">
            @{profile.username}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            icon={<Trophy className="w-8 h-8" />}
            label="Nivel"
            value={profile.level.toString()}
            color="var(--primary)"
          />
          <StatCard
            icon={<Target className="w-8 h-8" />}
            label="Experiencia"
            value={`${profile.xp} XP`}
            color="var(--accent)"
          />
          <StatCard
            icon={<Coins className="w-8 h-8" />}
            label="Circles Balance"
            value={profile.circlesBalance || "0"}
            color="var(--success)"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-[var(--card)] rounded-3xl p-8 border border-[var(--border)]"
        >
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Tu Aventura Financiera Comienza Aquí
          </h2>
          <p className="text-[var(--muted-foreground)]">
            El dashboard completo con misiones y recompensas estará disponible pronto.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}

function StatCard({ icon, label, value, color }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-[var(--card)] rounded-2xl p-6 border border-[var(--border)] shadow-lg"
    >
      <div className="flex items-center gap-4">
        <div
          className="p-3 rounded-xl"
          style={{ backgroundColor: `${color}20`, color }}
        >
          {icon}
        </div>
        <div>
          <p className="text-sm text-[var(--muted-foreground)]">{label}</p>
          <p className="text-2xl font-bold text-[var(--foreground)]">{value}</p>
        </div>
      </div>
    </motion.div>
  );
}
