import { RightArrow } from "assets/svg/Icon";
import "./style.css";

const HomeHelp = () => {
  return (
    <div className="bg-[#F5F6F9]">
      <div className="help-container-wrapper">
        <div className="help-container">
          <div className="self-center">
            <h4>help</h4>
            <h1 className="my-4">
              A <span> Dialysis Patient’s </span> Life Is Hard. Laugh Harder.
            </h1>
            <h3>Our support services inclide:</h3>
            <p className="my-4">
              Today the hospital is recognised as a world-renowned institution,
              not only providing outstanding care and treatment, our goal is to
              deliver quality care in a respectful & compassionate manner. We
              strive to be the first and best choice for healthcare.
            </p>
            <ul className="my-2">
              <li>
                <p>A family history of stone disease</p>
              </li>
              <li>
                <p>Stones caused by an infection in your urinary system</p>
              </li>
              <li>
                <p>
                  A genetic condition which makes you prone to forming stones
                </p>
              </li>
              <li>
                <p>A cyst or a condition called calyceal diverticulum</p>
              </li>
              <li>
                <p>Swelling in one of your ureters, called ureterocele</p>
              </li>
            </ul>
          </div>

          <div>
            <form className="h-full w-full">
              <h1>How Can We Help?</h1>
              <p>
                Please feel welcome to contact our friendly reception staff with
                any general or medical enquiry. Our doctors will receive or
                return any urgent calls.
              </p>
              <div className="grid1">
                {["Name", "Email", "Phone number", "Subject"].map((e) => (
                  <div>
                    <input type="text" placeholder={e} />
                  </div>
                ))}
              </div>
              <textarea
                className=" w-full"
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Message"
              ></textarea>
              <button>
                Submit Request <RightArrow />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHelp;
