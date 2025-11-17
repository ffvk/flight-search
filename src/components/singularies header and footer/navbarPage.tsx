import { useState } from "react";
import HomePage from "../../pages/singularies website/home/homePage";
import JoinForm from "../../pages/singularies website/home/joinForm";
import { useNavigate } from "react-router-dom";
import Layout from "./layout";

const NavbarPage = () => {
  console.log("Navbar loaded");

  const navigate = useNavigate();

  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <div className="">
        <div className="flex justify-between mt-4 h-6">
          <div className="h-25 w-40 ml-2">
            <img
              src="https://singularis.ventures/wp-content/uploads/cwv-webp-images/2024/09/singularisventures-logo.png.webp"
              alt="Singularis Ventures Logo"
            />
          </div>
          <div className="flex gap-6 mt-2">
            <button
              onClick={() => {
                handleButtonClick("home");
                navigate("/singularies.ventures");
              }}
              className={`${
                activeButton === "home"
                  ? "text-blue-500 font-bold"
                  : "text-black"
              }  p-2 rounded`}
            >
              Home
            </button>
            <button
              onClick={() => {
                handleButtonClick("Singularies Group");
                navigate("/singularies.ventures/singularies-group/");
              }}
              className={`${
                activeButton === "SingulariesGroup"
                  ? "text-blue-500 font-bold"
                  : "text-black"
              }  p-2 rounded`}
            >
              Singularies Group
            </button>

            <button
              onClick={() => {
                handleButtonClick("whatWeDo");
                navigate("/singularies.ventures/what-we-do/");
              }}
              className={`${
                activeButton === "whatWeDo"
                  ? "text-blue-500 font-bold"
                  : "text-black"
              } p-2 rounded`}
            >
              What we do?
            </button>

            <button
              onClick={() => {
                handleButtonClick("howWeDoIt");
                navigate("/singularies.ventures/how-we-do-it/");
              }}
              className={`${
                activeButton === "howWeDoIt"
                  ? "text-blue-500 font-bold"
                  : "text-black"
              } p-2 rounded`}
            >
              How we do it?
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                handleButtonClick("");
                navigate("/Form");
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded text-center mr-2"
            >
              Partner with Us
            </button>
          </div>
        </div>
        <HomePage />
      </div>
    </div>
  );
};

export default NavbarPage;
