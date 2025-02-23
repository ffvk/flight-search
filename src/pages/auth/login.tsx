import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { z } from 'zod';

const loginSchema = z.object({

      email: z.string().email("Invalid email address"),
      password: z.string().min(6, "Password must be at least 6 characters"),
    
});

type FormData = z.infer<typeof loginSchema>;
type ErrorState = Partial<Record<keyof FormData, string[]>>;


const Login = () => {

 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");
 const [left,setLeft] = useState("");
const [error,setError] = useState<ErrorState>({});
  const navigate = useNavigate();

 
const log = (e: React.FormEvent) => {
  e.preventDefault();
  const formData = {email,password}

  try{
    loginSchema.parse(formData);
    toast.success("succesful");
    //navigate("/home");
    setTimeout(() => {
      navigate("/home");
    }, 5000);
    setError({});
  }
  
  catch(err) {
    if(err instanceof z.ZodError) {
        const fieldErrors = err.formErrors.fieldErrors as ErrorState;
        setError(fieldErrors);
    }
  }
}

 
   
  

  return (
  <div className="flex justify-center items-center h-screen bg-grey-100">
    <form className="flex flex-col gap-4 w-1/3 bg-white p-6 rounded shadow-lg">
       <h1 className="text-2xl font-semibold text-center">
        LOGIN</h1>
      
      <div className="flex flex-col">
        <label className=" font-medium">Email</label>
      <input className="w-full border p-2 rounded" placeholder="enter email" 
      onChange={(e) => setEmail(e.target.value)}/>

         {error.email && <p className="text-red-500">{error.email[0]}</p>}

      </div>

      <div className="flex flex-col">
        <label className=" font-medium">Password</label>
      <input className="w-full border p-2 rounded" placeholder="enter password" 
      onChange={(e) => setPassword(e.target.value)}/>

        {error.password && <p className="text-red-500">{error.password[0]}</p>}

      </div>
      <div className="flex justify-between">
        <Link to="/forgetpassword" className="text-blue-500 cursor-pointer hover:underline" 
      >Forget Password?</Link>
       <Link className="text-blue-500 cursor-pointer hover:underline"  to="/register">Register</Link>
      
      </div>


    <button 
    onClick={log} 
    className=" w-full border p-2 rounded bg-blue-500 text-white hover:bg-blue-700" type="submit">Login</button>
  
    <ToastContainer />
    </form>
  </div>  
  )
}
export default Login