"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { motion } from "framer-motion";
import { ArrowLeft, Star, Lock, CheckCircle } from "lucide-react";

interface WorldNode {
  id: number;
  name: string;
  icon: string;
  isActive: boolean;
  isCompleted: boolean;
  position: { x: number; y: number };
  connections: number[];
}

const WORLD_MAP: WorldNode[] = [
  {
    id: 1,
    name: "Mundo de Ahorro",
    icon: "💰",
    isActive: true,
    isCompleted: false,
    position: { x: 15, y: 75 },
    connections: [2],
  },
  {
    id: 2,
    name: "Mundo de Inversión",
    icon: "📊",
    isActive: true,
    isCompleted: false,
    position: { x: 30, y: 60 },
    connections: [3],
  },
  {
    id: 3,
    name: "Mundo Cripto",
    icon: "🪙",
    isActive: true,
    isCompleted: false,
    position: { x: 50, y: 55 },
    connections: [4],
  },
  {
    id: 4,
    name: "Mundo Bancario",
    icon: "🏦",
    isActive: false,
    isCompleted: false,
    position: { x: 70, y: 60 },
    connections: [5],
  },
  {
    id: 5,
    name: "Mundo de Crédito",
    icon: "💳",
    isActive: false,
    isCompleted: false,
    position: { x: 75, y: 40 },
    connections: [6],
  },
  {
    id: 6,
    name: "Mundo Inmobiliario",
    icon: "🏠",
    isActive: false,
    isCompleted: false,
    position: { x: 60, y: 25 },
    connections: [7],
  },
  {
    id: 7,
    name: "Mundo Empresarial",
    icon: "📈",
    isActive: false,
    isCompleted: false,
    position: { x: 40, y: 30 },
    connections: [8],
  },
  {
    id: 8,
    name: "Mundo Global",
    icon: "🌍",
    isActive: false,
    isCompleted: false,
    position: { x: 20, y: 20 },
    connections: [],
  },
];

