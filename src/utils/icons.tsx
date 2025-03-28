import React, { ReactElement } from "react";
interface LoginCardProps {
  icon: string;
  className?: string;
  fill?: string;
  stroke?: string;
  iconClass?: string;
}

const Icons: React.FC<LoginCardProps> = ({
  icon,
  className,
  stroke,
  iconClass,
}) => {
  const iconList = {
    dashboardIcon: (
      <svg
        width="22"
        height="23"
        viewBox="0 0 22 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={` transition-all duration-300 ease-linear ${iconClass}`}
          d="M17.25 14.3423V21.8423M13.5 18.0923H21M3.5 9.34229H6C7.38071 9.34229 8.5 8.223 8.5 6.84229V4.34229C8.5 2.96157 7.38071 1.84229 6 1.84229H3.5C2.11929 1.84229 1 2.96157 1 4.34229V6.84229C1 8.223 2.11929 9.34229 3.5 9.34229ZM16 9.34229H18.5C19.8807 9.34229 21 8.223 21 6.84229V4.34229C21 2.96157 19.8807 1.84229 18.5 1.84229H16C14.6193 1.84229 13.5 2.96157 13.5 4.34229V6.84229C13.5 8.223 14.6193 9.34229 16 9.34229ZM3.5 21.8423H6C7.38071 21.8423 8.5 20.723 8.5 19.3423V16.8423C8.5 15.4616 7.38071 14.3423 6 14.3423H3.5C2.11929 14.3423 1 15.4616 1 16.8423V19.3423C1 20.723 2.11929 21.8423 3.5 21.8423Z"
          stroke="#FCFCFC"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };
  const addClassName = (
    icon: ReactElement<SVGElement>
  ): ReactElement<SVGElement> => {
    return React.cloneElement(icon, {
      className: (className || "") + " custom-class",
    });
  };
  const iconsNew = Object.fromEntries(
    Object.entries(iconList).map(([key, icon]) => [key, addClassName(icon)])
  );
  return iconsNew[icon] || null;
};

export default Icons;
