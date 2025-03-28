import React from "react";
import SideBar from "../common/SideBar";
import DashBoardData from "./DashBoardData";

const Dashboard = () => {
  return (
    <div className="flex w-full">
      <SideBar />
      <div className="w-full">
        <DashBoardData />
      </div>
    </div>
  );
};

export default Dashboard;
