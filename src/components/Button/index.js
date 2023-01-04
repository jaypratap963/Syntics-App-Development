import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder10: "rounded-radius10" };
const variants = { FillRedA200: "bg-red_A200 text-bluegray_900" };
const sizes = { sm: "md:p-[13px] p-[20px] sm:px-[15px] sm:py-[10px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder10"]),
  variant: PropTypes.oneOf(["FillRedA200"]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder10",
  variant: "FillRedA200",
  size: "sm",
};

export { Button };
