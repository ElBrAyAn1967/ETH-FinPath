"use client";

import { useState, useEffect } from "react";
import { User, UserProgress } from "@/types";
import { useAuth } from "./useAuth";

/**
 * Hook para gestionar el progreso del usuario
 * TODO: Conectar con backend/smart contracts para datos reales
 */
export function useUserProgress() {
  const { user, isAuthenticated } = useAuth();
  const [userData, setUserData] = useState<User | null>(null);
  const [progress, setProgress] = useState<UserProgress[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated && user) {
      // TODO: Fetch user data from backend/blockchain
      // Por ahora, datos mock para desarrollo
      const mockUser: User = {
        id: user.id,
        address: user.wallet?.address,
        email: user.email?.address,
        displayName: user.email?.address?.split("@")[0] || "Usuario",
        xp: 0,
        level: 1,
        currentMundo: 1,
        completedMissions: [],
        nftBadges: [],
        totalRewardsEarned: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      setUserData(mockUser);
      setIsLoading(false);
    } else {
      setUserData(null);
      setProgress([]);
      setIsLoading(false);
    }
  }, [user, isAuthenticated]);

  const updateProgress = async (worldId: number, missionId: string) => {
    // TODO: Implementar actualización de progreso
    console.log("Updating progress:", { worldId, missionId });
  };

  const claimReward = async (rewardId: string) => {
    // TODO: Implementar claim de recompensas
    console.log("Claiming reward:", rewardId);
  };

  return {
    userData,
    progress,
    isLoading,
    updateProgress,
    claimReward,
  };
}
