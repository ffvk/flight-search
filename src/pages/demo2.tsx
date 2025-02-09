import React, { useState } from "react";
export const Demo2 = () => {
  const [value, setValue] = useState("");

  const colorChange = (color: any) => {
    if (color == "dark") {
      setValue(color);
    } else {
      setValue(color);
    }
  };

  return (
    <div>
      <button
        onClick={() => colorChange("slate")}
        className="border-2 mr-2 p-4"
      >
        dark
      </button>
      <button
        onClick={() => colorChange("red")}
        className="border-2 p-4"
      >
        light
      </button>

      {/* Correct the className syntax for dynamic background color */}
      <p className={`p-4 border-4 bg-${value}-900`}>{value}</p>
    </div>
  );
};

export default Demo2;