import React, { useEffect, useState } from "react";
import axios from 'axios';
import { FaRegEye, FaSearch } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdOptions } from "react-icons/io";
import { FaArrowDownShortWide } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";

function TeachersList() {
  const [teachersData, setTeachersData] = useState([]);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token"); // Retrieve token from localStorage
      console.log("Retrieved token:", token);
      if (!token) {
        console.error("No token found. Please log in.");
        return;
      }

      try {
        const response = await axios.get("http://127.0.0.1:5000/admin/all/teacher", {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });
        setTeachersData(response.data.teachers);
      } catch (error) {
        console.error("Error fetching teachers:", error.response?.data || error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto bg-[#1E1E1E] p-6 rounded-lg shadow-lg mb-32">
      {/* Headers */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-white">All Teachers</h1>
        <div className="flex gap-4 mt-4 sm:mt-0 items-center">
          {/* Search Bar */}
          <div className="relative flex items-center">
            <FaSearch className="absolute left-3 text-slate-500 text-xl" />
            <input
              type="search"
              className="pl-10 pr-4 py-2 bg-[#2A2A2A] text-white rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none w-64"
              placeholder="Search teachers..."
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
            <button className="h-10 w-10 flex justify-center items-center bg-purple-500 text-white rounded-full hover:bg-purple-600 transition">
              <IoMdAdd
                className="text-2xl"
                onClick={() => document.getElementById("my_modal_3").showModal()}
              />
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
                Add a New Teacher
              </h3>
              <form className="space-y-6">
                {/* Username, Email, Password */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-white">Username</label>
                    <input type="text" className="w-full border bg-white placeholder:text-black border-gray-300 rounded-md p-2 text-black" placeholder="Enter Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-white">Email</label>
                    <input type="email" className="w-full border placeholder:text-black bg-white border-gray-300 rounded-md p-2 text-black" placeholder="Enter email" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-white">Password</label>
                    <input type="password" className="w-full border placeholder:text-black bg-white border-gray-300 rounded-md p-2 text-black" placeholder="Enter password" />
                  </div>
                </div>

                {/* First Name, Last Name, Phone */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
                  <div>
                    <label className="block text-sm font-medium mb-1">First Name</label>
                    <input type="text" className="w-full border placeholder:text-black bg-white border-gray-300 rounded-md p-2 text-black" placeholder="Enter First Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Last Name</label>
                    <input type="text" className="w-full border placeholder:text-black bg-white border-gray-300 rounded-md p-2 text-black" placeholder="Enter Last Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <input type="tel" className="w-full border placeholder:text-black bg-white border-gray-300 rounded-md p-2 text-black" placeholder="Enter Number" />
                  </div>
                </div>

                {/* Address, Blood Group, Birthday */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
                  <div>
                    <label className="block text-sm font-medium mb-1">Address</label>
                    <textarea className="w-full border placeholder:text-black bg-white border-gray-300 rounded-md p-2 text-black" placeholder="Enter Address"></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-white">Blood Group</label>
                    <input type="text" className="w-full border placeholder:text-black bg-white border-gray-300 rounded-md p-2 text-black" placeholder="Enter Bgroup" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-white">Birthday</label>
                    <input type="date" className="w-full border text-black bg-white border-gray-300 rounded-md p-2" />
                  </div>
                </div>

                {/* Gender, Upload Photo */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-white">Gender</label>
                    <select className="w-full border border-gray-300 rounded-md p-2 bg-white text-black">
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1 text-white">Upload File</label>
                    <div className="flex items-center gap-4">
                      <label htmlFor="file-upload" className="cursor-pointer bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                        <FaCloudUploadAlt className="inline-block mr-2 text-xl" />
                        Choose
                      </label>
                    </div>
                    <input id="file-upload" type="file" className="hidden" />
                  </div>
                </div>

                {/* Create Button */}
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                  Create
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
            <th className="px-4 py-2">Classes</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachersData.map((teacher) => (
            <tr key={teacher.id} className="hover:bg-[#323232] transition duration-150">
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      {/* <img src={teacher.photo} alt="profile pic" /> */}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{teacher.name}</div>
                    <div className="text-sm opacity-50">{teacher.email}</div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3">{teacher.phone}</td>
              <td className="px-4 py-3">{teacher.subjects.join(", ")}</td>
              <td className="px-4 py-3">{teacher.classes.join(", ")}</td>
              <td className="px-4 py-3">{teacher.address}</td>
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

export default TeachersList;
