import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

/**
 * Cliente de base de datos Neon PostgreSQL con Drizzle ORM
 */
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });

export * from "./schema";
