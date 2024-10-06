// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndexPage from "./pages";

import FlightResults from "./pages/flight-results";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />

        <Route path="/flight-results" element={<FlightResults />} />
      </Routes>
    </Router>
  );
};

export default App;
