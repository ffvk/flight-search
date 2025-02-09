import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';

const User = () => {

 const [firstname,setFirstname] = useState("");
 const [lastname,setLastname] = useState("");
 const [email,setEmail] = useState("");
 const [phone,setPhone] = useState("");
 const [left,setLeft] = useState("");
const [error,setError] = useState("");
 
const log = () => {
  

  if(!firstname && !lastname && !email && !phone)
  {
     setLeft("fill all the fields");
     toast.error("fill all the fields")
  }
  else if(!firstname)
  {
    setError("firstname required");
  }
  else{
    setLeft("");
    // alert("submitted succesfully");
    toast.success("submitted successfully")
  }
}


  return (
  <div className="grid justify-items-center place-items-center h-screen">
    <div className="grid justify-items-center border-2">
    <div className="inline-block gap-2 grid justify-items-center p-6 items-center">
      <div className="flex flex-col justify-center">
        <label className="flex justify-center">firstname </label>
      <input className="border-2" placeholder="enter firstname"
      value={firstname} 
      onChange={(e) => setFirstname(e.target.value)}></input>



      </div>
      <div className="flex flex-col">
        <label className="flex justify-center">lastname</label>
      <input className="border-2" placeholder="enter lastname"
      onChange={(e) => setLastname(e.target.value)} ></input>

      </div>

      <div className="flex flex-col">
        <label className="flex justify-center">email</label>
      <input className="border-2" placeholder="enter email" 
      onChange={(e) => setEmail(e.target.value)}></input>

      </div>

      <div className="flex flex-col">
        <label className="flex justify-center">phone number</label>
      <input className="border-2" placeholder="enter phone number" 
      onChange={(e) => setPhone(e.target.value)}></input>
      </div>

<p className="text-red-500">{left}</p>

    <button 
    onClick={log} 
    className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" type="submit">Submit</button>
    </div>
    </div>
    <ToastContainer />
  </div>  
  )
}
export default User