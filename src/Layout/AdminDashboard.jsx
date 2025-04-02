import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
const AdminDashboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex h-screen w-full">
            {/* Sidebar */}
            {/* <aside className="w-64 bg-gray-900 text-white top-0 sticky" /> */}
            <aside className="w-64 bg-gray-900 text-white fixed top-0 left-0 h-full">


                <div className="p-4 border-b border-gray-800">
                    <div className="text-center">                       
                        <h1 className="text-xl font-bold">Admin Dashboard</h1>
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
                            to="overview"
                            className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg  text-white group transition-all duration-200 hover:bg-gray-700"
                        >
                            Overview
                        </Link>
                        <Link
                            to="manage-users"
                            className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Manage Users
                        </Link>
                        <div className="relative">
                            <h1
                                // to="event-management"
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"
                            >
                                Event
                            </h1>

                            {isOpen && (
                                <div className="absolute left-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-lg">
                                    <Link
                                        to="event-create"
                                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        Event Create
                                    </Link>
                                    <Link
                                        to="event-management"
                                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                                    >
                                        Event Management
                                    </Link>
                                </div>
                            )}
                        </div>
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
                            className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg  hover:bg-gray-700 text-white bg-gray-700"
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

export default AdminDashboard;