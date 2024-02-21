import Heading1 from "components/heading/Heading1";
import "./style.css";
import Doctor1 from "../../assets/images/doctor1.png";
import Doctor2 from "../../assets/images/doctor2.png";
import { LeftArrow, NEArrow1, RightArrow, Wave1 } from "assets/svg/Icon";

const Card = ({ name, about, avatar }) => {
  return (
    <div className="card-wrapper">
      <div className="card flex justify-end relative">
        <div className="w-[60%] md:w-[50%]">
          <h1>{name}</h1>
          <p>{about}</p>
          <button>
            {" "}
            Learn More <RightArrow />{" "}
          </button>
        </div>

        <div className="wave">
          <Wave1 />
        </div>

        <div className="avatar">
          <img className="" src={avatar} alt="doctor-image" />
        </div>
      </div>
    </div>
  );
};

const OurDoctor = () => {
  return (
    <div className="home-our-doctor-container-wrapper">
      <div className="home-our-doctor-container">
        <div className="left">
          <Heading1
            subHeading={`Our Doctor`}
            headingStart={`Meet Our Professional `}
            headingMid={`Expert Doctor`}
            headingLast={``}
          />
          <Card
            name={`Dr.Christopher Nicks`}
            about={`MBBS,FCPS - Cardiologist`}
            avatar={Doctor1}
          />
        </div>

        <div className="right">
          <div className="hidden md:block">
            <Card
              name={`Dr.Christopher Nicks`}
              about={`MBBS,FCPS - Cardiologist`}
              avatar={Doctor2}
            />
            <h3
              className="py-2 font-fredoka"
              style={{ WebkitTextStroke: "1px rgba(56, 81, 130, 0.3)" }}
            >
              Our doctors
            </h3>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4 my-4">
            <div className="left-arrow">
              <LeftArrow />
            </div>
            <div className="north-east-arrow">
              <NEArrow1 />
            </div>
          </div>
        </div>

        <div className="absolute leaf-img right-0 bottom-14 hidden md:block"></div>
      </div>
    </div>
  );
};

export default OurDoctor;
