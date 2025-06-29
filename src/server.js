import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import cors from "cors";

import userRouter from "./routes/user.route.js";
import { connectToDatabase } from "./utils/connectDB.js";
import "dotenv/config";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL, // Define qual URL pode acessar a API
    credentials: true, // Permite envio de cookies e autenticação entre domínios
  })
);

// Logs de requisições HTTP
app.use(morgan("dev"));

// Segurança da aplicação
app.use(
  helmet({
    crossOriginEmbedderPolicy: false, //permite que recursos sejam carregados de diferentes origens
  })
);

// Middleware para lidar com cookies
app.use(cookieParser());

app.use(express.json());
app.use("/users", userRouter);

const PORT = process.env.APP_PORT || 3000;

connectToDatabase().then(() =>
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
);
