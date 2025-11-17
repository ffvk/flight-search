import React, { useState } from 'react';
import HomePage from './homePage';
import TeacherPage from './teacherPage';
import StaffPage from './staffPage';
import ParentsPage from './parentsPage';

const Tabs = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index: number) => {
        console.log(index);
        setToggleState(index);
    };
       console.log("toggleState: ",toggleState)
    return (
        <div className="">
            <div className="flex justify-between">
                <button 
                     className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={() => toggleTab(1)}
                >
                    All Students
                </button>
                <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => toggleTab(2)}
                >
                    All Teachers
                </button>
                <button
                className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                    onClick={() => toggleTab(3)}
                >
                    All Staffs
                </button>
                <button
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    onClick={() => toggleTab(4)}
                >
                    All Parents
                </button>
            </div>
            
            
            <div className="content-tabs">
                {toggleState === 1 && (
                <div >
                    <p>
                       Student information
                    </p>
                    <HomePage />
                </div>
                )}


{toggleState === 2 && (

                <div >
                    <p>
                      teachers information
                    </p>
                    <TeacherPage />
                </div>
)}


{toggleState === 3 && (

                <div >
                
                    <p>
                       staff information
                    </p>
                    <StaffPage />
                </div>
                
)}


{toggleState === 4 && (

<div >

    <p>
       Parents information
    </p>
    <ParentsPage />
</div>

)}
            </div>
        </div>
    );
};

export default Tabs;