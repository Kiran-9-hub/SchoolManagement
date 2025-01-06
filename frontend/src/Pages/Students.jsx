import React from "react";
import { CiMenuKebab } from "react-icons/ci";

// Components
import StudentBigCalendar from "../components/studentBigcalender/StudentBigCalender";
import EventCalender from "../components/EventCalender/EventCalender";

function Students() {
    return (
        <div className="min-h-[70vh] bg-slate-100 w-full flex flex-col lg:flex-row gap-4 px-4 py-6 mb-28">
            {/* Schedule Calendar Section */}
            <div className="bg-white shadow-md rounded-lg lg:w-2/3 p-4 flex flex-col">
                {/* Title Section */}
                <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-4">
                    <h1 className="text-2xl font-semibold text-gray-700">Schedule Classes</h1>
                    <CiMenuKebab className="rotate-90 text-3xl text-gray-500 cursor-pointer hover:text-gray-700" />
                </div>

                {/* Calendar Section */}
                <div className="flex-grow">
                    <StudentBigCalendar />
                </div>
            </div>

            {/* Events and Updates Section */}
            <div className="bg-white shadow-md rounded-lg lg:w-1/3 p-4 flex flex-col gap-4">
                {/* Events Section */}
                <div className="flex flex-col gap-2">
                    {/* <h2 className="text-xl font-semibold text-gray-700">Events</h2> */}
                    <div className="bg-gray-50 p-3 rounded-md shadow-sm border border-gray-200">
                        <EventCalender />
                    </div>
                </div>

                
            </div>
        </div>
    );
}

export default Students;
