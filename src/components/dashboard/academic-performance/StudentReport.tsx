import { STUDENTS_LIST } from "@/utils/hepler";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import AttendanceData from "./AttendanceData";

const StudentReport = () => {
  const [term, setTerm] = useState("1st Term Exam Score");
  const params = useParams();
  const { student } = params;

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

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    if (selectedOption === "1st") {
      setTerm("1st Term Exam Score");
    } else if (selectedOption === "2nd") {
      setTerm("2nd Term Exam Score");
    }
  };

  return (
    <div className="grid grid-cols-2 gap-[30px] max-[1870px]:grid-cols-1">
      <div className="flex border border-solid border-light-blue-two rounded-2xl flex-col">
        <div className="flex w-full items-center py-6 px-5 justify-between">
          <p className="text-2xl max-sm:hidden max-xl:text-text-xl max-lg:text-lg">
            {term}
          </p>
          <select
            onChange={handleChange}
            className="py-[13px] pl-[23px] cursor-pointer max-xl:py-2.5 max-xl:pl-4 max-xl:pr-9 pr-[49px] text-blue bg-[center_right_28px] bg-no-repeat bg-[url('/assets/images/drop-down-icon.webp')] outline-none appearance-none rounded-[47px] border border-blue"
          >
            <option value="1st">1st Term Exam Result </option>
            <option value="2nd">2nd Term Exam Result </option>
          </select>
        </div>
        <div className="w-full overflow-x-auto">
          <table className="min-w-[753px] w-full">
            <tbody>
              <tr className="bg-dark-blue">
                <th className="py-[21px] pl-6 text-left text-white leading-100 font-semibold">
                  Exam
                </th>
                <th className="py-[21px] pl-6 text-left text-white leading-100 font-semibold">
                  Total Marks
                </th>
                <th className="py-[21px] pl-6 text-left text-white leading-100 font-semibold">
                  Marks
                </th>
                <th className="py-[21px] pl-6 text-left text-white leading-100 font-semibold">
                  Status
                </th>
                <th className="py-[21px] pl-6 text-left text-white leading-100 font-semibold">
                  Grade
                </th>
              </tr>
              {markList?.map((item, index) => (
                <tr
                  className={`border-b border-solid ${
                    markList.length - 1 === index
                      ? "border-transparent"
                      : "border-black/10"
                  }`}
                  key={index}
                >
                  <td className="py-[23px] leading-160 !text-dark-black pl-6 font-semibold">
                    {item.subject}
                  </td>
                  <td className="pl-6 text-gray">
                    {index === 4 ? 60 : index === 2 ? 60 : 100}
                  </td>
                  <td className="pl-6 text-gray">{item.marks}</td>
                  <td
                    className={`pl-6 ${
                      item.marks > 33 ? "text-green" : "text-red"
                    }`}
                  >
                    {item.marks > 33 ? "Pass" : "Fail"}
                  </td>
                  <td className="leading-160 text-dark-blue pl-6">
                    {item.grade}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full">
        <AttendanceData />
      </div>
    </div>
  );
};

export default StudentReport;
