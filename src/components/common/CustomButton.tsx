import Icons from "@/utils/icons";
import React from "react";

interface CustomButtonProps {
  iconOne?: string;
  iconTwo?: string;
  buttonText?: string;
  buttonClass?: string;
  iconOneClass?: string;
  customOnClick?: () => void;
  buttonTextTwo?: string;
  buttonClassTwo?: string;
}

const CustomButton = ({
  buttonText,
  buttonClass,
  iconOne,
  iconTwo,
  customOnClick,
  iconOneClass,
  buttonTextTwo,
  buttonClassTwo,
}: CustomButtonProps) => {
  return (
    <button
      onClick={customOnClick}
      className={`flex items-center gap-2 py-2.5 px-5 md:py-[13.5px] md:px-[22.5px] leading-160 border text-blue border-blue rounded-[47px] cursor-pointer hover:bg-blue hover:text-white transition-all duration-300 group ${buttonClass}`}
    >
      <Icons
        icon={iconOne || ""}
        iconClass={`group-hover:stroke-white ${iconOneClass}`}
      />
      {buttonText}
      <span className={`${buttonClassTwo}`}>{buttonTextTwo}</span>
      <Icons icon={iconTwo || ""} />
    </button>
  );
};

export default CustomButton;
