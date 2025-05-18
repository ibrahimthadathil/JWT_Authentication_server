import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

const target = {
      origin: process.env.CLIENT_URL,
      changeOrigin:true,
      Credentials:true
}
const app = express()
 
app.use(cors(target))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/test/:id',(req,res)=>{
try {
      console.log(req.params.id)
 
} catch (error) {
      console.log(error);
      
}})

const PORT = process.env.PORT || 3000  
app.listen(PORT,()=>{
      console.log(`Server is running on http://localhost:${PORT}`);

}) 