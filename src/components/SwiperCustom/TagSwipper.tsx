'use client'
import { useCallback, useRef } from 'react'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';


import 'swiper/css';
import 'swiper/css/pagination';
import './TagSwipper.css';
import Badge from '../badge/Badge';
import { ThemeCategoryType } from '@/type/theme';
import { usePathname, useSearchParams } from 'next/navigation';


function TagSwipper({ categories, categorySelect }: { categories: ThemeCategoryType[], categorySelect?: string }) {
    const searchParams = useSearchParams()
    const pathname = usePathname();
    const swiperRef = useRef<SwiperType>();


    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams)

            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )


    return (
        <div className='flex w-full gap-2 items-center' >
            <button className='swiper-button-prev-custom' onClick={() => swiperRef.current?.slidePrev()}></button>
            <Swiper
                modules={[Navigation, Pagination]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                slidesPerView={1}
                centeredSlides={true}
                spaceBetween={4}
                breakpoints={{
                    505: {
                        slidesPerView: 2,
                        centeredSlides: false
                    },
                    768: {
                        slidesPerView: 3,
                        centeredSlides: false
                    }
                }}
            >
                <SwiperSlide>
                    <Badge isSelected={categorySelect === undefined} href={pathname}>All</Badge>
                </SwiperSlide>
                {categories.map((category) => (
                    <SwiperSlide key={category.id}>
                        <Badge isSelected={categorySelect === category.slug} href={`${pathname}?${createQueryString('category', category.slug)}`}>{category.title}</Badge>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button className='swiper-button-next-custom' onClick={() => swiperRef.current?.slideNext()}></button>
        </div>
    )
}

export default TagSwipper