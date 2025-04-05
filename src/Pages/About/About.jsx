import { FaBell } from "react-icons/fa6";

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