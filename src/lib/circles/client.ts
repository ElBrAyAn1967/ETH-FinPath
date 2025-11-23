"use client";

import { Sdk } from "@circles-sdk/sdk";
import { CirclesData, CirclesRpc } from "@circles-sdk/data";
import { BrowserProvider } from "ethers";
import { circlesConfig, GNOSIS_RPC_ENDPOINTS } from "./config";

let currentRpcIndex = 0;

// Function to get next RPC endpoint with fallback
function getNextRpcUrl(): string {
  const rpcUrl = GNOSIS_RPC_ENDPOINTS[currentRpcIndex];
  currentRpcIndex = (currentRpcIndex + 1) % GNOSIS_RPC_ENDPOINTS.length;
  console.log(`🔄 Using RPC: ${rpcUrl}`);
  return rpcUrl;
}

export async function getCirclesSdk(): Promise<Sdk | null> {
  if (typeof window === "undefined") return null;

  const ethereum = (window as any).ethereum;
  if (!ethereum) {
    throw new Error("No wallet provider found. Please install MetaMask or similar.");
  }

  const provider = new BrowserProvider(ethereum);
  const signer = await provider.getSigner();

  return new Sdk(signer as any, circlesConfig);
}

export async function getCirclesData(): Promise<CirclesData> {
  // Try current RPC, will rotate to next on failure
  const rpcUrl = circlesConfig.circlesRpcUrl;
  const rpc = new CirclesRpc(rpcUrl);
  return new CirclesData(rpc);
}

// Helper function to retry operations with different RPC endpoints
async function retryWithFallback<T>(
  operation: () => Promise<T>,
  maxRetries: number = 3
): Promise<T> {
  let lastError: any;

  for (let i = 0; i < maxRetries; i++) {
    try {
      return await operation();
    } catch (error: any) {
      lastError = error;
      console.warn(`⚠️ RPC attempt ${i + 1} failed, trying next endpoint...`);

      // Update config to use next RPC
      const nextRpc = getNextRpcUrl();
      (circlesConfig as any).circlesRpcUrl = nextRpc;

      // Wait a bit before retry
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }

  throw lastError;
}

export async function registerCirclesUser(walletAddress: string) {
  return retryWithFallback(async () => {
    const sdk = await getCirclesSdk();
    if (!sdk) throw new Error("SDK not available");

    await sdk.registerHuman();

    return {
      success: true,
      circlesAddress: walletAddress,
    };
  });
}

export async function getCirclesBalance(address: string): Promise<string> {
  return retryWithFallback(async () => {
    const data = await getCirclesData();
    const balance = await data.getTotalBalance(address as `0x${string}`, true);
    return balance.toString();
  }).catch((error) => {
    console.error("Error fetching Circles balance:", error);
    return "0";
  });
}

export async function transferCircles(
  recipientAddress: string,
  amount: string
): Promise<{ success: boolean; txHash?: string }> {
  return retryWithFallback(async () => {
    const sdk = await getCirclesSdk();
    if (!sdk) throw new Error("SDK not available");

    const address = sdk.contractRunner.address;
    if (!address) throw new Error("No signer address available");

    const avatar = await sdk.getAvatar(address);
    const tx = await avatar.transfer(recipientAddress as `0x${string}`, BigInt(amount));

    return {
      success: true,
      txHash: tx.hash,
    };
  });
}

export async function mintPersonalCircles(): Promise<{ success: boolean; amount: string }> {
  return retryWithFallback(async () => {
    const sdk = await getCirclesSdk();
    if (!sdk) throw new Error("SDK not available");

    const address = sdk.contractRunner.address;
    if (!address) throw new Error("No signer address available");

    const avatar = await sdk.getAvatar(address);
    const mintableAmount = await avatar.getMintableAmount();

    if (mintableAmount > BigInt(0)) {
      await avatar.personalMint();
      return {
        success: true,
        amount: mintableAmount.toString(),
      };
    }

    return {
      success: false,
      amount: "0",
    };
  });
}
