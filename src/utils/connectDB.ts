import mongoose from "mongoose";

export const connecDB = async()=> {
      try {
      await mongoose.connect(process.env.MONGO_URL as string)
      console.log('DB connected');    
      } catch (error) {
            console.log((error as Error).message);
            process.exit(1)
      }
      
}
