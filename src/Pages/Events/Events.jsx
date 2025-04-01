import { useEffect, useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { formatDistanceToNow } from "date-fns";
const Events = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await fetch("http://localhost:5000/events");
                if (!res.ok) {
                    throw new Error("Failed to fetch events");
                }
                const data = await res.json();
                setEvents(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this event?");
        if (!confirmDelete) return;

        try {
            const res = await fetch(`http://localhost:5000/events/${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                setEvents(events.filter((event) => event._id !== id));
                console.log("Event deleted successfully");
            } else {
                console.error("Failed to delete event");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };



    return (
        <div className="container mx-auto p-5">
            <h1 className="text-3xl font-bold mb-4 text-center">Explore Event Near You</h1>

            {loading && <p className=" text-gray-800 text-xl font-bold">Loading events...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {events.map((event) => (
                    // <div key={event._id} className="relative bg-gray-800 text-white p-5 rounded-lg shadow-lg">
                    <div key={event._id} className="relative border p-5 rounded-lg hover:border-red-500">
                        {/* Edit & Delete Buttons */}
                        <button
                            className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white text-lg p-2 rounded-full cursor-pointer"
                            onClick={() => handleDelete(event._id)}
                        >
                            <RiDeleteBin6Fill className="text-[17px]" />
                            {/* 🗑️ Delete */}
                        </button>

                        {/* Event Details */}
                        <h2 className="text-xl font-bold">{event.title}</h2>

                        <p className="mt-3">{event.description}</p>
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
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white text-[14px] cursor-pointer px-3 py-1 rounded">
                                        ✏️ Edit
                                    </button>
                                    <button
                                        className="bg-red-500 hover:bg-red-600 text-white text-[14px] cursor-pointer px-3 py-1 rounded"
                                        // onClick={() => handleDelete(event._id)}
                                    >
                                        👁️ View
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <p className="text-sm mt-2">
                            {new Date(event.postDate).toLocaleDateString()}
                        </p> */}

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
