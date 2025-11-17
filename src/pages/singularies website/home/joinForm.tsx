import React from "react";

const JoinForm = () => {
  return (
    <div>
      <form className="w-full max-w-xl ">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
            <label
              className=" tracking-wide text-sm"
              // for="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="first name"
            ></input>
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className=" tracking-wide "
              // for="grid-first-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="last name"
            ></input>
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className=" tracking-wide "
              // for="grid-first-name"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Email"
            ></input>
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className=" tracking-wide"
              // for="grid-first-name"
            >
              Type of Organization
            </label>
            <select
              className="block appearance-none w-full bg-white border text-gray-700 py-3 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>-select type-</option>

              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className=" tracking-wide "
              // for="grid-first-name"
            >
              Company Name
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Company name"
            ></input>
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className=" tracking-wide "
              // for="grid-first-name"
            >
              Type of partnership
            </label>
            <select
              className="block appearance-none w-full bg-white border text-gray-700 py-3 px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>-select type-</option>

              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className=" tracking-wide "
              // for="grid-password"
            >
              Message
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Type"
            ></input>
          </div>
        </div>

        <div>
          <label className="md:w-2/3  text-gray-600">
            <input className="mr-2 leading-tight" type="checkbox"></input>
            <span className="">You agree to our friendly privacy policy</span>
          </label>
        </div>

        <div className="flex justify-center mt-6">
          <button className=" bg-blue-500 rounded-lg text-white font-semibold px-5 py-2">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default JoinForm;
