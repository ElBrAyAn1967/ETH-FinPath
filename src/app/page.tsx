"use client";

import HeroSection from "@/components/landing/HeroSection";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Navbar, Footer } from "@/components/layout";
import { Coins, TrendingUp, Shield, Sparkles, Zap, Target, BookOpen, Users } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <section id="features" className="py-20 bg-white dark:bg-gray-950">
          <Container maxWidth="7xl">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                ✨ Características
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                ¿Por qué FinPath?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Aprende finanzas de forma divertida y gana recompensas reales mientras lo haces
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Feature 1 */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-500 dark:hover:border-blue-400">
                <CardHeader>
                  <div className="mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                    <Target className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">Gamificación Real</CardTitle>
                  <CardDescription className="text-base">
                    Completa misiones, sube de nivel y desbloquea nuevos mundos financieros
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 2 */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-green-500 dark:hover:border-green-400">
                <CardHeader>
                  <div className="mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                    <Coins className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">Recompensas Reales</CardTitle>
                  <CardDescription className="text-base">
                    Gana tokens mientras aprendes a manejar tu dinero de forma inteligente
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 3 */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-500 dark:hover:border-purple-400">
                <CardHeader>
                  <div className="mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <Shield className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">Web3 Simplificado</CardTitle>
                  <CardDescription className="text-base">
                    Usa Web3 sin darte cuenta. Sin seed phrases, sin complicaciones
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 4 */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-500 dark:hover:border-orange-400">
                <CardHeader>
                  <div className="mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                    <Zap className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">IA Personal</CardTitle>
                  <CardDescription className="text-base">
                    Tu asistente financiero inteligente que responde todas tus dudas
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 5 */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-indigo-500 dark:hover:border-indigo-400">
                <CardHeader>
                  <div className="mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-lg">
                    <BookOpen className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">7 Mundos Financieros</CardTitle>
                  <CardDescription className="text-base">
                    Progresión clara que te lleva de principiante a experto
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Feature 6 */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-pink-500 dark:hover:border-pink-400">
                <CardHeader>
                  <div className="mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center shadow-lg">
                    <Users className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">Comunidad Activa</CardTitle>
                  <CardDescription className="text-base">
                    Compite con amigos, comparte logros y aprende en comunidad
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </Container>
        </section>

        {/* Mundos Section */}
        <section id="mundos" className="py-20 bg-gray-50 dark:bg-gray-900">
          <Container maxWidth="7xl">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-4">
                🗺️ Tu Ruta de Aprendizaje
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                7 Mundos Financieros
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Cada mundo te enseña un aspecto clave de las finanzas personales
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { emoji: "💰", name: "Mundo de Ahorro", level: 1 },
                { emoji: "📊", name: "Mundo de Inversión", level: 2 },
                { emoji: "🪙", name: "Mundo Cripto", level: 3 },
                { emoji: "🏦", name: "Mundo Bancario", level: 4 },
                { emoji: "💳", name: "Mundo de Crédito", level: 5 },
                { emoji: "🏠", name: "Mundo Inmobiliario", level: 6 },
                { emoji: "📈", name: "Mundo Empresarial", level: 7 },
              ].map((world, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-lg"
                >
                  <div className="text-6xl mb-4">{world.emoji}</div>
                  <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    Nivel {world.level}
                  </div>
                  <div className="font-bold text-gray-900 dark:text-white">
                    {world.name}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="py-20 bg-white dark:bg-gray-950">
          <Container maxWidth="7xl">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium mb-4">
                🚀 Cómo Funciona
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                3 Pasos Para Empezar
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Crea tu Perfil
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Regístrate en segundos con tu wallet o email
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Completa Misiones
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Aprende finanzas jugando y ganando XP
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Gana Recompensas
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Recibe tokens reales por tu progreso
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
          <Container maxWidth="5xl">
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Listo para transformar tu futuro financiero?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Únete a miles de personas que están aprendiendo y ganando con FinPath
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  size="xl"
                  className="bg-white text-blue-600 hover:bg-gray-100 border-0 font-bold"
                >
                  Comenzar Gratis
                  <TrendingUp className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  className="border-2 border-white text-white hover:bg-white/10"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Ver Demo
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
