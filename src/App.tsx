// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndexPage from "./pages";

import FlightResults from "./pages/flight-results";
import Demo from "./pages/demo";
import Demo2 from "./pages/demo2";
import Promps from "./pages/promps";

import SubsPromps from "./pages/subsPromps";
import StatusBadge from "./pages/status-badge";
import Build from "./pages/build";
import B1 from "./pages/b1";
import Sin from "./pages/sin";

import User from "./pages/user";
import Zoduser from "./pages/auth/registerPage";
import Forgetpassword from "./pages/auth/forgetpassword";
import Login from "./pages/auth/login";
import RegisterPage from "./pages/auth/registerPage";
import HomePage from "./pages/homePage";
import ItemDetails from "./pages/itemDetails";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/promps" element={<Promps />} />
        <Route path="/subPromps" element={<SubsPromps />} />
        <Route path="/demo2" element={<Demo2 />} />
        <Route path="/status-badge" element={< StatusBadge />} />
        <Route path="/Build" element={< Build />} />
        <Route path="/B1" element={< B1 />} />
       
        <Route path="/Sin" element={< Sin />} />
        <Route path="/user" element={<User />} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/forgetpassword" element={<Forgetpassword/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/itemDetails" element={<ItemDetails/>} />






        <Route path="/flight-results" element={<FlightResults />} />

      </Routes>
    </Router>
  );
};

export default App;
