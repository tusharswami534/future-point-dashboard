import React, { useEffect } from "react";
import StudentReport from "./academic-performance/StudentReport";
import StudentData from "./academic-performance/StudentData";
import FeedBack from "./academic-performance/TeacherFeedback";
import { useParams, useRouter } from "next/navigation";

const AcademicPerformance = () => {
  const router = useRouter();
  const params = useParams();
  const { student } = params;

  useEffect(() => {
    if (!student) {
      router.push("/dashboard");
      alert("Please select a student");
    }
  });

  return (
    <div className="pb-24 flex flex-col gap-[30px] px-[30px] max-md:px-4">
      <StudentData />
      <StudentReport />
      <FeedBack />
    </div>
  );
};

export default AcademicPerformance;
