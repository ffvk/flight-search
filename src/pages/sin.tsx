import React, { useState } from 'react'

const Sin = () => {

const [username,setUsername] = useState("");
const [password,setPassword] = useState("");
const [username2,setUsername2] = useState("");
const [showpassword,setShowpassword] = useState(false);
const [error,setError] = useState("");
const [click,setClick] = useState(false);
const [error2,setError2] = useState("");


const submit = () => {
   if(!username && !password)
   {
   setError("all the field are required");
   }
   else if(!username)
   {
    setError("username required");
    }
   else if(!password){
    setError("password required");
   }
   else
   {
    setError("");
    setClick(true);
   }
}


const compare = (e : any) => {
  if(!click)
  {
    setError2("submit the first form");
    return;
  }
if(username==username2)
{
  setError2("");
  setShowpassword(true);
}
else{
  setError2("enter correct username");
  setShowpassword(false);
}
}


  return (
    <div>
      <div className="inline-block gap-2">
      <div className="flex flex-col">
        <label>username </label>
      <input placeholder="enter username" value={username}
          onChange={(e) => setUsername(e.target.value)} ></input>



      </div>
      <div className="flex flex-col">
        <label>password</label>
      <input placeholder="enter password"  value={password}
          onChange={(e) => setPassword(e.target.value)}></input>

      </div>
      {error && <p className="text-red-500">{error}</p>}

    <button className="border-2" type="submit" onClick={submit}>Submit</button>
    </div>


    <div className="inline-block gap-2">
      <div className="flex flex-col">
        <label>username2 </label>
      <input placeholder="enter username"  value={username2}
          onChange={(e) => setUsername2(e.target.value)}></input>

      </div>

      {showpassword && (
     <p>show password:{password}</p>

      )}
      {error2 && <p className="text-red-500">{error2}</p>}
      {/* {click && <p className="text-red-500">first button not clicked</p>} */}
    <button className="border-2" type="submit" onClick={compare}>Submit</button>
    </div>
    </div>
  )
}

export default Sin