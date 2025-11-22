"use client";

import { Sparkles, TrendingUp, Coins } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";

/**
 * Hero Section de FinQuest
 * Inspirado en Frutero con badges rotados y CTAs prominentes
 */
export default function HeroSection() {
  return (
    <section className="min-h-[70svh] w-full pt-12 pb-8 md:pt-20 lg:pt-16 bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--accent-pink)]/5">
      <Container maxWidth="7xl">
        <div className="mx-auto space-y-8 px-4 text-center">
          {/* Badge Superior */}
          <div className="flex justify-center">
            <Badge variant="accent" rotate="left" size="lg">
              <Sparkles className="mr-2 h-4 w-4" />
              Aprende jugando
            </Badge>
          </div>

          {/* Título Principal con badges inline rotados (estilo Frutero) */}
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl leading-tight font-semibold text-[var(--foreground)] md:text-5xl lg:text-6xl">
              Domina tus{" "}
              <span className="inline-block -rotate-2 transform rounded-lg bg-[var(--accent-yellow)] px-4 py-2 text-[var(--foreground)]">
                Finanzas
              </span>{" "}
              <br className="md:hidden" />
              mientras{" "}
              <br />
              ganas{" "}
              <span className="inline-block rotate-2 transform rounded-lg bg-[var(--secondary)] px-4 py-2 text-white">
                USDC real
              </span>
            </h1>
          </div>

          {/* Subtítulo */}
          <p className="mx-auto max-w-2xl text-xl text-[var(--foreground)]/70 md:text-2xl lg:text-xl">
            La primera app que te enseña finanzas personales y Web3{" "}
            <Badge variant="primary" rotate="right" className="mx-1">
              sin que te des cuenta
            </Badge>
            . Completa misiones, gana recompensas y conviértete en un experto
            financiero.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="gradient" size="xl" className="group">
              Empezar Gratis
              <TrendingUp className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl">
              <Coins className="mr-2 h-5 w-5" />
              Ver Demo
            </Button>
          </div>

          {/* Stats rápidos */}
          <div className="mx-auto max-w-3xl grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--primary)]">
                $500K+
              </div>
              <div className="text-sm text-[var(--foreground)]/60">
                En recompensas
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--secondary)]">
                10K+
              </div>
              <div className="text-sm text-[var(--foreground)]/60">
                Usuarios activos
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--accent-pink)]">
                7 Mundos
              </div>
              <div className="text-sm text-[var(--foreground)]/60">
                Para explorar
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
