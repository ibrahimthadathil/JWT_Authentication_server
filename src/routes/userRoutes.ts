import express from "express";
import userController from "@/controller/userController";
import { protectRoute } from "@/middleware/authMiddleware";

const userRoute = express.Router();


userRoute.post("/signup",userController.userSignup);
userRoute.post("/signin",userController.userLogin);
userRoute.post("/logout",userController.userLogout);
userRoute.get("/profile",protectRoute,userController.userProfile);

export default userRoute;
