import { hashPassword } from "../helpers/authHelper.js"
import userModel from "../models/userModel.js"

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


export const loginController = () =>{}