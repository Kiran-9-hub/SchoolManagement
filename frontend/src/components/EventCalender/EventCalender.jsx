import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function EventCalender() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="flex flex-col gap-4">
      {/* Calendar */}
      <Calendar onChange={onChange} value={value} />

      <h1 className="text-2xl font-semibold text-center text-green-600">
        Selected Date: {value.toDateString()}
      </h1>

      {/* Events Section */}
      <div>
        <div className="flex justify-between items-center h-20">
          <h1 className="text-2xl font-semibold text-center text-green-600">Upcoming Events</h1>
        </div>
        <div className="overflow-y-auto max-h-72 p-2 border rounded-md bg-white shadow-md text-black">
          {/* Event 1 */}
          <div className="border-2 min-h-28 border-t-4 border-t-blue-400 flex flex-col gap-2 p-3 mb-2 rounded-md">
            <div className="flex justify-between">
              <h1 className="font-semibold text-xl ">Annual Sports</h1>
              <p className="text-xs text-black">10:00AM - 4:00PM</p>
            </div>
            <div>
              <p className="text-sm text-gray-900">
                Join us for an exciting day of sports and activities. Parents and students are welcome to attend.
              </p>
            </div>
          </div>

          {/* Event 2 */}
          <div className="border-2 min-h-28 border-t-4 border-t-green-400 flex flex-col gap-2 p-3 mb-2 rounded-md">
            <div className="flex justify-between">
              <h1 className="font-semibold text-xl">Science Exhibition</h1>
              <p className="text-xs text-gray-900">9:00AM - 2:00PM</p>
            </div>
            <div>
              <p className="text-sm text-gray-900">
                Students will showcase innovative science projects. Don't miss the robotics demo at noon!
              </p>
            </div>
          </div>

          {/* Event 3 */}
          <div className="border-2 min-h-28 border-t-4 border-t-red-400 flex flex-col gap-2 p-3 mb-2 rounded-md">
            <div className="flex justify-between">
              <h1 className="font-semibold text-xl">Art Competition</h1>
              <p className="text-xs text-gray-900">1:00PM - 3:00PM</p>
            </div>
            <div>
              <p className="text-sm text-gray-900">
                Participate in our annual art competition. Prizes will be awarded for creativity and originality.
              </p>
            </div>
          </div>

          {/* Event 4 */}
          <div className="border-2 min-h-28 border-t-4 border-t-yellow-400 flex flex-col gap-2 p-3 mb-2 rounded-md">
            <div className="flex justify-between">
              <h1 className="font-semibold text-xl">Parent-Teacher Meeting</h1>
              <p className="text-xs text-gray-900">10:00AM - 12:00PM</p>
            </div>
            <div>
              <p className="text-sm text-gray-900">
                A meeting to discuss student progress and academic performance. All parents are encouraged to attend.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Announcements Section */}
      <div>
        <div className="flex justify-between items-center mt-5 ">
          <h1 className="text-2xl font-semibold text-center text-green-600">Announcements</h1>
        </div>
        <div className="overflow-y-auto max-h-72 p-2 border rounded-md bg-white shadow-md mt-6">
          {/* Announcement 1 */}
          <div className="bg-green-300 rounded-md p-3 mb-2">
            <div className="flex justify-between text-black">
              <h1 className="font-semibold text-xl text-black">Semester Start</h1>
              <p className="text-xs text-gray-800">Show all</p>
            </div>
            <div>
              <p className="text-sm text-black">
                The new semester begins on January 15th. Please check the updated timetable on the school portal.
              </p>
            </div>
          </div>

          {/* Announcement 2 */}
          <div className="bg-pink-300 rounded-md p-3 mb-2">
            <div className="flex justify-between">
              <h1 className="font-semibold text-xl text-black">Assignment Deadline</h1>
              <p className="text-xs text-black">Show all</p>
            </div>
            <div>
              <p className="text-sm text-black">
                Submit all assignments by next Friday. Late submissions will not be accepted.
              </p>
            </div>
          </div>

          {/* Announcement 3 */}
          <div className="bg-red-300 rounded-md p-3 mb-2">
            <div className="flex justify-between">
              <h1 className="font-semibold text-xl text-black">Orientation Program</h1>
              <p className="text-xs text-black">Show all</p>
            </div>
            <div>
              <p className="text-sm text-black">
                Orientation for new students and parents will be held on February 5th at 10:00AM in the school auditorium.
              </p>
            </div>
          </div>

          {/* Announcement 4 */}
          <div className="bg-blue-300 rounded-md p-3 mb-2">
            <div className="flex justify-between">
              <h1 className="font-semibold text-xl text-black">Library Updates</h1>
              <p className="text-xs text-black">Show all</p>
            </div>
            <div>
              <p className="text-sm text-black">
                The library will now be open from 8:00AM to 6:00PM starting next Monday.
              </p>
            </div>
          </div>

          {/* Announcement 5 */}
          <div className="bg-yellow-300 rounded-md p-3 mb-2">
            <div className="flex justify-between">
              <h1 className="font-semibold text-xl text-black">Holiday </h1>
              <p className="text-xs text-black">Show all</p>
            </div>
            <div>
              <p className="text-sm text-black">
                The school will remain closed on January 26th for Republic Day. Enjoy the holiday!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Teachers Class Section in Table */}
      <div className="mt-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-center text-green-600">Teachers' Classes</h1>
        </div>
        <div className="overflow-y-auto max-h-72 p-2 border rounded-md bg-white shadow-md mt-6">
          <table className="w-full text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 text-sm font-semibold text-red-500">Class</th>
                <th className="p-2 text-sm font-semibold text-red-500">Time</th>
                <th className="p-2 text-sm font-semibold text-red-500">Details</th>
              </tr>
            </thead>
            <tbody>
              {/* Class 1 */}
              <tr className="border-b">
                <td className="p-2 text-sm text-black">Math Class</td>
                <td className="p-2 text-sm text-black">9:00AM - 10:30AM</td>
                <td className="p-2 text-sm text-black">
                  Join Mrs. Smith for an engaging Math session. This class will cover advanced algebra and calculus.
                </td>
              </tr>

              {/* Class 2 */}
              <tr className="border-b">
                <td className="p-2 text-sm text-black">Science Class</td>
                <td className="p-2 text-sm text-black">10:45AM - 12:00PM</td>
                <td className="p-2 text-sm text-black">
                  Mr. Johnson will be discussing physics and chemistry concepts with hands-on experiments.
                </td>
              </tr>

              {/* Class 3 */}
              <tr className="border-b">
                <td className="p-2 text-sm text-black">English Class</td>
                <td className="p-2 text-sm text-black">1:00PM - 2:30PM</td>
                <td className="p-2 text-sm text-black">
                  Mrs. Brown will cover modern literature and creative writing exercises in this class.
                </td>
              </tr>

              {/* Class 4 */}
              <tr className="border-b">
                <td className="p-2 text-sm text-black">History Class</td>
                <td className="p-2 text-sm text-black ">2:45PM - 4:00PM</td>
                <td className="p-2 text-sm text-black">
                  Mr. Lee will take you through an exploration of world history from the Renaissance to modern times.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EventCalender;
