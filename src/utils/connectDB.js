import "dotenv/config";
import { sequelize } from "../models/index.js";

const RETRY_DELAY_MS = 50000;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function connectToDatabase() {
  let attempt = 1;

  while (true) {
    try {
      console.log(
        `🔄 Attempting to connect to database (Attempt ${attempt})...`
      );
      await sequelize.authenticate();
      console.log("✅ Database connected successfully.");
      break; // Sai do loop se conectar com sucesso
    } catch (error) {
      console.error(`❌ Attempt ${attempt} failed: ${error.message}`);
      console.log(`⏳ Retrying in ${RETRY_DELAY_MS / 1000} seconds...`);
      await sleep(RETRY_DELAY_MS);
      attempt++;
    }
  }
}
