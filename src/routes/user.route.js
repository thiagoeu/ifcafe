import express from "express";
import {
  userRegister,
  userGetAll,
  userLogin,
} from "./../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);

userRouter.get("/getAll", userGetAll);

export default userRouter;
