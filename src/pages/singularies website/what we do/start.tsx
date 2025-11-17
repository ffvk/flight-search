import React, { useState } from "react";
import Layout from "../../../components/singularies header and footer/layout";

const Accordion = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`rounded-3xl p-4  ${
        isOpen ? "bg-blue-500 text-white" : "bg-white text-black"
      }`}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between p-2 cursor-pointer"
      >
        <p className="font-bold text-xl">{title}</p>
        <p
          className={`px-2 rounded-full font-bold text-4xl place-self-center ${
            isOpen ? "bg-white text-blue-500" : "bg-blue-500 text-white"
          }`}
        >
          {isOpen ? "-" : "+"}
        </p>
      </div>
      {isOpen && <div className="p-2">{children}</div>}
    </div>
  );
};

const Start = () => {
  return (
    <div>
      <div className="p-4 bg-gray-100">
        <button className="rounded-full bg-gray-200 px-4 py-2 mb-4">
          Network
        </button>
        <h3 className="text-2xl font-bold mb-4">
          Building Network, Providing Insights and Deriving Value
        </h3>
        <img
          className="rounded-2xl mb-4"
          src="https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/what-we-do-banner1.jpg"
          alt="network banner"
        />
        <p className="text-gray-700 mb-2 text-lg">
          Using network partners and technology-enabled solutions to understand
          competency requirements and opportunity needs, as well as develop
          partnerships to design effective solutions.
        </p>
        <p className="text-gray-700 mb-2 text-lg">
          Our network spans higher education institutions, content providers,
          employers, industry partners, and government entities, forming a solid
          ecosystem dedicated to the World of Careers.
        </p>

        {/* Accordions */}
        <div className="grid gap-6 mt-10 mb-10">
          <Accordion title="Proactive and Continuous Engagement">
            <p>
              . Build and sustain strong working relationships with network
              partners and actively engage with them to map challenges, identify
              gaps, and deliver targeted enhancements that address evolving
              needs.
            </p>
          </Accordion>

          <Accordion title="Leveraging Network Expertise">
            <p>
              . Develop/design/source into solutions and expertise within our
              network to deliver unparalleled value to our clients, ensuring
              they benefit from collective intelligence of our partners.
            </p>
          </Accordion>

          <Accordion title="Influencing Policy through Strategic Alliances">
            <p>
              . Engage with strategic partners and authorities to influence
              policies, shaping the future of careers and education through
              informed and impactful advocacy.
            </p>
          </Accordion>
        </div>

        {/* Opportunities Section */}
        <div className="bg-white rounded-3xl p-4 mt-10">
          <button className="bg-gray-100 rounded-full px-4 py-2 mb-4">
            Opportunities
          </button>
          <p className="text-3xl font-bold">Unlocking Opportunities,</p>
          <p className="text-3xl font-bold mb-6">Empowering Futures</p>
          <p className="text-gray-700">
            Discovering opportunities by interpreting the career landscape to
            enhance skills and support career advancement.
          </p>

          <div className="grid gap-6 mt-6">
            <Accordion title="Generating Actionable World of Work Insights">
              <p>
                . Leverage extensive networks and authoritative reports for
                World of Career environment scanning.
              </p>
              <p>
                . Identify emerging industry trends, evolving job roles, and
                shifting skill demands.
              </p>
              <p>
                . Recognise changes in the world of careers to strategically map
                growth opportunities.
              </p>
            </Accordion>

            <Accordion title="Mapping Individual Aspirations and Designing Opportunity Pathways">
              <p>
                . Utilise advanced data-driven solutions to align individual
                aspirations and needs with existing and emerging opportunities.
              </p>
              <p>
                . Provide individualised recommendations for learning and career
                progression.
              </p>
              <p>
                . Design pathways that meet the evolving demands of the World of
                Career.
              </p>
            </Accordion>
          </div>

          <img
            className="rounded-3xl w-full mt-8"
            src="https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/what-we-do-banner2.jpg"
            alt="opportunities"
          />
        </div>

        {/* Competency Section */}
        <div className="mt-8">
          <img
            className="rounded-2xl"
            src="https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/what-we-do-banner3.jpg"
            alt="competency"
          />
          <button className="rounded-full bg-gray-200 px-4 py-2 mb-6 mt-6">
            Competency
          </button>
          <h4 className="text-3xl font-bold ">
            Built on the Foundation of Heutagogy
          </h4>
          <h4 className="text-3xl font-bold ">and Learning for Life</h4>

          <p className="text-gray-700 text-lg mt-6">
            Developing competency and self-efficacy by providing contextual
            awareness through career insights and recommendations on relevant
            programmes and experiences to enhance individual progression.
          </p>
        </div>

        <div className="grid gap-6 mt-10 mb-10">
          <Accordion title="Competency Frameworks">
            <p>
              . Developing competency frameworks aligned with global standards
              and industry benchmarks, refining strategies to enhance skills and
              capabilities in line with recognised practices.
            </p>
            <p>
              . Assess users through self-assessment tools to identify
              capabilities and design solutions tailored to individual needs.
            </p>
          </Accordion>

          <Accordion title="Programmes and Experiences">
            <p>
              . Developing or enhancing online, offline, and blended programs
              and experiences, such as bootcamps, hackathons, immersions,
              certifications, apprenticeship, skilling (re/up) and Bachelor's
              degrees, in collaboration with network partners.
            </p>
          </Accordion>

          <Accordion title="Enhancing Institutional Competence">
            <p>
              . Developing strategic insights to provide agility and
              adaptability for HEIs through collaborative efforts of content
              providers, industry partners and government entities.
            </p>
          </Accordion>

          <Accordion title="Continuous Feedback Loop">
            <p>
              . Constantly engaging with stakeholders to evaluate effectiveness
              of the Singularis framework, solutions and service offerings.
            </p>
          </Accordion>
        </div>

        {/* Solutions Section */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Solutions and Initiatives</h2>
          <p className="text-gray-600 text-lg mb-4">
            We empower learning and unlearning to enhance human relevance in the
            complex World of Careers.
          </p>
          <img
            src="https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/what-we-do-solution.png"
            alt="solutions"
          />
        </div>

        {/* Network + Employability Example */}
        <div className="grid gap-6 mt-8 mb-6">
          <Accordion title="Network">
            <p>
              . Building partnerships and driving strategic engagement for
              mobility, employability, competency development, validation and
              other strategic initiatives.
            </p>
            <p>
              . Discovering opportunities by interpreting the career landscape
              to enhance skills and support career advancement.
            </p>
          </Accordion>

          <Accordion title="Employability">
            <p>. Recruitment and job placement services</p>
            <p>. Hackathons</p>
          </Accordion>

          <Accordion title="Career Readiness">
            <p>. Recruitment and job placement services</p>
            <p>. Hackathons</p>
          </Accordion>
          <Accordion title="Competency">
            <p>. Recruitment and job placement services</p>
            <p>. Hackathons</p>
          </Accordion>
          <Accordion title="Mobility">
            <p>. Recruitment and job placement services</p>
            <p>. Hackathons</p>
          </Accordion>
          <Accordion title="Technology services">
            <p>. Recruitment and job placement services</p>
            <p>. Hackathons</p>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Start;
