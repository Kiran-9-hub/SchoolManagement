import express from 'express';
import {config} from "dotenv"
import cors from "cors"
import morgan from 'morgan';
import dbconnection from './database/database.js';
import adminRouter from './router/admin.routes.js';
import teacherRouter from './router/teacher.routes.js';
import studentRouter from './router/student.routes.js';


const app = express();
config()       //enviroment variable cofiguration
dbconnection()  //database connection



//middlewares
app.use(express.json());   //join parser
app.use(express.urlencoded({extended:true}))   //url data parser
app.use(cors())          //cors policy middleware
app.use(morgan("dev")) //http reqest/response logger. dev is inbuilt in morgan that show we are in devlopment mode

//demoAPI

app.get("/",(req,res)=>{
  res.send("server is working")
})

// routes
app.use("/admin",adminRouter)
app.use("/teacher",teacherRouter)
app.use("/student",studentRouter)



const PORT = process.env.PORT || 80;
const hostname= process.env.HOST_NAME || "localhost";

app.listen(PORT,hostname, () => {
    console.log('Server running on http://'+hostname+':'+PORT);
});