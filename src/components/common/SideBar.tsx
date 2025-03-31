"use client";
import { DASHBOARD_BUTTON_LIST } from "@/utils/hepler";
import Icons from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const SideBar = ({ open, close, darkTheme }: any) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const title =
    DASHBOARD_BUTTON_LIST.find(
      (item) => item.title.toLowerCase().replaceAll(" ", "-") === tab
    )?.title || "Notification";
  return (
    <div
      className={`max-w-[325px] z-20 max-xl:max-w-[300px] transition-all duration-300 max-lg:pt-[121px] fixed top-0 left-0 w-full shadow-sidebar min-h-screen bg-white py-4 flex flex-col ${darkTheme && "!bg-dark-blue"} ${open ? "max-lg:left-0" : "max-lg:-left-full"
        }`}
    >
      <div className="py-1.5  mb-10 max-lg:mb-5 px-6">
        <p className="xl:text-4xl lg:!text-3xl lg:hidden md:text-2xl text-xl font-semibold leading-130 text-dark-black max-sm:tracking-[-1px]">
          {title}
        </p>
        <Link className="max-lg:hidden" href={"/"}>
          <Image src={darkTheme ? "/assets/images/dark-theme-logo.webp" : "/assets/images/logo.webp"} width={215} height={54.84} alt="logo" />
        </Link>
      </div>
      <div className="flex gap-1 px-6 flex-col">
        {DASHBOARD_BUTTON_LIST.map((item, index) => (
          <button onClick={() => {
            router.push(`?tab=${item.title.toLowerCase().replaceAll(" ", "-")}`);
            close();
          }} className={`items-center flex gap-3 whitespace-nowrap box-border text-dark-gray border border-solid border-transparent hover:border-dark-gray py-3 cursor-pointer leading-160 px-4 rounded-[99px] max-w-[277px] w-full ${darkTheme && "text-light-white hover:border-light-gray"} ${tab === item.title.toLowerCase().replaceAll(" ", "-") &&
            "bg-blue text-light-white"}`} key={index} >
            <span className={`size-[30px] flex justify-center items-center`}>
              <Icons
                iconClass={` ${darkTheme && "stroke-light-white"} ${tab === item.title.toLowerCase().replaceAll(" ", "-") ? index === 0 ? "stroke-light-white" : "fill-light-white" : undefined}
                `} icon={item.icon}
              />
            </span>
            {item.title}
          </button>
        ))}
      </div>
      <div className={`border-b border-solid my-5 border-light-pink ${darkTheme && "!border-dark-blue"}`}></div>
      <div className="flex flex-col px-6 gap-1">
        <button
          className={`${darkTheme && "text-light-white hover:border-light-gray"} items-center flex gap-3 box-border border border-solid border-transparent hover:border-dark-gray text-dark-gray rounded-[99px] transition-all duration-300 px-4 max-w-[277px] w-full py-3 cursor-pointer`}>
          <span className="size-[30px] flex justify-center items-center">
            <Icons
              iconClass={darkTheme && "!stroke-light-white"} icon="settingIcon"
            />
          </span>Settings
        </button>
        <button className={`items-center flex text-red gap-3 box-border border border-solid border-transparent hover:border-red rounded-[99px] transition-all duration-300 px-4 max-w-[277px] w-full py-3 cursor-pointer`}>
          <span className="size-[30px] flex justify-center items-center"><Icons icon="logoutIcon" /></span>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
