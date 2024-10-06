// src/pages/HomePage.js
import Header from "../components/header";

const IndexPage = () => {
  return (
    <>
      <main className="flex-grow container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4 flex justify-center">
          Welcome to Flight Search world
        </h1>
        <div className="border p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2 bg-gray-200 w-[6rem] flex justify-center">
            Flights
          </h2>

          <Header />
        </div>
      </main>
    </>
  );
};

export default IndexPage;
