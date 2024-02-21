import React from "react";

const Input = ({ name, placeholder, value, handleOnChange, type='text' }) => {
  return (
    <div className="bg-[#f5f6f7] h-[52px] rounded-[10px] overflow-hidden">
      <input
        className="w-full !bg-transparent h-full px-5"
        type={type}
        name={`${name}`}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );
};

export const InputFile = ({ className, placeholder, fn }) => {
  return (
    <div className={`bg-[#f5f6f7] h-[52px] rounded-[10px] overflow-hidden ${{...className}}`}>
      <input
        className="w-full !bg-transparent h-full px-5"
        placeholder={placeholder}
        type="file"
        onChange={fn}
      />
    </div>
  );
};

export default Input;
