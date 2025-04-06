
import { FaMapPin, FaUsers } from 'react-icons/fa6';
import { FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

const assignedEvents = [
    {
        id: 4,
        title: "Youth Mentorship Session",
        date: "April 10, 2025",
        time: "4:00 PM - 6:00 PM",
        location: "City Library",
        role: "Mentor",
        progress: 70,
        category: "Education"
    },
    {
        id: 5,
        title: "Animal Shelter Assistance",
        date: "April 25, 2025",
        time: "9:00 AM - 1:00 PM",
        location: "Happy Paws Shelter",
        role: "Animal Handler",
        progress: 20,
        category: "Animal Welfare"
    }
];

const MyAssignedEvents = () => {
    return (
        <div className="space-y-6 p-5">
            <h2 className="text-2xl font-bold text-gray-800">My Assigned Events</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {assignedEvents.map(event => (
                    <div key={event.id} className="bg-white rounded-md hover:shadow-lg overflow-hidden border relative">
                        {/* Category Badge - Top Right */}
                        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold text-white border ${event.category === "Education" ? "bg-blue-500" : "bg-green-500"}`}>
                            {event.category}
                        </div>

                        <div>
                            <div className="md:w-full p-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex flex-col justify-center items-center">
                                <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mb-3">
                                    <FaCalendarAlt className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold text-center">{event.date}</h3>
                                <p className="text-white/80 text-sm text-center mt-1">{event.time}</p>
                            </div>

                            <div className="md:w-full px-6 py-3">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                                        <div className="flex items-center mb-2 justify-between">
                                            <div>
                                                <div className="flex items-center text-gray-600 mb-2">
                                                    <FaMapPin className="h-4 w-4 mr-2" />
                                                    <span className="text-sm">{event.location}</span>
                                                </div>
                                                <div className="flex items-center text-gray-600">
                                                    <FaUsers className="h-4 w-4 mr-2" />
                                                    <span className="text-sm">Role: {event.role}</span>
                                                </div>
                                            </div>
                                            <div className="hidden md:block">
                                                <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
                                                    <div className="h-14 w-14 rounded-full bg-blue-50 flex items-center justify-center relative">
                                                        <div className="absolute inset-0 rounded-full border-2 border-purple-700"></div>
                                                        <div
                                                            className="absolute inset-0 rounded-full border-2 border-blue-500"
                                                            style={{
                                                                clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`,
                                                                clip: `rect(0px, ${16 * event.progress / 100}px, 16px, 0px)`
                                                            }}
                                                        ></div>
                                                        <span className="text-blue-500 font-bold">{event.progress}%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors flex items-center">
                                        <FaCheckCircle className="h-4 w-4 mr-1" />
                                        Check In
                                    </button>
                                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
};
export default MyAssignedEvents;