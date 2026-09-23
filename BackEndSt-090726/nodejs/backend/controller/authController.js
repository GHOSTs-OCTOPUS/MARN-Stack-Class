import { comparePassword, hashPassword } from "../helpers/authHelper.js"
import userModel from "../models/userModel.js"
import JWT from "jsonwebtoken"

export const registerController = async (req,res) =>{
    try {
        const {name , email , password , address , phone} = req.body
        if(!name || !email || !password || !address || !phone){
            return res.send({
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


export const loginController = async (req,res) =>{
    try{
       const {email , password} = req.body 
       if(!email || !password){
        return res.send({
            success:false,
            message:"Invalid email or password"
        })
       }

       const user = await userModel.findOne({email})
       if(!user){
        return res.status(404).send({
            success:false,
            message:"User not register yet"
        })
       }

       const match = await comparePassword(password , user.password)
       if(!match){
        return res.status(404).send({
            success:false,
            message:"Incorrect password"
        })
       }

        const token =  JWT.sign({_id:user._id , role:user.role} , process.env.JWT_SECRET , {expiresIn :"7d"})

       res.status(201).send({
        success:true,
        message:"Successfully login",
        user:{
            _id:user._id,
            name:user.name,
            email:user.email,
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


export const testController = async (req,res) =>{
    return res.send({
        message:"protected route"
    })
}


export const getAllUsersController = async (req,res)=>{
    try{
        const users = await userModel.find({}).select("-password").sort({createdAt:-1})
        res.status(200).send({
            success:true,
            users
        })
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error while fetching users"
        })
    }
}

export const deleteUserController = async (req,res)=>{
    try{
        const {id} = req.params
        await userModel.findByIdAndDelete(id)
        res.status(200).send({
            success:true,
            message:"User deleted successfully"
        })
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error while deleting user"
        })
    }
}