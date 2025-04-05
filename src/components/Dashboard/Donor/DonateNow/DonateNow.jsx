import { useNavigate } from "react-router-dom";

const DonateNow = () => {
    const navigate = useNavigate();

    const handleDonate = () => {
        navigate("/donate");
    };

    return (
        <div className="flex items-center justify-center h-screen">
            {/* <div className="bg-white shadow-xl rounded-2xl p-8 w-11/12 mx-auto text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Donation Dashboard</h1>
                <p className="text-gray-600 mb-6">Thank you for your support! You can make a difference today.</p>
                <button
                    onClick={handleDonate}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 cursor-pointer"
                >
                    Donate Now
                </button>
            </div> */}
            <div className="relative bg-gray-900 block p-6 border border-gray-100 rounded-lg max-w-md mx-auto" href="#">

                <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                <div className="my-4">
                    <h2 className="text-white text-2xl font-bold pb-2">Welcome to Donation Dashboard</h2>
                    <p className="text-gray-300 py-1">Thank you for your support! You can make a difference today.</p>
                </div>

                <div className="flex justify-end">
                    <button onClick={handleDonate} className="px-2 py-1 text-white border border-gray-200 font-semibold rounded hover:bg-gray-800">Donate Now</button>
                </div>
            </div>
        </div>
    );
};

export default DonateNow;
