import React from 'react';
import {NavLink} from 'react-router-dom';
const Home = () => {
  return (
    <div className="container mx-auto p-6 text-white bg-[#1E1E1E] h-screen relative">
      <div className="relative h-full">
        <img
          src="https://wallpapers.com/images/featured/school-background-fvzmkdcjswmjz5y7.jpg"
          alt="school img"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-black bg-opacity-50 backdrop-blur-sm flex flex-col">
          {/* Header Content */}
          <div className="flex flex-col items-center justify-start py-10">
            <h1 className="text-4xl font-bold text-center"> 
            Empowering Schools to Focus on What Matters Most–Education
            </h1>
            <p className="text-center mt-4  font-semibold text-2xl">
            This is a simple school management system where you can view the list of students and their subjects.
            </p>
          </div>
          {/* Cards Section */}
          <div className="flex-grow flex items-center justify-center px-6 ">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer">
              <div className="bg-transparent p-6 rounded-lg text-center shadow-lg hover:shadow-2xl transition hover:bg-red-400 hover:bg-opacity-50">
                <h1 className="text-xl font-bold mb-4"> <NavLink to="/admin">Admin</NavLink></h1>
                <p>Manage school operations and oversee all activities efficiently.</p>
              </div>
              <div className="bg-transparent p-6 rounded-lg text-center shadow-lg hover:shadow-2xl transition hover:bg-red-400 hover:bg-opacity-50">
                <h2 className="text-xl font-bold mb-4"><NavLink to="/teachers">Teacher</NavLink></h2>
                <p>Manage students, subjects, and grades with ease.</p>
              </div>
              <div className="bg-transparent p-6 rounded-lg text-center shadow-lg hover:shadow-2xl transition hover:bg-red-400 hover:bg-opacity-50">
                <h2 className="text-xl font-bold mb-4"><NavLink to="/students">Student</NavLink></h2>
                <p>Access your subjects, grades, and school notices seamlessly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
