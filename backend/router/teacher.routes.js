import { Router } from "express";
import { changePassword, forgetPassword, teacherLogin, verifyOTP } from "../auth/teacher.auth.js";
import { verifyToken } from "../middlewwares/TokenVerify.js";
import { addStudent, deleteStudent, getAllStudents, getAllTeachers, updateStudent } from "../controllers/teacher.controller.js";

const teacherRouter = Router();


//login
teacherRouter.post("/login",teacherLogin)               //http://127.0.0.1:5000/teacher/login


//forgot password
teacherRouter.post("/otp/create",forgetPassword)        //http://127.0.0.1:5000/teacher/otp/create

//verify otp
teacherRouter.post("/otp/verify",verifyOTP)                //http://127.0.0.1:5000/teacher/otp/verify

// change password
teacherRouter.post("/changepass",verifyToken,changePassword)        //http://127.0.0.1:5000/teacher/changepass

//add student
teacherRouter.post("/add/student",verifyToken,addStudent)           //http://127.0.0.1:5000/teacher/add/student

//update student
teacherRouter.put("/update/student",verifyToken,updateStudent)        //http://127.0.0.1:5000/teacher/update/student

//delete student
teacherRouter.delete("/delete/student",verifyToken,deleteStudent)          //http://127.0.0.1:5000/teacher/delete/student

//get all students
teacherRouter.get("/all/students",verifyToken,getAllStudents)                //http://127.0.0.1:5000/teacher/all/students

//get all teachers
 teacherRouter.get("/all/teachers",verifyToken,getAllTeachers)

export default teacherRouter;  
