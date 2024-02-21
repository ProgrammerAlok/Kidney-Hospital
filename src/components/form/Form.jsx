import React from "react";

const Form = ({ children, className }) => {
  return (
    <div
      className={`w-full bg-[#fff] rounded-[30px] ${className}`}
      style={{ boxShadow: "0px 0px 129px -1px rgba(0, 0, 0, 0.11)" }}
    >
      {children}
    </div>
  );
};

export default Form;
