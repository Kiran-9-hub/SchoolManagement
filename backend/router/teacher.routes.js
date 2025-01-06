import { Router } from "express";

const teacherRouter = Router();

teacherRouter.get("/",(req,res)=>{
    res.send("teacher is working properly")

})

export default teacherRouter;