import React from "react";
import SideBar from "../common/SideBar";
import DashBoardData from "./DashBoardData";
import DashboardHeader from "../common/DashboardHeader";
import NotificationBar from "./NotificationBar";

const Dashboard = () => {
  return (
    <div className="flex w-full">
      <SideBar />
      <div className="w-full">
        <DashboardHeader />
        <NotificationBar />
      </div>
    </div>
  );
};

export default Dashboard;
