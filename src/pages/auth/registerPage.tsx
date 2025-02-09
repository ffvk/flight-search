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
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <form className="flex flex-col gap-4 w-1/3 bg-white p-6 rounded shadow-lg" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-semibold text-center">Page</h1>
        <input
          type="text"
          className="w-full border p-2 rounded"
          placeholder="Enter first name"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        {errors.firstname && <p className="text-red-500">{errors.firstname[0]}</p>}

        <input
          type="text"
          className="w-full border p-2 rounded"
          placeholder="Enter last name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        {errors.lastname && <p className="text-red-500">{errors.lastname[0]}</p>}

        <input
          type="email"
          className="w-full border p-2 rounded"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-red-500">{errors.email[0]}</p>}

        <input
          type="password"
          className="w-full border p-2 rounded"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="text-red-500">{errors.password[0]}</p>}
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

export default RegisterPage;