/**
 * Constantes globales de FinQuest
 */

// Mundos disponibles en la aplicación
export const MUNDOS = {
  CAPITALIA: 1,
  PRODUXIA: 2,
  INVERSORA: 3,
  RESILIENCIA: 4,
  NEXUS: 5,
  ABUNDANTIA: 6,
  LEGADO: 7,
} as const;

// Estados de misiones
export const MISSION_STATUS = {
  LOCKED: "locked",
  AVAILABLE: "available",
  IN_PROGRESS: "in_progress",
  COMPLETED: "completed",
} as const;

// Tipos de recompensas
export const REWARD_TYPES = {
  USDC: "usdc",
  NFT: "nft",
  XP: "xp",
  BADGE: "badge",
} as const;

// Niveles de usuario
export const USER_LEVELS = {
  NOVATO: { min: 0, max: 100 },
  APRENDIZ: { min: 101, max: 500 },
  COMPETENTE: { min: 501, max: 1000 },
  EXPERTO: { min: 1001, max: 2500 },
  MAESTRO: { min: 2501, max: 5000 },
  LEYENDA: { min: 5001, max: Infinity },
} as const;

// URLs de navegación
export const NAV_LINKS = {
  HOME: "/",
  MUNDOS: "/mundos",
  PERFIL: "/perfil",
  RECOMPENSAS: "/recompensas",
  COMUNIDAD: "/comunidad",
} as const;

// Smart contract addresses (se actualizarán después del deploy)
export const CONTRACTS = {
  // Base Sepolia testnet
  84532: {
    REWARDS: "",
    NFT_BADGES: "",
    PROGRESS_TRACKER: "",
  },
  // Polygon Amoy testnet
  80002: {
    REWARDS: "",
    NFT_BADGES: "",
    PROGRESS_TRACKER: "",
  },
} as const;
