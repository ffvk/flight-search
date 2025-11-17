import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { z } from "zod";

// Define the schema
const userSchema = z.object({
  firstname: z.string().min(2, "First name must be at least 2 characters"),
  lastname: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Define TypeScript type for form data
type FormData = z.infer<typeof userSchema>;

// Define TypeScript type for error messages
type ErrorState = Partial<Record<keyof FormData, string[]>>;

const RegisterPage = () => {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<ErrorState>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = { firstname, lastname, email, password };

    try {
      userSchema.parse(formData);
      toast.success("Form submitted successfully!");

      setErrors({});
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors = err.formErrors.fieldErrors as ErrorState;
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen bg-emerald-900 ">
        <form
          className="flex flex-col gap-4 w-1/3 bg-emerald-700 p-6 rounded-2xl shadow-lg "
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl  text-center font-serif text-white ">
            Create account
          </h1>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border-2 rounded-full  focus:ring-accent focus:border-accent outline-none bg-transparent border-white"
            placeholder="Enter first name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          {errors.firstname && (
            <p className="text-red-500">{errors.firstname[0]}</p>
          )}

          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border-2 rounded-full  focus:ring-accent focus:border-accent outline-none bg-transparent border-white"
            placeholder="Enter last name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          {errors.lastname && (
            <p className="text-red-500">{errors.lastname[0]}</p>
          )}

          <input
            type="email"
            className="w-full pl-10 pr-4 py-2 border-2 rounded-full  focus:ring-accent focus:border-accent outline-none bg-transparent border-white"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500">{errors.email[0]}</p>}

          <input
            type="password"
            className="w-full pl-10 pr-4 py-2 border-2 rounded-full  focus:ring-accent focus:border-accent outline-none bg-transparent border-white"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password[0]}</p>
          )}

          <button
            type="submit"
            className="w-1/3 bg-white border text-dark py-2 
            rounded-full transition-all 
            disabled:bg-gray-400 place-self-center font-semibold"
          >
            Sign up
          </button>
          <div className="flex justify-center">
            <p>Already have an account?</p>
            <Link
              className="text-white cursor-pointer hover:underline ml-2"
              to="/"
            >
              Login
            </Link>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default RegisterPage;
