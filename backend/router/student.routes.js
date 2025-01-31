import { Router } from "express";
import { changePassword, forgetPassword, studentLogin, verifyOTP } from "../auth/student.auth.js";
import { verifyToken } from "../middlewwares/TokenVerify.js";


const studentRouter = Router();

// studentRouter.get("/",(req,res)=>{
//     res.send("studentrouts is working properly")
// })

studentRouter.post("/login",studentLogin)           //http://127.0.0.1:5000/student/login

//forgot password
studentRouter.post("/otp/create",forgetPassword)    //http://127.0.0.1:5000/student/otp/create

studentRouter.post("/otp/verify",verifyOTP)    //http://127.0.0.1:5000/student/otp/verify

studentRouter.post("/changepass",verifyToken,changePassword)    //http://127.0.0.1:5000/student/changepass

export default studentRouter;