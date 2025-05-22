import Button from '@/components/button/Button'
import Link from 'next/link'
import React from 'react'

function SectionInfo({ isLoading }: { isLoading: boolean }) {
    if (isLoading) return (
        <section className='grid lg:grid-cols-2  gap-x-10 gap-y-4'>
            <div className='flex skeleton h-[80px]  rounded-[10px] p-5 items-center justify-between' />
            <div className='flex skeleton h-[80px]  rounded-[10px] p-5 items-center justify-between' />
        </section>
    )

    return (
        <section className='grid lg:grid-cols-2  gap-x-10 gap-y-4'>
            <div className='flex bg-blue-500  rounded-[10px] p-5 items-center justify-between'>
                <p className='text-xl'>Masa Aktif Habis</p>
                <Link href='/price'><Button className='bg-neutral-50 text-blue-500 '>Upgrade Akun Saya</Button></Link>
            </div>
            <div className='flex border-[1px] border-blue-500  rounded-[10px] p-5 items-center justify-between'>
                <p className='text-xl text-blue-500'>Lihat Video Tutorial</p>
                <Link href='/tutorial' target='_blank'><Button>Klik Disini</Button></Link>
            </div>
        </section>
    )
}

export default SectionInfo