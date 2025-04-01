import { useEffect, useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { formatDistanceToNow } from "date-fns";
import Swal from 'sweetalert2';
const EventManagement = () => {
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
        // Show SweetAlert confirmation before deletion
        const confirmDelete = await Swal.fire({
            title: 'Are you sure?',
            text: "Do you really want to delete this event?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        });

        if (!confirmDelete.isConfirmed) return;

        try {
            const res = await fetch(`http://localhost:5000/events/${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                // Successfully deleted, remove the event from the list
                setEvents(events.filter((event) => event._id !== id));

                // Show success SweetAlert
                Swal.fire({
                    title: 'Deleted!',
                    text: 'The event has been deleted successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
            } else {
                console.error("Failed to delete event");

                // Show error SweetAlert
                Swal.fire({
                    title: 'Error!',
                    text: 'There was a problem deleting the event. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        } catch (error) {
            console.error("Error:", error);

            // Show error SweetAlert if there is a network or fetch error
            Swal.fire({
                title: 'Error!',
                text: 'There was an error while deleting the event. Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };




    return (
        <div className="container mx-auto p-5">
            <h1 className="text-3xl font-bold mb-4 text-center">Explore Event Near You</h1>

            {loading && <p className=" text-gray-800 text-xl font-bold">Loading events...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {events.map((event) => (
                    // <div key={event._id} className="relative bg-gray-800 text-white p-5 rounded-lg shadow-lg">
                    <div key={event._id} className="relative border p-5 rounded-lg hover:border-red-500 group">
                        {/* Edit & Delete Buttons */}
                        <button
                            className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white text-lg p-2 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => handleDelete(event._id)}
                        >
                            <RiDeleteBin6Fill className="text-[17px]" />
                        </button>
                            {/* 🗑️ Delete */}

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



            {/* adjsklllllllllllf */}
            {/* <div className="flex flex-col gap-2 bg-black p-4 w-full max-w-md rounded-lg mt-5">
                {events.map((event, index) => (
                    <div key={index} className="flex bg-black rounded-lg overflow-hidden border border-gray-800">
                        <div className="flex-shrink-0 w-24 h-24 bg-orange-200 p-4 flex flex-col items-center justify-center">
                            <div className="text-3xl font-bold">{event.date}</div>
                            <div className="text-xs uppercase font-medium">{event.month}</div>
                        </div>
                        <div className="p-4 text-left flex-grow">
                            <h3 className="text-amber-500 font-serif text-lg mb-1">{event.title}</h3>
                            <div className="flex items-center text-gray-400 text-xs mb-1">
                                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span>{event.location}</span>
                            </div>
                            <div className="flex items-center text-gray-400 text-xs">
                                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                <span>{event.timeRange}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default EventManagement;
