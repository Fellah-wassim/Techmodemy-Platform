import React, { useState } from "react";
import shape1 from "../assets/formShapes/shape1.svg";
import shape2 from "../assets/formShapes/shape2.svg";
import shape3 from "../assets/formShapes/shape3.svg";
import shape5 from "../assets/formShapes/shape5.svg";
import shape6 from "../assets/formShapes/shape6.svg";
import robot from "../assets/profile/robot.svg";
import educational from "../assets/signUpForm/educational.png";
import parent from "../assets/signUpForm/parent.png";
import trainer from "../assets/signUpForm/trainer.png";
import student from "../assets/signUpForm/student.png";

export const SignUp = () => {
  let [index, setIndex] = useState(0);
  const incrementIndex = () => {
    setIndex(++index);
  };
  const decrementIndex = () => {
    setIndex(--index);
  };
  const [message, setMessage] = useState("");
  const setMsg = (event) => {
    setMessage(event.target.value);
  };
  const nextCheckNotEmpty = (event) => {
    event.preventDefault();
    if (message.trim().length !== 0) {
      setIndex(++index);
    } else {
      alert("Fill your information first");
    }
    setMessage("");
  };

  const renderSwitch = (index) => {
    switch (index) {
      case 0:
        return (
          <div
            key={index}
            className="flex flex-col gap-6 items-center w-[100%]"
          >
            <div className="">
              <img src={robot} alt="mobot profile pic" className="w-[150px]" />
              <p className="absolute top-[14%] translate-x-[65%] text-bold text-md px-4 py-2 text-white bg-blue rounded-full">
                Hello!, Im MoBot
              </p>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold">
                Welcome To <span className="text-green">Techmodemy</span>{" "}
              </h1>
            </div>
            <div className=" text-center text-xl">
              <p className="text-secondGray font-semibold">
                Mobot is so glad youre interested in learning more about
                robotics and the MoBot educational kits. Our platform is
                designed to make learning about robotics fun and engaging for
                children of all ages and skill levels.
              </p>
            </div>
            <div className="border-2 w-fit border-green border-dotted rounded-lg p-2 mt-2">
              <button
                onClick={incrementIndex}
                className="get-started-btn py-2 px-8 rounded-lg font-bold bg-green text-white ease-in duration-200 hover:bg-white hover:text-green"
              >
                Let’s Start
              </button>
            </div>
          </div>
        );

      case 1:
        return (
          <div
            key={index}
            className="flex flex-col gap-6 items-center w-[100%]"
          >
            <div className="">
              <img src={robot} alt="mobot profile pic" className="w-[150px]" />
              <p className="absolute top-[12%] translate-x-[50%] text-bold text-md px-4 py-2 text-white bg-blue rounded-full md:hidden">
                I'm excited to know you
              </p>
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold">You are..</h1>
            </div>
            <div className="flex gap-2 w-[100%] h-[200px] text-xl text-center md1390:overflow-y-scroll scrollbar-choose">
              <button className="choose flex flex-col gap-2 cursor-pointer items-center justify-center border-2 border-secondGray bg-white p-6  w-[750px] rounded-lg text-secondGray hover:bg-purple duration-200 hover:text-white focus:bg-purple focus:text-white">
                <img src={parent} alt="parent img" className="choose-img" />
                <p className="py-2 px-6">Parent</p>
              </button>
              <button className="choose flex flex-col gap-2 cursor-pointer items-center justify-center border-2 border-secondGray bg-white p-6  w-[750px] rounded-lg text-secondGray hover:bg-yellow duration-200 hover:text-white focus:bg-yellow focus:text-white">
                <img src={student} alt="student img" className="choose-img" />
                <p className="py-2 px-6">Student</p>
              </button>
              <button className="choose flex flex-col gap-2 cursor-pointer items-center justify-center border-2 border-secondGray bg-white p-6  w-[750px] rounded-lg text-secondGray hover:bg-blue duration-200 hover:text-white focus:bg-blue focus:text-white">
                <img
                  src={educational}
                  alt="school img"
                  className="choose-img"
                />
                <p className="py-2 px-6">Educational</p>
              </button>
              <button className="choose flex flex-col gap-2 cursor-pointer items-center justify-center border-2 border-secondGray bg-white p-6  w-[750px] rounded-lg text-secondGray hover:bg-red duration-200 hover:text-white focus:bg-red focus:text-white">
                <img src={trainer} alt="" className="choose-img" />
                <p className="py-2 px-6">trainer</p>
              </button>
            </div>
            <div className="flex gap-4 text-center text-xl">
              <button
                onClick={decrementIndex}
                className="get-started-btn py-2 px-8 rounded-lg font-bold bg-white text-green ease-in duration-200 hover:bg-green hover:text-white"
              >
                Previous
              </button>
              <button
                onClick={incrementIndex}
                className="get-started-btn py-2 px-8 rounded-lg font-bold bg-green text-white ease-in duration-50 hover:bg-darkerGreen"
              >
                Next
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="flex flex-col gap-6 items-center w-[100%]">
            <div className="">
              <img src={robot} alt="" />
            </div>
            <div className="text-center">
              <h3 className="text-purple font-semibold">QUESTION 1 OF 6</h3>
              <h1 className="text-3xl font-bold">What is your name ?</h1>
            </div>
            <div className="w-[100%] flex items-center justify-center">
              <form
                action=""
                className="flex flex-col w-[55%] md:w-[100%] items-center gap-4 text-semibold text-lg"
              >
                <div className="flex flex-col gap-2 w-[100%]">
                  <input
                    required
                    onChange={setMsg}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name"
                    className="rounded-3xl p-2 px-4"
                  />
                </div>
                <div className="flex gap-4 text-center text-xl">
                  <button
                    onClick={decrementIndex}
                    className="get-started-btn py-2 px-8 rounded-lg font-bold bg-white text-green ease-in duration-200 hover:bg-green hover:text-white"
                  >
                    Previous
                  </button>
                  <input
                    type="submit"
                    onClick={nextCheckNotEmpty}
                    // onClick={incrementIndex}
                    value="Next"
                    className="get-started-btn py-2 px-8 rounded-lg font-bold bg-green text-white ease-in duration-50 hover:bg-darkerGreen cursor-pointer"
                  />
                </div>
              </form>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="flex flex-col gap-6 items-center w-[100%]">
            <div className="">
              <img src={robot} alt="" />
            </div>
            <div className="text-center">
              <h3 className="text-purple font-semibold">QUESTION 2 OF 6</h3>
              <h1 className="text-3xl font-bold">How about your age?</h1>
            </div>
            <div className="w-[100%] flex items-center justify-center">
              <form
                action=""
                className="flex flex-col w-[55%] md:w-[100%] items-center gap-4 text-semibold text-lg"
              >
                <div className="flex flex-col gap-2 w-[100%]">
                  <input
                    required
                    onChange={setMsg}
                    type="number"
                    name="age"
                    id="age"
                    placeholder="Your age"
                    className="rounded-3xl p-2 px-4"
                  />
                </div>
                <div className="flex gap-4 text-center text-xl">
                  <button
                    onClick={decrementIndex}
                    className="get-started-btn py-2 px-8 rounded-lg font-bold bg-white text-green ease-in duration-200 hover:bg-green hover:text-white"
                  >
                    Previous
                  </button>
                  <input
                    type="submit"
                    onClick={nextCheckNotEmpty}
                    value="Next"
                    className="get-started-btn py-2 px-8 rounded-lg font-bold bg-green text-white ease-in duration-50 hover:bg-darkerGreen cursor-pointer"
                  />
                </div>
              </form>
            </div>
          </div>
        );

      default:
        break;
    }
  };

  return (
    <div className="h-screen bg-secondBlack">
      <img
        src={shape1}
        alt="shape1"
        className="absolute top-0 left-[15%] w-[20%] z-0"
      />
      <img
        src={shape5}
        alt="shape5"
        className="absolute top-[15%] left-0 w-[5%] z-0"
      />
      <img
        src={shape6}
        alt="shape6"
        className="absolute top-[8%] right-0 w-[15%] z-0"
      />
      <img
        src={shape3}
        alt="shape3"
        className="absolute top-[15%] right-[25%] w-[10%] z-0"
      />
      <img
        src={shape2}
        alt="shape2"
        className="absolute bottom-0 right-[25%] w-[15%] z-0"
      />
      <div
        key={index}
        className="flex items-center justify-center absolute w-[60%] bg-secondWhite text-secondBlack top-1/2 left-1/2 rounded-lg p-14 z-20 translate-y-[-50%] translate-x-[-50%] md:p-6 md:w-[90%]"
      >
        {renderSwitch(index)}
      </div>
    </div>
  );
};
