import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { createUser, updateProfileLogin } = useContext(AuthContext);
  // const { createUser, googleSingIn, updateProfileLogin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  // Toggle password visibility
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/login";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    setError("");
    setSuccess("");

    try {
      // Create user with Firebase or authentication service
      const result = await createUser(data.email, data.password, data.role);
      const loggedUser = result.user;
      console.log("User Created:", loggedUser);
      setSuccess("Registration successful");

      // User data to send to backend
      const userData = {
        name: data.name || "User", // Default name if empty
        email: data.email,
        password: data.password,
        role: data.role || "user", // Default role if empty
        photo: data.photo || "", // Ensure photo is not undefined
      };

      // Send user data to backend for MongoDB storage
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const resultData = await response.json();
      console.log("User saved in DB:", resultData);

      if (resultData.message === "user already exists") {
        setError("User already exists. Please log in.");
        return;
      }

      reset(); // Reset form fields
      navigate(from, { replace: true });
      handleProfile(data.name, data.photo);

      // Show SweetAlert after successful registration
      Swal.fire({
        title: 'Success!',
        text: 'Registration successful. You can now log in.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    } catch (error) {
      console.error("Error:", error);
      setError(error.message || "Registration failed. Please try again.");
    }
  };


  const handleProfile = async (name, photoURL) => {
    try {
      await updateProfileLogin({ displayName: name, photoURL });
    } catch (error) {
      console.error("Profile update error:", error);
      setError(error.message);
    }
  };



  // const handleGoogleSignIn = () => {
  //   googleSingIn()
  //     .then((result) => {
  //       const loggedUser = result.user;
  //       console.log(loggedUser);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="h-screen">
      <h1 className="text-center font-bold text-3xl mt-5">Create your profile!</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto border px-8 py-5 shadow-md mt-6 rounded-md">
        <div className="mb-2">
          <label className="block font-medium">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: "Name is required" })}
            className="w-full p-2 border rounded-md"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
        <div className="mb-2">
          <label className="block font-medium">Role</label>
          <select
            {...register("role", { required: "Role is required" })}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select a role</option>
            <option value="Admin">Admin</option>
            <option value="Volunteer">Volunteer</option>
            <option value="Donor">Donor</option>
          </select>
          {errors.role && (
            <p className="text-red-500 text-sm">{errors.role.message}</p>
          )}
        </div>

        <div className="mb-2">
          <label className="block font-medium">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            {...register("email", { required: "Email is required" })}
            className="w-full p-2 border rounded-md"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div className="mb-2">
          <label className="block font-medium">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"} // Toggle between text and password
              placeholder="Input your password"
              {...register("password", { required: "Password is required" })}
              className="w-full p-2 border rounded-md"
            />
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              {showPassword ? <FaEye className="text-xl"/> : <FaEyeSlash className="text-xl"/>} {/* Toggle eye icons */}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <button className="bg-blue-500 cursor-pointer hover:bg-blue-600 rounded w-full text-white font-bold py-2 px-4 mt-2">
          Register
        </button>

        {/* <div className="flex items-center justify-center">
          <hr className="border-gray-400 flex-grow" />
          <span className="px-4 font-bold">Or</span>
          <hr className="border-gray-400 flex-grow" />
        </div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border-2 border-gray-700 rounded-md"
        >
          Sign in with Google
        </button> */}

        <p className="mt-3">
          Already Have An Account?
          <Link className="text-primary" to="/login">
            Login
          </Link>
        </p>

        <p className="text-red-700">{error}</p>
        <p className="text-green-700">{success}</p>
      </form>
    </div>
  );
};

export default Register;
