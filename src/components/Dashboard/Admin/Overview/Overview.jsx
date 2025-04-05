import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { FaMoneyBill1Wave } from 'react-icons/fa6';
import { IoMdSettings } from 'react-icons/io';
import { IoNotifications } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { FaUsers, FaCalendarAlt, FaChartLine } from "react-icons/fa";
const Overview = () => {
    const [users, setUsers] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [events, setEvents] = useState([]);
    console.log(contacts)

    // Fetch donation information from backend
    useEffect(() => {
        fetch("https://management-server-flame.vercel.app/donations")
            .then(res => res.json())
            .then(data => {
                // setContacts(data);

                const totalAmount = data.reduce((sum, donation) => sum + donation.amount, 0);
                // console.log("Total Donation Amount:", totalAmount);
                setContacts(totalAmount)
            })
            .catch(err => console.error("Error fetching contacts:", err));
    }, []);

    
    // Fetch users from backend
    useEffect(() => {
        fetch("https://management-server-flame.vercel.app/users") // Update with your backend URL
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error("Error fetching users:", error));
    }, []);

    // Fetch events from backend
    useEffect(() => {
        fetch("https://management-server-flame.vercel.app/events") // Update with your backend URL
            .then((res) => res.json())
            .then((data) => setEvents(data))
            .catch((error) => console.error("Error fetching events:", error));
    }, []);


    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <nav className="bg-white border-b border-gray-200 px-4 py-2.5 flex justify-between items-center">
                <div className="flex items-center">
                    <div className="mr-2 font-bold">Dashboard / </div>
                    <Link to="/">
                        <div className="font-medium">Home</div>
                    </Link>
                </div>
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="px-4 py-2 border rounded-md w-64"
                        />
                    </div>
                    <button className="p-2 text-gray-600 hover:text-gray-800">
                        <FaUser className="text-xl cursor-pointer" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-gray-800">
                        <IoNotifications className="text-2xl cursor-pointer" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-gray-800">
                        <IoMdSettings className="text-2xl cursor-pointer" />
                    </button>
                </div>
            </nav>

            {/* Content */}
            <div className="p-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

                    <div className="bg-white border hover:border-red-500 rounded-lg shadow p-4 flex justify-between items-start">
                        <div>
                            <h3 className="text-lg font-medium mb-2">Donation Money</h3>
                            <p className="text-2xl font-bold">${contacts}</p>
                            <p className="text-[14px] font-semibold mt-2 text-green-500">
                                +55% than yesterday
                            </p>
                        </div>
                        <div className="bg-gray-800 py-3 px-4 rounded-md text-white text-xl">
                            <MoneyIcon />
                        </div>
                    </div>

                    <div className="bg-white border hover:border-red-500 rounded-lg shadow p-4 flex justify-between items-start">
                        <div>
                            <h3 className="text-lg font-medium mb-2">Users</h3>
                            <p className="text-2xl font-bold flex gap-2 items-center"><FaUsers />{users.length}</p>
                            <p className="text-[14px] font-semibold mt-2 text-green-500">
                                -3% than last months
                            </p>
                        </div>
                        <div className="bg-gray-800 py-3 px-4 rounded-md text-white text-xl">
                            <UsersIcon />
                        </div>
                    </div>

                    <div className="bg-white border hover:border-red-500 rounded-lg shadow p-4 flex justify-between items-start">
                        <div>
                            <h3 className="text-lg font-medium mb-2">New Events</h3>
                            <p className="text-2xl font-bold flex gap-2 items-center">{events.length}</p>
                            <p className="text-[14px] font-semibold mt-2 text-green-500">
                                -2% than yesterday
                            </p>
                        </div>
                        <div className="bg-gray-800 py-3 px-4 rounded-md text-white text-xl">
                            <ClientsIcon />
                        </div>
                    </div>

                    <div className="bg-white border hover:border-red-500 rounded-lg shadow p-4 flex justify-between items-start">
                        <div>
                            <h3 className="text-lg font-medium mb-2">Sales</h3>
                            <p className="text-2xl font-bold flex gap-2 items-center">{events.length}</p>
                            <p className="text-[14px] font-semibold mt-2 text-green-500">
                                +5% than yesterday
                            </p>
                        </div>
                        <div className="bg-gray-800 py-3 px-4 rounded-md text-white text-xl">
                            <SalesIcon />
                        </div>
                    </div>
                </div>


                {/* Charts */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ChartCard
                        title="Website View"
                        subtitle="Last Campaign Performance"
                        status="campaign sent 2 days ago"
                        chart={<WebsiteViewChart />}
                    />
                    <ChartCard
                        title="Daily Sales"
                        subtitle="15% increase in today sales"
                        status="updated 4 min ago"
                        chart={<DailySalesChart />}
                    />
                    <ChartCard
                        title="Completed Tasks"
                        subtitle="Last Campaign Performance"
                        status="just updated"
                        chart={<CompletedTasksChart />}
                    />
                </div>
            </div>
        </div>
    );
};

