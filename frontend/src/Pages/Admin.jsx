import Attendancechart from "../components/Attendancechart/Attendancechart";
import CountRadialChart from "../components/countradialchart/CountRadialChart";
import EventCalender from "../components/EventCalender/EventCalender";
import FinanceGraphChart from "../components/FinanceGraph/FinanceGraphChart";
import HeadCounts from "../components/headcount/HeadCounts";

function Admin() {
    return (
        <div className="flex flex-col items-center justify-between min-h-screen pb-28 bg-gray-100">
            {/* Main Content Section */}
            <div className="flex w-full p-4  gap-4">
                {/* Left Section: Cards, Charts, and Financial Graph */}
                <div className="flex flex-col gap-4 w-[75%]">
                    {/* Cards */}
                    <div className="flex gap-4">
                        <div className="p-2 bg-blue-500 rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105">
                            <HeadCounts type="Students" count="200" />
                        </div>
                        <div className="p-2 bg-green-500 rounded-lg shadow-lg transition-all duration-300 hover:bg-green-700 hover:scale-105">
                            <HeadCounts type="Teachers" count="20" />
                        </div>
                        <div className="p-2 bg-yellow-500 rounded-lg shadow-lg transition-all duration-300 hover:bg-yellow-700 hover:scale-105">
                            <HeadCounts type="Subjects" count="10" />
                        </div>
                        <div className="p-2 bg-red-500 rounded-lg shadow-lg transition-all duration-300 hover:bg-red-700 hover:scale-105">
                            <HeadCounts type="Staffs" count="35" />
                        </div>
                    </div>

                    {/* Charts */}
                    <div className="flex gap-4">
                        <div className="w-[50%] hover:scale-[1.05] transition-all duration-300 cursor-pointer bg-white rounded-lg shadow-lg p-4">
                            <CountRadialChart />
                        </div>
                        <div className="w-[50%] hover:scale-[1.05] transition-all duration-300 cursor-pointer bg-white rounded-lg shadow-lg p-4">
                            <Attendancechart />
                        </div>
                    </div>

                    {/* Financial Graph */}
                    <div className="w-full bg-white rounded-md shadow-md p-6 min-h-[300px] max-h-[500px] overflow-hidden">
                        <FinanceGraphChart />
                    </div>
                </div>

                {/* Right Section: Calendar and Events */}
                <div className="w-[25%] bg-white rounded-lg shadow-xl p-4">
                    <EventCalender />
                </div>
            </div>
        </div>
    );
}

export default Admin;
