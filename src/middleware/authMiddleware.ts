import { Iuser, userModel } from "@/model/userModel";
import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
export interface Authrequest extends Request{
    userId? : Iuser 
}

export const protectRoute = async(req:Authrequest,res:Response,next:NextFunction)=>{
    try {
        const token = req.cookies.jwt
        const decode = jwt.verify(token,process.env.JWT_SECRET_KEY as string) as JwtPayload;
        req.userId = await userModel.findById(decode._id).select("-password")
        next()
    } catch (error) {
         res.status(401).send("Not authorized")
    }
}