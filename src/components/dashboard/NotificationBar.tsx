"use client";
import React, { useEffect, useState } from "react";
import CustomButton from "../common/CustomButton";
import { NOTIFICATIONS_LIST } from "@/utils/hepler";
import { useParams, useRouter } from "next/navigation";

const NotificationBar = ({ darkTheme }: { darkTheme: any }) => {
  const router = useRouter();
  const [notifications, setNotifications] = useState(NOTIFICATIONS_LIST);

  const handleClearNotification = (index: number) => {
    const clearNotification = notifications.filter((_, i) => i !== index);
    setNotifications(clearNotification);
  };

  const filterNotifications = (timeFrames: string[]) => {
    const today = new Date();

    const filteredNotifications = NOTIFICATIONS_LIST.filter((item) => {
      const notificationDate = new Date(item.date);

      if (timeFrames.includes("Today")) {
        if (
          notificationDate.getDate() === today.getDate() &&
          notificationDate.getMonth() === today.getMonth() &&
          notificationDate.getFullYear() === today.getFullYear()
        ) {
          return true;
        }
      }

      if (timeFrames.includes("1 Day Ago")) {
        const oneDayAgo = new Date(today);
        oneDayAgo.setDate(today.getDate() - 1);
        if (
          notificationDate.getDate() === oneDayAgo.getDate() &&
          notificationDate.getMonth() === oneDayAgo.getMonth() &&
          notificationDate.getFullYear() === oneDayAgo.getFullYear()
        ) {
          return true;
        }
      }

      if (timeFrames.includes("1 Week Ago")) {
        const oneWeekAgo = new Date(today);
        oneWeekAgo.setDate(today.getDate() - 7);
        if (notificationDate >= oneWeekAgo && notificationDate <= today) {
          return true;
        }
      }

      if (timeFrames.includes("All")) {
        return true;
      }

      return false;
    });

    setNotifications(filteredNotifications);
  };
  return (
    <div className={`${darkTheme && "!bg-dark-black"} bg-light-gray`}>
      <div className="sm:p-[30px] py-6 px-4">
        <div className="flex items-center justify-between">
          <CustomButton
            customOnClick={() => setNotifications([])}
            iconOne="deleteIcon"
            buttonText="Clear All"
            buttonClass={` ${darkTheme && "bg-light-white border-light-white hover:border-transparent"} ${notifications.length === 0 && "hidden"}`}
          />
          {notifications.length !== 0 && (
            <select
              onChange={(event: any) => filterNotifications(event.target.value)}
              className={`py-[13px] pl-[23px] pr-[49px] text-blue cursor-pointer bg-[center_right_28px] bg-no-repeat bg-[url('/assets/images/drop-down-icon.webp')] outline-none appearance-none rounded-[47px] border border-blue ${darkTheme && "bg-light-white border-transparent"}`}>
              <option>All</option>
              <option value="Today">Today</option>
              <option value="1 Day Ago">1 Day Ago</option>
              <option value="1 Week Ago">1 Week Ago</option>
            </select>
          )}
        </div>
        <div
          className={`flex flex-col border border-dark-blue/10 rounded-2xl overflow-hidden mt-[30px] ${darkTheme && "border-light-gray"} ${notifications.length === 0 && "hidden"
            }`}
        >
          {notifications.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-between py-2 sm:py-4 px-3 sm:px-6 gap-3 ${darkTheme && "border-light-gray hover:bg-light-gray/50"} border-b hover:bg-light-blue transition-all duration-300 border-dark-blue/10 ${index === notifications.length - 1 ? "border-b-0" : ""
                }`}
            >
              <div>
                <p className={`sm:text-lg font-semibold leading-160 text-dark-black sm:pb-1 ${darkTheme && "text-light-white"}`}>
                  {item.title}{" "}
                </p>
                <p className={`sm:text-sm text-xs leading-160 text-dark-black ${darkTheme && "text-light-white"}`}>
                  {item.description}
                </p>
              </div>
              <CustomButton
                customOnClick={() => handleClearNotification(index)}
                iconOne="deleteIcon"
                buttonTextTwo="Clear"
                buttonClass="border-0 text-dark-black max-sm:px-[11px] "
                iconOneClass={`stroke-dark-black ${darkTheme && "stroke-light-white"}`}
                buttonClassTwo={`max-sm:hidden ${darkTheme && "text-light-white"}`}
              />
            </div>
          ))}
        </div>
        {notifications.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-2 py-10">
            <p className="text-2xl font-semibold leading-160 text-dark-black">
              No Notifications
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationBar;
