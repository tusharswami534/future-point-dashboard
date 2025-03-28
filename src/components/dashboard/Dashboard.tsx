import React from "react";
import SideBar from "../common/SideBar";
import DashBoardData from "./DashBoardData";
import DashboardHeader from "../common/DashboardHeader";

const Dashboard = () => {
  return (
    <div className="flex w-full">
      <SideBar />
      <div className="w-full">
        <DashboardHeader />
        <DashBoardData />
      </div>
    </div>
  );
};

export default Dashboard;
