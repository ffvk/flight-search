import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const passwordSubmit = (e: any) => {
    e.preventDefault(); // Prevent page reload

    if (!newPassword || !confirmPassword) {
      toast.error("Please fill in both fields.");
      return;
    }

    if (newPassword === confirmPassword) {
      toast.success("Password updated successfully!");
      navigate("/login");
      console.log("Success");

      // Add further logic such as API call here
    } else {
      toast.error("Passwords do not match!");
      console.log("Error");
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-emerald-900">
        <form
          className="flex flex-col gap-4 w-1/3  bg-emerald-700 p-6 shadow-lg rounded-2xl"
          onSubmit={passwordSubmit}
        >
          <h1 className=" panel-title text-3xl font-serif text-white ml-20">
            Reset Password
          </h1>

          <label className="font-medium">New Password</label>
          <input
            className="w-full pl-10 pr-4 py-2 border-2 rounded-full  focus:ring-accent focus:border-accent outline-none bg-transparent border-white"
            onChange={(e) => setNewPassword(e.target.value)}
            value={newPassword}
            placeholder="Enter new password"
            type="password"
          />

          <label className="font-medium">Confirm Password</label>
          <input
            className="w-full pl-10 pr-4 py-2 border-2 rounded-full  focus:ring-accent focus:border-accent outline-none bg-transparent border-white"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            placeholder="Confirm password"
            type="password"
          />

          <button
            type="submit"
            className="w-full bg-white border text-dark py-2 rounded-full 
            transition-all disabled:bg-gray-400 hover:bg-gray-300 "
          >
            Submit
          </button>

          <div className="flex justify-center">
            <Link
              className="text-white cursor-pointer hover:underline mr-2"
              to="/"
            >
              Login
            </Link>
            <p>Or</p>
            <Link
              className="text-white cursor-pointer hover:underline ml-2"
              to="register"
            >
              Signin
            </Link>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ForgetPassword;
