import student from "../model/student.model.js";
import { generateToken } from "../utils/jwt.js";
import { generateOTP } from "../utils/otp.js";
import { sendOtpMail } from "../utils/nodemailer.js";



export const studentLogin=async (req , res)=>{
    try {
        const {email,password}=req.body
        if(!email && !password){
            return res.status(400).send({ message: "Login failed", error: "Email and password are required" });
        }
        const isstudent=await student.findOne({email})
        if(isstudent){
            if(isstudent.password===password){
                const token=generateToken({id:isstudent._id})
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
  
      // Check if the student exists
      const isStudent = await student.findOne({ email });
      if (!isStudent) {
        return res.status(404).json({ message: "Invalid email" });
      }
  
      // Check if an OTP was created within the last 30 seconds
      const otpExpiryDuration = 30 * 1000; // 30 seconds in milliseconds
      if (isStudent.otpCreatedAt) {
        const otpCreationTime = new Date(isStudent.otpCreatedAt).getTime();
        const timeElapsed = Date.now() - otpCreationTime;
  
        // If less than 30 seconds have passed since OTP was created
        if (timeElapsed < otpExpiryDuration) {
          return res.status(429).json({
            message: "Please wait 30 seconds before requesting a new OTP",
          });
        }
      }
  
      // Generate a new OTP
      const otp = generateOTP();
      console.log(`Generated OTP for ${email}: ${otp}`);
  
      // Send the OTP via email
      await sendOtpMail({ to: isStudent.email, otp }); // Send email
  
      // Save the OTP and its creation time in the database
      isStudent.otp = otp;
      isStudent.otpCreatedAt = new Date(); // Store the time of OTP creation
      await isStudent.save();
  
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
  
      const isstudent = await student.findOne({ email });
  
      if (!isstudent) {
        // If the email does not belong to a registered student
        return res.status(401).send({ error: "Student email not found." });
      }
  
      console.log('Student found:', isstudent);
  
      if (!isstudent.otp) {
        // If OTP has not been generated yet
        return res.status(400).send({ error: "Please generate the OTP first." });
      }
  
      // Check if OTP is expired (ensure correct timezone handling)
      const isExpired = Date.now() - new Date(isstudent.otpCreatedAt).getTime() >= 1000 * 60 * 5;
  
      if (isExpired) {
        // If the OTP is expired
        return res.status(403).send({ error: "OTP has expired. Please generate a new one." });
      }
  
      console.log('Checking OTP:', isstudent.otp, 'Provided OTP:', otp);
  
      // Ensure both OTPs are of the same type for comparison
      if (String(isstudent.otp) !== String(otp)) {
        // If the provided OTP is invalid
        return res.status(400).send({ error: "Invalid OTP." });
      }
  
      // OTP is valid; clear OTP-related fields and save
      isstudent.otp = null;
      isstudent.otpCreatedAt = null;
      await isstudent.save();
  
      console.log('OTP verified successfully');
  
      // Generate a token and send it to the user
      const token = generateToken({ id: isstudent._id });
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
  
      const isstudent = await student.findById(id); 
      console.log(isstudent);
  
      if (!isstudent) {
        return res.status(401).send({ error: "Student data not found." });
      } else {
        // Update the password directly
        isstudent.password = newPassword; // Directly assign the new password to the password field 
  
        await isstudent.save(); // Save the updated student document to the database
  
        return res.status(200).send({ message: "Password updated successfully." });
      }
    } catch (error) {
      console.error("Error:", error); // Log error for debugging
      return res.status(500).send({ error: "Something went wrong.", msg: error.message });
    }
  };
  