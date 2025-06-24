import express from "express";
import userRouter from "./routes.js";

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("pagina de inicio");
});
