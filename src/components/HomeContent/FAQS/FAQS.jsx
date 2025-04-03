import FAQSIMG from "../../../assets/make-volunteer.png";

const FAQS = () => {
    return (
        <div className="py-14 px-8 md:w-11/12 mx-auto">

            <div className="space-y-3">
                <p className="text-[#257EFD] font-bold">Become A Volunteer</p>
                <h2 className="text-4xl font-bold ">Why We Need You</h2>
            </div>
            <div className="w-full mx-auto gap-10 pb-12 flex flex-col-reverse md:flex-row items-center md:items-start mb-5">

                <div className="flex flex-col mt-16 md:w-1/2 space-y-4" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">


                    <div className="mx-auto w-full">
                        <div className="divide-y divide-gray-100">
                            <details className="group bg-white px-4 p-1 mb-3">
                                <summary
                                    className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:text-primary-500 bg-gray-200 rounded-md">
                                    How can I become a volunteer?
                                    <div className="bg-white p-1 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                        </svg>
                                    </div>
                                </summary>
                                <div className="pb-4 text-secondary-500">
                                    You can sign up on our website, complete a short application, and attend an orientation session. As a volunteer, you can help with fundraising, event management, and outreach programs.</div>
                            </details>

                            <details className="group bg-white px-4 p-1 mb-3">
                                <summary
                                    className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:text-primary-500 bg-gray-200 rounded-md">
                                    Why do we need volunteers?
                                    <div className="bg-white p-1 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                        </svg>
                                    </div>
                                </summary>
                                <div className="pb-4 text-secondary-500"> Volunteers play a crucial role in expanding our impact. They help organize donation drives, spread awareness, and assist those in need, making our mission more effective and far-reaching.</div>
                            </details>

                            <details className="group bg-white px-4 p-1 mb-3">
                                <summary
                                    className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:text-primary-500 bg-gray-200 rounded-md">
                                    Can I donate even if I can't volunteer?
                                    <div className="bg-white p-1 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                        </svg>
                                    </div>
                                </summary>
                                <div className="pb-4 text-secondary-500">
                                    Yes! Every donation, big or small, helps us provide food, education, and medical aid to those in need. Your contributions directly impact lives and bring hope to many.</div>
                            </details>

                            <details className="group bg-white px-4 p-1 mb-3">
                                <summary
                                    className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:text-primary-500 bg-gray-200 rounded-md">
                                    Where does my donation go?
                                    <div className="bg-white p-1 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                        </svg>
                                    </div>
                                </summary>
                                <div className="pb-4 text-secondary-500">
                                    Your donation is used for essential resources like food, shelter, healthcare, and education. We ensure transparency, and you can track how your donation is making a difference.</div>
                            </details>

                            <details className="group bg-white px-4 p-1 mb-3">
                                <summary
                                    className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:text-primary-500 bg-gray-200 rounded-md">
                                    How can I spread the word about your mission?
                                    <div className="bg-white p-1 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                        </svg>
                                    </div>
                                </summary>
                                <div className="pb-4 text-secondary-500">
                                    You can share our website, social media pages, and success stories with friends and family. Encouraging others to donate or volunteer helps us reach more people in need.
                                </div>
                            </details>
                        </div>
                    </div>


                </div>
                <div className="w-full md:w-1/2">
                    <img src={FAQSIMG} alt="logo" className="h-[500px]"/>
                </div>


            </div>
        </div>
    );
};

export default FAQS;