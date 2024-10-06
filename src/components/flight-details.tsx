import React from "react";

const FlightDetails = ({ flight }: any) => {
  if (!flight) {
    return (
      <div className="p-4 text-center text-gray-500">No flight selected</div>
    ); // Fallback if no flight is passed
  }

  return (
    <div className="p-4  ">
      <h2 className="text-xl font-bold mb-4 border-b pb-2">Flight Details</h2>

      <div className="flex justify-between items-center">
        <div className="flex flex-col space-y-4">
          <div className="flex items-start">
            <div className="flex flex-col items-start mr-4 space-y-1">
              <p className="text-sm text-gray-500 ml-6">{flight.time}</p>

              <div className="flex items-center">
                <span className="w-4 h-4 border-2 border-grey-700 rounded-full flex items-center justify-center"></span>

                <span className="ml-2">{flight.from}</span>
              </div>

              <div className="w-0.5 h-16 bg-gray-200 dark:bg-gray-700 rounded-full ml-1"></div>

              <div className="flex items-center ">
                <span className="w-4 h-4 border-2 border-grey-700 rounded-full flex items-center justify-center"></span>
                <p className="text-sm text-gray-500 ml-2">{flight.time}</p>
              </div>
              <span className="ml-6">{flight.to}</span>
            </div>
          </div>
        </div>

        <div className="flex ">
          <div>
            <img src="" alt="" />
          </div>
          <div className="flex flex-col ">
            <div className="flex justify-between">
              <span className=" text-sm">{flight.name}:</span>
              <span className="text-sm">{flight.flightNumber}</span>
            </div>
            <div className="flex ">
              <span className=" text-sm">Type:</span>
              <span className="text-sm">{flight.type}</span>
            </div>
            <div className="flex justify-between">
              <span className=" text-sm">Timing:</span>
              <span className="text-sm">{flight.time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;
