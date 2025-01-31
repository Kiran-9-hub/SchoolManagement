import { CiMenuKebab } from "react-icons/ci";
import { motion } from "framer-motion";
import StudentBigCalendar from "../components/studentBigcalender/StudentBigCalender";
import EventCalender from "../components/EventCalender/EventCalender";

function Teachers() {
  return (
    <div className="min-h-[70vh] bg-gradient-to-br from-blue-50 to-slate-100 w-full flex flex-col lg:flex-row gap-6 mb-36 p-6">
      {/* Schedule Classes Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="bg-white shadow-lg rounded-lg lg:w-2/3 p-6 flex flex-col gap-6 border-t-4 border-blue-500"
      >
        {/* Title */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-blue-600">Schedule Classes</h1>
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
          >
            <CiMenuKebab className="rotate-90 text-4xl text-gray-500 cursor-pointer" />
          </motion.div>
        </div>
        {/* Calendar */}
        <div className="w-full">
          <StudentBigCalendar />
        </div>
      </motion.div>

      {/* Events and Updates Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
        className="bg-white shadow-lg rounded-lg lg:w-1/3 p-6 flex flex-col gap-4 border-t-4 border-green-500"
      >
        <h2 className="text-xl font-semibold text-green-600">Events and Updates</h2>
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-gray-50 p-4 rounded-md shadow-md border border-gray-200 hover:bg-gray-100"
        >
          <EventCalender />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Teachers;
