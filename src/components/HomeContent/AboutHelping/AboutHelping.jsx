
import volunteer from "../../../assets/volunteer.png"

const AboutHelping = () => {
    return (
        <div className="md:w-11/12 md:px-0 px-2 mx-auto p-4 my-20">
            {/* Hero Section */}
            <div className=" rounded-lg p-6 flex flex-col md:flex-row gap-16 mb-6">
                {/* Image Container */}
                <div className="md:w-1/2">
                    <div className="bg-[#FFC0AF] rounded-4xl p-6">
                        <img
                            src={volunteer}
                            alt="Volunteer with donation box"
                            className="rounded-4xl w-full"
                        />
                    </div>
                </div>

                {/* Content Container */}
                <div className="md:w-1/2 mt-12 space-y-3">
                    <div className="text-orange-500 text-lg font-medium mb-2">About Us</div>
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">
                        Helping To Make Our World <span className="relative">Better
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-500"></span>
                        </span> Living
                    </h1>

                    <p className="text-gray-600 text-lg mb-4">
                        I will explain what has been said. For no one despises, hates, or flees pleasure itself because it is pleasure, but because it follows. I will explain what has been said. For no one despises pleasure itself because it is pleasure.
                    </p>

                    {/* Stats Section */}
                    <div className="flex flex-wrap justify-between mt-16">
                        <div className="text-center mb-4">
                            <div className="w-20 h-20 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                </svg>
                            </div>
                            <div className="text-lg font-bold text-gray-700">Our Team Member</div>
                            <div className="font-bold text-2xl text-[#FF5A2E]">40000+</div>
                        </div>

                        <div className="text-center mb-4">
                            <div className="w-20 h-20 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <div className="text-lg font-bold text-gray-700">Total Donated</div>
                            <div className="font-bold text-2xl text-[#fcba05]">$50995+</div>
                        </div>

                        <div className="text-center mb-4">
                            <div className="w-20 h-20 mx-auto bg-teal-100 rounded-full flex items-center justify-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="text-lg font-bold text-gray-700">Total Fund Raised</div>
                            <div className="font-bold text-2xl text-teal-500">$442471</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Volunteer Card */}
                <div className="bg-red-100 rounded-lg p-6 h-56">
                    <div className="flex  items-center mb-4 mt-8">
                        <div className="w-[150px] h-20 mr-3 bg-red-200 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                            </svg>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-medium text-xl">Volunteer</h3>
                            <p className=" text-gray-600">
                                Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptatem quis
                            </p>
                        </div>
                    </div>

                </div>

                {/* Donate Card */}
                <div className="bg-orange-100 rounded-lg p-6 h-56">
                    <div className="flex items-center mb-4 mt-8">
                        <div className="w-[155px] h-20 mr-3 bg-orange-200 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-medium text-xl">Donate</h3>
                            <p className=" text-gray-600">
                                Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptatem quis
                            </p>
                        </div>
                    </div>
                </div>

                {/* Support Card */}
                <div className="bg-green-100 rounded-lg p-6 h-56">
                    <div className="flex items-center mb-4 mt-8">
                        <div className="w-[155px] h-20 mr-3 bg-green-200 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-medium text-xl">Support</h3>
                            <p className=" text-gray-600">
                                Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptatem quis
                            </p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHelping;