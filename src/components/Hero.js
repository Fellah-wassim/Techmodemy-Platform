import React, { useState, useEffect } from "react";
import robotHand from "../assets/header/robot-hand.svg";
import robotFace from "../assets/header/robot-face.svg";
import techmodemyTxt from "../assets/header/techmodemy.svg";
import shape1 from "../assets/header/shape1.svg";
import shape2 from "../assets/header/shape2.svg";
import plusShape from "../assets/header/plus-shape.svg";

const values = [
  "Fun",
  "Exciting",
  "Inspiring",
  "Engaging",
  "Innovative",
  "Creative",
];

export const Hero = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % values.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="bg-darkerGreen relative flex flex-col items-center justify-center text-white py-20 pb-0">
      <div className="flex flex-col items-center gap-8 w-1/2 z-40 ">
        <h2 className="text-6xl font-bold">Robotics was Never More</h2>
        <div>
          <svg
            className="absolute  dash"
            width="692"
            height="108"
            viewBox="0 0 692 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.4351 61.9451C37.8414 65.7474 38.6915 65.733 52.4157 61.9844C65.2526 58.5092 66.1042 58.1032 65.0525 56.037C63.1886 52.2673 61.4466 52.2716 46.8238 56.1186C34.8985 59.2784 34.0224 59.7266 35.4351 61.9451Z"
              fill="#76388D"
            />
            <path
              d="M42.9536 27.7338C43.203 32.6476 43.3179 32.5458 56.3459 38.9451C65.9696 43.6596 68.6797 44.2141 68.8117 41.6529C68.9146 38.8503 68.5424 38.5232 56.5215 32.0318C45.1561 25.8629 42.7862 24.7191 42.9536 27.7338Z"
              fill="#76388D"
            />
            <path
              d="M661.802 53.7447C657.817 51.6549 657.088 52.0925 647.077 62.201C637.698 71.629 637.163 72.4064 639.107 73.6699C642.606 76.0027 644.113 75.1279 654.853 64.4849C663.601 55.7858 664.135 54.9596 661.802 53.7447Z"
              fill="#E83C35"
            />
            <path
              d="M672.397 87.1319C669.724 83.001 669.675 83.1467 655.193 84.1188C644.502 84.8477 641.877 85.7225 643.044 88.0066C644.356 90.4851 644.842 90.5823 658.498 90.1936C671.425 89.8534 674.049 89.659 672.397 87.1319Z"
              fill="#E83C35"
            />
          </svg>
          <div className="container flex items-center justify-center text-center">
            <h1 key={index} className="animated-text font-bold text-8xl w-full">
              {values[index]}!
            </h1>
          </div>
          <svg
            className="inline-block "
            width="378"
            height="22"
            viewBox="0 0 378 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M247.689 0.55008C133.308 3.28608 93.7481 4.19797 66.4431 4.71097C18.9281 5.62297 10.5431 6.07897 13.1231 7.84597C17.8531 11.0952 61.9283 11.0382 220.814 7.56097C263.814 6.59197 303.588 5.85097 308.963 5.85097C335.193 5.79397 335.409 -1.55892 247.689 0.55008ZM241.239 11.5512C228.124 11.8362 47.9535 16.3392 35.0535 16.6812C-1.06647 17.5362 -6.0119 18.2202 8.3931 20.6712C28.3881 24.0342 206.839 17.5932 321.004 16.7382C374.109 16.3392 379.698 16.0542 376.688 14.0592C372.603 10.9812 316.919 9.95497 241.239 11.5512Z"
              fill="#FDCF2A"
            />
          </svg>
        </div>
        <p className="text-2xl">
          At Techmology, we're committed to building a better future through
          robotics education. Join us on our mission to create the next
          generation of robotics experts!
        </p>
        <button className="get-started-btn w-44 py-2 px-4 rounded-lg font-bold bg-white text-purple ease-in duration-200 hover:bg-purple hover:text-white">
          <p>Get Started</p>
        </button>
      </div>
      <img src={techmodemyTxt} alt="techmodemy text" className="pt-6" />
      <img
        className="absolute top-[15%] right-[15%] w-[4%] ]"
        src={plusShape}
        alt="robot hand illustration"
      />
      <img
        className="absolute bottom-0 left-[-5%] w-[20%] ]"
        src={robotHand}
        alt="robot hand illustration"
      />
      <img
        className="absolute bottom-0 right-[5%] w-[15%] "
        src={robotFace}
        alt="robot hand illustration"
      />
      <img
        className="shape1 absolute left-0 w-[15%] "
        src={shape1}
        alt="shape1 illustration"
      />
      <img
        className="shape2 absolute right-[5%] w-[5%] "
        src={shape2}
        alt="shape2 illustration"
      />
    </div>
  );
};
