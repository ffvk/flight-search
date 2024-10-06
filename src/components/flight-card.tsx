import React from "react";

interface FlightCardProps {
  id: number;
  logo: string;
  name: string;
  flightNumber: string;
  time: string;
  route: string;
  duration: string;
  type: string;
  price: string;
  from: string;
  to: string;
  onClick: () => void; // Handle flight selection
}

const FlightCard: React.FC<FlightCardProps> = ({
  logo,
  flightNumber,
  name,
  time,
  route,
  duration,
  type,
  price,
  from,
  to,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="border rounded-lg shadow-md mx-8 flex cursor-pointer mb-4"
    >
      <div className="flex-col flex border-r-2 w-full p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-8">
            <img src={logo} alt="Airline Logo" className="h-6 mr-2" />
            <div>
              <span className="font-medium">{`${name} • ${flightNumber}`}</span>
              <div className="text-lg font-semibold">{time}</div>
            </div>
          </div>
          <div className="flex items-center gap-32">
            <div>
              <p className="text-sm text-gray-600">{route}</p>
              <div className="text-sm text-gray-600">{duration}</div>
            </div>
            <div className="text-sm text-green-600">{type}</div>
          </div>
        </div>
      </div>

      <div className="flex m-4 flex-col justify-between mt-4 border-gray-300 pl-4 gap-2">
        <p>From</p>
        <div className="text-xl font-bold">{price}</div>
        <button className="bg-teal-900 text-white rounded-md py-2 px-4 w-[10rem]">
          Select
        </button>
      </div>
    </div>
  );
};

export default FlightCard;
