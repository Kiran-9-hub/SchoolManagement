import teacher from "../model/teacher.model.js";
import { generateToken } from "../utils/jwt.js";
import { sendOtpMail } from "../utils/nodemailer.js";
import { generateOTP } from "../utils/otp.js";

export const teacherLogin=async (req , res)=>{
    try {
        const {email,password}=req.body
        if(!email && !password){
            return res.status(400).send({ message: "Login failed", error: "Email and password are required" });
        }
        const isTeacher=await teacher.findOne({email})
        if(isTeacher){
            if(isTeacher.password===password){
                const token=generateToken({id:isTeacher._id})
                return res.status(200).send({ token });
            } else{
                return res.status(400).send({ message: "Login failed", error: "Invalid password" });
            }
        } else{
            return res.status(400).send({ message: "Login failed", error: "Invalid email" });
        }
    } catch (error) {
        res.status(500).send({ message: "Internal server error", error: error.message });
    }
}


export const forgetPassword = async (req, res) => {
    try {
      const { email } = req.body;
  
      // Check if email is provided
      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }
  
      // Check if the teacher exists
      const isTeacher = await teacher.findOne({ email });
      if (!isTeacher) {
        return res.status(404).json({ message: "Invalid email" });
      }
  
      // Check if an OTP was created within the last 30 seconds
      const otpExpiryDuration = 30 * 1000; // 30 seconds in milliseconds
      if (
        isTeacher.otpCreatedAt &&
        Date.now() - new Date(isTeacher.otpCreatedAt).getTime() < otpExpiryDuration
      ) {
        return res.status(429).json({
          message: "Please wait 30 seconds before requesting a new OTP",
        });
      }
  
      // Generate a new OTP
      const otp = generateOTP(); // Function imported from otp.js
      console.log(`Generated OTP for ${email}: ${otp}`);
  
      // Send the OTP via email
      await sendOtpMail({ to: isTeacher.email, otp }); // Function imported from nodemailer.js
  
      // Save the OTP and its creation time in the database
      isTeacher.otp = otp;
      isTeacher.otpCreatedAt = new Date();
      await isTeacher.save();
  
      return res.status(200).json({ message: "OTP sent successfully" });
    } catch (error) {
      console.error("Error in forgetPassword:", error);
      return res.status(500).json({
        message: "Internal server error",
        error: error.message,
      });
    }
  };


  export const verifyOTP = async (req, res) => {
    try {
      const { otp, email } = req.body;
  
      if (!email || !otp) {
        // Ensure both email and OTP are provided
        return res.status(400).send({ error: "Please provide both email and OTP." });
      }
  
      const isTeacher = await teacher.findOne({ email });
  
      if (!isTeacher) {
        // If the email does not belong to a registered teacher
        return res.status(401).send({ error: "Teacher email not found." });
      }
  
      console.log('Teacher found:', isTeacher);
  
      if (!isTeacher.otp) {
        // If OTP has not been generated yet
        return res.status(400).send({ error: "Please generate the OTP first." });
      }
  
      const isExpired = Date.now() - isTeacher.otpCreatedAt >= 1000 * 60 * 5; // Check if OTP is older than 5 minutes
  
      if (isExpired) {
        // If the OTP is expired
        return res.status(403).send({ error: "OTP has expired. Please generate a new one." });
      }
  
      console.log('Checking OTP:', isTeacher.otp, 'Provided OTP:', otp);
  
      if (isTeacher.otp != otp) {
        // If the provided OTP is invalid
        return res.status(400).send({ error: "Invalid OTP." });
      }
  
      // OTP is valid; clear OTP-related fields and save
      isTeacher.otp = null;
      isTeacher.otpCreatedAt = null;
      await isTeacher.save();
  
      console.log('OTP verified successfully');
  
      // Generate a token and send it to the user
      const token = generateToken({ id: isTeacher._id });
      return res.status(200).send({ token });
    } catch (error) {
      // Catch and handle any unexpected errors
      console.error('Error occurred:', error); // Log error for debugging
      return res.status(500).send({
        error: "Something went wrong.",
        message: error.message,
      });
    }
  };
  

  export const changePassword = async (req, res) => {
    try {
      const { id } = req; // req from TokenVerify.js
      const { newPassword } = req.body;
  
      if (!id || !newPassword) {
        // Ensure both id and newPassword are provided
        return res.status(400).send({ error: "Please provide all required fields." });
      }
  
      const isTeacher = await teacher.findById(id); 
      console.log(isTeacher);
  
      if (!isTeacher) {
        return res.status(401).send({ error: "Teacher data not found." });
      } else {
        // Update the password directly
        isTeacher.password = newPassword; // Directly assign the new password  to the password field 
  
        await isTeacher.save(); // Save the updated teacher document to the database
  
        return res.status(200).send({ message: "Password updated successfully." });
      }
    } catch (error) {
      console.error("Error:", error); // Log error for debugging
      return res.status(500).send({ error: "Something went wrong.", msg: error.message });
    }
  };
  
  