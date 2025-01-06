import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const dbconnection=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database connected successfully");
        
    }
    catch(error){
        console.error('Error connecting to the database');
        
    }
}

export default dbconnection