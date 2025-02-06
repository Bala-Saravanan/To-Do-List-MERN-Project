import express from "express";
import { userRegister } from "./../controllers/userController.js";
import { userLogin } from "./../controllers/userController.js";
import { userLogout } from "./../controllers/userController.js";

const userRoute = express.Router();

userRoute.post("/signup", userRegister);
userRoute.post("/login", userLogin);
userRoute.get("/logout", userLogout);

export default userRoute;
