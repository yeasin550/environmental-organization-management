
import { useEffect, useState } from "react";
// import { RiDeleteBin6Fill } from "react-icons/ri";
import { formatDistanceToNow } from "date-fns";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
const FeaturesEvents = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);
    // console.log(events)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleView = (event) => {
        setSelectedEvent(event);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedEvent(null);
    };

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await fetch("https://management-server-flame.vercel.app/events");
                if (!res.ok) {
                    throw new Error("Failed to fetch events");
                }
                const data = await res.json();
                setEvents(data);
                // setSelectedEventDetails(data)
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);


    return (
        <div className="container mx-auto p-5 mt-12">
            <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
                Featured Events
            </h2>


            {loading && <p className=" text-gray-800 text-xl font-bold">Loading events...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {events.slice(0, 6).map((event) => (
                    <div key={event._id} className="relative border p-3 rounded-md hover:border-red-500 group w-[400px]">
                      

                        {/* Event Details */}
                        <div className="">
                            <div className="w-full object-cover">
                                <img src={event.photo} alt="" className="rounded-md w-full h-56 border
                              "/>
                            </div>
                            <div className="">
                                <h2 className="text-lg font-bold">{event.title}</h2>
                                <div className="flex justify-between">
                                    <div className="font-semibold">
                                        <p className="text-[14px] mt-2">
                                            {formatDistanceToNow(new Date(event.postDate), { addSuffix: true })}
                                        </p>
                                        <div className="mt-1 flex text-sm">
                                            <p>📅 {event.date}</p>
                                            <p>⏰ {event.time}</p>
                                        </div>
                                    </div>
                                    <div className="mt-4  text-gray-300 text-sm">
                                        <div className=" top-3 right-3 flex gap-2">
                                          
                                            <button
                                                className="bg-red-500 hover:bg-red-600 text-white text-[14px] cursor-pointer px-3 py-1 rounded"
                                                onClick={() => handleView(event)}
                                            >
                                                👁️ View
                                            </button>
                                            <Link
                                                to="/donate"
                                                state={{ eventId: event._id }} // 👈 passing event._id as state
                                            >
                                                <button
                                                    className="bg-blue-500 hover:bg-blue-600 text-white text-[14px] cursor-pointer px-3 py-[5px] rounded"
                                                >
                                                    $ Donate
                                                </button>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>



            {/* details modal */}
            {isModalOpen && selectedEvent && (
                <div className="fixed inset-0 z-50 mx-w-xl flex items-center justify-center bg-black/30 bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-lg p-5 relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-1 right-1 bg-white rounded-full p-[2px] border cursor-pointer text-gray-600 hover:text-black text-xl"
                        >
                            ❌
                        </button>

                        <img src={selectedEvent.photo} alt={selectedEvent.title} className="w-full h-56 object-cover rounded-md mb-3 border" />

                        <h2 className="text-xl font-bold mb-2">{selectedEvent.title}</h2>
                        <div className="text-gray-800 mb-2">{selectedEvent.description}</div>
                        <p className="text-sm text-gray-600 mb-2">
                            {formatDistanceToNow(new Date(selectedEvent.postDate), { addSuffix: true })}
                        </p>
                        <div className="flex justify-between">
                            <p className="mb-1">📅 {selectedEvent.date}</p>
                            <p className=" mb-2">⏰ {selectedEvent.time}</p>
                        </div>                  
                    </div>
                </div>
            )}


        </div>
    );
};

export default FeaturesEvents;


