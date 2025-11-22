/**
 * Utilidades de formato para FinQuest
 */

/**
 * Formatea una dirección de wallet (0x1234...5678)
 */
export function formatAddress(address: string, chars = 4): string {
  if (!address) return "";
  return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`;
}

/**
 * Formatea cantidad de USDC con decimales
 */
export function formatUSDC(amount: number, decimals = 2): string {
  return `$${amount.toFixed(decimals)} USDC`;
}

/**
 * Formatea XP con separador de miles
 */
export function formatXP(xp: number): string {
  return `${xp.toLocaleString("es-AR")} XP`;
}

/**
 * Calcula el nivel basado en XP
 */
export function calculateLevel(xp: number): number {
  // Sistema de niveles: cada nivel requiere más XP
  // Nivel 1: 0-100 XP
  // Nivel 2: 101-300 XP
  // Nivel 3: 301-600 XP
  // Etc.
  if (xp < 100) return 1;
  if (xp < 300) return 2;
  if (xp < 600) return 3;
  if (xp < 1000) return 4;
  if (xp < 1500) return 5;
  if (xp < 2100) return 6;
  if (xp < 2800) return 7;
  if (xp < 3600) return 8;
  if (xp < 4500) return 9;
  return 10 + Math.floor((xp - 4500) / 1000);
}

/**
 * Calcula el XP necesario para el siguiente nivel
 */
export function xpForNextLevel(currentXP: number): number {
  const currentLevel = calculateLevel(currentXP);
  const thresholds = [0, 100, 300, 600, 1000, 1500, 2100, 2800, 3600, 4500];

  if (currentLevel <= 9) {
    return thresholds[currentLevel];
  }

  return 4500 + currentLevel * 1000;
}

/**
 * Calcula el progreso hacia el siguiente nivel (0-100)
 */
export function levelProgress(currentXP: number): number {
  const currentLevel = calculateLevel(currentXP);
  const currentThreshold =
    currentLevel <= 9
      ? [0, 100, 300, 600, 1000, 1500, 2100, 2800, 3600, 4500][
          currentLevel - 1
        ]
      : 4500 + (currentLevel - 10) * 1000;

  const nextThreshold = xpForNextLevel(currentXP);
  const xpInLevel = currentXP - currentThreshold;
  const xpNeeded = nextThreshold - currentThreshold;

  return Math.min(100, Math.floor((xpInLevel / xpNeeded) * 100));
}

/**
 * Formatea fecha relativa (hace 2 días, hace 1 hora, etc.)
 */
export function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMins < 1) return "ahora";
  if (diffMins < 60) return `hace ${diffMins} min`;
  if (diffHours < 24) return `hace ${diffHours} h`;
  if (diffDays < 7) return `hace ${diffDays} días`;
  return date.toLocaleDateString("es-AR");
}
