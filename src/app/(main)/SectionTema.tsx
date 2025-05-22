import Image from 'next/image'
import React from 'react'

function SectionTema() {
    return (
        <section className='container flex flex-wrap items-center justify-between gap-4 lg px-4 lg:px-20 py-6 md:py-10 lg:py-16'>
            <div className="flex flex-row gap-3 justify-center items-center overflow-hidden no-scrollbar max-w-[800px]">
                <Image
                    src='/assets/image/tema-1.png'
                    width={258}
                    height={606}
                    alt='tema-1'
                />
                <Image
                    src='/assets/image/tema-2.png'
                    width={258}
                    height={606}
                    alt='tema-2'
                />
                <Image
                    src='/assets/image/tema-3.png'
                    width={258}
                    height={606}
                    alt='tema-3'
                />
            </div>
            <div className='flex flex-col justify-center flex-1 min-w-[300px] gap-2'>
                <h2 className='bg-gradient-to-b bg-clip-text text-transparent from-gradient-blue-start to-gradient-blue-end text-xl md:text-3xl lg:text-3xl font-semibold'>
                    100+ Pilihan Tema Yang Beragam
                </h2>
                <p className='text-neutral-600 text-sm md:text-base'>Tidak perlu khawatir dalam mendesain undangan karena kami menawarkan berbagai macam pilihan tema gratis dan premium untuk memenuhi preferensi Anda</p>
            </div>
        </section>
    )
}

export default SectionTema