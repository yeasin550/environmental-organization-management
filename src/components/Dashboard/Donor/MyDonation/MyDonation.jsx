import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProviders";






// const donations = [
//     {
//         image: "https://source.unsplash.com/400x400/?charity,children",
//         title: "Support Children’s Education",
//         description:
//             "Your donation helps provide books, uniforms, and education for underprivileged children.",
//         amount: 50,
//     },
//     {
//         image: "https://source.unsplash.com/400x400/?donation,food",
//         title: "Food for Homeless",
//         description:
//             "Your contribution is helping deliver hot meals to people in need every day.",
//         amount: 30,
//     },
//     {
//         image: "https://source.unsplash.com/400x400/?healthcare",
//         title: "Medical Aid for Rural Areas",
//         description:
//             "Funding medical camps and treatments for people in remote villages.",
//         amount: 100,
//     },
// ];

const MyDonation = () => {
    const { user } = useContext(AuthContext); 
    const [events, setEvents] = useState([]);
    const [matchedEvents, setMatchedEvents] = useState([]);
    const [unmatchedEvents, setUnmatchedEvents] = useState([]);
        const [donation, setDonation] = useState([]);
    console.log("donation", donation)
    console.log("matchedEvents", matchedEvents)
    console.log("unmatchedEvents", unmatchedEvents)
    

    // donations?email=donor@gmail.com
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
            // Filter donations that have a matching eventId in events
            const matched = donation.filter(donationItem =>
                events.some(event => event._id === donationItem.eventId)
            );

            // Filter donations that do not have a matching eventId in events
            const unmatched = donation.filter(donationItem =>
                !events.some(event => event._id === donationItem.eventId)
            );

            setMatchedEvents(matched);
            setUnmatchedEvents(unmatched);
        }
    }, [donation, events]);



    return (
        <div className=" bg-gray-100 py-3 px-4 sm:px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-5">
                My Donations
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                {/* Matched Events (Donated) */}
                {matchedEvents.map((event, index) => (
                    <div
                        key={`matched-${index}`}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition duration-300"
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
                                <span className="text-lg font-semibold text-green-600 dark:text-green-400">
                                    ✅ You Donated {donation.amount}
                                </span>
                                <button className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Unmatched Events (Not Donated) */}
                {unmatchedEvents.map((event, index) => (
                    <div
                        key={`unmatched-${index}`}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition duration-300"
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
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {event.description}
                                </p>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <span className="text-lg font-semibold text-red-500 dark:text-red-400">
                                    ❌ Not Donated
                                </span>
                                <button className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700">
                                    Donate Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default MyDonation;
