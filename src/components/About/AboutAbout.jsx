import Heading1 from "components/heading/Heading1"
import Deoctor3 from '../../assets/images/doctor-image-3.jpg'
import Deoctor1 from '../../assets/images/doctor-avatar-1.svg'
import { SpringArrow } from "assets/svg/Icon";



const Card = () => {

    return (
        <div className="absolute bottom-10 left-4 max-w-[60%] md:max-w-[45%] flex flex-col justify-center items-center object-contain bg-white-A700 shadow-bs4 rounded-[0.625rem] p-4">
            <img src={Deoctor1} alt="doctor-avatar" />
            <h2 className="to-blue_gray-900 font-fredoka text-[.875rem] md:text-[1.25rem] font-[500] text-center">Dr. Arvind B. Dhameliya</h2>
            <p className="font-dmsans text-[#888] text-[0.5625rem] md:text-[1rem] font-[500] text-center">Consultant urologist,Laproscopic Surgeon & Andrologist</p>
        </div>
    );
}

const AboutAbout = () => {
  return (
    <div className=" py-[10rem] bg-gray-100">
        <div className="max-w-[90%] mx-auto">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
                <div className="flex flex-col justify-center gap-4">
                    <Heading1
                        subHeading={`About doctor`}
                        headingStart={`Improving`}
                        headingMid={` The Quality `}
                        headingLast={`Of Your Life Through Better Health.`}
                    />
                    <div className="flex flex-col gap-2">
                        <h3 className="to-blue_gray-900 font-fredoka text-[1.125rem] md:text-[1.25rem] font-[500] leading-8">Our support services inclide:</h3>
                        <p className="font-dmsans text-[#888] text-[0.875rem] md:text-[1rem] font-[500] leading-[139.884%]">
                            Completed mbbs in 1998 from B.J. Medical College, Ahmedabad. Completed M.S. General Surgery in 2003 from Shardaben Hospital, Ahemdabad. He was the only student of Gujarat who selected for m.c.h study in 2004 and completed that in 2007.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="to-blue_gray-900 font-fredoka text-[1.125rem] md:text-[1.25rem] font-[500] leading-8">Professional Experience:</h3>
                        <p className="font-dmsans text-[#888] font-[1rem] font-[500] leading-[139.884%]">He started private practice in Surgical Urology at Surat in 2007 at Dhameliya Kidney Hospital. He is also giving his service to the PATEL KIDNEY HOSPITAL which is a trust hospital in Surat He is visiting doctor in many of hospital in Surat. (E.g. Mahavir hospital,BAPS hospital, Unique hospital, Apple hospital).</p>
                        <p className="font-dmsans text-[#888] font-[1rem] font-[500] leading-[139.884%]">He had presented papers on laparoscopic radical prostatectomy and laparoscopic radical cystectomy at Goa, Mahesana, Patna, Mumbai and Ahmedabad.</p>
                    </div>
                </div>
                <div className="flex relative">
                    <Card/>
                    <div className="absolute top-0 md:top-[40%] left-[40%] md:left-[10%] ">
                        <SpringArrow/>
                    </div>
                    <div className="h-full max-w-[90%] md:max-w-[70%] ml-auto rounded-[1.875rem] overflow-hidden border-8 border-white-A700 shadow-bs8 mt-20 md:mt-0">
                        <img 
                            src={Deoctor3} 
                            alt="doctor-image" 
                            className=" h-full w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutAbout