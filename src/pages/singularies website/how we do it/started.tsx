import React from "react";
import Layout from "../../../components/singularies header and footer/layout"; // Ensure the correct path

const Started = () => {
  return (
    <div className="bg-gray-100 p-6">
      <div className="flex justify-between">
        <div className="w-1/2 ">
          <p className="text-2xl font-bold  mt-10">
            How does Singularis Address the Widening
          </p>
          <p className="text-2xl font-bold mb-6">
            Competency Gap in a Disparate Career World?
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Singularis is deeply engaged in unravelling the complex and dynamic
            World of Careers.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            By actively engaging with network partners and utilising data-driven
            technological solutions, Singularis continuously maps and learns
            from the evolving landscape, gaining critical insights into emerging
            needs and identifying gaps and opportunities for stakeholders.
          </p>
          <p className="text-lg text-gray-600 font-bold mb-4">
            Singularis sources services from its network via robust frameworks
            to provide individualised solutions to its clientele.
          </p>
        </div>
        <div className=" ">
          <img
            className=""
            src="https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/how-we-do-it-banner.png"
            alt="How We Do It Banner"
          />
        </div>
      </div>

      <div className="flex mt-20">
        <div className="w-2/3">
          <img
            className="rounded-xl"
            src="https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/interpreting-banner.jpg"
            alt="Interpreting Career Landscape"
          />
        </div>

        <div className="grid gap-4 w-5/6 ">
          <p className="text-2xl font-bold">
            Interpreting the Dynamics of the Career Landscape
          </p>
          <p className="text-lg text-gray-600">
            Singularis leverages expertise from its active network partners to
            design innovative solutions and offerings. These solutions are
            grounded in a heutagogical framework, fostering competency
            development, self-efficacy, and continuous learning.
          </p>
          <p className="text-lg text-gray-600">
            By engaging with stakeholders, Singularis bridges gaps and provides
            enhancements, ultimately empowering stakeholders to thrive in the
            complex World of Careers. With its ongoing engagement and innovative
            services, Singularis aims to:
          </p>
          <p className="text-lg text-gray-600">
            . Enhance agility and adaptability between educational institutions,
            employers, content providers, and policymakers, enabling them to
            develop relevant and forward-thinking solutions and experiences.
          </p>
          <p className="text-lg text-gray-600">
            . Strengthen individual competencies for career progression,
            personal growth, and relevance for societal impact, improving access
            to opportunities and promoting self-efficacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Started;
