import React, { useState } from "react";
import JoinForm from "./joinForm";
import { useNavigate } from "react-router-dom";
import Layout from "../../../components/singularies header and footer/layout";

const HomePage = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <div className="bg-gray-100">
        <div className="flex text-center place-items-center  mt-8 ">
          <div className="w-1/2">
            <h2 className="text-5xl font-bold text-center mr-4">
              Shaping the Future of Human progress
            </h2>
            <p className="text-lg text-gray-500">
              We empower learning and unlearning to enhance
            </p>
            <p className="text-lg text-gray-500 mb-6">
              human relevance in the complex World of Careers.
            </p>
            <button
              onClick={() => {
                handleButtonClick("");
                navigate("/Form");
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white  rounded-xl px-8 py-2 mb-4"
            >
              Contact us
            </button>
          </div>
          <img
            className="w-1/2"
            src="https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/hompage-hero.png"
          ></img>
        </div>

        <div className=" bg-blue-500 text-white w-5/6 place-self-center rounded-xl mt-10 p-8">
          <p className="text-center text-4xl font-bold">Our Impact</p>
          <div className=" flex justify-between mt-4">
            <div>
              <p className="text-5xl font-bold ml-20">150k+ </p>
              <p className="text-center mt-2">Students</p>
            </div>
            <div>
              <p className="text-5xl font-bold">20+</p>
              <p className="text-center  mt-2">Countries</p>
            </div>
            <div>
              <p className="text-5xl font-bold mr-20">65+</p>
              <p className=" mt-2">Partners</p>
            </div>
          </div>
        </div>

        <p className="text-4xl font-bold text-center mt-20 m-10">
          What we offer
        </p>

        <div className="flex gap-6 justify-center">
          <div className="  rounded-2xl p-6  w-2/5 bg-white">
            <h2 className="text-xl font-bold">Networks</h2>
            <p className="text-gray-600">
              Using network partners and technology-enabled solutions to
              understand competency requirements and opportunity needs, as well
              as develop partnerships to design effective solutions.
            </p>
          </div>
          <div className="  rounded-2xl p-6 w-2/5 bg-white">
            <h2 className="text-xl font-bold">Oppertunities</h2>
            <p className="text-gray-600">
              Discovering opportunities by interpreting the career landscape to
              enhance skills and support career advancement.
            </p>
          </div>
        </div>

        <div className="  rounded-2xl p-6 mt-6 w-2/5 place-self-center bg-white">
          <h2 className="text-xl font-bold">Competencies</h2>
          <p className="text-gray-600">
            Developing competency and self-efficacy by providing contextual
            awareness through career insights and recommendations on relevant
            programmes and experiences to enhance individual progression.
          </p>
        </div>

        <div className="justify-self-center">
          <button className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-3 px-8 border border-blue-500 hover:border-transparent rounded-lg mt-8">
            Explore more
          </button>
        </div>

        <div className=" bg-black text-white w-xl place-self-center rounded-xl mt-20 p-4 ml-6 mr-6">
          <button className="bg-white text-black hover:bg-gray-200 py-2 px-4 rounded-full mb-6">
            About Us
          </button>
          <p className="text-2xl font-bold mb-6">
            Redefining Human Relevance in the Emerging World of Careers.
          </p>
          <p className="mb-6">
            Singularis Group is a dynamic World of Career network, engaging with
            stakeholders to understand current realities and emerging trends. We
            shape individual journeys by providing solutions and experiences
            that enhance human relevance in an ever-changing world. Our
            commitment to human-centric design creates a positive societal
            impact and fosters individual growth within the realm of careers.
          </p>
          <p>
            Singularis Group, with its continually growing networks, fosters
            bonds among Higher Education Institutions (HEIs), employers, content
            providers, recruitment agencies, governments, and supranational
            organisations. Through strategic engagement and innovative
            technology, we derive insights and offer recommendations by
            understanding opportunities to develop competencies suitable for
            stakeholder development.
          </p>
          <div className="flex gap-6 mt-4">
            <img src="https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/homepage-about-banner1.png"></img>
            <img src="https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/homepage-about-banner2.png"></img>
            <img src="https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/homepage-about-banner3.png"></img>
          </div>
          <div className="justify-self-center">
            <button className="bg-transparent hover:bg-gray-200 text-white font-semibold hover:text-white py-3 px-8 border border-white hover:border-transparent rounded-lg mt-8">
              Know more
            </button>
          </div>
        </div>

        <div className="mt-10 ">
          <p className="text-3xl font-bold place-self-center text-blue-950">
            Solutions and Initiatives
          </p>
          <p className="text-gray-600 place-self-center mt-4">
            We empower learning and unlearning to enhance human relevance in the
          </p>
          <p className="text-gray-600 place-self-center">
            complex World of Careers.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-7 p-8">
          <div className="px-4 py-9 bg-white rounded-3xl place-items-center">
            <img src="https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/homepage-solutiobns-icon1.png"></img>
            <p className="text-2xl font-bold text-blue-950">Networks</p>
          </div>
          <div className="px-4 py-9 bg-white rounded-3xl place-items-center">
            <img src="https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/homepage-solutiobns-icon2.png"></img>
            <p className="text-2xl font-bold text-blue-950">Employability</p>
          </div>
          <div className="px-4 py-9 bg-white rounded-3xl place-items-center">
            <img src="https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/homepage-solutiobns-icon3.png"></img>
            <p className="text-2xl font-bold text-blue-950">Career Readiness</p>
          </div>
          <div className="px-4 py-9 bg-white rounded-3xl place-items-center">
            <img src="https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/homepage-solutiobns-icon4.png"></img>
            <p className="text-2xl font-bold text-blue-950">Competency</p>
          </div>
          <div className="px-4 py-9 bg-white rounded-3xl place-items-center">
            <img src="https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/homepage-solutiobns-icon5.png"></img>
            <p className="text-2xl font-bold text-blue-950">Mobility</p>
          </div>
          <div className="px-4 py-9 bg-white rounded-3xl place-items-center">
            <img src="https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/homepage-solutiobns-icon6.png"></img>
            <p className="text-2xl font-bold text-blue-950">
              Technology Services
            </p>
          </div>
        </div>

        <div className="justify-self-center mb-20">
          <button className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-3 px-8 border border-blue-500 hover:border-transparent rounded-lg mt-8">
            Know more
          </button>
        </div>

        {/* <div className="bg-white  space-y-6">
            <div className=" place-items-center ">
              <p className="text-2xl font-bold text-blue-950 mt-6">
                Together, we create a future that enhances
              </p>
              <p className="text-2xl font-bold text-blue-950">
                human relevance in the World of Careers.
              </p>
            </div>
            <div>
              <img src="https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/together-banner1.jpg"></img>
              <p>Learners and Practitioners</p>
              <p>
                Learners and practitioners can access insights into the world of
                work, individualised competency development programmes, tailored
                experiences, and career progression opportunities.
              </p>
            </div>

            <div>
              <img src="https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/together-banner2.jpg"></img>
              <p>Learners and Practitioners</p>
              <p>
                Learners and practitioners can access insights into the world of
                work, individualised competency development programmes, tailored
                experiences, and career progression opportunities.
              </p>
            </div>
            <div>
              <img src="https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/together-banner3.jpg"></img>
              <p>Learners and Practitioners</p>
              <p>
                Learners and practitioners can access insights into the world of
                work, individualised competency development programmes, tailored
                experiences, and career progression opportunities.
              </p>
            </div>
            <div>
              <img src="https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/together-banner4.jpg"></img>
              <p>Learners and Practitioners</p>
              <p>
                Learners and practitioners can access insights into the world of
                work, individualised competency development programmes, tailored
                experiences, and career progression opportunities.
              </p>
            </div>
            <div>
              <img src="https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/together-banner5.jpg"></img>
              <p>Learners and Practitioners</p>
              <p>
                Learners and practitioners can access insights into the world of
                work, individualised competency development programmes, tailored
                experiences, and career progression opportunities.
              </p>
            </div>
            <div>
              <img src="https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/together-banner6.jpg"></img>
              <p>Learners and Practitioners</p>
              <p>
                Learners and practitioners can access insights into the world of
                work, individualised competency development programmes, tailored
                experiences, and career progression opportunities.
              </p>
            </div>
          </div> */}

        <div className="flex">
          <div>
            <img
              className="w-4/5"
              src="https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/partner-with-us-banner.jpg"
            ></img>
          </div>
          <div className="place-items-center">
            <p className="text-4xl text-blue-950 font-bold mb-4">
              Partner with us
            </p>
            <p className="text-gray-700 mb-10">
              Join us to create a greater impact together.
            </p>

            <JoinForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
