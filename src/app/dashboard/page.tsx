"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AirdropBox } from "@/features/rewards/components/AirdropBox";
import { Loader2, Trophy, Coins, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useCircles } from "@/hooks/useCircles";

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
  const [hasClaimedWelcome, setHasClaimedWelcome] = useState(false);
  const [realBalance, setRealBalance] = useState<string | null>(null);
  const { getBalance } = useCircles();

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
          const hasBalance = data.user.circlesBalance && BigInt(data.user.circlesBalance) > 0;
          setHasClaimedWelcome(hasBalance);

          const balance = await getBalance(wallet);
          setRealBalance(balance);
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
  }, [wallet, isAuthenticated, authLoading, router, getBalance]);

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
    <>
      <Navbar />
      <div className="min-h-screen bg-[var(--background)] pt-24 pb-8 px-4">
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
              label="Circles Balance (Blockchain)"
              value={realBalance !== null ? `${(Number(realBalance) / 1e18).toFixed(2)} CRC` : "Cargando..."}
              color="var(--success)"
            />
          </div>

          {!hasClaimedWelcome && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <AirdropBox
                onClaim={async () => {
                  if (!wallet) return;
                  const response = await fetch("/api/rewards/claim-welcome", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ walletAddress: wallet }),
                  });

                  if (response.ok) {
                    setHasClaimedWelcome(true);

                    const balance = await getBalance(wallet);
                    setRealBalance(balance);
                  }
                }}
              />
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: hasClaimedWelcome ? 0.2 : 0.4 }}
            className="bg-[var(--card)] rounded-3xl p-8 border border-[var(--border)]"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[var(--foreground)]">
                Tu Aventura Financiera Comienza Aquí
              </h2>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/finpath")}
                className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all border-2 border-green-400"
              >
                <span className="text-xl">🗺️</span>
                <span>Entrar a FinPath</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  ▶
                </motion.span>
              </motion.button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <WorldCard
                icon="💰"
                title="Mundo de Ahorro"
                isActive={true}
                level={1}
                description="Aprende a ahorrar"
              />
              <WorldCard
                icon="📊"
                title="Mundo de Inversión"
                isActive={true}
                level={2}
                description="Descubre las inversiones"
              />
              <WorldCard
                icon="🪙"
                title="Mundo Cripto"
                isActive={true}
                level={3}
                description="Explora blockchain"
              />
              <WorldCard
                icon="🏦"
                title="Mundo Bancario"
                isActive={false}
                level={4}
                description="Domina las finanzas"
              />
              <WorldCard
                icon="💳"
                title="Mundo de Crédito"
                isActive={false}
                level={5}
                description="Maneja el crédito"
              />
              <WorldCard
                icon="🏠"
                title="Mundo Inmobiliario"
                isActive={false}
                level={6}
                description="Invierte en propiedades"
              />
              <WorldCard
                icon="📈"
                title="Mundo Empresarial"
                isActive={false}
                level={7}
                description="Crea tu negocio"
              />
              <WorldCard
                icon="🌍"
                title="Mundo Global"
                isActive={false}
                level={8}
                description="Economía mundial"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
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

interface WorldCardProps {
  icon: string;
  title: string;
  description: string;
  level: number;
  isActive: boolean;
}

function WorldCard({ icon, title, description, level, isActive }: WorldCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={isActive ? { scale: 1.05, y: -5 } : {}}
      transition={{ duration: 0.2 }}
      className={`
        relative rounded-2xl p-6 border-2 transition-all duration-300
        ${isActive
          ? 'bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 border-[var(--primary)] cursor-pointer hover:shadow-xl hover:shadow-[var(--primary)]/20'
          : 'bg-[var(--card-dark)] border-gray-700 opacity-50 cursor-not-allowed grayscale'
        }
      `}
    >
      {!isActive && (
        <div className="absolute top-3 right-3">
          <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center">
            <span className="text-xs text-white">🔒</span>
          </div>
        </div>
      )}

      <div className="text-center">
        <div className={`text-5xl mb-3 ${!isActive && 'grayscale opacity-40'}`}>
          {icon}
        </div>

        <div className={`
          inline-block px-3 py-1 rounded-full text-xs font-bold mb-2
          ${isActive
            ? 'bg-[var(--primary)] text-white'
            : 'bg-gray-700 text-gray-400'
          }
        `}>
          Nivel {level}
        </div>

        <h3 className={`
          text-lg font-bold mb-2
          ${isActive ? 'text-[var(--foreground)]' : 'text-gray-500'}
        `}>
          {title}
        </h3>

        <p className={`
          text-sm
          ${isActive ? 'text-[var(--muted-foreground)]' : 'text-gray-600'}
        `}>
          {description}
        </p>

        {isActive && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 w-full py-2 bg-[var(--primary)] text-white rounded-lg font-medium hover:bg-[var(--primary)]/90 transition-colors"
          >
            Explorar
          </motion.button>
        )}

        {!isActive && (
          <div className="mt-4 w-full py-2 bg-gray-700 text-gray-500 rounded-lg font-medium text-center">
            Bloqueado
          </div>
        )}
      </div>
    </motion.div>
  );
}
