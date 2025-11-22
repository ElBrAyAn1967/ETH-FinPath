import { http } from "wagmi";
import { createConfig } from "@privy-io/wagmi";
import { supportedChains } from "@/config/chains";

/**
 * Configuración de Wagmi para FinQuest
 * Soporta Base Sepolia (testnet) y Polygon Amoy (testnet) para desarrollo
 * Producción: Base y Polygon mainnet
 */
export const wagmiConfig = createConfig({
  chains: supportedChains as any,
  transports: {
    // Base Sepolia
    [84532]: http("https://sepolia.base.org"),
    // Polygon Amoy
    [80002]: http("https://rpc-amoy.polygon.technology"),
    // Base Mainnet (producción)
    [8453]: http("https://mainnet.base.org"),
    // Polygon Mainnet (producción)
    [137]: http("https://polygon-rpc.com"),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof wagmiConfig;
  }
}
