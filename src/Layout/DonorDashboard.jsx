
import { Outlet, Link } from "react-router-dom";
const DonorDashboard = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-white h-full">
                <div className="p-4 border-b border-gray-800">
                    <div className="text-center">                   
                        <span className="text-xl font-bold">Donor Dashboard</span>
                    </div>
                </div>
                {/* Navigation */}
                <nav className="mt-5 px-2">
                    <div className="space-y-4">
                        <Link
                            to="my-profile"
                            className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg  text-white group transition-all duration-200 hover:bg-gray-700"
                        >
                            My Profile
                        </Link>
                        <Link
                            to="my-donations"
                            className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg  text-white group transition-all duration-200 hover:bg-gray-700"
                        >
                            My Donations
                        </Link>
                        <Link
                            to="donate-now"
                            className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg  text-white group transition-all duration-200 hover:bg-gray-700"
                        >
                            Donate Now
                        </Link>
                        <Link
                            to="transaction-history"
                            className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg  text-white group transition-all duration-200 hover:bg-gray-700"
                        >
                            Transaction History
                        </Link>
                      
                        <Link
                            to="/"
                            className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg  text-white group transition-all duration-200 hover:bg-gray-700"
                        >
                            Home
                        </Link>
                    </div>
                </nav>
            </aside>
            {/* Main Content */}
            <main className="flex-1 ml-64">
                <Outlet />
            </main>
        </div>
    );
};

export default DonorDashboard;