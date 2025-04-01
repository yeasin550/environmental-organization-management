import { useContext, useEffect, useState } from "react";
import AdminDashboard from "./AdminDashboard";
import VolunteerDashboard from "./VolunteerDashboard";
import DonorDashboard from "./DonorDashboard";
import { AuthContext } from "../providers/AuthProviders";

const Dashboard = () => {
    const { user, loading } = useContext(AuthContext);
    const [role, setRole] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    // console.log(role);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/users`) // Fetch all users
                .then((res) => res.json())
                .then((data) => {
                    // Find the user that matches the logged-in email
                    const foundUser = data.find((u) => u.email === user.email);

                    if (foundUser) {
                        // Destructure the role from the found user and normalize to lowercase
                        const { role } = foundUser;
                        setRole(role.toLowerCase()); // Convert role to lowercase to avoid case issues

                        setIsLoading(false);
                    } else {
                        console.warn("No user found with the current email");
                        setIsLoading(false);
                    }
                })
                .catch((error) => {
                    console.error("Error fetching user data:", error);
                    setIsLoading(false);
                });
        } else {
            setIsLoading(false);
        }
    }, [user]);

    if (loading || isLoading) {
        return <div className="flex justify-center items-center h-screen text-xl">Loading...</div>;
    }

    return (
        <div className="flex h-screen">
            {role === "admin" && <AdminDashboard />}
            {role === "volunteer" && <VolunteerDashboard />}
            {role === "donor" && <DonorDashboard />}
            {!role && <div className="flex justify-center items-center w-full">No role assigned</div>}
        </div>
    );
};

export default Dashboard;
