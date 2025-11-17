import React from "react";
import TeamMembers from "./teamMembers";

const OurStory = () => {
  return (
    <div>
      <div className="bg-white rounded-xl mt-10 flex p-6">
        <div className="w-2/5 mr-6">
          <h2 className="text-4xl font-bold mb-8">Our Story</h2>

          <div className="">
            <div className="bg-purple-500 rounded-2xl text-white font-bold text-2xl flex gap-20 p-6 mb-6 justify-between">
              <p>Team Members</p>
              <p className="bg-purple-300 rounded-full p-2 text-2xl">50+</p>
            </div>

            <div className="bg-pink-500 rounded-2xl text-white font-bold text-2xl flex gap-20 p-6 justify-between">
              <p>Across Countries</p>
              <p className="bg-purple-300 rounded-full p-2 text-2xl">10+</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 font-semibold">
          <h2 className="text-2xl font-bold">Team members with</h2>
          <p>* 25 + year experience in entrepreneurship</p>
          <p>* 25+ years in Higher Education Institutions</p>
          <p>* 20+ years in EdTech</p>
          <p>* 25 + years in transnational projects</p>
          <p>* 20+ in product development and technology solutions</p>
          <p>* 20 + in innovation in employability</p>
          <p>* 10+ years in data sciences</p>
          <p>* 20 + international finances</p>
          <p>* 20 + international finances</p>
        </div>
      </div>
      <TeamMembers />
    </div>
  );
};

export default OurStory;
