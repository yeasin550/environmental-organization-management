import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { signIn } = useContext(AuthContext);
  // const { signIn, googleSingIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  // Toggle password visibility
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    setError("");

    signIn(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User Logged In Successfully");

        // Show success SweetAlert
        Swal.fire({
          title: 'Logged In!',
          text: 'You have successfully logged in.',
          icon: 'success',
          confirmButtonText: 'OK',
        });

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setError("User did not match");

        // Show error SweetAlert
        Swal.fire({
          title: 'Error!',
          text: 'User credentials did not match. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      });
  };

  // const handleGoogleSignIn = () => {
  //   googleSingIn()
  //     .then((result) => {
  //       console.log(result.user);
  //       navigate(from, { replace: true });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div data-aos="zoom-in">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto bg-white px-8 py-5 shadow-md mb-5 mt-20 rounded-md border"
      >
        <h2 className="text-3xl font-bold mb-2 text-center">Please Login</h2>
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
          <input
            className="border border-gray-400 p-2 w-full rounded-md"
            id="email"
            type="email"
            placeholder="Enter Your Email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">Password</label>
          <div className="relative">
            <input
              className="border border-gray-400 p-2 w-full rounded-md"
              id="password"
              type={showPassword ? "text" : "password"} // Toggle between text and password
              placeholder="Enter Your Password"
              {...register("password", { required: "Password is required" })}
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
        <button className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 mt-2">
          Login
        </button>
        {/* <div className="flex items-center justify-center">
          <hr className="border-gray-400 flex-grow" />
          <span className="px-4 text-gray-500 font-semibold">Or</span>
          <hr className="border-gray-400 flex-grow" />
        </div>
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full text-gray-800 font-semibold rounded-md bg-white hover:bg-gray-100 hover:border2 hover:border-green-400 py-2 px-4 border-2 border-gray-700"
        >
          Sign in with Google
        </button> */}
        <p className="mt-3">
          Create a new account ?
          <Link className="text-primary" to="/register"> Register </Link>
        </p>
        <p className="text-red-700">{error}</p>
        <p className="text-green-700">{success}</p>
      </form>
    </div>
  );
};

export default Login;