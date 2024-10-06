import React from "react";
import { FaSpinner, FaTwitch } from "react-icons/fa";
import { pic } from "../utils/placeholders";

const SearchingModel = ({ totalFlights }: any) => {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex justify-center">
          <img className="flex w-[6rem] mb-6" src={pic} alt="Chevron Down" />
        </div>
        <div className="flex  gap-4">
          <FaSpinner className="animate-spin text-blue-500 text-2xl" />
          <div>
            <p>Searching: {totalFlights} flights</p>
            <p className="text-sm  text-gray-500">Attaching Company rules</p>
            <p className="text-sm  text-gray-500">Serving best results</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchingModel;
