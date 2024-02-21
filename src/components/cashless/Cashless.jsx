import { DialerIcon1 } from "assets/svg/Icon";
import { Button } from "components";
import Heading from "components/heading/Heading";
import React from "react";

const Cashless = () => {
  return (
    <div className="max-w-[90%] mx-auto lg:pb-[120px] pb-[52px]">
      <Heading
        subHeading="Facility"
        headingFirst="Cashless"
        headingSecond="Facility"
      />

      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-7 gap-4 lg:mt-[52px] mt-[26px]">
        <Card
          image="/assets/images/about1.png"
          className={
            "rounded-tl-[124.874px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px]"
          }
        />
        <Card
          image="/assets/images/about2.png"
          className={
            "rounded-tl-[16px] rounded-br-[124.874px] rounded-tr-[16px] rounded-bl-[16px]"
          }
        />
        <Card
          image="/assets/images/about3.png"
          className={
            "rounded-tl-[16px] rounded-tr-[124.874px] rounded-br-[16px] rounded-bl-[16px]"
          }
        />
        <Card
          image="/assets/images/about4.png"
          className={
            "rounded-tl-[16px] lg:rounded-tr-[124.874px] rounded-tr-[16px] rounded-br-[16px] lg:rounded-bl-[16px] rounded-bl-[124.874px]"
          }
        />
        <Card
          image="/assets/images/about5.png"
          className={
            "rounded-tr-[16px] lg:rounded-tl-[16px] rounded-tl-[124.874px] rounded-br-[16px] lg:rounded-bl-[124.874px] rounded-bl-[16px]"
          }
        />
        <Card
          image="/assets/images/about6.png"
          className={
            "rounded-tr-[16px] lg:rounded-tl-[124.874px] rounded-tl-[16px] lg:rounded-br-[16px] rounded-br-[124.874px] rounded-bl-[16px]"
          }
        />
      </div>

      <div className="flex justify-center lg:mt-[76px] mt-[32px]">
        <Button className="rounded-[10px] py-[15px] min-w-[155px] text-[#032342] text-lg font-medium border-[1px] border-[#385182]">
          View More
        </Button>
      </div>

      <Card1/>
    </div>
  );
};

export default Cashless;

const Card = ({ className, borderRadius, image }) => (
  <div
    className={`lg:h-[249px] h-[220px] w-full ${className} flex items-center justify-center`}
    style={{ borderRadius, backgroundColor: "rgba(98, 133, 202, 0.15)" }}
  >
    <div>
      <img className="lg:w-[253px] w-[228px]" src={image} alt="" />
    </div>
  </div>
);

const Card1 = () => (
  <div className="card-wrapper mt-20">
    <div className="card lg:h-[29rem] w-[90%] lg:w-[48.875rem] mx-auto shadow-bs7 bg-blue_gray-900 rounded-[1.875rem] border-solid border-[#95BDFF] border-[6px] grid lg:grid-cols-2 grid-cols-1 gap-20 lg:gap-10 place-content-center place-items-center pt-20 lg:py-0">
      <div className="left place-items-center lg:pl-[4rem] px-8">
        <h1 className=" text-[#fff] font-fredoka text-[2rem] lg:text-[2.5rem] not-italic font-[500] leading-normal">Cashless Facility Available</h1>
        <div className=" flex justify-center items-center gap-2 rounded-[0.625rem] bg-[#fff] shadow-bs mt-4 py-2 px-6 lg:px-8 w-fit">
          <div className=" bg-[#032342] h-6 w-6 rounded-full flex justify-center items-center "><DialerIcon1/></div>
          <p className=" text-[#032342] font-dmsans text-[1.125rem] not-italic font-[500] leading-normal ">+91 261 2490001</p>
        </div>
      </div>

      <div className="right relative h-full w-full ">
        <div className="lg:w-[27.17rem] lg:h-[17.90494rem] rotate-18.38 shadow-bs8 border-2 rounded-[1.25rem] bg-gradient9 border-solid border-[#fff] place-content-end ">
          
          <div className="left bg-gradient10 w-full h-[36%] rounded-tl-[1.25rem] rounded-tr-[1.25rem] overflow-hidden py-6 ">
            <div className="h-full pr-8 text-right flex justify-end items-center ">
              <p className="capitalize text-[#fff] font-dmsans text-[0.625rem] leading-5 not-italic font-[500] ">Abc lorem ipsum</p>
            </div>
          </div>
          
          <div className="right h-[64%] grid grid-cols-[30%_50%_20%] py-4 ">
            <div className=" lg:pl-6 lg:pb-6 place-self-end ">
              <h2 className="capitalize text-[#385182] font-fredoka text-[0.625rem] leading-5 not-italic font-[500]">Patient Card</h2>
              <h1 className="capitalize text-[#032342] font-dmsans text-[1.3125rem] leading-[3.125rem] not-italic font-[500]">12/25</h1>
            </div>
            <div className=" place-self-center">
              <p className="capitalize text-[#0323421F] font-fredoka text-[1.255rem] leading-[3.125rem] not-italic font-[700] tracking-[0.375rem] ">MEDICO</p>
            </div>          
          </div>
        </div>

      </div>
    </div>
  </div>
)
