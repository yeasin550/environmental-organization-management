import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProviders";

const MyDonation = () => {
    const { user } = useContext(AuthContext);
    const [events, setEvents] = useState([]);
    const [matchedEvents, setMatchedEvents] = useState([]);
    const [unmatchedEvents, setUnmatchedEvents] = useState([]);
    const [matchedEventDetails, setMatchedEventDetails] = useState([]);
    const [donation, setDonation] = useState([]);
    console.log("matchedEventDetails", matchedEventDetails)
    const totalDonatedAmount = matchedEvents.reduce((sum, item) => {
        return sum + (Number(item.amount) || 0);
    }, 0);



    useEffect(() => {
        if (user?.email) {
            fetch("https://management-server-flame.vercel.app/donations")
                .then(res => res.json())
                .then(data => {
                    const filtered = data.filter(donation => donation.email === user.email);
                    setDonation(filtered);
                })
                .catch(err => console.error("Error fetching donations:", err));
        }
    }, [user?.email]);


    useEffect(() => {
        fetch("https://management-server-flame.vercel.app/events")
            .then(res => res.json())
            .then(data => setEvents(data))
            .catch(err => console.error("Error fetching contacts:", err));
    }, []);

    useEffect(() => {
        if (donation.length > 0 && events.length > 0) {
            // 1. Matched Donations
            const matched = donation.filter(donationItem =>
                events.some(event => event._id === donationItem.eventId)
            );

            // 2. Unmatched Donations
            const unmatched = donation.filter(donationItem =>
                !events.some(event => event._id === donationItem.eventId)
            );

            // 3. Matched Event Details (pure event objects)
            const matchedEventsOnly = events.filter(event =>
                donation.some(donationItem => donationItem.eventId === event._id)
            );

            setMatchedEvents(matched);
            setUnmatchedEvents(unmatched);
            setMatchedEventDetails(matchedEventsOnly);
        }
    }, [donation, events]);



    return (
        <div className=" bg-gray-100 py-3 px-4 sm:px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-5">
                My Donations
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                {/* Matched Events (Donated) */}
                {matchedEventDetails.map((event, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition duration-300"
                    >
                        <img
                            src={event.photo}
                            alt={event.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-5 flex flex-col justify-between flex-1">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {event.title}
                                </h3>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <h1 className="text-lg font-semibold text-green-600 dark:text-green-400">
                                    ✅ You Donated
                                </h1>
                                {/* <button className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700">
                                    View Details
                                </button> */}
                                <h1 className="text-white font-bold text-lg ">$ {totalDonatedAmount}</h1>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Unmatched Events (Not Donated) */}
                {unmatchedEvents.map((event, index) => {
                    const randomImages = [
                        "https://plus.unsplash.com/premium_photo-1663089162887-403fb53108cd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://plus.unsplash.com/premium_photo-1683134050449-080429c850a4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        "https://plus.unsplash.com/premium_photo-1683121334505-907a00cf904c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    ];

                    const randomTitles = [
                        "Support a Cause",
                        "Be a Hero",
                        "Make a Change",
                        "Help the Needy",
                    ];

                    const fallbackImage = randomImages[Math.floor(Math.random() * randomImages.length)];
                    const fallbackTitle = randomTitles[Math.floor(Math.random() * randomTitles.length)];

                    return (
                        <div
                            key={`unmatched-${index}`}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition duration-300"
                        >
                            <img
                                src={event.photo || fallbackImage}
                                alt={event.title || fallbackTitle}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5 flex flex-col justify-between flex-1">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        {event.title || fallbackTitle}
                                    </h3>
                                    {/* <p className="text-sm text-gray-600 dark:text-gray-300">
                                        {event.description || "Thank you for donating to this cause."}
                                    </p> */}
                                </div>
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-lg font-semibold text-red-500 dark:text-red-400">
                                        ✅ You Donated
                                    </span>
                                    <h1 className="text-white font-bold text-lg ">$ {event.amount}</h1>
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>

        </div>
    );
};

export default MyDonation;
