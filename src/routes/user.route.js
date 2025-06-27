import express from "express";
import { userRegister, userGetAll } from "./../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/register", userRegister);
userRouter.get("/getAll", userGetAll);

export default userRouter;
