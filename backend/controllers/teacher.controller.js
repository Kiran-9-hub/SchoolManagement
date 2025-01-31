import student from "../model/student.model.js";
import teacher from "../model/teacher.model.js";

export const addStudent=async (req,res)=>{
    try {
        const {id} =req                                 //verify the admin usinng id from req object
        const isTeacher = await teacher.findById(id);
        if (!isTeacher) {
            return res.status(401).send("teacher authentication failed");
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

export const updateStudent = async (req, res) => {
    try {
        const { id, studentId, updateData } = req.body; //id: The admin's ID (to verify if the user is an admin).studentId: The ID of the student whose data is to be updated.updateData: The data to update for the student.
        const isTeacher = await teacher.findById(id);
        if (!isTeacher) {
            return res.status(401).send("teacher authentication failed");
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


export const deleteStudent = async (req, res) => {
    try {
        const { id, studentId } = req.body;

       
        if (!id || !studentId) {
            return res.status(400).json({ error: "teacher ID and Student ID are required" });
        }

        const isTeacher = await teacher.findById(id);
        if (!isTeacher) {
            return res.status(401).json({ error: "teacher authentication failed" });
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

export const getAllStudents = async (req, res) => {
    try {
        const { id } = req.body;

        const isTeacher = await teacher.findById(id);
        if (!isTeacher) {
            return res.status(401).json({ error: "teacher authentication failed" });
        }

        const students = await student.find();
        return res.status(200).json({ students });
    } catch (error) {
        return res.status(500).json({ error: "Something went wrong", message: error.message });
    }
};

export const getAllTeachers = async (req, res) => {
    try {
        const { id } = req.body;

        const isTeacher = await teacher.findById(id);
        if (!isTeacher) {
            return res.status(401).json({ error: "teacher authentication failed" });
        }

        const teachers = await teacher.find();
        return res.status(200).json({ teachers });
    } catch (error) {
        return res.status(500).json({ error: "Something went wrong", message: error.message });
    }
};