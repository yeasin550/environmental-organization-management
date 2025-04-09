import { FaBell } from "react-icons/fa6";
import { FaSearch, FaUsers } from 'react-icons/fa';
import { HiPhoto } from "react-icons/hi2";
import { GoDeviceDesktop } from "react-icons/go";
import { MdOutlineShoppingBag } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";

const About = () => {
    return (
        <div>
            <div
                className="relative h-80 bg-cover bg-no-repeat bg-center"
                style={{
                    backgroundImage: `url(https://img.freepik.com/free-photo/different-people-doing-volunteer-work-with-food_23-2149012166.jpg?t=st=1743848174~exp=1743851774~hmac=7977c841d89d54248a4556729309a8229390e7815aa34e72360d202c29be53a1&w=996)`,
                }}
            >
                <div className="absolute inset-0 bg-[#09867E] opacity-60"></div>
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-4xl font-bold">About Us</h1> <br />
                </div>
            </div>

            
            <div className="max-w-screen-xl px-5 mx-auto my-20">
                <div className="md:flex items-center gap-5">
                    <div className="lg:w-1/2" data-aos="flip-left">
                        <img
                            src="https://img.freepik.com/free-vector/hotel-reception-concept-illustration_114360-12755.jpg?w=740&t=st=1699420439~exp=1699421039~hmac=39fffd2acf389dd3c139d4f22e1e6290aa9a5211b959c06ee7107095a2d2a69df"
                            alt="bg-[#09867E] images"
                            draggable="false"
                        />
                    </div>
                    <div className="lg:w-1/2" data-aos="zoom-in">
                        <h1 className="text-2xl font-bold text-[#8861B3]">
                            {" "}
                            Why We are Most Popular
                        </h1>
                        <p className=" mt-4 text-justify">
                            Donating has never been easier. Our online platform connects you with causes that matter—whether it’s helping patients, supporting hospitals, or aiding communities in need. Simply choose a campaign, select your donation amount, and contribute securely. With transparent updates and flexible options, every donation you make brings hope and change. Whether you're giving once or monthly, your generosity makes a real difference.
                        </p>
                        <div className="mt-5 grid grid-cols-2 gap-5">
                            <div className="flex items-center gap-2 text-xl">
                                <button className="bg-[#09867E] rounded-full p-2 text-white">
                                    <FaUsers />
                                </button>
                                <h1 className="font-semibold text-[#8861B3]">Give with Heart, Change a Life</h1>
                            </div>
                            <div className="flex items-center gap-2 text-xl">
                                <button className="bg-[#09867E] rounded-full p-2 text-white">
                                    <FaSearch />
                                </button>
                                <h1 className="font-semibold text-[#8861B3]">One Click. One Cause. One Change.</h1>
                            </div>
                            <div className="flex items-center gap-2 text-xl">
                                <button className="bg-[#09867E] rounded-full p-2 text-white">
                                    <HiPhoto />
                                </button>
                                <h1 className="font-semibold text-[#8861B3]">Your Donation, Their Hope</h1>
                            </div>
                            <div className="flex items-center gap-2 text-xl">
                                <button className="bg-[#09867E] rounded-full p-2 text-white">
                                    <GoDeviceDesktop />
                                </button>
                                <h1 className="font-semibold text-[#8861B3]">Support Healing with Every Gift</h1>
                            </div>
                            <div className="flex items-center gap-2 text-xl">
                                <button className="bg-[#09867E] rounded-full p-2 text-white">
                                    <MdOutlineShoppingBag />
                                </button>
                                <h1 className="font-semibold text-[#8861B3]">
                                    Be the Reason Someone Smiles Today
                                </h1>
                            </div>
                            <div className="flex items-center gap-2 text-xl">
                                <button className="bg-[#09867E] rounded-full p-2 text-white">
                                    <TfiWrite />
                                </button>
                                <h1 className="font-semibold text-[#8861B3]">
                                    {" "}
                                    Together We Care, Together We Give
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="p-12 max-w-screen-xl px-5 mx-auto bg-[#8861B3] text-white dark:bg-gradient-to-r from-orange-300 via-orange-400 to-purple rounded-md mb-20 mt-12">
                <div className="md:flex justify-evenly items-center">
                    {/* Frist div */}
                    <div className="flex items-center gap-4">
                        <FaBell className="text-6xl" />
                        <div className="">
                            <h1 className="text-2xl font-semibold">
                                Get New Updates Notifications
                            </h1>
                            <p>Free Subscribe Out Newsletter Now!</p>
                        </div>
                    </div>
                    {/* second div */}
                    <div className="">
                        <form className="md:flex items-center gap-10">
                            <input
                                className="py-2 dark:text-black w-full mt-3 md:mt-0 md:w-96 ps-3 text-lg rounded-md outline-0 border text-white border-white"
                                type="email"
                                name="email"
                                id=""
                                placeholder="Type Your Email Address"
                            />
                            <input
                                className="bg-[#8861B3] shadow-md shadow-white px-8 py-2 mt-3 md:mt-0 rounded-md text-white cursor-pointer"
                                type="submit"
                                value="Submit"
                            />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;