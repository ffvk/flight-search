import { useEffect, useState } from "react";
import FlightDetails from "../components/flight-details";
import Header from "../components/header";
import SearchBar from "../components/search/search-bar";
import { useLocation } from "react-router-dom";
import SearchForm from "../components/search/search-form";
import SearchingModel from "../components/searching-model";
import FlightCard from "../components/flight-card";
type Flight = {
  id: number;
  logo: string;
  name: string;
  flightNumber: string;
  time: string;
  route: string;
  duration: string;
  type: string;
  from: string;
  to: string;
  price: string;
};

const FlightResults = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [showSearchForm, setShowSearchForm] = useState(false);
  const [showSearchingModal, setShowSearchingModal] = useState(true); // Modal state
  const [filteredFlights, setFilteredFlights] = useState<Flight[]>([]);
  const location = useLocation();
  const { fromAirport, toAirport, departureDate, returnDate } =
    location.state || {};

  const flights = [
    {
      id: 1,
      logo: "path-to-emirates-logo.svg",
      name: "Emirates",
      flightNumber: "EK 501",
      time: "6:30 AM - 9:30 AM",
      route: "BOM - DXB",
      duration: "3h 0min",
      type: "Non stop",
      from: "BOM - Chhatrapati Shivaji Maharaj International Airport",
      to: "DXB - Dubai International Airport",
      price: "AED 1,800.00",
    },
  ];

  useEffect(() => {
    setShowSearchingModal(true);

    const timer = setTimeout(() => {
      setShowSearchingModal(false);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const handleToggleSearchForm = () => {
    setShowSearchForm(!showSearchForm);
  };

  const handleToggleSearchForms = () => {
    setShowSearchingModal(true);
    const timer = setTimeout(() => {
      setShowSearchingModal(false);
    }, 1000);
    setShowSearchForm(false);

    return () => clearTimeout(timer);
  };

  const handleFlightClick = (flight: any) => {
    console.log("hii");
    setSelectedFlight(flight);
    setIsModalOpen(true);
  };

  const filterFlights = () => {
    const filtered = flights.filter((flight) => {
      const fromMatches = fromAirport
        ? flight.from.includes(fromAirport.code)
        : true;
      const toMatches = toAirport ? flight.to.includes(toAirport.code) : true;
      const departureMatches = departureDate
        ? flight.time.includes(departureDate)
        : true;
      const returnMatches = returnDate
        ? flight.time.includes(returnDate)
        : true;

      return fromMatches;
    });

    setFilteredFlights(filtered);
  };

  useEffect(() => {
    filterFlights();
  }, [fromAirport, toAirport, departureDate, returnDate]);

  return (
    <div>
      {/* Search components that should NOT be blurred */}
      <div className="pt-16 pb-4 border p-4 rounded-lg shadow-md  z-100">
        {showSearchForm ? (
          <SearchForm
            fromAirport={fromAirport}
            toAirport={toAirport}
            departureDate={departureDate}
            returnDate={returnDate}
            onSearch={handleToggleSearchForms} // Close form on search
          />
        ) : (
          <SearchBar
            fromAirport={fromAirport}
            toAirport={toAirport}
            departureDate={departureDate}
            returnDate={returnDate}
            onClick={handleToggleSearchForm} // Open form on click
          />
        )}
      </div>

      {/* Only apply blur to the rest of the content */}
      <div className={`m-8 ${showSearchingModal ? "blur-sm" : ""}`}>
        <h3 className="my-4 ml-8">
          Showing {filteredFlights.length} of {flights.length} results
        </h3>

        {filteredFlights.length > 0 ? (
          filteredFlights.map((flight) => (
            <FlightCard
              key={flight.id}
              {...flight} // Pass all flight details as props
              onClick={() => handleFlightClick(flight)} // This is correct
            />
          ))
        ) : (
          <div className="m-8">
            <p className="text-red-500 font-semibold">No data available</p>
          </div>
        )}

        {/* Conditional rendering of the FlightDetails modal */}
        {isModalOpen && (
          <div className="fixed inset-1 flex justify-end z-50">
            <div className="bg-white w-1/3 shadow-lg rounded-lg p-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="mb-4 text-red-500"
              >
                Close
              </button>
              <FlightDetails flight={selectedFlight} />
            </div>
          </div>
        )}
      </div>
      {showSearchingModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          {/* Overlay with background blur */}
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

          {/* Modal content */}
          <div className="bg-white w-1/3 shadow-lg rounded-lg p-4 relative z-10">
            <SearchingModel totalFlights={filteredFlights.length} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightResults;
