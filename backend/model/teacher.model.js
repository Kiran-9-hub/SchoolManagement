import { model } from "mongoose";
import teacherSchema from "../schema/teacher.schema.js";

const teacher=model("teacher",teacherSchema)

export default teacher