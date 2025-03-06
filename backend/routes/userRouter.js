import express from "express";
import { userInfo, userRegister } from "./../controllers/userController.js";
import { userLogin } from "./../controllers/userController.js";
import { userLogout } from "./../controllers/userController.js";
import authenticateUser from "../middleware/authentication.js";

const userRoute = express.Router();

userRoute.post("/signup", userRegister);
userRoute.post("/login", userLogin);
userRoute.get("/logout", authenticateUser, userLogout);
userRoute.get("/info", authenticateUser, userInfo);

export default userRoute;
