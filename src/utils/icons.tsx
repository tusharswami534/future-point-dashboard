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
        deleteIcon: (
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path  className={`transition-all duration-300 ease-linear ${iconClass}`} d="M16 5L15.1327 17.1425C15.0579 18.1891 14.187 19 13.1378 19H4.86224C3.81296 19 2.94208 18.1891 2.86732 17.1425L2 5M7 9V15M11 9V15M12 5V2C12 1.44772 11.5523 1 11 1H7C6.44772 1 6 1.44772 6 2V5M1 5H17" stroke="#0000F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        dropDownIcon: (
            <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.322182 0.292894C0.751759 -0.0976305 1.44824 -0.0976306 1.87782 0.292894L5.5 3.58579L9.12218 0.292893C9.55176 -0.0976309 10.2482 -0.0976309 10.6778 0.292893C11.1074 0.683418 11.1074 1.31658 10.6778 1.70711L6.27782 5.70711C5.84824 6.09763 5.15176 6.09763 4.72218 5.70711L0.322182 1.70711C-0.107394 1.31658 -0.107394 0.683418 0.322182 0.292894Z" fill="#0000F5" />
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
