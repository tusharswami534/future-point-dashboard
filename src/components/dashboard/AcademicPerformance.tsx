import React, { useEffect, useState } from "react";
import StudentReport from "./academic-performance/StudentReport";
import StudentData from "./academic-performance/StudentData";
import FeedBack from "./academic-performance/TeacherFeedback";
import { useParams, useRouter } from "next/navigation";
import { STUDENTS_LIST } from "@/utils/hepler";

const AcademicPerformance = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const router = useRouter();
  const params = useParams();
  const { student } = params;

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode) {
      setDarkTheme(JSON.parse(savedDarkMode));
    }

    const handleDarkModeChange = () => {
      const updatedDarkMode = localStorage.getItem("darkMode");
      if (updatedDarkMode) {
        setDarkTheme(JSON.parse(updatedDarkMode));
      }
    };

    window.addEventListener("darkModeChange", handleDarkModeChange);
    return () => {
      window.removeEventListener("darkModeChange", handleDarkModeChange);
    };
  }, []);

  useEffect(() => {
    if (!student) {
      router.push("/dashboard");
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
    <div
      className={`pb-24 flex flex-col gap-[30px] px-[30px] max-md:px-4 ${
        darkTheme && "bg-dark-black"
      }`}
    >
      <StudentData
        totalNumber={`${totalMarks}/500` || "0"}
        percentage={`${percentage}%`}
      />
      <StudentReport />
      <FeedBack />
    </div>
  );
};

export default AcademicPerformance;
