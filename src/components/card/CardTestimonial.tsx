import React from 'react'

function CardTestimonial() {
    return (
        <article className='bg-neutral-50 p-6 rounded-2xl w-full flex flex-col gap-6 mb-10'>
            <div className='flex gap-2'>
                <div className='h-[60px] w-[60px] rounded-full'>
                    <img
                        src='https://as2.ftcdn.net/v2/jpg/02/66/37/27/1000_F_266372725_24BkKqmu7LUJFafS0WOeGtJXKbzVbh9T.jpg'
                        alt=''
                        className='w-full h-full object-cover rounded-full'
                    />
                </div>
                <header>
                    <h3 className='text-neutral-900 text-sm font-semibold'>Arlene McCoy</h3>
                    <p className='font-thin text-neutral-500 text-xs'>2023</p>
                </header>
            </div>
            <p className='text-neutral-800 text-sm'>Aplikasi undangan digital website paling keren sih ini 👍🏻 Proses dari pembelian, pembayaran dan pembuatan undangannya cepat dan mudah. Pilihan tema dan lagunya juga lengkap 😍 mantappp 💫</p>
        </article>
    )
}

export default CardTestimonial