import { Iuser } from "@/model/userModel";
import jwt from "jsonwebtoken";

export const generateToken =  (payload:Partial<Iuser>) => {
    const key = process.env.JWT_SECRET_KEY as string
    const token = jwt.sign(payload,key,{expiresIn:'1d'})
    return token
}


