'use client'
import { useState } from 'react'
import Button from './Button'
import Modal from '../modal/Modal'
import { InvoiceType } from '@/type/invoice'
import { getFormatDate } from '@/app/utils/getFormatDate'
import { formatRupiah } from '@/utils/formatRupiah'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface ButtonModalInvoiceProps {
    invoice: InvoiceType
}
function ButtonModalInvoice({ invoice }: ButtonModalInvoiceProps) {
    const [isShowModal, setIsShowModal] = useState(false)
    const router = useRouter();

    function handleSubmit() {
        router.push('https://checkout-staging.xendit.co/v2/6538d16f14903d410ccbaf35')
    }

    return (

        <>
            <Button onClick={() => setIsShowModal(!isShowModal)} size='small' type='Primary'>Detail Invoice</Button>

            <Modal
                
                visible={isShowModal}
                onClose={() => setIsShowModal(false)}
                modalTitle='Transaksi'
                footer={invoice.status === 'Pending' &&
                    <Link href={invoice.invoice_url} target='_blank'>
                        <Button className='w-full m-2'>Bayar Sekarang</Button>
                    </Link>
                }
            >
                <div className='min-h-[450px] w-full flex flex-col relative items-center'>
                    <div className='w-full flex-1 bg-blue-500'></div>
                    <div className='w-full flex-1 bg-white'></div>
                    <div className='h-full px-4 w-[90%] bg-white absolute m-4 rounded-lg shadow-md gap-7 p-7 overflow-scroll'>
                        <div className='flex flex-col items-center p-[10px]'>
                            <svg width="150" height="51" viewBox="0 0 214 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M77.9718 37.3611L69.9718 15.5611C69.6718 14.7111 70.2968 13.8361 71.1968 13.8361H74.7968C76.1968 13.8361 77.4468 14.7111 77.8968 16.0361L84.7468 35.3361C84.7134 35.3695 84.7051 35.4028 84.7218 35.4361C84.7384 35.4695 84.7884 35.4861 84.8718 35.4861C84.9384 35.4861 84.9884 35.4695 85.0218 35.4361C85.0718 35.4028 85.0718 35.3695 85.0218 35.3361L91.8218 16.0361C92.2718 14.7111 93.5218 13.8361 94.9468 13.8361H98.5218C99.4218 13.8361 100.047 14.7111 99.7468 15.5611L91.6468 37.3611C90.9968 39.0611 90.1051 40.3445 88.9718 41.2111C87.8551 42.0611 86.4884 42.4861 84.8718 42.4861C83.2884 42.4861 81.9051 42.0611 80.7218 41.2111C79.5384 40.3445 78.6218 39.0611 77.9718 37.3611Z" fill="#0C0C0C" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M117.022 42.4361C114.155 42.4361 111.597 41.7695 109.347 40.4361C107.08 39.1028 105.28 37.3278 103.947 35.1111C102.613 32.8778 101.947 30.4111 101.947 27.7111C101.947 24.9945 102.613 22.5361 103.947 20.3361C105.28 18.1361 107.088 16.3778 109.372 15.0611C111.655 13.7445 114.205 13.0861 117.022 13.0861C119.888 13.0861 122.447 13.7445 124.697 15.0611C126.947 16.3778 128.73 18.1445 130.047 20.3611C131.363 22.5945 132.022 25.0445 132.022 27.7111C132.022 30.4111 131.363 32.8778 130.047 35.1111C128.73 37.3278 126.938 39.1028 124.672 40.4361C122.388 41.7695 119.838 42.4361 117.022 42.4361ZM117.022 35.5611C118.522 35.5611 119.847 35.2111 120.997 34.5111C122.147 33.8111 123.063 32.8695 123.747 31.6861C124.413 30.5028 124.747 29.1945 124.747 27.7611C124.747 26.3278 124.413 25.0195 123.747 23.8361C123.063 22.6528 122.147 21.7028 120.997 20.9861C119.847 20.2695 118.522 19.9111 117.022 19.9111C115.555 19.9111 114.238 20.2695 113.072 20.9861C111.905 21.7028 110.98 22.6528 110.297 23.8361C109.63 25.0195 109.297 26.3278 109.297 27.7611C109.297 29.1945 109.63 30.5028 110.297 31.6861C110.98 32.8695 111.905 33.8111 113.072 34.5111C114.238 35.2111 115.555 35.5611 117.022 35.5611Z" fill="#0C0C0C" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M150.722 42.4361C147.855 42.4361 145.297 41.7695 143.047 40.4361C140.78 39.1028 138.98 37.3278 137.647 35.1111C136.313 32.8778 135.647 30.4111 135.647 27.7111C135.647 24.9945 136.313 22.5361 137.647 20.3361C138.98 18.1361 140.788 16.3778 143.072 15.0611C145.338 13.7445 147.888 13.0861 150.722 13.0861C153.572 13.0861 156.13 13.7445 158.397 15.0611C160.647 16.3778 162.43 18.1445 163.747 20.3611C165.063 22.5945 165.722 25.0445 165.722 27.7111C165.722 30.4111 165.063 32.8778 163.747 35.1111C162.43 37.3278 160.638 39.1028 158.372 40.4361C156.088 41.7695 153.538 42.4361 150.722 42.4361ZM150.722 35.5611C152.222 35.5611 153.547 35.2111 154.697 34.5111C155.847 33.8111 156.755 32.8695 157.422 31.6861C158.105 30.5028 158.447 29.1945 158.447 27.7611C158.447 26.3278 158.105 25.0195 157.422 23.8361C156.755 22.6528 155.847 21.7028 154.697 20.9861C153.547 20.2695 152.222 19.9111 150.722 19.9111C149.255 19.9111 147.938 20.2695 146.772 20.9861C145.605 21.7028 144.68 22.6528 143.997 23.8361C143.313 25.0195 142.972 26.3278 142.972 27.7611C142.972 29.1945 143.313 30.5028 143.997 31.6861C144.68 32.8695 145.605 33.8111 146.772 34.5111C147.938 35.2111 149.255 35.5611 150.722 35.5611Z" fill="#0C0C0C" />
                                <path d="M179.922 42.4861C178.938 42.4861 177.972 42.2861 177.022 41.8861C176.088 41.4695 175.272 40.8361 174.572 39.9861C173.872 39.1361 173.372 38.0695 173.072 36.7861L167.997 15.2111C167.822 14.4861 168.347 13.8361 169.072 13.8361H172.047C173.472 13.8361 174.722 14.8111 175.047 16.2111L179.397 35.4361C179.447 35.5528 179.497 35.6361 179.547 35.6861C179.597 35.7528 179.697 35.7861 179.847 35.7861C179.997 35.7861 180.097 35.7528 180.147 35.6861C180.18 35.6361 180.197 35.5695 180.197 35.4861L184.472 18.7361C184.972 16.8528 185.763 15.4445 186.847 14.5111C187.947 13.5611 189.322 13.0861 190.972 13.0861C192.622 13.0861 193.98 13.5445 195.047 14.4611C196.097 15.3945 196.863 16.8028 197.347 18.6861L201.597 35.4861C201.63 35.6028 201.663 35.6945 201.697 35.7611C201.73 35.8111 201.822 35.8361 201.972 35.8361C202.122 35.8361 202.23 35.8111 202.297 35.7611C202.347 35.6945 202.372 35.5861 202.372 35.4361L206.597 16.2361C206.897 14.8361 208.147 13.8361 209.597 13.8361H212.497C213.197 13.8361 213.747 14.4861 213.572 15.1861L208.697 36.7861C208.43 38.0695 207.947 39.1361 207.247 39.9861C206.563 40.8361 205.747 41.4695 204.797 41.8861C203.863 42.2861 202.905 42.4861 201.922 42.4861C200.338 42.4861 199.005 42.0195 197.922 41.0861C196.822 40.1528 196.03 38.7445 195.547 36.8611L191.247 19.6861C191.247 19.6195 191.222 19.5445 191.172 19.4611C191.122 19.3945 191.038 19.3611 190.922 19.3611C190.772 19.3611 190.68 19.3945 190.647 19.4611C190.597 19.5445 190.572 19.6195 190.572 19.6861L186.297 36.8611C185.797 38.7445 185.005 40.1528 183.922 41.0861C182.822 42.0195 181.488 42.4861 179.922 42.4861Z" fill="#0C0C0C" />
                                <path d="M57.9965 10.7111C50.5465 22.7611 41.7465 36.9362 35.6715 46.7362C32.9465 51.1362 26.5215 51.1362 23.7715 46.7362C16.3382 34.7362 8.90483 22.7278 1.4715 10.7111C-1.9285 5.23614 3.2715 -1.53886 9.4715 0.336143C11.7465 1.01114 14.1965 1.63614 16.7715 2.11114C20.2215 2.76114 22.7215 5.81114 22.7215 9.33614V20.2111C22.7215 24.0111 25.6715 27.2361 29.4715 27.3861C33.4715 27.5111 36.7465 24.3362 36.7465 20.3612V9.33614C36.7465 5.81114 39.2215 2.76114 42.6965 2.11114C45.2715 1.63614 47.7215 1.01115 50.0215 0.311149C56.1965 -1.53885 61.3965 5.23614 57.9965 10.7111Z" fill="url(#paint0_linear_2185_4374)" />
                                <defs>
                                    <linearGradient id="paint0_linear_2185_4374" x1="62.8465" y1="-5.91385" x2="48.1715" y2="63.8112" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.115" stop-color="#00C1FF" />
                                        <stop offset="1" stop-color="#0061FF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className='flex justify-between'>
                            <span className=' text-neutral-400'>{getFormatDate(invoice.created_at, 'ddd,DD-MM-YYYY')}</span>
                            <span className='flex-1 text-right text-blue-500'>{invoice.invoice}</span>
                        </div>
                        <div className='flex flex-col items-center gap-3 border-y-[0.5px] border-neutral-400 py-4 my-4'>
                            <h4>Total Bayar</h4>
                            <p className='font-semibold text-3xl text-blue-500'>{formatRupiah(invoice.price_total)}</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex justify-between'>
                                <h5>Pemesan</h5>
                                <p className=' font-semibold'>{invoice.email}</p>
                            </div>
                            <div className='flex justify-between'>
                                <h5>Nama Paket</h5>
                                <p className=' font-semibold'>Silver</p>
                            </div>
                            <div className='flex justify-between'>
                                <h5>Masa Aktif</h5>
                                <p className=' font-semibold'>1 Bulan</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 border-y-[0.5px] border-neutral-400 py-4 my-4'>
                            <h2 className='text-lg font-semibold'>Rincian Pembayaran</h2>
                            <div className='flex justify-between'>
                                <h5>Harga Paket</h5>
                                <p className=' font-semibold'>{formatRupiah(invoice.price)}</p>
                            </div>
                            <div className='flex justify-between'>
                                <h5>Kupon</h5>
                                <p className=' font-semibold'>-</p>
                            </div>
                            <div className='flex justify-between'>
                                <h5>Admin</h5>
                                <p className=' font-semibold'>{formatRupiah(invoice.admin_price)}</p>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <h2 className='text-lg font-semibold'>Total Pembayaran</h2>
                            <p className='text-lg font-semibold'>{formatRupiah(invoice.price_total)}</p>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ButtonModalInvoice