import { Response } from "express";

export const setCookie = (res:Response,token:string,maxage:number)=>{
    res.cookie('jwt_tkn',token,{
        httpOnly: true,
        secure:true,
        sameSite: 'strict',
        maxAge : 1*24*60*60*1000
    })
}