import React, { useState } from 'react'
import S1 from './s1'



const B1 = () => {

  const [value,setValue] = useState("pending");

  const handleChange = (e : any) => {
setValue(e);

  }
  return (
    <div>
      <div className="">
       
      <button type="button"         onClick={() => handleChange("active")}  className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">active</button>
      <button type="button"  onClick={() => handleChange("inactive")} className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">inactive</button>
      <button type="button"    onClick={() => handleChange("pending")}  className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">pending</button>

      </div>
      <S1 status={value} />

    </div>

  )
}

export default B1