import React from 'react'

const S1 = ({status}: any) => {
    console.log("status",status)
    let status2 = "active";
    console.log("status2",status2)

    
    let colour;
switch(status)
{
  case "active":
    colour='bg-green-500 text-white';
    break;

    case "inactive":
      colour='bg-red-500 text-white';
      break;

      case "pending":
    colour='bg-black text-white';
    break;

}

  return (
    <div>
       <p className={`${colour}`}> hello </p>

    </div>
  )
}

export default S1