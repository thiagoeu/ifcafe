import "dotenv/config";
import { Sequelize } from "sequelize";
import User from "../models/User.js";

const config = {
  dialect: "postgres",
  host: process.env.POSTGRES_HOST,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: "usersdb",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

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
