import express from "express";
import userRouter from "./routes/user.route.js";
import morgan from "morgan";
import helmet from "helmet";
import { connectToDatabase } from "./utils/connectDB.js";
import "dotenv/config";

const app = express();

// Logs de requisições HTTP
app.use(morgan("dev"));

// Segurança da aplicação
app.use(helmet());

app.use(express.json());
app.use("/users", userRouter);

const PORT = process.env.APP_PORT || 3000;

connectToDatabase().then(() =>
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
);
