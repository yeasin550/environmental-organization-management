
const OurMission = () => {
    return (
        <div className="bg-gray-100 md:px-10 px-2 py-20">
            <div className="w-6/12 mx-auto my-12 text-center space-y-2">
                <p className="text-[#FF5A27] font-bold text-lg">Mission & Goals</p>
                <h1 className="text-5xl font-semibold">Our Mission</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="py-8 px-7 space-y-3 rounded-xl border-t-8 border-t-[#FF5A27] bg-white">
                    <h1 className="text-2xl font-bold"> Empower Lives</h1>
                    <p>We strive to create a world where generosity transforms lives. Our mission is to provide essential resources to those in need, ensuring a brighter future for underprivileged communities.</p>
                </div>
                <div className="py-8 px-7 space-y-3 rounded-xl border-t-8 border-t-[#FF5A27] bg-white">
                    <h1 className="text-2xl font-bold">Trusted Giving</h1>
                    <p>We ensure every donation reaches its intended cause with full transparency. Our goal is to build trust and accountability, making charitable giving more impactful.</p>
                </div>
                <div className="py-8 px-7 space-y-3 rounded-xl border-t-8 border-t-[#FF5A27] bg-white">
                    <h1 className="text-2xl font-bold"> Global Impact</h1>
                    <p>We aim to extend our support worldwide, reaching more people every year. Through strategic partnerships and dedicated volunteers, we work to maximize the positive change we bring to society.</p>
                </div>
            </div>
        </div>
    );
};

export default OurMission;