import { Response } from "express";

export const setCookie = (res:Response,token:string,maxage?:number)=>{
    res.cookie('jwt_tkn',token,{
        httpOnly: true,
        secure:process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge : 1*24*60*60*1000
    })
}