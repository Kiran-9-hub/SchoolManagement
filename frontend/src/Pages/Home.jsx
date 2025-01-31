import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const typingVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const Home = () => {
  const text = "Empowering Schools to Focus on What Matters Most–Education";

  return (
    <div className="container mx-auto p-6 text-white bg-[#1E1E1E] h-screen relative mb-32">
      <div className="relative h-full">
        <img
          src="https://wallpapers.com/images/featured/school-background-fvzmkdcjswmjz5y7.jpg"
          alt="school img"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-black bg-opacity-60 backdrop-blur-sm flex flex-col">
          {/* Header Content */}
          <div className="text-center py-10 px-6">
            <motion.h1
              className="text-5xl font-extrabold leading-tight"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={typingVariants}
            >
              {text.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              className="mt-6 font-medium text-lg text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: text.length * 0.1 + 0.5, duration: 1 }}
            >
              A simple school management system where you can view students, subjects, and more.
            </motion.p>
          </div>
          {/* Cards Section */}
          <div className="flex-grow flex items-center justify-center px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <NavLink
                to="/login"
                className="bg-gradient-to-br from-red-500 to-red-700 p-8 rounded-lg text-center shadow-lg transform hover:scale-105 transition duration-300 hover:shadow-2xl"
              >
                <h1 className="text-2xl font-bold mb-4">Admin</h1>
                <p className="text-gray-100">
                  Manage school operations and oversee all activities efficiently.
                </p>
              </NavLink>
              <NavLink
                to="/login"
                className="bg-gradient-to-br from-blue-500 to-blue-700 p-8 rounded-lg text-center shadow-lg transform hover:scale-105 transition duration-300 hover:shadow-2xl"
              >
                <h2 className="text-2xl font-bold mb-4">Teacher</h2>
                <p className="text-gray-100">
                  Manage students, subjects, and grades with ease.
                </p>
              </NavLink>
              <NavLink
                to="/login"
                className="bg-gradient-to-br from-green-500 to-green-700 p-8 rounded-lg text-center shadow-lg transform hover:scale-105 transition duration-300 hover:shadow-2xl"
              >
                <h2 className="text-2xl font-bold mb-4">Student</h2>
                <p className="text-gray-100">
                  Access your subjects, grades, and school notices seamlessly.
                </p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
