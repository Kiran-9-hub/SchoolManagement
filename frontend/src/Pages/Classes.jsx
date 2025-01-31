import React, { useState } from "react";

const StudentList = () => {
  const [sections] = useState([
    {
      section: "A",
      classroom: "Room 101",
      timings: "9:00 AM - 3:00 PM",
      classTeacher: { name: "Mr. John", email: "john@example.com" },
      subjects: ["Math", "Science", "History"],
      subjectTeachers: [
        { subject: "Math", teacher: "Ms. Smith" },
        { subject: "Science", teacher: "Mr. Brown" },
        { subject: "History", teacher: "Ms. Davis" },
      ],
      students: [
        { id: 1, name: "Alice Johnson", rollNo: 1, grade: "A", attendance: "95%" },
        { id: 2, name: "Bob Smith", rollNo: 2, grade: "B+", attendance: "89%" },
        { id: 3, name: "Charlie Brown", rollNo: 3, grade: "A-", attendance: "92%" },
      ],
    },
    {
      section: "B",
      classroom: "Room 102",
      timings: "10:00 AM - 4:00 PM",
      classTeacher: { name: "Ms. Emily", email: "emily@example.com" },
      subjects: ["English", "Geography", "Physics"],
      subjectTeachers: [
        { subject: "English", teacher: "Ms. Green" },
        { subject: "Geography", teacher: "Mr. Clark" },
        { subject: "Physics", teacher: "Dr. White" },
      ],
      students: [
        { id: 4, name: "Daisy Miller", rollNo: 1, grade: "A+", attendance: "98%" },
        { id: 5, name: "Ethan Taylor", rollNo: 2, grade: "B", attendance: "87%" },
        { id: 6, name: "Fiona Davis", rollNo: 3, grade: "A", attendance: "94%" },
      ],
    },
    {
        section: "C",
        classroom: "Room 103",
        timings: "2:00 AM - 3:00 PM",
        classTeacher: { name: "Mr. John", email: "john@example.com" },
        subjects: ["Math", "Science", "History"],
        subjectTeachers: [
          { subject: "Math", teacher: "Ms. Smith" },
          { subject: "Science", teacher: "Mr. Brown" },
          { subject: "History", teacher: "Ms. Davis" },
        ],
        students: [
          { id: 1, name: "Alice Johnson", rollNo: 1, grade: "A", attendance: "95%" },
          { id: 2, name: "Bob Smith", rollNo: 2, grade: "B+", attendance: "89%" },
          { id: 3, name: "Charlie Brown", rollNo: 3, grade: "A-", attendance: "92%" },
        ],
      },
      {
        section: "D",
        classroom: "Room 104",
        timings: "11:00 AM - 12:00 PM",
        classTeacher: { name: "Ms. Emily", email: "emily@example.com" },
        subjects: ["English", "Geography", "Physics"],
        subjectTeachers: [
          { subject: "English", teacher: "Ms. Green" },
          { subject: "Geography", teacher: "Mr. Clark" },
          { subject: "Physics", teacher: "Dr. White" },
        ],
        students: [
          { id: 4, name: "Daisy Miller", rollNo: 1, grade: "A+", attendance: "98%" },
          { id: 5, name: "Ethan Taylor", rollNo: 2, grade: "B", attendance: "87%" },
          { id: 6, name: "Fiona Davis", rollNo: 3, grade: "A", attendance: "94%" },
        ],
      },
      
  ]);

  return (
    <div className="p-6 mb-32">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">School Sections</h1>
      {sections.map((section, index) => (
        <div key={index} className="mb-8 border border-gray-300 rounded-lg p-4 shadow-lg bg-black bg-opacity-10">
          <h2 className="text-xl font-bold text-white mb-2">Section: {section.section}</h2>
          <p className="mb-2 text-white">
            <strong>Classroom:</strong> {section.classroom}
          </p>
          <p className="mb-2 text-white">
            <strong>Timings:</strong> {section.timings}
          </p>
          <p className="mb-2 text-white">
            <strong>Class Teacher:</strong> {section.classTeacher.name} (
            <a href={`mailto:${section.classTeacher.email}`} className="text-blue-500 underline">
              {section.classTeacher.email}
            </a>
            )
          </p>
          <p className="mb-4 text-white">
            <strong>Subjects Offered:</strong> {section.subjects.join(", ")}
          </p>

          <h3 className="text-lg font-semibold text-white mb-2">Subject Teachers</h3>
          <ul className="mb-4 list-disc list-inside text-white">
            {section.subjectTeachers.map((teacher, idx) => (
              <li key={idx}>
                <strong>{teacher.subject}:</strong> {teacher.teacher}
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold text-white mb-2">Students</h3>
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-blue-100 text-left text-black">
                <th className="py-2 px-4 border-b border-gray-300">Roll No</th>
                <th className="py-2 px-4 border-b border-gray-300">Name</th>
                <th className="py-2 px-4 border-b border-gray-300">Grade</th>
                <th className="py-2 px-4 border-b border-gray-300">Attendance</th>
              </tr>
            </thead>
            <tbody>
              {section.students.map((student) => (
                <tr
                  key={student.id}
                  className="even:bg-gray-100 odd:bg-white hover:bg-gray-200 text-black"
                >
                  <td className="py-2 px-4 border-b border-gray-300">
                    {student.rollNo}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    {student.name}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    {student.grade}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    {student.attendance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
