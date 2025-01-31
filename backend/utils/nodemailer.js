import nodemailer from "nodemailer"
import { config } from "dotenv";
config()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSKEY
  }
});

export const sendOtpMail=async({to,otp})=>{
try {
    const mailOptions = {
        from: process.env.EMAIL_USERNAME,
        to,
        subject: 'mySchoolApp OTP',
        text: `Your one time Password is ${otp},
                Don't share it with anyone,
                Use the otp before 5min`
      };
      await transporter.sendMail(mailOptions)
} catch (error) {
    throw new Error(error.message)
}
}

