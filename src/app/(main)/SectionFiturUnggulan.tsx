'use client'
import CardFiturUnggulan from '@/components/card/CardFiturUnggulan'
import { BookIcon, BookSaveIcon, CustomGuestIcon, FormGuestIcon, GaleryIcon, GiftIcon, ImportGuestIcon, InfoIcon, MusicIcon, PartyIcon, QrGuestIcon, StreamingIcon } from '../../../public/assets/iconSVG'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { useWindowSize } from '../utils/useWindowSize'
import { MD } from '@/const/dimensions'





function SectionFiturUnggulan() {
    const [width] = useWindowSize();

    return (
        <section className='container flex flex-col w-full gap-4 md:gap-6 px-4 overflow-hidden lg:px-20 py-6 md:py-10 lg:py-16'>
            <div className='bg-gradient-to-b bg-clip-text text-transparent from-gradient-blue-start to-gradient-blue-end text-xl md:text-3xl lg:text-3xl font-semibold'>
                Fitur Unggulan Kami
            </div>
            <p className='text-neutral-600 text-sm md:text-base'>Tidak perlu khawatir dalam mendesain undangan karena kami menawarkan berbagai macam pilihan tema gratis dan premium untuk memenuhi preferensi Anda</p>
            {width > MD ?
                <div className='flex flex-row md:flex-col gap-4'>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4  w-full">
                        <CardFiturUnggulan
                            icon={<BookIcon />}
                            bgIcon='bg-[#FCE7F3]'
                            title='Atur Informasi Event'
                            description='Atur detail acara seperti tanggal, waktu, lokasi, dan deskripsi acara dengan mudah'
                        />
                        <CardFiturUnggulan
                            icon={<GaleryIcon />}
                            bgIcon='bg-[#FAE8FF]'
                            title='Atur Informasi Event'
                            description='Atur detail acara seperti tanggal, waktu, lokasi, dan deskripsi acara dengan mudah'
                        />
                        <CardFiturUnggulan
                            icon={<MusicIcon />}
                            bgIcon='bg-[#F3E8FF]'
                            title='Atur Informasi Event'
                            description='Atur detail acara seperti tanggal, waktu, lokasi, dan deskripsi acara dengan mudah'
                        />
                        <CardFiturUnggulan
                            icon={<PartyIcon />}
                            bgIcon='bg-[#EDE9FE]'
                            title='Atur Informasi Event'
                            description='Atur detail acara seperti tanggal, waktu, lokasi, dan deskripsi acara dengan mudah'
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4  w-full">
                        <CardFiturUnggulan
                            icon={<CustomGuestIcon />}
                            bgIcon='bg-[#CFFAFE]'
                            title='Custom Guest Name'
                            description='Personalisasi undangan dengan nama tamu yang diundang'
                        />
                        <CardFiturUnggulan
                            icon={<ImportGuestIcon />}
                            bgIcon='bg-[#E0F2FE]'
                            title='Import Guest'
                            description='Mudahnya mengimpor daftar tamu memudahkan anda untuk mempersonalisasi undangan'
                        />
                        <CardFiturUnggulan
                            icon={<FormGuestIcon />}
                            bgIcon='bg-[#DBEAFE]'
                            title='Form Guest'
                            description='Persiapkan daftar tamu dengan formulir yang dapat disesuaikan'
                        />
                        <CardFiturUnggulan
                            icon={<QrGuestIcon />}
                            bgIcon='bg-[#E0E7FF]'
                            title='QR Guest'
                            description='Atur detail acara seperti tanggal, waktu, lokasi, dan deskripsi acara dengan mudah'
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4  w-full">
                        <CardFiturUnggulan
                            icon={<BookSaveIcon />}
                            bgIcon='bg-[#ECFCCB]'
                            title='RSVP'
                            description='Tetap terorganisir dengan mengetahui siapa yang datang dengan mudah melalui fitur RSVP'
                        />
                        <CardFiturUnggulan
                            icon={<GiftIcon />}
                            bgIcon='bg-[#DCFCE7]'
                            title='Gift'
                            description='Tampilkan daftar hadiah yang diinginkan dan beri tamu pilihan yang mudah untuk memberikan hadiah yang tepat.'
                        />
                        <CardFiturUnggulan
                            icon={<InfoIcon />}
                            bgIcon='bg-[#ECFDF5]'
                            title='Usher'
                            description='Petunjuk lokasi, panduan acara, dan informasi penting lainnya yang akan membantu tamu merasa nyaman'
                        />
                        <CardFiturUnggulan
                            icon={<StreamingIcon />}
                            bgIcon='bg-[#F0FDFA]'
                            title='Live Streaming'
                            description='Bagikan momen istimewa dengan mereka yang tidak bisa hadir melalui streaming langsung'
                        />
                    </div>
                </div>
                :
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true
                    }}
                    modules={[Pagination]}
                    className="swiper"
                >
                    <SwiperSlide>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4  w-full mb-10">
                            <CardFiturUnggulan
                                icon={<BookIcon />}
                                bgIcon='bg-[#FCE7F3]'
                                title='Atur Informasi Event'
                                description='Atur detail acara seperti tanggal, waktu, lokasi, dan deskripsi acara dengan mudah'
                            />
                            <CardFiturUnggulan
                                icon={<GaleryIcon />}
                                bgIcon='bg-[#FAE8FF]'
                                title='Atur Informasi Event'
                                description='Atur detail acara seperti tanggal, waktu, lokasi, dan deskripsi acara dengan mudah'
                            />
                            <CardFiturUnggulan
                                icon={<MusicIcon />}
                                bgIcon='bg-[#F3E8FF]'
                                title='Atur Informasi Event'
                                description='Atur detail acara seperti tanggal, waktu, lokasi, dan deskripsi acara dengan mudah'
                            />
                            <CardFiturUnggulan
                                icon={<PartyIcon />}
                                bgIcon='bg-[#EDE9FE]'
                                title='Atur Informasi Event'
                                description='Atur detail acara seperti tanggal, waktu, lokasi, dan deskripsi acara dengan mudah'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4  w-full mb-10">
                            <CardFiturUnggulan
                                icon={<CustomGuestIcon />}
                                bgIcon='bg-[#CFFAFE]'
                                title='Custom Guest Name'
                                description='Personalisasi undangan dengan nama tamu yang diundang'
                            />
                            <CardFiturUnggulan
                                icon={<ImportGuestIcon />}
                                bgIcon='bg-[#E0F2FE]'
                                title='Import Guest'
                                description='Mudahnya mengimpor daftar tamu memudahkan anda untuk mempersonalisasi undangan'
                            />
                            <CardFiturUnggulan
                                icon={<FormGuestIcon />}
                                bgIcon='bg-[#DBEAFE]'
                                title='Form Guest'
                                description='Persiapkan daftar tamu dengan formulir yang dapat disesuaikan'
                            />
                            <CardFiturUnggulan
                                icon={<QrGuestIcon />}
                                bgIcon='bg-[#E0E7FF]'
                                title='QR Guest'
                                description='Atur detail acara seperti tanggal, waktu, lokasi, dan deskripsi acara dengan mudah'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4  w-full mb-10">
                            <CardFiturUnggulan
                                icon={<BookSaveIcon />}
                                bgIcon='bg-[#ECFCCB]'
                                title='RSVP'
                                description='Tetap terorganisir dengan mengetahui siapa yang datang dengan mudah melalui fitur RSVP'
                            />
                            <CardFiturUnggulan
                                icon={<GiftIcon />}
                                bgIcon='bg-[#DCFCE7]'
                                title='Gift'
                                description='Tampilkan daftar hadiah yang diinginkan dan beri tamu pilihan yang mudah untuk memberikan hadiah yang tepat.'
                            />
                            <CardFiturUnggulan
                                icon={<InfoIcon />}
                                bgIcon='bg-[#ECFDF5]'
                                title='Usher'
                                description='Petunjuk lokasi, panduan acara, dan informasi penting lainnya yang akan membantu tamu merasa nyaman'
                            />
                            <CardFiturUnggulan
                                icon={<StreamingIcon />}
                                bgIcon='bg-[#F0FDFA]'
                                title='Live Streaming'
                                description='Bagikan momen istimewa dengan mereka yang tidak bisa hadir melalui streaming langsung'
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            }
        </section>
    )
}

export default SectionFiturUnggulan