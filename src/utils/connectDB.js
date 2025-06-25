import "dotenv/config";
import { Sequelize } from "sequelize";
import User from "../models/User.js";
import config from "../config/database.js";

export const sequelize = new Sequelize(config);

User.init(sequelize);

export async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Database connection failed:", error);
    throw error;
  }
}
