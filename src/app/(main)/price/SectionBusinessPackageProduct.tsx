'use client'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';

function SectionBusinessPackageProduct() {

    return (
        <section className='flex flex-col lg:flex-row w-full items-center gap-6 mb-5'>
            <div className='flex-1'>
                <h2 className=' bg-gradient-to-b bg-clip-text text-transparent from-gradient-blue-start to-gradient-blue-end py-2 font-bold text-xl md:text-2xl lg:text-4xl'>
                    Paket Bisnis
                </h2>
                <p className='text-neutral-600 text-sm md:text-md lg:text-lg'>Paket Bisnis berkualitas tinggi dengan fitur yang lebih lengkap dan dikhususkan untuk anda yang ingin memulai bisnis undangan online ataupun kepentingan komersil. Tingkatkan produktivitas dan kinerja bisnis anda dengan opsi yang dapat disesuaikan</p>
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
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    1300: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination]}
                className="swiper flex-1"
            >
                <SwiperSlide>
                    {/* <CardProductPrice /> */}
                </SwiperSlide>
                <SwiperSlide>
                    {/* <CardProductPrice /> */}
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default SectionBusinessPackageProduct