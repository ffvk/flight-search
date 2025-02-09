import React from 'react'

const PlusPromps = () => {
  const array = [
    {
      name : "Nandini",
      age : 20,
    },
    {
      name : "Nandini",
      age : 20,
      address : "rgj"
    },
    {
      name : "Nandini",
      age : 20,
    },
    {
      name : "Nandini",
      age : 20,
    },

  ] 
  return (
    <div> 
      <div className="place-items-center flex-col "> 
        {
          array.map((i)=> (
    <div className="border-2 inline-block p-4">

          <p>{i.name}</p>
          <p>{i.age}</p>
          <p>{i.address}</p>
          </div>
          ) )
        }
    </div>     
    </div>
  )
};
export default PlusPromps

