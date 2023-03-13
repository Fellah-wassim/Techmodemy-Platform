import { useState } from "react";

import leftBtn from "../assets/preview/leftBtn.svg";
import rightBtn from "../assets/preview/rightBtn.svg";
import kid1 from "../assets/preview/kid1.png";
import kid2 from "../assets/preview/kid2.png";
import kid3 from "../assets/preview/kid3.png";
import kid4 from "../assets/preview/kid4.png";
import circleRed from "../assets/preview/circleRed.svg";
import circleGreen from "../assets/preview/circleGreen.svg";
import circleYellow from "../assets/preview/circleYellow.svg";
import circlePurpleB from "../assets/preview/circlePurpleB.svg";
import circlePurple from "../assets/preview/circlePurple.svg";
import circleBlueB from "../assets/preview/circleBlueB.svg";
import circleBlue from "../assets/preview/circleBlue.svg";
import techmodemyTxt from "../assets/preview/techmodemy.svg";

const DATA = [
  {
    id: 1,
    img: kid1,
    text: '"I believe that Mobot is a great way to get kids interested in Robotics without even knowing it. My son loves robots and he doesn’t show interest in electronic and mechanic, since using this he is enjoying learning about it!"',
    parentName: "Parent of Anas, Age 10",
    color: "#76388D",
  },
  {
    id: 2,
    img: kid2,
    text: '"I have never seen a child more excited to work on robotics kits. He has gone from complaining about it, to begging to do more of them. This is not an exaggeration. I consider your product to be one of the very best we have used"',
    parentName: "Parent of Hadjer, Age 8",
    color: "#e83c35",
  },
  {
    id: 3,
    img: kid3,
    text: '"I love the program and how much my children love it too. They have been so excited to know more about Robotics and to be creative"',
    parentName: "Parent of Wassim, Age 10",
    color: "#3b69b1",
  },
  {
    id: 4,
    img: kid4,
    text: '"My child loves Mobot and talks about it all the time. We also made a decision to take online courses as well. He’ve been talking about other children and their creations. It is very positive"',
    parentName: "Parent of Rafik, Age 7",
    color: "#3eb073",
  },
];

