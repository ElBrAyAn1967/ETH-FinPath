"use client";

import { Button } from "@/components/ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";

/**
 * Página de demostración del Design System de FinQuest
 * Inspirado en Frutero con la paleta personalizada
 */
export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--accent-pink)]/5 py-12">
      <Container maxWidth="7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <Badge variant="accent" rotate="left" className="mb-4">
            Design System
          </Badge>
          <h1 className="mb-4 text-5xl font-bold lg:text-6xl">
            FinQuest UI Components
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-[var(--foreground)]/70">
            Sistema de diseño inspirado en{" "}
            <Badge variant="secondary" rotate="right" className="inline-flex">
              Frutero
            </Badge>{" "}
            con la paleta de colores de FinQuest
          </p>
        </div>

        {/* Paleta de Colores */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Paleta de Colores</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Primario */}
            <Card>
              <CardHeader>
                <CardTitle>Primario (Morado)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[var(--primary-light)]"></div>
                    <span className="text-sm font-mono">#c4b9fc</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[var(--primary)]"></div>
                    <span className="text-sm font-mono">#6e5acf</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[var(--primary-dark)]"></div>
                    <span className="text-sm font-mono">#4631aa</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Secundario */}
            <Card>
              <CardHeader>
                <CardTitle>Secundario (Cyan)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[var(--secondary-light)]"></div>
                    <span className="text-sm font-mono">#97e3e8</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[var(--secondary)]"></div>
                    <span className="text-sm font-mono">#1cb0b9</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[var(--secondary-dark)]"></div>
                    <span className="text-sm font-mono">#19868d</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Complementario 1 */}
            <Card>
              <CardHeader>
                <CardTitle>Accent (Rosa)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[var(--accent-pink-light)]"></div>
                    <span className="text-sm font-mono">#fbc1d9</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[var(--accent-pink)]"></div>
                    <span className="text-sm font-mono">#fc6eaa</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[var(--accent-pink-dark)]"></div>
                    <span className="text-sm font-mono">#dc357c</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Complementario 2 */}
            <Card>
              <CardHeader>
                <CardTitle>Accent (Amarillo)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[var(--accent-yellow-light)]"></div>
                    <span className="text-sm font-mono">#fcd770</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[var(--accent-yellow)]"></div>
                    <span className="text-sm font-mono">#eabc3e</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-[var(--accent-yellow-dark)]"></div>
                    <span className="text-sm font-mono">#fcecbf</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Botones */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Botones</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Variantes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-3">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="accent">Accent</Button>
                  <Button variant="yellow">Yellow</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="gradient">Gradient</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tamaños</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-start gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="xl">Extra Large</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Estados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-3">
                  <Button>Normal</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Cards</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
                <CardDescription>
                  Card con estilo por defecto y hover effect
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Pasa el mouse por encima para ver el efecto de elevación.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="default" size="sm">
                  Acción
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Primary Card</CardTitle>
                <CardDescription>
                  Card con tono primario (morado)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="primary">Badge</Badge>
              </CardContent>
            </Card>

            <Card className="border-[var(--secondary)]">
              <CardHeader>
                <CardTitle>Secondary Card</CardTitle>
                <CardDescription>Card con tono secundario (cyan)</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">Badge</Badge>
              </CardContent>
            </Card>

            <Card className="border-[var(--accent-pink)]">
              <CardHeader>
                <CardTitle>Accent Card</CardTitle>
                <CardDescription>Card con tono accent (rosa)</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="accent">Badge</Badge>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[var(--primary)]/5 via-transparent to-[var(--accent-pink)]/5">
              <CardHeader>
                <CardTitle>Gradient Card</CardTitle>
                <CardDescription>Card con gradiente sutil</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="ghost">Badge</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Badges */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Badges</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 text-lg font-semibold">Variantes</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="primary">Primary</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="accent">Accent</Badge>
                    <Badge variant="yellow">Yellow</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="ghost">Ghost</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-semibold">Tamaños</h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge size="sm">Small</Badge>
                    <Badge size="md">Medium</Badge>
                    <Badge size="lg">Large</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-semibold">
                    Con Rotación (estilo Frutero)
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="primary" rotate="left">
                      Rotado izquierda
                    </Badge>
                    <Badge variant="accent" rotate="right">
                      Rotado derecha
                    </Badge>
                    <Badge variant="secondary" rotate="none">
                      Sin rotación
                    </Badge>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-semibold">En Texto</h3>
                  <p className="text-lg">
                    Aprende finanzas con{" "}
                    <Badge variant="primary" rotate="left" className="mx-1">
                      FinQuest
                    </Badge>{" "}
                    y gana{" "}
                    <Badge variant="yellow" rotate="right" className="mx-1">
                      recompensas
                    </Badge>{" "}
                    reales en{" "}
                    <Badge variant="secondary" className="mx-1">
                      USDC
                    </Badge>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tipografía */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Tipografía</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold lg:text-6xl">
                  Heading 1 - Display
                </h1>
                <h2 className="text-4xl font-bold lg:text-5xl">
                  Heading 2 - Title
                </h2>
                <h3 className="text-3xl font-bold lg:text-4xl">
                  Heading 3 - Subtitle
                </h3>
                <h4 className="text-2xl font-semibold">Heading 4 - Section</h4>
                <h5 className="text-xl font-semibold">Heading 5 - Label</h5>
                <p className="text-lg">
                  Body Large - Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </p>
                <p className="text-base">
                  Body Regular - Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
                <p className="text-sm">
                  Body Small - Ut enim ad minim veniam, quis nostrud
                  exercitation.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-gradient-to-br from-[var(--primary)]/10 via-transparent to-[var(--accent-pink)]/10 p-10">
            <h2 className="mb-4 text-4xl font-bold">
              Comienza tu viaje financiero
            </h2>
            <p className="mb-8 text-lg text-(--foreground)/70">
              Únete a{" "}
              <Badge variant="yellow" rotate="left" className="mx-1">
                miles de usuarios
              </Badge>{" "}
              que están aprendiendo finanzas de forma divertida
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gradient" size="lg">
                Empezar Ahora
              </Button>
              <Button variant="outline" size="lg">
                Ver Demo
              </Button>
            </div>
          </Card>
        </section>
      </Container>
    </div>
  );
}
