import HeroSection from "@/components/landing/HeroSection";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Navbar, Footer } from "@/components/layout";
import { Coins, TrendingUp, Shield, Sparkles, Zap, Target } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <Container maxWidth="7xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" rotate="left" size="lg" className="mb-4">
              <Sparkles className="mr-2 h-4 w-4" />
              Características
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              ¿Por qué FinQuest?
            </h2>
            <p className="text-lg text-[var(--foreground)]/70 max-w-2xl mx-auto">
              Aprende finanzas de forma divertida y gana dinero real mientras lo haces
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <Card className="group hover:border-[var(--primary)]">
              <CardHeader>
                <div className="mb-4 w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center group-hover:bg-[var(--primary)] transition-colors">
                  <Target className="h-6 w-6 text-[var(--primary)] group-hover:text-white transition-colors" />
                </div>
                <CardTitle>Gamificación Real</CardTitle>
                <CardDescription>
                  Completa misiones, sube de nivel y desbloquea nuevos mundos financieros
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 2 */}
            <Card className="group hover:border-[var(--secondary)]">
              <CardHeader>
                <div className="mb-4 w-12 h-12 rounded-xl bg-[var(--secondary)]/10 flex items-center justify-center group-hover:bg-[var(--secondary)] transition-colors">
                  <Coins className="h-6 w-6 text-[var(--secondary)] group-hover:text-white transition-colors" />
                </div>
                <CardTitle>Recompensas en USDC</CardTitle>
                <CardDescription>
                  Gana criptomonedas reales mientras aprendes a manejar tu dinero
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 3 */}
            <Card className="group hover:border-[var(--accent-pink)]">
              <CardHeader>
                <div className="mb-4 w-12 h-12 rounded-xl bg-[var(--accent-pink)]/10 flex items-center justify-center group-hover:bg-[var(--accent-pink)] transition-colors">
                  <Shield className="h-6 w-6 text-[var(--accent-pink)] group-hover:text-white transition-colors" />
                </div>
                <CardTitle>Onboarding Invisible</CardTitle>
                <CardDescription>
                  Usa Web3 sin darte cuenta. Sin seed phrases, sin complicaciones
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 4 */}
            <Card className="group hover:border-[var(--accent-yellow)]">
              <CardHeader>
                <div className="mb-4 w-12 h-12 rounded-xl bg-[var(--accent-yellow)]/10 flex items-center justify-center group-hover:bg-[var(--accent-yellow)] transition-colors">
                  <Zap className="h-6 w-6 text-[var(--accent-yellow)] group-hover:text-[var(--foreground)] transition-colors" />
                </div>
                <CardTitle>AI Coach Personal</CardTitle>
                <CardDescription>
                  Tu asistente financiero inteligente que responde todas tus dudas
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 5 */}
            <Card className="group hover:border-[var(--primary)]">
              <CardHeader>
                <div className="mb-4 w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center group-hover:bg-[var(--primary)] transition-colors">
                  <TrendingUp className="h-6 w-6 text-[var(--primary)] group-hover:text-white transition-colors" />
                </div>
                <CardTitle>Progresión Clara</CardTitle>
                <CardDescription>
                  7 mundos financieros que te llevan de principiante a experto
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Feature 6 */}
            <Card className="group hover:border-[var(--secondary)]">
              <CardHeader>
                <div className="mb-4 w-12 h-12 rounded-xl bg-[var(--secondary)]/10 flex items-center justify-center group-hover:bg-[var(--secondary)] transition-colors">
                  <Sparkles className="h-6 w-6 text-[var(--secondary)] group-hover:text-white transition-colors" />
                </div>
                <CardTitle>Social Learning</CardTitle>
                <CardDescription>
                  Compite con amigos, comparte logros y aprende en comunidad
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24">
        <Container maxWidth="5xl">
          <Card className="bg-gradient-to-br from-[var(--primary)]/10 via-transparent to-[var(--accent-pink)]/10 border-2 border-[var(--primary)]">
            <CardContent className="py-12 text-center">
              <Badge variant="accent" rotate="left" size="lg" className="mb-6">
                <Sparkles className="mr-2 h-4 w-4" />
                Comienza hoy
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Tu viaje financiero empieza aquí
              </h2>
              <p className="text-lg text-[var(--foreground)]/70 mb-8 max-w-2xl mx-auto">
                Únete a miles de personas que están transformando su relación con el dinero
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" size="xl">
                  Empezar Gratis
                  <TrendingUp className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="xl">
                  Ver Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </Container>
      </section>
    </main>
    <Footer />
    </>
  );
}
