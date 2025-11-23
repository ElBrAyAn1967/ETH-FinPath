import { db, users } from "../src/db";

async function resetDatabase() {
  try {
    console.log("=Ñ  Eliminando todos los usuarios...");

    await db.delete(users);

    console.log(" Base de datos limpiada exitosamente!");
    console.log("=Ê Todos los usuarios han sido eliminados.");

    process.exit(0);
  } catch (error) {
    console.error("L Error limpiando la base de datos:", error);
    process.exit(1);
  }
}

resetDatabase();
