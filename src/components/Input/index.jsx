import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  fill: {
    blue_gray_700: "bg-blue_gray-700 shadow-bs text-white-A700",
    blue_gray_600: "bg-blue_gray-600 text-blue_gray-200",
    white_A700: "bg-white-A700 shadow-bs3 text-blue_gray-900",
    blue_gray_900_0a: "bg-blue_gray-900_0a text-blue_gray-400",
  },
};
const shapes = { round: "rounded-[10px]" };
const sizes = {
  xs: "pb-[13px] pt-3.5 px-[13px]",
  sm: "p-4",
  md: "pb-[15px] pl-[15px] pr-3 pt-[18px]",
  lg: "px-5 py-6",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant]?.[color] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "blue_gray_700",
    "blue_gray_600",
    "white_A700",
    "blue_gray_900_0a",
  ]),
};

export { Input };
