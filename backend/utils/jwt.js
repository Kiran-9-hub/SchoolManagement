import jwt from "jsonwebtoken";
import { config } from "dotenv";
config(); //enviroment variable cofiguration    

//generate token
export const generateToken = (data) => {
    try {
        return jwt.sign( data , process.env.JWT_SECRET, {
            expiresIn: "30d",
        });
    }
    catch (error) {
        throw new Error(error)
    }
}