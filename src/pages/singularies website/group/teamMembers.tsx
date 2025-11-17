import React from "react";

const teamMembers = [
  {
    name: "Lefeer Marakkarackayil",
    role: "Founder and Chairman",
    img: "https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/team-lefeer-new.png",
    linkedin:
      "https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/devicon_linkedin.svg",
  },
  {
    name: "Ajay Kumar",
    role: "Executive Director",
    img: "https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/team-ajay.jpg",
    linkedin:
      "https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/devicon_linkedin.svg",
  },
  {
    name: "Yunus",
    role: "Managing Partner",
    img: "https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/team-yunus.jpg",
    linkedin:
      "https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/devicon_linkedin.svg",
  },
  {
    name: "Sumit",
    role: "CTO",
    img: "https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/team-sumit.jpg",
    linkedin:
      "https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/devicon_linkedin.svg",
  },
  {
    name: "Hanif",
    role: "Operations Head",
    img: "https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/team-hanif.jpg",
    linkedin:
      "https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/devicon_linkedin.svg",
  },
  {
    name: "Sanjar",
    role: "Finance Director",
    img: "https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/team-sanjar.jpg",
    linkedin:
      "https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/devicon_linkedin.svg",
  },
  {
    name: "Ankita",
    role: "HR Manager",
    img: "https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/team-ankita.jpg",
    linkedin:
      "https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/devicon_linkedin.svg",
  },
  {
    name: "Abdul",
    role: "Legal Advisor",
    img: "https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/team-abdul.jpg",
    linkedin:
      "https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/devicon_linkedin.svg",
  },
  {
    name: "Dhelria",
    role: "Marketing Head",
    img: "https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/team-dhelria.jpg",
    linkedin:
      "https://singularis.ventures/wp-content/themes/twentytwentyone-child/assets/images/devicon_linkedin.svg",
  },
];

const TeamMembers: React.FC = () => {
  return (
    <div className="bg-white rounded mt-8 p-6">
      <h3 className="text-3xl font-bold text-center mb-8">
        Executive Team Members
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="rounded-xl shadow-md overflow-hidden">
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-70 object-cover"
            />
            <div className="bg-white rounded-b-xl flex justify-between items-center p-4">
              <div>
                <p className="text-xl font-bold">{member.name}</p>
                <p className="text-gray-500">{member.role}</p>
              </div>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={member.linkedin} alt="LinkedIn" className="w-6 h-6" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
