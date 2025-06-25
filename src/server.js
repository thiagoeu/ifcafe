import express from "express";
import userRouter from "./routes.js";
import { connectToDatabase } from "./config/database.js";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use("/users", userRouter);

connectToDatabase().then(() =>
  app.listen(process.env.APP_PORT, () =>
    console.log("Server running on port 3000")
  )
);
