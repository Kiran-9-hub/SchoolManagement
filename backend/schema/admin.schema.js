import { Schema } from "mongoose";

const adminSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  otp: { type: Number },
  otpCreatedAt: { type: Date },
  role: { type: String, default: "admin" },
});

export default adminSchema;
