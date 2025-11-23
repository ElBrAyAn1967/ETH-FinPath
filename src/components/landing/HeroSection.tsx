"use client";

import { TrendingUp, Coins, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/**
 * Hero Section de FinPath
 * Diseño limpio y profesional enfocado en conversión
 */
export default function HeroSection() {
  return (
    <section className="min-h-[80vh] w-full flex items-center py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <Container maxWidth="7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
              🎓 Educación Financiera Gamificada
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              Domina tus finanzas mientras ganas{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                tokens reales
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-xl">
              Aprende finanzas personales y Web3 completando misiones interactivas.
              Sin complicaciones, sin seed phrases, solo aprendizaje y recompensas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="gradient"
                size="xl"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Comenzar Ahora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500"
              >
                <Coins className="mr-2 h-5 w-5" />
                Ver Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-800">
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  7
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Mundos Financieros
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  100+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Misiones
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  Web3
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Integrado
                </div>
              </div>
            </div>
          </div>

          {/* Imagen/Ilustración */}
          <div className="relative hidden lg:block">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 backdrop-blur-sm border border-gray-200 dark:border-gray-800 p-8 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="text-8xl">🎮</div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg">
                    <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center text-2xl">
                      💰
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-gray-600 dark:text-gray-400">Nivel 1</div>
                      <div className="font-bold text-gray-900 dark:text-white">Mundo de Ahorro</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg">
                    <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center text-2xl">
                      📊
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-gray-600 dark:text-gray-400">Nivel 2</div>
                      <div className="font-bold text-gray-900 dark:text-white">Mundo de Inversión</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg">
                    <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center text-2xl">
                      🪙
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-gray-600 dark:text-gray-400">Nivel 3</div>
                      <div className="font-bold text-gray-900 dark:text-white">Mundo Cripto</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
