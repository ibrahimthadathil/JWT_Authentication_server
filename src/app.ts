import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieparser from 'cookie-parser'
import { connecDB } from '@/utils/connectDB'
import userRoute from '@/routes/userRoutes'
dotenv.config()

const target = {
      origin: "http://localhost:6001",
      changeOrigin:true,
      credentials:true
}

connecDB()

const app = express()

app.use(cors(target))
app.use(cookieparser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/users',userRoute)


const PORT = process.env.PORT || 3000  
app.listen(PORT,()=>{
      console.log(`Server is running on http://localhost:${PORT}`);

}) 