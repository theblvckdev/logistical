import React from "react";

const Button = ({ variant, text, ringVariant }) => {
  return (
    <>
      <button
        className={`ring-2 text-[17px] ${ringVariant} font-outfit py-2.5 px-4 rounded-[8px] text-${variant} flex items-center justify-center gap-2`}>
        {text}
      </button>
    </>
  );
};

export default Button;
