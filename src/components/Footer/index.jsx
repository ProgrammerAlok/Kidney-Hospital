import React from "react";
import './style.css'
import { DialerIcon, DiamondIcon, FbLogo, InstaLogo, Line1, LinkedInLogo, LoationIcon, RightArrow } from "../../assets/svg/Icon"

const Footer = (props) => {
  return (
    <div className="footer-container-wrapper"> 
      <footer className="footer-container">        
        <div className="md:w-[80%] max-w-[1800px]">
          <h1>
            Dhameliya Kidney Hospital
          </h1>
          <p className="py-4">
            Dhameliya Kidney Hospital has born out of the need for a good center which catered to patients with complicated kidney diseases in Surat. It is a judicious blend of high end technology, 
          </p>
          <div className="flex gap-4">
            <FbLogo/>
            <InstaLogo/>
            <LinkedInLogo/>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:w-[95%]">
          <h3>
            Get in Touch
            <Line1/>
          </h3>
          <p>
            Get in TouchIf you have any questions or need help, feel free to contact with our team.
          </p>
          <div className="flex items-center gap-2">
            <DialerIcon/>
            <div>+91 261 2490001</div>
          </div>
          <div className="flex items-center gap-2">
            <div><LoationIcon/></div>
            <div>402, Aayush Doctor House, Lal Darwaja, Station Road, SURAT 395002 - GUJ INDIA</div>
          </div>
        <div className="flex items-center gap-2">
          <p>Get Direction</p>
          <RightArrow/>
        </div>
        <div className="flex items-center gap-2">
          <p>Other Branches</p>
          <RightArrow/>
        </div>
        </div>

        <div className="flex justify-center md:justify-end gap-[20%]">
          <div className="flex flex-col gap-5">
            <div>
              <h3>Medical Services</h3>
              <Line1/>
            </div>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <DiamondIcon/>
                Kidney Stone
              </li>
              <li className="flex items-center gap-2">
                <DiamondIcon/>
                Prostate
              </li>
              <li className="flex items-center gap-2">
                <DiamondIcon/>
                Uro Oncology
              </li>
              <li className="flex items-center gap-2">
                <DiamondIcon/>
                Paediatric Urology
              </li>
              <li className="flex items-center gap-2">
                <DiamondIcon/>
                Female Urology
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <h3>Quick Links </h3>
              <Line1/>
            </div>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <DiamondIcon/>
                Home
              </li>
              <li className="flex items-center gap-2">
                <DiamondIcon/>
                About Us
              </li>
              <li className="flex items-center gap-2">
                <DiamondIcon/>
                Medical Services
              </li>
              <li className="flex items-center gap-2">
                <DiamondIcon/>
                Testimonials
              </li>
              <li className="flex items-center gap-2">
                <DiamondIcon/>
                Contact Us
              </li>
            </ul>
          </div>
        </div>

      </footer>
      <div className="line2 w-[90%]">
        <hr />
        <p className="text-center mt-5">
          Non Copyrighted © 2022 Design and upload by Dhameliya Kidney Hospital
        </p>
      </div>
    </div>
  );
};

Footer.defaultProps = {};

export default Footer;
