import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { loginAPI } from "../service/auth-service";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      setIsLoading(true);
      const data = new FormData();
      data.append("email", formData.email);
      data.append("password", formData.password);

      const result = await loginAPI(data);

      setTimeout(() => {
        toast.success("Login successful");
      }, 1000);
      localStorage.setItem("accessToken", result.access_token);
      localStorage.setItem("me", JSON.stringify(result.me));

      navigate("/product");
    } catch (error: any) {
      toast.error(error.message || "An unknown error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="">
        <form
          onSubmit={handleSubmit}
          className=" max-w-md  bg-emerald-700 p-6 space-y-6"
        >
          {/* Email Input */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white">
              <i className="fa-regular fa-user"></i>
            </span>
            <input
              type="text"
              name="email"
              className="w-full pl-10 pr-4 py-2 border-2 rounded-full  focus:ring-accent focus:border-accent outline-none bg-transparent border-white"
              placeholder="Email or Username"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white">
              <i className="fa-regular fa-lock"></i>
            </span>
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              className="w-full pl-10 pr-12 py-2 border rounded-full focus:ring-2 focus:ring-accent focus:border-accent outline-none bg-transparent border-2 border-white"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              onClick={togglePasswordVisibility}
            >
              <i
                className={`fa-duotone fa-${
                  passwordVisible ? "eye-slash" : "eye"
                }`}
              ></i>
            </button>
          </div>

          <div className="flex">
            <label className="md:w-2/3 block text-white ">
              <input className="mr-2 leading-tight" type="checkbox" />
              <span className="text-sm">Remember me</span>
            </label>
            {/* Forgot Password */}
            <Link
              to="/forgetpassword"
              className="text-accent hover:underline text-sm text-white "
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-white border text-dark py-2 rounded-full transition-all disabled:bg-gray-400 hover:bg-gray-300"
            disabled={isLoading}
          >
            {isLoading ? "wait.." : "Login"}
          </button>
          <div className="flex justify-center">
            <p>Don't have an account?</p>
            <Link
              className="text-white cursor-pointer hover:underline ml-2"
              to="register"
            >
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
