import { STUDENTS_LIST, STUDENTS_PERFORMANCE_LIST } from '@/utils/hepler'
import Icons from '@/utils/icons'
import Image from 'next/image'
import React from 'react'

const StudentData = () => {
    return (
        <div className="w-full p-[30px] ">
            <div className="pb-[30px] grid sm:grid-cols-2 xl:grid-cols-3 min-[1439px]:!grid-cols-4 gap-[30px]">
                {STUDENTS_PERFORMANCE_LIST.map((item, index) => (
                    <div key={index} className="flex items-center justify-between transition-all duration-300 hover:shadow-button p-[18px] border rounded-xl border-light-sky-blue ">
                        <div className="flex flex-col">
                            <p className='2xl:text-[32px] md:text-2xl text-dark-blue pb-[3px] leading-160 font-semibold'>{index === 0 ? "485/500" : index === 1 ? "220/320" : index === 2 ? "A+" : "91%"} </p>
                            <p className='text-dark-black leading-160 '>{item.title} </p>
                        </div>
                        <div className="bg-light-sky-blue rounded-full size-[75px] flex items-center justify-center "><Icons icon={item.icon} /> </div>
                    </div>
                ))}
            </div>
            <div className="border-light-sky-blue border rounded-2xl p-[30px] flex items-center">
                <Image height={498} width={483} src={'/assets/images/rohan-duhan.webp'} alt='rohan-duhan' />
                {STUDENTS_LIST.map((item, index) => (
                    <div key={index} className="flex flex-col">
                        <div className="flex gap-3">
                            <p> </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StudentData
