import React from "react";
import StudentReport from "./academic-performance/StudentReport";
import StudentData from "./academic-performance/StudentData";
import FeedBack from "./academic-performance/TeacherFeedback";

const AcademicPerformance = () => {
  return (
    <div className="pb-24 flex flex-col gap-[30px] px-[30px] max-md:px-4">
      <StudentData />
      <StudentReport />
      <FeedBack />
    </div>
  );
};

export default AcademicPerformance;
