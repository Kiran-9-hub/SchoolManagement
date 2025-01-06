import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { calenderEvents } from '../../libs/calenderEvents'




const localizer = momentLocalizer(moment)


const StudentBigCalendar = (props) => {
    return (
        <Calendar
            localizer={localizer}
            events={calenderEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ minHeight: "700px" }}
        // views={["day", "week"]}
        />
    )
}

export default StudentBigCalendar