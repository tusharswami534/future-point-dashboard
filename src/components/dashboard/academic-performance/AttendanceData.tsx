"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import Icons from "@/utils/icons";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const AttendanceData = () => {
  const [state, setState] = useState<{
    series: number[];
    options: ApexOptions;
  }>({
    series: [20, 65, 180],
    options: {
      chart: {
        width: 317,
        type: "donut",
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    },
  });

  return (
    <div>
      <div className="chart-wrap">
        <div
          id="chart"
          className="flex relative justify-center h-[516px] bg-light-white border border-solid border-light-blue-two pb-10 rounded-2xl items-end"
        >
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="donut"
            width={400}
          />
          <span className="absolute top-[15%] left-[53%]">
            <Icons icon="absentLine" />
          </span>
          <span className="py-[9.52px] rounded-2xl top-[10%] left-[64%] px-[14.5px] absolute border items-center border-solid border-dark-green bg-dark-green/10">
            Total Absent <span className="text-2xl">20</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AttendanceData;
