import { STUDENTS_LIST, STUDENTS_PERFORMANCE_LIST } from '@/utils/hepler'
import Icons from '@/utils/icons'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'

const StudentData = () => {
    const params = useParams();
    const { student } = params;
    const combinedList = [...STUDENTS_LIST];
    const studentList = combinedList.find((item) => {
        if (typeof student === "string") {
            const formattedStudent = student.toLocaleLowerCase();
            const formattedStudentName = item.name.toLocaleLowerCase().replaceAll(" ", "-");
            return formattedStudent === formattedStudentName;
        }
        return false;
    });
    console.log(studentList, "studentList");

    return (
        <div className="w-full py-6 md:py-[30px] bg-light-gray">
            <div className="pb-[30px] grid sm:grid-cols-2 xl:grid-cols-3 min-[1439px]:!grid-cols-4 gap-4 md:gap-[30px]">
                {STUDENTS_PERFORMANCE_LIST.map((item, index) => (
                    <div key={index} className="flex items-center justify-between transition-all duration-300 hover:shadow-button p-3 lg:p-[18px] border rounded-xl border-light-blue-two bg-light-white">
                        <div className="flex flex-col">
                            <p className='2xl:text-[32px] md:text-2xl text-dark-blue pb-[3px] leading-160 font-semibold'>{index === 0 ? "485/500" : index === 1 ? "220/320" : index === 2 ? "A+" : "91%"} </p>
                            <p className='text-dark-black leading-160 max-md:text-sm'>{item.title} </p>
                        </div> 
                        <div className="bg-light-blue rounded-full size-[50px] md:size-[60px] lg:size-[75px] flex items-center justify-center "><Icons icon={item.icon} className="max-lg:size-[30px]" /> </div>
                    </div>
                ))}
            </div>
            {studentList && (
                <div className="grid max-[1439px]:grid-cols-2  grid-cols-3 border-light-sky-blue border rounded-2xl px-2 py-6 md:p-[30px] min-[1535px]:items-center">
                    <div className="col-span-2 md:col-span-1">
                        <Image className='max-md:max-w-[350px] max-md:w-full' src={studentList.image} width={483} height={498} alt={studentList.name} />
                    </div>
                    <div className="col-span-2 flex flex-col w-full min-[1439px]:pl-[30px] max-[1439px]:pt-[30px]">
                        <div className="flex gap-3 items-center">
                            <p className='text-dark-black text-2xl  lg:text-custom-3xl font-semibold leading-150 '>{studentList.name}</p>
                            <div className="border border-dark-blue rounded-full flex items-center justify-center h-[30px] w-[90px] md:w-[107px] md:h-[38px]">
                                <p className='text-dark-blue leading-160  max-md:text-sm'>Class{studentList.class}</p>
                            </div>
                        </div>
                        <div className="pt-[30px] w-full">
                            <div className="grid max-sm:grid-cols-1 max-[1890px]:grid-cols-2 grid-cols-3 gap-y-4 md:gap-y-12">
                                <div className="flex gap-[18px] items-center ">
                                    <div className="size-[60px] 2xl:size-[86px] bg-light-sky-blue rounded-full flex items-center justify-center">
                                        <Icons icon='fatherIcon' className="max-2xl:w-[40px]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className='text-sm leading-160 text-dark-black/70 '>Father Name:</p>
                                        <p className='text-dark-black leading-160 pt-[3px]'>{studentList.fatherName}</p>
                                    </div>
                                </div>
                                <div className="flex gap-[18px] items-center ">
                                    <div className="size-[60px] 2xl:size-[86px] bg-light-sky-blue rounded-full flex items-center justify-center">
                                        <Icons icon='motherIcon' className="max-2xl:w-[30px]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className='text-sm leading-160 text-dark-black/70 '>Mother Name:</p>
                                        <p className='text-dark-black leading-160 pt-[3px]'>{studentList.motherName} </p>
                                    </div>
                                </div>
                                <div className="flex gap-[18px] items-center ">
                                    <div className="size-[60px] 2xl:size-[86px] bg-light-sky-blue rounded-full flex items-center justify-center">
                                        <Icons icon='birthIcon' className="max-2xl:w-[30px]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className='text-sm leading-160 text-dark-black/70 '>Date of Birth:</p>
                                        <p className='text-dark-black leading-160 pt-[3px]'>{studentList.birthDate} </p>
                                    </div>
                                </div>
                                <div className="flex gap-[18px] items-center ">
                                    <div className="size-[60px] 2xl:size-[86px] bg-light-sky-blue rounded-full flex items-center justify-center">
                                        <Icons icon='bigMobileIcon' className="max-2xl:w-[30px]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className='text-sm leading-160 text-dark-black/70 '>Phone No:</p>
                                        <p className='text-dark-black leading-160 pt-[3px]'>{studentList.number} </p>
                                    </div>
                                </div>
                                <div className="flex gap-[18px] items-center ">
                                    <div className="size-[60px] 2xl:size-[86px]  bg-light-sky-blue rounded-full flex items-center justify-center">
                                        <Icons icon='mailIcon' className="max-2xl:w-[30px]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className='text-sm leading-160 text-dark-black/70 '>Email:</p>
                                        <p className='text-dark-black leading-160 pt-[3px]'>{studentList.email}</p>
                                    </div>
                                </div>
                                <div className="flex gap-[18px] items-center ">
                                    <div className="size-[60px] 2xl:size-[86px] bg-light-sky-blue rounded-full flex items-center justify-center">
                                        <Icons icon='addressIcon' className="max-2xl:w-[30px]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className='text-sm leading-160 text-dark-black/70 '>Address:</p>
                                        <p className='text-dark-black leading-160 pt-[3px] max-w-[199px]'>{studentList.adderss} </p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:pt-10 pt-7">
                                <p className='md:text-xl text-lg font-medium leading-160 text-dark-black '>Subjects:</p>
                                <div className="flex gap-3 flex-wrap">
                                    {studentList.subject.map((item: any, index: number) => (
                                        <div key={index} className={`border border-dark-blue bg-dark-blue/10 rounded-full flex items-center justify-center md:w-[97px] md:h-[38px] w-[100px] h-[30px]`}>
                                            <p className='text-dark-blue/70 leading-160 max-md:text-sm'>{item}</p>
                                        </div>
                                    ))}
                                    <p className='leading-160 max-md:text-sm text-dark-blue border border-dark-blue rounded-full flex items-center justify-center md:w-[179px] md:h-[38px] h-[30px] w-[160px] tracking-[-0.5px]'>See Daily Schedule</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default StudentData
