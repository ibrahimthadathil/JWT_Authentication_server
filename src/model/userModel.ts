import mongoose, { Document, Schema } from "mongoose";

export interface Iuser extends Document {
  _id: string;
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema: Schema = new Schema<Iuser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export const userModel = mongoose.model<Iuser>('User',userSchema)