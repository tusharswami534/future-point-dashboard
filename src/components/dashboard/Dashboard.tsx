import React from "react";
import SideBar from "../common/SideBar";
import DashBoardData from "./DashBoardData";
const Dashboard = () => {
  return (
    <div className="flex w-full relative pl-[325px] max-xl:pl-[300px]">
      <SideBar />
      <div className="w-full relative">
        <div>
          <DashBoardData />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
