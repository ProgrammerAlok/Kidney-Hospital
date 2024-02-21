import React from "react";

import { Button } from "components";
import Layout from "layout/Layout";
import { CurveArrow } from "assets/svg/Icon";
import Testimonials from "components/Testimonials/Testimonials";
import NewsPage from "components/News";
import HomeContactUs from "components/ContactUs/ContactUs";
import OurDoctor from "components/OurDoctor/OurDoctor";
import Services from "components/Services/Services";
import HomeHelp from "components/Help/HomeHelp";
import "./home.css";
import HomeAbout from "components/About/HomeAbout";
const Home = () => {
  return (
    <Layout isHome={true}>
      <div className="bg-[#F5F6F9] lg:h-screen h-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 max-w-[90%] h-full mx-auto pt-20">
          <div className="pt-12  relative h-full ">
            <h1 className="text-[#032342] lg:text-6xl text-[32px] font-medium font-fredoka">
              Find the good life by{" "}
              <span className=" font-fredoka text-[#6285CA]">good</span> health{" "}
            </h1>
            <p className="text-[#888] font-dmsans lg:text-xl text-base max-w-[504px] mt-4">
              Dhameliya Kidney Hospital has born out of the need for a good
              centre which catered to patients with complicated kidney diseases
              in Surat.
            </p>
            <div className="flex lg:gap-6 gap-4 flex-wrap">
              <Button
                className="cursor-pointer font-medium leading-[normal] lg:min-w-[201px] min-w-[174px] text-center lg:text-lg text-base lg:rounded-[19px] mt-[32px] flex gap-2 items-center justify-center rounded-[10px]"
                shape="round"
                color="blue_gray_700"
                size="md"
                variant="fill"
              >
                Get Appointment
              </Button>
              <Button
                className="cursor-pointer text-[#032342] border-[1px] border-[#385182] font-medium leading-[normal] lg:text-lg text-base lg:min-w-[150px] min-w-[129px] text-center lg:rounded-[19px] rounded-[10px] mt-[32px] flex gap-2 items-center justify-center"
                shape="round"
                size="md"
                variant="fill"
              >
                Learn More
              </Button>
              <div className="pl-16 pt-3">
                <CurveArrow />
              </div>
            </div>

            <div className="lg:flex hidden absolute w-full bottom-0 justify-between pr-20 items-end">
              <div className="mt-auto">
                <img
                  className="max-w-[250px] object-contain"
                  src="/assets/images/homeImage1.png"
                  alt="homeImage1"
                />
              </div>
              <div className="pb-10">
                <img
                  className="mt-auto"
                  src="/assets/images/blurHospital.png"
                  alt="blurHospital"
                />
              </div>
            </div>
          </div>

          <div className="py-4 lg:py-14 h-[60vh] lg:h-auto">
            <div class="grid grid-cols-2 gap-2 lg:gap-4 h-full">
              <div class="col-span-1 h-full">
                <div class="grid grid-rows-10 gap-2 lg:gap-4 h-full">
                  <div class="row-span-2 gap-2 lg:gap-4 grid grid-cols-2">
                    <div className="h-full bg-[#6285CA] rounded-[20px] flex align-middle justify-center">
                      <div className="h-[80%] w-full fist-card"></div>
                    </div>
                    <div className=" h-full bg-[#38518233] rounded-[20px] overflow-hidden flex align-middle justify-center">
                      <div className="h-[80%] w-full second-card"></div>
                    </div>
                  </div>
                  <div class="row-span-4 bg-[#6285CA] rounded-[20px] flex">
                    <div className="w-full h-[90%] mt-auto third-card"></div>
                  </div>
                  <div class="row-span-3 bg-[#385182] p-0 rounded-[20px] h-full relative fourth-card">
                    <div className="flex flex-col justify-between h-full absolute w-full lg:p-5 p-2">
                      <div className="flex align-middle lg:gap-4 gap-2">
                        <div>
                          <img
                            className=""
                            src="/assets/images/profile.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <h2 className="text-white-A700 lg:font-medium font-normal font-fredoka lg:text-lg text-sm">
                            Dr. Alex Smith
                          </h2>
                          <p className="text-[#AFB9CD] text-xs lg:text-base">
                            Infermrdica Hospital
                          </p>
                        </div>
                      </div>
                      <button className=" border border-white-A700 w-full h-10 text-white-A700 rounded-[10px] text-xs lg:text-lg">
                        Make Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-span-1 h-full">
                <div class="grid grid-rows-5 gap-2 lg:gap-4 h-full">
                  <div class="row-span-3 bg-[#385182] rounded-[20px] relative">
                    <div className="w-full h-[110%] mt-auto absolute bottom-0 fifth-card"></div>
                  </div>
                  <div class="row-span-2 bg-purple-200 rounded-[20px] sixth-card"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex lg:hidden bottom-0 justify-center pb-[52px] pt-5 relative">
              <div className="">
                <img
                  className="max-w-[250px] object-contain"
                  src="/assets/images/homeImage1.png"
                  alt="homeImage1"
                />
              </div>
              <div className="absolute right-0 top-0">
                <img
                  className=" w-[47.256px] h-[35.442px] object-contain"
                  src="/assets/images/blurHospital.png"
                  alt="blurHospital"
                />
              </div>
            </div>
        </div>
      </div>

      <HomeAbout/>
      <Services/>
      <OurDoctor/>
      <Testimonials />
      <HomeContactUs />
      <HomeHelp />
      <NewsPage />
    </Layout>
  );
};

export default Home;
