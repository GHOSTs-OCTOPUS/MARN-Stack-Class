import express from "express"

import colors from "colors" 

import dotenv from "dotenv"   

import connectDB from "./config/db.js"


dotenv.config()     

connectDB()

const app = express()         

app.get("/",(req,res)=>{                           
// res.send("<h1>Welcome to my app...</h1>")       
   res.send("<h2>Backend Server Start ...</h2>")   
})                            

const PORT =process.env.PORT || 8080              

app.listen(PORT,()=>{                                     
    console.log(`server is running on ${PORT}`.bgCyan) 
})