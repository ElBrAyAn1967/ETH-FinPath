import { pgTable, text, timestamp, boolean, integer } from "drizzle-orm/pg-core";

/**
 * Schema de usuarios para FinQuest
 * Vincula wallets con perfiles de usuario personalizados
 */
export const users = pgTable("users", {
  // ID único (wallet address)
  id: text("id").primaryKey(), // Ethereum address

  // Información de perfil
  username: text("username").unique().notNull(),
  avatarType: text("avatar_type").notNull(), // "male" | "female"
  avatarSeed: text("avatar_seed"), // Para generar avatares consistentes

  // Datos del jugador
  displayName: text("display_name").notNull(),
  bio: text("bio"),
  level: integer("level").default(1).notNull(),
  xp: integer("xp").default(0).notNull(),

  // Circles Protocol
  circlesAddress: text("circles_address"), // Dirección del Circle del usuario
  circlesBalance: text("circles_balance").default("0"), // Balance en formato string para precisión

  // Metadata
  onboardingCompleted: boolean("onboarding_completed").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

/**
 * Tipo TypeScript inferido del schema
 */
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
