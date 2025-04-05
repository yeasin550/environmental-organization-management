import { useState } from "react";
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
        try {
            // Step 1: Upload image to imgbb
            const imageFile = data.photo?.[0]; // Optional chaining to avoid error
            if (!imageFile) {
                Swal.fire({
                    title: 'No Photo!',
                    text: 'Please upload a photo for the event.',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                });
                return;
            }

            const formData = new FormData();
            formData.append("image", imageFile);

            const imgRes = await fetch("https://api.imgbb.com/1/upload?key=684cb029f813b2822f5c206ad2752257", {
                method: "POST",
                body: formData,
            });

            const imgData = await imgRes.json();
            const imageUrl = imgData?.data?.url;

            if (!imageUrl) {
                throw new Error("Image upload failed");
            }

            // Step 2: Add current timestamp and image URL to event data
            const eventData = {
                ...data,
                postDate: new Date().toISOString(),
                photo: imageUrl, // Save uploaded image URL here
            };

            // Step 3: Send event data to backend
            const res = await fetch("https://management-server-flame.vercel.app/events", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(eventData),
            });

            const result = await res.json();

            if (res.ok) {
                console.log("Event created successfully:", result);
                reset(); // Reset form

                Swal.fire({
                    title: 'Event Created!',
                    text: 'Your event has been created successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
            } else {
                throw new Error(result?.error || "Failed to create event.");
            }
        } catch (error) {
            console.error("Error:", error);
            Swal.fire({
                title: 'Error!',
                text: error.message || 'There was an error while creating the event.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };


    const [fileName, setFileName] = useState(""); 
    // Handle file change event
    const handleFileChange = (e) => {
        const file = e.target.files[0]; // Get the first selected file
        if (file) {
            setFileName(file.name); // Set the file name in the state
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

                {/* file upload */}
                <label className="block text-[17px] font-medium">Upload event photo</label>
                <>
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                    />
                    <div className="bg-gray-50 px-2 border rounded-md">
                        <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                            <div className="md:flex items-center">
                                {/* Left Side: Image Icon */}
                                <div className="w-1/4 flex justify-center">
                                    <i className="fa fa-folder-open fa-4x text-blue-500" />
                                </div>
                                {/* Right Side: File Upload Title */}
                                <div className="w-3/4 p-3">
                                    <div className="relative border-dotted h-16 rounded-lg border-2 border-blue-500 bg-gray-100 flex justify-center items-center hover:bg-gray-200 transition duration-300 cursor-pointer">
                                        <div className="absolute text-center p-1">
                                            <span className="block font-medium">Attach your files here</span>
                                        </div>
                                        {/* File Input (hidden) */}
                                        <input
                                            type="file"
                                            className="h-full w-full opacity-0 cursor-pointer"
                                            name="photo"
                                            onChange={handleFileChange} // Handle file change
                                            {...register("photo", { required: "Photo is required" })}
                                        />
                                    </div>
                                    {/* Display the uploaded file name */}
                                    {fileName && (
                                        <div className="mt-2 text-gray-700">
                                            <span>File: </span>
                                            <strong>{fileName}</strong>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </>
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
