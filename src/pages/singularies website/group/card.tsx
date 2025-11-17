import React from "react";
import OurStory from "./ourStory";

const Card = () => {
  return (
    <div>
      <div className="bg-blue-500 rounded-2xl p-7 flex gap-4 mt-8">
        <div>
          <img
            className="rounded-2xl"
            src="https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/about-banner.jpg"
          ></img>
        </div>
        <div className="text-white text-2xl w-3/4 font-semibold ">
          <p>
            The changing scape of cosmopolitics, economy, environment and
            technology are exponentially transforming job roles as well as
            required competencies and experience thus creating a complex World
            of Careers.
          </p>
          <p className="mt-4">
            By actively engaging with a vast network and conducting
            environmental scanning, future trend analysis, and utilizing
            advanced analytics, Singularis excels in interpreting the evolving
            dynamics and making sense of the everchanging World of Career.
          </p>
          <div className="mt-4">
            <button className="bg-white text-blue-500 rounded-lg px-6 py-3 font-normal text-base ">
              Know More
            </button>
          </div>
        </div>
      </div>
      <OurStory />
    </div>
  );
};

export default Card;