export const Reviews = () => {
  let [pageIndex, setIndex] = useState(0);
  const leftBtnClicked = () => {
    console.log("before setting index", pageIndex);
    pageIndex === 0 ? setIndex(3) : setIndex(--pageIndex);
    console.log("after setting index", pageIndex);
  };
  const rightBtnClicked = () => {
    console.log("before setting index", pageIndex);
    pageIndex === 3 ? setIndex(0) : setIndex(++pageIndex);
    console.log("after setting index", pageIndex);
  };

  return (
    <div className="relative py-64 md:py-28 bg-darkerGreen overflow-hidden">
      <div
        key={pageIndex}
        className={
          (DATA[pageIndex].id % 2 === 0 ? "flex-row-reverse" : "") +
          " relative flex bg-white items-center h-[350px] md1090:h-fit justify-end px-48 py-32 md:py-4 gap-8 z-10 md1090:flex-col md1000:px-10"
        }
      >
        <div
          onClick={leftBtnClicked}
          className="absolute left-btn left-4 cursor-pointer md1090:top-[5%]"
        >
          <img src={leftBtn} alt="switch info button" />
        </div>
        <div
          onClick={rightBtnClicked}
          className="absolute right-btn right-4 cursor-pointer md1090:top-[5%]"
        >
          <img src={rightBtn} alt="switch info button" />
        </div>

        <div
          className={
            (pageIndex % 2 === 0 ? "rtl-animation" : "ltr-animation") +
            " w-[35%] max-w-md border-2 border-purple border-dotted rounded-lg p-2 z-20"
          }
        >
          <img
            src={DATA[pageIndex].img}
            alt={"kid" + DATA[pageIndex].id}
            className=" w-[100%] rounded max-w-md"
          />
        </div>
        <div className="flex flex-col gap-4 text-2xl w-3/5 md1090:w-fit z-10">
          <p className="text-lightenBlack text-left font-bold fade-in">
            {DATA[pageIndex].text}
          </p>
          <p
            className={
              (pageIndex % 2 === 0 ? "ltr-animation" : "rtl-animation") +
              " px-4 py-1 text-white text-right w-fit self-end rounded z-0"
            }
            style={{ backgroundColor: DATA[pageIndex].color }}
          >
            {DATA[pageIndex].parentName}
          </p>
        </div>
        <img
          src={circleRed}
          alt="bubble ellipses"
          className={
            (pageIndex % 2 === 0 ? "ltr-animation" : "rtl-animation") +
            " circle absolute left-[5%] top-[15%] z-0 md:opacity-50 "
          }
        />
        <img
          src={circleBlueB}
          alt="bubble ellipses"
          className={
            (pageIndex % 2 === 0 ? "rtl-animation" : "hidden") +
            " circle absolute left-[8%] top-[45%] z-0 md:opacity-50 md:hidden"
          }
        />
        <img
          src={circleGreen}
          alt="bubble ellipses"
          className={
            (pageIndex % 2 === 0 ? "rtl-animation" : "ltr-animation") +
            " circle absolute bottom-[5%] left-[2%] z-0 md:opacity-50 "
          }
        />
        <img
          src={circlePurpleB}
          alt="bubble ellipses"
          className={
            (pageIndex % 2 === 0 ? "ltr-animation" : "rtl-animation") +
            " circle absolute top-[10%] right-[5%] z-0 md:opacity-50"
          }
        />
        <img
          src={circlePurple}
          alt="bubble ellipses"
          className={
            (pageIndex % 2 === 0 ? "ltr-animation" : "rtl-animation") +
            " circle absolute bottom-[8%] left-[45%]   z-0 md:opacity-50 md:hidden"
          }
        />
        <img
          src={circleBlue}
          alt="bubble ellipses"
          className={
            (pageIndex % 2 === 0 ? "ltr-animation" : "rtl-animation") +
            " circle absolute bottom-[8%] right-[8%] z-0 md:opacity-50 "
          }
        />
        <img
          src={circleYellow}
          alt="bubble ellipses"
          className={
            (pageIndex % 2 === 0 ? "rtl-animation" : "ltr-animation") +
            " circle absolute top-[8%] left-[42%]   z-0 md:opacity-50 "
          }
        />
      </div>

      <svg
        key={DATA[pageIndex].id}
        className={
          (DATA[pageIndex].id % 2 === 0 ? "left-[15%]" : "right-[15%]") +
          " absolute top-[7%] z-0 w-[15%] md:top-[-7%] fade-up"
        }
        width="208"
        height="246"
        viewBox="0 0 208 246"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="74.6824"
          y="147.248"
          width="39.3052"
          height="17.9437"
          fill="#D9D9D9"
        />
        <path
          d="M33.6687 190.218C33.6687 176.396 44.8735 165.191 58.6954 165.191H135.08C148.4 165.191 159.386 175.625 160.073 188.927L161.58 218.104C162.332 232.659 150.536 244.775 135.966 244.413L58.0747 242.481C44.4988 242.144 33.6687 231.042 33.6687 217.462V190.218Z"
          fill={DATA[pageIndex].color}
        />
        <rect
          x="161.838"
          y="70.3455"
          width="45.2864"
          height="32.0319"
          rx="9.93738"
          fill="#D9D9D9"
        />
        <rect
          x="0.344238"
          y="70.3455"
          width="45.2864"
          height="32.0319"
          rx="9.93738"
          fill="#D9D9D9"
        />
        <rect
          x="108.469"
          y="23.116"
          width="45.2864"
          height="32.0319"
          rx="9.93738"
          transform="rotate(85.8934 108.469 23.116)"
          fill="#D9D9D9"
        />
        <path
          d="M10.5979 69.7642C10.5979 50.687 25.5235 34.9439 44.5737 33.9278L157.606 27.8983C177.924 26.8145 195.078 42.8214 195.401 63.1655L196.277 118.385C196.601 138.788 179.87 155.355 159.471 154.83L45.5626 151.901C26.1084 151.4 10.5979 135.486 10.5979 116.025V69.7642Z"
          fill="#D9D9D9"
        />
        <path
          d="M10.5979 69.5183C10.5979 50.4706 25.4789 34.7412 44.4973 33.686L147.297 27.9827C167.648 26.8537 184.852 42.8791 185.168 63.2584L186.052 120.202C186.362 140.238 170.206 156.646 150.168 156.646H46.4852C26.6652 156.646 10.5979 140.579 10.5979 120.759V69.5183Z"
          fill={DATA[pageIndex].color}
        />
        <path
          d="M30.251 74.5742C30.251 65.4787 37.3652 57.9719 46.4476 57.484L139.243 52.4984C148.916 51.9786 157.093 59.5846 157.273 69.2706L158.096 113.579C158.274 123.154 150.561 131.012 140.984 131.012H47.3658C37.9135 131.012 30.251 123.35 30.251 113.897V74.5742Z"
          fill="#455A64"
        />
        <rect
          x="90.917"
          y="8.82422"
          width="3.41784"
          height="17.0892"
          fill="#D9D9D9"
        />
        <circle cx="92.1985" cy="7.54295" r="7.26292" fill="#D9D9D9" />
        <circle cx="60.5837" cy="91.2798" r="7.26292" fill="#D9D9D9" />
        <circle cx="125.523" cy="91.2798" r="7.26292" fill="#D9D9D9" />
      </svg>
      <img
        src={techmodemyTxt}
        alt="techmodemy text"
        className="absolute bottom-2"
      />
    </div>
  );
};
