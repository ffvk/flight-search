import React from "react";

const PlaygroundAPI = () => {
  return (
    <div>
      <div className="min-h-screen bg-slate-100">
        <div className=" grid place-items-center mt-20">
          <h3 className="font-bold text-2xl place-self-center">
            My API Playground
          </h3>
          <div className="bg-white flex gap-4 justify-center p-4">
            <div>
              <div>
                <p className="font-bold">Profile Info:</p>
                <p>name:</p>
                <p>Email:</p>
                <p>Education:</p>
                <p>links:</p>
              </div>
              <div>
                <button className="bg-blue-500 rounded p-2 text-white mr-2">
                  GitHub
                </button>
                <button className="bg-blue-500 rounded p-2 text-white mr-2">
                  LinkedIn
                </button>
                <button className="p-2 rounded border">Portfolio</button>
              </div>
            </div>
            <div className="grid gap-2">
              <p className="font-bold">Projects:</p>
              <p className="font-bold">Search projects by skills:</p>
              <p className="border rounded p-2">next.js</p>
              <div className="border rounded p-4">
                <p className="font-bold">Portfolio Website</p>
                <p>Built with Next.js and Tailwind</p>
                <p>Skills: Next.js, Tailwind, React</p>
              </div>
              <div className="border rounded p-4">
                <p className="font-bold">API Playground</p>
                <p>Node.js + Express backend</p>
                <p>Skills: Node.js, Express, MongoDB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundAPI;
