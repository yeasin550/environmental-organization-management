
import { useContext, useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/donate.png";
import { AuthContext } from "../../../providers/AuthProviders";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    const toggleDropdown = () => {
        setOpen(!open);
    };
    // eslint-disable-next-line no-unused-vars
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleLogOut = () => {
        logOut()
            .then((result) => {
                console.log(result);
            })
            .catch((error) => console.log(error));
    };


    return (
        <div className="top-0 left-0 sticky z-50 bg-white border-b">
            <div className="flex items-center justify-between container mx-auto py-3">
                {/* Left Side: Logo */}
                <Link to="/" className="text-xl font-bold text-blue-600">
                    <img className='w-24' src={logo} alt="" />
                </Link>

                <div className="hidden md:flex space-x-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-gray-700 hover:text-blue-600 transition ${isActive ? "font-bold border-b-2 border-blue-600" : ""
                            }`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `text-gray-700 hover:text-blue-600 transition ${isActive ? "font-bold border-b-2 border-blue-600" : ""
                            }`
                        }
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        to="/events"
                        className={({ isActive }) =>
                            `text-gray-700 hover:text-blue-600 transition ${isActive ? "font-bold border-b-2 border-blue-600" : ""
                            }`
                        }
                    >
                        Events
                    </NavLink>
                    <NavLink
                        to="/donate"
                        className={({ isActive }) =>
                            `text-gray-700 hover:text-blue-600 transition ${isActive ? "font-bold border-b-2 border-blue-600" : ""
                            }`
                        }
                    >
                        Donate
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `text-gray-700 hover:text-blue-600 transition ${isActive ? "font-bold border-b-2 border-blue-600" : ""
                            }`
                        }
                    >
                        Contact
                    </NavLink>

                    {user ? (
                        <NavLink
                            to="/dashboard/my-profile"
                            className={({ isActive }) =>
                                `text-gray-700 hover:text-blue-600 transition ${isActive ? "font-bold border-b-2 border-blue-600" : ""
                                }`
                            }
                        >
                            Dashboard
                        </NavLink>
                    ) : (
                        ""
                    )}

                </div>


                {/* logout and profile */}

                <div className="relative">
                    {user ? (
                        <div className="flex items-center gap-3">
                            {/* Profile Image */}
                            <img
                                src={user.photoURL || "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"}
                                alt="Profile"
                                onClick={toggleDropdown}
                                className="w-12 h-12 rounded-full cursor-pointer border-2 border-indigo-500 hover:border-pink-500 transition"
                            />

                            {/* Dropdown */}
                            {open && (
                                <div className="absolute -right-4 mt-40 w-44 bg-purple-700 hover:text-black text-white shadow-lg rounded-md z-50">
                                    <Link
                                        to="/dashboard/my-profile"
                                        className="block px-4 py-2 hover:bg-gray-100"
                                    >
                                        Dashboard
                                    </Link>
                                    <button
                                        onClick={handleLogOut}
                                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                    >
                                        Logout
                                    </button>
                                    <Link to="/dashboard/my-profile" >
                                        <button className="w-full text-left px-4 py-2 hover:bg-gray-100" >
                                            Profile
                                        </button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link to="/login">
                            <button className="mt-3 px-5 py-2.5 bg-gradient-to-r from-green-500 to-indigo-500 text-white rounded-lg shadow-md transition-all hover:shadow-lg hover:from-pink-500 hover:to-red-500">
                                Login
                            </button>
                        </Link>
                    )}
                </div>
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden duration-100"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <>
                            <FaDeleteLeft className="text-3xl mr-2" />
                        </>
                    ) : (
                        <FiMenu className="text-3xl mr-2" />
                    )}
                </button>
            </div>
            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white border-t shadow-md">
                    <div className="flex flex-col items-center space-y-4 py-4">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `text-gray-700 hover:text-blue-600 transition ${isActive ? "font-bold border-b-2 border-blue-600" : ""
                                }`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `text-gray-700 hover:text-blue-600 transition ${isActive ? "font-bold border-b-2 border-blue-600" : ""
                                }`
                            }
                        >
                            About Us
                        </NavLink>
                        <NavLink
                            to="/events"
                            className={({ isActive }) =>
                                `text-gray-700 hover:text-blue-600 transition ${isActive ? "font-bold border-b-2 border-blue-600" : ""
                                }`
                            }
                        >
                            Events
                        </NavLink>
                        <NavLink
                            to="/donate"
                            className={({ isActive }) =>
                                `text-gray-700 hover:text-blue-600 transition ${isActive ? "font-bold border-b-2 border-blue-600" : ""
                                }`
                            }
                        >
                            Donate
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `text-gray-700 hover:text-blue-600 transition ${isActive ? "font-bold border-b-2 border-blue-600" : ""
                                }`
                            }
                        >
                            Contact
                        </NavLink>
                        {user ? (
                            <NavLink
                                to="/dashboard/my-profile"
                                className={({ isActive }) =>
                                    `text-gray-700 hover:text-blue-600 transition ${isActive ? "font-bold border-b-2 border-blue-600" : ""
                                    }`
                                }
                            >
                                Dashboard
                            </NavLink>
                        ) : (
                            ""
                        )}
                        <div className="w-full border-t border-gray-200"></div>

                        {/* logout and profile */}
                        <div className="">
                            {user ? (
                                <button
                                    onClick={handleLogOut}
                                    className="mt-3 px-5 py-2.5 bg-gradient-to-r from-green-500 to-indigo-500 text-white rounded-lg shadow-md transition-all hover:shadow-lg hover:from-pink-500 hover:to-red-500 font-bold"
                                >
                                    LogOut
                                </button>
                            ) : (
                                <Link to="/login">
                                    <button className="mt-3 px-5 py-2.5 bg-gradient-to-r from-green-500 to-indigo-500 text-white rounded-lg shadow-md transition-all hover:shadow-lg hover:from-pink-500 hover:to-red-500">
                                        Login
                                    </button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
