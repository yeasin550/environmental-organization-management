import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
const ManageUsers = () => {
    const [users, setUsers] = useState([]);

    // Fetch users from backend
    useEffect(() => {
        fetch("https://management-server-flame.vercel.app/users") // Update with your backend URL
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error("Error fetching users:", error));
    }, []);


    const handleDelete = async (email) => {
        // Show SweetAlert confirmation dialog before deleting
        const confirmDelete = await Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to delete this user?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        });

        if (!confirmDelete.isConfirmed) return;

        try {
            // Send a DELETE request to the backend to delete the user
            const res = await fetch(`https://management-server-flame.vercel.app/users/${email}`, {
                method: "DELETE",
            });

            const result = await res.json();  // Parse the JSON response

            if (res.ok) {
                // Successfully deleted the user
                setUsers((prevUsers) => prevUsers.filter((user) => user.email !== email));

                // Show success SweetAlert
                Swal.fire({
                    title: 'Deleted!',
                    text: result.message || 'The user has been deleted successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
            } else {
                // Log and display the error message from the backend
                console.error("Failed to delete user:", result.message);

                // Show error SweetAlert
                Swal.fire({
                    title: 'Error!',
                    text: result.message || 'There was a problem deleting the user.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        } catch (error) {
            console.error("Error:", error);

            // Show error SweetAlert if there's a network or fetch error
            Swal.fire({
                title: 'Error!',
                text: 'There was an error while deleting the user. Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };


    return (
        <div className="w-full">
            <div className="text-gray-900 bg-gray-200 h-screen w-full">
                <div className="px-4 py-1 flex">
                    <h1 className="text-3xl font-semibold">Users</h1>
                </div>
                <div className="px-3 py-2 flex justify-center">
                    <table className="w-full text-md bg-white shadow-md rounded mb-4">
                        <thead className="rounded-lg">
                            <tr className="border-b bg-gray-100 text-lg">
                                <th className="text-left p-3 px-5">Name</th>
                                <th className="text-left p-3 px-5">Email</th>
                                <th className="text-left p-3 px-5">Role</th>
                                <th className="text-right p-3 px-12">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user._id} className="border-b hover:bg-orange-100 text-16px rounded-lg">
                                    <td className="p-3 px-5">{user.name}</td>
                                    <td className="p-3 px-5">{user.email}</td>
                                    <td className="p-3 px-5">{user.role}</td>
                                    <td className="p-3 px-5 flex justify-end">
                                        <button
                                            type="button"
                                            className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded cursor-pointer"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleDelete(user.email)}

                                            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded cursor-pointer"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;






// <table className="min-w-full divide-y divide-gray-200">
//     <thead>
//         <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Name
//             </th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Email
//             </th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Role
//             </th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Status
//             </th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Action
//             </th>
//         </tr>
//     </thead>
//     <tbody className="bg-white divide-y divide-gray-200">
//         <tr>
//             <td className="px-6 py-4 whitespace-nowrap">Jane Doe</td>
//             <td className="px-6 py-4 whitespace-nowrap">jane@example.com</td>
//             <td className="px-6 py-4 whitespace-nowrap">Admin</td>
//             <td className="px-6 py-4 whitespace-nowrap">
//                 <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
//                     Active
//                 </span>
//             </td>
//             <td className="px-6 py-4 whitespace-nowrap">
//                 <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
//                     Edit
//                 </button>
//                 <button className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
//                     Delete
//                 </button>
//             </td>
//         </tr>
//         <tr>
//             <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
//             <td className="px-6 py-4 whitespace-nowrap">john@example.com</td>
//             <td className="px-6 py-4 whitespace-nowrap">User</td>
//             <td className="px-6 py-4 whitespace-nowrap">
//                 <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
//                     Inactive
//                 </span>
//             </td>
//             <td className="px-6 py-4 whitespace-nowrap">
//                 <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
//                     Edit
//                 </button>
//                 <button className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
//                     Delete
//                 </button>
//             </td>
//         </tr>
//     </tbody>
// </table>
