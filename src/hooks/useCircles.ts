"use client";

import { useState, useCallback } from "react";
import {
  getCirclesSdk,
  getCirclesData,
  registerCirclesUser,
  getCirclesBalance,
  transferCircles,
  mintPersonalCircles,
} from "@/lib/circles/client";

export function useCircles() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = useCallback(async (walletAddress: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await registerCirclesUser(walletAddress);
      return result;
    } catch (err: any) {
      setError(err.message || "Failed to register in Circles Protocol");
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getBalance = useCallback(async (address: string) => {
    try {
      const balance = await getCirclesBalance(address);
      return balance;
    } catch (err: any) {
      console.error("Error getting balance:", err);
      return "0";
    }
  }, []);

  const transfer = useCallback(
    async (recipientAddress: string, amount: string) => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await transferCircles(recipientAddress, amount);
        return result;
      } catch (err: any) {
        setError(err.message || "Failed to transfer Circles");
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const mint = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await mintPersonalCircles();
      return result;
    } catch (err: any) {
      setError(err.message || "Failed to mint Circles");
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    error,
    register,
    getBalance,
    transfer,
    mint,
  };
}
