
import { Schema } from "mongoose";

const adminSchema=new Schema({
    fullName:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
})

export default adminSchema