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
import Tabs from "./pages/tabs";
import TeacherPage from "./pages/teacherPage";
import StaffPage from "./pages/staffPage";
import ParentsPage from "./pages/parentsPage";
import Products from "./pages/products";
import Krypto from "./pages/krypto";
import NewKrypto from "./pages/newKrypto";
import ProductPage from "./pages/checkout/ProductPage";
import Subscriber from "./pages/subscriber";
import AddPrdctForm from "./form/addPrdctForm";
import JoinMeetingPage from "./pages/joinMeetingPage";
import Gmeet from "./pages/gmeet";
import UserPage from "./pages/userPage";
import PatientPage from "./pages/medication/patientPage";
import Home from "./pages/singularies website/home/home";
import SingulariesGroup from "./pages/singularies website/group/singulariesGroup";
import Start from "./pages/singularies website/what we do/start";
import Started from "./pages/singularies website/how we do it/started";
import NavbarPage from "./components/singularies header and footer/navbarPage";
import JoinForm from "./pages/singularies website/home/joinForm";
import Form2 from "./pages/singularies website/home/form2";
import PlaygroundAPI from "./pages/playgroundAPI";
// import PatientPage from "./pages/medication/patientPage";
// import Subscriber from "./pages/subscriber";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/promps" element={<Promps />} />
        <Route path="/subPromps" element={<SubsPromps />} />
        <Route path="/demo2" element={<Demo2 />} />
        <Route path="/status-badge" element={<StatusBadge />} />
        <Route path="/Build" element={<Build />} />
        <Route path="/B1" element={<B1 />} />
        <Route path="/Sin" element={<Sin />} />
        <Route path="/user" element={<User />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
        {/* <Route path="/login" element={<Login/>} /> */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/itemDetails" element={<ItemDetails />} />
        <Route path="/tabs" element={<Tabs />} />
        <Route path="/teacherPage" element={<TeacherPage />} />
        <Route path="/staffPage" element={<StaffPage />} />
        <Route path="/parentsPage" element={<ParentsPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/krypto" element={<Krypto />} />
        <Route path="/newkrypto" element={<NewKrypto />} />
        <Route path="/checkout" element={<ProductPage />} />
        <Route path="/subscriber" element={<Subscriber />} />
        <Route path="/joinmeeting" element={<JoinMeetingPage />} />
        <Route path="/gmeet" element={<Gmeet />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/patient" element={<PatientPage />} />
        <Route path="/singularies.ventures" element={<NavbarPage />} />
        <Route path="/joinform" element={<JoinForm />} />
        <Route path="/form" element={<Form2 />} />
        <Route path="/playgroundAPI" element={<PlaygroundAPI />} />

        <Route
          path="/singularies.ventures/singularies-group/"
          element={<SingulariesGroup />}
        />
        <Route path="/singularies.ventures/what-we-do/" element={<Start />} />
        <Route
          path="/singularies.ventures/how-we-do-it/"
          element={<Started />}
        />

        {/* <Route path="/addProductForm" element={<AddPrdctForm />} /> */}

        <Route path="/flight-results" element={<FlightResults />} />
      </Routes>
    </Router>
  );
};

export default App;
