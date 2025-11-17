import React from "react";

const JoinMeetingPage = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl border space-y-10 place-items-center mt-10">
        <img
          className="size-16 border p-4 rounded shadow-md"
          src="https://mailmeteor.com/logos/assets/PNG/Microsoft_Office_Teams_Logo_512px.png"
        ></img>
        <h3 className="font-bold">Join your team meeting</h3>

        <div className="">
          <button className="bg-blue-900 hover:bg-blue-700 text-white py-2 px-20 rounded mb-2 ml-8">
            continue on this browser
          </button>
          <button className="bg-white-500 hover:bg-gray-100 text-black py-2 px-20 rounded border ml-10  shadow-md ">
            Join on the Teams app
          </button>
        </div>
      </div>
      <div className="place-items-center mt-20">
        <p>Don't have the app?</p>
        <p className="text-blue-500">Download it now</p>
      </div>
      <div className="flex gap-4 justify-center mt-20">
        <img
          className="size-5"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png"
        ></img>
        <p>Microsoft Teams</p>
        <p className="text-blue-500">Privacy and cookies</p>
        <p className="text-blue-500">third-party disclosures</p>
      </div>
    </div>
  );
};

export default JoinMeetingPage;
