import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClientProviders } from "@/components/providers/ClientProviders";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Deshabilitar generación estática para esta app (Web3 es dinámico)
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "FinQuest - Aprende Finanzas Jugando",
  description:
    "La primera app que te enseña finanzas personales y Web3 sin que te des cuenta. Completa misiones, gana recompensas en USDC y conviértete en un experto financiero.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
