
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/HomeContent/Navbar/Navbar";
import Footer from "../components/HomeContent/Footer/Footer";

const Main = () => {
    const location = useLocation();
    const hideNavFooter = location.pathname === "/login" || location.pathname === "/register";

    return (
        <div>
            {!hideNavFooter && <Navbar />}
            <Outlet />
            {!hideNavFooter && <Footer />}
        </div>
    );
};

export default Main;



// import { Outlet } from "react-router-dom";
// import Navbar from "../components/HomeContent/Navbar/Navbar";
// import Footer from "../components/HomeContent/Footer/Footer";

// const Main = () => {
//     return <div>
//         <Navbar />
//         <Outlet />
//         <Footer />
//     </div>;
// };

// export default Main;