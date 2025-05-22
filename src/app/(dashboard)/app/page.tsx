'use client'

import React from 'react'
import CardInfoDashboard from '@/components/card/CardInfoDashboard'
import HeaderDashboard from '@/components/header/HeaderDashboard'
import SectionUserInfo from './SectionUserInfo'
import Charts from './Chart'


function page() {
    return (
        <main className='bg-neutral-50 flex-1 min-h-screen px-4'>
            <HeaderDashboard title='Dashboard' />
            {/* content */}
            <section className='flex flex-col gap-y-[20px] pb-12 lg:pb-[30px]'>
                {/* bg gradient  */}
                <SectionUserInfo />
                <div className='grid lg:grid-cols-3 gap-x-[71px] gap-y-4'>
                    <CardInfoDashboard
                        icon={
                            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.8333 5.33334H10.8333C9.36056 5.33334 8.16666 6.52725 8.16666 8.00001V20C8.16666 21.4728 9.36056 22.6667 10.8333 22.6667H26.8333C28.3061 22.6667 29.5 21.4728 29.5 20V8.00001C29.5 6.52725 28.3061 5.33334 26.8333 5.33334Z" stroke="#F9FAFB" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M29.5 9.33334L20.0333 14.3733C19.2733 14.7733 18.3933 14.7733 17.6333 14.3733L8.16666 9.33334" stroke="#F9FAFB" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.83331 10.6667V25.3333C2.83331 26.8 4.03331 28 5.49998 28H24.1666" stroke="#F9FAFB" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        }
                        value='2'
                        title='Undangan Dibuat'
                    />
                    <CardInfoDashboard
                        icon={
                            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.8333 14.6667V16C29.8199 18.6911 28.9924 21.3151 27.4596 23.5271C25.9269 25.7391 23.7607 27.4356 21.2458 28.3934C18.7309 29.3512 15.985 29.5256 13.3692 28.8937C10.7533 28.2618 8.38986 26.853 6.58959 24.8527C4.78932 22.8524 3.63647 20.3542 3.28261 17.6864C2.92875 15.0187 3.39044 12.3063 4.60698 9.9058C5.82351 7.50534 7.73796 5.52918 10.0986 4.23713C12.4593 2.94508 15.1557 2.3976 17.8333 2.66668" stroke="#F9FAFB" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.1667 18.6667C11.1667 18.6667 13.1667 21.3333 16.5 21.3333C19.8333 21.3333 21.8333 18.6667 21.8333 18.6667" stroke="#F9FAFB" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12.5 12H12.5133" stroke="#F9FAFB" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20.5 12H20.5133" stroke="#F9FAFB" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21.8333 6.66667H29.8333" stroke="#F9FAFB" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M25.8333 2.66667V10.6667" stroke="#F9FAFB" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        }
                        value='2'
                        title='Tamu Undangan'
                    />
                    <CardInfoDashboard
                        icon={
                            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.8333 15.3334C28.8379 17.0932 28.4267 18.8292 27.6333 20.4C26.6925 22.2824 25.2463 23.8656 23.4566 24.9724C21.6668 26.0792 19.6043 26.6659 17.5 26.6667C15.7401 26.6713 14.0041 26.2601 12.4333 25.4667L4.83328 28L7.36662 20.4C6.57319 18.8292 6.16203 17.0932 6.16662 15.3334C6.16743 13.229 6.7541 11.1665 7.86091 9.37677C8.96772 7.58704 10.551 6.14079 12.4333 5.20004C14.0041 4.40661 15.7401 3.99545 17.5 4.00004H18.1666C20.9457 4.15336 23.5707 5.32639 25.5388 7.29452C27.5069 9.26265 28.68 11.8876 28.8333 14.6667V15.3334Z" stroke="#F9FAFB" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        }
                        value='2'
                        title="Ucapan & Do'a"
                    />
                </div>
                <div className='p-[20px] bg-neutral-100 rounded-md'>
                    <h2 className='text-neutral-900 font-bold lg:text-3xl text-xl text-center font-Plus-Jakarta-Sans'>Invitation By Category</h2>
                    <div className='pt-[41px] w-full lg:px-28 md:px-8 '>
                        <Charts/>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default page