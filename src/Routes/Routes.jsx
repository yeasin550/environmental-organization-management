
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import ManageUsers from "../components/Dashboard/Admin/ManageUsers/ManageUsers";
import EventManagement from "../components/Dashboard/Admin/EventManagement/EventManagement";
import Overview from "../components/Dashboard/Admin/Overview/Overview";
import About from "../Pages/About/About";
import Events from "../Pages/Events/Events";
import Donate from "../Pages/Donate/Donate";
import Contact from "../Pages/Contact/Contact";
import EventCreate from "../components/Dashboard/Admin/EventManagement/EventCreate";

// import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            { path: "/", element: <Home /> },
            { path: "about", element: <About /> },
            { path: "events", element: <Events /> },
            { path: "donate", element: <Donate /> },
            { path: "contact", element: <Contact /> },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
        ],
    },
    {
        path: "dashboard",
        element: <Dashboard />,
        children: [
            { path: "manage-users", element: <ManageUsers/> },
            { path: "event-management", element: <EventManagement/> },
            { path: "event-create", element: <EventCreate /> },
            {
                path: "overview",
                element: <Overview />
            }
        ]
    },
]);
export default router;
