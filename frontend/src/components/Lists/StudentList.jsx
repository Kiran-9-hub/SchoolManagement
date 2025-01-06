import React, { useState } from "react";
import { studentsData } from "../../libs/studentList";
import { FaRegEye, FaSearch } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdOptions } from "react-icons/io";
import { FaArrowDownShortWide } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";

function StudentList() {
  return (
    <div className="overflow-x-auto bg-[#1E1E1E] p-6 rounded-lg shadow-lg mb-32">
      {/* Headers */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-white">All Students</h1>
        <div className="flex gap-4 mt-4 sm:mt-0 items-center">
          {/* Search Bar */}
          <div className="relative flex items-center">
            <FaSearch className="absolute left-3 text-slate-500 text-xl" />
            <input
              type="search"
              className="pl-10 pr-4 py-2 bg-[#2A2A2A] text-white rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none w-64"
              placeholder="Search students..."
            />
          </div>
          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="h-10 w-10 flex justify-center items-center bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
              <IoMdOptions className="text-3xl" />
            </button>
            <button className="h-10 w-10 flex justify-center items-center bg-green-500 text-white rounded-full hover:bg-green-600 transition">
              <FaArrowDownShortWide className="text-3xl" />
            </button>
            <button
              className="h-10 w-10 flex justify-center items-center bg-purple-500 text-white rounded-full hover:bg-purple-600 transition"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              <IoMdAdd className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-[#2A2A2A] text-white">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-red-800 bg-red-400">
              ✕
            </button>
          </form>
          <div className="flex items-center justify-center bg-gray-900">
            <div className="p-6 bg-gray-800 shadow-md rounded-md w-full max-w-4xl">
              <h3 className="font-bold text-3xl mb-6 text-center text-gray-500">
                Add a New Student
              </h3>
              <form className="space-y-6">
                {/* Input Fields */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full border bg-white placeholder:text-black border-gray-300 rounded-md p-2 text-black"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full border placeholder:text-black bg-white border-gray-300 rounded-md p-2 text-black"
                      placeholder="Enter email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-white">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full border placeholder:text-black bg-white border-gray-300 rounded-md p-2 text-black"
                      placeholder="Enter phone"
                    />
                  </div>
                </div>

                {/* Gender and Address */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-white">
                      Address
                    </label>
                    <textarea
                      className="w-full border placeholder:text-black bg-white border-gray-300 rounded-md p-2 text-black"
                      placeholder="Enter address"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-white">
                      Gender
                    </label>
                    <select className="w-full border placeholder:text-black bg-white border-gray-300 rounded-md p-2 text-black">
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Subjects, Class, and File Upload */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-white">
                      Subjects
                    </label>
                    <input
                      type="text"
                      className="w-full border placeholder:text-black bg-white border-gray-300 rounded-md p-2 text-black"
                      placeholder="Enter subjects"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-white">
                      Class
                    </label>
                    <input
                      type="text"
                      className="w-full border placeholder:text-black bg-white border-gray-300 rounded-md p-2 text-black"
                      placeholder="Enter class"
                    />
                  </div>
                  <div>
  <label className="block text-sm font-medium mb-1 text-white">Upload File</label>
  <div className="flex items-center gap-4">
    <label
      htmlFor="file-upload"
      className="cursor-pointer bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
    >
      <FaCloudUploadAlt className="inline-block mr-2 text-xl" />
      Choose 
    </label>
    
  </div>
  <input
    id="file-upload"
    type="file"
    className="hidden"
   
  />
</div>

                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                  Add Student
                </button>
              </form>
            </div>
          </div>
        </div>
      </dialog>

      {/* Table */}
      <table className="table-auto w-full text-white">
        {/* Head */}
        <thead className="bg-[#2A2A2A] text-left">
          <tr>
            <th className="px-4 py-2">Info</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">Subjects</th>
            <th className="px-4 py-2">Class</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {studentsData.map((student) => (
            <tr
              key={student.studentId}
              className="hover:bg-[#323232] transition duration-150"
            >
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={student.photo} alt="profile pic" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{student.name}</div>
                    <div className="text-sm opacity-50">{student.email}</div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3">{student.phone}</td>
              <td className="px-4 py-3">{student.subjects.join(", ")}</td>
              <td className="px-4 py-3">{student.classes}</td>
              <td className="px-4 py-3">{student.address}</td>
              <td className="px-4 py-3">
                <div className="flex gap-2">
                  <button className="h-10 w-10 flex justify-center items-center bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
                    <FaRegEye className="text-2xl" />
                  </button>
                  <button className="h-10 w-10 flex justify-center items-center bg-red-500 text-white rounded-full hover:bg-red-600 transition">
                    <MdDelete className="text-2xl" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
