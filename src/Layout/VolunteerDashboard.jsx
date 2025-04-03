import { Outlet, Link } from "react-router-dom";

const VolunteerDashboard = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-white">
                <div className="p-4 border-b border-gray-800">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-bold">Volunteer Dashboard</h1>
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
                            to="available-events"
                            className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg  text-white group transition-all duration-200 hover:bg-gray-700"
                        >
                            Available Events
                        </Link>
                        <Link
                            to="my-assigned-events,"
                            className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            My Assigned Events
                        </Link>
                        <Link
                            to="progress-reports"
                            className="flex items-center px-4 py-2.5 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Progress Reports
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
            <main className="flex-1 ml-64">
                <Outlet />
            </main>
        </div>
    );
};

export default VolunteerDashboard;