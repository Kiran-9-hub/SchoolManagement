import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // Steps: 1 = Request OTP, 2 = Verify OTP, 3 = Reset Password
  const [role, setRole] = useState('admin'); // Role state
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [token, setToken] = useState(''); // Store the token here
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error at the start

    try {
      setLoading(true);

      if (step === 1) {
        // Step 1: Request OTP
        if (!email) {
          setError('Email is required.');
          return;
        }

        const response = await axios.post(`http://127.0.0.1:5000/${role}/otp/create`, { email });
        if (response.status === 201 || response.status === 200) {
          toast.success('OTP sent to your email!');
          setStep(2); // Move to the next step
        }
      } else if (step === 2) {
        // Step 2: Verify OTP
        if (!otp) {
          setError('OTP is required.');
          return;
        }

        const response = await axios.post(`http://127.0.0.1:5000/${role}/otp/verify`, { email, otp });
        if (response.status === 200) {
          const { token } = response.data; // Extract token
          setToken(token); // Save token in state
          toast.success('OTP verified successfully!');
          setStep(3); // Move to the Reset Password step
        }
      } else if (step === 3) {
        // Step 3: Reset Password
        if (!newPassword || !confirmPassword) {
          setError('Both password fields are required.');
          return;
        }

        if (newPassword !== confirmPassword) {
          setError('Passwords do not match.');
          return;
        }

        const response = await axios.post(
          `http://127.0.0.1:5000/${role}/changepass`,
          { newPassword },
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include token in request
            },
          }
        );

        if (response.status === 200) {
          toast.success('Password reset successfully!');
          setStep(1); // Reset the flow
          navigate('/login');
        }
      }
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred. Please try again.');
    } finally {
      setLoading(false); // Always reset loading state
    }
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-blue-500 to-indigo-700 flex items-center justify-center">
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white bg-opacity-90 p-8 rounded-xl shadow-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-3xl font-bold mb-6 text-center text-gray-800"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {step === 1 ? 'Forgot Password' : step === 2 ? 'Verify OTP' : 'Reset Password'}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {step === 1 && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Role</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="admin">Admin</option>
                  <option value="teacher">Teacher</option>
                  <option value="student">Student</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
            </>
          )}

          {step === 2 && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Enter OTP</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter OTP"
              />
            </div>
          )}

          {step === 3 && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter new password"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Confirm new password"
                />
              </div>
            </>
          )}
        </motion.div>

        {error && (
          <motion.p
            className="text-red-500 text-sm mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {error}
          </motion.p>
        )}

        <motion.button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={loading}
        >
          {loading ? 'Processing...' : step === 1 ? 'Send OTP' : step === 2 ? 'Verify OTP' : 'Reset Password'}
        </motion.button>

        <motion.p
          className="mt-4 text-sm text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Step {step} of 3
        </motion.p>
      </motion.form>
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
