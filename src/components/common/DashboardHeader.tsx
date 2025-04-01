"use client";
import { DASHBOARD_BUTTON_LIST } from "@/utils/hepler";
import Icons from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useLayoutEffect, useState } from "react";
const DashboardHeader = ({ close }: any) => {
  const router = useRouter();
  const [dark, setDark] = useState<boolean>(() => {
    return JSON.parse(localStorage.getItem("darkMode") || "false");
  });
  const [showProfile, setShowProfile] = useState(false);
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  const title =
    DASHBOARD_BUTTON_LIST.find(
      (item) => item.title.toLowerCase().replaceAll(" ", "-") === tab
    )?.title || "Notification";
  useLayoutEffect(() => {
    if (dark) {
      document.body.classList.add("!bg-dark-black");
    } else {
      document.body.classList.remove("!bg-dark-black");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(dark));
    window.dispatchEvent(new Event("darkModeChange"));
  }, [dark]);
  return (
    <div
      className={`bg-light-white text-black z-30 w-full ${
        dark && "!bg-dark-blue"
      }`}
    >
      <div className="px-4 md:px-[30px] flex items-center justify-between py-7">
        <p
          className={`xl:text-4xl lg:!text-3xl max-lg:hidden md:text-2xl text-xl font-semibold leading-130 text-dark-black max-sm:tracking-[-1px] ${
            dark && "text-light-white"
          }`}
        >
          {title}
        </p>
        <Link className="lg:hidden" href={"/"}>
          <Image
            src={
              dark
                ? "/assets/images/dark-theme-logo.webp"
                : "/assets/images/logo.webp"
            }
            width={215}
            height={54.84}
            alt="logo"
            className="w-[215px] h-[54.84px] max-lg:w-[150px] max-lg:h-[40px]"
          />
        </Link>
        <div className="flex items-center lg:gap-[35px] gap-3 sm:gap-6">
          <button
            onClick={() => setDark(!dark)}
            className={`p-3 border border-solid cursor-pointer rounded-full font-semibold text-xl leading-160 ${
              dark ? "text-white border-white bg-dark-blue" : "border-dark-blue"
            }`}
          >
            <Icons
              icon="themeIcon"
              iconClass={dark ? "fill-white" : undefined}
            />
          </button>
          <button
            onClick={() => {
              router.push("/dashboard?tab=notification");
              close();
            }}
            className={`bg-light cursor-pointer flex items-center justify-center lg:size-[58px] sm:size-12 size-10 rounded-full ${
              dark && "!bg-blue"
            } ${tab === "notification" && "!bg-dark-blue"}`}
          >
            <Icons
              iconClass={`fill-dark-blue ${
                tab === "notification" && "fill-white"
              }`}
              icon="notificationBell"
            />
          </button>
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
              <p
                className={`lg:text-lg font-semibold leading-160 whitespace-nowrap max-sm:text-white ${
                  dark && "text-light-white"
                }`}
              >
                Rajpal Singh
              </p>
              <p
                className={`text-sm leading-160 text-dark-blue max-sm:text-white ${
                  dark && "text-light-white"
                }`}
              >
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
