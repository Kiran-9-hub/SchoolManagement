import Admin from "../model/admin.model.js";
import { generateToken } from "../utils/jwt.js";
import { sendOtpMail } from "../utils/nodemailer.js";
import { generateOTP } from "../utils/otp.js";

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log('Request body:', req.body);

    if (!email || !password) {
      return res.status(400).send({ message: "Login failed", error: "Email and password are required" });
    }

    const isAdmin = await Admin.findOne({ email });

    if (isAdmin) {
      if (isAdmin.password === password) {
        const token = generateToken({ id: isAdmin._id });
        return res.status(200).send({ token });
      } else {
        return res.status(400).send({ message: "Login failed", error: "Invalid password" });
      }
    } else {
      return res.status(400).send({ message: "Login failed", error: "Invalid email" });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send({ message: "Internal server error", error: error.message });
  }
};


export const forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).send({ message: "Email is required" });
    }

    const isAdmin = await Admin.findOne({ email });
    if (!isAdmin) {
      return res.status(400).send({ message: "Invalid email" });
    }

    // Check if an OTP was created within the last 30 seconds
    const otpExpiryDuration = 30 * 1000; // 30 seconds in milliseconds
    if (
      isAdmin.otpCreatedAt &&
      Date.now() - isAdmin.otpCreatedAt < otpExpiryDuration
    ) {
      return res
        .status(429)
        .send({ message: "Please wait 30s before requesting a new OTP" });
    }

    // Generate a new OTP
    const otp = generateOTP(); //from otp.js it imports
    console.log(email, otp);

    // Send the OTP to the user's email
    await sendOtpMail({ to: isAdmin.email, otp }); //from nodemailer.js its import

    // Save the OTP and creation time in the database
    isAdmin.otp = otp;
    isAdmin.otpCreatedAt = Date.now();
    await isAdmin.save();

    return res.status(201).send({ message: "OTP sent successfully" });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Internal server error", error: error.message });
  }
};

export const verifyOTP = async (req, res) => {
  try {
    const { otp, email } = req.body;

    if (!otp) {
      // If OTP not provided by the admin
      return res.status(400).send({ error: "Provide the OTP" });
    }

    const isAdmin = await Admin.findOne({ email });

    if (!isAdmin) {
      // If admin email is not found in the database
      return res.status(401).send({ error: "Admin mail not found" });
    } else {
      if (!isAdmin.otp) {
        // If OTP is not generated
        return res.status(400).send({ error: "Generate the OTP first" });
      } else {
        const isExpired = Date.now() - isAdmin.otpCreatedAt >= 1000 * 60 * 5; // OTP expires after 5 minutes

        if (isExpired) {
          // If OTP is expired
          return res.status(403).send({ error: "OTP has expired. Please generate again" });
        } else {
          // Log the values for debugging
          console.log('Stored OTP:', isAdmin.otp);
          console.log('Entered OTP:', otp);
          console.log('OTP Created At:', isAdmin.otpCreatedAt);
          console.log('Time Difference:', Date.now() - isAdmin.otpCreatedAt);

          // Check if OTPs match
          if (String(isAdmin.otp) === String(otp)) {
            // If OTP matches, remove OTP and OTP creation time
            isAdmin.otp = null;
            isAdmin.otpCreatedAt = null;
            await isAdmin.save(); // Save changes in the database

            // Generate the auth token
            let token = generateToken({ id: isAdmin._id });
            return res.status(200).send({ token });
          } else {
            return res.status(400).send({ error: "Invalid OTP" });
          }
        }
      }
    }
  } catch (error) {
    res.status(500).send({ error: "Something went wrong", message: error.message });
  }
};


export const changePassword = async (req, res) => {
  try {
    console.log("Request received:", req.body, req.id); // Debug log
    const { id } = req; // TokenVerify middleware must attach this
    const { newPassword } = req.body;

    if (!id || !newPassword) {
      console.error("Missing fields:", { id, newPassword });
      return res.status(400).send({ error: "Provide all required fields" });
    }

    const isAdmin = await Admin.findById(id); // Debug log
    console.log("Admin found:", isAdmin);

    if (!isAdmin) {
      return res.status(401).send({ error: "Admin data not match" });
    }

    isAdmin.$set({ password: newPassword });
    await isAdmin.save();
    return res.status(200).send({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error in changePassword:", error.message);
    res.status(500).send({ error: "Something went wrong", msg: error.message });
  }
};

