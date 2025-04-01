import React, { useEffect, useState } from "react";
import StudentReport from "./academic-performance/StudentReport";
import StudentData from "./academic-performance/StudentData";
import FeedBack from "./academic-performance/TeacherFeedback";
import { useParams, useRouter } from "next/navigation";
import { STUDENTS_LIST } from "@/utils/hepler";

const AcademicPerformance = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode) {
      try {
        return JSON.parse(savedDarkMode);
      } catch (error) {
        console.error("Error parsing darkMode from localStorage", error);
        return false;
      }
    }
    return false;
  });

  const router = useRouter();
  const params = useParams();
  const { student } = params;

  useEffect(() => {
    if (!student) {
      router.push("/dashboard");
      alert("Please select a student");
    }
  }, [student, router]);

  useEffect(() => {
    const handleDarkModeChange = () => {
      const updatedDarkMode = localStorage.getItem("darkMode");
      if (updatedDarkMode !== null) {
        try {
          setDarkTheme(JSON.parse(updatedDarkMode));
        } catch (error) {
          console.error("Error parsing darkMode from localStorage", error);
        }
      }
    };

    handleDarkModeChange();
    window.addEventListener("storage", handleDarkModeChange);

    return () => {
      window.removeEventListener("storage", handleDarkModeChange);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkTheme));
  }, [darkTheme]);

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
        darkTheme ? "bg-dark-black" : ""
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
