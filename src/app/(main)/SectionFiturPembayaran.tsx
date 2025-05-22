import CardPembayaran from '@/components/card/CardPembayaran'
import React from 'react'

function SectionFiturPembayaran() {
    return (
        <div className='bg-slate-200 w-full flex justify-center'>
            <section className='container w-full py-6 md:py-10 lg:py-16 px-4 lg:px-20'>
                <div className='flex flex-col md:flex-row w-full gap-4 md:gap-8'>
                    <div className='order-1 md:order-2 flex flex-col gap-2 md:w-1/2 justify-center'>
                        <h1 className='flex flex-col text-xl md:text-3xl font-semibold text-blue-500 gap-2'>Pembayaran</h1>
                        <p className='text-neutral-600 text-sm md:text-base'>Kami menyediakan beragam pembayaran untuk memudahkan anda dalam menggunakan VOOW</p>
                    </div>
                    <div className='order-2 md:order-1 flex flex-wrap gap-2'>
                        <div className='md:max-w-[340px] w-full flex flex-col gap-2'>
                            <h1 className='flex flex-col text-lg font-semibold text-neutral-700 gap-2'>Bank Transfer:</h1>
                            <div className='flex flex-wrap gap-2'>
                                {/* h 80px, w 104px */}
                                <CardPembayaran src='/assets/logo/mandiri.png' alt='mandiri' />
                                <CardPembayaran src='/assets/logo/bca.png' alt='bca' />
                                <CardPembayaran src='/assets/logo/bri.png' alt='bri' />
                                <CardPembayaran src='/assets/logo/bni.png' alt='bni' />
                                <CardPembayaran src='/assets/logo/bank-permata.png' alt='permata' />
                                <CardPembayaran src='/assets/logo/cimb-niaga.png' alt='cimb' />
                            </div>
                        </div>
                        <div className='md:max-w-[224px] w-full flex flex-col gap-2'>
                            <h1 className='flex flex-col text-lg font-semibold text-neutral-700 gap-2'>Outlet:</h1>
                            <div className='flex flex-wrap gap-2'>
                                {/* h 80px, w 104px */}
                                <CardPembayaran src='/assets/logo/alfamart.png' alt='alfamart' />
                                <CardPembayaran src='/assets/logo/indomaret.png' alt='indomaret' />
                            </div>
                        </div>
                        <div className='md:max-w-[572px] w-full flex flex-col gap-2'>
                            <h1 className='flex flex-col text-lg font-semibold text-neutral-700 gap-2'>Ewallet:</h1>
                            <div className='flex flex-wrap gap-2'>
                                {/* h 80px, w 104px */}
                                <CardPembayaran src='/assets/logo/ovo.png' alt='ovo' />
                                <CardPembayaran src='/assets/logo/shopee-pay.png' alt='shopeepay' />
                                <CardPembayaran src='/assets/logo/link-aja.png' alt='linkaja' />
                                <CardPembayaran src='/assets/logo/dana.png' alt='dana' />
                                <CardPembayaran src='/assets/logo/qris.png' alt='qris' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SectionFiturPembayaran