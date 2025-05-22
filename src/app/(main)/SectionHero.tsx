import Button from '@/components/button/Button'
import Image from 'next/image'
import React from 'react'

function SectionHero() {
    return (
        <section className="flex flex-col items-center justify-between md:flex-row container px-4 lg:px-20 py-6">
            <Image
                src='/assets/image/hero-image.png'
                alt='hero'
                width={328}
                height={538}
                className='order-1 md:order-2 w-full p-4 max-w-[500px]'
            />
            <div className='flex flex-col gap-2 order-2 md:order-1'>
                <h1 className='bg-gradient-to-b bg-clip-text text-transparent from-gradient-blue-start to-gradient-blue-end text-xl md:text-3xl lg:text-6xl font-semibold w-[290px] md:w-full py-2'>
                    Buat Undangan Digital  Lebih Mudah Dengan VOOW
                </h1>
                <p className='text-sm md:text-md lg:text-lg text-neutral-600'>
                    Temukan cara modern untuk mengundang teman-teman ke acara anda.
                    Buat, sesuaikan, dan bagikan undangan anda secara online untuk pengalaman undangan yang praktis dan berkesan
                </p>
                <div>
                    <Button>Coba Sekarang</Button>
                </div>
            </div>
        </section>
    )
}

export default SectionHero