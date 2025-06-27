// database/connect.js
import "dotenv/config";
import { sequelize } from "../models/index.js"; // importa o sequelize já com models configurados

export async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully.");

    // Opcional: sincronizar o banco (criar tabelas se não existirem)
    // await sequelize.sync({ alter: true }); // ou force: true para recriar tudo
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    throw error;
  }
}
