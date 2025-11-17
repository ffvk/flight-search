import React from "react";
import GovernaceStructure from "./governaceStructure";
import WorldCareer from "./worldCareer";
import Layout from "../../../components/singularies header and footer/layout";

const SingulariesGroup = () => {
  return (
    <div>
      <div className="p-5 bg-gray-100">
        <div className="">
          <p className="text-3xl font-bold mb-3">
            Singularis Group is a dynamic World of Career Network, engaging with
          </p>
          <p className="text-3xl font-bold mb-6">
            stakeholders to understand current realities and emerging trends.
          </p>
        </div>

        <div className="text-gray-500 ">
          <p className="mb-5">
            We shape individual journeys by providing solutions and experiences
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
        </div>

        <div className="flex gap-4 mt-6">
          <div className=" bg-blue-500 text-white max-w-9/10  rounded-2xl  p-8 my-2">
            <p className="text-5xl">Vision</p>
            <p className="text-3xl font-bold mb-4">
              Shaping the Future of Human Progress.
            </p>
            <p className="text-5xl">Mission</p>
            <p className="text-3xl font-bold">
              Redefining Human Relevance in the Emerging World of Careers.
            </p>
          </div>
          <div>
            <img
              className="rounded-2xl "
              src="https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/about-vision-banner.jpg"
            ></img>
          </div>
        </div>

        <div className=" bg-black text-white w-full place-self-center rounded-2xl mt-10 p-8  ">
          <div className="">
            <div>
              <h2 className="text-3xl font-bold mb-2">Principles and Values</h2>
              <h3 className="text-2xl font-bold mb-4">
                Principles that guide our actions and decisions
              </h3>
              <p className="mb-4">
                * We design human centric solution that promote individual
                growth and contribute to positive social impact.
              </p>
              <p className="mb-4">
                * We integrate diverse perspectives to develop creative and
                innovative solutions.
              </p>
              <p className="mb-4">
                * We are committed to continuous learning and strive for ongoing
                improvement.
              </p>
              <p className="mb-4">
                * We promote continuous and proactive collaboration and build
                strong relationships with stakeholders.
              </p>
              <p className="mb-4">
                * We uphold ethical standards and practice integrity in all we
                do.
              </p>
            </div>
          </div>

          <div className="flex grid grid-cols-2 gap-7 mt-4 ">
            <div className=" rounded-2xl flex gap-4 bg-gray-900 p-4 items-center ">
              <img
                className=" bg-gray-500 rounded-full p-4"
                src="https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/about-principle-icon1.png"
              ></img>
              <p className="text-2xl">Creativity</p>
            </div>
            <div className=" rounded-2xl flex gap-4 bg-gray-900 p-4  items-center ">
              <img
                className=" bg-gray-500 rounded-full p-4"
                src="https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/about-principle-icon2.png"
              ></img>
              <p className="text-2xl">Respect</p>
            </div>{" "}
            <div className=" rounded-2xl flex gap-4 bg-gray-900 p-4  items-center ">
              <img
                className=" bg-gray-500 rounded-full p-4"
                src="https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/about-principle-icon3.png"
              ></img>
              <p className="text-2xl">Transparency</p>
            </div>{" "}
            <div className=" rounded-2xl flex gap-4 bg-gray-900 p-4  items-center ">
              <img
                className=" bg-gray-500 rounded-full p-4"
                src="https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/about-principle-icon4.png"
              ></img>
              <p className="text-2xl">Accountability</p>
            </div>
          </div>
        </div>

        <GovernaceStructure />
        <WorldCareer />
      </div>
    </div>
  );
};

export default SingulariesGroup;
