import { model } from "mongoose";
import studentSchema from "../schema/student.schema.js";

const student=model("student",studentSchema)

export default student