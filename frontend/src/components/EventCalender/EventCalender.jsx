import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function EventCalender() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="flex flex-col gap-4">
      {/* Calendar */}
      <Calendar onChange={onChange} value={value} />

      {/* Events Section */}
      <div>
        <div className="flex justify-between items-center h-20">
          <h1 className="text-2xl font-semibold text-center ml-10">Upcoming Events</h1>
        </div>
        <div className="overflow-y-auto max-h-72 p-2 border rounded-md bg-white shadow-md">
          {/* Event 1 */}
          <div className="border-2 min-h-28 border-t-4 border-t-blue-400 flex flex-col gap-2 p-3 mb-2 rounded-md">
            <div className="flex justify-between">
              <h1 className="font-semibold text-xl">Annual Sports</h1>
              <p className="text-xs text-gray-400">10:00AM - 4:00PM</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                Join us for an exciting day of sports and activities. Parents and students are welcome to attend.
              </p>
            </div>
          </div>

          {/* Event 2 */}
          <div className="border-2 min-h-28 border-t-4 border-t-green-400 flex flex-col gap-2 p-3 mb-2 rounded-md">
            <div className="flex justify-between">
              <h1 className="font-semibold text-xl">Science Exhibition</h1>
              <p className="text-xs text-gray-400">9:00AM - 2:00PM</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                Students will showcase innovative science projects. Don't miss the robotics demo at noon!
              </p>
            </div>
          </div>

          {/* Event 3 */}
          <div className="border-2 min-h-28 border-t-4 border-t-red-400 flex flex-col gap-2 p-3 mb-2 rounded-md">
            <div className="flex justify-between">
              <h1 className="font-semibold text-xl">Art Competition</h1>
              <p className="text-xs text-gray-400">1:00PM - 3:00PM</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                Participate in our annual art competition. Prizes will be awarded for creativity and originality.
              </p>
            </div>
          </div>

          {/* Event 4 */}
          <div className="border-2 min-h-28 border-t-4 border-t-yellow-400 flex flex-col gap-2 p-3 mb-2 rounded-md">
            <div className="flex justify-between">
              <h1 className="font-semibold text-xl">Parent-Teacher Meeting</h1>
              <p className="text-xs text-gray-400">10:00AM - 12:00PM</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">
                A meeting to discuss student progress and academic performance. All parents are encouraged to attend.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Announcements Section */}
      <div>
        <div className="flex justify-between items-center mt-5 ">
          <h1 className="text-2xl font-semibold text-center ml-10">Announcements</h1>
        </div>
        <div className="overflow-y-auto max-h-72 p-2 border rounded-md bg-white shadow-md mt-6">
          {/* Announcement 1 */}
          <div className="bg-green-300 rounded-md p-3 mb-2">
            <div className="flex justify-between">
              <h1 className="font-semibold text-xl">Semester Start</h1>
              <p className="text-xs text-gray-800">Show all</p>
            </div>
            <div>
              <p className="text-sm">
                The new semester begins on January 15th. Please check the updated timetable on the school portal.
              </p>
            </div>
          </div>

          {/* Announcement 2 */}
          <div className="bg-pink-300 rounded-md p-3 mb-2">
            <div className="flex justify-between">
              <h1 className="font-semibold text-xl">Assignment Deadline</h1>
              <p className="text-xs text-gray-800">Show all</p>
            </div>
            <div>
              <p className="text-sm">
                Submit all assignments by next Friday. Late submissions will not be accepted.
              </p>
            </div>
          </div>

          {/* Announcement 3 */}
          <div className="bg-red-300 rounded-md p-3 mb-2">
            <div className="flex justify-between">
              <h1 className="font-semibold text-xl">Orientation Program</h1>
              <p className="text-xs text-gray-800">Show all</p>
            </div>
            <div>
              <p className="text-sm">
                Orientation for new students and parents will be held on February 5th at 10:00AM in the school auditorium.
              </p>
            </div>
          </div>

          {/* Announcement 4 */}
          <div className="bg-blue-300 rounded-md p-3 mb-2">
            <div className="flex justify-between">
              <h1 className="font-semibold text-xl">Library Updates</h1>
              <p className="text-xs text-gray-800">Show all</p>
            </div>
            <div>
              <p className="text-sm">
                The library will now be open from 8:00AM to 6:00PM starting next Monday.
              </p>
            </div>
          </div>

          {/* Announcement 5 */}
          <div className="bg-yellow-300 rounded-md p-3 mb-2">
            <div className="flex justify-between">
              <h1 className="font-semibold text-xl">Holiday </h1>
              <p className="text-xs text-gray-800">Show all</p>
            </div>
            <div>
              <p className="text-sm">
                The school will remain closed on January 26th for Republic Day. Enjoy the holiday!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCalender;
