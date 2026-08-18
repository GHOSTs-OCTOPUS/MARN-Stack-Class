import { comparePassword, hashPassword } from "../helpers/authHelper.js"
import userModel from "../models/userModel.js"
import JWT from "jsonwebtoken"

// Controller for Register
export const registerController = async (req,res) =>{
    try {
        const {name , email , password , address , phone} = req.body
        if(!name || !email || !password || !address || !phone){
            res.send({
                success:false,
                message:"All fields are required"
            })
        }

        //existing user 
        const existingUser = await userModel.findOne({email})

        if(existingUser){
            return res.status(404).send({
                success:false,
                message:"Already registered plz login"
            })
        }

        const hashedPassword =await hashPassword(password)

        const user = await userModel({
            name,email,password:hashedPassword,address,phone
        }).save()

        res.status(201).send({
            success:true,
            message:"Successfully registered",
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in registration",
            error
        })
    }
}

// Controller for Login
export const loginController = async (req,res) =>{
    try{
        const {email , password} = req.body
        if(!email || !password){
            res.send({
                success:false,
                message:"Invalid email or password" 
            })
        }

        const user = await userModel.findOne({email})
        if(!user){
            res.status(404).send({
                success:false,
                message:"User not register yet" 
            })
        }

        const match = await comparePassword(password , user.password)
        if(!match){
            res.status(404).send({
                success:false,
                message:"Incorrect password"
            })
        }

        const token = await JWT.sign({_id:user._id} , process.env.JWT_SECRET , {expiresIn: "1d"})

        res.status(201).send({
            success:true,
            message:"Successfully login",
            user:{
                _id:user._id,
                name:user.name,
                email:user.mail,
                address:user.address,
                phone:user.phone,
                role:user.role
            },
            token
        })
    }

    catch(error){
       console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in login",
            error
        }) 
    }
}


// Controller for Test
export const testController = async (req,res) =>{
    return res.send({
        message:"Protected Route"
    })
}