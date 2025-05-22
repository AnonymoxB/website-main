import { InvitationFullType, InvitationType } from '@/type/invitation'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CardUndanganDashboard({ invitation }: { invitation: InvitationFullType }) {
    return (
        <Link href={`/app/invitation-list/${invitation.uuid}`} className='bg-neutral-100 border-neutral-300 border-[1px] rounded-[10px] py-2 px-[14px] flex items-center gap-x-7 hover:cursor-pointer'>
            <div className='p-2 bg-neutral-50 w-[104px] h-[104px] rounded-xl border-[1px] border-neutral-200'>
                <Image
                    src={invitation.template.image}
                    alt='undangan'
                    width={100}
                    height={100}
                    className='h-full w-full object-cover rounded-[10px]'
                />
            </div>
            <div className='flex flex-col gap-2 flex-1'>
                <h6 className='text-blue-500 font-bold text-xl'>{invitation.title}</h6>
                <p className='text-sm text-neutral-700'>Rabu, 20 September 2023</p>
                <p className='text-sm text-neutral-700'>{invitation.user_id}</p>
            </div>
            <div className='flex flex-col justify-between gap-y-7 items-end'>
                <button>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 13.0602C12.5523 13.0602 13 12.6124 13 12.0602C13 11.5079 12.5523 11.0602 12 11.0602C11.4477 11.0602 11 11.5079 11 12.0602C11 12.6124 11.4477 13.0602 12 13.0602Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19 13.0602C19.5523 13.0602 20 12.6124 20 12.0602C20 11.5079 19.5523 11.0602 19 11.0602C18.4477 11.0602 18 11.5079 18 12.0602C18 12.6124 18.4477 13.0602 19 13.0602Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 13.0602C5.55228 13.0602 6 12.6124 6 12.0602C6 11.5079 5.55228 11.0602 5 11.0602C4.44772 11.0602 4 11.5079 4 12.0602C4 12.6124 4.44772 13.0602 5 13.0602Z" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button className='px-4 py-0.5 bg-[#B91C1C] hover:bg-red-900 rounded-md'>
                    {invitation.status}
                </button>
            </div>
        </Link>
    )
}

export default CardUndanganDashboard