import mongoose from "mongoose";
import Admin from "../model/admin.model.js"
import student from "../model/student.model.js";
import teacher from "../model/teacher.model.js";



//logic for add student
export const addStudent=async (req,res)=>{
    try {
        const {id} =req                                 //verify the admin usinng id from req object
        const isAdmin = await Admin.findById(id);
        if (!isAdmin) {
            return res.status(401).send("Admin authentication failed");
        } 
        else{
            
           try {
             const studentData=new student(req.body)
             await studentData.save()
             return res.status(201).send({message:"student created sucessfully"})
           } catch (error) {
             return res.status(400).send({error:"student validation failed",msg:error.message})
           }
        } 
    } catch (error) {
        res.status(500).send({error:"something went wrong",msg:error.message})
    }
} 


// logic for delete the student      
export const deleteStudent = async (req, res) => {
    try {
        const { id, studentId } = req.body;

       
        if (!id || !studentId) {
            return res.status(400).json({ error: "Admin ID and Student ID are required" });
        }

        const isAdmin = await Admin.findById(id);
        if (!isAdmin) {
            return res.status(401).json({ error: "Admin authentication failed" });
        }

        const studentToDelete = await student.findByIdAndDelete(studentId);
        if (!studentToDelete) {
            return res.status(404).json({ error: "Student not found" });
        }

        return res.status(200).json({ message: "Student deleted successfully" });
    } catch (error) {
        return res.status(500).json({ error: "Something went wrong", message: error.message });
    }
};


//logic for update the student

export const updateStudent = async (req, res) => {
    try {
        const { id, studentId, updateData } = req.body; //id: The admin's ID (to verify if the user is an admin).studentId: The ID of the student whose data is to be updated.updateData: The data to update for the student.
        const isAdmin = await Admin.findById(id);
        if (!isAdmin) {
            return res.status(401).send("Admin authentication failed");
        } else {
            try {
                const updatedStudent = await student.findByIdAndUpdate(studentId, updateData, { new: true });
                if (!updatedStudent) {
                    return res.status(404).send({ message: "Student not found" });
                }
                return res.status(200).send({ message: "Student updated successfully", student: updatedStudent });
            } catch (error) {
                return res.status(400).send({ error: "Failed to update student", msg: error.message });
            }
        }
    } catch (error) {
        res.status(500).send({ error: "Something went wrong", msg: error.message });
    }
};

  //logic for add teacher
  export const addTeacher = async (req, res) => {
    try {
        const { id } = req;
          
        const isAdmin = await Admin.findById(id);
        if (!isAdmin) {
            return res.status(401).send("Admin authentication failed");
        } else {
            try {
                const teacherData = new teacher(req.body);
                

                await teacherData.save();
                return res.status(201).send({ message: "Teacher created successfully" });
            } catch (error) {
                
                return res.status(400).send({ error: "Teacher validation failed", msg: error.message });
            }
        }
    } catch (error) {
        
        res.status(500).send({ error: "Something went wrong", msg: error.message });
    }
};             


//logic for update teacher

export const updateTeacher = async (req, res) => {
    try {
        const { id, teacherId, updateData } = req.body; // id: The admin's ID (to verify if the user is an admin). teacherId: The ID of the teacher whose data is to be updated. updateData: The data to update for the teacher.
        const isAdmin = await Admin.findById(id);
        if (!isAdmin) {
            return res.status(401).send("Admin authentication failed");
        } else {
            try {
                const updatedTeacher = await teacher.findByIdAndUpdate(teacherId, updateData, { new: true });
                if (!updatedTeacher) {
                    return res.status(404).send({ message: "Teacher not found" });
                }
                return res.status(200).send({ message: "Teacher updated successfully", teacher: updatedTeacher });
            } catch (error) {
                return res.status(400).send({ error: "Failed to update teacher", msg: error.message });
            }
        }
    } catch (error) {
        res.status(500).send({ error: "Something went wrong", msg: error.message });
    }
};

//logic for delete teacher

export const deleteTeacher=async (req,res)=>{

    try {

        const {id,teacherId}=req.body

        if (!id || !teacherId) {
            return res.status(400).json({ error: "Admin ID and Teacher ID are required" });
        }

        const isAdmin=await Admin.findById(id)
        if(!isAdmin){
            return res.status(401).json({ error: "Admin authentication failed" });
        }

        const TeacherToDelete=await teacher.findByIdAndDelete(teacherId)
        if(!TeacherToDelete){
            return res.status(404).json({error:"teacher no found"})
        }
        return res.status(200).json({message:"Teacher deleted successfully"})

        
    } catch (error) {
        res.status(500).send({ error: "Something went wrong", msg: error.message });
    }
}

//logic for get all student
export const getAllStudents = async (req, res) => {
    try {
        const { id } = req.body;

        const isAdmin = await Admin.findById(id);
        if (!isAdmin) {
            return res.status(401).json({ error: "Admin authentication failed" });
        }

        const students = await student.find();
        return res.status(200).json({ students });
    } catch (error) {
        return res.status(500).json({ error: "Something went wrong", message: error.message });
    }
};

//logic for get all teacher
export const getAllTeachers = async (req, res) => {
    try {
        const { id } = req.body; // Consider using req.params or req.headers for security

        // Authenticate admin
        const isAdmin = await Admin.findById(id);
        if (!isAdmin) {
            return res.status(401).json({ error: "Admin authentication failed" });
        }

        // Fetch teachers with projection
        const teachers = await teacher.find(
            {}, // Query condition
            "name email subjects classes phone address" // Fields to return
        );

        // Respond with teacher data
        return res.status(200).json({ teachers });
    } catch (error) {
        console.error("Error fetching teachers:", error.message);
        return res.status(500).json({
            error: "Something went wrong",
            message: error.message,
        });
    }
};
