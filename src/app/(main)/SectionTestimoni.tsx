'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import CardTestimonial from '@/components/card/CardTestimonial';

function SectionTestimoni() {
    return (
        <div className='bg-slate-200 w-full flex justify-center'>
            <section className='container flex flex-col w-full gap-4 md:gap-8 px-4 lg:px-20 py-6 md:py-10 lg:py-16'>
                <div className='flex flex-col gap-2'>
                    <h1 className='flex flex-col text-xl md:text-3xl md:text-center font-semibold text-blue-500 gap-2'>Testimonial</h1>
                    <p className='text-neutral-600 text-sm md:text-base md:text-center'>Beberapa testimoni yang membagikan cerita sukses dan kepuasan mereka dengan VOOW</p>
                </div>
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={10}
                    pagination={{
                        clickable: true
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination, Navigation]}
                    className="swiper h-20"
                >
                    <SwiperSlide>
                        <CardTestimonial />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardTestimonial />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardTestimonial />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardTestimonial />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardTestimonial />
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>
    )
}

export default SectionTestimoni