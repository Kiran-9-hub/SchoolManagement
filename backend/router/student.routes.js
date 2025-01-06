import { Router } from "express";


const studentRouter = Router();

studentRouter.get("/",(req,res)=>{
    res.send("studentrouts is working properly")
})

export default studentRouter;