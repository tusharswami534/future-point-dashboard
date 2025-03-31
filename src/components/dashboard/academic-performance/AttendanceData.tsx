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
      labels: ["Total Absent", "Total Leave", "Total Present"],
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 1200,
          options: {
            legend: {
              show: true,
            },
          },
        },
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
    },
  });

  return (
    <div>
      <p className="text-2xl font-semibold pb-[30px] leading-130">
        Attendance Data
      </p>
      <div className="chart-wrap flex relative justify-center h-[516px] max-[1200px]:h-auto bg-light-white border border-solid border-light-blue-two pb-10 max-[1200px]:py-5 rounded-2xl items-end">
        <div id="chart" className="relative">
          <ReactApexChart
            className="relative z-20"
            options={state.options}
            series={state.series}
            type="donut"
            width={400}
          />
          <span className="absolute max-[1200px]:hidden top-[-22%] left-[53%]">
            <Icons icon="absentLine" />
          </span>
          <span className="py-[9.52px] whitespace-nowrap flex gap-1 text-dark-green rounded-[73px] top-[-30%] left-[73%] px-[14.5px] absolute max-[1200px]:hidden border items-center border-solid border-dark-green bg-dark-green/10">
            Total Absent <span className="text-2xl font-semibold">20</span>
          </span>
          <span className="absolute max-[1200px]:hidden top-[30%] left-[-18%]">
            <Icons icon="presentLine" />
          </span>
          <span className="py-[9.52px] rounded-[73px] flex gap-1 text-blue top-[15%] left-[-40%] px-[14.5px] absolute max-[1200px]:hidden border items-center border-solid border-blue bg-blue/10">
            Total Present <span className="text-2xl font-semibold">180</span>
          </span>
          <span className="absolute max-[1200px]:hidden top-[47%] right-[-10%]">
            <Icons icon="leaveLine" />
          </span>
          <span className="py-[9.52px] rounded-[73px] flex gap-1 text-dark-blue top-[74%] right-[-31%] px-[14.5px] absolute max-[1200px]:hidden border items-center border-solid border-dark-blue bg-dark-blue/10">
            Total Leave <span className="text-2xl font-semibold">65</span>
          </span>
          <span className="absolute text-center flex text-dark-black justify-center items-center flex-col size-[193px] top-1/2 left-1/2 -translate-x-1/2 bg-dark-blue/10 rounded-full -translate-y-1/2">
            Total Attendance{" "}
            <span className="block text-2xl font-semibold">265</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AttendanceData;
