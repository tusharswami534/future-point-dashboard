"use client";
import React, { useEffect, useState } from "react";
import SideBar from "../common/SideBar";
import DashBoardData from "./DashBoardData";
import DashboardHeader from "../common/DashboardHeader";
import { useSearchParams } from "next/navigation";
import NotificationBar from "./NotificationBar";
import AcademicPerformance from "./AcademicPerformance";
import FeeStatus from "./FeeStatus";
const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  useEffect(() => {
    if (tab === "" || window.location.href === "") {
      window.location.href = "?tab=dashboard";
    }
  }, [tab]);

  return (
    <div className="flex w-full relative pl-[325px] max-xl:pl-[300px] max-lg:pl-0">
      <SideBar open={open} close={() => setOpen(false)} />
      <div className="w-full">
        <div className="w-full items-center max-lg:pl-5 relative z-30 bg-light-white flex">
          <button
            className="flex flex-col h-[15px] justify-between w-[19px] lg:hidden overflow-hidden relative z-50"
            onClick={() => setOpen(!open)}
          >
            <span
              className={`flex w-full h-0.5 rounded-3xl bg-black transition-all duration-300 ${
                open && "translate-x-10"
              }`}
            ></span>
            <span
              className={`flex w-full h-0.5 relative rounded-3xl bg-black transition-all duration-300 after:flex after:w-full after:h-0.5  after:rounded-3xl after:bg-black after:transition-all after:duration-300 top-0 left-0 ${
                open && "rotate-45 after:rotate-90"
              }`}
            ></span>
            <span
              className={`flex w-full h-0.5 rounded-3xl bg-black transition-all duration-300 ${
                open && "-translate-x-10"
              }`}
            ></span>
          </button>
          <DashboardHeader />
        </div>
        {tab === "dashboard" && <DashBoardData />}
        {tab === "academic-performance" && <AcademicPerformance />}
        {tab === "fee-status" && <FeeStatus />}
        {tab === "notification" && <NotificationBar />}
      </div>
    </div>
  );
};

export default Dashboard;
