import React from "react";
import Chart from "react-apexcharts";

const AttendanceData = () => {
  const options = {
    chart: {
      type: "donut",
      width: 317,
    },
    labels: ["Late", "Absent", "present"],
    legend: {
      position: "left",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const series = [9, 24, 67];

  return (
    <div>
      <Chart options={options} series={series} type="donut" />
    </div>
  );
};

export default AttendanceData;
