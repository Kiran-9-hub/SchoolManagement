import React, { useState, useEffect } from "react";
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
  const [userRole, setUserRole] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // On component mount, check if user is logged in and their role
  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("userRole");

    if (token && role) {
      setIsLoggedIn(true);
      setUserRole(role);
    }
  }, []);

  const adminLinks = [
    { to: "/lists/teachers", icon: <GiTeacher />, label: "Teachers" },
    { to: "/lists/students", icon: <PiStudentBold />, label: "Students" },
    { to: "/lists/parents", icon: <RiParentFill />, label: "Parents" },
    { to: "/subjects", icon: <MdSubject />, label: "Subjects" },
    { to: "/classes", icon: <SiGoogleclassroom />, label: "Classes" },
    { to: "/exams", icon: <PiExamFill />, label: "Exams" },
    { to: "/results", icon: <FaPercentage />, label: "Results" },
    { to: "/attendance", icon: <SiBasicattentiontoken />, label: "Attendance" },
    { to: "/events", icon: <MdEmojiEvents />, label: "Events" },
    { to: "/messages", icon: <RiMessage2Fill />, label: "Messages" }
  ];

  const teacherLinks = [
    { to: "/subjects", icon: <MdSubject />, label: "Subjects" },
    { to: "/classes", icon: <SiGoogleclassroom />, label: "Classes" },
    { to: "/lessons", icon: <MdPlayLesson />, label: "Lessons" },
    { to: "/exams", icon: <PiExamFill />, label: "Exams" },
    { to: "/results", icon: <FaPercentage />, label: "Results" },
    { to: "/attendance", icon: <SiBasicattentiontoken />, label: "Attendance" },
    { to: "/assignments", icon: <MdAssignmentAdd />, label: "Assignments" }
  ];

  const studentLinks = [
    { to: "/lessons", icon: <MdPlayLesson />, label: "Lessons" },
    { to: "/exams", icon: <PiExamFill />, label: "Exams" },
    { to: "/results", icon: <FaPercentage />, label: "Results" },
    { to: "/attendance", icon: <SiBasicattentiontoken />, label: "Attendance" },
    { to: "/assignments", icon: <MdAssignmentAdd />, label: "Assignments" }
  ];

  const commonLinks = [
    { to: "/home", icon: <IoIosHome />, label: "Home" }
  ];

  const renderLinks = () => {
    switch (userRole) {
      case "admin":
        return adminLinks;
      case "teacher":
        return teacherLinks;
      case "student":
        return studentLinks;
      default:
        return [];
    }
  };

  return (
    <div>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-[16%] h-full transition-transform -translate-x-full sm:translate-x-0"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-[#111827] border-r border-gray-200 dark:border-gray-800">
          {/* Image at the top */}
          <div className="flex justify-center mb-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP9AOAqkxYFbQtx1FNioHnxxevj8h4vLfaZg&s"
              alt="Logo"
              className="w-21 h-21 object-cover rounded-full"
            />
          </div>

          <ul className="space-y-2 font-medium">
            {/* Always visible links */}
            {commonLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className="flex items-center p-2 mt-10 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {link.icon}
                  <span className="flex-1 ms-3 whitespace-nowrap">{link.label}</span>
                </NavLink>
              </li>
            ))}

            {/* Conditional Links based on the login state and role */}
            {isLoggedIn && renderLinks().map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {link.icon}
                  <span className="flex-1 ms-3 whitespace-nowrap">{link.label}</span>
                </NavLink>
              </li>
            ))}

            {/* Links visible when not logged in */}
            <ul>
  {/* Conditional rendering of the "About" menu item */}
  {!isLoggedIn && (
    <li>
      <NavLink
        to="/about"
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <MdAssignmentAdd />
        <span className="flex-1 ms-3 whitespace-nowrap">About</span>
      </NavLink>
    </li>
  )}

  {/* Static "About" menu item (visible regardless of login state) */}
  <li>
    <NavLink
      to="/contact"
      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-400 group "
    >
      <MdAssignmentAdd />
      <span className="flex-1 ms-3 whitespace-nowrap">Contact</span>
    </NavLink>
  </li>
</ul>

          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Asidebar;
