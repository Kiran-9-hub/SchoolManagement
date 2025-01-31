import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(localStorage.getItem("userRole") || 'admin'); // Default to 'admin' if no role is stored
  const [error, setError] = useState('');

  // Save selected role to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("userRole", role);
  }, [role]);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Both email and password are required.');
      return;
    }

    try {
      const apiUrl = `http://127.0.0.1:5000/${role}/login`;

      const response = await axios.post(apiUrl, { email, password });

      if (response.status === 200) {
        toast.success(`${role.charAt(0).toUpperCase() + role.slice(1)} login successful!`);
        
        // Store user details
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userRole", role); // Store role properly
        
        navigate(`/${role}`);
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-blue-500 to-indigo-700">
       <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source 
          src="https://22382417.fs1.hubspotusercontent-na1.net/hubfs/22382417/Web_loops.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>

      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/2917/2917995.png"
        alt="Key Icon"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 20, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-10 left-10 w-16"
      />

      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/4149/4149585.png"
        alt="Lock Icon"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: -20, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-10 right-10 w-16"
      />
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-gradient-to-r from-pink-200 to-amber-100 bg-opacity-90 p-8 rounded-xl shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Login
          </motion.h2>

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

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            whileHover={{ scale: 1.05, backgroundColor: '#2563eb' }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
          <motion.div
            className="mt-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <a
              href="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </a>
          </motion.div>
        </motion.form>
      </motion.div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Login;
