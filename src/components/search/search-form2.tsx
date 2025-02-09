import React, { useState } from "react";
import Select from "../ui/select/select";
import SearchBar from "./search-bar";
import { Router, Routes, useNavigate } from "react-router-dom";


const SearchForm2 = ({
 
}) => {
 

 
  return (
    <div className="flex flex-col">
      <main className="flex-grow   ">
        <div className="">
          <div className="flex gap-2 w-full">
           <div className="flex">

            <div className=" ">
            <input
            type="name"
            id="deperture"
            value=""
            placeholder="select airport"
            className="bg-gray-200 text-white"  

            />
            </div>


            <div>
              <input
            type="name"
            id="deperture"
            value=""
            placeholder="select destination"
            className="bg-gray-200 text-white"  
            />
            </div>

            <div>
              <input
            type="name"
            id="deperture"
            value=""
            placeholder="dd-mm-yy"
            className="bg-gray-200 text-white"
            />
            </div>

            <div>
            <input
            type="name"
            id="deperture"
            value=""
            placeholder="dd-mm-yy"
            className="bg-gray-200 text-white"
            />
            </div>

           </div>
          
          </div>

          {/* Search Button */}
          <div className="flex items-center justify-end mt-4">
            <button
              className="flex  justify-center  items-center gap-2 bg-teal-900 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700"
             
            >
              Search flights
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SearchForm2;