"use client";
import { DASHBOARD_BUTTON_LIST } from "@/utils/hepler";
import Icons from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

const DashboardHeader = () => {
  const [showProfile, setShowProfile] = useState(false);
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  console.log(tab);
  const title =
    DASHBOARD_BUTTON_LIST.find(
      (item) => item.title.toLowerCase().replaceAll(" ", "-") === tab
    )?.title || "Notification";
  return (
    <div className="bg-light-white z-30 w-full">
      <div className="px-4 md:px-[30px] flex items-center justify-between py-7">
        <p className="lg:text-4xl md:text-2xl text-xl font-semibold leading-130 text-dark-black max-sm:tracking-[-1px]">
          {title}
        </p>
        <div className="flex items-center lg:gap-[35px] gap-3 sm:gap-6">
          <Link href={"?tab=notification"}>
            <button className="bg-dark-blue cursor-pointer flex items-center justify-center lg:size-[58px] sm:size-12 size-10 rounded-full">
              <Icons icon="notificationBell" />
            </button>
          </Link>
          <div className="flex items-center justify-center gap-[11px] relative">
            <Image
              onClick={() => setShowProfile(!showProfile)}
              className="rounded-full lg:size-[65px] sm:size-14 size-10 cursor-pointer"
              height={65}
              width={65}
              src={"/assets/images/user-image.png"}
              alt="user-image"
            />
            <div
              className={`flex flex-col max-sm:absolute bottom-[-80px] right-0 max-sm:bg-dark-blue max-sm:p-2 max-sm:rounded-lg ${
                showProfile ? "block" : "max-sm:hidden"
              }`}
            >
              <p className="lg:text-lg font-semibold leading-160 whitespace-nowrap max-sm:text-white">
                Rajpal Singh
              </p>
              <p className="text-sm leading-160 text-dark-blue max-sm:text-white">
                Parent
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
