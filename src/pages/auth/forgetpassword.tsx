import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const passwordSubmit = (e : any) => {
    e.preventDefault();  // Prevent page reload

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
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="flex flex-col gap-4 w-1/3 bg-white p-6 rounded shadow-lg" onSubmit={passwordSubmit}>
        <h1 className="text-2xl font-semibold text-center">Reset Password</h1>

        <label className="font-medium">New Password</label>
        <input
          className="w-full border p-2 rounded"
          onChange={(e) => setNewPassword(e.target.value)}
          value={newPassword}
          placeholder="Enter new password"
          type="password"
        />

        <label className="font-medium">Confirm Password</label>
        <input
          className="w-full border p-2 rounded"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          placeholder="Confirm password"
          type="password"
        />
<div className="flex justify-center">
<Link className="text-blue-500 cursor-pointer hover:underline" to="/login">--LOGIN--</Link>

</div>

        <button type="submit" className="border p-2 rounded bg-blue-500 text-white hover:bg-blue-700">
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ForgetPassword;