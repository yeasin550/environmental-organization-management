import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const EventCreate = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();



    const onSubmit = async (data) => {
        // Add current timestamp before sending data
        const eventData = {
            ...data,
            postDate: new Date().toISOString(), // Automatically adds current date & time
        };

        try {
            const res = await fetch("http://localhost:5000/events", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(eventData),
            });

            const result = await res.json();
            if (res.ok) {
                console.log("Event created successfully:", result, data);
                reset(); // Reset form fields after submission

                // Show success SweetAlert
                Swal.fire({
                    title: 'Event Created!',
                    text: 'Your event has been created successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
            } else {
                console.error("Failed to create event:", result.error);

                // Show error SweetAlert
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to create the event. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        } catch (error) {
            console.error("Error:", error);

            // Show error SweetAlert if there is a network or fetch error
            Swal.fire({
                title: 'Error!',
                text: 'There was an error while creating the event. Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };


    return (
        <div className="w-8/12 mx-auto p-5 mt-5">
            <h1 className="text-3xl font-bold mb-4 text-center">Create Your Event</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="p-6 rounded-lg shadow-lg border">
                {/* Title */}
                <div className="mb-2">
                    <label className="block text-[17px] font-medium">Title</label>
                    <input
                        type="text"
                        placeholder="Type your event title"
                        {...register("title", { required: "Title is required" })}
                        className="w-full p-2 mt-1 rounded border border-gray-800"
                    />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                </div>

                <div className="flex justify-between gap-2">
                    {/* Date */}
                    <div className="mb-2 w-1/2">
                        <label className="block text-[17px] font-medium">Date</label>
                        <input
                            type="date"
                            {...register("date", { required: "Date is required" })}
                            className="w-full p-2 mt-1 rounded border border-gray-800"
                        />
                        {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
                    </div>

                    {/* Time */}
                    <div className="mb-2 w-1/2">
                        <label className="block text-[17px] font-medium">Time</label>
                        <input
                            type="time"
                            {...register("time", { required: "Time is required" })}
                            className="w-full p-2 mt-1 rounded border border-gray-800"
                        />
                        {errors.time && <p className="text-red-500 text-sm">{errors.time.message}</p>}
                    </div>
                </div>

                {/* Description */}
                <div className="mb-2">
                    <label className="block text-[17px] font-medium">Description</label>
                    <textarea
                        placeholder="Type your event overview"
                        {...register("description", { required: "Description is required" })}
                        className="w-full p-2 mt-1 rounded border border-gray-800"
                        rows="3"
                    ></textarea>
                    {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer">
                    Create Event
                </button>
            </form>
        </div>
    );
};

export default EventCreate;
