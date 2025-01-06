import React from "react";
import { IoIosHome } from "react-icons/io";
import { GiTeacher } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { RiParentFill } from "react-icons/ri";
import { MdSubject } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { MdPlayLesson } from "react-icons/md";
import { PiExamFill } from "react-icons/pi";
import { MdAssignmentAdd } from "react-icons/md";
import { FaPercentage } from "react-icons/fa";
import { SiBasicattentiontoken } from "react-icons/si";
import { MdEmojiEvents } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Asidebar = () => {
  return (
    <div>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-[16%] h-full transition-transform -translate-x-full sm:translate-x-0"
        
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-[#111827]">
          {/* Image at the top */}
          <div className="flex justify-center mb-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP9AOAqkxYFbQtx1FNioHnxxevj8h4vLfaZg&s"
              alt="Logo"
              className="w-21 h-21 object-cover rounded-full"
            />
          </div>

          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                to="/home"
                className="flex items-center p-2 mt-10 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <IoIosHome />
                <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lists/teachers"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <GiTeacher />
                <span className="flex-1 ms-3 whitespace-nowrap">Teachers</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lists/students"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <PiStudentBold />
                <span className="flex-1 ms-3 whitespace-nowrap">Students</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lists/parents"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <RiParentFill />
                <span className="flex-1 ms-3 whitespace-nowrap">Parents</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/subjects"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MdSubject />
                <span className="flex-1 ms-3 whitespace-nowrap">Subjects</span>
              </NavLink>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <SiGoogleclassroom />
                <span className="flex-1 ms-3 whitespace-nowrap">Classes</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MdPlayLesson />
                <span className="flex-1 ms-3 whitespace-nowrap">Lessons</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <PiExamFill />
                <span className="flex-1 ms-3 whitespace-nowrap">Exams</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MdAssignmentAdd />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Assignments
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaPercentage />
                <span className="flex-1 ms-3 whitespace-nowrap">Results</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <SiBasicattentiontoken />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Attendance
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MdEmojiEvents />
                <span className="flex-1 ms-3 whitespace-nowrap">Events</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <RiMessage2Fill />
                <span className="flex-1 ms-3 whitespace-nowrap">Messages</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Asidebar;
