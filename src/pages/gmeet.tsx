import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gmeet = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="grid grid-cols-2 content-start">
        <div className="p-4">
          <div className="ml-4">
            <img
              className="h-10 w-30"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Google_Meet_text_logo_%282020%29.svg/1200px-Google_Meet_text_logo_%282020%29.svg.png"
            ></img>
          </div>

          <div className="  bg-white p-2 rounded-xl space-y-4 mt-20 ml-12">
            <p className="text-5xl font-normal">
              Video calls and meetings for everyone
            </p>
            <p className="text-2xl text-gray-700">
              Connect, collaborate and celebrate from anywhere with Google Meet
            </p>
            <div className="flex">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full mr-4 outline-2 outline-offset-4">
                New meeting
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-800 text-sm py-1 px-10 border border-gray-400 rounded-xl shadow mr-8 ">
                Enter a code or link
              </button>
              <p className="mt-2 text-gray-400">Join</p>
            </div>
            <p className="border w-full"></p>
            <div className="flex">
              {/* <link className="text-blue-500">Learn more</link> */}
              {/* <link rel="stylesheet" href="#">
            Learn more
          </link> */}
              <a href="#" className="text-blue-500 mr-2 hover:underline">
                Learn more
              </a>
              <p>about Google Meet</p>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <Slider {...settings}>
            <div className="justify-items-center">
              <img
                className="h-[15rem]"
                src="//www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg"
                alt=""
              ></img>
              <h2 className="text-2xl mt-8">Get a link that you can share</h2>
              <p className="mt-2">
                click new meeting to get a link that you can send to
              </p>
              <p> people that you want to meet</p>
            </div>
            <div className="justify-items-center">
              <img
                className="h-[15rem]"
                src="https://www.gstatic.com/meet/user_edu_scheduling_light_b352efa017e4f8f1ffda43e847820322.svg"
                alt=""
              ></img>
              <h2 className="text-2xl mt-8"> Plan ahead</h2>
              <p className="mt-2">
                Click new meeting to schedule meetings in Google
              </p>
              <p>Calender and send invitations to participants</p>
            </div>
            <div className="justify-items-center">
              <img
                className="h-[15rem]"
                src="https://www.gstatic.com/meet/user_edu_safety_light_e04a2bbb449524ef7e49ea36d5f25b65.svg"
                alt=""
              ></img>
              <h2 className="text-2xl mt-8">Your meeting is safe</h2>
              <p className="mt-2">
                No one can join a meeting unless invited or admitted by
              </p>
              <p>the host</p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Gmeet;
