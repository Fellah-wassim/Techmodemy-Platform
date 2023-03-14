import React, { useState, useEffect } from "react";
import logo from "../assets/techmodemy.svg";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 400) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      key={isFixed}
      className={`nav flex items-center justify-between flex-wrap bg-teal-500 text-base font-semibold bg-darkerGreen z-20 ${
        isFixed
          ? "sticky top-0 left-0 right-0 z-50 fade-down py-4 px-8"
          : "py-8 px-16"
      }`}
    >
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
        >
          <svg
            className="h-5 w-5 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 3h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 6h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 6h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 3h20v2H0V3zm0 7h20v2H0v-2zm0 7h20v2H0v-2z"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } w-full lg:flex lg:items-center lg:w-auto`}
      >
        <div className="menu flex items-center justify-center font-bold text-base">
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
            <li className="flex gap-1.5 cursor-pointer  bg-green">
              <svg
                class="world-icon"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.9046 8.64V8.59C21.2 6.66623 19.9215 5.00529 18.2421 3.83187C16.5626 2.65845 14.5633 2.02917 12.5146 2.02917C10.4658 2.02917 8.46651 2.65845 6.78709 3.83187C5.10767 5.00529 3.82918 6.66623 3.12458 8.59C3.12458 8.59 3.12458 8.59 3.12458 8.64C2.33771 10.8109 2.33771 13.1891 3.12458 15.36V15.41C3.82918 17.3338 5.10767 18.9947 6.78709 20.1681C8.46651 21.3416 10.4658 21.9708 12.5146 21.9708C14.5633 21.9708 16.5626 21.3416 18.2421 20.1681C19.9215 18.9947 21.2 17.3338 21.9046 15.41C21.9046 15.41 21.9046 15.41 21.9046 15.36C22.6915 13.1891 22.6915 10.8109 21.9046 8.64ZM4.75458 14C4.40781 12.6892 4.40781 11.3108 4.75458 10H6.61458C6.45461 11.3285 6.45461 12.6715 6.61458 14H4.75458ZM5.57458 16H6.97458C7.2093 16.8918 7.54479 17.7541 7.97458 18.57C6.99388 17.9019 6.17408 17.0241 5.57458 16ZM6.97458 8H5.57458C6.16545 6.97909 6.97477 6.10147 7.94458 5.43C7.52513 6.24725 7.19972 7.10942 6.97458 8ZM11.4946 19.7C10.2663 18.7987 9.40373 17.4852 9.06458 16H11.4946V19.7ZM11.4946 14H8.63458C8.44797 12.6732 8.44797 11.3268 8.63458 10H11.4946V14ZM11.4946 8H9.06458C9.40373 6.51477 10.2663 5.20132 11.4946 4.3V8ZM19.4146 8H18.0146C17.7799 7.10816 17.4444 6.24594 17.0146 5.43C17.9953 6.09807 18.8151 6.97594 19.4146 8ZM13.4946 4.3C14.7228 5.20132 15.5854 6.51477 15.9246 8H13.4946V4.3ZM13.4946 19.7V16H15.9246C15.5854 17.4852 14.7228 18.7987 13.4946 19.7ZM16.3546 14H13.4946V10H16.3546C16.5412 11.3268 16.5412 12.6732 16.3546 14ZM17.0446 18.57C17.4744 17.7541 17.8099 16.8918 18.0446 16H19.4446C18.8451 17.0241 18.0253 17.9019 17.0446 18.57ZM20.2346 14H18.3746C18.4559 13.3365 18.496 12.6685 18.4946 12C18.4957 11.3315 18.4556 10.6636 18.3746 10H20.2346C20.5814 11.3108 20.5814 12.6892 20.2346 14Z"
                  fill="white"
                />
              </svg>
              <p>Eng</p>
            </li>
          </ul>
        </div>
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
