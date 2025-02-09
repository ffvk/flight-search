import React, { useState } from "react";

const Demo = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);

  };

  const decrement = () => {
    setCount((prevCount) => prevCount > 0 ? prevCount - 1 : prevCount);
    console.log("call")
  };

  return ( 
    <div>
      <button onClick={increment}>increment</button>

      <div className="mt-4 text-gray-800 font-bold">
        Button Clicked: {count}
      </div>
       {count > 0 && (<button onClick={decrement}>decrement</button>)
       } 
    </div>
  );
};

export default Demo;