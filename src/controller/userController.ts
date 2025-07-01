import { userModel } from "@/model/userModel";
import { hashedPassword } from "@/utils/bcrypt";
import bcrypt from "bcryptjs"
import { Request, Response } from "express";

const userSignup = async (req:Request,res:Response) => {
  try {
    const { name, email, password } = req.body
    const existUser = await userModel.findOne({email})
    if(!existUser){
        const securePassword = await hashedPassword(password)
        const newUser = await userModel.create({name,email,password:securePassword})
          
    }else res.status(400).json({message:'User Already exist'})
  } catch (error) {

  }
};

const userLogin = async () => {
    try {
        
    } catch (error) {
        
    }
};

const userProfile = async () => {
    try {
        
    } catch (error) {
        
    }
}

const userLogout = async (req:Request,res:Response) => {
    try {
        
    } catch (error) {
        
    }
}

export = { userSignup,userLogin,userLogout,userProfile };
