import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Lucian Drems",
            location: "New York, USA",
            text: "It a sense of caring for those less fortunate and Teaches the value of helping others. Building a Sense of Responsibility: Involving kids in charita Ble initiatives instills a sense.",
            rating: 5,
            avatar: "https://img.freepik.com/free-photo/isolated-image-positive-fashionable-young-man-with-stylish-hairdo-bristle-smiling-camera_343059-3558.jpg?t=st=1743647988~exp=1743651588~hmac=cb5aa392aacd8833df073891be0534c542058116fe24ccfc124296f3e41c74e4&w=996",
            highlighted: false
        },
        {
            id: 2,
            name: "Julius Vorek",
            location: "Melbourne, Australia",
            text: "It a sense of caring for those less fortunate and Teaches the value of helping others. Building a Sense of Responsibility: Involving kids in charita Ble initiatives instills a sense.",
            rating: 4,
            avatar: "https://img.freepik.com/free-photo/smiling-young-beautiful-girl-pointing-right-side-with-copy-space_141793-92529.jpg?t=st=1743648005~exp=1743651605~hmac=9d82bddbd7f9c7d98e20afa22a7d263473197e3c42718f03b158fb75df104b9b&w=900",
            highlighted: true
        },
        {
            id: 3,
            name: "Dorian Lexem",
            location: "Manchester, UK",
            text: "It a sense of caring for those less fortunate and Teaches the value of helping others. Building a Sense of Responsibility: Involving kids in charita Ble initiatives instills a sense.",
            rating: 3,
            avatar: "https://img.freepik.com/free-photo/business-concept-smiling-thoughtful-handsome-man-standing-white-isolated-background-touching-his-chin-with-hand_1258-80750.jpg?t=st=1743647992~exp=1743651592~hmac=03a6ef669f0a07e2e602cca458a888bdae7dcd55dc92c62df5d367e7aaf02c1a&w=996",
            highlighted: false
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    // Display three testimonials at a time
    const visibleTestimonials = [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length],
        testimonials[(currentIndex + 2) % testimonials.length]
    ];

    return (
        <div className="w-full max-w-6xl mx-auto px-4 pb-16 ">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-yellow-500 font-medium mb-2">✦ Testimonials</h3>
                        <h2 className="text-3xl font-bold text-slate-700">Some Clients Feedback?</h2>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center"
                        >
                            <FaAngleLeft />
                        </button>
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center"
                        >
                            <FaAngleRight />
                        </button>
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {visibleTestimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className={`p-6 rounded-lg border ${testimonial.highlighted
                                ? 'bg-yellow-400 border-yellow-400'
                                : 'bg-white border-gray-500'
                            }`}
                    >
                        <div className="flex justify-between">
                            <div className="flex gap-4 items-center mb-4">
                                <div className="w-14 h-14 border rounded-full overflow-hidden">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-medium">{testimonial.name}</h3>
                                    <p className="text-gray-600">{testimonial.location}</p>
                                </div>
                            </div>
                            <div className="text-4xl text-gray-300 font-serif">"</div>
                        </div>
                        <p className="mb-4">{testimonial.text}</p>
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className={`w-5 h-5 ${i < testimonial.rating
                                            ? 'text-yellow-500'
                                            : 'text-gray-300'
                                        }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;