import React from 'react'


interface CardInfoDashboardProps {
    icon: React.ReactNode
    value: string
    title: string
}

function CardInfoDashboard({ icon, value, title }: CardInfoDashboardProps) {
    return (
        <div className='cols-span-1 p-[21px] bg-neutral-100 rounded-md flex gap-[25px]'>
            <div className='p-4 rounded-xl bg-blue-500 max-w-[64px] max-h-[64px]'>
                {icon}
            </div>
            <div className='flex-1'>
                <h5 className='text-neutral-900 font-bold text-2xl'>{value}</h5>
                <p className='text-neutral-600'>{title}</p>
            </div>
        </div>
    )
}

export default CardInfoDashboard