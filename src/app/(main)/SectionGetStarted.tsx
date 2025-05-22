import Button from '@/components/button/Button'
import Image from 'next/image'
import React from 'react'

function SectionGetStarted() {
    return (
        <section className='w-full container px-4 lg:px-20 py-6 md:py-10 lg:py-16'>
            <div className='flex flex-col md:flex-row w-full rounded-3xl bg-gradient-to-r from-gradient-blue-start to-gradient-blue-end items-center px-6 pt-6 md:px-10 md:gap-5 lg:gap-10  mx-auto '>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-neutral-50 text-3xl font-semibold md:text-4xl lg:text-6xl'>Mulai 0 Rupiah</h1>
                    <p className='text-blue-100 text-sm md:text-base lg:text-lg'>Buat undangan digitalmu mulai dari 0 Rupiah saja. Ciptakan undangan dan bagikan momen anda dengan lebih mudah</p>
                    <div className='flex gap-2'>
                        <Button type='Primary' size='small' backgroundColor='bg-blue-50 text-blue-500'>Coba Gratis</Button>
                        <Button type='Secondary' size='small' backgroundColor=''>Lihat Paket Lainnya</Button>
                    </div>
                </div>
                <div className='max-w-[426]'>
                    <Image
                        src='/assets/image/mockup-phone-register.png'
                        alt='mockup'
                        width={426}
                        height={426}
                    />
                </div>
            </div >
        </section>
    )
}

export default SectionGetStarted