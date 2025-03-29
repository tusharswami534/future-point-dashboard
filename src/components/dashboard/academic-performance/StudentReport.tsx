import { STUDENTS_LIST } from "@/utils/hepler";
import { useParams } from "next/navigation";
import { title } from "process";
import React from "react";

const StudentReport = () => {
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
  console.log(markList, "marList");

  return (
    <div className="grid grid-cols-2 pt-[30px] px-[30px]">
      <div className="flex border border-solid border-light-blue-two rounded-2xl flex-col">
        <div className="flex w-full items-center py-6 px-5 justify-between">
          <p className="text-2xl">1st term Exam Score</p>
          <select className="py-[13px] pl-[23px] pr-[49px] text-blue bg-[center_right_28px] bg-no-repeat bg-[url('/assets/images/drop-down-icon.webp')] outline-none appearance-none rounded-[47px] border border-blue">
            <option>1st Term Exam Result </option>
            <option>2nd Term Exam Result </option>
          </select>
        </div>
        <table>
          <tbody>
            <tr className="bg-dark-blue">
              <th className="py-[21px] text-white leading-100 font-semibold">
                Exam
              </th>
              <th className="py-[21px] text-white leading-100 font-semibold">
                Total Marks
              </th>
              <th className="py-[21px] text-white leading-100 font-semibold">
                Marks
              </th>
              <th className="py-[21px] text-white leading-100 font-semibold">
                Status
              </th>
              <th className="py-[21px] text-white leading-100 font-semibold">
                Grade
              </th>
            </tr>
            {markList?.map((item, index) => (
              <tr key={index}>
                <td className="py-[21px] !text-black pl-6 leading-100 font-semibold">
                  {item.subject}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full"></div>
    </div>
  );
};

export default StudentReport;
