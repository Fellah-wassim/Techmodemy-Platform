import ideaIcon from "../assets/training/idea.svg";
import powerIcon from "../assets/training/power.svg";
import starIcon from "../assets/training/star.svg";
import shape1 from "../assets/training/shape1.svg";
import shape2 from "../assets/training/shape2.svg";
import platformMockup from "../assets/training/platform-mockup.png";

export const Training = () => {
  return (
    <div className="relative flex flex-col gap-8 bg-white p-40 pb-0 md:p-10 md:pb-0">
      <img
        src={shape1}
        alt="shape 1"
        className="absolute w-[15%] top-[5%] left-0"
      />
      <img
        src={shape2}
        alt="shape 2"
        className="absolute w-[15%] top-[5%] right-0"
      />
      <div className="flex flex-col gap-8 justify-center items-center z-50">
        <h1 className="text-5xl text-purple font-bold">
          Discover Our Robotics Training Courses
        </h1>
        <p className=" text-lightenBlack text-2xl px-20 md:px-0 md:text-left">
          MoBot is a series of robotics kits designed to help children learn
          about the electronic components and mechanical structure of robots. We
          offer several different kits, ranging in complexity from beginner to
          advanced.
        </p>
        <div className="border-2 w-fit border-purple border-dotted rounded-lg p-2">
          <button className="get-started-btn py-2 px-4 rounded-lg font-bold bg-purple text-white ease-in duration-200 hover:bg-white hover:text-purple">
            <p className="text-xl p-2">Start Learning</p>
          </button>
        </div>
      </div>
      <div className="flex gap-3 items-center justify-center md:flex-col">
        <button className="flex gap-4 p-2 items-center justify-start bg-green rounded-3xl cursor-default">
          <div className="rounded-[50%] bg-darkerGreen p-3">
            <img src={powerIcon} alt="power icon" />
          </div>
          <p className="text-white text-xl pr-6">Interactive</p>
        </button>
        <button className="flex gap-4 p-2 items-center justify-start bg-yellow rounded-3xl cursor-default">
          <div className="rounded-[50%] bg-darkerYellow p-3">
            <img src={starIcon} alt="power icon" />
          </div>
          <p className="text-white text-xl pr-6">Best Instructors</p>
        </button>
        <button className="flex gap-4 p-2 items-center justify-start bg-red rounded-3xl cursor-default">
          <div className="rounded-[50%] bg-darkerRed p-3">
            <img src={ideaIcon} alt="power icon" />
          </div>
          <p className="text-white text-xl pr-6">Insightful</p>
        </button>
      </div>
      <img
        src={platformMockup}
        alt="techmodemy on macbook"
        className="w-full"
      />
    </div>
  );
};
