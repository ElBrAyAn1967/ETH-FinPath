"use client";

export async function registerCirclesUser(walletAddress: string) {
  return {
    success: true,
    circlesAddress: walletAddress,
  };
}

export async function getCirclesBalance(address: string): Promise<string> {
  return "0";
}
