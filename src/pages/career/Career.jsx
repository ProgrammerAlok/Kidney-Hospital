import { RightArrow, RightArrowWhite } from "assets/svg/Icon";
import { Button } from "components";
import Form from "components/form/Form";
import Input, { InputFile } from "components/form/Input";
import TextArea from "components/form/TextArea";
import HeroSecondary from "components/secondary-hero/HeroSecondary";
import Layout from "layout/Layout";
import { useState } from "react";

const Career = () => {
  const initData = {
    name: '',
    email: '',
    phone: '',
    experience: 0,
    file: null,
    designation: '',
    message: ''
  };

  const [data, setData] = useState({ ...initData });
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const methods = {
    handleFileInput: (e) => {
      e.preventDefault();
      setData({
        ...data,
        file: e.target.files[0]
      });
    },
    handleOnChange: (e) => {
      e.preventDefault();
      const { name, value } = e.target;
      setData({
        ...data,
        [name]: value
      });
    },
    handleFormSubmit: (e) => {
      e.preventDefault();
      setIsError(false);
      const {
        name,
        email,
        phone,
        experience,
        file,
        designation,
        message
      } = data;

      if(!name || !email || !phone || !file || !experience || !designation || !message) {
        setIsError(true);
        setErrorMessage('All the fields are required...');
        return;
      }
      
      if(name.length < 3 || name.length > 30) {
        setIsError(true);
        setErrorMessage('Please enter a valid name...');
        return;
      }

      if(!email.trim().toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )) {
        setIsError(true);
        setErrorMessage('Please enter a valid email...');
        return;
      }

      if(phone.length !== 10) {
        setIsError(true);
        setErrorMessage('Please enter a valid mobile...');
        return;
      }

      if(experience < 0 || experience > 80) {
        setIsError(true);
        setErrorMessage('Please enter a valid experience...');
        return;
      }
      
      setIsSubmitting(true);
      setTimeout(() => {
        setData({ ...initData });
        setIsSubmitted(true);
        setIsSubmitting(false);
      }, 2000);

    }
  };

  console.log(data)

  return (
    <Layout>
      <HeroSecondary title="Career" />

      <div className="bg-[#F5F6F9]">
        <div className="help-container-wrapper">
          <div className="help-container">
            <div className="self-center">
              <div className="">
                <p
                  className="!text-[#6285CA] !font-fredoka lg:text-base text-sm !font-medium !uppercase"
                  style={{ letterSpacing: 3 }}
                >
                  Career
                </p>
                <h2 className="!text-[#032342] !font-fredoka lg:text-[40px] text-[24px] !font-medium !leading-[55px]">
                  Leave A <span className="text-[#385182]">Message</span>
                </h2>
                <p className="!text-[#888] !font-dmsans !lg:text-[20px] !text-sm !font-medium !leading-[18px] !lg:leading-[32px] !max-w-[1024px] lg:mt-6 mt-2">
                  Please feel welcome to contact our friendly reception staff
                  with any general or medical enquiry. Our doctors will receive
                  or return any urgent calls.
                </p>
              </div>
              {isSubmitted && (
                <div className="mt-6 h-[8rem] w-full flex justify-center items-center text-4xl">
                  <h2>Form Submitted Success</h2>
                </div>
              )}
              {!isSubmitted && <Form className="p-6 mt-6">
                <div className=" grid grid-cols-2 gap-[22px]">
                  <div className="lg:col-span-1 col-span-2">
                    <Input 
                      placeholder="Name" 
                      value={data.name}
                      name={'name'}
                      handleOnChange={methods.handleOnChange}
                    />
                  </div>
                  <div className="lg:col-span-1 col-span-2">
                    <Input 
                      placeholder="Email" 
                      value={data.email}
                      name={'email'}
                      handleOnChange={methods.handleOnChange}
                    />
                  </div>
                  <div className="lg:col-span-1 col-span-2">
                    <Input 
                      placeholder="Phone Number" 
                      value={data.phone}
                      name={'phone'}
                      handleOnChange={methods.handleOnChange}
                    />
                  </div>
                  <div className="lg:col-span-1 col-span-2">
                    <Input 
                      placeholder="Experience" 
                      type="number"
                      value={data.experience}
                      name={'experience'}
                      handleOnChange={methods.handleOnChange}
                    />
                  </div>
                  <div className="lg:col-span-1 col-span-2">
                    <InputFile 
                      fn={methods.handleFileInput} 
                      placeholder="Choose file" 
                    />
                  </div>
                  <div className="lg:col-span-1 col-span-2">
                    <Input 
                      placeholder="Designation"
                      name={'designation'} 
                      value={data.designation}
                      handleOnChange={methods.handleOnChange}
                    />
                  </div>
                  <div className="col-span-2">
                    <TextArea 
                      placeholder="Message" 
                      value={data.message}
                      name='message'
                      handleOnChange={methods.handleOnChange}
                    />
                  </div>
                </div>

                {isError && <div className="pt-7">{errorMessage}</div>}
                <div onClick={methods.handleFormSubmit}>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[189px] text-center text-lg rounded-[19px] mt-[32px] flex gap-2 items-center justify-center"
                    shape="round"
                    color="blue_gray_700"
                    size="md"
                    variant="fill"
                  >
                    {isSubmitting ? 'Sumitting...' : 'Submit'} <RightArrowWhite />
                  </Button>
                </div>
              </Form>}
            </div>

            <div className="">
              <div
                className="bg-[#fff] lg:w-[85%] w-full rounded-[30px] lg:h-[97%] h-full p-2"
                style={{ boxShadow: "18px 39px 73px 0px rgba(0, 0, 0, 0.15)" }}
              >
                <img
                  src="/assets/images/career.png"
                  className="w-full h-full object-cover rounded-[30px]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Career;
