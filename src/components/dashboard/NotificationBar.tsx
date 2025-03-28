"use client"
import React, { useState } from 'react';
import { NOTIFICATIONS_LIST } from '@/utils/hepler';
import Icons from '@/utils/icons';
import CustomButton from '../common/CustomButton';

const NotificationBar = () => {
    const [notifications, setNotifications] = useState(NOTIFICATIONS_LIST);

    const handleClearNotification = (index: number) => {
        const clearNotification = notifications.filter((_, i) => i !== index);
        setNotifications(clearNotification);
    };

    return (
        <div className='bg-light-gray'>
            <div className="container mx-auto max-w-[1535px] sm:p-[30px] py-6 px-4 ">
                <div className="flex items-center justify-between pb-[30px] ">
                    <CustomButton customOnClick={() => setNotifications([])} iconOne='deleteIcon' buttonText='Clear All' />
                    <CustomButton buttonClass={'hover:bg-transparent hover:!text-blue'} buttonText='Today' iconTwo={'dropDownIcon'} />
                </div>
                <div className={`flex flex-col border border-dark-blue/10 rounded-2xl overflow-hidden ${notifications.length === 0 ? 'border-0' : ''}`}>
                    {notifications.map((item, index) => (
                        <div key={index} className={`flex items-center justify-between py-2 sm:py-4 px-3 sm:px-6 gap-3 border-b hover:bg-light-blue transition-all duration-300 border-dark-blue/10 ${index === notifications.length - 1 ? 'border-b-0' : ''} `}>
                            <div>
                                <p className='sm:text-lg  font-semibold leading-160 text-dark-black sm:pb-1'>{item.title} </p>
                                <p className='sm:text-sm text-xs leading-160 text-dark-black'>{item.description}</p>
                            </div>
                            <CustomButton customOnClick={() => handleClearNotification(index)} iconOne='deleteIcon' buttonTextTwo='Clear' buttonClass='border-0 text-dark-black ' iconOneClass={'stroke-dark-black'} buttonClassTwo={'max-sm:hidden'} />
                        </div>
                    ))}
                </div>
                {notifications.length === 0 && (
                    <div className="flex flex-col items-center justify-center gap-2 py-10">
                        <p className='text-2xl font-semibold leading-160 text-dark-black'>No Notifications</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default NotificationBar;
