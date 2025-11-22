import { World } from "@/types";
import { MUNDOS } from "@/constants";

/**
 * Definición de los 7 mundos de FinQuest
 * Basado en el documento de temario proporcionado
 */
export const mundosData: Omit<World, "missions" | "unlocked">[] = [
  {
    id: MUNDOS.CAPITALIA,
    name: "Capitalia",
    description:
      "Domina los fundamentos de finanzas personales: presupuesto, ahorro, gasto inteligente y planificación financiera.",
    icon: "💰",
    color: "var(--primary)",
    requiredXP: 0,
  },
  {
    id: MUNDOS.PRODUXIA,
    name: "Prodüxia",
    description:
      "Descubre cómo generar ingresos: emprendimiento, inversión temprana, freelancing y múltiples fuentes de ingreso.",
    icon: "🚀",
    color: "var(--secondary)",
    requiredXP: 500,
  },
  {
    id: MUNDOS.INVERSORA,
    name: "Inversora",
    description:
      "Aprende a invertir sabiamente: acciones, bonos, fondos indexados, diversificación y construcción de portafolio.",
    icon: "📈",
    color: "var(--accent-pink)",
    requiredXP: 1200,
  },
  {
    id: MUNDOS.RESILIENCIA,
    name: "Resiliencia",
    description:
      "Construye tu red de seguridad financiera: fondo de emergencia, seguros, gestión de deudas y planificación para imprevistos.",
    icon: "🛡️",
    color: "var(--accent-yellow)",
    requiredXP: 2000,
  },
  {
    id: MUNDOS.NEXUS,
    name: "Nexus",
    description:
      "Explora el futuro financiero: blockchain, DeFi, criptomonedas, NFTs y la economía descentralizada.",
    icon: "🔗",
    color: "var(--primary-dark)",
    requiredXP: 3000,
  },
  {
    id: MUNDOS.ABUNDANTIA,
    name: "Abundantia",
    description:
      "Optimiza y escala: estrategias fiscales, inmuebles, inversión pasiva y construcción de riqueza a largo plazo.",
    icon: "💎",
    color: "var(--secondary-dark)",
    requiredXP: 4200,
  },
  {
    id: MUNDOS.LEGADO,
    name: "Legado",
    description:
      "Planifica tu impacto duradero: testamentos, herencias, filantropía, inversión de impacto y patrimonio familiar.",
    icon: "🏛️",
    color: "var(--accent-pink-dark)",
    requiredXP: 5500,
  },
];
