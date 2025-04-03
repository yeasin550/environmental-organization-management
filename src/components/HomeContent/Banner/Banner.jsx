import banner from "../../../assets/banner.png";

const Banner = () => {
    return (
        <div
            className="relative w-full h-[500px] flex items-center px-10 bg-cover bg-center"
            style={{ backgroundImage: "url('https://img.freepik.com/free-photo/3d-dark-grunge-display-background-with-smoky-atmosphere_1048-16218.jpg?t=st=1743606124~exp=1743609724~hmac=1b1c2e18dd48c2c3b6df64d1c2555cfcd12380c8827cce7eb37a696174555dd0&w=826')" }}
        >
            <div className="absolute inset-0 bg-opacity-50"></div>

            <div className="relative md:flex md:w-10/12 mx-auto items-start justify-between">
                {/* Left Side - Text Content */}
                <div className="md:w-[530px] text-left text-white mt-28">
                    <h1 className="text-[30px] md:text-5xl font-bold leading-tight">
                        Make a Difference, One <br /> Donation at a Time
                    </h1>
                    <p className="text-lg mt-4">
                        Your kindness can change lives. Join us in creating a better world by helping those in need.
                    </p>
                    <div className="flex gap-2">

                    <button className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-sm text-lg font-semibold transition">
                        Donate Now
                    </button>
                    <button className="mt-6 px-6 py-[9px] border-2 rounded-sm text-lg font-semibold transition">
                        Contact Us
                    </button>
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="md:w-1/2 flex justify-end">
                    <img src={banner} alt="Donation Banner" className="w-[700px]" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
