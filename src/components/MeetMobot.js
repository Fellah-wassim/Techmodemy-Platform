import React, { useState } from "react";
import robotPic from "../assets/meetMobot/robot-profile-pic.png";
import shape1 from "../assets/meetMobot/shape1.svg";
import shape2 from "../assets/meetMobot/shape2.svg";
import shape3 from "../assets/meetMobot/shape3.svg";
import carMobot1 from "../assets/meetMobot/mobot-car1.png";
import carMobot2 from "../assets/meetMobot/mobot-car2.png";
import mobotLogo from "../assets/meetMobot/mobot-logo.png";

export const MeetMobot = () => {
  const [index, setIndex] = useState(0);
  const handleClick = () => {
    setIndex(index === 0 ? 1 : 0);
  };
  return (
    <div className="relative meet-mobot-container bg-secondBlack p-20 md:p-10">
      <img
        src={shape1}
        alt="shape1"
        className="absolute top-0 left-[15%] w-[20%]"
      />
      <img
        src={shape2}
        alt="shape2"
        className="absolute top-[15%] left-0 w-[5%]"
      />
      <img
        src={shape3}
        alt="shape3"
        className="absolute top-[8%] right-0 w-[15%]"
      />
      <div className="flex flex-col gap-12 items-center justify-center">
        <div className="meet-mobot-s1 px-40 flex flex-col gap-6 items-center justify-center">
          <img
            src={robotPic}
            alt="robot pic"
            className="w-[10%] min-w-[80px]"
          />
          <h1 className="text-yellow text-5xl font-bold">Pick your MoBot</h1>
          <p className="text-2xl text-white leading-loose md:text-left">
            MoBot is a series of robotics kits designed to help children learn
            about the electronic components and mechanical structure of robots.
            We offer several different kits, ranging in complexity from beginner
            to advanced
          </p>
        </div>
        <div
          className={
            (index === 0 ? "bg-blue" : "bg-red") +
            " relative rounded-xl bg-blue border-solid border-darkerBlue p-16 duration-200 overflow-hidden md:p-6"
          }
        >
          <img
            src={index === 0 ? carMobot1 : carMobot2}
            alt="Mobot car"
            className="absolute bottom-0 right-0 w-[60%] fade-from-right"
            key={index}
          />
          <div className="flex">
            <div className="meet-mobot-s2 flex flex-col gap-6 w-[50%] z-10">
              <div className="meet-mobot-s2-first-div flex gap-6 mb-6">
                <button
                  onClick={handleClick}
                  className={
                    (index === 0 ? "border-green border-solid border-4" : "") +
                    " flex items-center justify-center gap-2 bg-lighterBlue p-3 px-6 rounded-3xl duration-200"
                  }
                >
                  <span className="text-2xl text-white rounded-[50%] bg-darkerBlue p-2  py-0">
                    1
                  </span>
                  <p className="text-2xl text-white font-semibold">MoBot 1</p>
                </button>
                <button
                  onClick={handleClick}
                  className={
                    (index === 1 ? "border-green border-solid border-4" : "") +
                    " flex items-center justify-center gap-2 bg-lighterBlue p-3 px-6 rounded-3xl duration-200"
                  }
                >
                  <span className="text-2xl text-white rounded-[50%] bg-red p-2 py-0">
                    2
                  </span>
                  <p className="text-2xl text-white font-semibold ">MoBot 2</p>
                </button>
              </div>
              <img src={mobotLogo} alt="Mobot logo" className="w-[35%]" />
              <p className="text-white text-2xl text-left leading-loose ">
                MoBot is a series of robotics kits designed to help children
                learn about the electronic components and mechanical structure
                of robots. We offer several different kits, ranging in
                complexity from beginner to advanced
              </p>
              <button className="p-8 py-3 text-left text-xl font-bold text-green bg-white rounded hover:text-white hover:bg-green duration-200 w-[180px]">
                <p>See More &rarr;</p>
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
