// SubjectList.jsx
import React from "react";

const studentsData = [
  { id: "ST123456", name: "John Doe", class: "Grade 3", subjects: ["Mathematics", "Science", "English"] },
  { id: "ST123457", name: "Alice Smith", class: "Grade 2", subjects: ["History", "Art", "Music"] },
  { id: "ST123458", name: "James Brown", class: "Grade 4", subjects: ["Physics", "Chemistry", "Biology"] },
  { id: "ST123459", name: "Emma White", class: "Grade 5", subjects: ["Computer Science", "Mathematics", "English"] },
  { id: "ST123460", name: "Oliver Johnson", class: "Grade 3", subjects: ["English", "Art", "Music"] },
  { id: "ST123461", name: "Sophia Williams", class: "Grade 1", subjects: ["Mathematics", "Reading", "Arts"] },
  { id: "ST123462", name: "Liam Taylor", class: "Grade 2", subjects: ["Science", "History", "Geography"] },
  { id: "ST123463", name: "Mason Clark", class: "Grade 3", subjects: ["Mathematics", "English", "Physical Education"] },
  { id: "ST123464", name: "Isabella Martinez", class: "Grade 4", subjects: ["Biology", "Chemistry", "History"] },
  { id: "ST123465", name: "Ethan Davis", class: "Grade 5", subjects: ["Computer Science", "English", "Mathematics"] },
  { id: "ST123466", name: "Harper Gonzalez", class: "Grade 3", subjects: ["Art", "Music", "Science"] },
  { id: "ST123467", name: "Aiden Harris", class: "Grade 1", subjects: ["Mathematics", "Science", "English"] },
  { id: "ST123468", name: "Jackson Lewis", class: "Grade 4", subjects: ["History", "Physics", "Music"] },
  { id: "ST123469", name: "Amelia Young", class: "Grade 2", subjects: ["Geography", "Art", "History"] },
  { id: "ST123470", name: "Lucas Allen", class: "Grade 3", subjects: ["Mathematics", "Reading", "Science"] },
  { id: "ST123471", name: "Mia Wright", class: "Grade 5", subjects: ["English", "History", "Computer Science"] },
  { id: "ST123472", name: "Benjamin King", class: "Grade 2", subjects: ["Science", "History", "Physical Education"] },
  { id: "ST123473", name: "Charlotte Scott", class: "Grade 4", subjects: ["Mathematics", "Chemistry", "Art"] },
  { id: "ST123474", name: "Amos Thomas", class: "Grade 5", subjects: ["Geography", "Music", "Science"] },
  { id: "ST123475", name: "Zoe Jackson", class: "Grade 3", subjects: ["English", "Mathematics", "Art"] }
];

const SubjectList = () => {
  return (
    <div className="container mx-auto p-6 text-white mb-28">
      <h2 className="text-3xl font-bold text-center mb-6">Students and their Subjects</h2>
      <table className="min-w-full border border-gray-300 bg-[#1E1E1E]">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Student ID</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Class</th>
            <th className="px-4 py-2 border">Subjects</th>
          </tr>
        </thead>
        <tbody>
          {studentsData.map((student) => (
            <tr key={student.id}>
              <td className="px-4 py-2 border">{student.id}</td>
              <td className="px-4 py-2 border">{student.name}</td>
              <td className="px-4 py-2 border">{student.class}</td>
              <td className="px-4 py-2 border">
                {student.subjects.join(", ")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubjectList;