// Component for stat cards
const StatCard = ({ title, value, change, trend, period, icon }) => {
    return (
        <div className="bg-white rounded-lg shadow p-6 flex justify-between items-start">
            <div>
                <h3 className="text-gray-500 font-medium mb-2">{title}</h3>
                <p className="text-2xl font-bold">{value}</p>
                <p className={`text-sm mt-2 ${trend === 'positive' ? 'text-green-500' : 'text-red-500'}`}>
                    {change} {period}
                </p>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg">
                {icon}
            </div>
        </div>
    );
};

// Component for chart cards
const ChartCard = ({ title, subtitle, status, chart }) => {
    return (
        <div className="bg-white rounded-lg shadow">
            <div className="p-4">
                {chart}
            </div>
            <div className="border-t border-gray-200 p-4">
                <h3 className="font-medium">{title}</h3>
                <p className="text-gray-600 text-sm">{subtitle}</p>
            </div>
            <div className="border-t border-gray-200 p-4 flex items-center text-gray-500 text-sm">
                <ClockIcon className="mr-2" /> {status}
            </div>
        </div>
    );
};


const MoneyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
);

const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const ClientsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
    </svg>
);

const SalesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// Chart Components
const WebsiteViewChart = () => {
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const values = [50, 18, 8, 20, 50, 8, 40];

    // Calculate max height for scaling
    const maxValue = Math.max(...values);

    return (
        <div className="h-48">
            <div className="flex h-40 items-end justify-between">
                {days.map((day, index) => (
                    <div key={day + index} className="flex flex-col items-center">
                        <div
                            className="w-4 bg-green-500 rounded-t"
                            style={{ height: `${(values[index] / maxValue) * 100}%` }}
                        ></div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
                {days.map((day, index) => (
                    <div key={day + index}>{day}</div>
                ))}
            </div>
        </div>
    );
};

const DailySalesChart = () => {
    const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const values = [30, 40, 300, 320, 500, 350, 200, 230, 500];

    // Calculate points for the line chart
    const points = [];
    const maxValue = Math.max(...values);
    const chartHeight = 160;

    months.forEach((month, index) => {
        const x = (index / (months.length - 1)) * 100;
        const y = chartHeight - ((values[index] / maxValue) * chartHeight);
        points.push(`${x},${y}`);
    });

    const pathData = `M ${points.join(' L ')}`;

    return (
        <div className="h-48">
            <svg width="100%" height="160" className="overflow-visible">
                <path
                    d={pathData}
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                {points.map((point, index) => {
                    const [x, y] = point.split(',');
                    return (
                        <circle
                            key={index}
                            cx={`${x}%`}
                            cy={y}
                            r="4"
                            fill="#3B82F6"
                        />
                    );
                })}
            </svg>
            <div className="flex justify-between mt-4 text-xs text-gray-500">
                {months.map(month => (
                    <div key={month}>{month}</div>
                ))}
            </div>
        </div>
    );
};

const CompletedTasksChart = () => {
    const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const values = [20, 30, 300, 200, 500, 250, 400, 230, 500];

    // Calculate points for the line chart
    const points = [];
    const maxValue = Math.max(...values);
    const chartHeight = 160;

    months.forEach((month, index) => {
        const x = (index / (months.length - 1)) * 100;
        const y = chartHeight - ((values[index] / maxValue) * chartHeight);
        points.push(`${x},${y}`);
    });

    const pathData = `M ${points.join(' L ')}`;

    return (
        <div className="h-48">
            <svg width="100%" height="160" className="overflow-visible">
                <path
                    d={pathData}
                    fill="none"
                    stroke="#22C55E"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                {points.map((point, index) => {
                    const [x, y] = point.split(',');
                    return (
                        <circle
                            key={index}
                            cx={`${x}%`}
                            cy={y}
                            r="4"
                            fill="#22C55E"
                        />
                    );
                })}
            </svg>
            <div className="flex justify-between mt-4 text-xs text-gray-500">
                {months.map(month => (
                    <div key={month}>{month}</div>
                ))}
            </div>
        </div>
    );
};

export default Overview;