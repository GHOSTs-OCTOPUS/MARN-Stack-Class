import JWT from "jsonwebtoken"
import userModel from "../models/userModel.js"

export const requireSignIn =async (req,res,next) =>{
    try {
        const token = req.header.authorization.split(" ")[1]
        req.user = JWT.verify(token, process.env.JWT_SECRET )
        next()
    } catch (error) {
        return res.status(401).send({
            success:false,
            message:"Not Authorized",
            error
        })
    }
}

export const isAdmin = async (req, res, next) =>{
    try {
        if(user.role !==1){
            res.status(401).send({
                success:false,
                message:"Unauthorized access"
            })
        }else{
            next()
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Unauthorized access" 
        })
    }
}

