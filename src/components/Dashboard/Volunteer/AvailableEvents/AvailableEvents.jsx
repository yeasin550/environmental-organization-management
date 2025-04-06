
import { FaBell, FaCalendar, FaClock, FaFilter, FaMapPin, FaUsers } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { LuUsers } from 'react-icons/lu';

const availableEvents = [
    {
        id: 1,
        title: "Community Park Cleanup",
        date: "April 15, 2025",
        time: "9:00 AM - 12:00 PM",
        location: "Central Park",
        volunteers: 24,
        spots: 30,
        category: "Environment"
    },
    {
        id: 2,
        title: "Food Distribution Drive",
        date: "April 18, 2025",
        time: "2:00 PM - 5:00 PM",
        location: "Downtown Community Center",
        volunteers: 15,
        spots: 20,
        category: "Humanitarian"
    },
    {
        id: 3,
        title: "Elderly Home Visit Program",
        date: "April 22, 2025",
        time: "10:00 AM - 1:00 PM",
        location: "Sunshine Retirement Home",
        volunteers: 8,
        spots: 12,
        category: "Community"
    }
];



;

// Function to render available events
const MyAvailableEvents = () => {
    return (
        <div className="space-y-6">
            {/* nav */}
            <div className=" bg-gray-50">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    <div className="container mx-auto px-4 py-6">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                                    <LuUsers className="h-6 w-6" />
                                </div>
                                <h1 className="text-2xl font-bold">Available Opportunities</h1>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-2">
                                        <div className="flex items-center bg-white rounded-sm px-3 py-2 shadow">
                                            <FaSearch className="h-4 w-4 text-gray-500 mr-2" />
                                            <input type="text" placeholder="Search events..." className="outline-none text-sm border" />
                                        </div>                                     
                                    </div>
                                </div>
                                <button className="p-2 bg-white/10 rounded-full">
                                    <FaBell className="h-5 w-5" />
                                </button>
                                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-blue-500 font-bold">
                                    JD
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
                {availableEvents.map(event => (
                    <div key={event.id} className="bg-white rounded-md shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl border">
                        <div className="relative">
                            <div className={`absolute top-0 right-0 px-3 py-1 m-3 border rounded-full text-xs font-semibold text-white ${event.category === "Environment" ? "bg-green-500" :
                                event.category === "Humanitarian" ? "bg-orange-500" : "bg-blue-500"
                                }`}>
                                {event.category}
                            </div>
                            <div className="h-32 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                            <div className="absolute bottom-0 left-0 w-16 h-16 m-4 bg-white rounded-lg shadow-md flex items-center justify-center">
                                <FaCalendar className="h-8 w-8 text-blue-500" />
                            </div>
                        </div>

                        <div className="p-6 pt-5">
                            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                            <div className="flex items-center text-gray-600 mb-2">
                                <FaClock className="h-4 w-4 mr-2" />
                                <span className="text-sm">{event.date} • {event.time}</span>
                            </div>
                            <div className="flex items-center text-gray-600 mb-4">
                                <FaMapPin className="h-4 w-4 mr-2" />
                                <span className="text-sm">{event.location}</span>
                            </div>

                            <div className="flex justify-between items-center mt-4">
                                <div className="flex items-center">
                                    <FaUsers className="h-4 w-4 text-blue-500 mr-1" />
                                    <span className="text-sm text-gray-700">{event.volunteers}/{event.spots} volunteers</span>
                                </div>
                                <button className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default MyAvailableEvents;







