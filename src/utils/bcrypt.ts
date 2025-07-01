import bcrypt, { compare } from "bcryptjs";

export const hashedPassword = async (password:string) => {
    return bcrypt.hash(password,10)
}

export const comparePassword = async (inputPassword:string,actualPassword:string) => {
    return bcrypt.compare(inputPassword,actualPassword)
}