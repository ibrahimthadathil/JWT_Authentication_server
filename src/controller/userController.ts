import { Authrequest } from "@/middleware/authMiddleware";
import { userModel } from "@/model/userModel";
import { comparePassword, hashedPassword } from "@/utils/bcrypt";
import { setCookie } from "@/utils/cookie_utils";
import { generateToken } from "@/utils/jwt_utils";
import { Request, Response } from "express";

const userSignup = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    
    const { name, email, password } = req.body;
    const existUser = await userModel.findOne({ email });
    if (!existUser) {
      const securePassword = await hashedPassword(password);
      const newUser = await userModel.create({
        name,
        email,
        password: securePassword,
      });
      const token = generateToken({ _id: newUser._id });
      if (token) setCookie(res, token);
      res
        .status(201)
        .json({
          user: { _id: newUser._id, name: newUser.name, email: newUser.email },
          message: "success",
        });
    } else res.status(400).json({ message: "User Already exist" });
  } catch (error) {
    console.log((error as Error).message);
  }
};

const userLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const checkUser = await userModel.findOne({email})
    const passwordCheck = await comparePassword(password,checkUser?.password as string)
    if(checkUser&&passwordCheck){
        const token = generateToken({_id:checkUser._id,email:checkUser.email})
        setCookie(res,token)
        res.status(200).json({
          user: { _id: checkUser._id, name: checkUser.name, email: checkUser.email },
          message: "success",
        });
    }else res.status(400).json({message:'Invalid credentials'})  
  } catch (error) {}
};

const userProfile = async (req:Authrequest, res: Response) => {
  try {
    const user = await userModel.findById(req.userId?._id)
    if(user)res.status(200).json({_id:user._id,email:user.email,name:user.name})
    else res.status(404).json({message:'Not found'})
  } catch (error) {
    res.status(500)
  }
};

const userLogout = async (req: Request, res: Response) => {
  try {
    res.clearCookie('jwt',{
      httpOnly:true,
      sameSite:'strict'
    }) 
    res.status(200).json({message:'Logged out Succssfully'})
  } catch (error) {}
};

export = { userSignup, userLogin, userLogout, userProfile };
