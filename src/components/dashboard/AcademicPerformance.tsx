import React, { useEffect } from "react";
import StudentReport from "./academic-performance/StudentReport";
import StudentData from "./academic-performance/StudentData";
import FeedBack from "./academic-performance/TeacherFeedback";
import { useParams, useRouter } from "next/navigation";
import { STUDENTS_LIST } from "@/utils/hepler";

const AcademicPerformance = ({darkTheme} : {darkTheme : any}) => {
  const router = useRouter();
  const params = useParams();
  const { student } = params;

  useEffect(() => {
    if (!student) {
      router.push("/dashboard");
      alert("Please select a student");
    }
  });

  const combinedList = [...STUDENTS_LIST];

  const studentList = combinedList.find((item) => {
    if (typeof student === "string") {
      const formattedStudent = student.toLocaleLowerCase();
      const formattedStudentName = item.name
        .toLocaleLowerCase()
        .replaceAll(" ", "-");
      return formattedStudent === formattedStudentName;
    }
    return false;
  });

  const markList = studentList && studentList.marks;

  const totalMarks = markList?.reduce((accumulator, item) => {
    return accumulator + item.marks;
  }, 0);
  const percentage = totalMarks ? Math.round((totalMarks / 500) * 100) : 0;
  return (
    <div className="pb-24 flex flex-col gap-[30px] px-[30px] max-md:px-4">
      <StudentData dark={darkTheme} totalNumber={`${totalMarks}/500` || "0"} percentage={`${percentage}%`} />
      <StudentReport />
      <FeedBack />
    </div>
  );
};

export default AcademicPerformance;
