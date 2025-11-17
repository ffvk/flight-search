 import React, { useState } from 'react';
 import HomePage from './homePage';
import TeacherPage from './teacherPage';
import StaffPage from './staffPage';
import ParentsPage from './parentsPage';

const Krypto = () => {

    
        const [toggleState, setToggleState] = useState(1);
    
        const toggleTab = (index: number) => {
            console.log(index);
            setToggleState(index);
        };
           console.log("toggleState: ",toggleState)
  return (
    <div className="bg-slate-950 text-white">
        <div className="flex justify-between ">
                <button 
                     className="bg-transparent hover:bg-white-800 text-white-200 font-semibold py-2 px-4"
                    onClick={() => toggleTab(1)}
                >
                    Home
                </button>
                <button 
                     className="bg-transparent hover:bg-white-800 text-white-200 font-semibold py-2 px-4"
                    onClick={() => toggleTab(1)}
                >
                    About Us
                </button>
                <button 
                     className="bg-transparent hover:bg-white-800 text-white-200 font-semibold py-2 px-4"
                    onClick={() => toggleTab(1)}
                >
                    Services
                </button>
                <button 
                     className="bg-transparent hover:bg-white-800 text-white-200 font-semibold py-2 px-4"
                    onClick={() => toggleTab(1)}
                >
                    Package & pricing
                </button>
                <button 
                     className="bg-transparent hover:bg-white-800 text-white-200 font-semibold py-2 px-4"
                    onClick={() => toggleTab(1)}
                >
                    Reviews
                </button>
                <button
                className="bg-transparent hover:bg-white-800 text-white-200 font-semibold py-2 px-4"
                    onClick={() => toggleTab(2)}
                >
                    Portfolio
                </button>
                <button
                className="bg-transparent hover:bg-white-800 text-white-200 font-semibold py-2 px-4"
                    onClick={() => toggleTab(3)}
                >
                     Blog
                </button>
                <button
                className="bg-transparent hover:bg-white-800 text-white-200 font-semibold py-2 px-4"
                    onClick={() => toggleTab(4)}
                >
                    Contacts
                </button>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded rounded-full">
                     Contact Us
                </button>
        </div>

        <div className="place-items-center">
            <div className="text-xl">Kyptronix LLP--</div>
            <div>THE NEXT THING IN</div>
            <div>DIGITAL INDUSTRY</div>
            <div className="">At Kyptronix LLP, we are not just building websites, apps, or marketing strategies—we are creating business success. 
                Based in Delaware, we help companies across the U.S. scale rapidly, increase conversions, and dominate their 
                industries.Whether you need a custom-built website that drives traffic, a mobile app that wows, or a blockchain 
                solution that disrupts your industry,
                 Kyptronix is your trusted digital partner.
                  Donot just compete—lead. Ready to see what Kyptronix can do for you?</div>
            </div>
            <button className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                   Get Started Today **
            </button>
            <button  className="bg-white hover:bg-gray-100 text-blue-800 font-semibold py-2 px-4 "
                    onClick={() => toggleTab(1)}
                >
                    View Our Work *
                </button>
    </div>
  )
}

export default Krypto