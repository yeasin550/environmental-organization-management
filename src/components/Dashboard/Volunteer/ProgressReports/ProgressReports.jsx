
import { LuUsers } from 'react-icons/lu';
import { FaAward, FaBell, FaCalendar, FaChevronRight, FaClock, FaFilter, FaMapPin, FaUsers } from 'react-icons/fa6';
import { AiFillFileText } from 'react-icons/ai';
import { FaCalendarAlt, FaCheckCircle, FaSearch } from 'react-icons/fa';



const progressReports = [
    {
        id: 6,
        title: "Beach Cleanup Initiative",
        date: "March 28, 2025",
        hoursContributed: 5,
        peopleImpacted: 230,
        feedback: "Great work organizing the volunteers!",
        highlights: [
            "Collected 45 kg of plastic waste",
            "Educated 20 bystanders about marine pollution"
        ]
    },
    {
        id: 7,
        title: "Homeless Shelter Dinner Service",
        date: "April 2, 2025",
        hoursContributed: 3,
        peopleImpacted: 87,
        feedback: "Your cooking skills made a huge difference!",
        highlights: [
            "Prepared 90 nutritious meals",
            "Organized donation of leftover supplies"
        ]
    }
]

const ProgressReports = () => {
    return (
        <div className="space-y-6">
            <div className=" bg-gray-50">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    <div className="container mx-auto px-4 py-6">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                                    <LuUsers className="h-6 w-6" />
                                </div>
                                <h1 className="text-2xl font-bold">Progress Reports</h1>
                            </div>

                            <button className="text-white font-medium flex items-center cursor-pointer">
                                View All Reports
                                <FaChevronRight className="h-4 w-4 ml-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 px-6">
                {progressReports.map(report => (
                    <div key={report.id} className="bg-white rounded-md border shadow-lg overflow-hidden">
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold">{report.title}</h3>
                                    <p className="text-gray-500">{report.date}</p>
                                </div>
                                <div className="bg-blue-50 rounded-full p-3 border">
                                    <AiFillFileText className="h-6 w-6 text-blue-500" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div className="bg-green-50 rounded-lg p-4 flex items-center border">
                                    <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3 border">
                                        <FaClock className="h-5 w-5 text-green-500" />
                                    </div>
                                    <div>
                                        <p className=" text-green-500 font-medium">Hours Contributed</p>
                                        <p className="text-lg font-bold text-gray-800">{report.hoursContributed} hrs</p>
                                    </div>
                                </div>

                                <div className="bg-blue-50 rounded-lg p-4 flex items-center border">
                                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 border">
                                        <FaUsers className="h-5 w-5 text-blue-500" />
                                    </div>
                                    <div>
                                        <p className=" text-blue-500 font-medium">People Impacted</p>
                                        <p className="text-lg font-bold text-gray-800">{report.peopleImpacted}</p>
                                    </div>
                                </div>

                                <div className="bg-purple-50 rounded-lg p-4 flex items-center border">
                                    <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-3 border" >
                                        <FaAward className="h-5 w-5 text-purple-500" />
                                    </div>
                                    <div>
                                        <p className=" text-purple-500 font-medium">Achievement</p>
                                        <p className="text-lg font-bold text-gray-800">Level 3</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <h4 className="font-semibold mb-2 text-gray-700">Highlights</h4>
                                <ul className="pl-5 space-y-1">
                                    {report.highlights.map((highlight, index) => (
                                        <li key={index} className="text-gray-600 flex items-start">
                                            <FaCheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-sm border">
                                <h4 className="font-semibold mb-2 text-gray-700">Feedback</h4>
                                <p className="text-gray-600 italic">"{report.feedback}"</p>
                            </div>

                            <div className="mt-4 flex justify-end">
                                <button className="px-4 py-2 bg-white border border-gray-700 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors">
                                    Download Report
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ProgressReports;