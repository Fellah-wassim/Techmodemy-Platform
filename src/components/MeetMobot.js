import React from "react";
import robotPic from "../assets/meetMobot/robot-profile-pic.png";
import carMobot from "../assets/meetMobot/robot-profile-pic.png";
import mobotLogo from "../assets/meetMobot/mobot-logo.png";

export const MeetMobot = () => {
  return (
    <div className="meet-mobot-container bg-secondBlack p-20">
      <div className="flex flex-col gap-12 items-center justify-center">
        <div className="px-40 flex flex-col gap-6 items-center justify-center">
          <img src={robotPic} alt="robot pic" className="w-[10%]" />
          <h1 className="text-yellow text-5xl font-bold">Pick your MoBot</h1>
          <p className="text-2xl text-white leading-loose">
            MoBot is a series of robotics kits designed to help children learn
            about the electronic components and mechanical structure of robots.
            We offer several different kits, ranging in complexity from beginner
            to advanced
          </p>
        </div>
        <div className="bg-blue border-solid border-darkerBlue p-16">
          <div className="flex">
            <div className="flex flex-col gap-11">
              <div className="flex gap-6">
                <button className="flex items-center justify-center gap-2 bg-lighterBlue p-3 px-6 rounded-3xl">
                  <span className="text-3xl text-white rounded-[50%] bg-darkerBlue p-2  py-0">
                    1
                  </span>
                  <p className="text-3xl text-white font-semibold">MoBot 1</p>
                </button>
                <button className="flex items-center justify-center gap-2 bg-lighterBlue p-3 px-6 rounded-3xl">
                  <span className="text-3xl text-white rounded-[50%] bg-red p-2 py-0">
                    2
                  </span>
                  <p className="text-3xl text-white font-semibold ">MoBot 2</p>
                </button>
              </div>
              <img src={mobotLogo} alt="Mobot logo" className="w-[20%]" />
              <p className="text-white text-xl">
                MoBot is a series of robotics kits designed to help children
                learn about the electronic components and mechanical structure
                of robots. We offer several different kits, ranging in
                complexity from beginner to advanced
              </p>
              <button className="p-8 py-3">
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
