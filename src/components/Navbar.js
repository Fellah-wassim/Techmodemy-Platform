import React from "react";
import logo from "../assets/techmodemy.svg";
import languageIcon from "../assets/language-icon.svg";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 py-8 px-16 text-base font-semibold bg-darkerGreen">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu flex items-center justify-center">
        <ul className="flex text-white items-center justify-center gap-10">
          <li>
            <a href="#1">Meet Mobot</a>
          </li>
          <li>
            <a href="#2">Training</a>
          </li>
          <li>
            <a href="#3">Reviews</a>
          </li>
          <li>
            <a href="#4">Shop</a>
          </li>
          <li>
            <a href="#5">Contact</a>
          </li>
          <li className="flex gap-1.5 cursor-pointer p-3 py-2 rounded-[50px] bg-green">
            <img src={languageIcon} alt="language icon" />
            <p>Eng</p>
          </li>
        </ul>
      </div>
      <div className="buttons flex justify-center items-center text-teal-500 gap-[1.2rem] ">
        <div className="login-btn cursor-pointer border-2 border-white border-solid rounded-lg py-2 px-4 bg-green text-white ease-in duration-200 hover:bg-white hover:text-green">
          <p>Log in</p>
        </div>
        <div className="border-2 border-white border-dotted rounded-lg p-2">
          <button className="get-started-btn py-2 px-4 rounded-lg font-bold bg-white text-purple ease-in duration-200 hover:bg-purple hover:text-white">
            <p>Get Started</p>
          </button>
        </div>
      </div>
    </nav>
  );
};
