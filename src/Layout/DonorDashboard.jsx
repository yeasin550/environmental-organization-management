
import { Outlet, Link } from "react-router-dom";
const DonorDashboard = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-white">
                <div className="p-4 border-b border-gray-800">
                    <div className="flex items-center justify-between">
                        <img
                            src="https://tailwindflex.com/images/logo.svg"
                            alt="Logo"
                            className="h-8 w-auto"
                        />
                        <span className="text-xl font-bold">Donor Dashboard</span>
                    </div>
                </div>
                {/* Navigation */}
                <nav className="mt-5 px-2">
                    <div className="space-y-4">
                        <Link
                            to="overview"
                            className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg bg-gray-800 text-white group transition-all duration-200 hover:bg-gray-700"
                        >
                            Overview
                        </Link>
                        <Link
                            to="manage-users"
                            className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Manage Users
                        </Link>
                        <Link
                            to="event-management"
                            className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Event Management
                        </Link>
                        <Link
                            to="donations"
                            className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Donations
                        </Link>
                        <Link
                            to="reports"
                            className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Reports
                        </Link>
                        <Link
                            to="analytics"
                            className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Analytics
                        </Link>
                        <Link
                            to="/"
                            className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Home
                        </Link>
                    </div>
                </nav>
            </aside>
            {/* Main Content */}
            <main className="flex-1 p-6">
                <Outlet />
            </main>
        </div>
    );
};

export default DonorDashboard;