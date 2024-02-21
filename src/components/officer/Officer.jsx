import { officer } from "data/data";
import React from "react";

const Officer = () => {
  return (
    <div className=" lg:py-[90px] py-[52px] bg-[#F5F6F9]">
      <div className="max-w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between">
          <div>
            <h4 className="text-[#6285CA] lg:mb-1 lg:text-base text-sm" style={{letterSpacing: 3}}>OFFICER</h4>
            <h1 className="text-[#032342] lg:text-[40px] text-[24px] font-fredoka font-medium">
              Medical <span className="text-[#385182]"> Officers</span>
            </h1>
          </div>
          <div>
            <p className="max-w-[534px] text-[#888] mt-[14px] lg:mt-0">
              Our administration and support staff all have exceptional people
              skills and trained to assist you with all medical enquiries.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 lg:mt-[52px] mt-[32px]">
          {officer.map((item, i) => (
            <Card data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Officer;

const Card = ({ data }) => (
  <div
    className="lg:p-[22px] p-[20px] rounded-[24px]"
    style={{
      background:
        "linear-gradient(148deg, #E6E9EF 3.94%, #DFEAFF 61.85%, #F1F6FF 99.8%)",
    }}
  >
    <div className="rounded-[24px] overflow-hidden aspect-square">
      <img className="h-full w-full" src={data?.image} alt="" />
    </div>

    <div className="lg:mt-8 mt-6 p-2">
      <h3 className="text-[#032342] text-2xl font-medium font-fredoka">
        {data.title}
      </h3>
      <p className="text-base text-[#767676] ">Medical Officer</p>
    </div>
  </div>
);
