import React from "react";
import "./headerSecondary.css";
import { Link } from "react-router-dom";

const HeroSecondary = ({ title, shortTitle }) => {
  return (
    <div className=" bg-[#E6E9EF] h-72 lg:h-80 relative lg:mb-44 mb-32">
      <div className=" max-w-[1800px] px-0 lg:px-4 py-4 relative flex justify-between">
        <img
          className="pt-40 pl-0 lg:pl-4 lg:w-auto w-16"
          src="/assets/images/blur-medkit.png"
          alt=""
        />
        <div className="lg:h-4 lg:w-4 h-3 w-3 border-[1px] border-[#000] bg-red-300 mt-28 lg:mt-40 rounded-full" />
        <div className="lg:h-[13px] lg:w-[13px] w-[9px] h-[9px] bg-[#4F86ED] lg:mt-28 mt-40 rounded-full" />

        <img
          className="pt-0 pb-6 lg:pb-10 object-contain lg:w-auto w-16"
          src="/assets/images/kedney.png"
          alt=""
        />
      </div>

      <div
        className="h-[164px] lg:h-[184px] text-white-A700 w-[90%] lg:w-[70%] hero-secondary-bg mx-auto absolute bottom-[-25%] bg-cover bg-center flex flex-col justify-center align-middle gap-1 lg:gap-4"
        style={{ transform: "translateX(50%)", right: "50%" }}
      >
        <h1 className=" text-center font-fredoka text-3xl lg:text-[40px] font-medium">{title}</h1>

        <div className="flex gap-2 lg:gap-4 font-dmsans justify-center text-base lg:text-xl font-normal lg:font-medium">
          <Link to={"/"}>Home</Link> <p>•</p> <p className=" font-bold">{shortTitle || title}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSecondary;
