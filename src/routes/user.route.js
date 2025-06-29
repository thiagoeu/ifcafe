import express from "express";
import auth from "./../middlewares/auth.js";
import { validateRegister } from "../validations/user.schema.js";
import {
  userRegister,
  userGetAll,
  userLogin,
  userLogout,
} from "./../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/register", validateRegister, userRegister);
userRouter.post("/login", userLogin);
userRouter.post("/logout", auth, userLogout);

userRouter.get("/getAll", userGetAll);

export default userRouter;
