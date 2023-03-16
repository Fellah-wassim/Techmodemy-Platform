import React from "react";
import shape1 from "../assets/formShapes/shape1.svg";
import shape2 from "../assets/formShapes/shape2.svg";
import shape3 from "../assets/formShapes/shape3.svg";
// import shape4 from "../assets/formShapes/shape4.svg";
import shape5 from "../assets/formShapes/shape5.svg";
import shape6 from "../assets/formShapes/shape6.svg";
import robot from "../assets/profile/robot.svg";

const login = () => {
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
      <div className="flex items-center justify-center absolute w-[60%] bg-secondWhite text-secondBlack top-1/2 left-1/2 rounded-lg p-14 z-20 translate-y-[-50%] translate-x-[-50%] md:p-6 md:w-[90%]">
        <div className="flex flex-col gap-6 items-center w-[100%]">
          <div className="">
            <img src={robot} alt="" />
          </div>
          <div className="text-center">
            <h3 className="text-purple font-semibold">ALREADY A MEMBER</h3>
            <h1 className="text-3xl font-bold">Welcome Back</h1>
          </div>
          <div className="w-[100%] flex items-center justify-center">
            <form
              action=""
              className="flex flex-col w-[55%] md:w-[100%] items-center gap-4 text-semibold text-lg"
            >
              <div className="flex flex-col gap-2 w-[100%]">
                <label>Email or Phone number</label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Techmo@email.com"
                  className="rounded-3xl p-2 px-4"
                />
              </div>
              <div className="flex flex-col gap-2 w-[100%]">
                <label>Password</label>
                <input
                  required
                  type="password"
                  name="password"
                  id="password"
                  placeholder="********"
                  className="rounded-3xl p-2 px-4"
                />
              </div>
              <div className="border-2 w-fit border-green border-dotted rounded-lg p-2 mt-2">
                <input
                  type="submit"
                  value="Let’s start"
                  className="get-started-btn py-2 px-8 rounded-lg font-bold bg-green text-white cursor-pointer ease-in duration-200 hover:bg-white hover:text-green"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
