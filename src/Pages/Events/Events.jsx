import { useEffect, useState } from "react";
// import { RiDeleteBin6Fill } from "react-icons/ri";
import { formatDistanceToNow } from "date-fns";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
const Events = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);
    console.log(events)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleView = (event) => {
        setSelectedEvent(event);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedEvent(null);
    };
    const [editData, setEditData] = useState({

        title: '',
        description: '',
        date: '',
        time: '',
    });
    // const handleEditClick = (event) => {
    //     setSelectedEvent(event);
    //     setEditData({
    //         title: event.title,
    //         description: event.description,
    //         date: event.date,
    //         time: event.time,
    //     });
    // };

    const handleChange = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const res = await fetch(`https://management-server-flame.vercel.app/events/${selectedEvent._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editData),
        });

        if (res.ok) {
            const updated = await res.json();
            setEvents(events.map(event => event._id === updated._id ? updated : event));
            Swal.fire("Updated!", "Event updated successfully", "success");
            setSelectedEvent(null);
        } else {
            const errorData = await res.json();
            console.log("Update failed:", errorData);
            Swal.fire("Error!", "Something went wrong", "error");
        }
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



    // const handleDelete = async (id) => {
    //     // Show SweetAlert confirmation before deletion
    //     const confirmDelete = await Swal.fire({
    //         title: 'Are you sure?',
    //         text: "Do you really want to delete this event?",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonText: 'Yes, delete it!',
    //         cancelButtonText: 'Cancel',
    //     });

    //     if (!confirmDelete.isConfirmed) return;

    //     try {
    //         const res = await fetch(`https://management-server-flame.vercel.app/events/${id}`, {
    //             method: "DELETE",
    //         });

    //         if (res.ok) {
    //             // Successfully deleted, remove the event from the list
    //             setEvents(events.filter((event) => event._id !== id));

    //             // Show success SweetAlert
    //             Swal.fire({
    //                 title: 'Deleted!',
    //                 text: 'The event has been deleted successfully.',
    //                 icon: 'success',
    //                 confirmButtonText: 'OK',
    //             });
    //         } else {
    //             console.error("Failed to delete event");

    //             // Show error SweetAlert
    //             Swal.fire({
    //                 title: 'Error!',
    //                 text: 'There was a problem deleting the event. Please try again.',
    //                 icon: 'error',
    //                 confirmButtonText: 'OK',
    //             });
    //         }
    //     } catch (error) {
    //         console.error("Error:", error);

    //         // Show error SweetAlert if there is a network or fetch error
    //         Swal.fire({
    //             title: 'Error!',
    //             text: 'There was an error while deleting the event. Please try again later.',
    //             icon: 'error',
    //             confirmButtonText: 'OK',
    //         });
    //     }
    // };




    return (
        <div className="container mx-auto p-5">
            <h1 className="text-3xl font-bold mb-4">Explore Event Near You....................!</h1>

            {loading && <p className=" text-gray-800 text-xl font-bold">Loading events...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {events.map((event) => (
                    // <div key={event._id} className="relative bg-gray-800 text-white p-5 rounded-lg shadow-lg">
                    <div key={event._id} className="relative border p-3 rounded-md hover:border-red-500 group w-[400px]">
                        {/* Edit & Delete Buttons */}
                        {/* <button
                            className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white text-lg p-2 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => handleDelete(event._id)}
                        >
                            <RiDeleteBin6Fill className="text-[17px]" />
                        </button> */}
                        {/* 🗑️ Delete */}

                        {/* Event Details */}
                        <div className="">
                            <div className="w-full object-cover">
                                <img src={event.photo} alt="" className="rounded-md w-full h-56 border
                              "/>
                            </div>
                            <div className="">
                                <h2 className="text-lg font-bold">{event.title}</h2>

                                {/* <p className="mt-3">{event.description}</p> */}
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
                                                className="bg-red-500 hover:bg-red-600 text-white text-[14px] cursor-pointer px-3 py-[5px] rounded"
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

            {/* Edit Modal */}
            {selectedEvent && (
                <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg w-full max-w-lg relative border">
                        <h2 className="text-xl font-bold mb-4">Edit Event</h2>

                        <form onSubmit={handleUpdate}>
                            <div >
                                <label className="block text-[16px] font-medium">Title</label>
                                <input
                                    type="text"
                                    className="border w-full mb-1 p-2 rounded"
                                    name="title"
                                    value={editData.title}
                                    onChange={handleChange}
                                    placeholder="Title"
                                />
                            </div>
                            <div>
                                <label className="block text-[16px] font-medium">Description</label>
                                <textarea
                                    className="border w-full mb-1 p-2 rounded"
                                    name="description"
                                    value={editData.description}
                                    onChange={handleChange}
                                    placeholder="Description"
                                />
                            </div>
                            <div>
                                <label className="block text-[16px] font-medium">Date</label>
                                <input
                                    type="date"
                                    className="border w-full mb-1 p-2 rounded"
                                    name="date"
                                    value={editData.date}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label className="block text-[16px] font-medium">Time</label>
                                <input
                                    type="time"
                                    className="border w-full mb-1 p-2 rounded"
                                    name="time"
                                    value={editData.time}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setSelectedEvent(null)}
                                    className="bg-gray-400 px-4 py-1 rounded text-white cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-green-600 px-4 py-1 rounded text-white cursor-pointer"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

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
                        <p className="mb-1">📅 {selectedEvent.date}</p>
                        <p className=" mb-2">⏰ {selectedEvent.time}</p>
                    </div>
                </div>
            )}


        </div>
    );
};

export default Events;
