import { Router } from "express";
import {adminLogin,changePassword,forgetPassword, verifyOTP} from "./../auth/admin.auth.js"
import { verifyToken } from "../middlewwares/TokenVerify.js";
import { addStudent, addTeacher, deleteStudent, deleteTeacher, getAllStudents, getAllTeachers, updateStudent, updateTeacher } from "../controllers/admin.controller.js";

const adminRouter = Router();

//login
adminRouter.post("/login",adminLogin)   // http://127.0.0.1:5000/admin/login


// FORGOT PASSWORD (generateOTP)
adminRouter.post("/otp/create",forgetPassword)  //http://127.0.0.1:5000/admin/otp/create

//verify OTP
adminRouter.post("/otp/verify",verifyOTP)    //http://127.0.0.1:5000/admin/otp/verify

//change password
adminRouter.post("/changepass", verifyToken,changePassword)        //http://127.0.0.1:5000/admin/changepass

//add student
adminRouter.post("/add/student",verifyToken,addStudent)            //http://127.0.0.1:5000/admin/add/student

//update student
adminRouter.put("/update/student",updateStudent)               //http://127.0.0.1:5000/admin/update/student   

// {
//     "id": "677ccefcf09f49b61e03c22c",  Admin id
//     "studentId": "678217c3bbf3f25a981cdf54", student id
//     "updateData": {
//         "address": {
//             "street": "Bhubaneswer",
//             "city": "Khordha",
//             "state": "Odisha",
//             "zipCode": "752066"
//         }
//     }
// }


//delete student
adminRouter.delete("/delete/student",verifyToken,deleteStudent)          //http://127.0.0.1:5000/admin/delete/student


//add teacher
adminRouter.post("/add/teacher",verifyToken,addTeacher)           //http://127.0.0.1:5000/admin/add/teacher

// update teacher
adminRouter.put("/update/teacher",verifyToken,updateTeacher)       //http://127.0.0.1:5000/admin/update/teacher


//delete teacher
adminRouter.delete("/delete/teacher",verifyToken,deleteTeacher)    //http://127.0.0.1:5000/admin/delete/teacher

// {
//     "id":"677ccefcf09f49b61e03c22c",
//     "teacherId":"67838d9600591c6918969455"
// }



//get all student list
adminRouter.get("/all/student",verifyToken,getAllStudents)               //http://127.0.0.1:5000/admin/all/student
//1st generate the token by admin login the go to autherizotion,select bareer token the pest the go to body , raw,json the give the admin id then send request

//get all teacher list
adminRouter.get("/all/teacher",verifyToken,getAllTeachers)             //http://127.0.0.1:5000/admin/all/teacher


export default adminRouter;