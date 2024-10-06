import React, { useState } from "react";
import Select from "../ui/select/select";
import SearchBar from "./search-bar";
import { Router, Routes, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
type Airport = {
  name: string;
  code: string;
  city: string;
  country: string;
};

const SearchForm = ({
  fromAirport: initialFromAirport,
  toAirport: initialToAirport,
  departureDate: initialDepartureDate,
  returnDate: initialReturnDate,
  onSearch,
}: any) => {
  const [fromAirport, setFromAirport] = useState(initialFromAirport || null);
  const [toAirport, setToAirport] = useState(initialToAirport || null);
  const [departureDate, setDepartureDate] = useState(
    initialDepartureDate || ""
  );
  const [returnDate, setReturnDate] = useState(initialReturnDate || "");
  const navigate = useNavigate();

  const airports = [
    {
      name: "Indira Gandhi International Airport",
      code: "DEL",
      city: "New Delhi",
      country: "India",
    },
    {
      name: "Chhatrapati Shivaji Maharaj International Airport",
      code: "BOM",
      city: "Mumbai",
      country: "India",
    },
    {
      name: "John F. Kennedy International Airport",
      code: "JFK",
      city: "New York",
      country: "United States",
    },
    {
      name: "Dubai International Airport",
      code: "DXB",
      city: "Dubai",
      country: "United Arab Emirates",
    },
    {
      name: "Heathrow Airport",
      code: "LHR",
      city: "London",
      country: "United Kingdom",
    },
    {
      name: "Singapore Changi Airport",
      code: "SIN",
      city: "Singapore",
      country: "Singapore",
    },
    {
      name: "Los Angeles International Airport",
      code: "LAX",
      city: "Los Angeles",
      country: "United States",
    },
    {
      name: "Beijing Capital International Airport",
      code: "PEK",
      city: "Beijing",
      country: "China",
    },
    {
      name: "Sydney Kingsford Smith International Airport",
      code: "SYD",
      city: "Sydney",
      country: "Australia",
    },
    {
      name: "Tokyo Haneda Airport",
      code: "HND",
      city: "Tokyo",
      country: "Japan",
    },
  ];

  const handleFromAirportChange = (selectedOption: any) => {
    setFromAirport(selectedOption);
  };

  const handleToAirportChange = (selectedOption: any) => {
    setToAirport(selectedOption);
  };

  const handleSearch = () => {
    // Navigate to the flight details page and pass search form data as state
    navigate("/flight-results", {
      state: {
        fromAirport,
        toAirport,
        departureDate,
        returnDate,
      },
    });

    if (onSearch) onSearch();
  };

  return (
    <div className="flex flex-col">
      <main className="flex-grow   ">
        <div className="">
          <div className="flex gap-2 w-full">
            <div className="flex-1">
              <Select
                className="w-full"
                options={airports}
                getOptionLabel={(option: any) =>
                  `${option.name} (${option.code})`
                }
                getOptionValue={(option: any) => option.code}
                placeholder="Select Airport"
                isClearable={true}
                value={fromAirport}
                onChange={handleFromAirportChange}
              />
            </div>

            <div className="flex items-center justify-center ">
              <button className="border rounded-full p-2 w-10 h-10 flex items-center justify-center bg-slate-200">
                <span className="text-lg">↔️</span>
              </button>
            </div>

            {/* To Airport Select */}
            <div className="flex-1">
              <Select
                className="w-full"
                options={airports}
                getOptionLabel={(option: any) =>
                  `${option.name} (${option.code})`
                }
                getOptionValue={(option: any) => option.code}
                placeholder="Select Airport"
                isClearable={true}
                value={toAirport}
                onChange={handleToAirportChange}
              />
            </div>

            {/* Departure Date */}
            <div className="flex-1 border">
              <input
                type="date"
                id="departure"
                className="mt-1  p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
              />
            </div>

            {/* Return Date */}
            <div className="flex-1 border ">
              <input
                type="date"
                id="return"
                className="mt-1 block p-2 w-full  rounded-md shadow-sm focus:ring "
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="flex items-center justify-end mt-4">
            <button
              className="flex  justify-center  items-center gap-2 bg-teal-900 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700"
              onClick={handleSearch}
            >
              <FaSearch />
              Search flights
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SearchForm;
