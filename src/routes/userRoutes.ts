import express from "express";
import userController from "../controller/userController";

const userRoute = express.Router();

const { userSignup } = userController;

userRoute.post("/signup",userSignup);
userRoute.post("/signin");
userRoute.post("/logout");
userRoute.get("/profile");

export default userRoute;
