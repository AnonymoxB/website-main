import React from 'react'
import Sidebar from '@/components/Sidebar'
import NavBottom from '@/components/NavBottom'

function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex w-full min-h-screen container-xl top-0 left-0 mx-auto'>
            <NavBottom/>
            <Sidebar />
            <div className='h-screen overflow-y-scroll w-full bg-neutral-50 px-4 pb-12 md:pb-0'>
                {children}
            </div>
        </div>
    )
}

export default layout