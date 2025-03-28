import { STUDENTS_LIST } from "@/utils/hepler";
import Icons from "@/utils/icons";
import Image from "next/image";
import React from "react";

const DashBoardData = () => {
  return (
    <div className="bg-light-gray flex w-full flex-col gap-[30px] p-[30px]">
      <div className="min-h-[227px] shadow-layer rounded-2xl bg-cover px-[55px] items-center justify-between flex bg-center bg-[url('/assets/images/dashboard-image-layer.webp')]">
        <div className="flex flex-col justify-center">
          <p className="text-xl leading-100 text-white/80 mb-1.5">
            September 6, 2023
          </p>
          <h3 className="text-custom-4xl leading-130 mb-2 font-semibold text-light-white">
            Welcome, Rajpal Singh!
          </h3>
          <p className="leading-160 text-white/80">
            Always stay updated in your Parent portal.
          </p>
        </div>
        <Image
          src={"/assets/images/dashboard-image.webp"}
          width={377}
          height={274}
          alt="dashboard-image"
          className=" 2xl:-translate-x-24"
        />
      </div>
      <h4 className="font-semibold text-custom-3xl  leading-130 text-dark-black">
        My Students
      </h4>
      <div className="w-full flex gap-6 max-lg:flex-wrap">
        {STUDENTS_LIST.map((item, index) => (
          <div
            className="max-w-[496px] hover:shadow-student transition-all duration-300 w-full border border-solid border-light-gray-blue p-5 items-center rounded-2xl flex gap-[30px]"
            key={index}
          >
            <Image
              src={item.image}
              width={226}
              height={218}
              alt="student-image"
            />
            <div className="flex flex-col gap-5">
              <div className="flex gap-3">
                <div className="bg-light-sky-blue flex justify-center items-center rounded-full size-12">
                  <Icons icon="studentIcon" />
                </div>
                <div className="flex gap-[3px] flex-col">
                  <p className="text-dark-black/70 text-sm">Student Name:</p>
                  <p className="text-dark-black font-medium">{item.name}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-light-sky-blue flex justify-center items-center rounded-full size-12">
                  <Icons icon="classIcon" />
                </div>
                <div className="flex gap-[3px] flex-col">
                  <p className="text-dark-black/70 text-sm">Class:</p>
                  <p className="text-dark-black font-medium">{item.class}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-light-sky-blue flex justify-center items-center rounded-full size-12">
                  <Icons icon="mobileIcon" />
                </div>
                <div className="flex gap-[3px] flex-col">
                  <p className="text-dark-black/70 text-sm">Phone No:</p>
                  <p className="text-dark-black font-medium">
                    +91 {item.number}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashBoardData;
