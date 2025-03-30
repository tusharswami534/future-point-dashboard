"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
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
        <div id="chart">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="donut"
            width={400}
          />
        </div>
      </div>
    </div>
  );
};

export default AttendanceData;
