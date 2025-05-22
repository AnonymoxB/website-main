'use client'
import { useWindowSize } from '@/app/utils/useWindowSize'
import { MD } from '@/const/dimensions';
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { ReactNode } from 'react';

function Slider({ children }: { children: ReactNode[] }) {

    const [width] = useWindowSize();
    if (width > MD) {
        return children
    }

    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
                clickable: true
            }}
            modules={[Pagination]}
            className="swiper"
        >
            {children.map((child, index) => (
                <SwiperSlide key={index+'slide'}>
                    {child}
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Slider