import mongoose from "mongoose";

const userSchema = new. mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
        unique: true,
    },

    password:{
        type:string,
        required:true,
    },

    address:{
        type:string,
        required:true,
    },

    phone:{
        type:string,
        required:true,
    },

    role:{
        type:Number,
        default:0,
    },

},{timestamps:true})

export default mongoose.model("user",userSchema)