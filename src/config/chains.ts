import { baseSepolia, base, polygon, polygonAmoy } from "wagmi/chains";

/**
 * Configuración de chains para FinQuest
 * Sponsors: Base, Polygon
 */

// Chains para producción
export const productionChains = [base, polygon];

// Chains para desarrollo/testnet
export const testnetChains = [baseSepolia, polygonAmoy];

// Chain por defecto (Base Sepolia para desarrollo)
export const defaultChain =
  process.env.NODE_ENV === "production" ? base : baseSepolia;

// Todas las chains disponibles
export const supportedChains =
  process.env.NODE_ENV === "production" ? productionChains : testnetChains;

// Chain IDs
export const CHAIN_IDS = {
  BASE: base.id,
  BASE_SEPOLIA: baseSepolia.id,
  POLYGON: polygon.id,
  POLYGON_AMOY: polygonAmoy.id,
} as const;

// RPC URLs
export const RPC_URLS = {
  [CHAIN_IDS.BASE]: "https://mainnet.base.org",
  [CHAIN_IDS.BASE_SEPOLIA]: "https://sepolia.base.org",
  [CHAIN_IDS.POLYGON]: "https://polygon-rpc.com",
  [CHAIN_IDS.POLYGON_AMOY]: "https://rpc-amoy.polygon.technology",
} as const;

// Block Explorers
export const BLOCK_EXPLORERS = {
  [CHAIN_IDS.BASE]: "https://basescan.org",
  [CHAIN_IDS.BASE_SEPOLIA]: "https://sepolia.basescan.org",
  [CHAIN_IDS.POLYGON]: "https://polygonscan.com",
  [CHAIN_IDS.POLYGON_AMOY]: "https://amoy.polygonscan.com",
} as const;