export default function FinPathPage() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();
  const [selectedWorld, setSelectedWorld] = useState<WorldNode | null>(null);
  const [playerPosition, setPlayerPosition] = useState({ x: 15, y: 75 });

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      router.push("/");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400">
        <div className="text-white text-2xl">Cargando mapa...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, #5c94fc 0%, #6ba4fc 50%, #7cb4fc 100%)'
    }}>
      {/* Clouds background - Super Mario World style */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: -200 }}
            animate={{ x: "110vw" }}
            transition={{
              duration: 30 + i * 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute"
            style={{
              top: `${8 + i * 8}%`,
              filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.1))'
            }}
          >
            <div className="text-7xl" style={{
              textShadow: '4px 4px 0px rgba(255,255,255,0.6), -2px -2px 0px rgba(0,100,200,0.3)'
            }}>☁️</div>
          </motion.div>
        ))}
      </div>

      {/* Hills/Mountains background - SMW style */}
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none">
        <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1200 250">
          {/* Far hills */}
          <path d="M0,150 Q150,100 300,150 T600,150 T900,150 T1200,150 L1200,250 L0,250 Z"
                fill="#4a9d5f" opacity="0.3"/>
          {/* Mid hills */}
          <path d="M0,180 Q200,130 400,180 T800,180 T1200,180 L1200,250 L0,250 Z"
                fill="#5cb574" opacity="0.5"/>
          {/* Close hills */}
          <path d="M0,200 Q250,160 500,200 T1000,200 T1500,200 L1500,250 L0,250 Z"
                fill="#6dcc8b"/>
        </svg>
      </div>

      {/* Header */}
      <div className="relative z-20 p-6">
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/dashboard")}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all"
          style={{
            background: 'linear-gradient(180deg, #fff 0%, #f0f0f0 100%)',
            boxShadow: '0 4px 0 #999, 0 6px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.8)',
            border: '3px solid #e0e0e0',
            color: '#333',
            textShadow: '1px 1px 0 rgba(255,255,255,0.5)'
          }}
        >
          <ArrowLeft className="w-5 h-5" />
          Volver al Dashboard
        </motion.button>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mt-4"
        >
          <h1 className="text-6xl font-black mb-2"
              style={{
                color: '#fff',
                textShadow: `
                  4px 4px 0px #ff6b35,
                  6px 6px 0px #ff4500,
                  2px 2px 8px rgba(0,0,0,0.5)
                `,
                letterSpacing: '2px'
              }}>
            🗺️ FinPath
          </h1>
          <p className="text-2xl font-bold"
             style={{
               color: '#fff9d4',
               textShadow: '2px 2px 0px rgba(0,0,0,0.5), 0 0 10px rgba(255,200,0,0.5)'
             }}>
            Tu Ruta Financiera
          </p>
        </motion.div>
      </div>

      {/* Map Container - SMW Style */}
      <div className="relative z-10 h-[600px] max-w-6xl mx-auto mt-8 rounded-3xl overflow-hidden"
           style={{
             background: 'linear-gradient(135deg, #7ec850 0%, #6db848 50%, #5ca840 100%)',
             boxShadow: '0 8px 0 #4a8838, 0 12px 20px rgba(0,0,0,0.3), inset 0 -4px 0 rgba(0,0,0,0.2)',
             border: '6px solid #f0f0d8',
             borderRadius: '24px'
           }}>
        {/* Pixel-style pattern overlay */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 7px, rgba(255,255,255,0.03) 7px, rgba(255,255,255,0.03) 8px),
            repeating-linear-gradient(90deg, transparent, transparent 7px, rgba(255,255,255,0.03) 7px, rgba(255,255,255,0.03) 8px)
          `,
          backgroundSize: '8px 8px'
        }} />

        {/* Decorative bushes */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`bush-${i}`}
            className="absolute text-4xl"
            style={{
              left: `${15 + i * 15}%`,
              bottom: '10px',
              filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.3))',
              zIndex: 1
            }}
          >
            🌳
          </div>
        ))}

        {/* Paths between worlds */}
        <svg className="absolute inset-0 w-full h-full">
          {WORLD_MAP.map((world) =>
            world.connections.map((connectedId) => {
              const connectedWorld = WORLD_MAP.find((w) => w.id === connectedId);
              if (!connectedWorld) return null;

              const startX = (world.position.x / 100) * 100;
              const startY = (world.position.y / 100) * 100;
              const endX = (connectedWorld.position.x / 100) * 100;
              const endY = (connectedWorld.position.y / 100) * 100;

              const isPathActive = world.isActive && connectedWorld.isActive;

              return (
                <g key={`${world.id}-${connectedId}`}>
                  {/* Path shadow */}
                  <motion.path
                    d={`M ${startX}% ${startY + 0.5}% Q ${(startX + endX) / 2}% ${
                      (startY + endY) / 2 - 4.5
                    }% ${endX}% ${endY + 0.5}%`}
                    stroke="rgba(0,0,0,0.3)"
                    strokeWidth="10"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: world.id * 0.1 }}
                  />
                  {/* Main path */}
                  <motion.path
                    d={`M ${startX}% ${startY}% Q ${(startX + endX) / 2}% ${
                      (startY + endY) / 2 - 5
                    }% ${endX}% ${endY}%`}
                    stroke={isPathActive ? "#f4e5a0" : "#8b7355"}
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={isPathActive ? "0" : "12,8"}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: world.id * 0.1 }}
                  />
                  {/* Path highlight */}
                  <motion.path
                    d={`M ${startX}% ${startY}% Q ${(startX + endX) / 2}% ${
                      (startY + endY) / 2 - 5
                    }% ${endX}% ${endY}%`}
                    stroke={isPathActive ? "#fff9d4" : "#a08060"}
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={isPathActive ? "0" : "12,8"}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: world.id * 0.1 }}
                  />
                </g>
              );
            })
          )}
        </svg>

        {/* World nodes */}
        {WORLD_MAP.map((world, index) => (
          <motion.div
            key={world.id}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.1, type: "spring" }}
            className="absolute"
            style={{
              left: `${world.position.x}%`,
              top: `${world.position.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <motion.div
              whileHover={world.isActive ? { scale: 1.15, y: -10 } : {}}
              whileTap={world.isActive ? { scale: 0.95 } : {}}
              onClick={() => world.isActive && setSelectedWorld(world)}
              className="relative w-28 h-28 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300"
              style={{
                background: world.isActive
                  ? 'radial-gradient(circle at 30% 30%, #ffd900, #ffb700 40%, #ff8800 70%, #cc6600)'
                  : 'radial-gradient(circle at 30% 30%, #888, #666 40%, #444 70%, #222)',
                boxShadow: world.isActive
                  ? '0 6px 0 #aa5500, 0 8px 12px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -2px 0 rgba(0,0,0,0.3)'
                  : '0 4px 0 #111, 0 6px 8px rgba(0,0,0,0.5), inset 0 2px 0 rgba(255,255,255,0.2)',
                border: world.isActive ? '4px solid #fff4b8' : '4px solid #555',
                opacity: world.isActive ? 1 : 0.6,
                filter: world.isActive ? 'brightness(1.1) contrast(1.2)' : 'grayscale(0.5)'
              }}
            >
              {/* Pixel-style shine effect */}
              {world.isActive && (
                <div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-white opacity-60 blur-sm" />
              )}

              {/* Pulse animation for active worlds */}
              {world.isActive && (
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, #ffed4e, transparent 70%)',
                    filter: 'blur(4px)'
                  }}
                />
              )}

              {/* World icon with pixelated glow */}
              <span
                className="text-5xl relative z-10"
                style={{
                  filter: world.isActive
                    ? 'drop-shadow(0 0 8px rgba(255,200,0,0.8)) drop-shadow(2px 2px 0px rgba(0,0,0,0.5))'
                    : 'drop-shadow(2px 2px 0px rgba(0,0,0,0.7))',
                  transform: 'translateY(-2px)'
                }}
              >
                {world.icon}
              </span>

              {/* Lock icon for inactive worlds */}
              {!world.isActive && (
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                  <Lock className="w-4 h-4 text-white" />
                </div>
              )}

              {/* Completed checkmark */}
              {world.isCompleted && (
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              )}

              {/* Stars for completed */}
              {world.isCompleted && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-6 left-1/2 -translate-x-1/2"
                >
                  <Star className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                </motion.div>
              )}
            </motion.div>

            {/* World name label - SMW Style */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none"
            >
              <div
                className="px-4 py-1.5 rounded-lg font-bold text-sm"
                style={{
                  background: 'linear-gradient(180deg, #fff 0%, #f8f8f8 100%)',
                  boxShadow: '0 3px 0 #888, 0 4px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.9)',
                  border: '2px solid #ddd',
                  color: world.isActive ? '#ff6b35' : '#666',
                  textShadow: '1px 1px 0 rgba(255,255,255,0.8)'
                }}
              >
                {world.name}
              </div>
            </motion.div>
          </motion.div>
        ))}

        {/* Player character - SMW Style */}
        <motion.div
          animate={{
            left: `${playerPosition.x}%`,
            top: `${playerPosition.y}%`,
          }}
          transition={{ type: "spring", damping: 20 }}
          className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
        >
          {/* Character shadow */}
          <motion.div
            animate={{ scale: [1, 0.8, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-4 rounded-full bg-black/30 blur-sm"
          />

          {/* Character with bounce */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
            style={{
              filter: 'drop-shadow(0 0 12px rgba(255,200,0,0.6)) drop-shadow(3px 3px 0px rgba(0,0,0,0.4))'
            }}
          >
            <div className="text-6xl relative"
                 style={{
                   transform: 'rotate(-15deg)',
                   transformOrigin: 'center',
                   filter: 'brightness(1.2) contrast(1.1)'
                 }}>
              🚀
            </div>

            {/* Speed lines effect */}
            <motion.div
              animate={{ opacity: [0, 0.6, 0], x: [-20, -40, -60] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="absolute top-1/2 right-full -translate-y-1/2"
              style={{
                width: '30px',
                height: '3px',
                background: 'linear-gradient(90deg, transparent, rgba(255,200,0,0.8), transparent)',
                borderRadius: '2px'
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* World Details Modal */}
      {selectedWorld && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedWorld(null)}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
          >
            <div className="text-center">
              <div className="text-8xl mb-4">{selectedWorld.icon}</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {selectedWorld.name}
              </h2>
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-bold">
                  Nivel {selectedWorld.id}
                </div>
              </div>

              <div className="space-y-4 text-left mb-6">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-bold text-gray-700 mb-2">📚 Misiones</h3>
                  <p className="text-sm text-gray-600">
                    Completa desafíos educativos y gana recompensas
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-bold text-gray-700 mb-2">🎯 Progreso</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-0" />
                  </div>
                  <p className="text-xs text-gray-600 mt-1">0% completado</p>
                </div>

                <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border-2 border-yellow-200">
                  <h3 className="font-bold text-orange-700 mb-2">
                    🪙 Recompensa
                  </h3>
                  <p className="text-sm text-orange-600">
                    Gana Circles tokens completando este mundo
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedWorld(null)}
                  className="flex-1 py-4 rounded-xl font-bold transition-all"
                  style={{
                    background: 'linear-gradient(180deg, #e8e8e8 0%, #c8c8c8 100%)',
                    boxShadow: '0 4px 0 #888, 0 6px 10px rgba(0,0,0,0.2), inset 0 2px 0 rgba(255,255,255,0.5)',
                    border: '3px solid #b8b8b8',
                    color: '#444',
                    textShadow: '1px 1px 0 rgba(255,255,255,0.8)'
                  }}
                >
                  Cerrar
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 py-4 rounded-xl font-bold transition-all"
                  style={{
                    background: 'linear-gradient(180deg, #ff6b35 0%, #ff4500 50%, #dc3500 100%)',
                    boxShadow: '0 5px 0 #a82800, 0 7px 12px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.3)',
                    border: '3px solid #ffb89a',
                    color: '#fff',
                    textShadow: '2px 2px 0 rgba(0,0,0,0.4)'
                  }}
                >
                  ¡Comenzar! ▶
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Legend - SMW Style */}
      <div className="relative z-20 max-w-6xl mx-auto mt-6 px-6">
        <div
          className="rounded-2xl p-6"
          style={{
            background: 'linear-gradient(180deg, #fff 0%, #f5f5e8 100%)',
            boxShadow: '0 6px 0 #b8b8a0, 0 8px 16px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.9), inset 0 -2px 0 rgba(0,0,0,0.1)',
            border: '4px solid #e8e8d0'
          }}
        >
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-full"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, #ffd900, #ffb700 40%, #ff8800 70%, #cc6600)',
                  boxShadow: '0 3px 0 #aa5500, 0 4px 6px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5)',
                  border: '2px solid #fff4b8'
                }}
              />
              <span
                className="text-sm font-bold"
                style={{
                  color: '#333',
                  textShadow: '1px 1px 0 rgba(255,255,255,0.8)'
                }}
              >
                Desbloqueado
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-full opacity-60"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, #888, #666 40%, #444 70%, #222)',
                  boxShadow: '0 2px 0 #111, 0 3px 4px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
                  border: '2px solid #555'
                }}
              />
              <span
                className="text-sm font-bold"
                style={{
                  color: '#666',
                  textShadow: '1px 1px 0 rgba(255,255,255,0.8)'
                }}
              >
                Bloqueado
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, #5cfc5c, #4cdc4c 40%, #3cbc3c 70%, #2c9c2c)',
                  boxShadow: '0 3px 0 #1c7c1c, 0 4px 6px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.5)',
                  border: '2px solid #b8ffb8'
                }}
              >
                <CheckCircle className="w-4 h-4 text-white" style={{ filter: 'drop-shadow(1px 1px 0px rgba(0,0,0,0.3))' }} />
              </div>
              <span
                className="text-sm font-bold"
                style={{
                  color: '#2c9c2c',
                  textShadow: '1px 1px 0 rgba(255,255,255,0.8)'
                }}
              >
                Completado
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="text-2xl"
                style={{
                  filter: 'drop-shadow(0 0 6px rgba(255,200,0,0.6)) drop-shadow(2px 2px 0px rgba(0,0,0,0.4))',
                  transform: 'rotate(-15deg)',
                  display: 'inline-block'
                }}
              >
                🚀
              </span>
              <span
                className="text-sm font-bold"
                style={{
                  color: '#ff6b35',
                  textShadow: '1px 1px 0 rgba(255,255,255,0.8)'
                }}
              >
                Tu posición
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
