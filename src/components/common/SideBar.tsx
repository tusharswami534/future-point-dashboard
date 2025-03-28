"use client";
import { DASHBOARD_BUTTON_LIST } from "@/utils/hepler";
import Icons from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const SideBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  return (
    <div className="max-w-[325px] shadow-sidebar min-h-screen bg-white py-4 flex flex-col">
      <div className="py-1.5 mb-10 px-6">
        <Link href={"/"}>
          <Image
            src={"/assets/images/logo.webp"}
            width={215}
            height={54.84}
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex gap-1 px-6 flex-col">
        {DASHBOARD_BUTTON_LIST.map((item, index) => (
          <button
            onClick={() =>
              router.push(
                `?tab=${item.title.toLowerCase().replaceAll(" ", "-")}`
              )
            }
            className={`items-center flex gap-3 box-border border border-solid border-transparent hover:border-blue py-3 cursor-pointer leading-160 px-4 rounded-[99px] max-w-[277px] w-full ${
              tab === item.title.toLowerCase().replaceAll(" ", "-") &&
              "bg-blue text-light-white"
            }`}
            key={index}
          >
            <span className={`size-[30px] flex justify-center items-center`}>
              <Icons
                iconClass={
                  tab === item.title.toLowerCase().replaceAll(" ", "-")
                    ? "fill-light-white"
                    : undefined
                }
                icon={item.icon}
              />
            </span>
            {item.title}
          </button>
        ))}
      </div>
      <div className="border-b border-solid my-5 border-light-pink"></div>
      <div className="flex flex-col px-6 gap-1">
        <button
          onClick={() => router.push("?tab=settings")}
          className={`items-center flex gap-3 box-border border border-solid border-transparent hover:border-blue rounded-[99px] transition-all duration-300 px-4 max-w-[277px] w-full py-3 cursor-pointer ${
            tab === "settings" && "bg-blue text-light-white"
          }`}
        >
          <span className="size-[30px] flex justify-center items-center">
            <Icons
              iconClass={tab === "settings" ? "stroke-light-white" : undefined}
              icon="settingIcon"
            />
          </span>
          Settings
        </button>
        <button
          className={`items-center flex gap-3 box-border border border-solid border-transparent hover:border-red rounded-[99px] transition-all duration-300 px-4 max-w-[277px] w-full py-3 cursor-pointer`}
        >
          <span className="size-[30px] flex justify-center items-center">
            <Icons icon="logoutIcon" />
          </span>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
