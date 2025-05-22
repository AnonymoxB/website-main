import Image from 'next/image'

import SectionFiturUnggulan from './SectionFiturUnggulan'
import SectionTestimoni from './SectionTestimoni'
import SectionBlog from './SectionBlog'
import SectionFiturPembayaran from './SectionFiturPembayaran'
import SectionHero from './SectionHero'
import SectionTema from './SectionTema'
import SectionGetStarted from './SectionGetStarted'
import SectionAskQuestion from './price/SectionAskQuestion'



export default async function Home() {

  return (
    <div className='flex flex-col items-center my-4 mx-auto'>
      <SectionHero />
      <SectionTema />
      <div className='bg-gradient-to-r from-gradient-blue-start to-gradient-blue-end w-full'>
        <section className='container mx-auto flex flex-wrap items-center justify-between w-full px-4 gap-2 lg:px-20 py-6 md:py-10 lg:py-16'>
          <Image
            className="order-1 md:order-2 max-w-[800px]"
            src='/assets/image/phone.png'
            width={328}
            height={538}
            alt='phone'
          />
          <div className='order-2 md:order-1 flex flex-col justify-center flex-1 min-w-[300px] max-w-[800px] gap-2'>
            <h2 className='text-neutral-50 text-xl md:text-3xl lg:text-3xl font-semibold max-w-[558px]'>
              Lebih Praktis dan Efisien
            </h2>
            <p className='text-neutral-50 text-sm md:text-base'>Tidak perlu khawatir dalam mendesain undangan karena kami menawarkan berbagai macam pilihan tema gratis dan premium untuk memenuhi preferensi Anda</p>
          </div>
        </section>
      </div>
      <SectionFiturUnggulan />
      <section className='bg-gradient-to-r from-gradient-blue-start to-gradient-blue-end w-full '>
        <div className='container mx-auto justify-between lg:py-20 py-10 px-4 lg:px-20 w-full flex lg:flex-row flex-col gap-y-[50px] items-center gap-x-[139px] '>
          <div className="flex-1">
            <Image
              src='/assets/image/image-sound-costum.png'
              width={1000}
              height={1000}
              className='w-full h-full object-contain'
              alt='image-sound-costum'
            />
          </div>
          <div className="flex flex-col flex-1 gap-x-7 gap-y-[10px]">
            <h2 className='text-neutral-50 text-xl font-semibold md:text-2xl lg:text-4xl'>Ratusan Pilihan Music Latar & Bisa Custom</h2>
            <p className='text-md'>
              Tersedia lebih dari 600 music latar untuk beragam kategori undangan.
              Kamu juga bisa custom music sendiri dari Sound Cloud.
            </p>
          </div>
        </div>
      </section>
      <section className='flex lg:flex-row flex-col gap-y-[50px] w-full items-center container p-4 lg:py-20 py-10 gap-x-[139px] lg:gap-x-[10px] lg:px-20'>
        <div className="flex flex-col flex-1 gap-x-7 lg:order-1 order-2 gap-y-[10px]">
          <h2 className='bg-gradient-to-b bg-clip-text text-transparent from-gradient-blue-start to-gradient-blue-end py-2 font-bold text-xl md:text-2xl lg:text-4xl'>QR Code Check-in Acara</h2>
          <p className='text-neutral-900 text-sm md:text-base lg:text-lg'>Buat undangan digital yang exclusive untuk masing-masing tamu. Dengan fitur QR Code untuk filter tamu yang datang. Scan QR Code untuk memastikan tamu terdaftar.</p>
        </div>
        <div className="flex-1 lg:order-2 order-1">
          <Image
            src='/assets/image/image-qrcode4.png'
            width={1000}
            height={1000}
            className='w-full h-full object-contain'
            alt='image-qrcode'
          />
        </div>
      </section>
      <section className='w-full bg-neutral-200'>
        <div className='flex lg:flex-row justify-between flex-col w-full items-center container gap-x-[139px] mx-auto gap-[50px] p-4 lg:py-20 py-10 lg:px-20'>
          <div className="flex-1">
            <Image
              src='/assets/image/image-invite-tamu.png'
              width={1000}
              height={1000}
              className='w-full h-full object-contain'
              alt='image-invite-tamu'
            />
          </div>
          <div className="flex flex-col flex-1 lg:gap-7">
            <h2 className='lg:text-4xl text-xl font-bold text-neutral-900 flex flex-col'>Bebas Input Nama Tamu <span className='bg-gradient-to-b bg-clip-text text-transparent from-gradient-blue-start to-gradient-blue-end'>Sebanyak-banyaknya</span></h2>
            <p className='text-md text-neutral-800'>
              Tersedia lebih dari 600 music latar untuk beragam kategori undangan.
              Kamu juga bisa custom music sendiri dari Sound Cloud.
            </p>
          </div>
        </div>
      </section>
      <section className='lg:py-20 w-full container lg:px-20'>
        <div className='bg-gradient-to-r lg:rounded-md from-gradient-blue-start to-gradient-blue-end lg:py-[45px] py-5 lg:px-[50px] px-4 lg:rounded-tr-[150px]'>
          <div className='lg:px-[60px] lg:py-5 py-[10px] gap-10 flex lg:flex-col flex-col'>
            <div className='flex flex-col gap-[21px]'>
              <h2 className='lg:text-4 text-xl font-bold'>Kini Kamu bisa buat undangan digital hanya dengan 3 langkah mudah</h2>
              <p className='lg:text-lg text-md'>Aplikasi undangan digital website online yang didesain khusus sehingga kamu dapat menggunakannya dengan mudah cukup 3 langkah sederhana untuk mewujudkan undangan website impian kamu.</p>
            </div>
            <div className='grid lg:grid-cols-3 grid-col-1 gap-x-[55px] gap-y-[30px] lg:px-0 px-9'>
              <div className='flex flex-col gap-4 lg:items-start items-center'>
                <span className='w-[60px] h-[60px] text-2xl font-semibold bg-neutral-50 text-blue-500 rounded-full flex items-center justify-center'>1</span>
                <h5 className='text-xl font-semibold'>Pilih Tema Undangan</h5>
                <p className='text-sm text-center'>Telusuri koleksi tema undangan website kami dan pilih salah satu yang paling sesuai dari ratusan template yang berbeda dan kreatif.</p>
              </div>
              <div className='flex flex-col gap-4 lg:items-start items-center'>
                <span className='w-[60px] h-[60px] text-2xl font-semibold bg-neutral-50 text-blue-500 rounded-full flex items-center justify-center'>2</span>
                <h5 className='text-xl font-semibold'>Edit Data Undangan</h5>
                <p className='text-sm text-center'>Edit dan sesuaikan tema undangan dengan smart editor Voow. Dalam beberapa klik, Kamu akan mendapatkan desain yang ideal!</p>
              </div>
              <div className='flex flex-col gap-4 lg:items-start items-center'>
                <span className='w-[60px] h-[60px] text-2xl font-semibold bg-neutral-50 text-blue-500 rounded-full flex items-center justify-center'>3</span>
                <h5 className='text-xl font-semibold'>Kirim dan Pantau</h5>
                <p className='text-sm text-center'>Undangan online buatanmu siap untuk dibagikan kepada tamu undangan dan buat semua orang terkesima.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionTestimoni />
      <SectionGetStarted />
      <SectionFiturPembayaran />
      <SectionBlog />
      <SectionAskQuestion />
    </div>
  )
}
