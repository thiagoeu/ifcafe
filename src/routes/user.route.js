import express from "express";
import auth from "./../middlewares/auth.js";
import {
  userRegister,
  userGetAll,
  userLogin,
  userLogout,
} from "./../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);
userRouter.get("/logout", auth, userLogout);

userRouter.get("/getAll", userGetAll);

export default userRouter;
