import { STUDENTS_LIST } from "@/utils/hepler";
import Icons from "@/utils/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const DashBoardData = () => {
  const router = useRouter();
  return (
    <div className="bg-light-gray flex w-full flex-col max-md:gap-5 gap-[30px] py-6 px-4 sm:p-[30px]">
      <div className="relative md:min-h-[277px] max-md:py-8 overflow-hidden shadow-layer md:rounded-2xl rounded-lg bg-cover px-[55px] max-lg:px-5 max-2xl:px-10 items-center justify-between flex bg-center bg-[url('/assets/images/dashboard-image-layer.webp')]">
        <div className="flex flex-col justify-center">
          <p className="md:text-xl leading-100 text-white/80 mb-1.5">
            September 6, 2023
          </p>
          <h3 className="text-custom-4xl max-2xl:text-4xl max-xl:text-3xl max-lg:text-2xl max-md:text-xl sm:whitespace-nowrap leading-130 mb-2 font-semibold text-light-white">
            Welcome, Rajpal Singh!
          </h3>
          <p className="leading-160 text-white/80">
            Always stay updated in your Parent portal.
          </p>
        </div>
        <div className="h-full items-end">
          <Image
            src={"/assets/images/dashboard-image.webp"}
            width={476}
            height={274}
            alt="dashboard-image"
            className="absolute bottom-0 right-0 2xl:right-[130px] max-xl:max-w-[450px] max-[1160px]:!max-w-[350px] max-lg:!max-w-[400px] max-md:hidden pointer-events-none"
          />
        </div>
      </div>
      <h4 className="font-semibold text-custom-3xl  leading-130 text-dark-black">
        My Students
      </h4>
      <div className="w-full grid max-sm:grid-cols-1 max-[1884px]:grid-cols-2 grid-cols-3 gap-[23px]">
        {STUDENTS_LIST.map((item, index) => (
          <div
            onClick={() =>
              router.push(
                `/${item.name
                  .toLocaleLowerCase()
                  .replaceAll(" ", "-")}?tab=academic-performance`
              )
            }
            className="max-[1440px]:flex-col box-border p-3 md:p-5 min-[1440px]:items-center md:rounded-2xl rounded-lg hover:shadow-student transition-all duration-300 w-full border border-solid border-light-gray-blue flex gap-[30px]"
            key={index}
          >
            <Image
              src={item.image}
              width={226}
              height={218}
              alt="student-image"
              className="min-[1440px]:max-w-[226px] w-full h-[218px] object-cover md:rounded-2xl rounded-lg"
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
                    {" "}
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
