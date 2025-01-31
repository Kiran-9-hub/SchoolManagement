import jwt from "jsonwebtoken"
import { config } from "dotenv"
config()


export const verifyToken=(req,res,next)=>{
  try{
        const token=req.headers["authorization"].split(" ")[1]   //[  authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3N2NjZWZjZjA5ZjQ5YjYxZTAzYzIyYyIsImlhdCI6MTczNjQ5MDYyNiwiZXhwIjoxNzM5MDgyNjI2fQ.dGV7CjJNJyI4jgbrbdXDPQOB4J9e9muNM-KzZSjylso' // befor token the autherization and a space is there. to remove that we use split methode ]

        if(!token){                                                //if  token is not provided 
            return res.status(400).send({error:"token required"})
        }

        //verify the token
        const data=jwt.verify(token,process.env.JWT_SECRET)

        if(!data.id){          // id is not presend inside the tokent       [{ id: '677ccefcf09f49b61e03c22c', iat: 1736490626, exp: 1739082626 }]                 
            return res.status(400).send({error:" invalide token  details"})
        }
        console.log(data);  
        
        //send the id for next middleware
        req.id=data.id           //data.id is store inside id so in admin.auth.js in try block we request

        //call the next function to reditrect to the next middleware
        next()   
  }
  catch(error){
    return res.status(500).send({error:"something went wrong",message:error.message})
  }
}
