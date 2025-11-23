"use client";

import { Sdk } from "@circles-sdk/sdk";
import { CirclesData, CirclesRpc } from "@circles-sdk/data";
import { BrowserProvider } from "ethers";
import { circlesConfig } from "./config";

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
  const rpc = new CirclesRpc(circlesConfig.circlesRpcUrl);
  return new CirclesData(rpc);
}

export async function registerCirclesUser(walletAddress: string) {
  try {
    const sdk = await getCirclesSdk();
    if (!sdk) throw new Error("SDK not available");

    await sdk.registerHuman();

    return {
      success: true,
      circlesAddress: walletAddress,
    };
  } catch (error) {
    console.error("Error registering Circles user:", error);
    throw error;
  }
}

export async function getCirclesBalance(address: string): Promise<string> {
  try {
    const data = await getCirclesData();
    const balance = await data.getTotalBalance(address as `0x${string}`, true);

    return balance.toString();
  } catch (error) {
    console.error("Error fetching Circles balance:", error);
    return "0";
  }
}

export async function transferCircles(
  recipientAddress: string,
  amount: string
): Promise<{ success: boolean; txHash?: string }> {
  try {
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
  } catch (error) {
    console.error("Error transferring Circles:", error);
    throw error;
  }
}

export async function mintPersonalCircles(): Promise<{ success: boolean; amount: string }> {
  try {
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
  } catch (error) {
    console.error("Error minting Circles:", error);
    throw error;
  }
}
