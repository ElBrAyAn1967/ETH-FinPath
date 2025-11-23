"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Coins, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface AirdropBoxProps {
  onClaim: () => Promise<void>;
}

export function AirdropBox({ onClaim }: AirdropBoxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClaiming, setIsClaiming] = useState(false);
  const [claimed, setClaimed] = useState(false);

  const handleClaim = async () => {
    if (claimed) return;

    setIsClaiming(true);
    try {
      await onClaim();
      setIsOpen(true);
      setClaimed(true);
    } catch (error) {
      console.error("Claim error:", error);
    } finally {
      setIsClaiming(false);
    }
  };

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-3xl p-8 border-2 border-[var(--primary)] shadow-2xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  Bono de Bienvenida
                  <Sparkles className="w-5 h-5 text-yellow-300" />
                </h2>
                <p className="text-white/80 text-sm">
                  ¡Tu regalo de inicio está aquí!
                </p>
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!claimed ? (
              <motion.div
                key="claim-box"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-center"
              >
                <motion.div
                  animate={{
                    rotate: [0, -5, 5, -5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                  className="inline-block mb-6"
                >
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border-4 border-white/30 shadow-xl">
                    <Gift className="w-16 h-16 text-white" />
                  </div>
                </motion.div>

                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-4">
                    <Coins className="w-6 h-6 text-yellow-300" />
                    <span className="text-3xl font-bold text-white">5 USDC</span>
                  </div>
                  <p className="text-white/90 text-lg">
                    en Circles Protocol
                  </p>
                </div>

                <Button
                  onClick={handleClaim}
                  disabled={isClaiming}
                  size="lg"
                  className="bg-white text-[var(--primary)] hover:bg-white/90 font-bold text-lg px-8 py-6 shadow-xl"
                >
                  {isClaiming ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[var(--primary)] border-t-transparent rounded-full animate-spin mr-2" />
                      Reclamando...
                    </>
                  ) : (
                    <>
                      <Gift className="mr-2 h-5 w-5" />
                      Reclamar Bono
                    </>
                  )}
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="claimed"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  className="inline-block mb-6"
                >
                  <div className="w-32 h-32 bg-green-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-green-400">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
                      }}
                    >
                      <Sparkles className="w-16 h-16 text-yellow-300" />
                    </motion.div>
                  </div>
                </motion.div>

                <h3 className="text-3xl font-bold text-white mb-2">
                  ¡Felicidades! 🎉
                </h3>
                <p className="text-white/90 text-lg mb-4">
                  Has reclamado tu bono de bienvenida
                </p>
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                  <Coins className="w-6 h-6 text-yellow-300" />
                  <span className="text-2xl font-bold text-white">+5 USDC</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {claimed && (
          <>
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: [1, 1, 0],
                  x: Math.random() * 400 - 200,
                  y: -Math.random() * 300 - 100,
                  scale: [0, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.05,
                  ease: "easeOut",
                }}
                className="absolute top-1/2 left-1/2 pointer-events-none"
                style={{
                  fontSize: Math.random() * 20 + 20,
                }}
              >
                {["🎉", "✨", "🎊", "💰", "🪙"][Math.floor(Math.random() * 5)]}
              </motion.div>
            ))}
          </>
        )}
      </motion.div>
    </div>
  );
}
