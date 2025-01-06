import { Router } from "express";


const adminRouter = Router();

//demoAPI
adminRouter.get("/",(req,res)=>{
    res.send("admin is working properly")

})



export default adminRouter;