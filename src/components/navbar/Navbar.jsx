import { Downarrow, Menubar, User } from "assets/svg/Icon";
import { Button, Img } from "components";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ isHome }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const { pathname } = window.location;
  const [activeLink, setActiveLink] = useState(pathname);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);
  return (
    <div
      className={`bg-[#${isHome ? "F5F6F9" : "E6E9EF"}] absolute w-full z-10`}
    >
      <nav
        style={{ alignItems: "center" }}
        className="max-w-[90%] py-4 mx-auto flex align-middle justify-between"
      >
        <Link
          to="/"
          className="flex align-middle"
          style={{ alignItems: "center" }}
        >
          <Img
            className="h-[52px] md:h-auto object-cover w-[52px]"
            src="images/img_logo7701.png"
            alt="logo7701"
          />
          <h2
            className="text-blue_gray-900 text-lg w-[70%] sm:w-full max-w-[200px] font-fredoka font-semibold"
            size="txtFredokaSemiBold18"
          >
            Dhameliya Kidney Hospital
          </h2>
        </Link>

        <ul className="lg:flex hidden gap-10" style={{ alignItems: "center" }}>
          <li className="relative">
            <Link
              to={"/"}
              className={`${
                activeLink === "/" ? "text-[#385182]" : "text-[#032342]"
              } text-lg`}
            >
              Home
            </Link>

            <div
              className={`w-[6px] h-[6px] rounded-full bg-[#385182] absolute right-1/2 translate-x-1/2 ${
                activeLink === "/" ? "block" : "hidden"
              }`}
            />
          </li>
          <li className="relative">
            <Link
              to={"/"}
              className={`${
                activeLink === "/about" ? "text-[#385182]" : "text-[#032342]"
              } text-lg`}
            >
              About
            </Link>

            <div
              className={`w-[6px] h-[6px] rounded-full bg-[#385182] absolute right-1/2 translate-x-1/2 ${
                activeLink === "/about" ? "block" : "hidden"
              }`}
            />
          </li>

          <div class="group inline-block z-10 relative">
            <Link
              to="/"
              class={`transition duration-300 ease-in-out transform flex align-bottom gap-2 ${
                activeLink === "/medical-services"
                  ? "text-[#385182]"
                  : "text-[#032342]"
              } text-lg`}
              style={{ alignItems: "center" }}
            >
              Medical Services <Downarrow />
            </Link>

            <div
              className={`w-[6px] h-[6px] rounded-full bg-[#385182] absolute right-1/2 translate-x-1/2 ${
                activeLink === "/medical-services" ? "block" : "hidden"
              }`}
            />
            <div class="hidden absolute mt-1 bg-white shadow-md  py-2 w-36 rounded-md group-hover:block bg-white-A700">
              <a
                href="#"
                class="block px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-white"
              >
                Option 1
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-white"
              >
                Option 2
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-gray-800 hover:bg-blue-100 hover:text-white"
              >
                Option 3
              </a>
            </div>
          </div>
          <li className="relative">
            <Link
              to={"/career"}
              className={`${
                activeLink === "/career" ? "text-[#385182]" : "text-[#032342]"
              } text-lg`}
            >
              Career
            </Link>

            <div
              className={`w-[6px] h-[6px] rounded-full bg-[#385182] absolute right-1/2 translate-x-1/2 ${
                activeLink === "/career" ? "block" : "hidden"
              }`}
            />
          </li>
          <li className="relative">
            <Link
              to={"/"}
              className={`${
                activeLink === "/news" ? "text-[#385182]" : "text-[#032342]"
              } text-lg`}
            >
              News
            </Link>

            <div
              className={`w-[6px] h-[6px] rounded-full bg-[#385182] absolute right-1/2 translate-x-1/2 ${
                activeLink === "/news" ? "block" : "hidden"
              }`}
            />
          </li>
          <li className="relative">
            <Link
              to={"/"}
              className={`${
                activeLink === "/contact-us"
                  ? "text-[#385182]"
                  : "text-[#032342]"
              } text-lg`}
            >
              Contact
            </Link>

            <div
              className={`w-[6px] h-[6px] rounded-full bg-[#385182] absolute right-1/2 translate-x-1/2 ${
                activeLink === "/" ? "block" : "hidden"
              }`}
            />
          </li>
        </ul>

        <div
          className="lg:flex hidden align-middle gap-5"
          style={{ alignItems: "center" }}
        >
          <User />
          <Button
            className="cursor-pointer font-medium leading-[normal] min-w-[214px] text-center text-lg"
            shape="round"
            color="blue_gray_700"
            size="md"
            variant="fill"
          >
            Make Appointment
          </Button>
        </div>

        <button
          onClick={() => setToggleMenu(true)}
          className="lg:hidden bg-white-A700 w-10 h-10 flex items-center justify-center rounded-full"
        >
          <Menubar />
        </button>
      </nav>

      {toggleMenu && (
        <div className=" block lg:hidden bg-black-900_33 fixed top-0 bottom-0 right-0 left-0">
          <div
            onClick={() => setToggleMenu(false)}
            className="absolute top-0 right-0 left-0 bottom-0"
          ></div>
          <div className="bg-white-A700 h-full w-64 relative z-10">
            <div
              className="flex align-middle p-2"
              style={{ alignItems: "center" }}
            >
              <Img
                className="h-[52px] md:h-auto object-cover w-[52px]"
                src="images/img_logo7701.png"
                alt="logo7701"
              />
              <h2
                className="text-blue_gray-900 text-lg w-[70%] sm:w-full"
                size="txtFredokaSemiBold18"
              >
                Dhameliya Kidney Hospital
              </h2>
            </div>
            <hr />

            <ul className=""></ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
