import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { calenderEvents } from '../../libs/calenderEvents';

const localizer = momentLocalizer(moment);

const TeacherBigCalendar = (props) => {
    return (
        <div className="calendar-container">
            <Calendar
                localizer={localizer}
                events={calenderEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ minHeight: "700px" }}
            />
            
            {/* Content Section Below Calendar */}
            <div className="calendar-info mt-6 p-4 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-semibold text-center text-green-600">Teacher Announcements</h2>
                <div className="mt-4 space-y-4">
                    {/* Teacher 1 */}
                    <div className="p-4 border-b">
                        <h3 className="font-semibold text-xl">Mrs. Smith - Math Teacher</h3>
                        <p className="text-sm text-gray-700">
                            Mrs. Smith will be conducting a special revision session for Algebra next Tuesday at 3:00 PM. Make sure to attend if you need help with your upcoming exams.
                        </p>
                    </div>

                    {/* Teacher 2 */}
                    <div className="p-4 border-b">
                        <h3 className="font-semibold text-xl">Mr. Johnson - Science Teacher</h3>
                        <p className="text-sm text-gray-700">
                            Mr. Johnson will be hosting a hands-on experiment session on Friday afternoon. All students enrolled in the Physics course are encouraged to participate.
                        </p>
                    </div>

                    {/* Teacher 3 */}
                    <div className="p-4 border-b">
                        <h3 className="font-semibold text-xl">Mrs. Brown - English Teacher</h3>
                        <p className="text-sm text-gray-700">
                            Mrs. Brown is organizing a creative writing workshop for interested students next Thursday. It will be a great opportunity to improve your writing skills.
                        </p>
                    </div>

                    {/* Teacher 4 */}
                    <div className="p-4 border-b">
                        <h3 className="font-semibold text-xl">Mr. Lee - History Teacher</h3>
                        <p className="text-sm text-gray-700">
                            Mr. Lee will have office hours for individual student consultations on Monday from 2:00 PM to 4:00 PM. Feel free to drop by with any questions regarding the course material.
                        </p>
                    </div>

                    {/* Teacher 5 */}
                    <div className="p-4">
                        <h3 className="font-semibold text-xl">Ms. Davis - Geography Teacher</h3>
                        <p className="text-sm text-gray-700">
                            Ms. Davis will be holding a geography field trip meeting this Wednesday at lunch. All students interested in the trip to the local museum should attend.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherBigCalendar;
