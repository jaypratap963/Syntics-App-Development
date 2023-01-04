import React from "react";
const variantClasses = {
  h1: "font-normal md:text-[48px] sm:text-[48px] text-[64px]",
  h2: "font-normal md:text-[48px] sm:text-[48px] text-[60px]",
  h3: "font-normal sm:text-[32px] md:text-[38px] text-[42px]",
  h4: "font-normal sm:text-[30px] md:text-[32px] text-[34px]",
  h5: "sm:text-[28px] md:text-[30px] text-[32px]",
  h6: "font-normal sm:text-[24px] md:text-[26px] text-[28px]",
  body1: "font-normal sm:text-[20px] md:text-[22px] text-[24px]",
  body2: "sm:text-[18px] md:text-[20px] text-[22px]",
  body3: "font-normal text-[20px]",
  body4: "font-normal text-[16px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
