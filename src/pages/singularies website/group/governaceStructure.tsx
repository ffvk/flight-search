import React from "react";

const GovernaceStructure = () => {
  console.log("Navbar loaded");

  return (
    <div>
      <div>
        <div>
          <h2 className="text-3xl font-bold place-self-center mt-7">
            Governace Structure
          </h2>
          <img src="https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/governanceStructure-banner.png"></img>
          <h2 className="text-3xl font-bold place-self-center mt-7 mb-4">
            Why Singularis
          </h2>
          <p className="text-2xl font-bold mb-4">Understanding the Context</p>
          <p className="leading-loose">
            Societal, climactic, and technological changes are rapidly altering
            the way we live, connect, and work. As these shifts continue to
            reshape our world, the traditional pathways to career success are
            being redefined, making it essential for individuals and
            organisations alike to adapt. In response, we identify and address
            two primary issues that need to be tackled to bring more
            flexibility, efficiency, and effectiveness to the World of Work.
            Firstly, there is a pressing need for continuous skill development
            and upskilling to keep pace with the rapidly evolving job market.
            Secondly, fostering stronger collaboration between educational
            institutions, employers, and policymakers is crucial to ensure that
            the workforce is equipped with the relevant competencies and
            experiences necessary for the future of work.
          </p>
        </div>
        <div className="flex gap-6 flex-col-3">
          <img
            className="ml-6"
            src="https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/why-singularis-banner.png"
          ></img>

          <div className="bg-purple-500 rounded-2xl text-white place-self-center p-6 ">
            We recognise the need for proactive and collaborative engagement
            among educational institutions, employers and policymakers in order
            to meet the advancing needs of the World of Careers hence widening
            competencies and experiences.
          </div>
          <div className="bg-blue-400 rounded-2xl text-white place-self-center p-6 ">
            The changing scape of cosmopolitics, economy, environment and
            technology are exponentially transforming job roles as well as
            required competencies and experience thus creating a complex World
            of Careers.
          </div>
        </div>
        <p className="ml-14 mt-2">(Fragmented World of Careers)</p>
      </div>
    </div>
  );
};

export default GovernaceStructure;
