'use client'
import CardProductPrice from '@/components/card/CardProductPrice'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';
import { PriceType, slugPriceType } from '@/type/price';
import { useState } from 'react';

function SectionProductPrice({ prices }: { prices: PriceType[] }) {
    const [selectCard, setSelectCard] = useState<slugPriceType>('gold')
    return (
        <section className='flex flex-col  w-full items-center gap-6 md:mt-[60px] mb-5'>
            <div className="flex flex-col items-center md:flex-row px-4">
                {/* text gradient top to bottom font 20px bold*/}
                <header className='flex flex-col items-center text-center gap-2 linehight auto'>
                    <h2 className='bg-gradient-to-b bg-clip-text text-transparent from-gradient-blue-start to-gradient-blue-end text-xl md:text-3xl lg:text-5xl font-semibold py-2 max-w-[833px]'>Pilih Harga yang Cocok <br /> Sesuaikan dengan Kebutuhan Anda</h2>
                    <p className='text-mob-paragraft-reguler md:text-lg text-neutral-600 max-w-[734px]'>Kami menawarkan berbagai opsi paket dengan harga yang transparan, memastikan Anda mendapatkan nilai terbaik untuk layanan berkualitas kami</p>
                </header>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true
                }}
                breakpoints={{
                    620: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination]}
                className="swiper md:mt-[60px]"
            >
                {prices.map((price) => (
                    <SwiperSlide key={price.id}>
                        <CardProductPrice {...price} isActive={selectCard === price.slug} onClick={() => setSelectCard(price.slug)} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default SectionProductPrice