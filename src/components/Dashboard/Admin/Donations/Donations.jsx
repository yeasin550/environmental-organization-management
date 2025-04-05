

import { useEffect, useState } from "react";
import { FaPhone, FaEnvelope, FaEllipsisH } from "react-icons/fa";

const ContactCards = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {

        fetch("https://management-server-flame.vercel.app/donations")
            .then(res => res.json())
            .then(data => setContacts(data))
            .catch(err => console.error("Error fetching contacts:", err));
    }, []);

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {contacts.length === 0 ? (
                    <p className="text-center col-span-full text-gray-500">No contacts found.</p>
                ) : (
                    contacts.map((contact) => (
                        <div
                            key={contact.id}
                            className="border hover:border-red-500 p-4 rounded-xl shadow-sm hover:shadow-md transition duration-300"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center">
                                    <img
                                        src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
                                        alt={contact.name}
                                        className="w-20 h-20 rounded-full mr-1"
                                    />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {contact.name}
                                        </h3>
                                        <p className="text-[13px] text-gray-700">
                                            {contact.address} <span className="">({contact.zipCode})</span>
                                        </p>
                                    </div>
                                </div>
                                <button className="text-gray-400">
                                    <FaEllipsisH />
                                </button>
                            </div>

                            <div className="flex justify-between text-[13px] mb-4">
                                <div className="text-gray-700 font-bold">Contact: {contact.city}</div>
                                <div className="text-gray-700 font-bold">Payment : ${contact.amount}</div>
                            </div>

                            <div className="flex justify-between mb-2">
                                <div className="flex items-center bg-indigo-100 text-indigo-700 rounded-sm px-3 py-2">
                                    <FaPhone className="mr-2" />
                                    <span className="text-[13px]">{contact.phone}</span>
                                </div>
                                <div className="flex items-center bg-indigo-100 text-indigo-700 rounded-sm px-3 py-2">
                                    <div className="bg-indigo-500 text-white p-1 rounded mr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm">2024</span>
                                </div>
                            </div>

                            <div className="mt-2">
                                <div className="flex items-center bg-indigo-100 text-indigo-700 rounded-sm px-3 py-2 w-full">
                                    <FaEnvelope className="mr-2" />
                                    <span className="text-sm">{contact.email}</span>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ContactCards;



// import { useEffect, useState } from "react";

// const Donations = () => {
//     const [donations, setDonations] = useState([]);

//     useEffect(() => {
//         fetch("https://management-server-flame.vercel.app/donations")
//             .then(res => res.json())
//             .then(data => setDonations(data))
//             .catch(err => console.error("Error fetching donations:", err));
//     }, []);

//     return (
//         <div className="min-h-screen bg-gray-50 py-10 px-4">
//             <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
//                 All Donations
//             </h2>

//             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
//                 {donations.length === 0 ? (
//                     <p className="text-center col-span-full text-gray-500">No donations found.</p>
//                 ) : (
//                     donations.map((donation) => (
//                         <div
//                             key={donation._id}
//                             className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-blue-100"
//                         >
//                             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                                 {donation.name}
//                             </h3>
//                             <p className="text-gray-600 text-sm mb-1">
//                                 Email: <span className="font-medium">{donation.email}</span>
//                             </p>
//                             <p className="text-gray-600 text-sm mb-2">
//                                 Amount: <span className="text-blue-600 font-bold">${donation.amount}</span>
//                             </p>
//                             <p className="text-xs text-gray-400">Payment ID: {donation.paymentIntentId}</p>
//                         </div>
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Donations;
