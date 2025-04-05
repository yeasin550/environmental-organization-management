import volunteer1 from "../../../assets/volunteer1.jpg"
import volunteer2 from "../../../assets/volunteer2.jpg"
import volunteer3 from "../../../assets/volunteer3.jpg"

const VolunteerTeamSection = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Michel Fokluz',
            role: 'Volunteer',
            image: volunteer1,
            message: 'VOLUNTEER WANTED'
        },
        {
            id: 2,
            name: 'Jara Klintof',
            role: 'Volunteer',
            image: volunteer2,
            message: 'DONATIONS'
        },
        {
            id: 3,
            name: 'Aiden Markram',
            role: 'Volunteer',
            image: volunteer3,
            message: 'DONATE'
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            {/* Green dot in top left */}
            <div className="relative">
                <div className="absolute -left-4 top-12 w-4 h-4 bg-green-200 rounded-full"></div>
            </div>

            {/* Header section */}
            <div className="flex justify-between items-center mb-12">
                <div className="flex-1 text-center">
                    <div className="flex justify-center items-center mb-2 text-teal-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium italic">Start Donating Poor People</span>
                    </div>

                    <h2 className="text-4xl font-bold">
                        Meet Our Volunteer <br />
                        <span className="text-yellow-400">Team</span> Members
                    </h2>
                </div>

                {/* Heart logo */}
                {/* <div className="hidden md:block">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40 70C40 70 65 55 65 35C65 28.3696 62.3661 22.0107 57.6777 17.3223C52.9893 12.6339 46.6304 10 40 10C33.3696 10 27.0107 12.6339 22.3223 17.3223C17.6339 22.0107 15 28.3696 15 35C15 55 40 70 40 70Z"
                            stroke="#006356" strokeWidth="6" fill="#006356" />
                        <path d="M40 70C40 70 65 55 65 35C65 28.3696 62.3661 22.0107 57.6777 17.3223C52.9893 12.6339 46.6304 10 40 10"
                            stroke="white" strokeWidth="2" />
                    </svg>
                </div> */}
            </div>

            {/* Team members cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {teamMembers.map((member) => (
                    <div key={member.id} className="bg-white rounded-xl shadow-md overflow-hidden border">
                        <div className="relative p-3">
                            {/* Diagonal green background */}
                            <div className="absolute top-0 right-0 w-3/4 h-full bg-teal-700 transform skew-x-12 origin-top-right"></div>

                            {/* Person image */}
                            <img
                                src={member.image}
                                alt={member.name}
                                className="relative z-10 h-80 w-full object-cover"
                            />

                            {/* Social media icons */}
                            <div className="absolute right-3 top-26 transform -translate-y-1/2 flex flex-col space-y-2 z-20">
                                <div className="w-8 h-8 flex cursor-pointer items-center justify-center text-teal-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
                                    </svg>
                                </div>
                                <div className="w-8 h-8 flex cursor-pointer items-center justify-center text-teal-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </div>
                                <div className="w-8 h-8 flex cursor-pointer items-center justify-center text-teal-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                    </svg>
                                </div>
                                <div className="w-8 h-8 flex cursor-pointer items-center justify-center text-teal-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Member info */}
                        <div className="p-4 flex justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                                <p className="text-teal-600 text-lg">{member.role}</p>
                          </div>

                            {/* Share button */}
                            <div className="flex justify-end mt-2">
                                <button className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VolunteerTeamSection;