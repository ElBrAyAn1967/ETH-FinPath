/**
 * Tipos TypeScript para FinQuest
 */

import { MUNDOS, MISSION_STATUS, REWARD_TYPES } from "@/constants";

// Tipos de constantes
export type Mundo = (typeof MUNDOS)[keyof typeof MUNDOS];
export type MissionStatus =
  (typeof MISSION_STATUS)[keyof typeof MISSION_STATUS];
export type RewardType = (typeof REWARD_TYPES)[keyof typeof REWARD_TYPES];

// Usuario
export interface User {
  id: string;
  address?: string;
  email?: string;
  displayName?: string;
  avatar?: string;
  xp: number;
  level: number;
  currentMundo: Mundo;
  completedMissions: string[];
  nftBadges: string[];
  totalRewardsEarned: number; // en USDC
  createdAt: Date;
  updatedAt: Date;
}

// Mundo (World)
export interface World {
  id: Mundo;
  name: string;
  description: string;
  icon: string;
  color: string;
  missions: Mission[];
  requiredXP: number;
  unlocked: boolean;
}

// Misión
export interface Mission {
  id: string;
  worldId: Mundo;
  title: string;
  description: string;
  content: string; // Contenido educativo
  status: MissionStatus;
  xpReward: number;
  usdcReward?: number;
  nftBadge?: string;
  requiredMissions?: string[]; // IDs de misiones prerequisitos
  estimatedTime: number; // en minutos
  difficulty: "easy" | "medium" | "hard";
  type: "quiz" | "reading" | "interactive" | "challenge";
}

// Recompensa
export interface Reward {
  id: string;
  userId: string;
  type: RewardType;
  amount: number;
  missionId: string;
  txHash?: string;
  claimed: boolean;
  claimedAt?: Date;
  createdAt: Date;
}

// NFT Badge
export interface NFTBadge {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  worldId: Mundo;
  rarity: "common" | "rare" | "epic" | "legendary";
  mintedAt?: Date;
  tokenId?: string;
}

// Progreso del usuario
export interface UserProgress {
  userId: string;
  worldId: Mundo;
  completedMissions: number;
  totalMissions: number;
  xpEarned: number;
  lastActivityAt: Date;
}

// Respuesta de Quiz
export interface QuizAnswer {
  questionId: string;
  selectedOption: number;
  isCorrect: boolean;
  timestamp: Date;
}

// Leaderboard Entry
export interface LeaderboardEntry {
  rank: number;
  userId: string;
  displayName: string;
  avatar?: string;
  xp: number;
  level: number;
  nftBadgesCount: number;
}
