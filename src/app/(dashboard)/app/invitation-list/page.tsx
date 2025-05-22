import HeaderDashboard from '@/components/header/HeaderDashboard'
import React from 'react'
import SectionListInvitation from './SectionListInvitation'

async function page() {
    
    return (
        <main className='bg-neutral-50 flex-1 min-h-screen px-4'>
            <HeaderDashboard title='Undangan Saya' />
            <SectionListInvitation />
        </main>
    )
}

export default page