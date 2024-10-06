const SearchBar = ({
  fromAirport,
  toAirport,
  departureDate,
  returnDate,
  onClick,
  onClose, // Add an onClose prop to handle the close action
}: any) => {
  return (
    <>
      <div className="mb-6 flex justify-between  ">
        <div
          className="flex items-center gap-4 border  border-gray-300 rounded-full px-4 py-2 shadow-md"
          onClick={onClick}
        >
          {/* From Airport */}
          <div className="flex items-center gap-1">
            <span className="font-semibold">{fromAirport?.code || "Na"} </span>
            <span className="text-gray-500">
              {fromAirport?.name || "Not selected"}
            </span>
          </div>

          <span className="text-gray-400">|</span>

          {/* To Airport */}
          <div className="flex items-center gap-1">
            <span className="font-semibold">
              {toAirport?.code || "Not selected"}
            </span>
            <span className="text-gray-500">
              {toAirport?.name || "Not selected"}
            </span>
          </div>

          <span className="text-gray-400">|</span>

          {/* Departure and Return Dates */}
          <div className="flex items-center gap-1">
            <span className="font-semibold">
              {departureDate || "Not selected"}
            </span>
            <span className="text-gray-400">-</span>
            <span className="font-semibold">
              {returnDate || "Not selected"}
            </span>
          </div>

          <div className="flex items-center justify-center ">
            <button className="border rounded-full p-2 w-10 h-10 flex items-center justify-center bg-slate-200">
              <button className="p-2 text-gray-600">Q</button>
            </button>
          </div>
        </div>

        <button
          className="ml-4 text-gray-500 hover:text-gray-700"
          onClick={onClose} // Trigger the close action
        >
          &#10005; {/* Unicode for cross (X) */}
        </button>
      </div>
    </>
  );
};

export default SearchBar;
